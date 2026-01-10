document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    // Call the login function defined in script.js (validation logic)
    // or just do it here since it's simple.
    // Requirement said "on that login page... it will take us to admin panel".

    if (u === 'admin' && p === 'admin') {
        // Success
        localStorage.setItem('isAdmin', 'true');
        window.location.href = 'admin.html';
    } else {
        // Failure
        const err = document.getElementById('loginError');
        err.style.opacity = '1';
        document.getElementById('password').value = '';

        // Shake animation
        const card = document.querySelector('.login-card');
        card.style.transform = 'translateX(10px)';
        setTimeout(() => { card.style.transform = 'translateX(-10px)'; }, 100);
        setTimeout(() => { card.style.transform = 'translateX(10px)'; }, 200);
        setTimeout(() => { card.style.transform = 'translateX(0)'; }, 300);
    }
});
