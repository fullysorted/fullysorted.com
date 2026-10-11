import { priceRangeTitle } from '@/lib/price-range';
import type { Metadata } from 'next';
import ContactLink from '@/components/provider/ContactLink';
import { categoryLabel } from '@/lib/service-categories';
import { formatBusinessName, formatLocation } from '@/lib/provider-format';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDb, schema } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
import type { ServiceProvider } from '@/lib/db/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import ProviderInquiryForm from './ProviderInquiryForm';
import ProviderReviews from './ProviderReviews';
import ProviderGallery from './ProviderGallery';
import { ratingDisplay, type PublicReview } from '@/lib/reviews';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';
import { normalizeWorkSettings, workSetting, teamSizeLabel } from '@/lib/work-settings';
import { normalizeGallery } from '@/lib/gallery';
import { normalizeMarques } from '@/lib/marques';
import { shareImageUrl, SITE_URL } from '@/lib/share';
import { ShareButton } from '@/components/share/ShareButton';
import { ProviderBanner } from '@/components/providers/ProviderBanner';
import { ProviderMark } from '@/components/providers/ProviderMark';
import { auth } from '@clerk/nextjs/server';
import { isUnclaimed, isPlaceholderOwner } from '@/lib/claim-state';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

// ─── Data access ────────────────────────────────────────
// Matches /api/providers: drizzle via getDb/schema, filtered to active.
async function getProvider(slug: string): Promise<ServiceProvider | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const db = getDb();
    const [provider] = await db
      .select()
      .from(schema.serviceProviders)
      .where(
        and(
          eq(schema.serviceProviders.slug, slug),
          eq(schema.serviceProviders.status, 'active'),
        ),
      )
      .limit(1);
    return provider ?? null;
  } catch (e) {
    console.error('Provider lookup failed:', e);
    return null;
  }
}

/**
 * Published reviews for this provider, verified first.
 *
 * Read straight from the database rather than through /api/reviews — this is a
 * server component and an internal fetch would cost a round trip and a second
 * cold start for data we can select directly. The API route stays for the
 * client-side surfaces.
 *
 * A failure here returns an empty list rather than throwing: a reviews outage
 * must never take the profile down. Note that empty is also the honest answer
 * to "no reviews yet", and the block below renders that state explicitly, so
 * an outage and a genuinely new shop look the same to a visitor. That is an
 * acceptable trade only because the block never asserts a number it cannot
 * back up.
 */
async function getReviews(providerId: number): Promise<PublicReview[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT id, source, author_name, vehicle, work_type, work_date, rating, body,
             provider_reply, provider_replied_at, published_at, created_at
      FROM provider_reviews
      WHERE provider_id = ${providerId} AND status = 'published'
      ORDER BY source = 'verified' DESC, COALESCE(published_at, created_at) DESC
      LIMIT 100
    `;
    return rows.map((r) => ({
      id: Number(r.id),
      source: r.source === 'testimonial' ? 'testimonial' : 'verified',
      authorName: String(r.author_name),
      vehicle: r.vehicle ? String(r.vehicle) : null,
      workType: r.work_type ? String(r.work_type) : null,
      workDate: r.work_date ? String(r.work_date) : null,
      rating: r.rating === null || r.rating === undefined ? null : Number(r.rating),
      body: String(r.body),
      providerReply: r.provider_reply ? String(r.provider_reply) : null,
      providerRepliedAt: r.provider_replied_at ? String(r.provider_replied_at) : null,
      publishedAt: r.published_at ? String(r.published_at) : null,
      createdAt: String(r.created_at),
    }));
  } catch (e) {
    console.error('Provider reviews lookup failed:', e);
    return [];
  }
}

// ─── Category photography (profile header backdrop) ────

// ─── Helpers ────────────────────────────────────────────
function normalizeWebsite(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function instagramHandle(raw: string): string {
  return raw.replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/\/$/, '');
}

// ─── Metadata ───────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = await getProvider(slug);
  if (!provider) return { title: 'Provider Not Found' };

  // The root layout's template appends "| Fully Sorted"; adding it here doubled it.
  // Label, not the raw key, and the town: that is what an owner searches for.
  const bizName = formatBusinessName(provider.businessName);
  const town = formatLocation(provider.location);
  const title = `${bizName}: ${categoryLabel(provider.category)} in ${town}`;
  const description =
    (provider.description?.slice(0, 200) ??
      `${bizName}, a collector car ${categoryLabel(provider.category).toLowerCase()} specialist in ${town}.`);

  return {
    title,
    description,
    alternates: { canonical: `/services/${provider.slug}` },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://fullysorted.com/services/${provider.slug}`,
      images: [{ url: shareImageUrl('provider', provider.slug), width: 1200, height: 630, alt: bizName }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [shareImageUrl('provider', provider.slug)] },
  };
}

