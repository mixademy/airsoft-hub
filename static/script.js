const staticData = {
    legnepszerubb: [
        { name: "BLS 0.25g BB (1kg)", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/025g-bbs-6mm/precision-bb-pellets-0-25g-1-kg-bls", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Airsoft_pellets_0.20g.jpg/320px-Airsoft_pellets_0.20g.jpg" },
        { name: "ProTech Green Gas 1000ml", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/green-gas/airsoft-green-gas-1000ml-pro-tech-guns", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=ProTech+Gas" },
        { name: "VB Li-Po 1200mAh 7.4V", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/lipo-7-4v/battery-li-po-1200mah-7-4v-20-40c-t-connector-vb", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Li-Po+Aksi" },
        { name: "Gens Ace Imars Töltő", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/battery-chargers/gens-ace-imars-mini-charger-g-tech", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Gens+Ace+Tolto" },
        { name: "GHK 12g CO2 Patron (10db)", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/ghk-12g-co2-patron-10db/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=CO2+Patron" },
        { name: "BLS Speedloader (90 BB)", shop: "ANAREUS", price: "Ismeretlen ár", url: "https://www.anareus.cz/gb/reloaders/10162-bls-low-mid-cap-airsoft-magazine-speedloader-90-bbs-transparent.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Speedloader" }
    ],
    kezdo: [
        { name: "Double Eagle M904G ETU", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-aeg/m904g-falcon-3-0-etu-airsoft-rifle-tan-double-eagle", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=DE+M904G" },
        { name: "Cyma CM.520 Sport Line", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-aeg/cm-520-sport-line-gen-2-cyma", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=CM.520" },
        { name: "J.G. Works 608-6 (G36)", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-aeg/608-6-j-g-worksc", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=JG+608-6" },
        { name: "Double Eagle UTR45", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/double-eagle-m917g-utr45-fekete/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=UTR45" }
    ],
    pisztoly: [
        { name: "Golden Eagle 3301 GBB", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/pistol-green-gas/3301-pistol-replica-with-gas-blowback-gbb-black-golden-eagle", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=1911+GBB" },
        { name: "E&C Glock 17 Gen.4", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/ec-glock-17-gen-4-green-gaz-gbb-fekete-ec-1106/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Glock+17" },
        { name: "AAP-01 Assassin", shop: "AIRSOFTPRO", price: "Ismeretlen ár", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-aap-01-assassin-gbb-cerny-detail", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=AAP-01" },
        { name: "CZ P-09 GBB", shop: "AIRSOFTPRO", price: "Ismeretlen ár", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-cz-p-09-cerna-plyn-blowback-1-detail", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=CZ+P-09" }
    ],
    karabely: [
        { name: "EMG FN SCAR-H ETU", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-aeg/licensed-fn-scar-h-cm-063h-replica-with-eshooter-etu-gen-2-tan-emg", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=FN+SCAR-H" },
        { name: "Golden Eagle MC6595M GBB", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-green-gas/mc6595m-gas-blow-back-rifle-tan-golden-eagle", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=M4+GBB" },
        { name: "APS ASK205A EBB Vintage", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/assault-rifle-aeg/ask205a-ebb-full-metal-vintage-style-aps", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=AK+Vintage" },
        { name: "Novritsch SSQ4 HPA", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/novritsch-ssq4-hpa/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Novritsch" }
    ],
    aap01: [
        { name: "Action Army AAP-01 (Fekete)", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2907-action-army-aap-01-fekete.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=AAP-01" },
        { name: "CowCow Recoil Rugó 150%", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1522-aap-01-helyretolorecoil-rugo-150-cow-cow.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Rugo" },
        { name: "CowCow Nozzle Rugó 200%", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1513-aap_01_nozzle_rugo_200_cow_cow.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Nozzle+Rugo" },
        { name: "CTM V2 Hammer Szett", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2953-ctm_aap_01_v2_hammer_set_kalapacs_szett.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Hammer+Szett" },
        { name: "CTM CNC Bolt Tűzváltóval", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2671-cnc_aap_01_bolt_tuzvaltoval_black_ctm.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=CNC+Bolt" },
        { name: "CowCow CNC 'A' Trigger", shop: "AIRSOFTGURU", price: "Ismeretlen ár", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2697-aap-01-cnc-a-tipusu-trigger-cow-cow-red.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=CNC+Trigger" }
    ],
    taktikai: [
        { name: "Pyramex V2G-Plus", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/pyramex-v2g-plus-antifog-vedoszemuveg-viztiszta/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Szemcsi" },
        { name: "Acél Rácsos Maszk", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/fel-arcos-acel-racsos-maszk-fekete/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Maszk" },
        { name: "8FIELDS AAV FSBE Mellény", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/body-armour/lightweight-aav-fsbe-assault-vest-system-v2-black-8fields", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Melleny" },
        { name: "FAST MH Sisak", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/tactical-helmet/fast-mh-helmet-replica-with-quick-adjustment-black-em", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Sisak" },
        { name: "8FIELDS Type B Kesztyű", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/tactical-gloves/type-b-tactical-gloves-size-l-tan-8fields", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Kesztyu" }
    ],
    kiegeszito: [
        { name: "T-Eagle Mod.VI Red Dot", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/red-dot-sights/weapon-sight-mod-vi-t-eagle", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Red+Dot" },
        { name: "WADSN V600 Lámpa", shop: "TAIWANGUN", price: "Ismeretlen ár", url: "https://www.taiwangun.com/lights-lasers/tactical-flashlight-v600-black-wadsn", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Lampa" },
        { name: "Acetech Blaster C Tracer", shop: "ANAREUS", price: "Ismeretlen ár", url: "https://www.anareus.cz/gb/tracer-units-for-airsoft-guns/16123-acetech-blaster-c-tracer-unit-with-muzzle-flame-black.html", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Tracer" },
        { name: "Lézer Szerelék AP-8", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/lezer-szerelekre-ap-8/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Lezer" },
        { name: "AFG2 Angled Markolat", shop: "AIRSOFTPLAZA", price: "Ismeretlen ár", url: "https://airsoftplaza.hu/termek/afg2-angled-markolat-fekete/", image: "https://placehold.co/300x200/2a2d3e/ffffff?text=Markolat" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSearch();
    
    // Azonnal betölti az összes kategóriát a fenti adatokból!
    renderAllSections();
});

function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerText = '🌙';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        themeBtn.innerText = body.classList.contains('light-mode') ? '🌙' : '☀️';
    });
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const resultsSec = document.getElementById('search-results-sec');
    const resultsContainer = document.getElementById('search-results-container');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.trim();
        clearTimeout(searchTimeout);

        if (term.length < 2) {
            resultsSec.classList.add('hidden');
            return;
        }

        resultsSec.classList.remove('hidden');
        resultsContainer.innerHTML = '<p style="color:var(--text-muted);">Keresés folyamatban a webshopokban... ⏳</p>';

        searchTimeout = setTimeout(() => {
            fetch(`/api/search?q=${encodeURIComponent(term)}`)
                .then(response => response.json())
                .then(hits => {
                    if(hits.length === 0) {
                        resultsContainer.innerHTML = '<p style="color:var(--text-muted);">Sajnos nincs találat a webshopokban.</p>';
                    } else {
                        renderProductGrid('search-results-container', hits);
                    }
                })
                .catch(err => {
                    console.error("Keresési hiba:", err);
                    resultsContainer.innerHTML = '<p style="color:var(--danger);">Hiba történt a keresés közben. Győződj meg róla, hogy fut a Python szerver!</p>';
                });
        }, 800);
    });
}

function renderAllSections() {
    renderProductGrid('legnepszerubb-container', staticData.legnepszerubb);
    renderProductGrid('kezdo-container', staticData.kezdo);
    renderProductGrid('pisztoly-container', staticData.pisztoly);
    renderProductGrid('karabely-container', staticData.karabely);
    renderProductGrid('aap01-container', staticData.aap01);
    renderProductGrid('taktikai-container', staticData.taktikai);
    renderProductGrid('kiegeszito-container', staticData.kiegeszito);
}

function renderProductGrid(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container || !products) return;

    // Szimpla HTML generálás (Kedvencek szív nélkül)
    container.innerHTML = products.map(p => `
        <div class="glass-card">
            <div class="card-header">
                <span class="shop-badge">${p.shop}</span>
            </div>
            <div class="img-container">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x200/2a2d3e/ffffff?text=Nincs+Kep'">
            </div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <div class="price-row">
                    <span class="price">${p.price}</span>
                    <a href="${p.url}" target="_blank" class="btn">Boltba</a>
                </div>
            </div>
        </div>
    `).join('');
}