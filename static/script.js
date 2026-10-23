document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            if(data.error) {
                console.error("Hiba:", data.error);
                return;
            }
            // Itt rendereljük ki a kártyákat a kapott "data" alapján
            renderProducts('popular-container', data.legnepszerubb);
            renderProducts('sale-container', data.akcios);
            // ... stb
        })
        .catch(err => console.error("Nem sikerült betölteni az adatokat:", err));
});

function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if(!container || !products) return;
    
    container.innerHTML = products.map(p => `
        <div class="glass-card">
            <div class="img-container">
                <!-- A hivatkozás most már tuti jó lesz, mert a backend egyben küldi -->
                <img src="${p.image}" alt="${p.name}" onerror="this.src='helyettesito-kep.jpg'">
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