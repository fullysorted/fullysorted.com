import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { rateLimit } from '@/lib/rate-limit';
import { ensureReviewTable } from '@/lib/reviews';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

// ─── POST /api/reviews/reply ────────────────────────────
// A provider with a claimed account replies publicly to a review on their own
// profile. This is the ONLY write a provider has against a review.
//
// There is no delete, no hide, no edit-the-review, and no endpoint that could
// be talked into one. Replying is also the better move commercially: a
// measured reply to a two-star review reads far better to a prospective client
// than a wall of unbroken fives.
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'review-reply', 20, 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const reviewId = Number(body.reviewId);
  const reply = String(body.reply ?? '').trim();
  if (!reviewId) return NextResponse.json({ error: 'reviewId is required' }, { status: 400 });
  if (reply.length > 2000) {
    return NextResponse.json({ error: 'Please keep the reply under 2,000 characters.' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureReviewTable(sql);

  // Ownership is proven by the join, not by anything in the request body.
  const [row] = await sql`
    SELECT r.id FROM provider_reviews r
    JOIN service_providers p ON p.id = r.provider_id
    WHERE r.id = ${reviewId} AND p.clerk_user_id = ${userId}
    LIMIT 1
  `;
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  await sql`
    UPDATE provider_reviews
    SET provider_reply = ${reply || null},
        provider_replied_at = ${reply ? new Date() : null},
        updated_at = NOW()
    WHERE id = ${reviewId}
  `;

  return NextResponse.json({ success: true });
}
