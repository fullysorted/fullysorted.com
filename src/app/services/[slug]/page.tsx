import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDb, schema } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
import type { ServiceProvider } from '@/lib/db/schema';
import { JsonLd } from '@/components/seo/JsonLd';

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
  if (!provider) return { title: 'Provider Not Found — Fully Sorted' };

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
    },
  };
}

// ─── Page ───────────────────────────────────────────────
export default async function ProviderProfilePage({ params }: Props) {
  const { slug } = await params;
  const provider = await getProvider(slug);
  if (!provider) notFound();

  const specialties = provider.specialties ?? [];
  const ratingNum = Number(provider.rating ?? 0);
  const reviewCount = provider.reviewCount ?? 0;
  const hasRating = ratingNum > 0 && reviewCount > 0;
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
  if (provider.phone) jsonLd.telephone = provider.phone;
  if (provider.website) jsonLd.sameAs = [normalizeWebsite(provider.website)];
  if (hasRating) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: ratingNum.toFixed(1),
      reviewCount,
    };
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <JsonLd data={jsonLd} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Back link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span aria-hidden>←</span> Back to directory
        </Link>

        {/* Profile card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Header band */}
          <div
            className="relative overflow-hidden px-6 sm:px-10 py-8 sm:py-10"
            style={{ borderBottom: '1px solid var(--border-light)' }}
          >
            <div className="speed-lines absolute inset-0 opacity-[0.04]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {provider.category}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {provider.businessName}
              </h1>

              <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                {provider.ownerName} · {provider.location}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {provider.verified && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--sorted-green-light)', color: 'var(--sorted-green-dark)' }}
                  >
                    ✓ Verified
                  </span>
                )}
                {provider.foundingProvider && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent-hover)' }}
                  >
                    ★ Founding Provider
                  </span>
                )}
                {hasRating && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)' }}
                  >
                    ★ {ratingNum.toFixed(1)} ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                  </span>
                )}
                {provider.priceRange && (
                  <span
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  >
                    {provider.priceRange}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-8 sm:py-10">
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
            {(provider.yearsInBusiness || provider.priceRange) && (
              <section
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6"
                style={{ borderTop: '1px solid var(--border-light)' }}
              >
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
              </section>
            )}

            {/* Contact */}
            <section
              className="pt-6"
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Contact
              </h2>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                {provider.phone && (
                  <a
                    href={`tel:${provider.phone}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  >
                    📞 {provider.phone}
                  </a>
                )}
                {provider.website && (
                  <a
                    href={normalizeWebsite(provider.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  >
                    🌐 {provider.website.replace(/^https?:\/\//i, '').replace(/\/$/, '')}
                  </a>
                )}
                {igHandle && (
                  <a
                    href={`https://instagram.com/${igHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  >
                    @ {igHandle}
                  </a>
                )}
              </div>

              {/* Primary CTA */}
              <a
                href={`mailto:${provider.email}?subject=${encodeURIComponent(`Inquiry via Fully Sorted — ${provider.businessName}`)}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors"
                style={{ background: 'var(--accent)' }}
              >
                Contact {provider.businessName}
              </a>
            </section>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-center mt-6" style={{ color: 'var(--text-tertiary)' }}>
          Listed in the Fully Sorted directory ·{' '}
          <Link href="/services" className="underline">
            browse more specialists
          </Link>
        </p>
      </div>
    </div>
  );
}
