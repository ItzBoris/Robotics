document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  const err = document.getElementById('loginError');
  const card = document.querySelector('.login-card');

  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // 🔐 IMPORTANT for session cookies
      body: JSON.stringify({
        username: u,
        password: p
      })
    });

    if (!res.ok) {
      throw new Error('Invalid credentials');
    }

    // ✅ Login successful → redirect to protected dashboard
    window.location.href = '/admin/dashboard';

  } catch (error) {
    // ❌ Login failed
    err.textContent = 'Invalid username or password';
    err.style.opacity = '1';
    document.getElementById('password').value = '';

    // Shake animation (kept from your original logic)
    card.style.transform = 'translateX(10px)';
    setTimeout(() => { card.style.transform = 'translateX(-10px)'; }, 100);
    setTimeout(() => { card.style.transform = 'translateX(10px)'; }, 200);
    setTimeout(() => { card.style.transform = 'translateX(0)'; }, 300);
  }
});

