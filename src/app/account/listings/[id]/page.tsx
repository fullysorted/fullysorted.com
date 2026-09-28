import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { resolveCurrentUser } from '@/lib/identity';
import EditListingForm, { type EditableListing } from './EditListingForm';
import { getMaxPhotos, LISTING_TIERS, type ListingTier } from '@/lib/listing-tiers';

export const metadata: Metadata = { title: 'Edit listing', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await resolveCurrentUser();
  if (!user) redirect('/sign-in?redirect_url=/account');
  if (!process.env.DATABASE_URL) notFound();

  const { id } = await params;
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  const [row] = await sql`
    SELECT id, slug, year, make, model, trim, price, mileage, transmission, engine,
           exterior_color, interior_color, city, state, zip_code,
           COALESCE(ai_description, description) AS description, provenance, status,
           photos, hero_photo, tier
    FROM listings WHERE id = ${Number(id) || 0} AND seller_id = ${user.id} LIMIT 1
  `;
  if (!row) notFound();

  const listing: EditableListing = {
    id: Number(row.id),
    slug: String(row.slug),
    title: `${row.year} ${row.make} ${row.model}`,
    status: String(row.status),
    price: row.price ? String(row.price) : '',
    mileage: row.mileage != null ? String(row.mileage) : '',
    trim: row.trim ?? '',
    transmission: row.transmission ?? '',
    engine: row.engine ?? '',
    exteriorColor: row.exterior_color ?? '',
    interiorColor: row.interior_color ?? '',
    city: row.city ?? '',
    state: row.state ?? '',
    zipCode: row.zip_code ?? '',
    description: row.description ?? '',
    provenance: row.provenance ?? '',
    photos: Array.isArray(row.photos) ? (row.photos as string[]) : [],
    heroPhoto: row.hero_photo ?? null,
    maxPhotos: getMaxPhotos((String(row.tier) in LISTING_TIERS ? String(row.tier) : 'standard') as ListingTier),
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/account" className="text-sm text-text-secondary hover:text-foreground">Back to your account</Link>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-1 text-stone-900">{listing.title}</h1>
        <p className="text-sm text-text-secondary mb-8">
          Changes go live when you save.
        </p>
        <EditListingForm listing={listing} />
      </div>
    </div>
  );
}
