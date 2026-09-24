import { NextRequest } from 'next/server';

/**
 * Machine-to-machine auth for the Muse skill (see workspace skill `fullysorted`).
 *
 * Mirrors the existing `x-ingest-key` / `INGEST_API_KEY` pattern used by
 * /api/ingest/auction-results. A request is treated as coming from Muse when
 * it carries `x-muse-key` matching the `MUSE_API_KEY` env var.
 *
 * Keyed requests get a generous rate-limit bucket on the write endpoints that
 * accept the key, but everything they submit still lands as `pending` — the
 * admin review stays the publishing gate. This key must never be granted
 * access to /api/admin/*, /api/team/*, cron, checkout, or webhooks.
 */
export function isMuse(req: NextRequest): boolean {
  const expected = process.env.MUSE_API_KEY;
  if (!expected) return false;
  const provided = req.headers.get('x-muse-key');
  return !!provided && provided === expected;
}
