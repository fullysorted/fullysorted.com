import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { setHandle } from '@/lib/wanted';
import { ensurePartsTables, parsePartsInput, PARTS_MAX_LIVE } from '@/lib/parts';
import { getPublishedModels } from '@/lib/data/models';
import { notifyPartsPost } from '@/lib/email';

/**
 * POST /api/parts  create a parts listing. Signed-in members only, username
 * required (it can be chosen in the same request). Lands as 'pending': nothing
 * is public until an admin approves it. Free, capped at PARTS_MAX_LIVE live
 * listings per member.
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
    const open = await sql`SELECT COUNT(*)::int AS n FROM parts_posts WHERE user_id = ${user.id} AND status IN ('pending', 'open')`;
    if (Number(open[0].n) >= PARTS_MAX_LIVE) {
      return NextResponse.json({ error: `You have ${PARTS_MAX_LIVE} listings up already. Close one first.` }, { status: 400 });
    }
    const i = parsed.input;
    const rows = await sql`
      INSERT INTO parts_posts (user_id, kind, title, body, make, model, model_slug, part_number, condition, price, location, shipping, photos)
      VALUES (${user.id}, ${i.kind}, ${i.title}, ${i.body}, ${i.make}, ${i.model}, ${i.modelSlug}, ${i.partNumber}, ${i.condition}, ${i.price}, ${i.location}, ${i.shipping}, ${JSON.stringify(i.photos)}::jsonb)
      RETURNING id
    `;
    const id = Number(rows[0].id);
    // The row is the durable record; the email is a nudge and may fail quietly.
    await notifyPartsPost({ id, kind: i.kind, title: i.title, body: i.body, handle, email: user.email, price: i.price, photo: i.photos[0] ?? null }).catch(() => false);
    return NextResponse.json({ ok: true, id, handle });
  } catch (e) {
    console.error('[parts] create failed:', e);
    return NextResponse.json({ error: 'That did not save. Please try again in a moment.' }, { status: 500 });
  }
}
