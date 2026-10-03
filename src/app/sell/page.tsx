import SellForm from './SellForm';
import { LISTING_CATEGORIES } from '@/lib/listing-categories';

export const metadata = {
  alternates: { canonical: "/sell" },
  title: 'Sell Your Collector Car',
  description: 'List your collector car for one fee, paid once. The first 100 cars list free. Full-resolution photos and direct buyer messaging.',
};

// ?category=Project (from /projects) arrives with the category already picked.
export default async function SellPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initialCategory = LISTING_CATEGORIES.find((c) => c.toLowerCase() === (category ?? '').toLowerCase()) ?? '';
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header, in the sitewide language: white, deep green type, teal eyebrow.
          Until 2026-09-07 this hero carried four separate price statements
          above the fold. The fee comparison now lives on the Publish step,
          where somebody is actually deciding to pay it. */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(18,53,42,0.14)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: '#1C8C87' }}>
            Sell a car
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[18ch]" style={{ color: '#12352A' }}>
            Sell your collector car to people who know what it is.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
            Chassis numbers, history and full-resolution photographs, on a listing
            that links to our own research on the model. Buyers contact you directly.
          </p>
          <p className="mt-5 text-sm max-w-2xl" style={{ color: '#6B7280' }}>
            A <strong style={{ color: '#12352A' }}>flat listing fee</strong>, paid once,
            up front. No commission when it sells, and no buyer&rsquo;s premium.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <SellForm initialCategory={initialCategory} />
      </section>
    </main>
  );
}
