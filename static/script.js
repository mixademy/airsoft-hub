document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            renderProducts('legnepszerubb-container', data.legnepszerubb);
            renderProducts('akcios-container', data.akcios);
            // Ha a többi kategóriát is beleteszed az index.html-be, ide írd be azokat is!
        })
        .catch(err => console.error("Hiba az adatok betöltésekor:", err));
});

function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if(!container) return;
    
    if(!products || products.length === 0) {
        container.innerHTML = '<p style="color: #475569;">Jelenleg nincs elérhető termék ebben a kategóriában.</p>';
        return;
    }

    container.innerHTML = products.map(p => `
        <div class="glass-card">
            <div class="img-container">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Nincs+kép'">
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