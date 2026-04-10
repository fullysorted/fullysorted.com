import Link from 'next/link';
import { CheckCircle2, Star } from 'lucide-react';
import { LISTING_TIERS, FREE_LISTINGS_THRESHOLD } from '@/lib/listing-tiers';

export const metadata = {
  title: 'Pricing — Fully Sorted',
  description: `Simple, transparent pricing. First ${FREE_LISTINGS_THRESHOLD} listings are free. Standard from $9.99, Featured $29.99, Premium $49.99. No commissions ever.`,
};

const TIER_KEYS = ['standard', 'featured', 'premium'] as const;

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-300 text-sm font-semibold">
              🎉 First {FREE_LISTINGS_THRESHOLD} listings are free
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Honest Pricing</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            No commissions. No hidden fees. No dealer markups. Just a one-time listing fee
            to get your car in front of serious collectors.
          </p>
        </div>
      </section>

      {/* Early Adopter Banner */}
      <section className="bg-emerald-600 text-white py-5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            🎉 Early Adopter Offer — The first {FREE_LISTINGS_THRESHOLD} providers to join and first{' '}
            {FREE_LISTINGS_THRESHOLD} cars listed are <strong>completely free</strong>.
            Get in early.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIER_KEYS.map((key) => {
            const tier = LISTING_TIERS[key];
            return (
              <div
                key={key}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-amber-500 bg-white shadow-xl shadow-amber-100'
                    : 'border-stone-200 bg-white shadow-md'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-white" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold font-mono text-stone-900">
                      {tier.displayPrice}
                    </span>
                    <span className="text-stone-400 text-sm">one-time</span>
                  </div>
                  <p className="text-stone-500 text-sm">
                    {key === 'standard' && 'Get your car listed and in front of buyers.'}
                    {key === 'featured' && 'The full Fully Sorted experience — AI write-up, social promo, priority placement.'}
                    {key === 'premium' && 'Maximum exposure, listed until sold, with escrow support.'}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sell"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    tier.highlight
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  List with {tier.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Feature comparison table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            What&apos;s included
          </h2>
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="text-left px-6 py-4 font-semibold text-stone-600">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-stone-600">Standard</th>
                  <th className="text-center px-4 py-4 font-semibold text-amber-600">Featured</th>
                  <th className="text-center px-4 py-4 font-semibold text-stone-600">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Price', values: ['$9.99', '$29.99', '$49.99'] },
                  { label: 'Photos', values: ['20', '40', 'Unlimited'] },
                  { label: 'Video', values: ['—', '1', 'Unlimited'] },
                  { label: 'AI Description', values: ['—', '✓', '✓'] },
                  { label: 'Days Listed', values: ['30', '60', 'Until sold'] },
                  { label: 'Social Share', values: ['—', '✓', '✓'] },
                  { label: 'Priority Placement', values: ['—', '✓', '✓'] },
                  { label: 'Escrow Coordination', values: ['—', '—', '✓'] },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-stone-100 ${i % 2 === 0 ? '' : 'bg-stone-50/50'}`}
                  >
                    <td className="px-6 py-4 font-medium text-stone-700">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={`text-center px-4 py-4 ${
                          j === 1 ? 'font-semibold text-amber-700 bg-amber-50/50' : 'text-stone-600'
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No commission callout */}
        <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Zero commissions. Always.</h3>
          <p className="text-stone-300 max-w-xl mx-auto">
            Most collector-car listing sites charge a success fee of 4.5–5% when your car sells,
            bolt a buyer&rsquo;s premium onto the final price, or do both.
            Fully Sorted takes <strong className="text-white">nothing</strong> on the sale.
            Your one-time listing fee is all you pay — ever.
          </p>
          <Link
            href="/sell"
            className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            List Your Car →
          </Link>
        </div>
      </section>
    </main>
  );
}
