# Handoff: Landing page sprzedażowy e-booka „Finanse po rozwodzie" (Officinum)

## Overview
Jednoekranowa, przewijana strona sprzedażowa polskiego e-booka poradnikowego. 14 sekcji ułożonych pionowo, jeden cel konwersji: kliknięcie przycisku CTA prowadzącego do zewnętrznego koszyka. Mobile-first (375 px), wersja desktop 1440 px. Ruch pochodzi z reklam FB/IG, więc priorytetem jest mobile i szybkie ładowanie (bez ciężkich animacji, bez wideo, LCP < 2,5 s).

## About the Design Files
Plik `Landing Finanse po rozwodzie.dc.html` to **referencja projektowa w HTML** (prototyp z frameworka projektowego — zawiera znaczniki `sc-if`/`sc-for`/`{{ }}`), NIE kod produkcyjny. Zadanie: **odtworzyć ten projekt 1:1 w docelowym środowisku** (np. Next.js/Astro/czysty HTML+CSS — jeśli środowisko nie istnieje, wybierz najprostsze; strona jest statyczna, wystarczy czysty HTML/CSS + minimalny JS na akordeony i sticky bar). Wszystkie style w prototypie są inline — można je czytać wprost z markupu.

## Fidelity
**High-fidelity.** Kolory, typografia, odstępy, treści i stany są finalne. Odtworzyć pixel-perfect.

## Design Tokens

Kolory:
- `#F4EDDE` tło piaskowe (baza strony)
- `#FBF7EC` krem (karty, ramki, jasne sekcje, tekst na zieleni)
- `#EFE7D3` pasek zaufania (sekcja 2)
- `#262B33` grafit (tekst główny, tło sekcji 11 i 13)
- `#1D2127` stopka
- `#454B54` tekst wtórny, `#6B6353` / `#8A8578` tekst przygaszony
- `#3E6647` zieleń CTA (hover `#345239`, active `#2C4731`), oliwka akcentów `#5C6B3C`
- `#A9691F` bursztyn (ceny, wyróżnienia); na ciemnym tle `#DCA75B`; blok daty: tło `#F6E8D2`, tekst `#7A4E1A`
- `#E2D8C2` obrysy i linie, `#DACFB6` linie akordeonów
- `#C87A28` pomarańcz litery „M" w logotypie Officinum

Typografia (Google Fonts):
- Nagłówki: **Spectral** 600 (ceny 700). H1 `clamp(32px, 4.2vw, 52px)`, H2 `clamp(26px, 3vw, 34px)`, karty 21–24 px, line-height 1.12–1.3
- Tekst: **Source Sans 3** 400/600/700. Body 17 px (desktop do 19 px), interlinia 1.6; mikrocopy 13.5 px; nadtytuły 13–14 px, uppercase, letter-spacing 0.12–0.16 em
- Ceny: Spectral 700, 58–62 px, bursztyn; cena przekreślona 27 px, `line-through` grubości 1 px w kolorze bursztynu

Inne: radius kart 10 px (oferta 14 px, przyciski 8 px); cienie subtelne `rgba(38,43,51,0.06–0.26)`; sekcje padding pionowy `clamp(56px, 8vw, 96px)`; kontener max-width 1180 px (tekstowe sekcje 780 px, oferta 980 px, dla kogo 1080 px), padding boczny 24 px.

## Zmienne (podmieniane po premierze)
Wartości występujące w wielu miejscach wdrożyć jako zmienne/konfigurację:
- `cena` = „89,90 zł" (hero, oferta, ostatnie CTA, sticky bar, tekst wszystkich przycisków CTA)
- komunikat wartości: „Jedna konsultacja u adwokata to minimum 300 zł. Przyjdź na nią przygotowany/a. Ten poradnik Ci w tym pomoże."

## Elementy powtarzalne
- **Przycisk CTA** (4×: sekcje 1, 9, 11, 13): zielony `#3E6647`, tekst `#FBF7EC` 18 px/700, padding 18px 24px, radius 8 px, szerokość 100% do max 460 px. Hover: `#345239`, uniesienie −1 px, mocniejszy cień; active: `#2C4731`, +1 px. Treść zawsze: „Kup przewodnik za {cena}". Link do zewnętrznego koszyka (adres do podania; w prototypie `#koszyk`).
- **Blok ceny** (3×: sekcje 1, 11, 13): duża cena bieżąca (Spectral 700, bursztyn), obok przekreślona regularna, pod spodem linijka daty.
- **Sticky bar (tylko mobile <760 px)**: pojawia się po przewinięciu > ~560 px; fixed bottom, tło `#FBF7EC`, border-top `#DACFB6`, cień ku górze; po lewej cena + przekreślona, po prawej kompaktowy zielony przycisk „Kup przewodnik".

## Screens / Sections (kolejność pionowa)
Wszystkie treści (copy) są finalne — przepisać 1:1 z pliku prototypu.

