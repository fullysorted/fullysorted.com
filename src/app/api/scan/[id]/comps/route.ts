import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser, isStaff } from '@/lib/identity';
import { SCANNER_ENABLED } from '@/lib/features';
import { getScanItem, saveScanComps, scanBudget, logScanSpend } from '@/lib/scan';
import { findComps } from '@/lib/ai/scan-comps';

// Haiku with up to three web searches: 10 to 40 seconds.
export const maxDuration = 120;

/**
 * POST /api/scan/:id/comps  look up sale prices for one scanned item.
 * STAFF ONLY. A wrong price shown to a seller costs more trust than no price,
 * so members do not see this until the results have been read for a while.
 * Every comp kept has an address the search tool returned (lib/ai/scan-comps.ts).
 */
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!SCANNER_ENABLED || !process.env.ANTHROPIC_API_KEY || !process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'The scanner is switched off right now.' }, { status: 503 });
  }
  const id = Number((await ctx.params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.', code: 'signin' }, { status: 401 });
  if (!isStaff(user)) return NextResponse.json({ error: 'Not available.' }, { status: 403 });
  const burst = rateLimit(req, 'scan-comps', 20, 60_000);
  if (burst) return burst;

  try {
    const item = await getScanItem(id, user.id);
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const budget = await scanBudget(user.id, true);
    if (budget.resting) return NextResponse.json({ error: 'The daily spend ceiling is reached. It opens again tomorrow.', code: 'resting' }, { status: 503 });

    let found;
    try {
      found = await findComps(item);
    } catch (e) {
      console.error('[ai] scan-comps failed:', (e as Error)?.message || e);
      return NextResponse.json({ error: 'The lookup did not come through. Try again.' }, { status: 502 });
    }
    await logScanSpend(user.id, 'comps', found.usd).catch((e) => console.error('[scan] spend log failed:', e));
    const saved = await saveScanComps(id, user.id, found.comps, found.note);
    if (!saved) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ item: saved, dropped: found.dropped });
  } catch (e) {
    console.error('[scan] comps failed:', e);
    return NextResponse.json({ error: 'That did not save.' }, { status: 500 });
  }
}
