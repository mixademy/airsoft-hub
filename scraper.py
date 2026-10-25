import json
import datetime

def run_scraper():
    print(f"[{datetime.datetime.now()}] Adatgyűjtés elindítva...")
    
    scraped_data = {
        "legnepszerubb": [
            { "name": "BLS 0.25g BB (1kg)", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/025g-bbs-6mm/precision-bb-pellets-0-25g-1-kg-bls", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=BLS+0.25g" },
            { "name": "ProTech Green Gas 1000ml", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/green-gas/airsoft-green-gas-1000ml-pro-tech-guns", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=ProTech+Gas" },
            { "name": "VB Li-Po 1200mAh 7.4V", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/lipo-7-4v/battery-li-po-1200mah-7-4v-20-40c-t-connector-vb", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=Li-Po+Aksi" },
            { "name": "GHK 12g CO2 Patron (10db)", "shop": "AIRSOFTPLAZA", "price": "Ismeretlen ár", "url": "https://airsoftplaza.hu/termek/ghk-12g-co2-patron-10db/", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=CO2+Patron" }
        ],
        "kezdo": [
            { "name": "Double Eagle M904G ETU", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/assault-rifle-aeg/m904g-falcon-3-0-etu-airsoft-rifle-tan-double-eagle", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=DE+M904G" },
            { "name": "Double Eagle UTR45", "shop": "AIRSOFTPLAZA", "price": "Ismeretlen ár", "url": "https://airsoftplaza.hu/termek/double-eagle-m917g-utr45-fekete/", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=UTR45" }
        ],
        "pisztoly": [
            { "name": "E&C Glock 17 Gen.4", "shop": "AIRSOFTPLAZA", "price": "Ismeretlen ár", "url": "https://airsoftplaza.hu/termek/ec-glock-17-gen-4-green-gaz-gbb-fekete-ec-1106/", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=Glock+17" },
            { "name": "AAP-01 Assassin", "shop": "AIRSOFTPRO", "price": "Ismeretlen ár", "url": "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-aap-01-assassin-gbb-cerny-detail", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=AAP-01" }
        ],
        "karabely": [
            { "name": "EMG FN SCAR-H ETU", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/assault-rifle-aeg/licensed-fn-scar-h-cm-063h-replica-with-eshooter-etu-gen-2-tan-emg", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=FN+SCAR-H" },
            { "name": "Novritsch SSQ4 HPA", "shop": "AIRSOFTPLAZA", "price": "Ismeretlen ár", "url": "https://airsoftplaza.hu/termek/novritsch-ssq4-hpa/", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=Novritsch" }
        ],
        "aap01": [
            { "name": "Action Army AAP-01 (Fekete)", "shop": "AIRSOFTGURU", "price": "Ismeretlen ár", "url": "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2907-action-army-aap-01-fekete.html", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=AAP-01" },
            { "name": "CTM CNC Bolt Tűzváltóval", "shop": "AIRSOFTGURU", "price": "Ismeretlen ár", "url": "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2671-cnc_aap_01_bolt_tuzvaltoval_black_ctm.html", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=CNC+Bolt" }
        ],
        "taktikai": [
            { "name": "Pyramex V2G-Plus", "shop": "AIRSOFTPLAZA", "price": "Ismeretlen ár", "url": "https://airsoftplaza.hu/termek/pyramex-v2g-plus-antifog-vedoszemuveg-viztiszta/", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=V2G-Plus" },
            { "name": "FAST MH Sisak", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/tactical-helmet/fast-mh-helmet-replica-with-quick-adjustment-black-em", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=FAST+MH" }
        ],
        "kiegeszito": [
            { "name": "T-Eagle Mod.VI Red Dot", "shop": "TAIWANGUN", "price": "Ismeretlen ár", "url": "https://www.taiwangun.com/red-dot-sights/weapon-sight-mod-vi-t-eagle", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=Red+Dot" },
            { "name": "Acetech Blaster C Tracer", "shop": "ANAREUS", "price": "Ismeretlen ár", "url": "https://www.anareus.cz/gb/tracer-units-for-airsoft-guns/16123-acetech-blaster-c-tracer-unit-with-muzzle-flame-black.html", "image": "https://placehold.co/300x200/2a2d3e/ffffff?text=Tracer" }
        ]
    }

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(scraped_data, f, ensure_ascii=False, indent=4)
        
    print("Adatgyűjtés befejezve, products.json frissítve.")