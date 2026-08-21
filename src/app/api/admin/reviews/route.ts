import { NextRequest, NextResponse } from 'next/server';
import { ensureReviewTable, recomputeProviderRating } from '@/lib/reviews';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const SITE = 'https://fullysorted.com';

// ─── GET /api/admin/reviews?status=… ────────────────────
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const sql = await getSql();
  await ensureReviewTable(sql);

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'pending';

  const rows =
    status === 'all'
      ? await sql`
          SELECT r.*, p.business_name, p.slug AS provider_slug, p.email AS provider_email
          FROM provider_reviews r JOIN service_providers p ON p.id = r.provider_id
          ORDER BY r.created_at DESC LIMIT 200`
      : await sql`
          SELECT r.*, p.business_name, p.slug AS provider_slug, p.email AS provider_email
          FROM provider_reviews r JOIN service_providers p ON p.id = r.provider_id
          WHERE r.status = ${status}
          ORDER BY r.created_at DESC LIMIT 200`;

  const counts = await sql`
    SELECT status, COUNT(*)::int AS n FROM provider_reviews GROUP BY status
  `;

  return NextResponse.json({
    reviews: rows,
    counts: Object.fromEntries(counts.map((c) => [String(c.status), Number(c.n)])),
  });
}

// ─── PATCH /api/admin/reviews ───────────────────────────
// Moderation. The permitted actions are deliberately narrow.
//
// There is no "edit the review text" action and there never should be. Chris
// can publish it, reject it as abuse/spam/off-topic, or leave a note. He
// cannot rewrite what a client wrote, and neither can the shop.
//
// Rejecting an unfavourable-but-genuine review is the one thing that would
// make this whole directory worthless. The reason is recorded on every
// rejection so the decision is reviewable later.
export async function PATCH(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const id = Number(body.id);
  const action = String(body.action ?? '');
  if (!id || !action) return NextResponse.json({ error: 'id and action are required' }, { status: 400 });

  const sql = await getSql();
  await ensureReviewTable(sql);

  const [review] = await sql`
    SELECT r.*, p.business_name, p.slug AS provider_slug, p.email AS provider_email
    FROM provider_reviews r JOIN service_providers p ON p.id = r.provider_id
    WHERE r.id = ${id} LIMIT 1
  `;
  if (!review) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const providerId = Number(review.provider_id);

  switch (action) {
    case 'publish': {
      await sql`
        UPDATE provider_reviews
        SET status = 'published', published_at = COALESCE(published_at, NOW()), updated_at = NOW()
        WHERE id = ${id}
      `;
      const totals = await recomputeProviderRating(sql, providerId);
      // Tell the shop it is live, and remind them the reply is their move.
      if (review.source === 'verified') {
        const { notifyReviewPublished } = await import('@/lib/email');
        await notifyReviewPublished({
          to: review.provider_email ? String(review.provider_email) : null,
          businessName: String(review.business_name),
          authorName: String(review.author_name),
          rating: review.rating === null ? null : Number(review.rating),
          profileUrl: `${SITE}/services/${review.provider_slug}`,
        });
      }
      return NextResponse.json({ success: true, totals });
    }

    case 'reject': {
      const reason = String(body.reason ?? '').trim();
      if (!reason) {
        return NextResponse.json(
          { error: 'A rejection needs a reason on the record. "Unfavourable" is not one of them.' },
          { status: 400 },
        );
      }
      await sql`
        UPDATE provider_reviews
        SET status = 'rejected', moderation_note = ${reason}, published_at = NULL, updated_at = NOW()
        WHERE id = ${id}
      `;
      const totals = await recomputeProviderRating(sql, providerId);
      return NextResponse.json({ success: true, totals });
    }

    case 'note': {
      await sql`
        UPDATE provider_reviews SET moderation_note = ${String(body.note ?? '')}, updated_at = NOW()
        WHERE id = ${id}
      `;
      return NextResponse.json({ success: true });
    }

    // Posting the shop's reply on their behalf — most shops have no account
    // yet, so they send it to us and we put it up under their name.
    case 'reply': {
      const reply = String(body.reply ?? '').trim();
      await sql`
        UPDATE provider_reviews
        SET provider_reply = ${reply || null},
            provider_replied_at = ${reply ? new Date() : null},
            updated_at = NOW()
        WHERE id = ${id}
      `;
      return NextResponse.json({ success: true });
    }

    // Hard delete exists for one case only: a row created in error (a typo'd
    // invite, a duplicate). It is not a moderation tool — a review that has
    // been written gets published or rejected with a reason, on the record.
    case 'delete_invite': {
      if (review.status !== 'invited' && review.status !== 'expired') {
        return NextResponse.json(
          { error: 'Only an unanswered invite can be deleted. Publish or reject a written review instead.' },
          { status: 400 },
        );
      }
      await sql`DELETE FROM provider_reviews WHERE id = ${id}`;
      return NextResponse.json({ success: true });
    }

    default:
      return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  }
}
