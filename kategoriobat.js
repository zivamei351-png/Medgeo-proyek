let selectedDepartment = null;
let selectedPharmacy = null;
let activePharmacy = null;
let categoryProducts = [];
let shoppingCart = [];
let isShoppingCartOpen = false;

function formatCurrency(amount) {
    return window.MedGeoCatalogData.formatCurrency(amount);
}

function formatDistance(distanceKm) {
    return window.MedGeoCatalogData.formatDistance(distanceKm);
}

function buildProductCard(product) {
    const imageMarkup = product.image
        ? `<img src="${product.image}" alt="${product.name}" class="shopping-product-image">`
        : `<div class="shopping-product-image shopping-product-image-placeholder">${product.name.charAt(0)}</div>`;

    return `
        <article class="shopping-product-card shopping-product-card-large">
            <div class="shopping-product-media">
                ${imageMarkup}
                <div class="shopping-product-head">
                    <span class="shopping-product-badge">${product.badge}</span>
                    <h4>${product.name}</h4>
                    <p class="shopping-product-category">${product.category} | ${product.dosage}</p>
                </div>
            </div>
            <p class="shopping-product-pack">${product.pack}</p>
            <p>${product.note}</p>
            <div class="shopping-product-footer">
                <div>
                    <strong>${formatCurrency(product.price)}</strong>
                    <span class="shopping-product-pharmacy">${product.prescription ? 'Perlu resep tenaga medis' : activePharmacy.name}</span>
                </div>
                <button type="button" onclick="addProductToCart('${product.id}')">Tambah</button>
            </div>
        </article>
    `;
}

function renderShoppingCart() {
    const cartState = document.getElementById('shopping-cart-state');
    const cartList = document.getElementById('shopping-cart-list');
    const cartCount = document.getElementById('shopping-cart-count');
    const cartSubtotal = document.getElementById('shopping-cart-subtotal');
    const cartServiceFee = document.getElementById('shopping-cart-service-fee');
    const cartDeliveryFee = document.getElementById('shopping-cart-delivery-fee');
    const cartTotal = document.getElementById('shopping-cart-total');
    const cartTotalPreview = document.getElementById('shopping-cart-total-preview');
    const cartTotalPreviewItems = document.getElementById('shopping-cart-total-preview-items');
    const cartPharmacyName = document.getElementById('shopping-cart-pharmacy-name');
    const cartPharmacyMeta = document.getElementById('shopping-cart-pharmacy-meta');
    const cartEstimate = document.getElementById('shopping-cart-estimate');
    const floatingCartButton = document.getElementById('floating-cart-button');
    const floatingCartCount = document.getElementById('floating-cart-count');
    const totalQty = shoppingCart.reduce(function(sum, item) {
        return sum + item.quantity;
    }, 0);
    const subtotal = shoppingCart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
    const paymentMethod = document.getElementById('shopping-payment-method').value;
    const fulfillmentMethod = document.getElementById('shopping-fulfillment-method').value;
    const deliveryFee = fulfillmentMethod === 'Ambil di Apotek' ? 0 : (fulfillmentMethod === 'Same Day' ? 18000 : 10000);
    const serviceFee = shoppingCart.length ? window.MedGeoCatalogData.SHOPPING_SERVICE_FEE : 0;
    const total = subtotal + serviceFee + deliveryFee;
    const estimateLabel = fulfillmentMethod === 'Ambil di Apotek'
        ? 'Siap diambil hari ini'
        : (fulfillmentMethod === 'Same Day' ? 'Antar 2-4 jam' : 'Antar 30-90 menit');

    cartPharmacyName.textContent = activePharmacy.name;
    cartPharmacyMeta.textContent = `${formatDistance(activePharmacy.distanceKm)} | ${activePharmacy.hours}`;
    cartEstimate.textContent = estimateLabel;

    if (!shoppingCart.length) {
        cartState.textContent = 'Belum ada produk di keranjang. Pilih produk dari kategori ini untuk mulai belanja.';
        cartList.innerHTML = `
            <div class="shopping-cart-empty-card">
                <strong>Keranjang masih kosong</strong>
                <p>Tambahkan obat dari kategori yang sedang dibuka. Setelah itu Anda bisa langsung checkout dari halaman ini.</p>
            </div>
        `;
        cartCount.textContent = '0 item';
        cartSubtotal.textContent = formatCurrency(0);
        cartServiceFee.textContent = formatCurrency(0);
        cartDeliveryFee.textContent = formatCurrency(0);
        cartTotal.textContent = formatCurrency(0);
        cartTotalPreview.textContent = formatCurrency(0);
        cartTotalPreviewItems.textContent = '0 item';
        floatingCartButton.hidden = true;
        floatingCartCount.textContent = '0';
        closeShoppingCart();
        return;
    }

    cartState.textContent = `${totalQty} item siap diproses dari ${activePharmacy.name} dengan ${paymentMethod} dan ${fulfillmentMethod}.`;
    cartList.innerHTML = shoppingCart.map(function(item) {
        return `
            <div class="shopping-cart-item">
                <div class="shopping-cart-item-main">
                    <strong>${item.name}</strong>
                    <p>${item.pack}</p>
                    <span class="shopping-cart-item-price">${formatCurrency(item.price)} / item</span>
                </div>
                <div class="shopping-cart-item-meta">
                    <div class="shopping-cart-qty">
                        <button type="button" onclick="changeCartQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" onclick="changeCartQuantity('${item.id}', 1)">+</button>
                    </div>
                    <span class="shopping-cart-item-total">${formatCurrency(item.price * item.quantity)}</span>
                    <button type="button" class="shopping-cart-remove-button" onclick="removeProductFromCart('${item.id}')">Hapus</button>
                </div>
            </div>
        `;
    }).join('');

    cartCount.textContent = `${totalQty} item`;
    cartTotalPreviewItems.textContent = `${totalQty} item`;
    cartSubtotal.textContent = formatCurrency(subtotal);
    cartServiceFee.textContent = formatCurrency(serviceFee);
    cartDeliveryFee.textContent = formatCurrency(deliveryFee);
    cartTotal.textContent = formatCurrency(total);
    cartTotalPreview.textContent = formatCurrency(total);
    floatingCartButton.hidden = false;
    floatingCartCount.textContent = String(totalQty);
}

