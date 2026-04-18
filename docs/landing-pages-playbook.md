# Landing Pages Playbook

## Cel

Repozytorium jest przygotowane pod wiele landingów dla różnych publikacji. Każdy landing ma być technicznie prosty, szybki do wdrożenia i możliwy do rozwijania niezależnie od pozostałych.

## Docelowa struktura

```text
/
  index.html
  docs/
    landing-pages-playbook.md
  landing-pages/
    inwestowanie-w-kryzysie/
      index.html
      theme.css
      assets/
        images/
      dziekuje/
        index.html
  shared/
    base.css
```

## Zasady organizacji

1. Każda publikacja dostaje osobny katalog w `landing-pages/<slug-publikacji>/`.
2. Nazwa katalogu musi być slugiem ASCII, bez spacji i bez polskich znaków, np. `psychologia-pieniedzy`.
3. Każdy landing jest samodzielną jednostką roboczą: ma własny `index.html`, własny `theme.css`, własne `assets/` i własną stronę `dziekuje/`.
4. Assety konkretnego landingu nie mogą trafiać do katalogu globalnego. Obrazy, ikony i mockupy trzymamy w `landing-pages/<slug>/assets/`.
5. Wspólne zasady wizualne i techniczne zapisujemy w `shared/base.css`, ale bez build stepu nie zakładamy ciężkiej współzależności runtime między landingami.

## Co jest wspólne, a co lokalne

### Wspólne

- podstawowe tokeny i reset w `shared/base.css`
- podejście do responsywności
- SEO i tracking
- sposób nazywania plików i katalogów
- schemat deployu

### Lokalne dla pojedynczego LP

- paleta kolorów
- fonty
- zdjęcia, ilustracje, ikony
- kompozycja hero i sekcji
- copy
- lokalne CTA i linki sprzedażowe

## Zasady motywu

1. Każdy landing dostaje własny `theme.css`.
2. `theme.css` definiuje przynajmniej:
   - font display
   - font body
   - kolor tła
   - kolor tekstu
   - kolor akcentu
3. Zmiany motywu nie mogą wymagać przebudowy innych landingów.
4. Jeśli nowy landing ma wyraźnie inny charakter, wolno zmienić nie tylko kolory, ale też typografię, ikonografię, rytm sekcji i sposób prowadzenia CTA.

## Zasady HTML

1. Nie tworzymy jednego ogromnego pliku w root repo dla każdej nowej publikacji.
2. Nowy landing powstaje przez skopiowanie katalogu istniejącego LP albo przygotowanie nowego katalogu według tego samego schematu.
3. Ścieżki do assetów mają być lokalne względem katalogu landingu, np. `./assets/images/okladka.png`.
4. Strona `dziekuje/` powinna używać linków względnych do strony produktu, np. `../`.
5. Jeśli landing zachowuje Tailwind z CDN, konfiguracja fontów ma czytać wartości z CSS variables. Jeśli kiedyś dojdzie build step, można to scentralizować mocniej.

## Zasady CSS

1. Nie opieramy całego repo na kopiowaniu przypadkowych utility classes bez warstwy motywu.
2. `shared/base.css` jest punktem startowym dla powtarzalnych zasad.
3. `theme.css` jest jedynym miejscem, gdzie landing definiuje swój charakter wizualny.
4. Jeśli dwa landingi mają wyglądać inaczej, to jest oczekiwane zachowanie, nie wyjątek.
5. Jeżeli styl danego LP wymaga własnych ikon albo własnego sposobu kadrowania obrazów, trzymamy to lokalnie w jego katalogu.

## Zasady wdrożenia

1. Deploy nie powinien zależeć od ręcznego dopisywania każdego nowego pliku w kilku miejscach.
2. Dla każdego LP trzeba jasno określić, które pliki są publikowane:
   - `index.html`
   - `theme.css`
   - `dziekuje/index.html`
   - cały `assets/`
3. Jeśli repo pozostaje bez build stepu, landing ma być możliwie samowystarczalny przy publikacji.
4. Jeśli liczba landingów wzrośnie, następnym krokiem powinno być dołożenie lekkiego generatora statycznego albo prostego etapu eksportu do katalogu `.dist/`.

## Workflow dla kolejnego agenta

1. Sprawdź istniejące katalogi w `landing-pages/`.
2. Utwórz nowy katalog `landing-pages/<nowy-slug>/`.
3. Skopiuj strukturę:
   - `index.html`
   - `theme.css`
   - `assets/`
   - `dziekuje/index.html`
4. Podmień:
   - meta title i description
   - obrazy
   - kolory i fonty w `theme.css`
   - linki sprzedażowe
   - treść sekcji
5. Upewnij się, że ścieżki są względne i nie odnoszą się do innego landingu.
6. Dopiero po tym aktualizuj deploy dla nowej publikacji.

## Decyzje już wdrożone w tym repo

- Obecny landing został przeniesiony do `landing-pages/inwestowanie-w-kryzysie/`.
- Assety tego LP zostały przeniesione do `landing-pages/inwestowanie-w-kryzysie/assets/images/`.
- Strona podziękowania jest w `landing-pages/inwestowanie-w-kryzysie/dziekuje/index.html`.
- Dodano `theme.css` dla bieżącego LP.
- Dodano `shared/base.css` jako bazę pod wspólne reguły.
- Root `index.html` pełni teraz rolę prostego punktu wejścia do workspace.

## Rekomendacja na dalszy etap

Jeśli w repo pojawią się 3 lub więcej aktywnych landingów, warto dołożyć prosty etap budowania eksportu do `.dist/`, żeby można było współdzielić więcej runtime assets bez ręcznego kopiowania plików między landingami.
