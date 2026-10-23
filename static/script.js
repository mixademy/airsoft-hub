document.addEventListener('DOMContentLoaded', () => {
    // Sötét/Világos mód kezelése
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.innerText = '☀️ Világos mód';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeBtn.innerText = '☀️ Világos mód';
        } else {
            localStorage.setItem('theme', 'light');
            themeBtn.innerText = '🌙 Sötét mód';
        }
    });

    // Adatok lekérése és betöltése
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            renderProducts('legnepszerubb-container', data.legnepszerubb);
            renderProducts('akcios-container', data.akcios);
            renderProducts('kezdo-container', data.kezdo);
            renderProducts('fegyverek-container', data.fegyverek);
            renderProducts('aap01-container', data.aap01);
            renderProducts('ruhazat-container', data.ruhazat);
        })
        .catch(err => console.error("Hiba az adatok betöltésekor:", err));
});

function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if(!container) return;
    
    if(!products || products.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">Jelenleg nincs elérhető termék ebben a kategóriában.</p>';
        return;
    }

    container.innerHTML = products.map(p => `
        <div class="glass-card">
            <div class="img-container">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x200/png?text=Nincs+Kep'">
            </div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <span class="shop-badge">${p.shop}</span>
                <div class="price-row">
                    <span class="price">${p.price}</span>
                    <a href="${p.url}" target="_blank" class="btn">Boltba</a>
                </div>
            </div>
        </div>
    `).join('');
}