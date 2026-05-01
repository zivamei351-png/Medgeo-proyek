let selectedPharmacy = null;

function formatDistance(distanceKm) {
    return window.MedGeoCatalogData.formatDistance(distanceKm);
}

function getProducts() {
    return window.MedGeoCatalogData.buildShoppingProducts(selectedPharmacy);
}

function openCategoryLanding(departmentSlug) {
    if (!departmentSlug || departmentSlug === 'all') {
        return;
    }

    window.location.href = `kategoriobat.html?department=${departmentSlug}`;
}

function renderDepartmentFilters(products) {
    const departmentGrid = document.getElementById('catalog-department-grid');
    const filterStrip = document.getElementById('shopping-category-strip');
    const grouped = products.reduce(function(result, product) {
        if (!result[product.departmentSlug]) {
            result[product.departmentSlug] = {
                name: product.department,
                slug: product.departmentSlug,
                count: 0,
                featuredCount: 0,
                startingPrice: product.price
            };
        }

        result[product.departmentSlug].count += 1;
        result[product.departmentSlug].featuredCount += product.featured ? 1 : 0;
        result[product.departmentSlug].startingPrice = Math.min(result[product.departmentSlug].startingPrice, product.price);
        return result;
    }, {});
    const departments = Object.keys(grouped).map(function(key) {
        return grouped[key];
    }).sort(function(first, second) {
        return first.name.localeCompare(second.name, 'id');
    });

    filterStrip.innerHTML = departments.map(function(department) {
        return `<button type="button" class="shopping-category-chip" onclick="openCategoryLanding('${department.slug}')">${department.name} <span>${department.count}</span></button>`;
    }).join('');

    departmentGrid.innerHTML = departments.map(function(department) {
        return `
            <article class="catalog-department-card">
                <div class="catalog-department-card-top">
                    <span>${department.featuredCount} unggulan</span>
                    <strong>${department.name}</strong>
                </div>
                <p>${department.count} produk tersedia dengan harga mulai dari ${window.MedGeoCatalogData.formatCurrency(department.startingPrice)}.</p>
                <div class="catalog-department-card-actions">
                    <button type="button" class="button start catalog-inline-button" onclick="openCategoryLanding('${department.slug}')">Pilih Kategori</button>
                </div>
            </article>
        `;
    }).join('');
}

function renderCatalogHeader(pharmacy) {
    const statusLabel = pharmacy.isOpen === null
        ? 'Status belum tersedia'
        : (pharmacy.isOpen ? 'Buka sekarang' : 'Sedang tutup');
    document.getElementById('catalog-pharmacy-name').textContent = `Semua kategori obat di ${pharmacy.name}`;
    document.getElementById('catalog-description').textContent = `Pilih kategori obat dari ${pharmacy.name}, lalu lanjutkan ke halaman kategori untuk tambah keranjang dan checkout.`;
    document.getElementById('catalog-pharmacy-distance').textContent = formatDistance(pharmacy.distanceKm);
    document.getElementById('catalog-pharmacy-meta').textContent = `${pharmacy.hours} | ${statusLabel} | ${pharmacy.label}`;
    document.getElementById('catalog-address').textContent = pharmacy.address;
    document.getElementById('catalog-hours').textContent = pharmacy.hours;
    document.getElementById('catalog-status').textContent = statusLabel;
}

function initCatalogPage() {
    if (window.MedGeoAuth && !window.MedGeoAuth.getAuthenticatedUser()) {
        window.location.href = 'index.html';
        return;
    }

    selectedPharmacy = window.MedGeoCatalogData.getSelectedPharmacy();

    if (!selectedPharmacy) {
        document.getElementById('catalog-empty-state').style.display = 'block';
        document.getElementById('catalog-content').style.display = 'none';
        return;
    }

    const products = getProducts();
    document.getElementById('catalog-empty-state').style.display = 'none';
    document.getElementById('catalog-content').style.display = 'grid';
    renderCatalogHeader(selectedPharmacy);
    renderDepartmentFilters(products);
    document.getElementById('catalog-category-count').textContent = `${window.MedGeoCatalogData.getDepartmentSummaries().length} kategori`;
    document.getElementById('catalog-product-count').textContent = `${products.length} produk`;
}

window.addEventListener('load', initCatalogPage);