1. **Hero** — dwie kolumny na desktopie (tekst lewa, mockup pakietu prawa); na mobile kolejność: nadtytuł „Officinum" (oliwka, uppercase, „M" pomarańczowe), H1, podtytuł, 3 punkty z zielonym ✓, **mockup**, blok ceny, CTA, mikrocopy. Mockup = 3 okładki (assets): `okladka.png` z przodu po lewej (60% szer., rotate −2°), `addon-B.png` prawy górny róg (46%, rotate 5°), `addon-A.png` prawy dolny (46%, rotate −3°); kontener aspect-ratio 6/7, max 400 px.
2. **Pasek zaufania** — tło `#EFE7D3`, border góra/dół `#E2D8C2`. 3 kolumny (mobile: pionowo), każda: oliwkowa kreska 34×3 px, nagłówek Spectral 19 px, zdanie 15 px.
3. **Problem** — kolumna 780 px: H2, 3 akapity, ramka „Trzy konkrety z książki": tło `#FBF7EC`, lewa krawędź 4 px `#A9691F`, 3 fakty oddzielone liniami `#E2D8C2`.
4. **Trzy elementy, jeden zakup** — desktop: duża karta przewodnika po lewej (okładka min(220px, 64%) wyśrodkowana, pełna wysokość), po prawej kolumna z 2 kartami załączników (okładka 104 px po lewej karty + tekst). Mobile: wszystko pionowo. Karty: tło `#F4EDDE`, border `#E2D8C2`, radius 10 px, lekki cień.
5. **Cztery wyróżniki** — grid 2×2 na desktopie (`minmax(min(440px,100%),1fr)`), 1 kolumna mobile. Kafel: tło `#FBF7EC`, duży numer 01–04 w tle (Spectral 700, 110 px, `#EDE3CD`, prawy górny róg), nagłówek, opis, linia + linijka dowodowa kursywą 15 px `#6B6353` dobita do dołu kafla.
6. **Co jest w środku** — 10 rozdziałów. Desktop: 2 kolumny, opisy widoczne. Mobile: akordeon — widoczne numery (bursztyn) + tytuły + „+/–", opis rozwijany, domyślnie wszystko zwinięte, otwarty max 1.
7. **Załącznik A** — 2 kolumny: lista A1–A11 (kod oliwkowy 700 + jedna linijka, separatory), po prawej „kartka" arkusza A3 (tło `#FBF7EC`, rotate 1°, cień, tabela Składnik/Wartość/Status — dane z prototypu). Pod spodem zdanie zamykające 14.5 px szare. Mobile: lista, pod nią kartka.
8. **Załącznik B** — najbardziej stonowana: kolumna 780 px, H2 + 2 akapity, potem blok „O aktualności danych" na grafitowym tle `#262B33` (nagłówek uppercase `#C9A26B`, tekst `#D8D3C6`).
9. **Podgląd „Zajrzyj do środka"** — 3 kafle-kartki (aspect 4/5) z zawartością z prototypu, podpisy kursywą pod każdym. Mobile: karuzela pozioma ze scroll-snap; desktop: 3 w rzędzie. Poniżej: przycisk wtórny **„Pobierz fragment rozdziału (PDF)"** (outline zielony 1.5 px, otwiera PDF w nowej karcie — plik do podania) i pod nim główny CTA.
10. **Dla kogo** — 2 karty: lewa zielonkawa (`#EDF2E4`, border `#C9D6BC`, ✓ zielone, 6 punktów), prawa neutralna (`#F1EDE3`, kropki szare, 5 punktów). Bez czerwieni i tonu ostrzegawczego.
11. **Oferta** — tło sekcji `#262B33`, H2 kremowy nad kartą. Karta `#FBF7EC` radius 14 px, mocny cień: okładka po lewej (220 px, rotate −2°), po prawej tytuł+podtytuł, lista „W pakiecie" (5 pozycji, ✓), cena 62 px + przekreślona, blok daty (`#F6E8D2`/`#7A4E1A`), CTA, mikrocopy. Pod kartą zdanie porównawcze `#9BA0A8` wyśrodkowane.
12. **FAQ** — kolumna 780 px, akordeon 8 pytań, pierwsze domyślnie otwarte, otwarte max 1; pytania Spectral 18.5 px, „+/–" po prawej, odpowiedzi pełna szerokość kolumny.
13. **Ostatnie CTA** — tło `#262B33`, wyśrodkowane: H2, zdanie, blok ceny (cena `#DCA75B`), CTA, mikrocopy.
14. **Stopka** — tło `#1D2127`: logotyp „OFFICINUM" (Spectral 700, uppercase, „M" `#C87A28`), zastrzeżenie 13 px pełna szerokość, 3 linki w linii (Regulamin · Polityka prywatności · Kontakt — adresy do podania), nota © 2026.

## Interactions & Behavior
- Akordeony (sekcje 6-mobile i 12): toggle po kliknięciu całego wiersza, znak „+"→„–", tylko jeden otwarty naraz (otwarcie zamyka poprzedni).
- Breakpoint mobile/desktop: 760 px (hero mockup zmienia pozycję, spis treści przełącza akordeon/2 kolumny, sticky bar tylko mobile).
- Sticky bar: pokazuje się przy scrollY > ~560 px na mobile; dyskretny, nie zasłania treści.
- Przycisk „Pobierz fragment rozdziału": `target="_blank"`, link do PDF.
- Przejścia na CTA: `background 0.15s, transform 0.1s, box-shadow 0.15s`. Poza tym brak animacji.
- Brak menu nawigacyjnego; jedyne linki wychodzące: koszyk (CTA), PDF fragmentu, 3 linki w stopce.
- Kontrast tekst/tło min 4,5:1; żadnych liczników czasu.

## State Management
Strona statyczna. Stan lokalny: `openChapter` (index | null), `openFaq` (index | null, start 0), `isMobile` (resize), `showSticky` (scroll). Brak fetchowania danych.

## Assets (folder `assets/`)
- `okladka.png` — okładka główna (hero, sekcja 4, oferta)
- `addon-A.png` — okładka Załącznika A (hero, sekcja 4)
- `addon-B.png` — okładka Załącznika B (hero, sekcja 4)
- Do podania przez wydawcę: PDF fragmentu rozdziału, adres koszyka, linki stopki.

## Files
- `Landing Finanse po rozwodzie.dc.html` — pełny prototyp (markup + inline style + logika akordeonów w klasie na dole pliku; wszystkie finalne teksty są w tym pliku)
- `assets/` — okładki
