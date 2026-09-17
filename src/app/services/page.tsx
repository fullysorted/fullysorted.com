import { Suspense } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  alternates: { canonical: "/services" },
  title: 'Services Directory',
  description: 'Find specialists for your collector car: inspection, transport, mechanical work, body and paint, restoration, detailing, storage, and photography, backed by owner reviews.',
};

const INK = '#12352A';
const TEAL = '#1C8C87';
const APRICOT = '#F2B27A';
const CREAM = '#F5EFE6';
const MUTED = '#6B7280';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const PROOFS = ['Free to browse', 'Specialists apply to be listed', 'Open to every owner'];

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg-primary)' }} className="min-h-screen">
      {/* Header, in the homepage language: cream, deep green type, teal eyebrow, framed photo */}
      <div className="relative overflow-hidden" style={{ background: CREAM, borderBottom: '1px solid rgba(18,53,42,0.14)' }}>
        <div aria-hidden className="absolute rounded-full pointer-events-none hidden lg:block" style={{ right: -120, top: -80, width: 420, height: 420, background: APRICOT }} />
        <div aria-hidden className="absolute rounded-full pointer-events-none hidden lg:block" style={{ right: 300, bottom: -60, width: 160, height: 160, background: TEAL, opacity: 0.18 }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
              Services directory
            </p>
            <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[16ch]" style={{ color: INK }}>
              Find the specialist your car needs.
            </h1>
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
              Whether you need a detailer who understands patina, a mechanic who knows your model,
              or a transporter who treats every car like their own, this is the place to find them.
              Open to anyone who loves collector cars.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-7">
              {PROOFS.map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ background: '#E6F3F2' }}>
                    <Check className="w-3 h-3" strokeWidth={3} style={{ color: TEAL }} />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: INK }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden" style={{ background: INK, boxShadow: '0 30px 60px -30px rgba(18,53,42,0.45)' }}>
              <Image
                src="/images/archive/porsche-904-workshop.jpg"
                alt="Porsche 904 in a workshop with its race engine on a stand"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
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
