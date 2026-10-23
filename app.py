import os
import json
from flask import Flask, jsonify, request
from scraper import run_scraper

app = Flask(__name__, static_folder='static', static_url_path='')

# Főoldal kiszolgálása
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Az adatokat lekérő API a frontend számára
@app.route('/api/products')
def get_products():
    try:
        with open('products.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Adatok még nem lettek letöltve"}), 404

# Ezt a végpontot hívja meg a Render Cron Job minden reggel 6:00-kor
@app.route('/api/cron-update', methods=['GET', 'POST'])
def cron_update():
    # Biztonsági kulcs, hogy csak te/a render tudja elindítani
    secret = request.args.get('secret')
    if secret != os.environ.get('CRON_SECRET', 'titkos_kulcs_123'):
        return jsonify({"error": "Unauthorized"}), 401
    
    # Elindítjuk az adatgyűjtőt
    try:
        run_scraper()
        return jsonify({"status": "success", "message": "Adatok sikeresen frissítve!"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)