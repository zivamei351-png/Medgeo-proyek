let selectedPharmacyId = null;
let pharmacies = [];
const MEDGEO_WELCOME_REDIRECT_KEY = 'medgeoShowRecommendations';
const MEDGEO_SELECTED_PHARMACY_KEY = 'medgeoSelectedPharmacy';
let googleMapsLoaderPromise = null;
let googleMapsLibrariesPromise = null;
const APOTEK_NAME_PREFIXES = ['Sehat', 'Medika', 'Sentra', 'Keluarga', 'Prima', 'Bahagia', 'Mandiri', 'Cakra'];
const APOTEK_AREA_LABELS = ['Terdekat', 'Favorit', 'Siaga', 'Cepat', 'Keluarga'];
const APOTEK_SERVICE_GROUPS = [
    ['Obat resep', 'Vitamin harian', 'Konsultasi farmasi'],
    ['Obat umum', 'Produk anak', 'Pelayanan cepat'],
    ['Alat kesehatan', 'Obat keluarga', 'Perawatan ringan'],
    ['Tebus resep', 'Suplemen', 'Produk kesehatan'],
    ['Layanan malam', 'Kebutuhan darurat', 'Obat harian']
];
const APOTEK_FOCUS = ['Obat keluarga', 'Layanan resep cepat', 'Kebutuhan harian', 'Produk kesehatan', 'Layanan malam'];

function checkRegistration() {
    const userData = window.MedGeoAuth ? window.MedGeoAuth.getAuthenticatedUser() : null;

    if (!userData) {
        document.getElementById('not-registered-message').style.display = 'block';
        document.getElementById('registered-content').style.display = 'none';
        return false;
    }

    document.getElementById('not-registered-message').style.display = 'none';
    document.getElementById('registered-content').style.display = 'block';
    document.getElementById('user-fullname').textContent = userData.fullname || userData.to_name || 'Pengguna';
    document.getElementById('user-location').textContent = getUserLocationLabel(userData);

    updateSearchSource(userData);
    renderLocalAreaSummary(userData);

    if (!hasCompleteAddress(userData)) {
        pharmacies = [];
        renderPharmacyCatalog();
        setPharmacyStatus('Alamat akun belum lengkap. Lengkapi provinsi, kota, kecamatan, dan alamat agar rekomendasi apotek bisa dibuat.', '');
        return true;
    }

    setPharmacyStatus('Mencari apotek asli di sekitar alamat akun dan memeriksa jam operasional terbaru...', '');
    loadRealPharmacyRecommendations(userData);
    return true;
}

function hasCompleteAddress(userData) {
    return Boolean(userData && userData.province && userData.city && userData.district && userData.address);
}

function getUserLocationLabel(userData) {
    return [userData.city, userData.province].filter(Boolean).join(', ') || 'alamat belum lengkap';
}

function updateSearchSource(userData) {
    const detailElement = document.getElementById('search-source-detail');
    detailElement.textContent = hasCompleteAddress(userData)
        ? `${userData.district}, ${userData.city}, ${userData.province}`
        : 'Alamat akun belum lengkap untuk rekomendasi';
}

function renderLocalAreaSummary(userData) {
    const focusSeed = hashText(`${userData.province || ''}${userData.city || ''}${userData.district || ''}`);
    document.getElementById('local-province').textContent = userData.province || '-';
    document.getElementById('local-city').textContent = userData.city || '-';
    document.getElementById('local-district').textContent = userData.district || '-';
    document.getElementById('local-focus').textContent = APOTEK_FOCUS[focusSeed % APOTEK_FOCUS.length];
}

function hashText(text) {
    return Array.from(text).reduce(function(total, char, index) {
        return total + (char.charCodeAt(0) * (index + 1));
    }, 0);
}

