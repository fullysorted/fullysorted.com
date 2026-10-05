/**
 * Provider images, three slots with one job each (plan: 2026-09-28).
 *
 *   banner  avatar_url     Wide photo of the work or the shop. REQUIRED.
 *                          Card header, profile band, OG image. The column
 *                          keeps its old name on purpose: renaming it touches
 *                          every reader for no visible gain.
 *   mark    logo_url       Square logo or portrait. OPTIONAL. When absent the
 *                          site draws a trade tile (components/providers/
 *                          ProviderMark.tsx), so it never looks missing.
 *   gallery gallery        Everything else. See lib/gallery.ts.
 *
 * logo_kind decides how the mark is framed: a 'logo' is shown whole on white
 * (object-contain, never cropped), a 'photo' fills the square (object-cover).
 * banner_focus is a CSS object-position the shop sets by tapping the part of
 * the photo that matters, so crops stop cutting the car in half.
 */
import { isBlobImageUrl } from './images';

export type LogoKind = 'logo' | 'photo';

export function normalizeLogoKind(v: unknown): LogoKind {
  return v === 'photo' ? 'photo' : 'logo';
}

/** "50% 40%" or null. Anything else is dropped rather than trusted into a style attribute. */
export function normalizeFocus(v: unknown): string | null {
  if (typeof v !== 'string') return null;
  const m = v.trim().match(/^(\d{1,3})% (\d{1,3})%$/);
  if (!m) return null;
  const x = Math.min(100, Number(m[1]));
  const y = Math.min(100, Number(m[2]));
  return `${x}% ${y}%`;
}

// Biased toward the top third: most shop photos that are taller than wide are
// a person or a storefront, and a dead-center crop of either takes the head
// off. A shop that tapped its own focus point overrides this.
export const DEFAULT_FOCUS = '50% 35%';

/** Optional mark URL: '' or null clears it, anything we do not host is refused. */
export function normalizeLogoUrl(v: unknown): { ok: true; value: string | null } | { ok: false } {
  if (v === null || v === '') return { ok: true, value: null };
  if (typeof v !== 'string') return { ok: false };
  const t = v.trim();
  if (!t) return { ok: true, value: null };
  return isBlobImageUrl(t) ? { ok: true, value: t } : { ok: false };
}

const SMALL_WORDS = new Set(['and', 'of', 'the', '&', 'llc', 'inc', 'co', 'co.']);

/** Two letters for the drawn tile. "Phan's Auto Repair" gives PA; "Melvin" gives ME. */
export function initialsFor(name: string): string {
  const words = (name || '')
    .replace(/[^\p{L}\p{N}\s&'.-]/gu, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/['.]/g, ''))
    .filter((w) => w && !SMALL_WORDS.has(w.toLowerCase()));
  if (words.length === 0) return 'FS';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/** Muted, dark trade tints for the drawn tile. Cream type sits on all of them at AA. */
export const MARK_TINTS: Record<string, string> = {
  inspection: '#12352A',
  transport: '#1F3A4D',
  detailing: '#1C5F5B',
  mechanical: '#2B2F33',
  restoration: '#4A3423',
  bodywork: '#3D2E3F',
  upholstery: '#4B3A2A',
  storage: '#2F3A2A',
  photography: '#1E2B3A',
  titling: '#33363D',
  dealer: '#12352A',
  consignment: '#12352A',
  'auction-rep': '#12352A',
};
export const DEFAULT_MARK_TINT = '#12352A';

/**
 * Last-resort banner by trade, used only when a row has no photo of its own
 * and no gallery (older rows; every new listing must carry one). Moved here
 * from the profile page so the card and the profile fall back the same way.
 */
const TRADE_PHOTOS: Record<string, string> = {
  photography: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80',
  detailing: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600&q=80',
  mechanical: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  transport: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80',
  storage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1600&q=80',
  inspection: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
  restoration: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  bodywork: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80',
};
const DEFAULT_TRADE_PHOTO = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80';

/** The banner to show, and whether it is the shop's own. */
export function resolveBanner(p: {
  avatarUrl?: string | null;
  gallery?: { url: string }[] | null;
  category?: string | null;
}): { src: string; own: boolean } {
  if (p.avatarUrl) return { src: p.avatarUrl, own: true };
  const first = p.gallery?.find((g) => g && isBlobImageUrl(g.url));
  if (first) return { src: first.url, own: true };
  return { src: TRADE_PHOTOS[(p.category ?? '').toLowerCase()] ?? DEFAULT_TRADE_PHOTO, own: false };
}
