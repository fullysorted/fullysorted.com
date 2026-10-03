import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { resolveCurrentUser } from '@/lib/identity';
import { ensurePartsTables } from '@/lib/parts';
import { getStripe } from '@/lib/stripe';
import { syncSellerPlan } from '@/lib/parts-billing';

/**
 * POST /api/parts/plan  { action: 'cancel' | 'resume' }  the member stops (or
 * un-stops) their seller plan. Cancelling takes effect at the end of the
 * period already paid for; listings already up stay up until they expire.
 */
export async function POST(req: NextRequest) {
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });
  const { action } = await req.json().catch(() => ({ action: null }));
  if (action !== 'cancel' && action !== 'resume') return NextResponse.json({ error: 'Unknown action' }, { status: 400 });

  await ensurePartsTables();
  const sql = neon(process.env.DATABASE_URL);
  const rows = await sql`SELECT stripe_subscription_id FROM seller_plans WHERE user_id = ${user.id} AND status IN ('active', 'trialing', 'past_due') LIMIT 1`;
  const subId = rows[0]?.stripe_subscription_id ? String(rows[0].stripe_subscription_id) : null;
  if (!subId) return NextResponse.json({ error: 'No active plan.' }, { status: 404 });
  try {
    const sub = await getStripe().subscriptions.update(subId, { cancel_at_period_end: action === 'cancel' });
    await syncSellerPlan(sub as unknown as Parameters<typeof syncSellerPlan>[0], user.id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[parts] plan update failed:', e);
    return NextResponse.json({ error: 'That did not go through. Please try again.' }, { status: 502 });
  }
}
