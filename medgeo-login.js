function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const toggleButton = document.getElementById(fieldId + '-eye');

    if (!passwordInput) {
        return;
    }

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (toggleButton) {
            toggleButton.textContent = 'Sembunyi';
        }
    } else {
        passwordInput.type = 'password';
        if (toggleButton) {
            toggleButton.textContent = 'Lihat';
        }
    }
}

function showLoginMessage(message, isError) {
    const loginMessage = document.getElementById('loginMessage');
    if (!loginMessage) {
        return;
    }

    loginMessage.textContent = message;
    loginMessage.className = isError ? 'auth-message error' : 'auth-message success';
    loginMessage.style.display = 'block';
}

function setupRegisteredHint() {
    const registeredUser = window.MedGeoAuth.getRegisteredUser();
    const activeUser = window.MedGeoAuth.getAuthenticatedUser();
    const hint = document.getElementById('loginRegisteredHint');

    if (activeUser) {
        window.location.href = 'beranda.html';
        return;
    }

    if (!hint || !registeredUser) {
        return;
    }

    hint.style.display = 'block';
    hint.textContent = `Akun terdaftar ditemukan: ${registeredUser.email}. Silakan masuk dengan akun ini.`;
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const registeredUser = window.MedGeoAuth.getRegisteredUser();

        if (!registeredUser) {
            showLoginMessage('Akun belum terdaftar. Anda akan diarahkan ke form pendaftaran.', true);
            setTimeout(function() {
                window.location.href = 'signin.html';
            }, 1200);
            return;
        }

        const result = window.MedGeoAuth.loginWithRegisteredAccount(email, password);

        if (!result.ok) {
            if (result.message && result.message.toLowerCase().includes('belum terdaftar')) {
                setTimeout(function() {
                    window.location.href = 'signin.html';
                }, 1200);
            }
            showLoginMessage(result.message, true);
            return;
        }

        showLoginMessage('Login berhasil. Anda akan diarahkan ke beranda utama MedGeo.', false);
        setTimeout(function() {
            window.location.href = 'beranda.html';
        }, 1200);
    });
}

setupRegisteredHint();
