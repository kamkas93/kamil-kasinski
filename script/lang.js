function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-pl]');

    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Dwujęzyczne atrybuty: data-pl-src / data-en-src, data-pl-href / data-en-href,
    // data-pl-alt / data-en-alt, data-pl-aria-label / data-en-aria-label. W HTML zostaje wersja PL (działa bez JS).
    ['src', 'href', 'alt', 'aria-label'].forEach(attr => {
        document.querySelectorAll(`[data-pl-${attr}]`).forEach(el => {
            const value = el.getAttribute(`data-${lang}-${attr}`);
            if (value) {
                el.setAttribute(attr, value);
            }
        });
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
