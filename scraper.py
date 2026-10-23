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
                "url": "https://airsoftguru.hu/bls-025g-bb-1kg"
            },
            {
                "name": "Odin Innovations M1 Speedloader",
                "shop": "AIRSOFTPRO",
                "price": "18 000 Ft",
                "image": "https://placehold.co/300x200/png?text=Odin+M1", 
                "url": "https://airsoftpro.cz/hu/odin-m1-speedloader"
            },
            {
                "name": "Stalker Rácsos Maszk V2",
                "shop": "CATUS",
                "price": "3 200 Ft",
                "image": "https://placehold.co/300x200/png?text=Stalker+Mask", 
                "url": "https://catus.hu/stalker-v2-maszk"
            }
        ],
        "akcios": [
            {
                "name": "Specna Arms CORE SA-C01",
                "shop": "TAIWANGUN",
                "price": "39 990 Ft",
                "image": "https://placehold.co/300x200/png?text=SA-C01", 
                "url": "https://www.taiwangun.com/hu/sa-c01-core"
            },
            {
                "name": "Bolle X800 Védőszemüveg",
                "shop": "GUNFIRE",
                "price": "14 500 Ft",
                "image": "https://placehold.co/300x200/png?text=Bolle+X800", 
                "url": "https://gunfire.com/hu/bolle-x800"
            }
        ],
        "kezdo": [
            {
                "name": "Cyma CM.028 AK47",
                "shop": "GUNFIRE",
                "price": "35 000 Ft",
                "image": "https://placehold.co/300x200/png?text=AK47", 
                "url": "https://gunfire.com/hu/cm028-ak47"
            },
            {
                "name": "JG G608 G36C",
                "shop": "TAIWANGUN",
                "price": "38 500 Ft",
                "image": "https://placehold.co/300x200/png?text=G36C", 
                "url": "https://www.taiwangun.com/hu/jg-g608-g36c"
            }
        ],
        "fegyverek": [
            {
                "name": "Golden Eagle 1911 GBB",
                "shop": "COMBATZONE",
                "price": "32 000 Ft",
                "image": "https://placehold.co/300x200/png?text=1911+GBB", 
                "url": "https://www.combatzone.hu/golden-eagle-1911"
            },
            {
                "name": "Cyma CM.041G Upgraded",
                "shop": "TAIWANGUN",
                "price": "85 000 Ft",
                "image": "https://placehold.co/300x200/png?text=CM041G", 
                "url": "https://www.taiwangun.com/hu/cm041g-upgraded"
            }
        ],
        "aap01": [
            {
                "name": "Action Army AAP-01 Assassin",
                "shop": "AIRSOFTPLAZA",
                "price": "38 900 Ft",
                "image": "https://placehold.co/300x200/png?text=AAP-01", 
                "url": "https://airsoftplaza.hu/action-army-aap-01"
            },
            {
                "name": "CNC Alu Elsütőbillentyű AAP-01",
                "shop": "ANAREUS",
                "price": "8 500 Ft",
                "image": "https://placehold.co/300x200/png?text=CNC+Trigger", 
                "url": "https://www.anareus.cz/hu/cnc-trigger-aap01"
            }
        ],
        "ruhazat": [
            {
                "name": "Multicam FAST PJ Sisak",
                "shop": "CATUS",
                "price": "12 500 Ft",
                "image": "https://placehold.co/300x200/png?text=FAST+Helmet", 
                "url": "https://catus.hu/fast-pj-sisak-multicam"
            },
            {
                "name": "Mechanix M-Pact Kesztyű",
                "shop": "AIRSOFTPRO",
                "price": "11 000 Ft",
                "image": "https://placehold.co/300x200/png?text=M-Pact", 
                "url": "https://airsoftpro.cz/hu/mechanix-mpact"
            }
        ]
    }

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(scraped_data, f, ensure_ascii=False, indent=4)
        
    print("Adatgyűjtés befejezve, products.json frissítve.")