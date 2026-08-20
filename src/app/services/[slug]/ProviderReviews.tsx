import { Star, Quote } from 'lucide-react';
import { MIN_REVIEWS_FOR_AVG, type PublicReview } from '@/lib/reviews';

function Stars({ n, size = 'w-4 h-4' }: { n: number; size?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={size}
          aria-hidden
          style={{
            fill: i <= n ? 'var(--accent-gold, #B08D3F)' : 'transparent',
            color: i <= n ? 'var(--accent-gold, #B08D3F)' : 'var(--border-light, #d8d4cb)',
          }}
        />
      ))}
    </span>
  );
}

function byline(r: PublicReview): string {
  return [r.vehicle, r.workType, r.workDate].filter(Boolean).join(' · ');
}

function ReplyBlock({ text }: { text: string }) {
  return (
    <div
      className="mt-4 rounded-xl px-4 py-3"
      style={{ background: 'var(--bg-surface)', borderLeft: '3px solid var(--accent-blue, #1E6091)' }}
    >
      <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-tertiary)' }}>
        Reply from the shop
      </p>
      <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </p>
    </div>
  );
}

/**
 * The reviews block on a provider profile.
 *
 * Two lists, never merged, because they are not the same kind of evidence:
 *
 *   Verified — someone we emailed a one-time link to, after work they had done.
 *              These carry stars and are the only thing behind the average.
 *   Supplied — praise the shop gave us, with the client's name on it. Rendered
 *              in a quieter, quoted style under a heading that says exactly
 *              where it came from. No stars, no arithmetic.
 *
 * The average only appears at or above MIN_REVIEWS_FOR_AVG. Below that the
 * reviews are shown and the number is not, because one five-star review is not
 * a 5.0 rating and saying so would be the first dishonest thing on the site.
 */
export default function ProviderReviews({
  businessName,
  reviews,
  rating,
  reviewCount,
  showAverage,
}: {
  businessName: string;
  reviews: PublicReview[];
  rating: number;
  reviewCount: number;
  showAverage: boolean;
}) {
  const verified = reviews.filter((r) => r.source === 'verified');
  const testimonials = reviews.filter((r) => r.source === 'testimonial');

  return (
    <section id="reviews" className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
          Reviews
        </h2>
        {showAverage && (
          <div className="flex items-center gap-2">
            <Stars n={Math.round(rating)} />
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              {rating.toFixed(1)}
            </span>
            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              from {reviewCount} verified {reviewCount === 1 ? 'review' : 'reviews'}
            </span>
          </div>
        )}
      </div>

      {/* ── Verified ── */}
      {verified.length > 0 ? (
        <>
          {!showAverage && (
            <p className="text-xs mb-4 rounded-lg px-3 py-2" style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
              {verified.length === 1 ? 'One verified review' : `${verified.length} verified reviews`} so far — not
              enough to average yet. We start showing a star rating at {MIN_REVIEWS_FOR_AVG}.
            </p>
          )}
          <ul className="space-y-5">
            {verified.map((r) => (
              <li
                key={r.id}
                className="rounded-2xl px-5 py-5"
                style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)' }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  {r.rating ? <Stars n={r.rating} /> : null}
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {r.authorName}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--sorted-green-light, #eaf6e6)', color: 'var(--sorted-green-dark, #3d7a2a)' }}
                  >
                    Verified client
                  </span>
                </div>
                {byline(r) && (
                  <p className="text-xs mb-2.5" style={{ color: 'var(--text-tertiary)' }}>
                    {byline(r)}
                  </p>
                )}
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-primary)' }}>
                  {r.body}
                </p>
                {r.providerReply && <ReplyBlock text={r.providerReply} />}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div
          className="rounded-2xl px-5 py-5"
          style={{ background: 'var(--bg-surface)', border: '1px dashed var(--border-light)' }}
        >
          <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
            No verified reviews yet.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A verified review comes from a client we email directly after work is finished. {businessName} has not
            collected any here yet — which is worth knowing, and worth nothing more than that.
          </p>
        </div>
      )}

      {/* ── Provider-supplied ── */}
      {testimonials.length > 0 && (
        <div className="mt-8 pt-6" style={{ borderTop: '1px dashed var(--border-light)' }}>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-tertiary)' }}>
            What clients have told them
          </h3>
          <p className="text-xs mb-4" style={{ color: 'var(--text-tertiary)' }}>
            Supplied by the shop and published with the client&rsquo;s permission. We have not verified these, and they
            do not count towards any rating.
          </p>
          <ul className="space-y-4">
            {testimonials.map((r) => (
              <li key={r.id} className="flex gap-3">
                <Quote className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--accent-gold, #B08D3F)' }} aria-hidden />
                <div>
                  <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-primary)' }}>
                    {r.body}
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: 'var(--text-tertiary)' }}>
                    — {r.authorName}
                    {byline(r) ? ` · ${byline(r)}` : ''}
                  </p>
                  {r.providerReply && <ReplyBlock text={r.providerReply} />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
