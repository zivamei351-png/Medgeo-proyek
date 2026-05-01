function togglePassword(fieldId) {
            const passwordInput = document.getElementById(fieldId);
            const eyeIcon = document.getElementById(fieldId + '-eye');

            if (!passwordInput) {
                return;
            }

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                if (eyeIcon) {
                    eyeIcon.textContent = 'Sembunyi';
                }
            } else {
                passwordInput.type = 'password';
                if (eyeIcon) {
                    eyeIcon.textContent = 'Lihat';
                }
            }
        }
