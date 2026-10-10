// The For Sale section of the site, in one place. The header dropdown, the
// mobile menu, the footer, the /for-sale hub and the tab row on each page all
// read this list, so a new section is added here once. Client-safe.
export type ForSaleKey = 'cars' | 'parts' | 'projects' | 'memorabilia' | 'artwork';

export const FOR_SALE_HUB = { href: '/for-sale', label: 'For Sale' } as const;

export const FOR_SALE_SECTIONS: {
  key: ForSaleKey;
  href: string;
  label: string;
  blurb: string;
  sellHref: string;
  sellLabel: string;
}[] = [
  {
    key: 'cars',
    href: '/cars',
    label: 'Cars',
    blurb: 'Collector cars from private owners and dealers. Dealer stock is marked.',
    sellHref: '/sell',
    sellLabel: 'Sell a car',
  },
  {
    key: 'parts',
    href: '/parts',
    label: 'Parts',
    blurb: 'Spares, take-offs, wheels, trim and the box of bits.',
    sellHref: '/parts/new',
    sellLabel: 'List a part',
  },
  {
    key: 'projects',
    href: '/projects',
    label: 'Projects',
    blurb: 'Project cars and barn finds, sold as unfinished work.',
    sellHref: '/sell?category=Project',
    sellLabel: 'Sell a project',
  },
  {
    key: 'memorabilia',
    href: '/memorabilia',
    label: 'Memorabilia',
    blurb: 'Brochures, manuals, signs, models and race gear.',
    sellHref: '/parts/new?kind=memorabilia',
    sellLabel: 'List memorabilia',
  },
  {
    key: 'artwork',
    href: '/artwork',
    label: 'Artwork',
    blurb: 'Original paintings, posters, prints and photographs.',
    sellHref: '/parts/new?kind=art',
    sellLabel: 'List artwork',
  },
];

export const WANTED_LINK = { href: '/wanted', label: 'Wanted' } as const;
