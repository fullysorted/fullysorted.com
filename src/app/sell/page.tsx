import SellForm from './SellForm';
import type { Metadata } from 'next';
import { Tag, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'List Your Car — Fully Sorted',
  description: 'List your collector car on Fully Sorted for just $3.99. AI-powered descriptions that sound like a car person wrote them. No dealers, no commissions.',
};

const PERKS = [
  {
    icon: Tag,
    label: '$3.99 flat fee',
    desc: 'No commissions. No percentage of sale. Just a flat rate.',
  },
  {
    icon: Zap,
    label: 'AI-written description',
    desc: 'Sounds like a car person wrote it — because the training data came from one.',
  },
  {
    icon: ShieldCheck,
    label: 'Stays live until sold',
    desc: 'No expiring listings. Your car stays up until you take it down.',
  },
];

export default function SellPage() {
  return (
    <main className="min-h-screen" style={{ background: '#faf9f7' }}>

      {/* Light header banner — matches sitewide pattern */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

          {/* Eyebrow */}
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#E8722A' }}
          >
            List Your Car
          </p>

          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: '#1a1a18' }}>
            No middlemen.
            <br />
            <span style={{ color: '#E8722A' }}>No commissions.</span>
          </h1>

          <p className="text-lg max-w-2xl" style={{ color: '#6b6b5e' }}>
            $3.99 gets your car in front of serious collectors with an
            AI-generated description that actually sounds like a car person wrote
            it. You keep every dollar of the sale.
          </p>

          {/* Perks row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            {PERKS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(232,114,42,0.15)' }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: '#E8722A' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1a1a18' }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6b6b5e' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SellForm />
      </section>
    </main>
  );
}
