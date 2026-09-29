/**
 * Client-safe newsletter vocabulary. Server logic lives in newsletter.ts.
 */

export type NewsletterInterest = 'cars' | 'shops' | 'research';

export const NEWSLETTER_INTERESTS: { key: NewsletterInterest; label: string; hint: string }[] = [
  { key: 'cars', label: 'Cars for sale', hint: 'New listings, near you or in the marques you pick' },
  { key: 'shops', label: 'New shops near me', hint: 'Specialists as they join in your area' },
  { key: 'research', label: 'Research', hint: 'New model histories and market notes' },
];

export const NEWSLETTER_RADII = [25, 50, 100, 250, 0] as const; // 0 = anywhere
export const NEWSLETTER_MARQUES_MAX = 10;

/** Where a signup came from. Stored so Chris can see which placement works. */
export const NEWSLETTER_SOURCES = ['footer', 'popup', 'model', 'browse', 'services', 'research', 'page'] as const;
export type NewsletterSource = (typeof NEWSLETTER_SOURCES)[number];

/** localStorage keys, per browser. Only used to honor the visitor's own choices. */
export const NL_KEY_SUBSCRIBED = 'fs_nl_subscribed';
export const NL_KEY_DISMISSED = 'fs_nl_dismissed'; // JSON { at: number, count: number }
export const NL_SESSION_VIEWS = 'fs_nl_views';
export const NL_SESSION_SHOWN = 'fs_nl_shown';

/** Fired on window after any successful signup, so the popup stands down. */
export const NL_EVENT = 'fs:newsletter-subscribed';

export function isZip(v: unknown): v is string {
  return typeof v === 'string' && /^\d{5}$/.test(v.trim());
}
