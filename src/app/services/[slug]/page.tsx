import type { Metadata } from 'next';
import { categoryLabel } from '@/lib/service-categories';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getDb, schema } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
import type { ServiceProvider } from '@/lib/db/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import ProviderInquiryForm from './ProviderInquiryForm';
import ProviderReviews from './ProviderReviews';
import { ratingDisplay, type PublicReview } from '@/lib/reviews';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';

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
const CATEGORY_PHOTOS: Record<string, string> = {
  photography: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80',
  detailing: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600&q=80',
  mechanical: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  transport: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80',
  storage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1600&q=80',
  inspection: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
  restoration: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  bodywork: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80',
};
const DEFAULT_PHOTO = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80';

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

  const title = `${provider.businessName} — ${provider.category} | Fully Sorted`;
  const description =
    (provider.description?.slice(0, 200) ??
      `${provider.businessName}, a collector car ${provider.category.toLowerCase()} specialist in ${provider.location}.`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://fullysorted.com/services/${provider.slug}`,
      ...(provider.avatarUrl ? { images: [{ url: provider.avatarUrl }] } : {}),
    },
  };
}

// ─── Page ───────────────────────────────────────────────
export default async function ProviderProfilePage({ params }: Props) {
  const { slug } = await params;
  const provider = await getProvider(slug);
  if (!provider) notFound();

  const specialties = provider.specialties ?? [];
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
    name: provider.businessName,
    description: provider.description,
    url: `https://fullysorted.com/services/${provider.slug}`,
    address: { '@type': 'PostalAddress', addressLocality: provider.location },
    knowsAbout: specialties,
    priceRange: provider.priceRange ?? '$$',
  };
  if (provider.avatarUrl) jsonLd.image = provider.avatarUrl;
  if (provider.phone) jsonLd.telephone = provider.phone;
  if (provider.website) jsonLd.sameAs = [normalizeWebsite(provider.website)];
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

      {/* ─── Hero band — full-bleed photography under a navy overlay ─── */}
      <div className="relative overflow-hidden">
        <Image
          src={CATEGORY_PHOTOS[provider.category?.toLowerCase() ?? ''] ?? DEFAULT_PHOTO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(15,32,50,0.72), rgba(15,32,50,0.9))' }}
        />
        <div className="film-grain absolute inset-0 opacity-[0.05] pointer-events-none" />
        <div className="speed-lines absolute inset-0 opacity-[0.04] pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors hover:text-white"
            style={{ color: 'rgba(245,239,230,0.7)' }}
          >
            <span aria-hidden>←</span> Back to directory
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end gap-6">
            {/* The shop's own photo — required at onboarding, so every profile
                leads with the business rather than a stock image. */}
            {provider.avatarUrl && (
              <div
                className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 20px 50px -12px rgba(0,0,0,0.6)',
                  border: '3px solid rgba(245,239,230,0.92)',
                }}
              >
                <Image
                  src={provider.avatarUrl}
                  alt={`${provider.businessName} — photo`}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px" style={{ background: 'var(--accent-gold)' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: 'rgba(245,239,230,0.9)' }}
                >
                  {categoryLabel(provider.category)}
                </span>
              </div>

              <h1 className="font-display font-semibold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.75rem] mb-2 text-white">
                {provider.businessName}
              </h1>

              <p className="text-sm sm:text-base" style={{ color: 'rgba(245,239,230,0.78)' }}>
                {provider.ownerName} · {provider.location}
              </p>

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
                {provider.priceRange && (
                  <span
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(245,239,230,0.92)', color: 'var(--text-primary)' }}
                  >
                    {provider.priceRange}
                  </span>
                )}
              </div>
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
                  {provider.location}
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
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {provider.priceRange}
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

            <ProviderInquiryForm slug={provider.slug} businessName={provider.businessName} />

            {(provider.phone || provider.website || igHandle) && (
              <div className="mt-6 pt-5 space-y-2.5" style={{ borderTop: '1px solid var(--border-light)' }}>
                {provider.phone && (
                  <a
                    href={`tel:${provider.phone}`}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    📞 {provider.phone}
                  </a>
                )}
                {provider.website && (
                  <a
                    href={normalizeWebsite(provider.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    🌐 {provider.website.replace(/^https?:\/\//i, '').replace(/\/$/, '')}
                  </a>
                )}
                {igHandle && (
                  <a
                    href={`https://instagram.com/${igHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    @ {igHandle}
                  </a>
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
