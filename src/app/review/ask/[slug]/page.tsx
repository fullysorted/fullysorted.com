import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AskForm from './AskForm';

export const metadata: Metadata = {
  title: 'Leave a review',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

async function getProvider(slug: string) {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const [row] = await sql`SELECT business_name FROM service_providers WHERE slug = ${slug} LIMIT 1`;
    return row ? { name: String(row.business_name) } : null;
  } catch {
    return null;
  }
}

export default async function AskForReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = await getProvider(slug);
  if (!provider) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold">Review</p>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-3 text-stone-900">
          How did {provider.name} do?
        </h1>
        <p className="text-stone-600 leading-relaxed mb-8">
          Reviews here come from real owners, so we check you are one first. Give us your name and email and
          we will send you a one-time link to write it. Takes two minutes.
        </p>
        <AskForm slug={slug} businessName={provider.name} />
      </div>
    </div>
  );
}
