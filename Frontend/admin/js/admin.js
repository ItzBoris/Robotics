// Gatekeeping
if (localStorage.getItem('isAdmin') !== 'true') {
    window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('isAdmin');
    window.location.href = 'index.html';
}
