/**
 * Site-wide feature flags.
 *
 * VALUE_GUIDE_PUBLIC — the Value Guide itself is correct: the minimum-n rule,
 * the IQR outlier filter and the mean suppression all do what they say. What is
 * missing is data. The comp set is still the ~128-row demo seed, its newest
 * sale is 2025-12-01, and `/api/scrape` is deliberately disabled pending a
 * licensed feed, so it does not grow. Across the entire database ZERO searches
 * clear the n>=9 "well supported" bar and only four year-windows produce a
 * median at all — every one of them a Mustang. The page's most common honest
 * answer is "not enough sales to say", which is a poor first impression for a
 * buyer arriving from the homepage.
 *
 * Hidden 2026-08-20. The route stays live and unlinked so it can still be
 * previewed and worked on; flipping this to true restores every entry point at
 * once — nav, footer, homepage, sitemap and the Research CTAs.
 */
// Annotated as boolean, not the literal `false`, so TypeScript keeps both
// branches of every gate type-checked and flipping it stays a one-line change.
export const VALUE_GUIDE_PUBLIC: boolean = false;

/**
 * PROVIDER_REVIEWS_PUBLIC — the reviews & testimonials block on provider
 * profiles, and the invite/testimonial controls in the /team console.
 *
 * On by default. The block is safe on an empty directory because every number
 * it can show is gated behind the minimum-n rule in lib/reviews.ts: with fewer
 * than three published verified reviews a profile shows the reviews themselves
 * and no average, no Top-rated badge and no aggregateRating markup. A provider
 * with nothing yet simply shows the "no reviews yet" line, which is true and
 * is what makes the first real review worth something.
 *
 * Flip to false to pull the whole surface — public block, invite emails and
 * console controls — in one line, without touching the write path or the data.
 */
export const PROVIDER_REVIEWS_PUBLIC: boolean = true;

/**
 * GIG_PAYMENTS_ENABLED — the paid gig rail: card checkout, escrow, Connect
 * onboarding and transfers.
 *
 * This flag exists because until now there wasn't one. The rail was believed to
 * be disabled pending legal and accounting sign-off, but nothing disabled it:
 * the only condition guarding checkout was per-provider data
 * (`payouts_enabled && stripe_connect_id`), and a provider sets BOTH of those
 * themselves by pressing "Set up payouts" on their own dashboard. Any provider
 * who found that button could have flipped their gigs into live card checkout.
 * Nothing had, because no gigs were live yet — but the gate was data, not a
 * decision, and a decision this size should be one line someone chose.
 *
 * WHAT THIS GATES — entry only:
 *   • POST /api/gigs/checkout      no new money is taken
 *   • POST /api/connect/onboard    no new Connect accounts are created
 *   • the gig page's "Book & pay"  falls back to "Request this gig"
 *   • the dashboard payout CTA     hidden
 *
 * WHAT THIS DELIBERATELY DOES NOT GATE — the exits:
 *   deliver, accept, release, refund, dispute, the auto-release cron and the
 *   Stripe webhooks all keep working. Turning the rail off must never strand
 *   money that is already held. If an order is in escrow when this flips to
 *   false, it still completes and still pays out.
 *
 * Buyers are not blocked from the marketplace when this is false — they get the
 * unpaid inquiry flow, which is the same lead the directory produces.
 *
 * TO TURN IT ON, all three should be true: the 1099/tax reporting position is
 * settled (see the tax memo), the terms cover escrow and refunds, and a
 * provider can edit a gig's price — today they cannot change it after signup,
 * which is not a thing to discover after taking someone's card.
 */
export const GIG_PAYMENTS_ENABLED: boolean = false;
