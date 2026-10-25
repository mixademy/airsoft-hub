const staticData = {
    legnepszerubb: [
        { name: "BLS 0.25g BB (1kg)", shop: "TAIWANGUN", price: "8.18 EUR", url: "https://www.taiwangun.com/025g-bbs-6mm/precision-bb-pellets-0-25g-1-kg-bls", image: "img/amunicja-i-kulki-asg-kulki-asg-0-25-g-precision-bb-kulki-0-25g-1-kg-bls-148575(1-1).jpg" },
        { name: "ProTech Green Gas 1000ml", shop: "TAIWANGUN", price: "9.16 EUR", url: "https://www.taiwangun.com/green-gas/airsoft-green-gas-1000ml-pro-tech-guns", image: "img/green-gas-asg-airsoft-green-gaz-1000ml-pro-tech-guns-12808(4-1).jpg" },
        { name: "VB Li-Po 1200mAh 7.4V", shop: "TAIWANGUN", price: "13.87 EUR", url: "https://www.taiwangun.com/lipo-7-4v/battery-li-po-1200mah-7-4v-20-40c-t-connector-vb", image: "img/akumulatory-i-baterie-akumulatory-lipo-7-4v-akumulator-li-po-1200mah-7-4v-20-40c-t-connector-vb.jpg" },
        { name: "Gens Ace Imars Töltő", shop: "TAIWANGUN", price: "63.41 EUR", url: "https://www.taiwangun.com/battery-chargers/gens-ace-imars-mini-charger-g-tech", image: "img/ladowarki-asg-mini-ladowarka-gens-ace-imars-g-tech-2373186(1-1).jpg" },
        { name: "GHK 12g CO2 Patron (10db)", shop: "AIRSOFTPLAZA", price: "1900 Ft", url: "https://airsoftplaza.hu/termek/ghk-12g-co2-patron-10db/", image: "img/Képernyőkép 2026-10-25 173336.png" },
        { name: "BLS Speedloader (90 BB)", shop: "ANAREUS", price: "2.54 EUR", url: "https://www.anareus.cz/gb/reloaders/10162-bls-low-mid-cap-airsoft-magazine-speedloader-90-bbs-transparent.html", image: "img/Képernyőkép 2026-10-25 173359.png" }
    ],
    kezdo: [
        { name: "Double Eagle M904G ETU", shop: "TAIWANGUN", price: "154.92 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/m904g-falcon-3-0-etu-airsoft-rifle-tan-double-eagle", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-karabinek-asg-m904g-falcon-3-0-etu-tan-double-eagle.jpg" },
        { name: "Cyma CM.520 Sport Line", shop: "TAIWANGUN", price: "82.38 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/cm-520-sport-line-gen-2-cyma", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-cm-520-sport-line-gen-2-cyma.jpg" },
        { name: "J.G. Works 608-6 (G36)", shop: "TAIWANGUN", price: "119.20 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/608-6-j-g-works", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-608-6-j-g-works-12516(10-1).jpg" },
        { name: "Double Eagle UTR45", shop: "AIRSOFTPLAZA", price: "65900 Ft", url: "https://airsoftplaza.hu/termek/double-eagle-m917g-utr45-fekete/", image: "img/Képernyőkép 2026-10-25 173558.png" }
    ],
    pisztoly: [
        { name: "Golden Eagle 3301 GBB", shop: "TAIWANGUN", price: "77.05 EUR", url: "https://www.taiwangun.com/pistol-green-gas/3301-pistol-replica-with-gas-blowback-gbb-black-golden-eagle", image: "img/pistolety-asg-pistolety-gazowe-replika-pistoletu-3301-z-systemem-gas-blowback-gbb-black-golden-eagle.jpg" },
        { name: "E&C Glock 17 Gen.4", shop: "AIRSOFTPLAZA", price: "46500 Ft", url: "https://airsoftplaza.hu/termek/ec-glock-17-gen-4-green-gaz-gbb-fekete-ec-1106/", image: "img/Képernyőkép 2026-10-25 173701.png" },
        { name: "AAP-01 Assassin", shop: "AIRSOFTPRO", price: "32835 Ft", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-aap-01-assassin-gbb-cerny-detail", image: "img/action-army-aap01-cerna-1.jpg" },
        { name: "CZ P-09 GBB", shop: "AIRSOFTPRO", price: "47010 Ft", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-cz-p-09-cerna-plyn-blowback-1-detail", image: "img/asg-cz-p-09-black-gas-blowback-4.jpg" }
    ],
    karabely: [
        { name: "EMG FN SCAR-H ETU", shop: "TAIWANGUN", price: "331.28 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/licensed-fn-scar-h-cm-063h-replica-with-eshooter-etu-gen-2-tan-emg", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-licencjonowana-replika-fn-scar-h-cm-063h-tan-emg.jpg" },
        { name: "Golden Eagle MC6595M GBB", shop: "TAIWANGUN", price: "255.47 EUR", url: "https://www.taiwangun.com/assault-rifle-green-gas/mc6595m-gas-blow-back-rifle-tan-golden-eagle", image: "img/karabiny-szturmowe-asg-karabiny-gazowe-asg-karabinek-mc6595m-zasilany-green-gazem-tan-golden-eagle.jpg" },
        { name: "APS ASK205A EBB Vintage", shop: "TAIWANGUN", price: "167.57 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/ask205a-ebb-full-metal-vintage-style-aps", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-ask205a-ebb-full-metal-vintage-style-aps.jpg" },
        { name: "Novritsch SSQ4 HPA", shop: "AIRSOFTPLAZA", price: "245900 Ft", url: "https://airsoftplaza.hu/termek/novritsch-ssq4-hpa/", image: "img/Képernyőkép 2026-10-25 173935.png" }
    ],
    aap01: [
        { name: "Action Army AAP-01 (Fekete)", shop: "AIRSOFTGURU", price: "39990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2907-action-army-aap-01-fekete.html", image: "img/action-army-aap01-cerna-1.jpg" },
        { name: "CowCow Recoil Rugó 150%", shop: "AIRSOFTGURU", price: "3990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1522-aap-01-helyretolorecoil-rugo-150-cow-cow.html", image: "img/aap-01-helyretolorecoil-rugo-150-cow-cow.jpg" },
        { name: "CowCow Nozzle Rugó 200%", shop: "AIRSOFTGURU", price: "2990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1513-aap_01_nozzle_rugo_200_cow_cow.html", image: "img/aap_01_nozzle_rugo_200_cow_cow.jpg" },
        { name: "CTM V2 Hammer Szett", shop: "AIRSOFTGURU", price: "27490 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2953-ctm_aap_01_v2_hammer_set_kalapacs_szett.html", image: "img/ctm_aap_01_v2_hammer_set_kalapacs_szett.jpg" },
        { name: "CTM CNC Bolt Tűzváltóval", shop: "AIRSOFTGURU", price: "27490 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2671-cnc_aap_01_bolt_tuzvaltoval_black_ctm.html", image: "img/cnc_aap_01_bolt_tuzvaltoval_black_ctm.jpg" },
        { name: "CowCow CNC 'A' Trigger", shop: "AIRSOFTGURU", price: "6990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2697-aap-01-cnc-a-tipusu-trigger-cow-cow-red.html", image: "img/aap-01-cnc-a-tipusu-trigger-cow-cow-red.jpg" }
    ],
    taktikai: [
        { name: "Pyramex V2G-Plus", shop: "AIRSOFTPLAZA", price: "10800 Ft", url: "https://airsoftplaza.hu/termek/pyramex-v2g-plus-antifog-vedoszemuveg-viztiszta/", image: "img/Képernyőkép 2026-10-25 174234.png" },
        { name: "Acél Rácsos Maszk", shop: "AIRSOFTPLAZA", price: "3100 Ft", url: "https://airsoftplaza.hu/termek/fel-arcos-acel-racsos-maszk-fekete/", image: "img/Képernyőkép 2026-10-25 174312.png" },
        { name: "8FIELDS AAV FSBE Mellény", shop: "TAIWANGUN", price: "54.45 EUR", url: "https://www.taiwangun.com/body-armour/lightweight-aav-fsbe-assault-vest-system-v2-black-8fields", image: "img/wyposazenie-taktyczne-kamizelki-taktyczne-asg-kamizelki-body-armour-kamizelka-taktyczna-aav-fsbe-v2-black-8fields.jpg" },
        { name: "FAST MH Sisak", shop: "TAIWANGUN", price: "31.87 EUR", url: "https://www.taiwangun.com/tactical-helmet/fast-mh-helmet-replica-with-quick-adjustment-black-em", image: "img/wyposazenie-taktyczne-helmy-asg-replika-helmu-fast-mh-z-szybka-regulacja-black-emerson.jpg" },
        { name: "8FIELDS Type B Kesztyű", shop: "TAIWANGUN", price: "7.46 EUR", url: "https://www.taiwangun.com/tactical-gloves/type-b-tactical-gloves-size-l-tan-8fields", image: "img/wyposazenie-taktyczne-rekawice-taktyczne-i-militarne-asg-rekawice-taktyczne-typu-b-rozmiar-l-tan-8fields.jpg" }
    ],
    kiegeszito: [
        { name: "T-Eagle Mod.VI Red Dot", shop: "TAIWANGUN", price: "34.68 EUR", url: "https://www.taiwangun.com/red-dot-sights/weapon-sight-mod-vi-t-eagle", image: "img/kolimatory-celowniki-kolimatorowy-mod-vi-t-eagle-3395603(1-1).jpg" },
        { name: "WADSN V600 Lámpa", shop: "TAIWANGUN", price: "33.21 EUR", url: "https://www.taiwangun.com/lights-lasers/tactical-flashlight-v600-black-wadsn", image: "img/latarki-taktyczna-latarka-v600-black-wadsn-1849851(10-1).jpg" },
        { name: "Acetech Blaster C Tracer", shop: "ANAREUS", price: "52.86 EUR", url: "https://www.anareus.cz/gb/tracer-units-for-airsoft-guns/16123-acetech-blaster-c-tracer-unit-with-muzzle-flame-black.html", image: "img/55726-thickbox_default.webp" },
        { name: "Lézer Szerelék AP-8", shop: "AIRSOFTPLAZA", price: "4000 Ft", url: "https://airsoftplaza.hu/termek/lezer-szerelekre-ap-8/", image: "img/lezer-szerelekre-ap-8-lezerek-506.webp" },
        { name: "AFG2 Angled Markolat", shop: "AIRSOFTPLAZA", price: "3100 Ft", url: "https://airsoftplaza.hu/termek/afg2-angled-markolat-fekete/", image: "img/1694-2.webp" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSearch();
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