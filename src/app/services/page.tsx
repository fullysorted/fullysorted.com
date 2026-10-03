import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignupForm } from '@/components/newsletter/SignupForm';
import ServicesDirectory from './ServicesDirectory';
import { getPublishedModels } from '@/lib/data/models';
import { toSearchModels } from '@/lib/search-intent';
import { CATEGORY_PAGES } from '@/lib/data/categoryPages';
import { isServiceCategory, ALL_CATEGORIES } from '@/lib/service-categories';
import { getDirectoryProviders, type DirectoryProvider } from '@/lib/data/providers';

export const metadata = {
  alternates: { canonical: "/services" },
  title: 'Services Directory',
  description: 'Find specialists for your collector car: inspection, transport, title and registration, mechanical work, body and paint, restoration, upholstery, detailing, storage and photography, reviewed by real owners.',
};

const INK = '#12352A';
const TEAL = '#1C8C87';
const CREAM = '#FFFFFF';
const MUTED = '#6B7280';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

// One cached read an hour feeds the search suggestions, the "read the
// history" link and the server-rendered fallback list below. The interactive
// directory still loads from /api/providers once the page hydrates.
export const revalidate = 3600;

export default async function ServicesPage() {
  const [models, directory] = await Promise.all([getPublishedModels(), getDirectoryProviders()]);
  const searchModels = toSearchModels(models);
  return (
    <div style={{ background: 'var(--bg-primary)' }} className="min-h-screen">
      {/* Header, in the sitewide language: white, deep green type, teal eyebrow, framed photo */}
      <div className="relative overflow-hidden" style={{ background: CREAM, borderBottom: '1px solid rgba(18,53,42,0.14)' }}>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
              Services directory
            </p>
            <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[16ch]" style={{ color: INK }}>
              Find the specialist your car needs.
            </h1>
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
              Detailers, mechanics, transporters, restorers and the rest of the trades a collector
              car goes through in a year, rated by the owners who used them.
            </p>

            <p className="mt-6 text-sm sm:text-base font-semibold max-w-2xl" style={{ color: INK }}>
              Know it. Fix it. Buy it. Sell it.
            </p>

            {/* Provider entry point. This used to live in a nav dropdown next
                to the visitor links; it belongs here, quietly, on the page
                shops arrive at. */}
            <p className="mt-6 text-sm" style={{ color: MUTED }}>
              Run a shop?{' '}
              <Link href="/services/apply" className="font-semibold underline underline-offset-4" style={{ color: INK }}>
                List your services
              </Link>
              {' '}or read the{' '}
              <Link href="/services/guide" className="font-semibold underline underline-offset-4" style={{ color: INK }}>
                provider playbook
              </Link>
              .
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden" style={{ background: INK, boxShadow: '0 30px 60px -30px rgba(18,53,42,0.45)' }}>
              <Image
                src="/images/archive/porsche-904-workshop.jpg"
                alt="Porsche 904 in a workshop with its race engine on a stand"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Suspense boundary required: ServicesDirectory reads URL search params */}
        <Suspense fallback={<DirectoryFallback providers={directory} />}>
          <ServicesDirectory models={searchModels} />
        </Suspense>

        {/* Server-rendered links to the trade pages. The directory above is a
            client-side filter; these are what a crawler can actually follow. */}
        <nav aria-label="Trades" className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(18,53,42,0.14)' }}>
          <h2 className="font-display text-xl mb-1" style={{ color: INK }}>New to hiring one of these?</h2>
          <p className="text-sm mb-4" style={{ color: MUTED }}>What each trade does, and what to ask before you book.</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_PAGES.filter((c) => isServiceCategory(c.key)).map((c) => (
              <Link key={c.slug} href={`/services/category/${c.slug}`} className="px-3.5 py-2 rounded-full text-sm" style={{ border: '1px solid rgba(18,53,42,0.25)', color: INK }}>
                {c.heading}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-12 rounded-3xl bg-white p-6 sm:p-8" style={{ border: '1px solid rgba(18,53,42,0.14)' }}>
          <SignupForm
            variant="band"
            source="services"
            eyebrow="New shops near you"
            title="Know when a good one opens up nearby."
            blurb="Specialists as they join in your area. Add your ZIP and we'll keep it local."
            defaults={['shops']}
          />
        </div>
      </div>
    </div>
  );
}

// What the page carries before the interactive directory hydrates, and all a
// crawler without JavaScript sees: every active shop, linked to its profile.
function DirectoryFallback({ providers }: { providers: DirectoryProvider[] }) {
  if (providers.length === 0) return null;
  const label = (key: string | null) => ALL_CATEGORIES.find((c) => c.key === key)?.label ?? '';
  return (
    <section aria-label="Specialists in the directory">
      <p className="text-sm mb-6" style={{ color: MUTED }}>
        {providers.length} {providers.length === 1 ? 'specialist' : 'specialists'}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {providers.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/services/${p.slug}`}
              className="block rounded-2xl bg-white p-5 h-full"
              style={{ border: '1px solid rgba(18,53,42,0.14)' }}
            >
              <span className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
                {label(p.category)}
              </span>
              <span className="block font-display text-lg mt-1" style={{ color: INK }}>
                {p.business_name}
              </span>
              {p.location && (
                <span className="block text-sm mt-0.5" style={{ color: MUTED }}>
                  {p.location}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
