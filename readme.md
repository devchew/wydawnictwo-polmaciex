# Wydawnictwo Polmaciex

Lekka, statyczna strona wydawnictwa zbudowana w Astro. Dane książek i biogramy autorów znajdują się w `src/data/books.ts`; Astro generuje z nich strony książek podczas kompilacji.

## Uruchomienie

Wymagany Node.js 18.20.8+, 20.3.0+ lub 22.0.0+.

```sh
npm install
npm run dev
```

Kompilacja do `dist/` i lokalny podgląd:

```sh
npm run build
npm run preview
```

## Docker

Obraz produkcyjny buduje statyczną stronę w Node.js, a następnie serwuje wynik przez nginx:

```sh
docker build -t polmaciex .
docker run --rm -p 8080:80 polmaciex
```

Strona będzie dostępna pod `http://localhost:8080`.

## Dodawanie książek

1. Dodaj okładkę do `public/images/` (SVG, WebP lub JPG).
2. Dopisz wpis `Book` w `src/data/books.ts`, używając unikalnego `slug` i istniejącego `authorSlug`.
3. Dodaj EPUB lub audiobook do `public/books/` i wpisz jego ścieżkę, etykietę oraz krótki opis w `formats`. Pominięte formaty nie wyświetlają nieaktywnego przycisku.
4. Dla nowego autora dopisz biogram do `authors`. Zmiana wpisu autora aktualizuje bio na stronach jego wszystkich książek.
5. Ustaw `featured: true`, aby pokazać tytuł na półce strony głównej, po czym zbuduj stronę ponownie.

Obecne wpisy i okładki są fikcyjnymi materiałami demonstracyjnymi. Przed publikacją zastąp je treściami wydawnictwa i dodaj rzeczywiste pliki do pobrania.
