import ServicesDirectory from './ServicesDirectory';

export const metadata = {
  title: 'Services Directory — Fully Sorted',
  description: 'Vetted specialists for your collector car: photographers, detailers, mechanics, transporters, inspectors, restorers & more. San Diego and beyond.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services Directory
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl">
            Every specialist here has been vetted by me or trusted members of the community.
            These are the people I call when my own cars need work.
          </p>
        </div>
      </section>

      {/* Directory */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <ServicesDirectory />
      </section>
    </main>
  );
}
