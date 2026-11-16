import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { isAdminRequest } from '@/lib/session-token';
import { SCANNER_ENABLED } from '@/lib/features';
import { PARTS_KINDS, type PartsKind } from '@/lib/parts-shared';
import { scanAccess, normalizeScanPhotos, scanBudget, logScanSpend, createScanItem, listScanItems, countScanItems } from '@/lib/scan';
import { readItem } from '@/lib/ai/scan-item';

// One Sonnet call reading up to four photos: usually 5 to 15 seconds.
export const maxDuration = 60;

/**
 * POST /api/scan  { photos: string[], kind? }  read one item and keep it as a
 * private inventory row. Gated, cheapest first: the flag and a configured
 * key, a signed-in member, a burst limit, the member's daily count, and the
 * site-wide daily dollar ceiling. See lib/scan.ts for the rules.
 *
 * GET /api/scan?before=<id>  the member's inventory, newest first.
 */
export async function POST(req: NextRequest) {
  if (!SCANNER_ENABLED || !process.env.ANTHROPIC_API_KEY || !process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'The scanner is switched off right now.' }, { status: 503 });
  }
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in to scan.', code: 'signin' }, { status: 401 });
  const access = scanAccess(user, isAdminRequest(req));
  if (!access.allowed) return NextResponse.json({ error: 'The scanner is not open yet.', code: 'closed' }, { status: 403 });
  const burst = rateLimit(req, 'scan', 30, 60_000);
  if (burst) return burst;

  let raw: Record<string, unknown>;
  try { raw = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const photos = normalizeScanPhotos(raw.photos);
  if (!photos.length) return NextResponse.json({ error: 'Add at least one photo of the item.' }, { status: 400 });
  const kind = PARTS_KINDS.find((k) => k.key === raw.kind)?.key as PartsKind | undefined;

  try {
    const staff = access.staff;
    const budget = await scanBudget(user.id, staff);
    if (budget.used >= budget.limit) {
      return NextResponse.json({ error: `That is ${budget.limit} scans in a day. It opens again tomorrow. Your photos are kept below; you can fill these in by hand.`, code: 'limit' }, { status: 429 });
    }
    if (budget.resting) {
      console.warn('[ai] scanner resting: daily ceiling reached');
      return NextResponse.json({ error: 'The scanner has done its reading for today. It opens again tomorrow.', code: 'resting' }, { status: 503 });
    }

    let read;
    try {
      read = await readItem({ photos, kind });
    } catch (e) {
      console.error('[ai] scan-read failed:', (e as Error)?.message || e);
      return NextResponse.json({ error: 'The read did not come through. Try that one again.', code: 'read' }, { status: 502 });
    }
    // The spend is logged before the row is written, so a failed insert
    // still counts against the ceiling.
    await logScanSpend(user.id, 'read', read.usd).catch((e) => console.error('[scan] spend log failed:', e));
    const { usd, confidence, seen, missing, ...fields } = read;
    const item = await createScanItem(user.id, { ...fields, price: null, location: null, note: null }, { photos, confidence, seen, missing, usd });
    return NextResponse.json({ item, usage: { used: budget.used + 1, limit: budget.limit, staff } });
  } catch (e) {
    console.error('[scan] create failed:', e);
    return NextResponse.json({ error: 'That did not save. Please try again in a moment.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.', code: 'signin' }, { status: 401 });
  if (!scanAccess(user, isAdminRequest(req)).allowed) return NextResponse.json({ error: 'The scanner is not open yet.', code: 'closed' }, { status: 403 });
  const before = Number(new URL(req.url).searchParams.get('before') || 0);
  try {
    const [items, total] = await Promise.all([
      listScanItems(user.id, { before: Number.isInteger(before) ? before : 0, limit: 60 }),
      countScanItems(user.id),
    ]);
    return NextResponse.json({ items, total });
  } catch (e) {
    console.error('[scan] list failed:', e);
    return NextResponse.json({ error: 'The list did not load.' }, { status: 500 });
  }
}
