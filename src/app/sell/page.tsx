import Image from 'next/image';
import SellForm from './SellForm';

export const metadata = {
  alternates: { canonical: "/sell" },
  title: 'Sell Your Collector Car from $9.99',
  description: 'List your collector car from $9.99. Simple flat-fee listings. Full-resolution photos and direct buyer messaging. Built by collectors, for collectors.',
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
          src="/images/archive/concours-lawn.jpg"
          alt="A row of Ferraris on a concours lawn"
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
              Built by collectors, for collectors
            </span>
          </div>

          {/* The car leads. The fee is a fact, not the headline.
              Until 2026-09-07 this hero carried four separate price statements
              above the fold: the h1 put "from $9.99" in gold on its own line,
              then a flat-fee subhead, then a buyer's-premium pill, then a
              paragraph doing percentage arithmetic on a $50,000 sale. A man
              with a numbers-matching car read all of that before the page said
              one word about his car. The fee comparison now lives on the
              Publish step, where somebody is actually deciding to pay it. */}
          <h1 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-4 leading-[1.05]">
            Sell your collector car to<br />
            <span className="text-gold">people who know what it is.</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-6 font-medium">
            Chassis numbers, history and full-resolution photographs, on a listing
            that links to our own research on the model.
          </p>

          {/* Three trust pills: what the listing carries, not what it costs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Chassis and VIN on the listing
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Full-resolution photos
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-stone-100">
              ✓ Direct buyer contact
            </span>
          </div>

          {/* One line about money, stated plainly and then dropped. */}
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            A flat listing fee <strong className="text-gold">from $9.99</strong>, paid once,
            up front. No commission when it sells, and no buyer&rsquo;s premium.
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
