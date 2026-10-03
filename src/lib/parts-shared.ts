/** Types and constants for the Parts board that are safe to import in the browser. */
export const PARTS_KINDS = [
  { key: 'part', label: 'Parts', singular: 'Part' },
  { key: 'memorabilia', label: 'Memorabilia', singular: 'Memorabilia' },
  // Added 2026-10-02: artwork has its own page under For Sale (/artwork).
  { key: 'art', label: 'Artwork', singular: 'Artwork' },
] as const;
export type PartsKind = (typeof PARTS_KINDS)[number]['key'];

/**
 * Shelves within each kind. A listing picks one. Listings posted before
 * categories existed have none and still show under their kind and on the
 * main board; silence is never a "no".
 *
 * `trade` is the service category a buyer of that shelf most often needs next
 * (a gearbox wants a mechanic). Memorabilia has none: nobody fits a poster.
 * Keys are stored in parts_posts.category, VARCHAR(16). Never rename a key;
 * relabel instead.
 */
export const PARTS_CATEGORIES = [
  { key: 'engine', kind: 'part', slug: 'engine-and-drivetrain', label: 'Engine and drivetrain', short: 'Engine',
    blurb: 'Blocks, heads, carburetors, injection, gearboxes, axles.', trade: 'mechanical',
    tips: ['Ask for the casting and stamping numbers, photographed, not typed.', 'A rebuilt unit should come with the receipt for the rebuild. Ask who did it.'] },
  { key: 'chassis', kind: 'part', slug: 'suspension-and-brakes', label: 'Suspension and brakes', short: 'Suspension',
    blurb: 'Springs, shocks, arms, calipers, steering boxes.', trade: 'mechanical',
    tips: ['Calipers and master cylinders sold as "rebuilt" vary. Ask what was replaced.', 'Check left and right. Plenty of arms and hubs are handed.'] },
  { key: 'body', kind: 'part', slug: 'body-and-trim', label: 'Body and trim', short: 'Body',
    blurb: 'Panels, glass, bumpers, chrome, badges, seals.', trade: 'bodywork',
    tips: ['Ask for photos of the back of a panel. That is where the rust and the filler live.', 'Freight on a fender costs more than the fender sometimes. Settle shipping before price.'] },
  { key: 'interior', kind: 'part', slug: 'interior', label: 'Interior', short: 'Interior',
    blurb: 'Seats, dashes, gauges, steering wheels, radios, carpets.', trade: 'upholstery',
    tips: ['Gauges should say whether they have been tested, and how.', 'Original upholstery colors have names and codes. Ask for both.'] },
  { key: 'wheels', kind: 'part', slug: 'wheels-and-tires', label: 'Wheels and tires', short: 'Wheels',
    blurb: 'Original and period wheels, hubcaps, spinners, tires.', trade: 'mechanical',
    tips: ['Ask for the date stamps on wheels and the DOT date code on tires.', 'Old tires that look fine can still be unsafe. Treat them as display pieces unless told otherwise.'] },
  { key: 'electrical', kind: 'part', slug: 'electrical-and-lighting', label: 'Electrical and lighting', short: 'Electrical',
    blurb: 'Lamps, lenses, switches, harnesses, starters, generators.', trade: 'mechanical',
    tips: ['Lenses are often reproduced. Ask for the maker marks.', 'Ask whether a harness or starter has been on a running car recently.'] },
  { key: 'tools', kind: 'part', slug: 'tools-and-kits', label: 'Tools and kits', short: 'Tools',
    blurb: 'Factory tool rolls, jacks, spare wheels, shop equipment.', trade: null,
    tips: ['Complete original tool kits are worth asking about piece by piece.', 'Reproduction tool rolls are common and fine. They should be sold as what they are.'] },
  { key: 'other_part', kind: 'part', slug: 'other-parts', label: 'Everything else', short: 'Other',
    blurb: 'Hardware, fluids, odd lots and the box of bits.', trade: null,
    tips: ['Odd lots are a gamble. Ask for a photo of everything in the box, laid out.'] },
  { key: 'literature', kind: 'memorabilia', slug: 'literature-and-manuals', label: 'Literature and manuals', short: 'Literature',
    blurb: 'Brochures, owner and workshop manuals, window stickers, period ads.', trade: null,
    tips: ['Original brochures carry print codes. Ask for a photo of the back cover.', 'Owner manuals and warranty books that belong to a specific car are worth more with it. Ask which car.'] },
  { key: 'signs', kind: 'memorabilia', slug: 'signs-and-automobilia', label: 'Signs and automobilia', short: 'Signs',
    blurb: 'Dealer signs, oil cans, pump globes, showroom displays.', trade: null,
    tips: ['Signs are reproduced constantly. Ask for the back, the edges and the mounting holes.', 'Porcelain should be heavy and layered. Ask the weight.'] },
  // 'art' moved from memorabilia to its own kind 2026-10-02. Key and slug kept.
  { key: 'art', kind: 'art', slug: 'art-and-posters', label: 'Posters and prints', short: 'Posters',
    blurb: 'Race and event posters, limited prints, lithographs.', trade: null,
    tips: ['Ask whether a poster is an original print run or a later reprint, and how the seller knows.', 'Ask for the size and a photo of the margins.'] },
  { key: 'models', kind: 'memorabilia', slug: 'models-and-toys', label: 'Models and toys', short: 'Models',
    blurb: 'Scale models, dealer promos, tin toys, slot cars.', trade: null,
    tips: ['Boxes matter. Ask whether it has one and what shape it is in.'] },
  { key: 'apparel', kind: 'memorabilia', slug: 'apparel-and-racing-gear', label: 'Apparel and racing gear', short: 'Apparel',
    blurb: 'Team jackets, helmets, suits, club and event wear.', trade: null,
    tips: ['Race-used gear needs a story you can check. Ask for it.', 'Old helmets are for the shelf, not the track.'] },
  { key: 'other_memo', kind: 'memorabilia', slug: 'other-collectibles', label: 'Other collectibles', short: 'Other',
    blurb: 'Keys, trophies, club badges, dash plaques and the unclassifiable.', trade: null,
    tips: ['Event plaques and trophies are best with the event named. Ask which one.'] },
  { key: 'painting', kind: 'art', slug: 'original-art', label: 'Original art', short: 'Original',
    blurb: 'Paintings, drawings, watercolors and sculpture.', trade: null,
    tips: ['Ask who the artist is, when it was made, and how the seller came by it.', 'Ask for a photo of the back and of the signature, close up.'] },
  { key: 'photo', kind: 'art', slug: 'photographs', label: 'Photographs', short: 'Photos',
    blurb: 'Period race photography and signed fine-art prints.', trade: null,
    tips: ['Ask whether it is a period print or a later one, and the edition size if it is numbered.'] },
  { key: 'other_art', kind: 'art', slug: 'other-art', label: 'Other art', short: 'Other',
    blurb: 'Cutaway drawings, design sketches, studio pieces and the unclassifiable.', trade: null,
    tips: ['Design drawings and cutaways get reproduced. Ask for the paper, the size and where it came from.'] },
] as const;
export type PartsCategory = (typeof PARTS_CATEGORIES)[number];
export type PartsCategoryKey = PartsCategory['key'];

