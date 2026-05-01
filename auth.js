const MEDGEO_REGISTERED_USER_KEY = 'userRegistration';
const MEDGEO_AUTH_SESSION_KEY = 'medgeoCurrentUser';

function readMedgeoStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || 'null');
    } catch (error) {
        return null;
    }
}

function writeMedgeoStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getRegisteredMedgeoUser() {
    const registeredUser = readMedgeoStorage(MEDGEO_REGISTERED_USER_KEY);
    return registeredUser && registeredUser.isRegistered ? registeredUser : null;
}

function getAuthenticatedMedgeoUser() {
    const sessionUser = readMedgeoStorage(MEDGEO_AUTH_SESSION_KEY);
    const registeredUser = getRegisteredMedgeoUser();

    if (!sessionUser || !registeredUser) {
        return null;
    }

    if (sessionUser.email && registeredUser.email && sessionUser.email === registeredUser.email) {
        return Object.assign({}, registeredUser, {
            loginAt: sessionUser.loginAt || null,
            authProvider: sessionUser.authProvider || registeredUser.loginMethod || 'password'
        });
    }

    return null;
}

function setAuthenticatedMedgeoUser(userData, authProvider) {
    writeMedgeoStorage(MEDGEO_AUTH_SESSION_KEY, {
        email: userData.email,
        fullname: userData.fullname || userData.to_name || 'Pengguna MedGeo',
        authProvider: authProvider || userData.loginMethod || 'password',
        loginAt: new Date().toISOString()
    });
}

function clearAuthenticatedMedgeoUser() {
    localStorage.removeItem(MEDGEO_AUTH_SESSION_KEY);
}

function loginWithRegisteredAccount(email, password) {
    const registeredUser = getRegisteredMedgeoUser();

    if (!registeredUser) {
        return {
            ok: false,
            message: 'Akun belum terdaftar. Silakan daftar terlebih dahulu.'
        };
    }

    if ((registeredUser.email || '').toLowerCase() !== String(email || '').trim().toLowerCase()) {
        return {
            ok: false,
            message: 'Email tidak cocok dengan akun yang sudah didaftarkan.'
        };
    }

    if (!registeredUser.password) {
        return {
            ok: false,
            message: 'Akun ini belum memiliki password. Silakan daftar ulang atau gunakan metode login yang sesuai.'
        };
    }

    if (registeredUser.password !== password) {
        return {
            ok: false,
            message: 'Password yang Anda masukkan salah.'
        };
    }

    setAuthenticatedMedgeoUser(registeredUser, 'password');
    return {
        ok: true,
        user: registeredUser
    };
}

function requireMedgeoAuth(redirectPath) {
    const activeUser = getAuthenticatedMedgeoUser();
    if (activeUser) {
        return activeUser;
    }

    window.location.href = redirectPath || 'index.html';
    return null;
}

function logoutMedgeoUser(redirectPath) {
    clearAuthenticatedMedgeoUser();
    window.location.href = redirectPath || 'index.html';
}

window.MedGeoAuth = {
    getRegisteredUser: getRegisteredMedgeoUser,
    getAuthenticatedUser: getAuthenticatedMedgeoUser,
    setAuthenticatedUser: setAuthenticatedMedgeoUser,
    clearAuthenticatedUser: clearAuthenticatedMedgeoUser,
    loginWithRegisteredAccount: loginWithRegisteredAccount,
    requireAuth: requireMedgeoAuth,
    logout: logoutMedgeoUser
};
