# Strona-wizytówka Kamila Kasińskiego (portfolio Data & BI)

Statyczna strona HTML/CSS/JS bez frameworków i bez builda.
Publikacja: GitHub Pages z gałęzi `main` → https://kamilkasinski.com/ (domena w `CNAME`, nie usuwać; stary adres kamkas93.github.io/kamil-kasinski przekierowuje)
Push na `main` = zmiana widoczna na żywo po ~1–2 min.

## Struktura
- `index.html` — strona główna: `#about` (hero/bio), `#projects` (karty projektów), `#contact`
- `certyfikaty.html` — certyfikaty
- `projekt-kds.html` — projekt Customer Retention Analysis (KDS)
- `project-cocktail-bar.html` — projekt Cocktail Bar Analysis
- `projekt-lipiec-2007.html` — projekt Power BI „Analiza Sprzedaży Internetowej” (Lipiec 2007; style `.lp-*` w `style.css`)
- `style/style.css` — jeden wspólny arkusz dla wszystkich stron
- `script/lang.js` — przełącznik PL/EN
- `script/theme.js` — tryb jasny/ciemny
- `img/` — zdjęcia, certyfikaty, zrzuty dashboardów
- `.nojekyll` — nie usuwać (wyłącza Jekylla na GitHub Pages)

## Zasady, których trzeba pilnować
1. **Dwujęzyczność.** Każdy widoczny tekst ma atrybuty `data-pl="..."` i `data-en="..."`,
   a w treści elementu domyślnie wersję polską. `lang.js` podmienia `innerHTML` na podstawie tych atrybutów.
   Nowy tekst bez obu atrybutów = błąd. Wewnątrz atrybutów nie używać niezakodowanych cudzysłowów `"`.
2. **Nawigacja jest skopiowana w każdym pliku HTML** (nie ma wspólnego komponentu).
   Zmiana w menu, przełącznikach czy linkach social = zmiana we WSZYSTKICH plikach HTML (obecnie 5).
3. **Tryb ciemny.** Kolory tylko przez zmienne CSS z `:root` / `[data-theme="dark"]` w `style.css`
   (np. `var(--color-accent)`). Nie wpisywać kolorów na sztywno. Nowy kolor = dodać zmienną w obu blokach.
   Każda strona ma w `<head>` inline'owy skrypt ustawiający motyw przed renderem — nie usuwać.
4. **Responsywność.** Breakpointy w CSS: 992px, 768px, 480px. Każdą zmianę layoutu sprawdzić na telefonie.
5. **Linki zewnętrzne** zawsze z `target="_blank" rel="noopener noreferrer"`.
6. **Obrazki** zawsze z sensownym `alt`. Nowe pliki w `img/` nazywać bez spacji.
7. **SEO.** Każda strona ma własny `<title>`, `meta description` i tagi `og:`. Przy nowej podstronie dodać je.
8. Ikony: Font Awesome 6.5.1 (CDN). Font: Poppins (Google Fonts).

## Dwujęzyczne obrazki i linki
- `<img>`: `data-pl-src` / `data-en-src` oraz (opcjonalnie) `data-pl-alt` / `data-en-alt`; w `src` i `alt` zostaje wersja PL (działa bez JS).
- `<a>`: `data-pl-href` / `data-en-href`; w `href` zostaje wersja PL.
- Dowolny element: `data-pl-aria-label` / `data-en-aria-label` (np. wykresy z `role="img"`); w `aria-label` zostaje wersja PL.
- `lang.js` przy zmianie języka podmienia te atrybuty (`setAttribute`, jedna pętla po liście `src`, `href`, `alt`, `aria-label`), obok `innerHTML` dla `data-pl` / `data-en`. Brak wersji EN = zostaje PL.
- Jeśli zasób jest taki sam w obu językach, nie dodawaj atrybutów.
- Nie twórz osobnych mechanizmów per element, używaj tego. Nowy atrybut = dopisz go do listy w `lang.js`.

## Nowy projekt w portfolio (checklista)
1. Podstrona wzorowana na `projekt-kds.html`, nazwa `projekt-<slug>.html`.
2. Karta `<article class="project-item">` w `#projects` na `index.html`.
3. Nawigacja: jeśli zmieniasz menu, zmień we WSZYSTKICH plikach HTML.
4. `title`, `meta description` i pozostałe meta (`og:`) tak jak na innych podstronach; dodaj stronę do `sitemap.xml`, jeśli istnieje (obecnie nie istnieje).
5. Każdy tekst z `data-pl` i `data-en`; obrazki z `alt`.
6. Kolory tylko ze zmiennych CSS (oba motywy).
7. Test: tryb ciemny, przełącznik EN, breakpointy 992/768/480.
8. Linki zewnętrzne: `target="_blank" rel="noopener noreferrer"`.
9. Zrzuty/GIF dashboardu do `img/` (najlepiej w podfolderze projektu, nazwy bez spacji).

## Git i publiczność repo
- Commity opisowe, po angielsku (np. `Add Power BI Lipiec 2007 project page`).
- Nie dopisuj do publicznego repo informacji o właścicielu (np. pracodawca), o które nie prosił.
- Nie rób commita ani pusha bez wyraźnej zgody.

## Sposób pracy
- Przed zmianą: krótko powiedz, co zmienisz i w których plikach. Przy większych zmianach — osobna gałąź i PR.
- Po zmianie: sprawdź PL i EN, jasny i ciemny motyw, widok mobilny.
- Commity po angielsku, w trybie rozkazującym, np. `Add Power BI project page`.
- Nie commitować plików, w których zmieniły się wyłącznie końcówki linii (CRLF/LF).
- Nie dodawać danych osobowych poza tym, co już jest na stronie (LinkedIn, GitHub, kontakt).
- Właściciel: Kamil — Data/BI Analyst (SQL, Power BI, Excel/Power Query)