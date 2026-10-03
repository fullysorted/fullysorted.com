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
  'Barn Find',
  'Truck / SUV',
  'Other',
] as const;

export type ListingCategory = (typeof LISTING_CATEGORIES)[number];
