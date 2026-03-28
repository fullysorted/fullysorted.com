import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  title: 'Services Directory — Fully Sorted',
  description: 'Vetted specialists for your collector car: photographers, detailers, mechanics, transporters, inspectors, restorers & more. San Diego and beyond.',
};

export default function ServicesPage() {
  return (
    <div style={{ background: '#faf9f7' }} className="min-h-screen">
      {/* Light Header Banner */}
      <div className="relative overflow-hidden" style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        {/* Speed-line texture */}
        <div className="absolute inset-0 speed-lines opacity-4" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px" style={{ background: '#E8722A' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8722A' }}>
              Trusted Network
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#1a1a18' }}>
            The go-to specialists<br className="hidden sm:block" /> for SoCal collectors.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: '#6b6b5e' }}>
            No sponsored slots. No pay-to-play. Every provider here earned their spot through
            community referrals and direct experience — so you can skip the guesswork.
          </p>

          <div
            className="flex flex-wrap gap-8 mt-8 pt-8"
            style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
          >
            {[
              { value: 'No pay-to-play', label: 'You can\'t buy your way in' },
              { value: 'Referral-sourced', label: 'How providers are found' },
              { value: 'Ongoing', label: 'Review process' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold" style={{ color: '#1a1a18' }}>{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: '#9a9a8a' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ServicesDirectory />
      </div>
    </div>
  );
}