function openShoppingCart() {
    const cartPanel = document.getElementById('shopping-cart-panel');
    const cartBackdrop = document.getElementById('shopping-cart-backdrop');
    if (!cartPanel || !cartBackdrop || !shoppingCart.length) {
        return;
    }

    isShoppingCartOpen = true;
    cartPanel.classList.remove('shopping-cart-panel-hidden');
    cartBackdrop.classList.remove('shopping-cart-panel-hidden');
    document.body.classList.add('shopping-cart-open');
}

function closeShoppingCart() {
    const cartPanel = document.getElementById('shopping-cart-panel');
    const cartBackdrop = document.getElementById('shopping-cart-backdrop');
    if (!cartPanel || !cartBackdrop) {
        return;
    }

    isShoppingCartOpen = false;
    cartPanel.classList.add('shopping-cart-panel-hidden');
    cartBackdrop.classList.add('shopping-cart-panel-hidden');
    document.body.classList.remove('shopping-cart-open');
}

function addProductToCart(productId) {
    const product = categoryProducts.find(function(item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }

    const existingItem = shoppingCart.find(function(item) {
        return item.id === product.id;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({
            id: product.id,
            name: product.name,
            pharmacyName: activePharmacy.name,
            price: product.price,
            pack: product.pack,
            quantity: 1
        });
    }

    renderShoppingCart();
}

function removeProductFromCart(productId) {
    shoppingCart = shoppingCart.filter(function(item) {
        return item.id !== productId;
    });
    renderShoppingCart();
}

function changeCartQuantity(productId, delta) {
    shoppingCart = shoppingCart.reduce(function(list, item) {
        if (item.id !== productId) {
            list.push(item);
            return list;
        }

        const nextQuantity = item.quantity + delta;
        if (nextQuantity > 0) {
            list.push(Object.assign({}, item, { quantity: nextQuantity }));
        }

        return list;
    }, []);
    renderShoppingCart();
}

function generateReceipt() {
    const paymentMethod = document.getElementById('shopping-payment-method').value;
    const fulfillmentMethod = document.getElementById('shopping-fulfillment-method').value;
    const customerName = document.getElementById('shopping-customer-name').value.trim();
    const customerPhone = document.getElementById('shopping-customer-phone').value.trim();
    const orderNotes = document.getElementById('shopping-order-notes').value.trim();
    const totalItems = shoppingCart.reduce(function(sum, item) {
        return sum + item.quantity;
    }, 0);
    const subtotal = shoppingCart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
    const deliveryFee = fulfillmentMethod === 'Ambil di Apotek' ? 0 : (fulfillmentMethod === 'Same Day' ? 18000 : 10000);
    const serviceFee = shoppingCart.length ? window.MedGeoCatalogData.SHOPPING_SERVICE_FEE : 0;
    const total = subtotal + serviceFee + deliveryFee;
    const receiptNumber = `MDG-${Date.now().toString().slice(-8)}`;

    return {
        number: receiptNumber,
        createdAt: new Date().toLocaleString('id-ID'),
        pharmacyName: activePharmacy.name,
        pharmacyAddress: activePharmacy.address,
        items: shoppingCart.map(function(item) {
            return Object.assign({}, item, {
                subtotal: item.price * item.quantity
            });
        }),
        paymentMethod: paymentMethod,
        fulfillmentMethod: fulfillmentMethod,
        customerName: customerName || 'Pelanggan MedGeo',
        customerPhone: customerPhone || '-',
        orderNotes: orderNotes || '-',
        subtotal: subtotal,
        serviceFee: serviceFee,
        deliveryFee: deliveryFee,
        totalItems: totalItems,
        total: total
    };
}

function checkoutShoppingCart() {
    if (!shoppingCart.length) {
        alert('Keranjang masih kosong. Tambahkan produk dulu sebelum checkout.');
        return;
    }

    const customerName = document.getElementById('shopping-customer-name').value.trim();
    const customerPhone = document.getElementById('shopping-customer-phone').value.trim();

    if (!customerName || !customerPhone) {
        alert('Lengkapi nama penerima dan nomor telepon sebelum checkout.');
        return;
    }

    const receipt = generateReceipt();
    sessionStorage.setItem(window.MedGeoCatalogData.MEDGEO_RECEIPT_KEY, JSON.stringify(receipt));
    sessionStorage.setItem(window.MedGeoCatalogData.MEDGEO_CHECKOUT_STATUS_KEY, JSON.stringify({
        number: receipt.number,
        total: receipt.total,
        totalItems: receipt.totalItems,
        createdAt: Date.now()
    }));
    window.location.href = 'strukbelanja.html';
}

function renderCategoryPage() {
    if (window.MedGeoAuth && !window.MedGeoAuth.getAuthenticatedUser()) {
        window.location.href = 'index.html';
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const departmentSlug = params.get('department');
    const emptyState = document.getElementById('category-empty-state');
    const content = document.getElementById('category-content');

    if (!departmentSlug) {
        emptyState.style.display = 'block';
        content.style.display = 'none';
        return;
    }

    selectedDepartment = window.MedGeoCatalogData.findDepartmentBySlug(departmentSlug);
    if (!selectedDepartment) {
        emptyState.style.display = 'block';
        content.style.display = 'none';
        return;
    }

    selectedPharmacy = window.MedGeoCatalogData.getSelectedPharmacy();
    activePharmacy = selectedPharmacy || {
        id: 'category-preview',
        name: 'Apotek Pilihan MedGeo',
        address: 'Pilih apotek agar produk menyesuaikan lokasi Anda',
        distanceKm: 0,
        hours: 'Ikuti jam operasional apotek',
        label: 'Preview kategori',
        isOpen: null
    };
    categoryProducts = window.MedGeoCatalogData.buildShoppingProducts(activePharmacy).filter(function(product) {
        return product.departmentSlug === departmentSlug;
    });
    const featuredProducts = categoryProducts.filter(function(product) {
        return product.featured;
    });
    const orderedProducts = featuredProducts.length ? featuredProducts.concat(categoryProducts.filter(function(product) {
        return !product.featured;
    })) : categoryProducts;

    emptyState.style.display = 'none';
    content.style.display = 'grid';
    document.getElementById('category-title').textContent = selectedDepartment.name;
    document.getElementById('category-description').textContent = `Halaman ini menampilkan lebih banyak item obat untuk kategori ${selectedDepartment.name.toLowerCase()} dalam kartu yang lebih besar agar gambar dan detail produk terlihat lebih jelas.`;
    document.getElementById('category-product-count').textContent = `${selectedDepartment.itemCount} produk`;
    document.getElementById('category-featured-count').textContent = `${selectedDepartment.featuredCount} rekomendasi`;
    document.getElementById('category-start-price').textContent = formatCurrency(selectedDepartment.startingPrice);
    document.getElementById('category-product-grid').innerHTML = orderedProducts.map(buildProductCard).join('');

    const pharmacyCard = document.getElementById('category-pharmacy-card');
    pharmacyCard.style.display = 'grid';
    document.getElementById('category-pharmacy-name').textContent = activePharmacy.name;
    document.getElementById('category-pharmacy-meta').textContent = `${formatDistance(activePharmacy.distanceKm)} | ${activePharmacy.address}`;

    const activeUser = window.MedGeoAuth ? window.MedGeoAuth.getAuthenticatedUser() : null;
    if (activeUser) {
        document.getElementById('shopping-customer-name').value = activeUser.fullname || activeUser.to_name || '';
        document.getElementById('shopping-customer-phone').value = activeUser.phone || '';
    }
    document.getElementById('shopping-payment-method').addEventListener('change', renderShoppingCart);
    document.getElementById('shopping-fulfillment-method').addEventListener('change', renderShoppingCart);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isShoppingCartOpen) {
            closeShoppingCart();
        }
    });
    renderShoppingCart();
}

window.addEventListener('load', renderCategoryPage);
