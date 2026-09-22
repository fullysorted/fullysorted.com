/** Types and constants for the Wanted board that are safe to import in the browser. */
export const WANTED_KINDS = [
  { key: 'car', label: 'Cars', singular: 'Car' },
  { key: 'part', label: 'Parts', singular: 'Part' },
  { key: 'service', label: 'Services', singular: 'Service' },
] as const;
export type WantedKind = (typeof WANTED_KINDS)[number]['key'];

/** Days a post stays on the board before it drops off on its own. */
export const WANTED_DAYS = 60;

export interface WantedPost {
  id: number;
  kind: WantedKind;
  title: string;
  body: string;
  make: string | null;
  category: string | null;
  location: string | null;
  budget: string | null;
  feeText: string | null;
  feeTerms: string | null;
  status: string;
  handle: string | null;
  replyCount: number;
  createdAt: string;
  expiresAt: string | null;
}
