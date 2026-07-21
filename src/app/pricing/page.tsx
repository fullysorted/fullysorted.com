import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import { LISTING_TIERS, FREE_LISTINGS_THRESHOLD } from '@/lib/listing-tiers';

export const metadata = {
  title: 'Pricing — Fully Sorted',
  description: `Simple, transparent pricing. First ${FREE_LISTINGS_THRESHOLD} listings are free. Standard from $9.99, Featured $29.99, Premium $49.99.`,
};

const TIER_KEYS = ['standard', 'featured', 'premium'] as const;

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero — classic sports car under a racing-green overlay */}
      <section className="relative overflow-hidden text-white py-20">
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)' }}
        />
        <Image
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
          alt="Classic sports car in dramatic light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Legibility overlay — deep racing green */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(15,32,50,0.62), rgba(15,32,50,0.82))' }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 speed-lines opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="flex gap-1" aria-hidden="true">
              {['#6ab04c', '#29ABE2', '#B08D3F'].map((c) => (
                <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              First {FREE_LISTINGS_THRESHOLD} listings are free
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-4 leading-[1.08]">Simple, Honest Pricing</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            No hidden fees. No dealer markups. Just a one-time listing fee
            to get your car in front of serious collectors.
          </p>
        </div>
      </section>

      {/* Early Adopter Banner */}
      <section className="bg-accent text-white py-5">
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
                className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all duration-300 hover:-translate-y-0.5 ${
                  tier.highlight
                    ? 'border-accent bg-white shadow-xl shadow-accent-light'
                    : key === 'premium'
                    ? 'border-gold bg-white shadow-xl shadow-gold-light'
                    : 'border-border bg-white shadow-md'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-white" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-1 flex items-center gap-1.5">
                    {tier.name}
                    {key === 'premium' && <Star className="w-4 h-4 text-gold fill-gold" aria-hidden="true" />}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-bold font-mono ${key === 'premium' ? 'text-gold' : 'text-foreground'}`}>
                      {tier.displayPrice}
                    </span>
                    <span className="text-text-tertiary text-sm">one-time</span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {key === 'standard' && 'Get your car listed and in front of buyers.'}
                    {key === 'featured' && 'The full Fully Sorted experience — AI write-up, social promo, priority placement.'}
                    {key === 'premium' && 'Maximum exposure, listed until sold, with escrow support.'}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sell"
                  className={`shine block text-center py-3 rounded-xl font-semibold transition ${
                    tier.highlight
                      ? 'bg-accent hover:bg-accent-hover text-white'
                      : key === 'premium'
                      ? 'bg-gold hover:bg-[#C19E54] text-[#1a1a18]'
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
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-center mb-8">
            What&apos;s included
          </h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left px-6 py-4 font-semibold text-text-secondary">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-text-secondary">Standard</th>
                  <th className="text-center px-4 py-4 font-semibold text-accent">Featured</th>
                  <th className="text-center px-4 py-4 font-semibold text-text-secondary">Premium</th>
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
                    className={`border-b border-border ${i % 2 === 0 ? '' : 'bg-surface/50'}`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={`text-center px-4 py-4 ${
                          j === 1 ? 'font-semibold text-accent bg-accent-light/50' : 'text-text-secondary'
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
        <div className="mt-12 relative overflow-hidden bg-[#12291C] rounded-2xl p-8 text-white text-center">
          <div className="absolute inset-0 paddock-mesh pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 speed-lines opacity-[0.03] pointer-events-none" aria-hidden="true" />
          <div className="relative">
          <h3 className="font-display text-2xl font-bold tracking-tight mb-2">One flat fee. No surprises.</h3>
          <p className="text-stone-300 max-w-xl mx-auto">
            Most collector-car listing sites run an auction clock and layer fees onto the
            final price. Fully Sorted keeps it simple: a <strong className="text-gold">one-time
            flat listing fee</strong>, up front, with no hidden charges along the way.
          </p>
          <Link
            href="/sell"
            className="shine inline-block mt-6 bg-white hover:bg-accent-light text-accent px-8 py-3 rounded-xl font-semibold transition"
          >
            List Your Car →
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
