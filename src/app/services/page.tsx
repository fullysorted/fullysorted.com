import { Suspense } from 'react';
import Image from 'next/image';
import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  title: 'Services Directory — Fully Sorted',
  description: 'Find specialists for your collector car: photographers, detailers, mechanics, transporters, inspectors, restorers & more — backed by owner reviews.',
};

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg-primary)' }} className="min-h-screen">
      {/* Photographic hero — vintage garage under a racing-green overlay */}
      <div className="relative overflow-hidden">
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)' }}
        />

        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80"
          alt="Vintage garage workshop with classic cars"
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          {/* Eyebrow badge with tricolor squares */}
          <div
            className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-2 rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.08)' }}
          >
            <div className="flex gap-1">
              {['#6ab04c', '#29ABE2', '#B08D3F'].map((c) => (
                <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              Collector Car Community
            </span>
          </div>

          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-4 text-white">
            Find specialists who<br className="hidden sm:block" />{' '}
            <span className="relative whitespace-nowrap">
              actually get it.
              <svg
                className="absolute -bottom-1.5 left-0 w-full overflow-visible"
                viewBox="0 0 200 6"
                fill="none"
                preserveAspectRatio="none"
                style={{ height: '6px' }}
                aria-hidden
              >
                <path
                  d="M0 5 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5"
                  stroke="#B08D3F"
                  strokeWidth="1.5"
                  strokeOpacity="0.55"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(245,239,230,0.85)' }}>
            Whether you need a detailer who understands patina, a mechanic who knows your model,
            or a transporter who treats every car like their own — this is the place to find them.
            Open to anyone who loves collector cars.
          </p>

          <div
            className="flex flex-wrap gap-6 mt-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }}
          >
            {[
              { value: 'Buyers & sellers', label: 'Free to browse', dot: '#6ab04c' },
              { value: 'Specialists', label: 'Apply to be listed', dot: '#29ABE2' },
              { value: 'Enthusiasts', label: 'All welcome', dot: '#B08D3F' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                <div>
                  <span className="text-sm font-semibold text-white">{s.value}</span>
                  <span className="text-sm" style={{ color: 'rgba(245,239,230,0.65)' }}> — {s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom feather */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.15))' }}
        />
      </div>

      {/* Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Suspense boundary required: ServicesDirectory reads URL search params */}
        <Suspense fallback={null}>
          <ServicesDirectory />
        </Suspense>
      </div>
    </div>
  );
}
