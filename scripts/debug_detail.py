import requests
from bs4 import BeautifulSoup

# Hedef: Ekran görüntüsündeki o spesifik sayfa
URL = "https://www.aerosem.com.tr/b871.html"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

def analyze_detail_page():
    print(f"🕵️  Detay Sayfası İnceleniyor: {URL}")
    
    try:
        response = requests.get(URL, headers=HEADERS)
        print(f"📡  Durum Kodu: {response.status_code}")
        
        if response.status_code != 200:
            print("❌  Sayfaya girilemedi!")
            return

        soup = BeautifulSoup(response.content, 'html.parser')

        # Gereksizleri temizle
        for tag in soup(["script", "style", "nav", "footer"]):
            tag.extract()

        print("\n--- BULUNAN METİN ADAYLARI (Uzunluk Sırasına Göre) ---")
        
        # Sayfadaki tüm anlamlı metin bloklarını bul
        candidates = []
        for tag in soup.find_all(['p', 'div', 'span', 'li']):
            # Sadece direkt metin içerenleri al (iç içe geçmişleri önlemek için)
            text = tag.get_text(" ", strip=True)
            if len(text) > 40: # 40 karakterden kısa şeyleri (başlık, menu vb.) atla
                candidates.append({
                    "tag": tag.name,
                    "class": tag.get('class'),
                    "length": len(text),
                    "text": text[:100] + "..." # Sadece başını göster
                })

        # Uzunluğa göre sırala (En uzun en üstte)
        candidates.sort(key=lambda x: x['length'], reverse=True)

        # İlk 10 adayı yazdır
        if not candidates:
            print("⚠️  Hiç uzun metin bulunamadı. Site JavaScript ile yükleniyor olabilir mi?")
        else:
            for i, c in enumerate(candidates[:10]):
                print(f"{i+1}. [Tag: {c['tag']}] [Class: {c['class']}] [Uzunluk: {c['length']}]")
                print(f"   İçerik: {c['text']}\n")

    except Exception as e:
        print(f"💥 Hata: {e}")

if __name__ == "__main__":
    analyze_detail_page()