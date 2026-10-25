export type Author = { slug: string; name: string; bio: string };
export type Book = {
  slug: string; title: string; subtitle?: string; description: string;
  authorSlug: string; cover: string; year: number;
  formats: { label: string; href: string; detail: string }[];
  featured?: boolean;
};

export const authors: Author[] = [
  { slug: 'anna-wisniewska', name: 'Anna Wiśniewska', bio: 'Pisarka i uważna obserwatorka codzienności. W swoich książkach opowiada o małych decyzjach, które potrafią zmienić bieg całego życia. Mieszka nad morzem, gdzie najchętniej pisze o świcie.' },
  { slug: 'marek-zielinski', name: 'Marek Zieliński', bio: 'Autor opowieści o miejscach i ludziach, którzy nadają im znaczenie. Z wykształcenia historyk, z zamiłowania wędrowiec. Zbiera stare mapy i historie, których nikt jeszcze nie zapisał.' },
];

// Fikcyjne wpisy demonstrujące strukturę katalogu. Zastąp je opisami i plikami wydawnictwa.
export const books: Book[] = [
  { slug: 'dom-na-koncu-lata', title: 'Dom na końcu lata', subtitle: 'Opowieść o powrotach i nowych początkach', description: 'Kiedy Lena wraca do domu babci, nadmorskie lato okazuje się pełne rzeczy, które miały już nigdy się nie wydarzyć. Wśród zapachu jaśminu, starych listów i rozmów odkładanych na później odkrywa, że czasem trzeba wrócić, żeby móc ruszyć dalej.', authorSlug: 'anna-wisniewska', cover: '/images/dom-na-koncu-lata.svg', year: 2025, formats: [], featured: true },
  { slug: 'mapa-cichych-miejsc', title: 'Mapa cichych miejsc', subtitle: 'Podróż, która zaczyna się od jednego przystanku', description: 'Pewnego dnia Antoni znajduje w kieszeni starej kurtki mapę, której nie potrafi odczytać. Wyrusza jej śladem przez miasteczka, zapomniane stacje i własne wspomnienia. To ciepła opowieść o uważności i o tym, że czasem najważniejsze miejsca nie mają adresu.', authorSlug: 'marek-zielinski', cover: '/images/mapa-cichych-miejsc.svg', year: 2025, formats: [], featured: true },
  { slug: 'swiatlo-miedzy-wierszami', title: 'Światło między wierszami', subtitle: 'Historie na spokojniejszy dzień', description: 'Zbiór opowiadań o chwilach, które łatwo przeoczyć: krótkiej rozmowie w piekarni, nieodebranym telefonie i świetle, które wpada do kuchni tuż przed południem. Każda historia zostawia miejsce na własne zakończenie.', authorSlug: 'anna-wisniewska', cover: '/images/swiatlo-miedzy-wierszami.svg', year: 2024, formats: [], featured: true },
  { slug: 'ostatni-pociag-do-polnocy', title: 'Ostatni pociąg do północy', subtitle: 'Historia pewnego spotkania', description: 'Na peronie małej stacji spotykają się dwoje nieznajomych. Każde z nich jedzie w inną stronę, a mimo to rozmowa zaczęta przypadkiem zostanie z nimi na dłużej niż cała podróż. Krótka, pełna czułości opowieść Marka Zielińskiego.', authorSlug: 'marek-zielinski', cover: '/images/ostatni-pociag-do-polnocy.svg', year: 2024, formats: [], featured: true },
];
export const getAuthor = (slug: string) => authors.find((author) => author.slug === slug);