export const partsCategory = (key: string | null | undefined): PartsCategory | null =>
  PARTS_CATEGORIES.find((c) => c.key === key) ?? null;
export const partsCategoryBySlug = (slug: string): PartsCategory | null =>
  PARTS_CATEGORIES.find((c) => c.slug === slug) ?? null;
export const categoriesFor = (kind: PartsKind): PartsCategory[] => PARTS_CATEGORIES.filter((c) => c.kind === kind);

/** Each kind has its own page under For Sale: /parts, /memorabilia and /artwork. */
export const kindHref = (kind: PartsKind) => (kind === 'memorabilia' ? '/memorabilia' : kind === 'art' ? '/artwork' : '/parts');

// ─── Listing fees (2026-10-02) ───────────────────────────────────────────────
// The first PARTS_FREE_LISTINGS listings on the board are free. After that a
// listing costs a one-time fee, or a seller plan covers up to
// PARTS_PLAN_MAX_LIVE live listings at once. Prices are shown only on the
// posting form, never in page copy (Chris, 2026-09-28).
export const PARTS_FREE_LISTINGS = 100;
export const PARTS_ITEM_FEE_CENTS = 299;
export const PARTS_PLAN_CENTS = 999;
export const PARTS_PLAN_MAX_LIVE = 25;
export const centsLabel = (c: number) => `$${(c / 100).toFixed(2)}`;

/** What a member can do on the posting form right now. Computed server-side. */
export type PartsAccess = {
  mode: 'free' | 'plan' | 'pay';
  freeLeft: number;
  live: number;
  maxLive: number;
  plan: { status: string; periodEnd: string | null; cancelAtPeriodEnd: boolean } | null;
};

export const PARTS_CONDITIONS = [
  { key: 'new', label: 'New' },
  { key: 'nos', label: 'New old stock' },
  { key: 'used', label: 'Used' },
  { key: 'rebuilt', label: 'Rebuilt' },
  { key: 'repro', label: 'Reproduction' },
  { key: 'core', label: 'For parts or rebuild' },
] as const;
export type PartsCondition = (typeof PARTS_CONDITIONS)[number]['key'];

export const PARTS_SHIPPING = [
  { key: 'ships', label: 'Ships' },
  { key: 'pickup', label: 'Local pickup only' },
  { key: 'both', label: 'Ships or pickup' },
] as const;
export type PartsShipping = (typeof PARTS_SHIPPING)[number]['key'];

/** Days a listing stays on the board before it drops off on its own. */
export const PARTS_DAYS = 90;
/** Live listings one member can have at once without a seller plan. */
export const PARTS_MAX_LIVE = 10;
export const PARTS_MAX_PHOTOS = 6;

export interface PartsPost {
  id: number;
  kind: PartsKind;
  /** Null on listings posted before shelves existed. */
  category: PartsCategoryKey | null;
  title: string;
  body: string;
  make: string | null;
  model: string | null;
  modelSlug: string | null;
  partNumber: string | null;
  condition: PartsCondition | null;
  /** Whole US dollars. Null means "make an offer". */
  price: number | null;
  location: string | null;
  shipping: PartsShipping | null;
  photos: string[];
  status: string;
  handle: string | null;
  replyCount: number;
  createdAt: string;
  expiresAt: string | null;
}

export const conditionLabel = (k: string | null) => PARTS_CONDITIONS.find((c) => c.key === k)?.label ?? null;
export const shippingLabel = (k: string | null) => PARTS_SHIPPING.find((s) => s.key === k)?.label ?? null;
export const priceLabel = (p: number | null) => (p == null ? 'Make an offer' : `$${p.toLocaleString('en-US')}`);
