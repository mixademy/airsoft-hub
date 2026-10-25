const staticData = {
    legnepszerubb: [
        { name: "BLS 0.25g BB (1kg)", shop: "TAIWANGUN", price: "8.18 EUR", url: "https://www.taiwangun.com/025g-bbs-6mm/precision-bb-pellets-0-25g-1-kg-bls", image: "img/amunicja-i-kulki-asg-kulki-asg-0-25-g-precision-bb-kulki-0-25g-1-kg-bls-148575(1-1).jpg" },
        { name: "ProTech Green Gas 1000ml", shop: "TAIWANGUN", price: "9.16 EUR", url: "https://www.taiwangun.com/green-gas/airsoft-green-gas-1000ml-pro-tech-guns", image: "img/green-gas-asg-airsoft-green-gaz-1000ml-pro-tech-guns-12808(4-1).jpg" },
        { name: "VB Li-Po 1200mAh 7.4V", shop: "TAIWANGUN", price: "13.87 EUR", url: "https://www.taiwangun.com/lipo-7-4v/battery-li-po-1200mah-7-4v-20-40c-t-connector-vb", image: "img/akumulatory-i-baterie-akumulatory-lipo-7-4v-akumulator-li-po-1200mah-7-4v-20-40c-t-connector-vb-2019696(5-1).jpg" },
        { name: "Gens Ace Imars Töltő", shop: "TAIWANGUN", price: "63.41 EUR", url: "https://www.taiwangun.com/battery-chargers/gens-ace-imars-mini-charger-g-tech", image: "img/ladowarki-asg-mini-ladowarka-gens-ace-imars-g-tech-2373186(1-1).jpg" },
        { name: "GHK 12g CO2 Patron (10db)", shop: "AIRSOFTPLAZA", price: "1900 Ft", url: "https://airsoftplaza.hu/termek/ghk-12g-co2-patron-10db/", image: "img/Képernyőkép 2026-10-25 173336.png" },
        { name: "CYMA Speedloader (90 BB)", shop: "AIRSOFTPLAZA", price: "2000 Ft", url: "https://airsoftplaza.hu/termek/cyma-90rds-bb-gyorstolto-c19/", image: "img/Képernyőkép 2026-10-25 173359.png" }
    ],
    kezdo: [
        { name: "Double Eagle M904G ETU", shop: "TAIWANGUN", price: "154.92 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/m904g-falcon-3-0-etu-airsoft-rifle-tan-double-eagle", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-karabinek-asg-m904g-falcon-3-0-etu-tan-double-eagle-3556351(1-1).jpg" },
        { name: "Cyma CM.520 Sport Line", shop: "TAIWANGUN", price: "82.38 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/cm-520-sport-line-gen-2-cyma", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-cm-520-sport-line-gen-2-cyma-4076017(1-1).jpg" },
        { name: "J.G. Works 608-6 (G36)", shop: "TAIWANGUN", price: "119.20 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/608-6-j-g-works", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-608-6-j-g-works-12516(10-1).jpg" },
        { name: "Double Eagle UTR45", shop: "AIRSOFTPLAZA", price: "65 900 Ft", url: "https://airsoftplaza.hu/termek/double-eagle-m917g-utr45-fekete/", image: "img/Képernyőkép 2026-10-25 173558.png" }
    ],
    pisztoly: [
        { name: "Golden Eagle 3301 GBB", shop: "TAIWANGUN", price: "77.05 EUR", url: "https://www.taiwangun.com/pistol-green-gas/3301-pistol-replica-with-gas-blowback-gbb-black-golden-eagle", image: "img/pistolety-asg-pistolety-gazowe-replika-pistoletu-3301-z-systemem-gas-blowback-gbb-black-golden-eagle-2479771(14-1).jpg" },
        { name: "E&C Glock 17 Gen.4", shop: "AIRSOFTPLAZA", price: "46 500 Ft", url: "https://airsoftplaza.hu/termek/ec-glock-17-gen-4-green-gaz-gbb-fekete-ec-1106/", image: "img/Képernyőkép 2026-10-25 173701.png" },
        { name: "AAP-01 Assassin", shop: "AIRSOFTPRO", price: "32 835 Ft", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-aap-01-assassin-gbb-cerny-detail", image: "img/action-army-aap01-cerna-1.jpg" },
        { name: "CZ P-09 GBB", shop: "AIRSOFTPRO", price: "47 010 Ft", url: "https://airsoftpro.hu/hu/airsoft-fegyverek/airsoft-pisztolyok/airsoftova-pistole-cz-p-09-cerna-plyn-blowback-1-detail", image: "img/asg-cz-p-09-black-gas-blowback-4.jpg" }
    ],
    karabely: [
        { name: "EMG FN SCAR-H ETU", shop: "TAIWANGUN", price: "331.28 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/licensed-fn-scar-h-cm-063h-replica-with-eshooter-etu-gen-2-tan-emg", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-licencjonowana-replika-fn-scar-h-cm-063h-etu-eshooter-gen-2-tan-emg-4076102(1-1).jpg" },
        { name: "Golden Eagle MC6595M GBB", shop: "TAIWANGUN", price: "255.47 EUR", url: "https://www.taiwangun.com/assault-rifle-green-gas/mc6595m-gas-blow-back-rifle-tan-golden-eagle", image: "img/karabiny-szturmowe-asg-karabiny-gazowe-asg-karabinek-mc6595m-zasilany-green-gazem-tan-golden-eagle-1249581(1-1).jpg" },
        { name: "APS ASK205A EBB Vintage", shop: "TAIWANGUN", price: "167.57 EUR", url: "https://www.taiwangun.com/assault-rifle-aeg/ask205a-ebb-full-metal-vintage-style-aps", image: "img/karabiny-szturmowe-asg-karabiny-elektryczne-asg-ask205a-ebb-full-metal-vintage-style-aps-13157(1-1).jpg" },
        { name: "Novritsch SSQ4 HPA", shop: "AIRSOFTPLAZA", price: "245 900 Ft", url: "https://airsoftplaza.hu/termek/novritsch-ssq4-hpa/", image: "img/Képernyőkép 2026-10-25 173935.png" }
    ],
    aap01: [
        { name: "Action Army AAP-01 (Fekete)", shop: "AIRSOFTGURU", price: "39 990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2907-action-army-aap-01-fekete.html", image: "img/action-army-aap01-cerna-1.jpg" },
        { name: "CowCow Recoil Rugó 150%", shop: "AIRSOFTGURU", price: "3990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1522-aap-01-helyretolorecoil-rugo-150-cow-cow.html", image: "img/aap-01-helyretolorecoil-rugo-150-cow-cow.jpg" },
        { name: "CowCow Nozzle Rugó 200%", shop: "AIRSOFTGURU", price: "2990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/1513-aap_01_nozzle_rugo_200_cow_cow.html", image: "img/aap_01_nozzle_rugo_200_cow_cow.jpg" },
        { name: "CTM V2 Hammer Szett", shop: "AIRSOFTGURU", price: "27 490 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2953-ctm_aap_01_v2_hammer_set_kalapacs_szett.html", image: "img/ctm_aap_01_v2_hammer_set_kalapacs_szett.jpg" },
        { name: "CTM CNC Bolt Tűzváltóval", shop: "AIRSOFTGURU", price: "27 490 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2671-cnc_aap_01_bolt_tuzvaltoval_black_ctm.html", image: "img/cnc_aap_01_bolt_tuzvaltoval_black_ctm.jpg" },
        { name: "CowCow CNC 'A' Trigger", shop: "AIRSOFTGURU", price: "6990 Ft", url: "https://airsoftguru.hu/aap-01-kiegeszitok-alkatreszek/2697-aap-01-cnc-a-tipusu-trigger-cow-cow-red.html", image: "img/aap-01-cnc-a-tipusu-trigger-cow-cow-red.jpg" }
    ],
    taktikai: [
        { name: "Pyramex V2G-Plus", shop: "AIRSOFTPLAZA", price: "10 800 Ft", url: "https://airsoftplaza.hu/termek/pyramex-v2g-plus-antifog-vedoszemuveg-viztiszta/", image: "img/Képernyőkép 2026-10-25 174234.png" },
        { name: "Acél Rácsos Maszk", shop: "AIRSOFTPLAZA", price: "3100 Ft", url: "https://airsoftplaza.hu/termek/fel-arcos-acel-racsos-maszk-fekete/", image: "img/Képernyőkép 2026-10-25 174312.png" },
        { name: "8FIELDS AAV FSBE Mellény", shop: "TAIWANGUN", price: "54.45 EUR", url: "https://www.taiwangun.com/body-armour/lightweight-aav-fsbe-assault-vest-system-v2-black-8fields", image: "img/wyposazenie-taktyczne-kamizelki-taktyczne-asg-kamizelki-body-armour-kamizelka-taktyczna-aav-fsbe-v2-black-8fields-38960(1-1).jpg" },
        { name: "FAST MH Sisak", shop: "TAIWANGUN", price: "31.87 EUR", url: "https://www.taiwangun.com/tactical-helmet/fast-mh-helmet-replica-with-quick-adjustment-black-em", image: "img/wyposazenie-taktyczne-helmy-asg-replika-helmu-fast-mh-z-szybka-regulacja-black-em-29232(1-1).jpg" },
        { name: "8FIELDS Type B Kesztyű", shop: "TAIWANGUN", price: "7.46 EUR", url: "https://www.taiwangun.com/tactical-gloves/type-b-tactical-gloves-size-l-tan-8fields", image: "img/wyposazenie-taktyczne-rekawice-taktyczne-i-militarne-asg-rekawice-taktyczne-typu-b-rozmiar-l-tan-8fields-4076606(1-1).jpg" }
    ],
    kiegeszito: [
        { name: "T-Eagle Mod.VI Red Dot", shop: "TAIWANGUN", price: "34.68 EUR", url: "https://www.taiwangun.com/red-dot-sights/weapon-sight-mod-vi-t-eagle", image: "img/kolimatory-celownik-kolimatorowy-mod-vi-t-eagle-3395603(1-1).jpg" },
        { name: "WADSN V600 Lámpa", shop: "TAIWANGUN", price: "33.21 EUR", url: "https://www.taiwangun.com/lights-lasers/tactical-flashlight-v600-black-wadsn", image: "img/latarki-taktyczna-latarka-v600-black-wadsn-1849851(10-1).jpg" },
        { name: "Acetech Blaster C Tracer", shop: "ANAREUS", price: "52.86 EUR", url: "https://www.anareus.cz/gb/tracer-units-for-airsoft-guns/16123-acetech-blaster-c-tracer-unit-with-muzzle-flame-black.html", image: "img/55726-thickbox_default.webp" },
        { name: "Lézeres Célmegjelölő AP-8", shop: "AIRSOFTPLAZA", price: "4000 Ft", url: "https://airsoftplaza.hu/termek/lezer-szerelekre-ap-8/", image: "img/lezer-szerelekre-ap-8-lezerek-506.webp" },
        { name: "AFG2 Angled Markolat", shop: "AIRSOFTPLAZA", price: "3100 Ft", url: "https://airsoftplaza.hu/termek/afg2-angled-markolat-fekete/", image: "img/1694-2.webp" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initSearch();
    renderAllSections();
    initBuilder();
});

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

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


// --- 4. Felszerelés Építő (Több elemes logika + Kereső) ---
let loadout = {
    primary: null,      // Csak 1 fegyver (Karabély)
    secondary: null,    // Csak 1 fegyver (Pisztoly)
    accessory: [],      // Korlátlan kiegészítő
    protection: [],     // Korlátlan védőfelszerelés
    tactical: [],       // Korlátlan ruházat
    consumable: []      // Korlátlan fogyóeszköz
};

const builderConfig = [
    { id: 'primary', label: 'Elsődleges Fegyver', icon: '🎯', dataKeys: ['karabely'], multi: false },
    { id: 'secondary', label: 'Másodlagos Fegyver', icon: '🔫', dataKeys: ['pisztoly'], multi: false },
    { id: 'accessory', label: 'Kiegészítők (Optika, Tracer)', icon: '🔦', dataKeys: ['kiegeszito', 'aap01'], multi: true },
    { id: 'protection', label: 'Védőfelszerelés (Maszk, Szemüveg)', icon: '🥽', dataKeys: ['taktikai'], multi: true },
    { id: 'tactical', label: 'Taktikai Ruházat', icon: '🪖', dataKeys: ['taktikai'], multi: true },
    { id: 'consumable', label: 'Fogyóeszközök (Gáz, BB, Akku)', icon: '🔋', dataKeys: ['legnepszerubb'], multi: true }
];

function initBuilder() {
    const builderBtn = document.getElementById('builder-toggle');
    const builderModal = document.getElementById('builder-modal');
    const closeBuilderBtn = document.getElementById('close-builder');
    
    const pickerModal = document.getElementById('picker-modal');
    const closePickerBtn = document.getElementById('close-picker');
    const pickerSearch = document.getElementById('picker-search-input');

    builderBtn.addEventListener('click', () => {
        renderBuilderList();
        builderModal.classList.remove('hidden');
    });

    closeBuilderBtn.addEventListener('click', () => builderModal.classList.add('hidden'));
    closePickerBtn.addEventListener('click', () => pickerModal.classList.add('hidden'));

    // Belső keresőmotor a termékválasztóhoz
    pickerSearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = window.currentPickerItems.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.shop.toLowerCase().includes(term)
        );
        renderPickerGrid(filtered, window.currentCategoryId);
    });
}

function renderBuilderList() {
    const listContainer = document.querySelector('.builder-list');
    
    listContainer.innerHTML = builderConfig.map(cat => {
        const isMulti = cat.multi;
        const items = isMulti ? loadout[cat.id] : (loadout[cat.id] ? [loadout[cat.id]] : []);
        
        let html = `
        <div class="builder-row" style="${isMulti && items.length > 0 ? 'align-items: flex-start;' : ''}">
            <div class="builder-row-left">
                <span class="builder-icon">${cat.icon}</span>
                <span class="builder-label">${cat.label}</span>
            </div>
            <div class="builder-row-middle" style="flex-direction: column; gap: 0.5rem; align-items: center; width: 100%;">`;

        // Kiválasztott elemek listázása
        items.forEach((item, idx) => {
            html += `
            <div class="selected-item" style="width: 100%;">
                <img src="${item.image}" alt="Kép">
                <div class="selected-info">
                    <h4>${item.name}</h4>
                    <span>${item.price}</span>
                </div>
                <button class="remove-btn" onclick="removeFromLoadout('${cat.id}', ${idx})">X</button>
            </div>`;
        });

        // "+ Választás" gomb generálása
        // Ha multi kategória, mindig megjelenik, ha sima, csak akkor, ha még üres
        if (isMulti || items.length === 0) {
            html += `<button class="choose-btn" style="margin-top: ${items.length > 0 ? '0.5rem' : '0'};" onclick="openPicker('${cat.id}')">+ Választás</button>`;
        }

        html += `
            </div>
            <div class="builder-row-right">
                <span>—</span>
            </div>
        </div>`;
        return html;
    }).join('');
}

window.openPicker = function(categoryId) {
    const category = builderConfig.find(c => c.id === categoryId);
    if (!category) return;

    window.currentCategoryId = categoryId;
    document.getElementById('picker-title').innerText = `Válassz: ${category.label}`;
    
    // A megadott adatkulcsokból kigyűjtjük a választható termékeket
    let availableItems = [];
    category.dataKeys.forEach(key => {
        if (staticData[key]) {
            availableItems = availableItems.concat(staticData[key]);
        }
    });

    window.currentPickerItems = availableItems;
    
    // Alaphelyzetbe állítjuk a keresőt
    document.getElementById('picker-search-input').value = '';
    renderPickerGrid(availableItems, categoryId);

    document.getElementById('picker-modal').classList.remove('hidden');
}

function renderPickerGrid(items, categoryId) {
    const grid = document.getElementById('picker-grid');
    
    if (items.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1;">Nincs találat ebben a kategóriában.</p>';
        return;
    }

    grid.innerHTML = items.map((item) => {
        // Az eredeti listabeli index kell a kiválasztáshoz
        const origIndex = window.currentPickerItems.indexOf(item);
        return `
        <div class="picker-card" onclick="selectForLoadout('${categoryId}', ${origIndex})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/300x200?text=Nincs+Kep'">
            <h4>${item.name}</h4>
            <span style="color:var(--accent); font-weight:bold;">${item.price}</span>
        </div>`;
    }).join('');
}

window.selectForLoadout = function(categoryId, itemIndex) {
    const item = window.currentPickerItems[itemIndex];
    const category = builderConfig.find(c => c.id === categoryId);
    
    if (item && category) {
        if (category.multi) {
            loadout[categoryId].push(item);
        } else {
            loadout[categoryId] = item;
        }
        document.getElementById('picker-modal').classList.add('hidden');
        renderBuilderList();
    }
}

window.removeFromLoadout = function(categoryId, index) {
    const category = builderConfig.find(c => c.id === categoryId);
    
    if (category.multi) {
        loadout[categoryId].splice(index, 1);
    } else {
        loadout[categoryId] = null;
    }
    renderBuilderList();
}