// ─── Page ───────────────────────────────────────────────
export default async function ProviderProfilePage({ params }: Props) {
  const { slug } = await params;
  const provider = await getProvider(slug);
  // Contact details (phone, website, Instagram) are for signed-in members only.
  // Everyone else reaches the shop through the inquiry form, which is the one
  // contact we can count and the one the shop's details stay behind.
  let signedIn = false;
  try {
    signedIn = Boolean((await auth()).userId);
  } catch {
    signedIn = false;
  }
  if (!provider) notFound();

  // A seeded profile the shop has not taken over yet. It shows public facts
  // only: no owner name we made up, no price band we defaulted, and a plain
  // line saying who wrote it.
  const unclaimed = isUnclaimed(provider);
  const showOwner = !unclaimed && !isPlaceholderOwner(provider.ownerName);

  const specialties = provider.specialties ?? [];
  // What this shop says it wants to be sent. All optional, all shop-supplied —
  // nothing here is inferred, and a shop that has told us nothing renders
  // exactly as it did before these fields existed.
  const marques = normalizeMarques(provider.marques);
  // Normalized on the way out as well as on the way in: rows written before
  // the validator existed, or by a future admin path, must never hand
  // next/image a host it will throw on.
  const gallery = normalizeGallery(provider.gallery);
  const minJobValue = provider.minJobValue ?? null;
  const serviceRadius = provider.serviceRadiusMiles ?? null;
  // Where the work happens — the provider's own answer, and the field that
  // replaced the business/freelancer split. Empty for every row seeded before
  // the question existed, and empty renders nothing: this page never tells an
  // owner "premises you can visit" on a provider's behalf again.
  const settings = normalizeWorkSettings(provider.workSettings);
  const settingBlurbs = settings.map((k) => workSetting(k)!.ownerBlurb);
  const team = teamSizeLabel(provider.teamSize);
  const hasWorkPrefs =
    marques.length > 0 ||
    minJobValue !== null ||
    serviceRadius !== null ||
    settings.length > 0 ||
    team !== null;
  // Defaults true, so this reads "open" for every row that predates the column.
  const acceptingWork = provider.acceptingWork !== false;
  // One gate for every number on this page — badge, JSON-LD and the reviews
  // block all ask lib/reviews.ts rather than reimplementing the threshold.
  const { show: hasRating, rating: ratingNum, count: reviewCount, topRated } = ratingDisplay(
    provider.rating,
    provider.reviewCount,
  );
  const reviews = PROVIDER_REVIEWS_PUBLIC ? await getReviews(provider.id) : [];
  const igHandle = provider.instagram ? instagramHandle(provider.instagram) : null;

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://fullysorted.com/services/${provider.slug}#business`,
    name: formatBusinessName(provider.businessName),
    description: provider.description,
    url: `https://fullysorted.com/services/${provider.slug}`,
    address: { '@type': 'PostalAddress', addressLocality: formatLocation(provider.location) },
    // Specialties and marques both answer "what is this shop expert in", and
    // an answer engine asked "who does air-cooled Porsche in San Diego" should
    // find the marque here, not only in the visible copy.
    knowsAbout: [...specialties, ...marques],
    // A seeded row carries the route's '$$' default, which is our guess, not
    // the shop's read. Leave it out until the shop claims the profile.
    ...(unclaimed ? {} : { priceRange: provider.priceRange ?? '$$' }),
  };
  // Lead photo first, then the gallery. Google and the answer engines both
  // take an array here, and a profile with real work photos on it should say so
  // in the markup rather than only on the page.
  const jsonLdImages = [provider.avatarUrl, ...gallery.map((g) => g.url)].filter(
    (u): u is string => Boolean(u),
  );
  if (jsonLdImages.length === 1) jsonLd.image = jsonLdImages[0];
  else if (jsonLdImages.length > 1) jsonLd.image = jsonLdImages;
  // The mark is a logo only when the shop said so; a portrait is not a logo.
  if (provider.logoUrl && provider.logoKind !== 'photo') jsonLd.logo = provider.logoUrl;
  // telephone and sameAs are left out on purpose: contact details are gated
  // behind sign-in, and the markup must not publish what the page withholds.
  // aggregateRating rides the same minimum-n gate as the visible badge. Thin
  // or self-supplied rating markup is exactly what Google's review-snippet
  // policy penalises, and a shop's own testimonials never reach this branch.
  if (hasRating) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: ratingNum.toFixed(1),
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }
  const verifiedReviews = reviews.filter((r) => r.source === 'verified' && r.rating);
  if (verifiedReviews.length > 0) {
    jsonLd.review = verifiedReviews.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.authorName },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      reviewBody: r.body,
      ...(r.publishedAt ? { datePublished: r.publishedAt.slice(0, 10) } : {}),
    }));
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <JsonLd data={jsonLd} />

      {/* ─── Header: the sitewide white pattern (teal mono eyebrow, deep green
          serif name, gray subhead), then the shop's own banner. The stock
          photo under a navy overlay is gone (2026-09-28): a profile should
          lead with the shop, not with a picture of someone else's car. ─── */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(18,53,42,0.14)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-8 sm:pt-8 sm:pb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors hover:text-[#12352A]"
            style={{ color: '#6B7280' }}
          >
            <span aria-hidden>←</span> Back to directory
          </Link>

          <div className="relative">
            <ProviderBanner
              name={formatBusinessName(provider.businessName)}
              avatarUrl={provider.avatarUrl}
              gallery={gallery}
              category={provider.category}
              focus={provider.bannerFocus}
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="aspect-[2/1] sm:aspect-[3/1] rounded-2xl"
            />
            <div className="absolute left-4 sm:left-6 -bottom-12 sm:-bottom-14">
              <ProviderMark
                name={formatBusinessName(provider.businessName)}
                category={provider.category}
                logoUrl={provider.logoUrl}
                logoKind={provider.logoKind}
                size={112}
                ring
                className="sm:hidden"
              />
              <ProviderMark
                name={formatBusinessName(provider.businessName)}
                category={provider.category}
                logoUrl={provider.logoUrl}
                logoKind={provider.logoKind}
                size={132}
                ring
                className="hidden sm:block"
              />
            </div>
          </div>

          <div className="pt-16 sm:pt-20 min-w-0">
            <p
              className="text-[11px] uppercase mb-2"
              style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: '#1C8C87' }}
            >
              {[provider.category, ...((provider.serviceTypes as string[] | null) ?? []).filter((k) => k !== provider.category)]
                .map((k) => categoryLabel(k))
                .join(' · ')}
            </p>

            <h1 className="font-display tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.75rem] mb-2" style={{ color: '#12352A' }}>
              {formatBusinessName(provider.businessName)}
            </h1>

            <p className="text-sm sm:text-base" style={{ color: '#6B7280' }}>
              {showOwner ? `${provider.ownerName} · ` : ''}{formatLocation(provider.location)}
            </p>

            {unclaimed && (
              <p className="text-sm mt-3" style={{ color: '#6B7280' }}>
                Not yet claimed by the shop. This profile was put together from public information.{' '}
                <Link
                  href={`/services/apply?claim=${encodeURIComponent(provider.slug)}`}
                  className="font-medium underline underline-offset-2 hover:text-[#12352A]"
                  style={{ color: '#1C8C87' }}
                >
                  Is this your shop? Claim it
                </Link>
              </p>
            )}

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {topRated && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--sorted-green-light)', color: 'var(--sorted-green-dark)' }}
                  >
                    ★ Top-rated
                  </span>
                )}
                {provider.foundingProvider && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--accent-gold-light)', color: '#8A6E31' }}
                  >
                    ★ Founding Provider
                  </span>
                )}
                {hasRating && (
                  <a
                    href="#reviews"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)' }}
                  >
                    ★ {ratingNum.toFixed(1)} ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                  </a>
                )}
                {provider.priceRange && !unclaimed && (
                  <span
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#F3F4F6', color: 'var(--text-primary)' }}
                    title={priceRangeTitle(provider.priceRange)}
                  >
                    {provider.priceRange}
                  </span>
                )}
              </div>

              <div className="mt-5">
                <ShareButton
                  title={`${formatBusinessName(provider.businessName)}: ${categoryLabel(provider.category)} in ${formatLocation(provider.location)}`}
                  url={`${SITE_URL}/services/${provider.slug}`}
                  image={shareImageUrl('provider', provider.slug)}
                  filename={`fully-sorted-${provider.slug}`}
                />
              </div>
          </div>
        </div>
      </div>

      {/* ─── Body — content left, contact card right ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Left column */}
          <div
            className="rounded-2xl px-6 sm:px-8 py-7 sm:py-8"
            style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Description */}
            <section className="mb-8">
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: 'var(--text-tertiary)' }}
              >
                About
              </h2>
              <p
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ color: 'var(--text-primary)' }}
              >
                {provider.description}
              </p>
            </section>

            {/* Specialties */}
            {specialties.length > 0 && (
              <section className="mb-8">
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((spec, i) => (
                    <span
                      key={`${spec}-${i}`}
                      className="text-sm font-medium px-3 py-1.5 rounded-full"
                      style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <ProviderGallery photos={gallery} businessName={formatBusinessName(provider.businessName)} />

            {/* What they take on — the shop's own answers, not our inference. */}
            {hasWorkPrefs && (
              <section className="mb-8">
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  What they take on
                </h2>
                <div className="space-y-2">
                  {settingBlurbs.length > 0 && (
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Where: </span>
                      {settingBlurbs.join(' ')}
                    </p>
                  )}
                  {team && (
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Size: </span>
                      {team}
                    </p>
                  )}
                  {/* Chips rather than a comma list: a shop that named twelve
                      marques should scan, not read. Absent is absent — a shop
                      that named none takes anything and this block never
                      appears, which is the same promise the dashboard makes. */}
                  {marques.length > 0 && (
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Marques: </span>
                      <span className="inline-flex flex-wrap gap-1.5 align-middle mt-1">
                        {marques.map((m) => (
                          <span
                            key={m}
                            className="text-xs font-medium px-2.5 py-1 rounded-full"
                            style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                          >
                            {m}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {minJobValue !== null && (
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Typical job: </span>
                      from about ${minJobValue.toLocaleString('en-US')}
                    </p>
                  )}
                  {serviceRadius !== null && (
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Travels: </span>
                      about {serviceRadius} miles from {provider.location}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Quick facts */}
            <section
              className="grid grid-cols-2 gap-4 pt-6"
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  Location
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {formatLocation(provider.location)}
                </p>
              </div>
              {provider.yearsInBusiness && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-tertiary)' }}>
                    Years in business
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {provider.yearsInBusiness}
                  </p>
                </div>
              )}
              {provider.priceRange && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-tertiary)' }}>
                    Price range
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }} title={priceRangeTitle(provider.priceRange)}>
                    {provider.priceRange}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                    Their own read, $ to $$$$. Not a quote.
                  </p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  Category
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {categoryLabel(provider.category)}
                </p>
              </div>
            </section>

            {PROVIDER_REVIEWS_PUBLIC && (
              <ProviderReviews
                businessName={provider.businessName}
                reviews={reviews}
                rating={ratingNum}
                reviewCount={reviewCount}
                showAverage={hasRating}
              />
            )}
          </div>

          {/* Right column — sticky contact card */}
          <aside
            className="rounded-2xl px-6 py-7 lg:sticky lg:top-6"
            style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Get in touch
            </h2>

            {/* Said they are full. The form stays — someone who picked this shop
                deliberately should still be able to reach it, and a booked shop
                is often the one worth waiting for. It just sets expectations. */}
            {!acceptingWork && (
              <p
                className="text-xs mb-4 px-3 py-2.5 rounded-lg"
                style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
              >
                Not taking on new work at the moment. You can still write. Expect a slower reply, or a
                date further out.
              </p>
            )}

            <ProviderInquiryForm slug={provider.slug} businessName={provider.businessName} />

            {!signedIn && (provider.phone || provider.website || igHandle) && (
              <p className="mt-6 pt-5 text-xs" style={{ borderTop: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>
                Phone and website are for members.{' '}
                <Link href={`/sign-in?redirect_url=${encodeURIComponent(`/services/${provider.slug}`)}`} className="underline">
                  Sign in
                </Link>{' '}
                or{' '}
                <Link href={`/sign-up?redirect_url=${encodeURIComponent(`/services/${provider.slug}`)}`} className="underline">
                  join free
                </Link>
                . The form above works without an account.
              </p>
            )}

            {signedIn && (provider.phone || provider.website || igHandle) && (
              <div className="mt-6 pt-5 space-y-2.5" style={{ borderTop: '1px solid var(--border-light)' }}>
                {provider.phone && (
                  <ContactLink
                    providerId={provider.id}
                    kind="phone"
                    href={`tel:${provider.phone}`}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    📞 {provider.phone}
                  </ContactLink>
                )}
                {provider.website && (
                  <ContactLink
                    providerId={provider.id}
                    kind="website"
                    href={normalizeWebsite(provider.website)}
                    newTab
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    🌐 {provider.website.replace(/^https?:\/\//i, '').replace(/\/$/, '')}
                  </ContactLink>
                )}
                {igHandle && (
                  <ContactLink
                    providerId={provider.id}
                    kind="instagram"
                    href={`https://instagram.com/${igHandle}`}
                    newTab
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    @ {igHandle}
                  </ContactLink>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* Footer note */}
        <p className="text-xs text-center mt-8" style={{ color: 'var(--text-tertiary)' }}>
          Listed in the Fully Sorted directory ·{' '}
          <Link href="/services" className="underline">
            browse more specialists
          </Link>
        </p>
      </div>
    </div>
  );
}
