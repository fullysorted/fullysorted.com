import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';
import { ensureReviewTable, normalizeRating } from '@/lib/reviews';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const SITE = 'https://fullysorted.com';

// ─── POST /api/reviews/testimonial ──────────────────────
// A shop supplies praise it already has — the letter on the wall, the line
// from an email, the thing a client said at a show.
//
// This is the honest answer to the cold start. The directory opens with zero
// verified reviews and it will be months before the first shop has three, but
// a good restoration house has twenty years of happy clients. So we publish
// them, attributed, in a block that says plainly where they came from, and we
// keep them out of every number on the page. A testimonial can never move the
// star average, earn a Top-rated badge, or appear in aggregateRating markup.
//
// Two callers: the /team console (a rep typing it in during an onboarding
// call — the day-one path, since most shops have no account yet) and a
// provider with a claimed Clerk account editing their own profile.
export async function POST(request: NextRequest) {
  if (!PROVIDER_REVIEWS_PUBLIC) {
    return NextResponse.json({ error: 'Reviews are switched off site-wide.' }, { status: 503 });
  }
  const limited = rateLimit(request, 'testimonial', 20, 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureReviewTable(sql);

  // ── Who is asking, and which provider may they write for? ──
  const team = isTeam(request);
  let providerId: number | null = null;
  let submittedBy: string | null = null;

  if (team) {
    providerId = Number(body.providerId) || null;
    submittedBy = String(body.submittedBy ?? '').trim().slice(0, 100) || 'team';
  } else {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const [mine] = await sql`
      SELECT id FROM service_providers WHERE clerk_user_id = ${userId} LIMIT 1
    `;
    if (!mine) return NextResponse.json({ error: 'No provider profile found for this account.' }, { status: 404 });
    // A provider may only ever write against their own row — the body's
    // providerId is ignored entirely for this caller.
    providerId = Number(mine.id);
    submittedBy = 'provider';
  }

  if (!providerId) return NextResponse.json({ error: 'Provider is required.' }, { status: 400 });

  const authorName = String(body.authorName ?? '').trim();
  const text = String(body.body ?? '').trim();
  const vehicle = String(body.vehicle ?? '').trim() || null;
  const workType = String(body.workType ?? '').trim() || null;
  const workDate = String(body.workDate ?? '').trim() || null;
  const authorEmail = String(body.authorEmail ?? '').trim().toLowerCase() || null;
  const rating = normalizeRating(body.rating); // optional; stored but never averaged
  const consent = body.consent === true;

  if (!authorName) {
    return NextResponse.json({ error: 'A testimonial needs a real name to stand behind it.' }, { status: 400 });
  }
  if (text.length < 20) {
    return NextResponse.json({ error: 'Please include the client’s actual words.' }, { status: 400 });
  }
  if (text.length > 5000) {
    return NextResponse.json({ error: 'That is longer than we can store. Please trim it.' }, { status: 400 });
  }
  // The attestation is the whole legal basis for publishing someone else's
  // words with their name on them. No box, no publish.
  if (!consent) {
    return NextResponse.json(
      { error: 'Confirm the client is real and has given permission to publish this with their name.' },
      { status: 400 },
    );
  }

  const [provider] = await sql`
    SELECT id, business_name FROM service_providers WHERE id = ${providerId} LIMIT 1
  `;
  if (!provider) return NextResponse.json({ error: 'Provider not found.' }, { status: 404 });

  const [row] = await sql`
    INSERT INTO provider_reviews
      (provider_id, source, author_name, author_email, vehicle, work_type, work_date,
       rating, body, status, submitted_by, consent)
    VALUES
      (${providerId}, 'testimonial', ${authorName}, ${authorEmail}, ${vehicle}, ${workType}, ${workDate},
       ${rating}, ${text}, 'pending', ${submittedBy}, true)
    RETURNING id
  `;

  const { notifyNewReview } = await import('@/lib/email');
  await notifyNewReview({
    businessName: String(provider.business_name),
    authorName,
    rating,
    body: text,
    source: 'testimonial',
    adminUrl: `${SITE}/admin/reviews`,
  });

  return NextResponse.json({
    success: true,
    id: row?.id,
    message: 'Saved. It goes live once it has been checked.',
  });
}
