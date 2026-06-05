// =============================================
// index.js — Dashboard E-Wallet (funcional)
// =============================================

// Tema escuro / claro
const themeTogglerSpans = document.querySelectorAll('.theme-toggler span');

themeTogglerSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
        themeTogglerSpans.forEach(s => s.classList.remove('active'));
        span.classList.add('active');

        if (index === 0) {
            // Modo claro
            document.body.classList.remove('dark-theme');
        } else {
            // Modo escuro
            document.body.classList.add('dark-theme');
        }
    });
});

// Menu mobile — abrir sidebar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('ext-btn');
const aside = document.querySelector('aside');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        aside.classList.add('open');
        menuBtn.style.display = 'none';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        aside.classList.remove('open');
        if (menuBtn) menuBtn.style.display = 'block';
    });
}

// Highlight menu item ativo
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animar SVG de progresso nos cards
function animateCircles() {
    const circles = document.querySelectorAll('.insights svg circle');
    const percentages = [81, 62, 34]; // Valor Liquido, Valor Pago, Investido

    circles.forEach((circle, i) => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

        const percent = percentages[i] || 50;
        const offset = circumference - (percent / 100) * circumference;

        setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 1s ease-in-out';
            circle.style.strokeDashoffset = offset;
        }, 300 + i * 200);

        // Atualizar texto de percentual
        const numberEl = circle.closest('.progress')?.querySelector('.number p');
        if (numberEl) numberEl.textContent = percent + '%';
    });
}

animateCircles();