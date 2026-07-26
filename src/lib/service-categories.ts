/**
 * The single source of truth for service categories.
 *
 * These lists used to be hardcoded separately in the hero, the homepage
 * services section, the directory, both apply forms and two dashboards — which
 * is how the homepage ended up advertising "financing", "insurance" and
 * "storage" that the directory cannot filter for, and why promoting a category
 * meant editing six files.
 *
 * LAUNCH PRIORITY: `featured` marks the categories being pushed first —
 * detailing, inspection and photography. They lead the homepage and sort first
 * in the directory. Everything else keeps working exactly as before. To promote
 * a different category later, move the flag; nothing else needs touching.
 */
export type ServiceCategoryKey =
  | 'detailing'
  | 'inspection'
  | 'photography'
  | 'mechanical'
  | 'transport'
  | 'restoration'
  | 'bodywork';

export interface ServiceCategory {
  key: ServiceCategoryKey;
  /** Short label for chips and filters. */
  label: string;
  /** Full label for forms and provider-facing lists. */
  longLabel: string;
  /** One line for an owner deciding whether this is what they need. */
  blurb: string;
  /** What an owner would actually type or say they want. */
  askedFor: string;
  /** Featured for launch. */
  featured: boolean;
  /** Accent used for category tiles and headers. */
  tint: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: 'detailing',
    label: 'Detailing',
    longLabel: 'Detailing & Paint Correction',
    blurb: 'Ceramic coating, paint correction, concours prep — by people who have done it on cars like yours.',
    askedFor: 'Ceramic coating or a proper correction',
    featured: true,
    tint: '#1E6091',
  },
  {
    key: 'inspection',
    label: 'Inspections',
    longLabel: 'Pre-Purchase Inspection',
    blurb: 'An honest set of eyes on a car before you wire the money. Compression, panel gaps, the things sellers do not photograph.',
    askedFor: 'A pre-purchase inspection',
    featured: true,
    tint: '#4b8b2e',
  },
  {
    key: 'photography',
    label: 'Photography',
    longLabel: 'Automotive Photography',
    blurb: 'Photography that sells the car, or simply does it justice. Listing shoots, editorial, event coverage.',
    askedFor: 'Photos worth the car',
    featured: true,
    tint: '#B08D3F',
  },
  {
    key: 'mechanical',
    label: 'Mechanics',
    longLabel: 'Service & Mechanical',
    blurb: 'Carbs, points, cam chains, cooling — mechanics who know your model, not just modern diagnostic ports.',
    askedFor: 'A marque specialist',
    featured: false,
    tint: '#5a6b74',
  },
  {
    key: 'transport',
    label: 'Transport',
    longLabel: 'Enclosed Transport',
    blurb: 'Door-to-door enclosed hauling. Your car rides inside, with drivers who know what they are carrying.',
    askedFor: 'Enclosed transport',
    featured: false,
    tint: '#3f6f8a',
  },
  {
    key: 'restoration',
    label: 'Restoration',
    longLabel: 'Restoration',
    blurb: 'Sympathetic refresh through to rotisserie rebuild, with the photos and invoices to prove it.',
    askedFor: 'Restoration work',
    featured: false,
    tint: '#9a5a33',
  },
  {
    key: 'bodywork',
    label: 'Body & Paint',
    longLabel: 'Body Work & Paint',
    blurb: 'Metal shaping, colour matching, factory-correct finishes. The shops other shops recommend.',
    askedFor: 'Body and paint',
    featured: false,
    tint: '#7a4a5a',
  },
];

/** Featured first, then the rest — the order everything user-facing should use. */
export const CATEGORIES_BY_PRIORITY: ServiceCategory[] = [
  ...SERVICE_CATEGORIES.filter((c) => c.featured),
  ...SERVICE_CATEGORIES.filter((c) => !c.featured),
];

export const FEATURED_CATEGORIES = SERVICE_CATEGORIES.filter((c) => c.featured);

/** Option list for apply forms and dashboards. */
export const CATEGORY_OPTIONS = CATEGORIES_BY_PRIORITY.map((c) => ({
  value: c.key,
  label: c.longLabel,
}));

export const CATEGORY_TINTS: Record<string, string> = Object.fromEntries(
  SERVICE_CATEGORIES.map((c) => [c.key, c.tint])
);

export function isServiceCategory(v: unknown): v is ServiceCategoryKey {
  return SERVICE_CATEGORIES.some((c) => c.key === v);
}

export function categoryLabel(key: string): string {
  return SERVICE_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}
