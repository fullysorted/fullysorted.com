/**
 * The single source of truth for service categories.
 *
 * These lists used to be hardcoded separately in the hero, the homepage
 * services section, the directory, both apply forms and two dashboards — which
 * is how the homepage ended up advertising "financing", "insurance" and
 * "valuation" that the directory cannot filter for, and why promoting a
 * category meant editing six files.
 *
 * WHAT IS LIVE: the six recurring trades — photography, inspection, detailing,
 * storage, transport and mechanical — plus restoration and body & paint.
 *
 * Restoration and body & paint were held back at first because both are
 * month-long project work bought on long referral cycles. They were switched on
 * 2026-08-19 because outreach is calling restoration shops directly: without a
 * category to file them under, a rotisserie house gets logged as "mechanical"
 * and its public page reads "is a mechanical specialist".
 *
 * Set `active: false` to retire a category. Labels and tints resolve for
 * inactive categories too, so existing provider rows still render.
 */
export type ServiceCategoryKey =
  | 'photography'
  | 'inspection'
  | 'detailing'
  | 'storage'
  | 'transport'
  | 'mechanical'
  | 'restoration'
  | 'bodywork';

export interface ServiceCategory {
  key: ServiceCategoryKey;
  /** Short label for chips and filters. */
  label: string;
  /** Full label for forms and provider-facing lists. */
  longLabel: string;
  /** Two words for what this actually does to the car. Used as a card kicker. */
  verb: string;
  /** One line for an owner deciding whether this is what they need. */
  blurb: string;
  /** What an owner would actually type or say they want. */
  askedFor: string;
  /** Live on the platform. Inactive categories are hidden but still resolve. */
  active: boolean;
  /** Accent used for category tiles and headers. */
  tint: string;
}

/** Every category the platform has ever had a label for, active or not. */
export const ALL_CATEGORIES: ServiceCategory[] = [
  {
    key: 'photography',
    label: 'Photography',
    longLabel: 'Automotive Photography',
    verb: 'Shoot it',
    blurb: 'Photography that sells the car, or simply does it justice. Listing shoots, editorial, event coverage.',
    askedFor: 'Photos worth the car',
    active: true,
    tint: '#B08D3F',
  },
  {
    key: 'inspection',
    label: 'Inspections',
    longLabel: 'Pre-Purchase Inspection',
    verb: 'Check it',
    blurb: 'An honest set of eyes on a car before you wire the money. Compression, panel gaps, the things sellers do not photograph.',
    askedFor: 'A pre-purchase inspection',
    active: true,
    tint: '#4b8b2e',
  },
  {
    key: 'detailing',
    label: 'Detailing',
    longLabel: 'Detailing & Paint Correction',
    verb: 'Clean it',
    blurb: 'Ceramic coating, paint correction, concours prep — by people who have done it on cars like yours.',
    askedFor: 'Ceramic coating or a proper correction',
    active: true,
    tint: '#1E6091',
  },
  {
    key: 'storage',
    label: 'Storage',
    longLabel: 'Climate-Controlled Storage',
    verb: 'Store it',
    blurb: 'Somewhere secure between drives. Climate control, battery tending, and someone who will actually start it.',
    askedFor: 'Somewhere safe to keep it',
    active: true,
    tint: '#3D6B6B',
  },
  {
    key: 'transport',
    label: 'Transport',
    longLabel: 'Enclosed Transport & Shipping',
    verb: 'Move it',
    blurb: 'Door-to-door enclosed hauling, in state or across the country. Your car rides inside, with drivers who know what they are carrying.',
    askedFor: 'Enclosed transport',
    active: true,
    tint: '#2C4A63',
  },
  {
    key: 'mechanical',
    label: 'Mechanics',
    longLabel: 'Service & Mechanical',
    verb: 'Fix it',
    blurb: 'Carbs, points, cam chains, cooling — mechanics who know your model, not just modern diagnostic ports.',
    askedFor: 'A marque specialist',
    active: true,
    tint: '#9a5a33',
  },

  {
    key: 'restoration',
    label: 'Restoration',
    longLabel: 'Restoration',
    verb: 'Rebuild it',
    blurb: 'Sympathetic refresh through to rotisserie rebuild, with the photos and invoices to prove it.',
    askedFor: 'Restoration work',
    active: true,
    tint: '#7a4a5a',
  },
  {
    key: 'bodywork',
    label: 'Body & Paint',
    longLabel: 'Body Work & Paint',
    verb: 'Straighten it',
    blurb: 'Metal shaping, color matching, factory-correct finishes. The shops other shops recommend.',
    askedFor: 'Body and paint',
    active: true,
    tint: '#5a6b74',
  },
];

/**
 * The categories that are actually live. This is what every user-facing
 * surface should render — homepage, directory filters, apply forms,
 * dashboards. Order here is the order everywhere.
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = ALL_CATEGORIES.filter((c) => c.active);

/** Option list for apply forms and dashboards. */
export const CATEGORY_OPTIONS = SERVICE_CATEGORIES.map((c) => ({
  value: c.key,
  label: c.longLabel,
}));

/** Tints resolve for inactive categories too, so old provider rows still render. */
export const CATEGORY_TINTS: Record<string, string> = Object.fromEntries(
  ALL_CATEGORIES.map((c) => [c.key, c.tint])
);

/** True only for categories a provider can currently be listed under. */
export function isServiceCategory(v: unknown): v is ServiceCategoryKey {
  return SERVICE_CATEGORIES.some((c) => c.key === v);
}

/** Labels resolve for inactive categories too — never show a raw key. */
export function categoryLabel(key: string): string {
  return ALL_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

/* ─────────────────────────────────────────────────────────────────────────
 * Services we point at rather than list.
 *
 * Insurance has no local providers to review, book or pay through escrow, so
 * it must never become a directory category — `/services?type=insurance`
 * would return an empty result, which is exactly the bug the old homepage
 * had. These render as their own card and go to their own page.
 * ───────────────────────────────────────────────────────────────────────── */
export interface ReferralService {
  key: string;
  label: string;
  longLabel: string;
  verb: string;
  blurb: string;
  askedFor: string;
  /** Internal route. Never link straight out from the homepage. */
  href: string;
  tint: string;
}

export const REFERRAL_SERVICES: ReferralService[] = [
  {
    key: 'insurance',
    label: 'Insurance',
    longLabel: 'Collector Car Insurance',
    verb: 'Insure it',
    blurb:
      'A standard policy pays what the car depreciated to. A collector policy pays the number you agreed up front — which is worth understanding before you need it.',
    askedFor: 'Agreed-value cover',
    href: '/insurance',
    tint: '#6B4E71',
  },
];
