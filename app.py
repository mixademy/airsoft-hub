import os
import json
import urllib.parse
import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
from scraper import run_scraper

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/products')
def get_products():
    try:
        with open('products.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            return jsonify(data)
    except FileNotFoundError:
        return jsonify({
            "legnepszerubb": [], "kezdo": [], "pisztoly": [], 
            "karabely": [], "aap01": [], "taktikai": [], "kiegeszito": []
        })

@app.route('/api/cron-update', methods=['GET', 'POST'])
def cron_update():
    secret = request.args.get('secret')
    expected_secret = os.environ.get('CRON_SECRET', 'titkos_kulcs_123')
    
    if secret != expected_secret:
        return jsonify({"error": "Unauthorized"}), 401
    
    try:
        run_scraper()
        return jsonify({"status": "success", "message": "Adatok sikeresen frissitve!"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/search')
def live_search():
    query = request.args.get('q', '')
    if len(query) < 2:
        return jsonify([])

    results = []
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36"}
    
    # 1. Keresés az Airsoftplázán (Példa implementáció)
    try:
        safe_query = urllib.parse.quote_plus(query)
        url = f"https://airsoftplaza.hu/?s={safe_query}&post_type=product"
        
        response = requests.get(url, headers=headers, timeout=5)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            items = soup.find_all('li', class_='product')[:4]
            
            for item in items:
                title_elem = item.find('h2', class_='woocommerce-loop-product__title')
                price_elem = item.find('span', class_='woocommerce-Price-amount')
                link_elem = item.find('a', class_='woocommerce-LoopProduct-link')
                img_elem = item.find('img')
                
                if title_elem and link_elem:
                    results.append({
                        "name": title_elem.text.strip(),
                        "shop": "AIRSOFTPLAZA",
                        "price": price_elem.text.strip() if price_elem else "Nincs ár",
                        "url": link_elem['href'],
                        "image": img_elem['src'] if img_elem else "https://placehold.co/300x200?text=Nincs+Kep"
                    })
    except Exception as e:
        print(f"Hiba az Airsoftplaza keresesnel: {e}")

    # Itt lehet hozzáadni a többi webshop (Taiwangun, Gunfire, Catus) scrapelését a saját class neveik alapján
    
    return jsonify(results)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)