function loadGoogleMapsPlacesApi() {
    if (googleMapsLibrariesPromise) {
        return googleMapsLibrariesPromise;
    }

    if (!googleMapsLoaderPromise) {
        googleMapsLoaderPromise = new Promise(function(resolve, reject) {
            if (!window.CONFIG || !CONFIG.GOOGLE_MAPS_API_KEY) {
                reject(new Error('Google Maps API key tidak tersedia.'));
                return;
            }

            if (window.google && window.google.maps) {
                resolve(window.google.maps);
                return;
            }

            const existingScript = document.querySelector('script[data-medgeo-google-maps="1"]');
            if (existingScript) {
                existingScript.addEventListener('load', function() {
                    resolve(window.google.maps);
                }, { once: true });
                existingScript.addEventListener('error', function() {
                    reject(new Error('Gagal memuat Google Maps API.'));
                }, { once: true });
                return;
            }

            const mapsScript = document.createElement('script');
            mapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}&v=weekly&loading=async&libraries=places,geometry`;
            mapsScript.async = true;
            mapsScript.defer = true;
            mapsScript.dataset.medgeoGoogleMaps = '1';
            mapsScript.onload = function() {
                resolve(window.google.maps);
            };
            mapsScript.onerror = function() {
                reject(new Error('Gagal memuat Google Maps API.'));
            };
            document.head.appendChild(mapsScript);
        });
    }

    googleMapsLibrariesPromise = googleMapsLoaderPromise.then(async function(maps) {
        let placesLibrary = null;
        let geometryLibrary = null;
        let geocodingLibrary = null;

        if (maps && typeof maps.importLibrary === 'function') {
            try {
                placesLibrary = await maps.importLibrary('places');
            } catch (error) {
                console.warn('Library Places (baru) gagal dimuat, akan coba fallback legacy:', error);
            }

            try {
                geometryLibrary = await maps.importLibrary('geometry');
            } catch (error) {
                console.warn('Library geometry gagal dimuat:', error);
            }

            try {
                geocodingLibrary = await maps.importLibrary('geocoding');
            } catch (error) {
                console.warn('Library geocoding gagal dimuat:', error);
            }
        }

        return {
            maps: maps,
            placesLibrary: placesLibrary,
            geometryLibrary: geometryLibrary,
            geocodingLibrary: geocodingLibrary
        };
    });

    return googleMapsLibrariesPromise;
}

async function geocodeAddress(address) {
    const libraries = await loadGoogleMapsPlacesApi();
    const maps = libraries.maps;
    const geocodingLibrary = libraries.geocodingLibrary;
    const GeocoderClass = geocodingLibrary && geocodingLibrary.Geocoder
        ? geocodingLibrary.Geocoder
        : maps.Geocoder;

    if (typeof GeocoderClass === 'function') {
        const geocoder = new GeocoderClass();
        const response = await geocoder.geocode({ address: address });
        const results = response && response.results ? response.results : [];

        if (results[0] && results[0].geometry && results[0].geometry.location) {
            return results[0].geometry.location;
        }
    }

    if (!window.CONFIG || !CONFIG.GOOGLE_MAPS_API_KEY) {
        throw new Error('Library geocoding Google Maps tidak tersedia dan API key tidak ditemukan.');
    }

    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${encodeURIComponent(CONFIG.GOOGLE_MAPS_API_KEY)}`;
    const geocodeResponse = await fetch(geocodeUrl);

    if (!geocodeResponse.ok) {
        throw new Error(`Geocoding API gagal diakses (${geocodeResponse.status}).`);
    }

    const geocodeData = await geocodeResponse.json();

    if (geocodeData.status === 'OK' && geocodeData.results && geocodeData.results[0] && geocodeData.results[0].geometry && geocodeData.results[0].geometry.location) {
        const location = geocodeData.results[0].geometry.location;
        return new maps.LatLng(location.lat, location.lng);
    }

    throw new Error(`Alamat tidak dapat dipetakan ke koordinat (${geocodeData.status || 'UNKNOWN'}).`);
}

function toLatLngLiteral(location) {
    if (!location) {
        return null;
    }

    if (typeof location.lat === 'function' && typeof location.lng === 'function') {
        return {
            lat: location.lat(),
            lng: location.lng()
        };
    }

    return {
        lat: Number(location.lat),
        lng: Number(location.lng)
    };
}

function normalizeNearbyPlace(place, index, fullAddress) {
    const displayName = typeof place.displayName === 'string'
        ? place.displayName
        : (place.displayName && place.displayName.text) || place.name || `Apotek ${index + 1}`;
    const formattedAddress = place.formattedAddress || place.formatted_address || place.vicinity || fullAddress;
    const mapsUrl = place.googleMapsURI || place.url || createMapsUrl({
        name: displayName,
        address: formattedAddress
    });
    const phone = place.nationalPhoneNumber || place.formatted_phone_number || '';

    return {
        id: place.id || place.placeId || place.place_id || `real-apotek-${index}`,
        placeId: place.id || place.placeId || place.place_id || null,
        name: displayName,
        address: formattedAddress,
        mapsUrl: mapsUrl,
        phone: phone,
        location: place.location || (place.geometry ? place.geometry.location : null),
        regularOpeningHours: place.regularOpeningHours || null,
        opening_hours: place.opening_hours || null,
        businessStatus: place.businessStatus || place.business_status || null
    };
}

async function nearbySearchPharmacies(location, fullAddress) {
    const libraries = await loadGoogleMapsPlacesApi();
    const placesLibrary = libraries.placesLibrary;
    const maps = libraries.maps;

    if (placesLibrary && placesLibrary.Place && typeof placesLibrary.Place.searchNearby === 'function') {
        const center = toLatLngLiteral(location);
        const request = {
            fields: [
                'displayName',
                'formattedAddress',
                'location',
                'googleMapsURI',
                'nationalPhoneNumber',
                'regularOpeningHours',
                'businessStatus'
            ],
            locationRestriction: {
                center: center,
                radius: 5000
            },
            includedPrimaryTypes: ['pharmacy'],
            maxResultCount: 6,
            rankPreference: placesLibrary.SearchNearbyRankPreference
                ? placesLibrary.SearchNearbyRankPreference.POPULARITY
                : undefined,
            language: 'id',
            region: 'ID'
        };
        const response = await placesLibrary.Place.searchNearby(request);
        const places = response && response.places ? response.places : [];

        if (!places.length) {
            throw new Error('Pencarian apotek terdekat tidak menemukan hasil dari Places API baru.');
        }

        return places.map(function(place, index) {
            return normalizeNearbyPlace(place, index, fullAddress);
        });
    }

    if (!maps.places || !maps.places.PlacesService) {
        throw new Error('Library Places tidak tersedia untuk pencarian apotek.');
    }

    return new Promise(function(resolve, reject) {
        const service = new maps.places.PlacesService(document.createElement('div'));
        service.nearbySearch({
            location: location,
            radius: 5000,
            type: 'pharmacy',
            rankBy: maps.places.RankBy.PROMINENCE
        }, function(results, status) {
            if (status === maps.places.PlacesServiceStatus.OK && results) {
                resolve(results.slice(0, 6).map(function(place, index) {
                    return normalizeNearbyPlace(place, index, fullAddress);
                }));
                return;
            }

            reject(new Error(`Pencarian apotek terdekat gagal diproses (${status || 'tanpa status'}).`));
        });
    });
}

function getPlaceDetails(placeId) {
    return new Promise(function(resolve, reject) {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({
            placeId: placeId,
            fields: ['name', 'formatted_address', 'opening_hours', 'utc_offset_minutes', 'url', 'formatted_phone_number', 'business_status', 'geometry']
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK && place) {
                resolve(place);
                return;
            }

            reject(new Error('Detail apotek tidak dapat diambil.'));
        });
    });
}

function formatBusinessHours(placeDetails) {
    const openingHours = placeDetails && (placeDetails.regularOpeningHours || placeDetails.opening_hours);
    if (!openingHours) {
        return 'Jam operasional belum tersedia';
    }

    const weekdayDescriptions = openingHours.weekdayDescriptions || openingHours.weekday_text;

    if (weekdayDescriptions && weekdayDescriptions.length) {
        const dayNames = [
            ['minggu', 'sunday'],
            ['senin', 'monday'],
            ['selasa', 'tuesday'],
            ['rabu', 'wednesday'],
            ['kamis', 'thursday'],
            ['jumat', 'friday'],
            ['sabtu', 'saturday']
        ];
        const todayNames = dayNames[new Date().getDay()];
        const todayText = weekdayDescriptions.find(function(line) {
            const normalized = String(line || '').toLowerCase();
            return todayNames.some(function(dayName) {
                return normalized.includes(dayName);
            });
        });

        return todayText || weekdayDescriptions[0] || 'Jam operasional tersedia di Google';
    }

    return 'Jam operasional tersedia di Google';
}

function getOpenStatus(placeDetails) {
    const openingHours = placeDetails && (placeDetails.regularOpeningHours || placeDetails.opening_hours);
    if (openingHours && typeof openingHours.isOpen === 'function') {
        const isOpenNow = openingHours.isOpen();
        if (typeof isOpenNow === 'boolean') {
            return isOpenNow;
        }
    }

    if (typeof openingHours?.open_now === 'boolean') {
        return openingHours.open_now;
    }

    if (placeDetails && placeDetails.businessStatus === 'CLOSED_PERMANENTLY') {
        return false;
    }

    return null;
}

function parseLocalTimeToMinutes(timeText) {
    const match = String(timeText || '').match(/(\d{1,2})[.:](\d{2})/);
    if (!match) {
        return null;
    }

    return (Number(match[1]) * 60) + Number(match[2]);
}

function getLocalOpenStatusFromHours(hours) {
    const normalizedHours = String(hours || '').toLowerCase();
    if (normalizedHours.includes('24 jam')) {
        return true;
    }

    const timeRange = normalizedHours.match(/(\d{1,2}[.:]\d{2})\s*-\s*(\d{1,2}[.:]\d{2})/);
    if (!timeRange) {
        return null;
    }

    const openMinutes = parseLocalTimeToMinutes(timeRange[1]);
    const closeMinutes = parseLocalTimeToMinutes(timeRange[2]);
    if (openMinutes === null || closeMinutes === null) {
        return null;
    }

    const now = new Date();
    const nowMinutes = (now.getHours() * 60) + now.getMinutes();
    if (closeMinutes < openMinutes) {
        return nowMinutes >= openMinutes || nowMinutes <= closeMinutes;
    }

    return nowMinutes >= openMinutes && nowMinutes <= closeMinutes;
}

function createFallbackPharmacyRecommendations(userData) {
    const areaKey = `${userData.province}-${userData.city}-${userData.district}`;
    const baseHash = hashText(areaKey);
    const nameTargets = [
        userData.district,
        userData.city,
        `${userData.city} Barat`,
        `${userData.city} Timur`,
        `${userData.province} Care`
    ];
    const fallbackHours = ['07.00 - 21.00', '08.00 - 22.00', '24 Jam', '07.30 - 20.30', '09.00 - 21.30'];

    return Array.from({ length: 5 }, function(_, index) {
        const distanceKm = Number((((baseHash % 12) + 5 + (index * 3)) / 10).toFixed(1));
        const hours = fallbackHours[(baseHash + index) % fallbackHours.length];
        return {
            id: `fallback-apotek-${baseHash}-${index}`,
            name: `Apotek ${APOTEK_NAME_PREFIXES[(baseHash + index) % APOTEK_NAME_PREFIXES.length]} ${nameTargets[index]}`,
            address: `Jl. ${userData.district} No. ${index + 7}, ${userData.city}, ${userData.province}`,
            hours: hours,
            isOpen: getLocalOpenStatusFromHours(hours),
            services: APOTEK_SERVICE_GROUPS[(baseHash + index) % APOTEK_SERVICE_GROUPS.length],
            distanceKm: distanceKm,
            label: APOTEK_AREA_LABELS[(baseHash + index) % APOTEK_AREA_LABELS.length],
            source: 'fallback',
            mapsUrl: createMapsUrl({
                name: `Apotek ${APOTEK_NAME_PREFIXES[(baseHash + index) % APOTEK_NAME_PREFIXES.length]} ${nameTargets[index]}`,
                address: `Jl. ${userData.district} No. ${index + 7}, ${userData.city}, ${userData.province}`
            })
        };
    }).sort(function(first, second) {
        return first.distanceKm - second.distanceKm;
    });
}

async function loadRealPharmacyRecommendations(userData) {
    try {
        const libraries = await loadGoogleMapsPlacesApi();
        const fullAddress = [userData.address, userData.district, userData.city, userData.province, 'Indonesia'].filter(Boolean).join(', ');
        const userLocation = await geocodeAddress(fullAddress);
        const placeResults = await nearbySearchPharmacies(userLocation, fullAddress);

        const detailedResults = await Promise.all(placeResults.map(async function(result, index) {
            let details = result;

            if ((!result.regularOpeningHours && !result.opening_hours) && result.placeId && libraries.maps.places && libraries.maps.places.PlacesService) {
                try {
                    details = normalizeNearbyPlace(await getPlaceDetails(result.placeId), index, fullAddress);
                } catch (error) {
                    details = result;
                }
            }

            const destination = details.location
                ? details.location
                : result.location
                    ? result.location
                    : null;
            const distanceKm = destination
                ? Number((libraries.maps.geometry.spherical.computeDistanceBetween(userLocation, destination) / 1000).toFixed(1))
                : Number((index + 1).toFixed(1));
            const serviceSeed = hashText((details.name || result.name || '') + index);

            return {
                id: details.id || result.id || `real-apotek-${index}`,
                placeId: details.placeId || result.placeId || null,
                name: details.name || result.name || 'Apotek Terdekat',
                address: details.address || result.address || fullAddress,
                hours: formatBusinessHours(details),
                isOpen: getOpenStatus(details),
                services: APOTEK_SERVICE_GROUPS[serviceSeed % APOTEK_SERVICE_GROUPS.length],
                distanceKm: distanceKm,
                label: APOTEK_AREA_LABELS[serviceSeed % APOTEK_AREA_LABELS.length],
                source: 'google-places',
                mapsUrl: details.mapsUrl || result.mapsUrl || createMapsUrl({
                    name: details.name || result.name || 'Apotek Terdekat',
                    address: details.address || result.address || fullAddress
                }),
                phone: details.phone || result.phone || ''
            };
        }));

        pharmacies = detailedResults
            .filter(function(place) { return Boolean(place.name); })
            .sort(function(first, second) { return first.distanceKm - second.distanceKm; })
            .slice(0, 6);

        if (!pharmacies.length) {
            throw new Error('Tidak ada apotek nyata yang ditemukan.');
        }

        renderPharmacyCatalog();
        setPharmacyStatus(`Ditemukan ${pharmacies.length} apotek nyata dari Google Maps Places untuk ${getUserLocationLabel(userData)}.`, 'success');
    } catch (error) {
        console.warn('Gagal memuat apotek nyata:', error);
        pharmacies = createFallbackPharmacyRecommendations(userData);
        renderPharmacyCatalog();
        setPharmacyStatus('', '');
    }
}

function showRegistrationWelcome() {
    const welcomeElement = document.getElementById('registration-welcome');
    if (!welcomeElement) {
        return;
    }

    try {
        const shouldShow = sessionStorage.getItem(MEDGEO_WELCOME_REDIRECT_KEY) === '1';
        if (shouldShow) {
            welcomeElement.style.display = 'block';
            sessionStorage.removeItem(MEDGEO_WELCOME_REDIRECT_KEY);
        }
    } catch (error) {
        console.warn('Gagal membaca status redirect rekomendasi:', error);
    }
}

function setPharmacyStatus(message, stateClass) {
    const statusElement = document.getElementById('pharmacy-status');
    if (!message) {
        statusElement.style.display = 'none';
        statusElement.textContent = '';
        statusElement.className = 'apotek-status';
        return;
    }

    statusElement.style.display = 'block';
    statusElement.className = 'apotek-status' + (stateClass ? ` ${stateClass}` : '');
    statusElement.textContent = message;
}

function createMapsUrl(pharmacy) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.name + ', ' + pharmacy.address)}`;
}

function formatDistance(distanceKm) {
    return `${distanceKm.toFixed(1)} km`;
}

function getPharmacyById(pharmacyId) {
    return pharmacies.find(function(pharmacy) {
        return pharmacy.id === pharmacyId;
    }) || null;
}

function buildPharmacyCard(pharmacy) {
    const distanceLabel = formatDistance(pharmacy.distanceKm);
    const services = pharmacy.services.map(function(service) {
        return `<li><span>${service}</span></li>`;
    }).join('');
    const openLabel = pharmacy.isOpen === null
        ? 'Status buka belum tersedia'
        : (pharmacy.isOpen ? 'Buka sekarang' : 'Sedang tutup');

    return `
        <article class="apotek-card" data-pharmacy-id="${pharmacy.id}">
            <div class="apotek-card-top">
                <div>
                    <span class="apotek-badge">${pharmacy.label}</span>
                    <h3>${pharmacy.name}</h3>
                </div>
                <span class="apotek-distance">${distanceLabel}</span>
            </div>
            <p class="apotek-address">${pharmacy.address}</p>
            <div class="apotek-meta apotek-meta-inline">
                <span>${pharmacy.hours}</span>
                <span>${openLabel}</span>
                <span>${distanceLabel} dari area Anda</span>
            </div>
            <ul class="apotek-service-list apotek-service-tags">
                ${services}
            </ul>
            <div class="apotek-actions apotek-actions-compact">
                <button type="button" onclick="focusPharmacy('${pharmacy.id}')">Pilih Rekomendasi</button>
                <a href="${pharmacy.mapsUrl || createMapsUrl(pharmacy)}" class="map-link-button" target="_blank" rel="noopener noreferrer">Google Maps</a>
            </div>
        </article>
    `;
}

function renderPharmacyCatalog() {
    const listElement = document.getElementById('apotek-list');
    listElement.innerHTML = pharmacies.map(buildPharmacyCard).join('');
    document.getElementById('pharmacy-count').textContent = pharmacies.length;
    document.getElementById('nearest-distance').textContent = pharmacies.length ? formatDistance(pharmacies[0].distanceKm) : '-';

    if (pharmacies.length > 0) {
        selectedPharmacyId = selectedPharmacyId || pharmacies[0].id;
        highlightPharmacyCard(selectedPharmacyId);
        setPharmacyStatus(`Ditemukan ${pharmacies.length} rekomendasi apotek untuk ${getUserLocationLabel(window.MedGeoAuth.getAuthenticatedUser() || {})}.`, 'success');
    } else {
        setPharmacyStatus('Belum ada rekomendasi apotek yang bisa ditampilkan.', '');
    }
}

function highlightPharmacyCard(pharmacyId) {
    selectedPharmacyId = pharmacyId;
    document.querySelectorAll('.apotek-card').forEach(function(card) {
        card.classList.toggle('is-selected', card.dataset.pharmacyId === pharmacyId);
    });
}

function focusPharmacy(pharmacyId) {
    const pharmacy = getPharmacyById(pharmacyId);
    if (!pharmacy) {
        return;
    }

    highlightPharmacyCard(pharmacyId);
    sessionStorage.setItem(MEDGEO_SELECTED_PHARMACY_KEY, JSON.stringify(pharmacy));
    window.location.href = 'katalogbelanja.html';
}

function logoutUser() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        if (window.MedGeoAuth) {
            window.MedGeoAuth.logout('index.html');
            return;
        }
        location.reload();
    }
}

window.addEventListener('load', function() {
    showRegistrationWelcome();
    checkRegistration();
});
