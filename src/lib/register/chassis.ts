/**
 * Chassis-number helpers for the register. Pure functions, no DB.
 *
 * A "chassis" in the register is the short serial an owner or auction
 * catalogue would quote ("84028"), and `vin` is the full 17-character string
 * where the source published one. Ferrari road cars from the mid-1980s carry
 * the serial in the last five or six digits of the VIN, so a VIN can be
 * reduced to a chassis but a chassis cannot be expanded to a VIN.
 */

export function normalizeVin(input: string | null | undefined): string | null {
  if (!input) return null;
  const v = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
  return v.length >= 8 ? v : null;
}

/** Strip to A-Z0-9, drop a leading "#", uppercase. Returns null when empty. */
export function normalizeChassis(input: string | null | undefined): string | null {
  if (!input) return null;
  const c = input.toUpperCase().replace(/^#/, '').replace(/[^A-Z0-9]/g, '');
  return c.length ? c : null;
}

/**
 * Derive the short chassis serial from a VIN for makes whose serial is the
 * VIN's numeric tail. Ferrari (ZFF...) VINs of the F40 era end in the serial
 * padded to six digits ("...0084028" -> "84028"). Unknown makes return null so
 * the caller falls back to whatever the source printed.
 */
export function chassisFromVin(vin: string | null | undefined): string | null {
  const v = normalizeVin(vin);
  if (!v) return null;
  if (v.startsWith('ZFF') && v.length === 17) {
    const tail = v.slice(11); // 6 chars
    const digits = tail.replace(/\D/g, '');
    if (!digits) return null;
    const n = String(parseInt(digits, 10));
    return n === 'NaN' ? null : n;
  }
  return null;
}

/** Sort key so "9999" sorts before "10000" and letters sort after digits. */
export function chassisSortKey(chassis: string): string {
  const m = chassis.match(/^(\D*)(\d+)(.*)$/);
  if (!m) return `~${chassis}`;
  return `${m[1]}${m[2].padStart(10, '0')}${m[3]}`;
}

/** Partial ISO date -> readable label. "2019-08-16" -> "16 Aug 2019", "2019-08" -> "Aug 2019", "2019" -> "2019". */
export function formatEventDate(d: string | null | undefined): string {
  if (!d) return 'Date not published';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [y, m, day] = d.split('-');
  if (!y) return d;
  if (!m) return y;
  const mi = parseInt(m, 10) - 1;
  const mon = months[mi] ?? m;
  if (!day) return `${mon} ${y}`;
  return `${parseInt(day, 10)} ${mon} ${y}`;
}

export function formatMoney(amount: string | number | null | undefined, currency: string | null | undefined): string | null {
  if (amount == null || amount === '') return null;
  const n = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (!isFinite(n)) return null;
  const cur = (currency || 'USD').toUpperCase();
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n);
  } catch {
    return `${cur} ${Math.round(n).toLocaleString('en-US')}`;
  }
}

export const EVENT_TYPES = ['auction', 'private_sale', 'listing', 'show', 'registry', 'factory', 'service', 'article'] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const OUTCOMES = ['sold', 'not_sold', 'withdrawn', 'listed', 'shown', 'unknown'] as const;
export type Outcome = (typeof OUTCOMES)[number];

export const SOURCE_TYPES = ['auction-house', 'market-data', 'registry', 'journalism', 'manufacturer', 'club-forum', 'owner'] as const;
export type RegisterSourceType = (typeof SOURCE_TYPES)[number];

export const EVENT_STATUSES = ['confirmed', 'disputed', 'owner_reported'] as const;

export function eventTypeLabel(t: string | null | undefined): string {
  switch (t) {
    case 'auction': return 'Auction';
    case 'private_sale': return 'Private sale';
    case 'listing': return 'Offered for sale';
    case 'show': return 'Shown';
    case 'registry': return 'Registry record';
    case 'factory': return 'Factory record';
    case 'service': return 'Service record';
    case 'article': return 'Published';
    default: return 'Record';
  }
}

export function outcomeLabel(o: string | null | undefined): string | null {
  switch (o) {
    case 'sold': return 'Sold';
    case 'not_sold': return 'Not sold';
    case 'withdrawn': return 'Withdrawn';
    case 'listed': return 'Listed';
    case 'shown': return 'Shown';
    case 'unknown': return 'Result not published';
    default: return null;
  }
}

/**
 * Coverage line for a model register: "212 of about 1,315 built". When the
 * production total is unknown or disputed we say so instead of inventing one.
 */
export function coverageLine(chassisCount: number, productionTotal: number | null | undefined): string {
  if (productionTotal != null && productionTotal > 0) {
    return `${chassisCount.toLocaleString('en-US')} of about ${productionTotal.toLocaleString('en-US')} built`;
  }
  return `${chassisCount.toLocaleString('en-US')} recorded, production figure disputed, see the model history`;
}
