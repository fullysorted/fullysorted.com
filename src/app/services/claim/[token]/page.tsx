import { notFound } from 'next/navigation';
import Link from 'next/link';
import ClaimActions from './ClaimActions';

interface Provider {
  id: number;
  business_name: string;
  owner_name: string | null;
  category: string;
  location: string;
  website: string | null;
  phone: string | null;
  description: string;
  specialties: string[] | null;
  years_in_business: string | null;
  status: string;
  outreach_status: string | null;
  slug: string;
}

async function getProvider(token: string): Promise<Provider | null> {
  if (!process.env.DATABASE_URL) return null;
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  const rows = await sql`
    SELECT id, business_name, owner_name, category, location, website, phone,
           description, specialties, years_in_business, status, outreach_status, slug
    FROM service_providers
    WHERE claim_token = ${token}
    LIMIT 1
  `;
  return (rows[0] as Provider | undefined) ?? null;
}

export const metadata = {
  title: 'Claim Your Listing — Fully Sorted',
  description: 'Review and claim your free founding-provider listing on Fully Sorted.',
};

export default async function ClaimPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const provider = await getProvider(token);
  if (!provider) notFound();

  // Already claimed/active
  if (provider.status === 'active' && provider.outreach_status === 'claimed') {
    return (
      <main className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border p-10 text-center">
          <h1 className="font-display font-semibold tracking-tight text-3xl text-foreground mb-3">You&apos;re already listed</h1>
          <p className="text-base text-text-secondary mb-6">
            <strong>{provider.business_name}</strong> is live in the Fully Sorted directory. Thanks for being a founding provider.
          </p>
          <Link
            href={`/services/${provider.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
          >
            View your public profile
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Intro */}
        <div className="mb-8">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#1E6091' }}>
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: '#1E6091' }} />
              <span className="w-1.5 h-1.5" style={{ background: '#1E6091' }} />
              <span className="w-1.5 h-1.5" style={{ background: '#B08D3F' }} />
            </span>
            Founding Provider Invitation
          </p>
          <h1 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-foreground mb-3 leading-[1.1]">
            We&apos;d like to list <span className="text-accent">{provider.business_name}</span> on Fully Sorted.
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Fully Sorted is a new directory for the people collectors actually trust with their cars — built by Chris Peterson, founder and a 25-year veteran of the collector car market with experience at major automotive companies and major auction houses. We&apos;re inviting you as a <strong>founding provider</strong>, which means free listing, founding badge, and priority placement. <strong>Free listing for founding providers — no catch.</strong>
          </p>
        </div>

        {/* Staged listing preview */}
        <div className="bg-white rounded-2xl border border-border p-6 md:p-8 mb-6">
          <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                {provider.category}
              </p>
              <h2 className="text-2xl font-bold text-foreground">{provider.business_name}</h2>
              <p className="text-sm text-text-secondary mt-1">{provider.location}</p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: '#F7F0DF', color: '#7A6029', border: '1px solid rgba(176,141,63,0.35)' }}
            >
              ★ Founding Provider
            </span>
          </div>

          <p className="text-sm text-foreground leading-relaxed mb-5 whitespace-pre-line">
            {provider.description}
          </p>

          {provider.specialties && provider.specialties.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {provider.specialties.map((s, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-surface text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-4 border-t border-border">
            {provider.website && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Website</p>
                <p className="text-foreground">{provider.website.replace(/^https?:\/\//, '')}</p>
              </div>
            )}
            {provider.years_in_business && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Years in business</p>
                <p className="text-foreground">{provider.years_in_business}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action box */}
        <ClaimActions token={token} businessName={provider.business_name} slug={provider.slug} />

        {/* Trust footer */}
        <p className="text-xs text-center text-text-secondary mt-6 max-w-md mx-auto">
          We won&apos;t share your contact info, send marketing email, or list anything without your say-so. Questions?{' '}
          <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a>
        </p>
      </div>
    </main>
  );
}
