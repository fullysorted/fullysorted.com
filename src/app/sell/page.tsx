import Image from 'next/image';
import SellForm from './SellForm';

export const metadata = {
  title: 'Sell Your Collector Car for $9.99 — Fully Sorted',
  description: 'List your collector car for $9.99. Simple flat-fee listings. AI-assisted listings, full-resolution photos, and direct buyer messaging. Built by collectors, for collectors.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero — ad-traffic optimized, classic metal under a racing-green overlay */}
      <section className="relative overflow-hidden text-white py-12 md:py-16">
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)' }}
        />
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
          alt="Classic Porsche 911 on an open road"
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
          {/* Founder credibility line — instant trust signal */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="flex gap-1" aria-hidden="true">
              {['#6ab04c', '#29ABE2', '#B08D3F'].map((c) => (
                <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </span>
            <span className="text-stone-200 text-xs font-bold uppercase tracking-widest">
              Built by a 25-year collector car veteran
            </span>
          </div>

          <h1 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-4 leading-[1.05]">
            Sell your collector car<br />
            <span className="text-gold">for $9.99.</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-6 font-medium">
            One flat fee. No surprises.
          </p>

          {/* Three trust pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Direct buyer contact
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
            Most collector-car listing sites charge a 4.5–5% success fee when your car sells.
            On a $50,000 sale, that&rsquo;s $2,250+ out of your pocket.
            Fully Sorted is <strong className="text-gold">$9.99 flat</strong> &mdash; no success fee, ever.
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
