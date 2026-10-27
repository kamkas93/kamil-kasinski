// Powiększanie obrazków certyfikatów (lightbox na natywnym <dialog>).
// Pokazuje aktualny src i alt, więc po przełączeniu języka powiększa się właściwa wersja.
document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    const preview = dialog.querySelector('.lightbox-img');
    let opener = null;

    const open = (img) => {
        opener = img;
        preview.src = img.currentSrc || img.src;
        preview.alt = img.alt;
        dialog.showModal();
        document.documentElement.classList.add('lightbox-open');
    };

    document.querySelectorAll('.cert-image img').forEach(img => {
        img.classList.add('zoomable');
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.addEventListener('click', () => open(img));
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open(img);
            }
        });
    });

    // Klik w tło, w obrazek albo w przycisk zamyka podgląd; Esc obsługuje sam <dialog>
    dialog.addEventListener('click', () => dialog.close());

    dialog.addEventListener('close', () => {
        document.documentElement.classList.remove('lightbox-open');
        preview.removeAttribute('src');
        if (opener) opener.focus();
    });
});
