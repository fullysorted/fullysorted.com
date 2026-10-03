import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { setHandle } from '@/lib/wanted';
import { ensurePartsTables, parsePartsInput, getPartsAccess } from '@/lib/parts';
import { createPartsCheckout, PlanExistsError, type PayChoice } from '@/lib/parts-billing';
import { PARTS_KINDS, PARTS_PLAN_MAX_LIVE } from '@/lib/parts-shared';
import { getPublishedModels } from '@/lib/data/models';
import { notifyPartsPost } from '@/lib/email';

/**
 * POST /api/parts  create a parts, memorabilia or artwork listing. Signed-in
 * members only, username required (it can be chosen in the same request).
 * Nothing is public until an admin approves it.
 *
 * Free while the board is inside its first PARTS_FREE_LISTINGS, or covered by
 * an active seller plan: the row lands as 'pending'. Otherwise the body must
 * carry pay: 'item' | 'plan'; the row lands as 'unpaid' and the response
 * carries a Stripe checkout URL. The webhook moves it to 'pending' once paid.
 */
export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'parts-post', 8, 60 * 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'The board is unavailable right now.' }, { status: 503 });

  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in to post.', code: 'signin' }, { status: 401 });

  let raw: Record<string, unknown>;
  try { raw = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  if (raw.website) return NextResponse.json({ ok: true }); // honeypot
  if (raw.agree !== true) return NextResponse.json({ error: 'Please confirm the listing rules.' }, { status: 400 });

  // A model link is only kept when it points at a published model history.
  let known: Set<string> | undefined;
  if (typeof raw.modelSlug === 'string' && raw.modelSlug.trim()) {
    try { known = new Set((await getPublishedModels()).map((m) => m.slug.toLowerCase())); } catch { known = new Set(); }
  }
  const parsed = parsePartsInput(raw, known);
  if (!parsed.ok) return NextResponse.json({ error: parsed.reason }, { status: 400 });

  let handle = user.handle;
  if (!handle) {
    const set = await setHandle(user.id, String(raw.handle ?? ''));
    if (!set.ok) return NextResponse.json({ error: set.reason, code: 'handle' }, { status: 400 });
    handle = set.handle;
  }

  try {
    await ensurePartsTables();
    const sql = neon(process.env.DATABASE_URL);
    const access = await getPartsAccess(user.id);
    // Choosing the plan lifts the cap, so only a member already at it on a
    // plan (or paying per item) is stopped here.
    const pay: PayChoice | null = raw.pay === 'item' || raw.pay === 'plan' ? raw.pay : null;
    const cap = access.mode === 'pay' && pay === 'plan' ? PARTS_PLAN_MAX_LIVE : access.maxLive;
    if (access.live >= cap) {
      return NextResponse.json({ error: `You have ${cap} listings up already. Close one first.` }, { status: 400 });
    }
    if (access.mode === 'pay' && !pay) {
      return NextResponse.json({ error: 'Choose how to pay for this listing.', code: 'pay' }, { status: 400 });
    }
    const i = parsed.input;
    const status = access.mode === 'pay' ? 'unpaid' : 'pending';
    const payment = access.mode === 'pay' ? null : access.mode;
    const rows = await sql`
      INSERT INTO parts_posts (user_id, kind, category, title, body, make, model, model_slug, part_number, condition, price, location, shipping, photos, status, payment)
      VALUES (${user.id}, ${i.kind}, ${i.category}, ${i.title}, ${i.body}, ${i.make}, ${i.model}, ${i.modelSlug}, ${i.partNumber}, ${i.condition}, ${i.price}, ${i.location}, ${i.shipping}, ${JSON.stringify(i.photos)}::jsonb, ${status}, ${payment})
      RETURNING id
    `;
    const id = Number(rows[0].id);

    if (status === 'unpaid' && pay) {
      const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'https://fullysorted.com';
      const kindLabel = PARTS_KINDS.find((k) => k.key === i.kind)?.singular ?? 'Part';
      try {
        const checkoutUrl = await createPartsCheckout({ choice: pay, postId: id, userId: user.id, email: user.email, title: i.title, kindLabel, origin });
        return NextResponse.json({ ok: true, id, handle, checkoutUrl });
      } catch (e) {
        if (e instanceof PlanExistsError) return NextResponse.json({ error: e.message, id }, { status: 400 });
        console.error('[parts] checkout failed:', e);
        return NextResponse.json({ error: 'Payment did not start. Your listing is saved; try again from its page in a moment.', id }, { status: 502 });
      }
    }
    // The row is the durable record; the email is a nudge and may fail quietly.
    await notifyPartsPost({ id, kind: i.kind, title: i.title, body: i.body, handle, email: user.email, price: i.price, photo: i.photos[0] ?? null }).catch(() => false);
    return NextResponse.json({ ok: true, id, handle });
  } catch (e) {
    console.error('[parts] create failed:', e);
    return NextResponse.json({ error: 'That did not save. Please try again in a moment.' }, { status: 500 });
  }
}
