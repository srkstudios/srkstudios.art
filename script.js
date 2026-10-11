// Smooth-scroll for in-page anchors
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Reveal sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Copy buttons for code blocks
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const original = btn.textContent;
        try {
            await navigator.clipboard.writeText(btn.dataset.copy);
            btn.textContent = 'Copied to clipboard';
        } catch {
            btn.textContent = 'Copy: ' + btn.dataset.copy;
        }
        setTimeout(() => { btn.textContent = original; }, 1800);
    });
});
