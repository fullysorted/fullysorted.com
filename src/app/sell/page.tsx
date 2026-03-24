import SellForm from './SellForm';

export const metadata = {
  title: 'List Your Car — Fully Sorted',
  description: 'List your collector car on Fully Sorted for just $3.99. AI-powered descriptions that sound like a car person wrote them. No dealers, no commissions.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            List Your Car
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            $3.99 gets you a listing with an AI-generated description that actually
            sounds like a car person wrote it. No commissions, no dealer fees.
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
