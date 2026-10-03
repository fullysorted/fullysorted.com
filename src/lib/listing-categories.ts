// One list of car categories for both ends of the marketplace. The sell form
// and the browse filters used to keep their own lists, and they had drifted:
// sell offered "Barn Find", "Truck / SUV" and "Other", browse filtered on
// "Barn Finds" and "Track / Race", so some cars could never be filtered to
// and one filter could never match. Client-safe.
export const LISTING_CATEGORIES = [
  'Muscle',
  'European',
  'JDM',
  'Vintage',
  'Modern Classic',
  'Track / Race',
  'Project',
  'Barn Find',
  'Truck / SUV',
  'Other',
] as const;

export type ListingCategory = (typeof LISTING_CATEGORIES)[number];

// The categories the Projects page (/projects) collects: cars sold as
// unfinished work. Anything else a seller calls a project still shows on
// /browse; it just is not gathered here unless it carries one of these.
export const PROJECT_CATEGORIES: readonly string[] = ['Project', 'Barn Find'];
export const isProjectCategory = (c: string | null | undefined) => !!c && PROJECT_CATEGORIES.includes(c);
