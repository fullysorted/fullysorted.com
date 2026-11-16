/** Types and constants for the scanner that are safe to import in the browser. */
import { PARTS_MAX_PHOTOS, type PartsKind, type PartsCategoryKey, type PartsCondition } from '@/lib/parts-shared';

export const SCAN_MAX_PHOTOS = PARTS_MAX_PHOTOS;
/** Photos the model actually reads. The rest are kept for the listing. */
export const SCAN_READ_PHOTOS = 4;
/** Scans per member per rolling day. Staff get the higher figure. */
export const SCAN_DAILY_LIMIT = 25;
export const SCAN_STAFF_DAILY_LIMIT = 400;
/** Long edge, in pixels, the browser shrinks a photo to before upload. */
export const SCAN_PHOTO_EDGE = 1600;

export type ScanConfidence = 'high' | 'medium' | 'low';

/** One price found on the web. Never an estimate: a comp without a source the
 *  search tool returned is dropped before it is stored. */
export interface ScanComp {
  title: string;
  /** In `currency`, as printed on the source. */
  price: number;
  currency: string;
  /** YYYY-MM-DD or YYYY-MM as the source states it; empty when it does not. */
  date: string;
  venue: string;
  url: string;
  /** True for a completed sale. False is an asking price, which is not a sale. */
  sold: boolean;
  condition: string;
  /** Whether the figure includes buyer's premium, when the source says. */
  premium: 'included' | 'excluded' | 'unknown';
}

export interface ScanItem {
  id: number;
  kind: PartsKind;
  category: PartsCategoryKey | null;
  title: string;
  body: string;
  /** The car the item is of or for. */
  make: string | null;
  model: string | null;
  partNumber: string | null;
  condition: PartsCondition | null;
  /** Who made the item itself: CMC, BBR, Bosch, the artist. */
  maker: string | null;
  scale: string | null;
  /** The maker's own reference or catalog number, as printed. */
  reference: string | null;
  era: string | null;
  confidence: ScanConfidence;
  /** What the read rests on, in plain words. */
  seen: string[];
  /** What photo or fact would settle what is still open. */
  missing: string[];
  photos: string[];
  /** Asking price in whole US dollars, set by the owner. */
  price: number | null;
  location: string | null;
  /** Private. Where it lives: "garage shelf 3". Never published. */
  note: string | null;
  comps: ScanComp[];
  compsNote: string | null;
  compsAt: string | null;
  status: 'draft' | 'listed';
  postId: number | null;
  createdAt: string;
}

export interface ScanUsage {
  used: number;
  limit: number;
  staff: boolean;
}

/** The fields a scan hands to the listing form. */
export function scanToListing(i: ScanItem) {
  return {
    kind: i.kind,
    category: i.category ?? '',
    title: i.title,
    body: i.body,
    make: i.make ?? '',
    model: i.model ?? '',
    partNumber: i.partNumber ?? (i.kind === 'part' ? i.reference ?? '' : ''),
    condition: i.condition ?? '',
    price: i.price == null ? '' : String(i.price),
    location: i.location ?? '',
    photos: i.photos,
  };
}

const CSV_COLUMNS: [string, (i: ScanItem) => string | number | null][] = [
  ['id', (i) => i.id],
  ['kind', (i) => i.kind],
  ['shelf', (i) => i.category],
  ['headline', (i) => i.title],
  ['details', (i) => i.body],
  ['maker', (i) => i.maker],
  ['scale', (i) => i.scale],
  ['reference', (i) => i.reference],
  ['make', (i) => i.make],
  ['model', (i) => i.model],
  ['part_number', (i) => i.partNumber],
  ['era', (i) => i.era],
  ['condition', (i) => i.condition],
  ['asking_usd', (i) => i.price],
  ['location', (i) => i.location],
  ['private_note', (i) => i.note],
  ['read_confidence', (i) => i.confidence],
  ['still_open', (i) => i.missing.join(' | ')],
  ['status', (i) => i.status],
  ['listing_id', (i) => i.postId],
  ['photos', (i) => i.photos.join(' ')],
  ['scanned', (i) => i.createdAt.slice(0, 10)],
];

/** One cell. Quoted when it must be, and never allowed to start a formula:
 *  a headline of "=HYPERLINK(...)" would otherwise run in Excel. */
export function csvCell(v: string | number | null | undefined): string {
  if (v == null) return '';
  let s = String(v);
  if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function scanCsv(items: ScanItem[]): string {
  const head = CSV_COLUMNS.map(([h]) => h).join(',');
  const rows = items.map((i) => CSV_COLUMNS.map(([, get]) => csvCell(get(i))).join(','));
  return [head, ...rows].join('\r\n') + '\r\n';
}
