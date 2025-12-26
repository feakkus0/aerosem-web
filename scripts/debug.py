import requests
from bs4 import BeautifulSoup

# HEDEF: Senin verdiğin ve çalışan Bonderite sayfası
URL = "https://www.aerosem.com.tr/urunler.html"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124 Safari/537.36"
}

def analyze_site():
    print(f"🕵️  Site Analiz Ediliyor: {URL}")
    
    try:
        response = requests.get(URL, headers=HEADERS)
        print(f"📡  Sunucu Durum Kodu: {response.status_code}")
        
        if response.status_code != 200:
            print("❌  Siteye erişilemedi! (Engellenmiş olabilir veya adres yanlış)")
            return

        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Sayfa Başlığını Yazdır (Doğru yerde miyiz?)
        print(f"📄  Sayfa Başlığı: {soup.title.string.strip() if soup.title else 'Yok'}")
        
        print("\n--- HTML YAPI ANALİZİ ---")
        
        # 1. Ürün olabilecek yapıları ara
        # Genelde ürünler 'li' veya 'div' içinde olur. En çok tekrar eden classları bulalım.
        
        print("🔎  Potansiyel Ürün Kutusu Adayları:")
        
        # 'product' kelimesi geçen tüm classları bul
        product_classes = set()
        for tag in soup.find_all(class_=True):
            for cls in tag['class']:
                if 'product' in cls or 'item' in cls or 'column' in cls:
                    product_classes.add(f"{tag.name}.{cls}")
        
        if product_classes:
            for pc in list(product_classes)[:10]: # İlk 10 tanesini göster
                count = len(soup.select(pc))
                print(f"    - {pc} (Sayfada {count} adet bulundu)")
        else:
            print("    ⚠️ 'product', 'item' veya 'column' içeren belirgin bir class bulunamadı.")

        print("\n--- ÖRNEK HTML KODU (İlk 1000 Karakter) ---")
        # HTML'in body kısmının başını görelim ki yapıyı anlayalım
        body = soup.body
        if body:
            print(body.prettify()[:1000])
        else:
            print("Body etiketi bulunamadı.")

    except Exception as e:
        print(f"💥 Hata oluştu: {e}")

if __name__ == "__main__":
    analyze_site()