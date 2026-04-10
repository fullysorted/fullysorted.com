import SellForm from './SellForm';

export const metadata = {
  title: 'Sell Your Collector Car for $9.99 — Fully Sorted',
  description: 'List your collector car for $9.99. Zero commission, ever. AI-assisted listings, full-resolution photos, and direct buyer messaging. Built by collectors, for collectors.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero — ad-traffic optimized */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Founder credibility line — instant trust signal */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-stone-200 text-xs font-semibold uppercase tracking-wider">
              Built by the Vice Chair of La Jolla Concours
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            Sell your collector car<br />
            <span className="text-amber-300">for $9.99.</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-6 font-medium">
            Zero commission. Ever.
          </p>

          {/* Three trust pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Keep 100% of the sale
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ AI-assisted listing
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Direct buyer messaging
            </span>
          </div>

          {/* The math anchor — this is the line the ads echo */}
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            On a $50,000 car, an auction takes ~$4,000 in commission.
            Fully Sorted takes <strong className="text-amber-300">$9.99</strong>.
            Tiered upgrades available — never a percentage of your sale.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <SellForm />
      </section>
    </main>
  );
}
