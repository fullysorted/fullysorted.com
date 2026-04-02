import SellForm from './SellForm';

export const metadata = {
  title: 'List Your Car — Fully Sorted',
  description: 'List your collector car on Fully Sorted. First 100 listings are FREE. AI-powered descriptions, no commissions, no dealer fees.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Early adopter badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-300 text-sm font-semibold">🎉 Early Adopter Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            List Your Car
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-4">
            The first 100 providers to join and the first 100 cars listed are <strong className="text-white">completely free</strong>.
            After that, choose from our Simple, Featured, or Premium plans.
          </p>
          <p className="text-stone-400 text-sm">
            No commissions. No dealer fees. Ever.
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
