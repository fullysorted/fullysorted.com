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
