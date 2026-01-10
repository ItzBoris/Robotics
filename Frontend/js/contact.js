document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successState = document.getElementById('successState');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate Email Regex
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#ef4444';
            return;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'var(--glass-border)';
        }

        // Simulate Sending...
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            // Success!
            form.style.display = 'none';
            successState.style.display = 'flex';

            // Reset Button
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // Clear error on input
    emailInput.addEventListener('input', () => {
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'var(--glass-border)';
    });
});

function resetForm() {
    const form = document.getElementById('contactForm');
    const successState = document.getElementById('successState');

    form.reset();
    successState.style.display = 'none';
    form.style.display = 'flex';
}
