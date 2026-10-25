let currentUser = localStorage.getItem('username') || null;
let savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAuth();
    initSearch();
    loadProducts();
});

function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerText = '🌙';
    } else {
        themeBtn.innerText = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeBtn.innerText = '🌙';
        } else {
            localStorage.setItem('theme', 'dark');
            themeBtn.innerText = '☀️';
        }
    });
}

function initAuth() {
    const authBtn = document.getElementById('auth-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userGreeting = document.getElementById('user-greeting');
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.getElementById('close-modal');
    const loginSubmit = document.getElementById('login-submit');
    const usernameInput = document.getElementById('username-input');

    function updateUI() {
        if (currentUser) {
            authBtn.classList.add('hidden');
            logoutBtn.classList.remove('hidden');
            userGreeting.classList.remove('hidden');
            userGreeting.innerText = `Szia, ${currentUser}!`;
            document.getElementById('saved-sec').classList.remove('hidden');
            renderSavedProducts();
        } else {
            authBtn.classList.remove('hidden');
            logoutBtn.classList.add('hidden');
            userGreeting.classList.add('hidden');
            document.getElementById('saved-sec').classList.add('hidden');
        }
        loadProducts(); // Frissíti a mentés gombokat
    }

    authBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    
    loginSubmit.addEventListener('click', () => {
        const name = usernameInput.value.trim();
        if (name) {
            currentUser = name;
            localStorage.setItem('username', name);
            modal.classList.add('hidden');
            updateUI();
        }
    });

    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('username');
        updateUI();
    });

    updateUI();
}

window.toggleSave = function(name, shop, price, url, image) {
    if (!currentUser) {
        alert("A termékek mentéséhez be kell jelentkezned!");
        document.getElementById('auth-modal').classList.remove('hidden');
        return;
    }

    const index = savedProducts.findIndex(p => p.url === url);
    if (index === -1) {
        savedProducts.push({ name, shop, price, url, image });
    } else {
        savedProducts.splice(index, 1);
    }
    
    localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
    loadProducts();
    if (currentUser) renderSavedProducts();
}

function renderSavedProducts() {
    renderProductGrid('saved-container', savedProducts);
    if(savedProducts.length === 0) {
        document.getElementById('saved-container').innerHTML = '<p style="color:var(--text-muted);">Még nem mentettél el egyetlen terméket sem.</p>';
    }
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
                        resultsContainer.innerHTML = '<p style="color:var(--text-muted);">Sajnos nincs találat egyetlen webshopban sem.</p>';
                    } else {
                        renderProductGrid('search-results-container', hits);
                    }
                })
                .catch(err => {
                    console.error("Keresési hiba:", err);
                    resultsContainer.innerHTML = '<p style="color:var(--danger);">Hiba történt. Kérlek, próbáld újra később.</p>';
                });
        }, 800);
    });
}

function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            renderProductGrid('legnepszerubb-container', data.legnepszerubb);
            renderProductGrid('kezdo-container', data.kezdo);
            renderProductGrid('pisztoly-container', data.pisztoly);
            renderProductGrid('karabely-container', data.karabely);
            renderProductGrid('aap01-container', data.aap01);
            renderProductGrid('taktikai-container', data.taktikai);
            renderProductGrid('kiegeszito-container', data.kiegeszito);
        })
        .catch(err => console.error("Hiba az adatok betöltésekor:", err));
}

function renderProductGrid(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container || !products) return;

    container.innerHTML = products.map(p => {
        const isSaved = savedProducts.some(saved => saved.url === p.url);
        const heartClass = isSaved ? 'save-btn saved' : 'save-btn';
        const heartIcon = isSaved ? '❤️' : '🤍';
        const safeName = p.name.replace(/'/g, "\\'");

        return `
        <div class="glass-card">
            <div class="card-header">
                <span class="shop-badge">${p.shop}</span>
                <button class="${heartClass}" onclick="toggleSave('${safeName}', '${p.shop}', '${p.price}', '${p.url}', '${p.image}')">${heartIcon}</button>
            </div>
            <div class="img-container">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <div class="price-row">
                    <span class="price">${p.price}</span>
                    <a href="${p.url}" target="_blank" class="btn">Boltba</a>
                </div>
            </div>
        </div>
        `;
    }).join('');
}