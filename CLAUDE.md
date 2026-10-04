# Strona-wizytówka Kamila Kasińskiego (portfolio Data & BI)

Statyczna strona HTML/CSS/JS bez frameworków i bez builda.
Publikacja: GitHub Pages z gałęzi `main` → https://kamkas93.github.io/kamil-kasinski/
Push na `main` = zmiana widoczna na żywo po ~1–2 min.

## Struktura
- `index.html` — strona główna: `#about` (hero/bio), `#projects` (karty projektów), `#contact`
- `certyfikaty.html` — certyfikaty
- `projekt-kds.html` — projekt Customer Retention Analysis (KDS)
- `project-cocktail-bar.html` — projekt Cocktail Bar Analysis
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
   Zmiana w menu, przełącznikach czy linkach social = zmiana we WSZYSTKICH 4 plikach.
3. **Tryb ciemny.** Kolory tylko przez zmienne CSS z `:root` / `[data-theme="dark"]` w `style.css`
   (np. `var(--color-accent)`). Nie wpisywać kolorów na sztywno. Nowy kolor = dodać zmienną w obu blokach.
   Każda strona ma w `<head>` inline'owy skrypt ustawiający motyw przed renderem — nie usuwać.
4. **Responsywność.** Breakpointy w CSS: 992px, 768px, 480px. Każdą zmianę layoutu sprawdzić na telefonie.
5. **Linki zewnętrzne** zawsze z `target="_blank" rel="noopener noreferrer"`.
6. **Obrazki** zawsze z sensownym `alt`. Nowe pliki w `img/` nazywać bez spacji.
7. **SEO.** Każda strona ma własny `<title>`, `meta description` i tagi `og:`. Przy nowej podstronie dodać je.
8. Ikony: Font Awesome 6.5.1 (CDN). Font: Poppins (Google Fonts).

## Nowy projekt w portfolio
1. Nowa podstrona na wzór `projekt-kds.html` (ta sama nawigacja, head, skrypty).
2. Nowa karta `<article class="project-item">` w `index.html` w sekcji `#projects`.
3. Zrzuty/GIF dashboardu do `img/`.

## Sposób pracy
- Przed zmianą: krótko powiedz, co zmienisz i w których plikach. Przy większych zmianach — osobna gałąź i PR.
- Po zmianie: sprawdź PL i EN, jasny i ciemny motyw, widok mobilny.
- Commity po angielsku, w trybie rozkazującym, np. `Add Power BI project page`.
- Nie commitować plików, w których zmieniły się wyłącznie końcówki linii (CRLF/LF).
- Nie dodawać danych osobowych poza tym, co już jest na stronie (LinkedIn, GitHub, kontakt).
- Właściciel: Kamil — Data/BI Analyst (SQL, Power BI, Excel/Power Query), pracuje w LINK4.