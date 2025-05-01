const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');


const takenUsernames = ["user1", "testuser", "john_doe"];


function validateField(input, errorElement, message) {
    if (input.value.trim() === '') {
        errorElement.style.display = 'block';
        errorElement.textContent = message;
        return false;
    } else {
        errorElement.style.display = 'none';
        return true;
    }
}


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}


function validatePasswords(password, confirmPassword) {
    if (password.value.trim() !== confirmPassword.value.trim()) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmPasswordError.style.display = 'none';
        return true;
    }
}


function validateUsername(username) {
    if (takenUsernames.includes(username.value.trim())) {
        usernameError.style.display = 'block';
        usernameError.textContent = 'Username is already taken, please choose another one.';
        return false;
    } else {
        usernameError.style.display = 'none';
        return true;
    }
}


username.addEventListener('input', () => {
    validateField(username, usernameError, 'Username is required');
    validateUsername(username);
});
email.addEventListener('input', () => {
    validateField(email, emailError, 'Email is required');
    validateEmail(email);
});
password.addEventListener('input', () => validateField(password, passwordError, 'Password is required'));
confirmPassword.addEventListener('input', () => {
    validateField(confirmPassword, confirmPasswordError, 'Please confirm your password');
    validatePasswords(password, confirmPassword);
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const isUsernameValid = validateField(username, usernameError, 'Username is required') && validateUsername(username);
    const isEmailValid = validateField(email, emailError, 'Email is required') && validateEmail(email);
    const isPasswordValid = validateField(password, passwordError, 'Password is required');
    const isConfirmPasswordValid = validateField(confirmPassword, confirmPasswordError, 'Please confirm your password') && validatePasswords(password, confirmPassword);

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Welcome, ' + username.value + '!');

    }
});