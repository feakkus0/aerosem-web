import os
import json
import requests
import re
import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# --- ÖNEMLİ DÜZELTME: DOSYA YOLLARI ---
# Script nerede çalıştırılırsa çalıştırılsın, yolları script dosyasının konumuna göre ayarlar.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# Script 'scripts' klasöründe olduğu için bir üstü proje ana dizinidir ('..')
OUTPUT_JSON_PATH = os.path.join(SCRIPT_DIR, "..", "data", "products.json")
OUTPUT_IMAGE_DIR = os.path.join(SCRIPT_DIR, "..", "public", "images", "products")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5"
}

def create_slug(text):
    text = text.lower()
    mapping = {'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c', 'İ': 'i', 'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'Ö': 'o', 'Ç': 'c'}
    for k, v in mapping.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

def setup_directories():
    os.makedirs(os.path.dirname(OUTPUT_JSON_PATH), exist_ok=True)
    os.makedirs(OUTPUT_IMAGE_DIR, exist_ok=True)

def download_image(img_url, slug):
    if not img_url: return None
    try:
        if not img_url.startswith("http"):
            img_url = urljoin("https://www.aerosem.com.tr/", img_url)
        img_url = img_url.replace(" ", "%20")
        parsed = urlparse(img_url)
        ext = os.path.splitext(parsed.path)[1] or ".jpg"
        filename = f"{slug}{ext}"
        local_path = os.path.join(OUTPUT_IMAGE_DIR, filename)
        
        if not os.path.exists(local_path):
            response = requests.get(img_url, headers=HEADERS, stream=True)
            if response.status_code == 200:
                with open(local_path, 'wb') as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
        return f"/images/products/{filename}"
    except:
        return None

def clean_text(text):
    if not text: return ""
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def fetch_detail_text(product_url):
    if not product_url: return None
    full_url = urljoin("https://www.aerosem.com.tr/", product_url)

    try:
        time.sleep(0.1) 
        response = requests.get(full_url, headers=HEADERS, timeout=10)
        if response.status_code != 200: return None

        soup = BeautifulSoup(response.content, 'html.parser')

        for tag in soup(["script", "style", "nav", "footer", "header", "noscript", "svg"]):
            tag.extract()

        candidates = []

        # HEDEF 1: u-container-layout
        target_divs = soup.find_all('div', class_='u-container-layout')
        for div in target_divs:
            text = clean_text(div.get_text(" "))
            if len(text) > 60 and "Copyright" not in text:
                candidates.append(text)

        # HEDEF 2: u-text
        target_ps = soup.find_all('p', class_=lambda x: x and 'u-text' in x)
        for p in target_ps:
            text = clean_text(p.get_text(" "))
            if len(text) > 60:
                candidates.append(text)

        # HEDEF 3: Fallback
        if not candidates:
            for tag in soup.find_all(['p', 'div']):
                text = clean_text(tag.get_text(" "))
                if len(text) > 80 and "Copyright" not in text and "Ana Sayfa" not in text:
                    candidates.append(text)

        if candidates:
            return max(candidates, key=len)

        return None

    except Exception as e:
        print(f"      Hata: {e}")
        return None

def scrape_aerosem_final():
    print("🚀 Final Scraper (Path Fixed) Başlatılıyor...")
    print(f"📂 Hedef Klasör: {OUTPUT_JSON_PATH}") # Nereye kaydettiğini görelim
    
    all_products = []
    
    targets = [
        {"url": "https://www.aerosem.com.tr/urunler.html", "cat": "aviation", "subcat": "Bonderite"},
        {"url": "https://www.aerosem.com.tr/urunlerl.html", "cat": "aviation", "subcat": "Loctite"},
        {"url": "https://www.aerosem.com.tr/urunlerm.html", "cat": "aviation", "subcat": "MagClean"},
        {"url": "https://www.aerosem.com.tr/urunlery.html", "cat": "general", "subcat": "General Chemicals"}
    ]

    for target in targets:
        print(f"\n📂 Kategori: {target['subcat'].upper()}...")
        
        try:
            response = requests.get(target['url'], headers=HEADERS)
            soup = BeautifulSoup(response.content, 'html.parser')
            potential_items = soup.select('div[class*="u-list-item"], div[class*="u-repeater-item"]')
            
            for item in potential_items:
                link_tag = item.find('a')
                if not link_tag: continue
                product_href = link_tag.get('href')
                
                title_tag = item.find(['h4', 'h5', 'h6', 'h3'])
                if not title_tag: title_tag = item.find(class_=lambda x: x and 'u-text' in x)
                if not title_tag: continue
                
                title = clean_text(title_tag.get_text())
                if len(title) < 2: continue
                slug = create_slug(title)
                
                if any(p['id'] == slug for p in all_products): continue

                img_tag = item.find('img')
                img_src = img_tag.get('src') or img_tag.get('data-src') if img_tag else None
                local_img = download_image(img_src, slug)

                print(f"   🔎 {title[:25]}... ->", end=" ")
                real_desc = fetch_detail_text(product_href)
                
                final_desc = ""
                if real_desc:
                    print("✅ GÜNCELLENDİ") 
                    final_desc = real_desc
                else:
                    print("⚠️ STANDART")
                    final_desc = f"High performance {title} product designed for industrial applications. Please contact us for Technical Data Sheet (TDS)."

                all_products.append({
                    "id": slug,
                    "name": title,
                    "category": target['cat'],
                    "subcategory": target['subcat'],
                    "description": final_desc,
                    "image": local_img or "/images/placeholder.jpg",
                })

        except Exception as e:
            print(f"❌ Kategori Hatası: {e}")

    with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(all_products, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ İŞLEM TAMAM: {len(all_products)} ürün DOĞRU KONUMA kaydedildi.")

if __name__ == "__main__":
    setup_directories()
    scrape_aerosem_final()