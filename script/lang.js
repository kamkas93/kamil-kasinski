function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-pl]');

    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    localStorage.setItem('preferredLanguage', lang);

    // Logika przełączania wyglądu przycisków
    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => {
        // Sprawdzamy czy funkcja onclick przycisku zawiera dany język
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Wywołaj funkcję przy starcie strony, żeby wczytać zapisany język
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLang);
});
