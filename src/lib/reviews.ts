/**
 * Provider reviews & testimonials — the rules, in one place.
 *
 * The site has displayed `rating` and `review_count` on every provider card
 * since the directory shipped, and /services/guide told providers their
 * standing "is built from reviews by the owners who actually hired you".
 * Until now there was no way to leave one and both columns were permanently 0.
 * This module is the write path, and more importantly the guard rails.
 *
 * ── The three rules ───────────────────────────────────────────────────────
 *
 * 1. ONLY VERIFIED REVIEWS COUNT.
 *    A verified review is one written by someone who followed a one-time
 *    tokenized link we emailed them. Provider-supplied testimonials are
 *    published — clearly labelled — but never touch `rating`, `review_count`,
 *    the Top-rated badge, or aggregateRating JSON-LD.
 *
 * 2. NO AVERAGE BELOW MIN_REVIEWS_FOR_AVG.
 *    One five-star review is not a 5.0 rating, and Google penalises thin
 *    aggregateRating markup. Below the threshold we show the reviews
 *    themselves and no number. Same minimum-n discipline as the Value Guide.
 *
 * 3. A PROVIDER CANNOT DELETE OR HIDE A REVIEW.
 *    They get a public right of reply. Moderation exists for abuse, spam,
 *    defamation and off-topic noise — never for sentiment. A directory where
 *    shops can bury bad reviews is worth nothing to a buyer, and suppressing
 *    negative reviews is precisely what the FTC's rule on consumer reviews
 *    (16 CFR Part 465, in force since Oct 2024) prohibits.
 */

/** Below this many published VERIFIED reviews, no average is shown anywhere. */
export const MIN_REVIEWS_FOR_AVG = 3;

/** Rating at or above which the "Top-rated" badge may appear (with n >= MIN). */
export const TOP_RATED_MIN = 4.5;

export type ReviewSource = 'verified' | 'testimonial';
/**
 * 'invited'   — the link has been mailed, nothing written yet. The row exists
 *               so an unanswered invite is visible rather than silent.
 * 'pending'   — written, waiting for moderation.
 * 'published' — live on the profile.
 * 'rejected'  — abuse/spam/off-topic. Never used for an unfavourable review.
 */
export type ReviewStatus = 'invited' | 'pending' | 'published' | 'rejected';

export type PublicReview = {
  id: number;
  source: ReviewSource;
  authorName: string;
  vehicle: string | null;
  workType: string | null;
  workDate: string | null;
  rating: number | null;
  body: string;
  providerReply: string | null;
  providerRepliedAt: string | null;
  publishedAt: string | null;
  createdAt: string;
};

type Sql = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;

/**
 * Idempotent table creation. Follows the house pattern (see
 * /api/admin/setup-all): every statement is IF NOT EXISTS and it is safe to
 * call on every request that touches reviews, so a fresh deploy never 500s on
 * a missing table.
 */
export async function ensureReviewTable(sql: Sql): Promise<void> {
  await sql`
    CREATE TABLE IF NOT EXISTS provider_reviews (
      id SERIAL PRIMARY KEY,
      provider_id INTEGER NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
      source VARCHAR(20) NOT NULL DEFAULT 'verified',
      source_message_id INTEGER,
      review_token VARCHAR(64) UNIQUE,
      invited_at TIMESTAMPTZ,
      token_used_at TIMESTAMPTZ,
      author_name VARCHAR(255) NOT NULL,
      author_email VARCHAR(255),
      vehicle VARCHAR(200),
      work_type VARCHAR(120),
      work_date VARCHAR(40),
      rating INTEGER,
      body TEXT NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'pending',
      moderation_note TEXT,
      provider_reply TEXT,
      provider_replied_at TIMESTAMPTZ,
      submitted_by VARCHAR(100),
      consent BOOLEAN DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      published_at TIMESTAMPTZ,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS provider_reviews_provider_idx ON provider_reviews (provider_id, status)`;
  await sql`CREATE INDEX IF NOT EXISTS provider_reviews_token_idx ON provider_reviews (review_token)`;
  await sql`CREATE INDEX IF NOT EXISTS provider_reviews_status_idx ON provider_reviews (status, created_at DESC)`;
}

/**
 * Recompute the denormalised `rating` / `review_count` columns on
 * service_providers from PUBLISHED VERIFIED reviews only.
 *
 * Call this after any insert, publish, reject or delete. It is the only thing
 * in the codebase allowed to write those two columns — if a number on a
 * provider card is ever wrong, this function is where the bug is.
 */
export async function recomputeProviderRating(sql: Sql, providerId: number): Promise<{ rating: number; count: number }> {
  const rows = await sql`
    SELECT COUNT(*)::int AS n, COALESCE(AVG(rating), 0)::float AS avg
    FROM provider_reviews
    WHERE provider_id = ${providerId}
      AND source = 'verified'
      AND status = 'published'
      AND rating IS NOT NULL
  `;
  const n = Number(rows[0]?.n ?? 0);
  const avg = Number(rows[0]?.avg ?? 0);
  // Stored to one decimal, matching the numeric(3,1) column.
  const rating = n > 0 ? Math.round(avg * 10) / 10 : 0;
  await sql`
    UPDATE service_providers
    SET rating = ${rating.toFixed(1)}, review_count = ${n}, updated_at = NOW()
    WHERE id = ${providerId}
  `;
  return { rating, count: n };
}

/**
 * The display gate. Everything that renders a number — the profile badge, the
 * directory card, the Top-rated badge, the JSON-LD — asks this first.
 */
export function ratingDisplay(rating: unknown, reviewCount: unknown): {
  show: boolean;
  rating: number;
  count: number;
  topRated: boolean;
} {
  const r = Number(rating ?? 0);
  const n = Number(reviewCount ?? 0);
  const show = n >= MIN_REVIEWS_FOR_AVG && r > 0;
  return { show, rating: r, count: n, topRated: show && r >= TOP_RATED_MIN };
}

/** 1–5, integer, or null. Anything else is rejected at the API boundary. */
export function normalizeRating(value: unknown): number | null {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n) || n < 1 || n > 5) return null;
  return n;
}
