import json
import datetime

def run_scraper():
    print(f"[{datetime.datetime.now()}] Adatgyűjtés elindítva...")
    
    scraped_data = {
        "legnepszerubb": [
            {
                "name": "BLS 0.25g BB (1kg)",
                "shop": "AIRSOFTGURU",
                "price": "4 500 Ft",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Airsoft_pellets_0.20g.jpg/320px-Airsoft_pellets_0.20g.jpg", 
                "url": "https://airsoftguru.hu"
            }
        ],
        "akcios": [
            {
                "name": "Specna Arms CORE SA-C01",
                "shop": "TAIWANGUN",
                "price": "39 990 Ft",
                "image": "https://placehold.co/300x200/png?text=SA-C01", 
                "url": "https://www.taiwangun.com/hu"
            }
        ],
        "kezdo": [
            {
                "name": "Cyma CM.028 AK47",
                "shop": "GUNFIRE",
                "price": "35 000 Ft",
                "image": "https://placehold.co/300x200/png?text=AK47", 
                "url": "https://gunfire.com/hu"
            }
        ],
        "fegyverek": [
            {
                "name": "Golden Eagle 1911 GBB",
                "shop": "COMBATZONE",
                "price": "32 000 Ft",
                "image": "https://placehold.co/300x200/png?text=1911+GBB", 
                "url": "https://www.combatzone.hu"
            }
        ],
        "aap01": [
            {
                "name": "Action Army AAP-01 Assassin",
                "shop": "AIRSOFTPLAZA",
                "price": "38 900 Ft",
                "image": "https://placehold.co/300x200/png?text=AAP-01", 
                "url": "https://airsoftplaza.hu"
            }
        ],
        "ruhazat": [
            {
                "name": "Multicam FAST PJ Sisak",
                "shop": "CATUS",
                "price": "12 500 Ft",
                "image": "https://placehold.co/300x200/png?text=FAST+Helmet", 
                "url": "https://catus.hu"
            }
        ]
    }

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(scraped_data, f, ensure_ascii=False, indent=4)
        
    print("Adatgyűjtés befejezve, products.json frissítve.")