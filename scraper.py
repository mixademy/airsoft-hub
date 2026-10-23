import json
import requests
from bs4 import BeautifulSoup
import datetime

# Úgy teszünk, mintha egy valódi böngésző lennénk, hogy elkerüljük a tiltást
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7"
}

def scrape_shop_category(url, shop_name):
    products = []
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # FIGYELEM: A 'product-card', 'product-title' stb. class neveket 
        # az adott webshop (Taiwangun, Gunfire) valós forráskódjából kell kinézned (F12 - Inspect)!
        items = soup.find_all('div', class_='product-card') # Cseréld a valós class-ra
        
        for item in items[:4]: # Csak az első 4-et vesszük, hogy jól mutasson a gridben
            # Név kinyerése
            name_elem = item.find('h3', class_='product-title')
            name = name_elem.text.strip() if name_elem else "Ismeretlen termék"
            
            # Ár kinyerése
            price_elem = item.find('span', class_='price')
            price = price_elem.text.strip() if price_elem else "0 Ft"
            
            # Link kinyerése
            link_elem = item.find('a')
            url_link = link_elem['href'] if link_elem else "#"
            if url_link.startswith('/'): # Relatív linkek javítása
                url_link = f"https://www.valos-shop-domain.com{url_link}"
                
            # Kép kinyerése
            img_elem = item.find('img')
            img_src = img_elem['src'] if img_elem else "helyettesito.jpg"
            
            products.append({
                "name": name,
                "shop": shop_name,
                "price": price,
                "image": img_src,
                "url": url_link
            })
            
    except Exception as e:
        print(f"Hiba a(z) {shop_name} ({url}) lekérésekor: {e}")
        
    return products

def run_scraper():
    print(f"[{datetime.datetime.now()}] Adatgyűjtés elindítva...")
    
    # Itt határozod meg, honnan mit szedjen le. 
    # Mivel minden webshop más, külön-külön be kell majd állítanod a kinyerési logikát.
    scraped_data = {
        "legnepszerubb": [
            # Fallback statikus adat, ha a scraper nem találna semmit
            {
                "name": "BLS 0.25g BB (1kg)",
                "shop": "AIRSOFTGURU",
                "price": "4 500 Ft",
                "image": "https://www.airsoftguru.hu/custom/airsoftguru/image/cache/w900h500wt1/product/Lovedekek/BLS-0-25-1kg.jpg", 
                "url": "https://airsoftguru.hu"
            },
            {
                "name": "Odin Innovations M1 Speedloader",
                "shop": "AIRSOFTPRO",
                "price": "18 000 Ft",
                "image": "https://airsoftpro.cz/fotocache/bigorig/202102/odin-m1-blk-1.jpg", 
                "url": "https://airsoftpro.cz"
            }
        ],
        "akcios": [],
        "kezdo": [],
        "fegyverek": [],
        "aap01": [],
        "ruhazat": []
    }
    
    # PÉLDA egy valós hívásra (ezt neked kell majd élesítened a valós URL-ekkel és class-okkal):
    # scraped_data["akcios"] = scrape_shop_category('https://www.taiwangun.com/hu/akcios', 'TAIWANGUN')

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(scraped_data, f, ensure_ascii=False, indent=4)
        
    print("Adatgyűjtés befejezve, products.json frissítve.")