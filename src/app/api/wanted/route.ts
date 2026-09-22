import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { ensureWantedTables, parseWantedInput, setHandle } from '@/lib/wanted';
import { notifyWantedPost } from '@/lib/email';

/**
 * POST /api/wanted  create a wanted post. Signed-in members only, username
 * required (it can be chosen in the same request). Lands as 'pending': nothing
 * is public until an admin approves it.
 */
export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'wanted-post', 5, 60 * 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'The board is unavailable right now.' }, { status: 503 });

  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in to post.', code: 'signin' }, { status: 401 });

  let raw: Record<string, unknown>;
  try { raw = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  if (raw.website) return NextResponse.json({ ok: true }); // honeypot
  if (raw.agree !== true) return NextResponse.json({ error: 'Please confirm the board rules.' }, { status: 400 });

  const parsed = parseWantedInput(raw);
  if (!parsed.ok) return NextResponse.json({ error: parsed.reason }, { status: 400 });

  let handle = user.handle;
  if (!handle) {
    const set = await setHandle(user.id, String(raw.handle ?? ''));
    if (!set.ok) return NextResponse.json({ error: set.reason, code: 'handle' }, { status: 400 });
    handle = set.handle;
  }

  try {
    await ensureWantedTables();
    const sql = neon(process.env.DATABASE_URL);
    const open = await sql`SELECT COUNT(*)::int AS n FROM wanted_posts WHERE user_id = ${user.id} AND status IN ('pending', 'open')`;
    if (Number(open[0].n) >= 10) {
      return NextResponse.json({ error: 'You have 10 posts up already. Close one first.' }, { status: 400 });
    }
    const i = parsed.input;
    const rows = await sql`
      INSERT INTO wanted_posts (user_id, kind, title, body, make, category, location, budget, fee_text, fee_terms)
      VALUES (${user.id}, ${i.kind}, ${i.title}, ${i.body}, ${i.make}, ${i.category}, ${i.location}, ${i.budget}, ${i.feeText}, ${i.feeTerms})
      RETURNING id
    `;
    const id = Number(rows[0].id);
    // The row is the durable record; the email is a nudge and may fail quietly.
    await notifyWantedPost({ id, kind: i.kind, title: i.title, body: i.body, handle, email: user.email, feeText: i.feeText }).catch(() => false);
    return NextResponse.json({ ok: true, id, handle });
  } catch (e) {
    console.error('[wanted] create failed:', e);
    return NextResponse.json({ error: 'That did not save. Please try again in a moment.' }, { status: 500 });
  }
}
