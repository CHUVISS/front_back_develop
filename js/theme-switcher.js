// Функция переключения темы
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
}

// Функция обновления иконки темы
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
    }
}

// Функция инициализации темы при загрузке страницы
function initTheme() {

    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    updateThemeIcon(savedTheme);
    
    const themeButton = document.getElementById('themeToggle');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
}
document.addEventListener('DOMContentLoaded', initTheme);