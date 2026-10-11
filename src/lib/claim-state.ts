/**
 * Claim model (2026-10-03, strict opt-in 2026-10-07): we build the profile
 * from public information and hold it unpublished. The shop approves it from
 * its claim link, and only then does the row go live. When a metro is later
 * backfilled with unclaimed profiles, every public surface has to say so
 * plainly.
 *
 * A row is unclaimed when it came in through the seed route (outreach_status
 * is set and not 'claimed') and no account is linked to it. Rows that applied
 * directly have outreach_status null and are the shop's own work.
 */

const UNCLAIMED_STATUSES = new Set(['staged', 'sent', 'opened']);

export function isUnclaimed(p: {
  outreachStatus?: string | null;
  clerkUserId?: string | null;
}): boolean {
  if (p.clerkUserId) return false;
  return UNCLAIMED_STATUSES.has(String(p.outreachStatus ?? ''));
}

/**
 * The seed route stores outreach+<slug>@fullysorted.com when a payload has no
 * email, and 'Outreach Pending' when it has no owner name. Neither is the
 * shop's, so neither may be shown or used as a delivery address.
 */
export function isPlaceholderEmail(email: string | null | undefined): boolean {
  return /^outreach\+[^@]*@fullysorted\.com$/i.test(String(email ?? '').trim());
}

export function isPlaceholderOwner(name: string | null | undefined): boolean {
  const n = String(name ?? '').trim().toLowerCase();
  return n === '' || n === 'outreach pending';
}
