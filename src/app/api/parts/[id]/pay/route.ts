import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { resolveCurrentUser } from '@/lib/identity';
import { ensurePartsTables, getPartsAccess } from '@/lib/parts';
import { createPartsCheckout, PlanExistsError } from '@/lib/parts-billing';
import { PARTS_KINDS, PARTS_PLAN_MAX_LIVE } from '@/lib/parts-shared';

/**
 * POST /api/parts/:id/pay  { pay: 'item' | 'plan' }  the owner finishes paying
 * for a listing that is still 'unpaid' (checkout abandoned or failed). If the
 * member has since started a plan, or the board has free room again, the
 * listing moves straight to review with no payment.
 */
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const id = Number((await ctx.params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });
  const { pay } = await req.json().catch(() => ({ pay: null }));

  await ensurePartsTables();
  const sql = neon(process.env.DATABASE_URL);
  const rows = await sql`SELECT id, kind, title FROM parts_posts WHERE id = ${id} AND user_id = ${user.id} AND status = 'unpaid' LIMIT 1`;
  if (!rows.length) return NextResponse.json({ error: 'Nothing to pay for here.' }, { status: 404 });

  const access = await getPartsAccess(user.id);
  if (access.mode !== 'pay') {
    if (access.live >= access.maxLive) return NextResponse.json({ error: `You have ${access.maxLive} listings up already. Close one first.` }, { status: 400 });
    await sql`UPDATE parts_posts SET status = 'pending', payment = ${access.mode} WHERE id = ${id} AND status = 'unpaid'`;
    return NextResponse.json({ ok: true, released: true });
  }
  if (pay !== 'item' && pay !== 'plan') return NextResponse.json({ error: 'Choose how to pay.' }, { status: 400 });
  if (access.live >= (pay === 'plan' ? PARTS_PLAN_MAX_LIVE : access.maxLive)) {
    return NextResponse.json({ error: `You have ${access.maxLive} listings up already. Close one, or take the seller plan.` }, { status: 400 });
  }
  const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'https://fullysorted.com';
  try {
    const checkoutUrl = await createPartsCheckout({
      choice: pay, postId: id, userId: user.id, email: user.email, title: String(rows[0].title),
      kindLabel: PARTS_KINDS.find((k) => k.key === rows[0].kind)?.singular ?? 'Part', origin,
    });
    return NextResponse.json({ ok: true, checkoutUrl });
  } catch (e) {
    if (e instanceof PlanExistsError) return NextResponse.json({ error: e.message }, { status: 400 });
    console.error('[parts] retry checkout failed:', e);
    return NextResponse.json({ error: 'Payment did not start. Please try again in a moment.' }, { status: 502 });
  }
}
