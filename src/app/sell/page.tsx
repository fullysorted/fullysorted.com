import SellForm from './SellForm';

export const metadata = {
  alternates: { canonical: "/sell" },
  title: 'Sell Your Collector Car from $9.99',
  description: 'List your collector car from $9.99. Simple flat-fee listings. Full-resolution photos and direct buyer messaging. Built by collectors, for collectors.',
};

export default function SellPage() {
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
            A flat listing fee <strong style={{ color: '#12352A' }}>from $9.99</strong>, paid once,
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
