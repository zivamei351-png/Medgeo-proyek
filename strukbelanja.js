let latestReceipt = null;

function formatCurrency(amount) {
    return window.MedGeoCatalogData.formatCurrency(amount);
}

function loadLatestReceipt() {
    try {
        return JSON.parse(sessionStorage.getItem(window.MedGeoCatalogData.MEDGEO_RECEIPT_KEY) || 'null');
    } catch (error) {
        console.warn('Gagal membaca struk terbaru:', error);
        return null;
    }
}

function loadCheckoutStatus() {
    try {
        return JSON.parse(sessionStorage.getItem(window.MedGeoCatalogData.MEDGEO_CHECKOUT_STATUS_KEY) || 'null');
    } catch (error) {
        console.warn('Gagal membaca status checkout:', error);
        return null;
    }
}

function renderCheckoutBanner() {
    const banner = document.getElementById('receipt-success-banner');
    if (!banner || !latestReceipt) {
        sessionStorage.removeItem(window.MedGeoCatalogData.MEDGEO_CHECKOUT_STATUS_KEY);
        return;
    }

    const status = loadCheckoutStatus();
    if (!status || status.number !== latestReceipt.number) {
        banner.style.display = 'none';
        return;
    }

    banner.style.display = 'grid';
    document.getElementById('receipt-success-title').textContent = `Pesanan ${latestReceipt.number} sudah dibuat`;
    document.getElementById('receipt-success-copy').textContent = `Total ${latestReceipt.totalItems} item sebesar ${formatCurrency(latestReceipt.total)} siap dicetak atau diunduh sekarang.`;
    sessionStorage.removeItem(window.MedGeoCatalogData.MEDGEO_CHECKOUT_STATUS_KEY);
}

