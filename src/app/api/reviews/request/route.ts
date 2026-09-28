import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { rateLimit } from '@/lib/rate-limit';
import { ensureReviewTable } from '@/lib/reviews';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';

const SITE = 'https://fullysorted.com';

// Addresses anyone can make in a minute. A shop's own domain is blocked below;
// these are not, because they are what most clients actually use.
const FREEMAIL = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'me.com',
  'aol.com', 'live.com', 'msn.com', 'comcast.net', 'att.net', 'proton.me', 'protonmail.com',
]);

// ─── POST /api/reviews/request  (public) ────────────────
// The shop's shareable review link. A shop sends /review/ask/<slug> to its
// clients; the client gives a name and email here, and we email THEM a
// one-time link. The review is only written from that inbox, so the email
// check does the verifying, and it lands through the same token flow as a
// rep-sent invite: the shop never sees the token and cannot stop it
// publishing. What this route must never do is take the review itself.
export async function POST(request: NextRequest) {
  if (!PROVIDER_REVIEWS_PUBLIC) {
    return NextResponse.json({ error: 'Reviews are not open right now.' }, { status: 503 });
  }
  const limited = rateLimit(request, 'review-request', 5, 10 * 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot. Bots fill every field; people never see this one.
  if (String(body.website ?? '').trim()) return NextResponse.json({ success: true });

  const slug = String(body.slug ?? '').trim();
  const clientName = String(body.clientName ?? '').trim().slice(0, 120);
  const clientEmail = String(body.clientEmail ?? '').trim().toLowerCase().slice(0, 200);
  const workType = String(body.workType ?? '').trim().slice(0, 200) || null;

  if (!slug || !clientName || !clientEmail) {
    return NextResponse.json({ error: 'Your name and email are both needed.' }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clientEmail)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  await ensureReviewTable(sql);

  const [provider] = await sql`
    SELECT id, business_name, email FROM service_providers WHERE slug = ${slug} LIMIT 1
  `;
  if (!provider) return NextResponse.json({ error: 'We could not find that shop.' }, { status: 404 });

  // A shop does not review itself. Same address, or the shop's own domain
  // when that domain is its own and not a webmail one.
  const shopEmail = String(provider.email ?? '').toLowerCase();
  const shopDomain = shopEmail.split('@')[1] ?? '';
  const clientDomain = clientEmail.split('@')[1] ?? '';
  if (shopEmail && (clientEmail === shopEmail || (shopDomain && !FREEMAIL.has(shopDomain) && clientDomain === shopDomain))) {
    return NextResponse.json({ error: 'This link is for clients of the shop, not the shop itself.' }, { status: 400 });
  }

  const [suppressed] = await sql`
    SELECT 1 FROM outreach_suppression WHERE LOWER(email) = ${clientEmail} LIMIT 1
  `;
  if (suppressed) {
    return NextResponse.json({ error: 'That address has opted out of our email, so we cannot send the link.' }, { status: 409 });
  }

  const [existing] = await sql`
    SELECT id, status, token_used_at, review_token FROM provider_reviews
    WHERE provider_id = ${provider.id} AND LOWER(author_email) = ${clientEmail}
    ORDER BY created_at DESC LIMIT 1
  `;
  if (existing?.token_used_at) {
    return NextResponse.json({ error: 'You have already reviewed this shop. Thank you.' }, { status: 409 });
  }

  // An open invite gets the same link again rather than a second token, so a
  // client who lost the first email is not stuck.
  let token: string;
  if (existing && existing.status === 'invited' && existing.review_token) {
    token = String(existing.review_token);
  } else if (existing && existing.status === 'expired') {
    token = randomBytes(24).toString('base64url');
    await sql`
      UPDATE provider_reviews
      SET review_token = ${token}, invited_at = NOW(), reminder_sent_at = NULL,
          expired_at = NULL, status = 'invited', author_name = ${clientName},
          work_type = COALESCE(${workType}, work_type), submitted_by = 'client-request',
          updated_at = NOW()
      WHERE id = ${existing.id}
    `;
  } else {
    token = randomBytes(24).toString('base64url');
    await sql`
      INSERT INTO provider_reviews
        (provider_id, source, review_token, invited_at,
         author_name, author_email, work_type, body, status, submitted_by)
      VALUES
        (${provider.id}, 'verified', ${token}, NOW(),
         ${clientName}, ${clientEmail}, ${workType}, '', 'invited', 'client-request')
    `;
  }

  const { sendReviewInvite } = await import('@/lib/email');
  const sent = await sendReviewInvite({
    to: clientEmail,
    clientName,
    businessName: String(provider.business_name),
    workType,
    reviewUrl: `${SITE}/review/${token}`,
  });
  if (!sent) {
    return NextResponse.json({ error: 'We could not send the email just now. Please try again in a few minutes.' }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
