/** Types and constants for the Parts board that are safe to import in the browser. */
export const PARTS_KINDS = [
  { key: 'part', label: 'Parts', singular: 'Part' },
  { key: 'memorabilia', label: 'Memorabilia', singular: 'Memorabilia' },
] as const;
export type PartsKind = (typeof PARTS_KINDS)[number]['key'];

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
/** Live listings one member can have at once. Free, so the cap is the only brake. */
export const PARTS_MAX_LIVE = 10;
export const PARTS_MAX_PHOTOS = 6;

export interface PartsPost {
  id: number;
  kind: PartsKind;
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