function renderReceiptPage() {
    if (window.MedGeoAuth && !window.MedGeoAuth.getAuthenticatedUser()) {
        window.location.href = 'index.html';
        return;
    }

    latestReceipt = loadLatestReceipt();
    const emptyState = document.getElementById('receipt-empty-state');
    const content = document.getElementById('receipt-content');

    if (!latestReceipt) {
        emptyState.style.display = 'block';
        content.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    content.style.display = 'grid';
    document.getElementById('receipt-number').textContent = latestReceipt.number;
    document.getElementById('receipt-meta-line').textContent = `Total ${latestReceipt.totalItems} item | ${formatCurrency(latestReceipt.total)}`;
    document.getElementById('receipt-pharmacy-name').textContent = latestReceipt.pharmacyName;
    document.getElementById('receipt-pharmacy-address').textContent = latestReceipt.pharmacyAddress;
    document.getElementById('receipt-created-at').textContent = latestReceipt.createdAt;
    document.getElementById('receipt-payment-method').textContent = latestReceipt.paymentMethod || '-';
    document.getElementById('receipt-fulfillment-method').textContent = latestReceipt.fulfillmentMethod || '-';
    document.getElementById('receipt-customer-name').textContent = latestReceipt.customerName || '-';
    document.getElementById('receipt-customer-phone').textContent = latestReceipt.customerPhone || '-';
    document.getElementById('receipt-subtotal').textContent = formatCurrency(latestReceipt.subtotal || 0);
    document.getElementById('receipt-service-fee').textContent = formatCurrency(latestReceipt.serviceFee || 0);
    document.getElementById('receipt-delivery-fee').textContent = formatCurrency(latestReceipt.deliveryFee || 0);
    document.getElementById('receipt-total-items').textContent = `${latestReceipt.totalItems} item`;
    document.getElementById('receipt-total-price').textContent = formatCurrency(latestReceipt.total);
    document.getElementById('receipt-order-notes').textContent = latestReceipt.orderNotes || '-';
    document.getElementById('receipt-items-list').innerHTML = latestReceipt.items.map(function(item) {
        return `
            <div class="receipt-item-row">
                <div class="receipt-item-name">
                    <strong>${item.name}</strong>
                    <p>${item.pack || ''}</p>
                </div>
                <span>${item.quantity}</span>
                <span>${formatCurrency(item.price)}</span>
                <span>${formatCurrency(item.subtotal)}</span>
            </div>
        `;
    }).join('');
    renderCheckoutBanner();
}

function printReceipt() {
    window.print();
}

function buildPrintableReceiptMarkup() {
    if (!latestReceipt) {
        return '';
    }

    const itemsMarkup = latestReceipt.items.map(function(item) {
        return `
            <div class="print-receipt-item">
                <div class="print-receipt-item-name">
                    <strong>${item.name}</strong>
                    <p>${item.pack || '-'}</p>
                </div>
                <div class="print-receipt-item-meta">
                    <span>${item.quantity} x ${formatCurrency(item.price)}</span>
                    <strong>${formatCurrency(item.subtotal)}</strong>
                </div>
            </div>
        `;
    }).join('');

    return `
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preview Cetak ${latestReceipt.number}</title>
            <style>
                * { box-sizing: border-box; }
                body {
                    margin: 0;
                    font-family: "Courier New", Courier, monospace;
                    background: #eef4ff;
                    color: #1f2937;
                    padding: 24px;
                }
                .print-preview-shell {
                    max-width: 420px;
                    margin: 0 auto;
                }
                .print-preview-toolbar {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-bottom: 18px;
                }
                .print-preview-toolbar button {
                    border: none;
                    border-radius: 999px;
                    padding: 12px 18px;
                    font: inherit;
                    font-weight: 700;
                    cursor: pointer;
                    background: #0b51c5;
                    color: #ffffff;
                }
                .print-preview-toolbar button.secondary {
                    background: #ffffff;
                    color: #0b51c5;
                    border: 1px solid rgba(11, 81, 197, 0.18);
                }
                .print-preview-note {
                    margin: 0 0 18px;
                    text-align: center;
                    color: #516175;
                    font-size: 13px;
                    line-height: 1.6;
                }
                .print-receipt {
                    background: #fffefb;
                    border: 1px dashed rgba(11, 81, 197, 0.22);
                    border-radius: 18px;
                    padding: 20px 16px 24px;
                    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.08);
                }
                .print-receipt-header {
                    text-align: center;
                }
                .print-receipt-header img {
                    width: min(100%, 180px);
                    display: block;
                    margin: 0 auto 10px;
                }
                .print-receipt-label,
                .print-receipt-section-label,
                .print-receipt-row span:first-child {
                    display: block;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #64748b;
                    margin-bottom: 4px;
                }
                .print-receipt-header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .print-receipt-header p,
                .print-receipt-header strong,
                .print-receipt-block p {
                    margin: 0;
                }
                .print-receipt-header strong {
                    display: block;
                    margin-top: 6px;
                }
                .print-receipt-meta {
                    margin-top: 10px;
                    color: #475569;
                    font-size: 13px;
                }
                .print-divider {
                    border-top: 2px dashed rgba(11, 81, 197, 0.18);
                    margin: 14px 0;
                }
                .print-receipt-rows,
                .print-receipt-total {
                    display: grid;
                    gap: 10px;
                }
                .print-receipt-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    align-items: start;
                }
                .print-receipt-block {
                    display: grid;
                    gap: 12px;
                }
                .print-receipt-item-list {
                    display: grid;
                    gap: 12px;
                }
                .print-receipt-item {
                    border-bottom: 1px dashed rgba(11, 81, 197, 0.16);
                    padding-bottom: 10px;
                }
                .print-receipt-item:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .print-receipt-item-name strong {
                    display: block;
                    margin-bottom: 4px;
                }
                .print-receipt-item-name p {
                    color: #64748b;
                    font-size: 13px;
                }
                .print-receipt-item-meta {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    margin-top: 8px;
                    font-size: 13px;
                }
                .print-receipt-grandtotal {
                    border-top: 2px solid rgba(11, 81, 197, 0.18);
                    padding-top: 12px;
                    font-weight: 700;
                    font-size: 16px;
                }
                .print-receipt-footer {
                    text-align: center;
                    color: #64748b;
                    font-size: 13px;
                    line-height: 1.6;
                }
                @media print {
                    body {
                        background: #ffffff;
                        padding: 0;
                    }
                    .print-preview-toolbar,
                    .print-preview-note {
                        display: none !important;
                    }
                    .print-preview-shell {
                        max-width: 80mm;
                    }
                    .print-receipt {
                        border: none;
                        border-radius: 0;
                        box-shadow: none;
                        padding: 0 0 8mm;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-preview-shell">
                <div class="print-preview-toolbar">
                    <button type="button" onclick="window.print()">Cetak / Simpan PDF</button>
                    <button type="button" class="secondary" onclick="window.close()">Tutup</button>
                </div>
                <p class="print-preview-note">Gunakan dialog print untuk memilih printer atau <strong>Save as PDF</strong> agar hasilnya mengikuti format struk cetak.</p>
                <article class="print-receipt">
                    <header class="print-receipt-header">
                        <img src="medgeo-logo.png" alt="Logo MedGeo">
                        <span class="print-receipt-label">Medical Geographic</span>
                        <h1>Struk Belanja</h1>
                        <span class="print-receipt-section-label" style="margin-top: 10px;">Apotek</span>
                        <strong>${latestReceipt.pharmacyName}</strong>
                        <p>${latestReceipt.pharmacyAddress}</p>
                        <p class="print-receipt-meta">Total ${latestReceipt.totalItems} item | ${formatCurrency(latestReceipt.total)}</p>
                    </header>
                    <div class="print-divider"></div>
                    <section class="print-receipt-rows">
                        <div class="print-receipt-row"><span>No. Struk</span><strong>${latestReceipt.number}</strong></div>
                        <div class="print-receipt-row"><span>Checkout</span><strong>${latestReceipt.createdAt}</strong></div>
                        <div class="print-receipt-row"><span>Pembayaran</span><strong>${latestReceipt.paymentMethod || '-'}</strong></div>
                        <div class="print-receipt-row"><span>Metode Pesanan</span><strong>${latestReceipt.fulfillmentMethod || '-'}</strong></div>
                    </section>
                    <div class="print-divider"></div>
                    <section class="print-receipt-block">
                        <div>
                            <span class="print-receipt-section-label">Penerima</span>
                            <strong>${latestReceipt.customerName || '-'}</strong>
                            <p>${latestReceipt.customerPhone || '-'}</p>
                        </div>
                    </section>
                    <div class="print-divider"></div>
                    <section class="print-receipt-item-list">
                        ${itemsMarkup}
                    </section>
                    <div class="print-divider"></div>
                    <section class="print-receipt-total">
                        <div class="print-receipt-row"><span>Subtotal</span><strong>${formatCurrency(latestReceipt.subtotal || 0)}</strong></div>
                        <div class="print-receipt-row"><span>Biaya Layanan</span><strong>${formatCurrency(latestReceipt.serviceFee || 0)}</strong></div>
                        <div class="print-receipt-row"><span>Biaya Pengiriman</span><strong>${formatCurrency(latestReceipt.deliveryFee || 0)}</strong></div>
                        <div class="print-receipt-row"><span>Total Item</span><strong>${latestReceipt.totalItems} item</strong></div>
                        <div class="print-receipt-row print-receipt-grandtotal"><span>Total Bayar</span><strong>${formatCurrency(latestReceipt.total)}</strong></div>
                    </section>
                    <div class="print-divider"></div>
                    <section class="print-receipt-block">
                        <div>
                            <span class="print-receipt-section-label">Catatan Pesanan</span>
                            <p>${latestReceipt.orderNotes || '-'}</p>
                        </div>
                    </section>
                    <footer class="print-receipt-footer">
                        <p>Terima kasih telah berbelanja di MedGeo.</p>
                        <p>Simpan struk ini sebagai bukti transaksi Anda.</p>
                    </footer>
                </article>
            </div>
        </body>
        </html>
    `;
}

function openPrintPreview() {
    if (!latestReceipt) {
        return;
    }

    const previewWindow = window.open('', '_blank', 'width=520,height=760');
    if (!previewWindow) {
        alert('Preview cetak tidak bisa dibuka. Pastikan popup browser diizinkan.');
        return;
    }

    previewWindow.document.open();
    previewWindow.document.write(buildPrintableReceiptMarkup());
    previewWindow.document.close();
}

function wrapReceiptLines(text, maxChars) {
    const words = String(text || '').split(/\s+/);
    const lines = [];
    let currentLine = '';

    words.forEach(function(word) {
        const candidate = currentLine ? `${currentLine} ${word}` : word;
        if (candidate.length > maxChars && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = candidate;
        }
    });

    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
}

function buildReceiptCanvas() {
    if (!latestReceipt) {
        return null;
    }

    const width = 720;
    const left = 42;
    const right = width - 42;
    const lineHeight = 28;
    const smallLineHeight = 22;
    let y = 48;
    const dynamicHeight = 860 + (latestReceipt.items.length * 92);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = dynamicHeight;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#fffdf7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1e2f28';

    function divider() {
        y += 8;
        ctx.strokeStyle = '#8aa79a';
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(left, y);
        ctx.lineTo(right, y);
        ctx.stroke();
        ctx.setLineDash([]);
        y += 18;
    }

    function text(value, x, size, weight) {
        ctx.font = `${weight || '400'} ${size || 24}px "Courier New", monospace`;
        ctx.fillStyle = '#1e2f28';
        ctx.fillText(String(value || ''), x, y);
    }

    function rightText(value, size, weight) {
        ctx.font = `${weight || '400'} ${size || 24}px "Courier New", monospace`;
        ctx.fillStyle = '#1e2f28';
        const metrics = ctx.measureText(String(value || ''));
        ctx.fillText(String(value || ''), right - metrics.width, y);
    }

    text('MEDICAL GEOGRAPHIC', left, 30, '700');
    y += lineHeight;
    text('STRUK BELANJA', left, 26, '700');
    y += smallLineHeight;
    text(`Total ${latestReceipt.totalItems} item | ${formatCurrency(latestReceipt.total)}`, left, 18, '400');

    divider();

    text('No. Struk', left, 18, '400');
    rightText(latestReceipt.number, 20, '700');
    y += lineHeight;
    text('Checkout', left, 18, '400');
    rightText(latestReceipt.createdAt, 18, '700');
    y += lineHeight;
    text('Pembayaran', left, 18, '400');
    rightText(latestReceipt.paymentMethod || '-', 18, '700');
    y += lineHeight;
    text('Metode Pesanan', left, 18, '400');
    rightText(latestReceipt.fulfillmentMethod || '-', 18, '700');

    divider();

    text('Apotek', left, 18, '400');
    y += lineHeight;
    text(latestReceipt.pharmacyName, left, 22, '700');
    y += lineHeight;
    wrapReceiptLines(latestReceipt.pharmacyAddress, 48).forEach(function(line) {
        text(line, left, 18, '400');
        y += smallLineHeight;
    });
    y += 8;
    text('Penerima', left, 18, '400');
    y += lineHeight;
    text(latestReceipt.customerName || '-', left, 20, '700');
    y += smallLineHeight;
    text(latestReceipt.customerPhone || '-', left, 18, '400');

    divider();

    text('Produk', left, 18, '700');
    text('Qty', 420, 18, '700');
    text('Harga', 500, 18, '700');
    rightText('Subtotal', 18, '700');
    y += lineHeight;

    latestReceipt.items.forEach(function(item) {
        wrapReceiptLines(item.name, 26).forEach(function(line, index) {
            text(line, left, 18, index === 0 ? '700' : '400');
            if (index === 0) {
                text(String(item.quantity), 430, 18, '400');
                text(formatCurrency(item.price), 490, 18, '400');
                rightText(formatCurrency(item.subtotal), 18, '700');
            }
            y += smallLineHeight;
        });

        if (item.pack) {
            wrapReceiptLines(item.pack, 34).forEach(function(line) {
                text(line, left, 16, '400');
                y += 20;
            });
        }

        y += 8;
    });

    divider();

    text('Subtotal', left, 18, '400');
    rightText(formatCurrency(latestReceipt.subtotal || 0), 20, '700');
    y += lineHeight;
    text('Biaya Layanan', left, 18, '400');
    rightText(formatCurrency(latestReceipt.serviceFee || 0), 20, '700');
    y += lineHeight;
    text('Biaya Kirim', left, 18, '400');
    rightText(formatCurrency(latestReceipt.deliveryFee || 0), 20, '700');
    y += lineHeight;
    text('Total Item', left, 18, '400');
    rightText(`${latestReceipt.totalItems} item`, 20, '700');
    y += lineHeight;
    text('TOTAL BAYAR', left, 22, '700');
    rightText(formatCurrency(latestReceipt.total), 24, '700');

    divider();

    wrapReceiptLines(`Catatan: ${latestReceipt.orderNotes || '-'}`, 44).forEach(function(line) {
        text(line, left, 18, '400');
        y += smallLineHeight;
    });
    y += 8;
    text('Terima kasih telah berbelanja', left, 18, '400');
    y += smallLineHeight;
    text('di MedGeo. Simpan struk ini.', left, 18, '400');

    return canvas;
}

function downloadCanvasAsJpg(canvas, filename) {
    const dataUrl = canvas.toDataURL('image/jpeg', 0.96);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function concatPdfArrays(chunks) {
    const totalLength = chunks.reduce(function(sum, chunk) {
        return sum + chunk.length;
    }, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;

    chunks.forEach(function(chunk) {
        result.set(chunk, offset);
        offset += chunk.length;
    });

    return result;
}

async function buildPdfFromCanvas(canvas) {
    const jpegBlob = await new Promise(function(resolve) {
        canvas.toBlob(resolve, 'image/jpeg', 0.96);
    });
    const jpegBuffer = new Uint8Array(await jpegBlob.arrayBuffer());
    const encoder = new TextEncoder();
    const pageWidth = 226.77;
    const pageHeight = (canvas.height / canvas.width) * pageWidth;
    const contentStream = encoder.encode(`q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/Im0 Do\nQ\n`);

    const objects = [
        encoder.encode('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'),
        encoder.encode('2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj\n'),
        encoder.encode(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`),
        concatPdfArrays([
            encoder.encode(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBuffer.length} >>\nstream\n`),
            jpegBuffer,
            encoder.encode('\nendstream\nendobj\n')
        ]),
        concatPdfArrays([
            encoder.encode(`5 0 obj\n<< /Length ${contentStream.length} >>\nstream\n`),
            contentStream,
            encoder.encode('endstream\nendobj\n')
        ])
    ];

    let offset = 0;
    const pdfChunks = [encoder.encode('%PDF-1.4\n')];
    offset += pdfChunks[0].length;
    const xrefOffsets = [0];

    objects.forEach(function(objectBytes) {
        xrefOffsets.push(offset);
        pdfChunks.push(objectBytes);
        offset += objectBytes.length;
    });

    const xrefStart = offset;
    let xref = `xref\n0 ${xrefOffsets.length}\n0000000000 65535 f \n`;
    xrefOffsets.slice(1).forEach(function(entryOffset) {
        xref += `${String(entryOffset).padStart(10, '0')} 00000 n \n`;
    });

    pdfChunks.push(encoder.encode(xref));
    pdfChunks.push(encoder.encode(`trailer\n<< /Size ${xrefOffsets.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`));

    return new Blob([concatPdfArrays(pdfChunks)], { type: 'application/pdf' });
}

function downloadReceiptImage() {
    if (!latestReceipt) {
        return;
    }

    const canvas = buildReceiptCanvas();
    if (!canvas) {
        return;
    }

    downloadCanvasAsJpg(canvas, `${latestReceipt.number}.jpg`);
}

window.addEventListener('load', renderReceiptPage);
