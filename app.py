import os
import json
import urllib.parse
import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
import concurrent.futures

# Cseréld le erre, ha a scraper.py-t használod a napi frissítéshez
# from scraper import run_scraper

app = Flask(__name__, static_folder='static', static_url_path='')

# Álcázott fejléc, hogy ne kapjunk azonnal bot-tiltást
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
}

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/products')
def get_products():
    try:
        with open('products.json', 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    except FileNotFoundError:
        return jsonify({})

# --- WEBÁRUHÁZ SPECIFIKUS KERESŐ FÜGGVÉNYEK ---

def search_airsoftplaza(query):
    results = []
    try:
        url = f"https://airsoftplaza.hu/?s={urllib.parse.quote_plus(query)}&post_type=product"
        resp = requests.get(url, headers=HEADERS, timeout=5)
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        for item in soup.find_all('li', class_='product')[:4]:
            title = item.find('h2', class_='woocommerce-loop-product__title')
            price = item.find('span', class_='woocommerce-Price-amount')
            link = item.find('a', class_='woocommerce-LoopProduct-link')
            img = item.find('img')
            
            if title and link:
                results.append({
                    "name": title.text.strip(),
                    "shop": "AIRSOFTPLAZA",
                    "price": price.text.strip() if price else "Nincs ár",
                    "url": link['href'],
                    "image": img['src'] if img else ""
                })
    except Exception as e: print(f"Airsoftplaza hiba: {e}")
    return results

def search_airsoftguru(query):
    results = []
    try:
        url = f"https://airsoftguru.hu/kereses?controller=search&s={urllib.parse.quote_plus(query)}"
        resp = requests.get(url, headers=HEADERS, timeout=5)
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        for item in soup.find_all('article', class_='product-miniature')[:4]:
            title = item.find('h3', class_='h3 product-title')
            price = item.find('span', class_='price')
            link = item.find('a', class_='thumbnail product-thumbnail')
            img = link.find('img') if link else None
            
            if title and link:
                results.append({
                    "name": title.text.strip(),
                    "shop": "AIRSOFTGURU",
                    "price": price.text.strip() if price else "Nincs ár",
                    "url": link['href'],
                    "image": img['src'] if img else ""
                })
    except Exception as e: print(f"Airsoftguru hiba: {e}")
    return results

def search_catus(query):
    results = []
    try:
        url = f"https://catus.hu/kereses?search={urllib.parse.quote_plus(query)}"
        resp = requests.get(url, headers=HEADERS, timeout=5)
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        for item in soup.find_all('div', class_='product-box')[:4]:
            title = item.find('a', class_='product-title')
            price = item.find('div', class_='price')
            img = item.find('img', class_='img-fluid')
            
            if title:
                # A Catus relatív linkeket használ, ki kell egészíteni
                link_href = title['href']
                if not link_href.startswith('http'):
                    link_href = f"https://catus.hu{link_href}"
                    
                results.append({
                    "name": title.text.strip(),
                    "shop": "CATUS",
                    "price": price.text.strip() if price else "Nincs ár",
                    "url": link_href,
                    "image": img['src'] if img else ""
                })
    except Exception as e: print(f"Catus hiba: {e}")
    return results

def search_taiwangun(query):
    results = []
    try:
        url = f"https://www.taiwangun.com/hu/search?s={urllib.parse.quote_plus(query)}"
        resp = requests.get(url, headers=HEADERS, timeout=5)
        
        # Ha 403-at kapunk, a Cloudflare megfogta a kérést
        if resp.status_code == 403:
            print("Taiwangun Cloudflare blokkolas!")
            return results
            
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        for item in soup.find_all('div', class_='product-card')[:4]:
            title = item.find('a', class_='product-name')
            price = item.find('span', class_='price')
            link = item.find('a', class_='product-name')
            img = item.find('img')
            
            if title and link:
                results.append({
                    "name": title.text.strip(),
                    "shop": "TAIWANGUN",
                    "price": price.text.strip() if price else "Nincs ár",
                    "url": link['href'],
                    "image": img['src'] if img else ""
                })
    except Exception as e: print(f"Taiwangun hiba: {e}")
    return results

def search_anareus(query):
    results = []
    try:
        url = f"https://www.anareus.cz/gb/search?s={urllib.parse.quote_plus(query)}"
        resp = requests.get(url, headers=HEADERS, timeout=5)
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        for item in soup.find_all('article', class_='product-miniature')[:4]:
            title = item.find('h3', class_='h3 product-title')
            price = item.find('span', class_='price')
            link = item.find('a', class_='thumbnail product-thumbnail')
            img = link.find('img') if link else None
            
            if title and link:
                results.append({
                    "name": title.text.strip(),
                    "shop": "ANAREUS",
                    "price": price.text.strip() if price else "Nincs ár",
                    "url": link['href'],
                    "image": img['src'] if img else ""
                })
    except Exception as e: print(f"Anareus hiba: {e}")
    return results

@app.route('/api/search')
def live_search():
    query = request.args.get('q', '')
    shop_filter = request.args.get('shop', '').lower()
    
    if len(query) < 2:
        return jsonify([])

    all_results = []
    
    # A funkciók listája (Szűrés esetén csak a megfelelőt futtatjuk)
    search_tasks = []
    
    if not shop_filter or shop_filter == "airsoftplaza":
        search_tasks.append(search_airsoftplaza)
    if not shop_filter or shop_filter == "airsoftguru":
        search_tasks.append(search_airsoftguru)
    if not shop_filter or shop_filter == "catus":
        search_tasks.append(search_catus)
    if not shop_filter or shop_filter == "taiwangun":
        search_tasks.append(search_taiwangun)
    if not shop_filter or shop_filter == "anareus":
        search_tasks.append(search_anareus)

    # Párhuzamosított futtatás (Többszálúság) a gyorsaság érdekében
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        # Elindítjuk az összes szükséges keresőt egyszerre
        future_to_shop = {executor.submit(task, query): task for task in search_tasks}
        
        for future in concurrent.futures.as_completed(future_to_shop):
            try:
                shop_results = future.result()
                all_results.extend(shop_results)
            except Exception as e:
                print(f"Hiba egy szálban: {e}")

    return jsonify(all_results)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)