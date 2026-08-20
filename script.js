// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// Language Toggle (EN / AR)
const langToggle = document.getElementById('langToggle');

const currentLang = localStorage.getItem('lang') || 'en';
setLanguage(currentLang);

langToggle.addEventListener('click', () => {
    let activeLang = document.documentElement.getAttribute('lang') || 'en';
    let newLang = activeLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
});

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        langToggle.textContent = 'EN';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        langToggle.textContent = 'AR';
    }

    const translatableElements = document.querySelectorAll('[data-en]');
    translatableElements.forEach(el => {
        if (lang === 'ar') {
            el.innerHTML = el.getAttribute('data-ar');
        } else {
            el.innerHTML = el.getAttribute('data-en');
        }
    });
}