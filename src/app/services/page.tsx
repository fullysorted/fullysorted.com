import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  title: 'Services Directory — Fully Sorted',
  description: 'Vetted specialists for your collector car: photographers, detailers, mechanics, transporters, inspectors, restorers & more. San Diego and beyond.',
};

export default function ServicesPage() {
  return (
    <div style={{ background: '#faf9f7' }} className="min-h-screen">
      {/* Dark Header Banner */}
      <div className="relative overflow-hidden" style={{ background: '#0f0e08' }}>
        {/* Speed-line texture */}
        <div className="absolute inset-0 speed-lines opacity-30" />
        {/* Orange top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #E8722A 35%, #6ab04c 65%, transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px" style={{ background: '#E8722A' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8722A' }}>
              Vetted Specialists
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Services Directory
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Every specialist here has been personally vetted by me or trusted members of the community.
            These are the people I call when my own cars need work.
          </p>

          <div
            className="flex flex-wrap gap-8 mt-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              { value: '8+', label: 'Categories' },
              { value: 'Every provider', label: 'Vetted' },
              { value: 'San Diego', label: 'Based' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
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
