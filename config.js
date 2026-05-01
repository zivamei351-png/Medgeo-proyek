
const CONFIG = {
    GOOGLE_MAPS_API_KEY: 'AIzaSyCCEW6C11rXJq2QN_ZZgSU--d-IgNi6cvw',
    GOOGLE_CLIENT_ID: '514089865210-a9uf2r3kh9jmutt1dq9v4j070o2faba5.apps.googleusercontent.com'
};

if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
