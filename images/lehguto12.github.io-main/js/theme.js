const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    body.classList.add('light');
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const isLight = body.classList.contains('light');

    icon.classList.toggle('fa-moon', !isLight);
    icon.classList.toggle('fa-sun', isLight);
    themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('portfolio-theme', body.classList.contains('light') ? 'light' : 'dark');
    updateThemeIcon();
});
