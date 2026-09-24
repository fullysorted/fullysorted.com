import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';
import { getOrCreateUserByEmail, normalizeEmail } from '@/lib/identity';
import { ensurePartsTables } from '@/lib/parts';
import { sendPartsReply } from '@/lib/email';

/**
 * POST /api/parts/:id/reply  relay a question or offer to the seller. No login
 * needed, same as every other inquiry on the site. The seller's address is
 * never returned to the browser; the two of them talk by email from here on.
 */
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const limited = rateLimit(req, 'parts-reply', 8, 60 * 60_000);
  if (limited) return limited;
  const id = Number((await ctx.params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });

  let raw: Record<string, unknown>;
  try { raw = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  if (raw.website) return NextResponse.json({ success: true }); // honeypot

  const name = String(raw.name ?? '').trim().slice(0, 120);
  const email = normalizeEmail(String(raw.email ?? ''));
  const message = String(raw.message ?? '').trim().slice(0, 3000);
  if (!name || !email || message.length < 10) {
    return NextResponse.json({ error: 'Your name, a working email and a message are needed.' }, { status: 400 });
  }

  try {
    await ensurePartsTables();
    const sql = neon(process.env.DATABASE_URL);
    const posts = await sql`
      SELECT p.id, p.title, p.price, u.email AS owner_email
      FROM parts_posts p JOIN users u ON u.id = p.user_id
      WHERE p.id = ${id} AND p.status = 'open' AND p.expires_at > NOW() AND u.status <> 'suspended' LIMIT 1
    `;
    if (!posts.length) return NextResponse.json({ error: 'This listing is closed.' }, { status: 410 });
    const post = posts[0];

    const replier = await getOrCreateUserByEmail({ email, name });
    let replyId: number | null = null;
    const result = await deliver({
      label: 'parts reply',
      save: async () => {
        const rows = await sql`
          INSERT INTO parts_replies (post_id, user_id, name, email, message)
          VALUES (${id}, ${replier?.id ?? null}, ${name}, ${email}, ${message}) RETURNING id
        `;
        replyId = Number(rows[0].id);
        await sql`UPDATE parts_posts SET reply_count = reply_count + 1 WHERE id = ${id}`;
      },
      notify: () => sendPartsReply({
        to: String(post.owner_email), postId: id, postTitle: String(post.title),
        price: post.price == null ? null : Number(post.price), fromName: name, fromEmail: email, message,
      }),
    });
    if (!result.delivered) return undeliverableResponse(`Message about parts listing: ${post.title}`, { Name: name, Email: email, Message: message });
    if (result.emailed && replyId) await sql`UPDATE parts_replies SET relayed = TRUE WHERE id = ${replyId}`.catch(() => null);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('[parts] reply failed:', e);
    return NextResponse.json({ error: 'That did not send. Please try again in a moment.' }, { status: 500 });
  }
}
