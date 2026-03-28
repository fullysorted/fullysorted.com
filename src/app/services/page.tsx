import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  title: 'Services Directory — Fully Sorted',
  description: 'Find specialists for your collector car: photographers, detailers, mechanics, transporters, inspectors, restorers & more. SoCal and beyond.',
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
              Collector Car Community
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#1a1a18' }}>
            Find specialists who<br className="hidden sm:block" /> actually get it.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: '#6b6b5e' }}>
            Whether you need a detailer who understands patina, a mechanic who knows your model,
            or a transporter who treats every car like their own — this is the place to find them.
            Open to anyone who loves collector cars.
          </p>

          <div
            className="flex flex-wrap gap-6 mt-8 pt-8"
            style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
          >
            {[
              { value: 'Buyers & sellers', label: 'Free to browse' },
              { value: 'Specialists', label: 'Apply to be listed' },
              { value: 'Enthusiasts', label: 'All welcome' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#E8722A' }} />
                <div>
                  <span className="text-sm font-semibold" style={{ color: '#1a1a18' }}>{s.value}</span>
                  <span className="text-sm" style={{ color: '#9a9a8a' }}> — {s.label}</span>
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
