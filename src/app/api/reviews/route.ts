import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';
import { ensureReviewTable, normalizeRating } from '@/lib/reviews';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const SITE = 'https://fullysorted.com';

// ─── GET /api/reviews?slug=…  (public) ──────────────────
// Published reviews for one provider. Author emails and tokens never leave
// the server — the select list here is the whitelist.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'slug is required' }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ reviews: [] });

  try {
    const sql = await getSql();
    await ensureReviewTable(sql);
    const rows = await sql`
      SELECT r.id, r.source, r.author_name, r.vehicle, r.work_type, r.work_date,
             r.rating, r.body, r.provider_reply, r.provider_replied_at,
             r.published_at, r.created_at
      FROM provider_reviews r
      JOIN service_providers p ON p.id = r.provider_id
      WHERE p.slug = ${slug} AND r.status = 'published'
      ORDER BY r.source = 'verified' DESC, COALESCE(r.published_at, r.created_at) DESC
      LIMIT 100
    `;
    return NextResponse.json({ reviews: rows });
  } catch (e) {
    console.error('Review fetch failed:', e);
    return NextResponse.json({ reviews: [] });
  }
}

// ─── POST /api/reviews  (public, token-gated) ───────────
// A client redeems the one-time link we emailed them and writes their review.
//
// The token is the whole verification story: it was generated against a named
// provider, mailed to one address, and it works once. There is no account to
// create — the identity/account work is still pending and a review system that
// waits for it would never launch.
//
// A submitted review lands as `pending` and goes to Chris. Moderation is for
// abuse, spam and off-topic noise. A one-star review that describes real work
// gets published — see lib/reviews.ts.
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'reviews', 5, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const token = String(body.token ?? '').trim();
  const authorName = String(body.authorName ?? '').trim();
  const text = String(body.body ?? '').trim();
  const vehicle = String(body.vehicle ?? '').trim() || null;
  const workDate = String(body.workDate ?? '').trim() || null;
  const rating = normalizeRating(body.rating);

  if (!token) return NextResponse.json({ error: 'This review link is missing its code.' }, { status: 400 });
  if (!authorName) return NextResponse.json({ error: 'Please add your name.' }, { status: 400 });
  if (rating === null) return NextResponse.json({ error: 'Please choose a rating from 1 to 5.' }, { status: 400 });
  if (text.length < 20) {
    return NextResponse.json({ error: 'Please write at least a sentence or two — a bare rating helps nobody.' }, { status: 400 });
  }
  if (text.length > 5000) {
    return NextResponse.json({ error: 'That is longer than we can store. Please trim it a little.' }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'Reviews are unavailable just now.' }, { status: 503 });
  }

  const sql = await getSql();
  await ensureReviewTable(sql);

  const [invite] = await sql`
    SELECT r.id, r.provider_id, r.status, r.token_used_at, r.work_type,
           p.business_name, p.email AS provider_email
    FROM provider_reviews r
    JOIN service_providers p ON p.id = r.provider_id
    WHERE r.review_token = ${token}
    LIMIT 1
  `;

  if (!invite) {
    return NextResponse.json({ error: 'That review link is not valid. It may have already been used.' }, { status: 404 });
  }
  if (invite.token_used_at) {
    return NextResponse.json({ error: 'This link has already been used — thank you, your review is in.' }, { status: 409 });
  }
  // An expired invite keeps its token so the page can explain itself rather
  // than 404, which means this route — not the token's existence — is what
  // makes it inert. Anything that is not an open invite is refused here.
  if (invite.status === 'expired') {
    return NextResponse.json(
      { error: 'This review link has expired. Ask the shop to send you a fresh one and we will.' },
      { status: 410 },
    );
  }
  if (invite.status !== 'invited') {
    return NextResponse.json({ error: 'That review link is no longer open.' }, { status: 409 });
  }

  const reviewId = Number(invite.id);
  const businessName = String(invite.business_name);

  const result = await deliver({
    label: `provider review (${businessName})`,
    save: async () => {
      // The token is cleared on use, not just marked: a leaked link is dead
      // the moment it is redeemed.
      await sql`
        UPDATE provider_reviews
        SET author_name = ${authorName},
            vehicle = ${vehicle},
            work_date = ${workDate},
            rating = ${rating},
            body = ${text},
            status = 'pending',
            token_used_at = NOW(),
            review_token = NULL,
            updated_at = NOW()
        WHERE id = ${reviewId}
      `;
    },
    notify: async () => {
      const { notifyNewReview } = await import('@/lib/email');
      return notifyNewReview({
        businessName,
        authorName,
        rating,
        body: text,
        source: 'verified',
        adminUrl: `${SITE}/admin/reviews`,
      });
    },
  });

  if (!result.delivered) {
    return undeliverableResponse(`Review for ${businessName}`, {
      Business: businessName,
      Name: authorName,
      Rating: rating,
      Vehicle: vehicle,
      Review: text,
    });
  }

  // Nothing is public yet, so no recompute here — publishing does that.
  return NextResponse.json({ success: true, businessName });
}
