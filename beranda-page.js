document.addEventListener('DOMContentLoaded', function() {
    const metaTag = document.querySelector('meta[name="google-signin-client_id"]');
    if (metaTag) {
        metaTag.content = CONFIG.GOOGLE_CLIENT_ID;
    }

    const authNavLink = document.getElementById('authNavLink');
    const activeUser = window.MedGeoAuth.getAuthenticatedUser();

    if (authNavLink && activeUser) {
        authNavLink.textContent = 'Logout';
        authNavLink.href = '#';
        authNavLink.addEventListener('click', function(event) {
            event.preventDefault();
            logoutFromBeranda();
        });
    }
});

window.MedGeoAuth.requireAuth('index.html');

function logoutFromBeranda() {
    if (confirm('Keluar dari akun MedGeo sekarang?')) {
        window.MedGeoAuth.logout('index.html');
    }
}
