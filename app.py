import os
import json
from flask import Flask, jsonify, request
from scraper import run_scraper

# Flask alkalmazás inicializálása, a static mappa beállítása a frontendhez
app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    """A főoldal (index.html) kiszolgálása."""
    return app.send_static_file('index.html')

@app.route('/api/products')
def get_products():
    """Az adatok átadása a frontendnek (JavaScript fetch hívásához)."""
    try:
        with open('products.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            return jsonify(data)
    except FileNotFoundError:
        # Ha még nem futott le a scraper egyszer sem
        return jsonify({
            "legnepszerubb": [],
            "akcios": [],
            "kezdo": [],
            "fegyverek": [],
            "aap01": [],
            "ruhazat": []
        })

@app.route('/api/cron-update', methods=['GET', 'POST'])
def cron_update():
    """Ezt a végpontot hívja meg a cron-job.org minden reggel."""
    # Titkos kulcs ellenőrzése (hogy ne tudja bárki elindítani a frissítést)
    secret = request.args.get('secret')
    expected_secret = os.environ.get('CRON_SECRET', 'titkos_kulcs_123')
    
    if secret != expected_secret:
        return jsonify({"error": "Unauthorized - Hibas vagy hianyzo titkos kulcs"}), 401
    
    # Adatgyűjtő szkript elindítása
    try:
        run_scraper()
        return jsonify({"status": "success", "message": "Adatok sikeresen frissitve!"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    # Render port beállítása
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)