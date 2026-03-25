import type { Metadata } from "next";
import { BrowseClient } from "./BrowseClient";
import { sampleVehicles, type Vehicle } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "Browse Collector Cars | Fully Sorted",
  description: "Browse collector cars for sale — Muscle, European, JDM, Vintage, Modern Classic, and more. No dealers, no commissions. Peer-to-peer.",
};

async function getRealListings(): Promise<Vehicle[]> {
  if (!process.env.DATABASE_URL) return [];

  try {
    const { getDb, schema } = await import('@/lib/db');
    const { eq, desc } = await import('drizzle-orm');
    const db = getDb();

    const rows = await db
      .select()
      .from(schema.listings)
      .where(eq(schema.listings.status, 'active'))
      .orderBy(desc(schema.listings.createdAt))
      .limit(100);

    return rows.map((listing): Vehicle => {
      const trim = listing.trim ? ` ${listing.trim}` : '';
      const title = `${listing.year} ${listing.make} ${listing.model}${trim}`.trim();
      const photos: string[] = (listing.photos as string[]) ?? [];
      const imageUrl = listing.heroPhoto || photos[0] || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80';
      const location = [listing.city, listing.state].filter(Boolean).join(', ') || 'Location not specified';

      return {
        id: String(listing.id),
        title,
        year: listing.year,
        make: listing.make,
        model: listing.model,
        variant: listing.trim ?? undefined,
        price: listing.price,
        mileage: listing.mileage ?? 0,
        transmission: listing.transmission ?? 'Unknown',
        engine: listing.engine ?? 'Unknown',
        exteriorColor: listing.exteriorColor ?? 'Unknown',
        interiorColor: listing.interiorColor ?? 'Unknown',
        condition: 'Good',
        originality: 'Original',
        location,
        category: listing.category ?? 'Other',
        photoCount: photos.length || 1,
        imageUrl,
        saves: 0,
        comments: 0,
        featured: listing.featured ?? false,
        sortedPrice: listing.sortedPrice ?? false,
        description: (listing.aiDescription || listing.description) ?? '',
        chrisTake: listing.chrisTake ?? '',
        compAvg: listing.compAvg ?? listing.price,
        compCount: listing.compCount ?? 0,
        compSource: 'Fully Sorted',
        highlights: (listing.highlights as string[]) ?? [],
        status: 'active',
        listedAt: listing.createdAt?.toISOString() ?? new Date().toISOString(),
        slug: listing.slug,
      };
    });
  } catch (e) {
    console.error('Failed to fetch real listings:', e);
    return [];
  }
}

export default async function BrowsePage() {
  const realListings = await getRealListings();

  // Real listings first, sample cars fill the rest until you have enough real ones
  const allListings = [
    ...realListings,
    ...sampleVehicles.filter(v => v.status === 'active'),
  ];

  return (
    <BrowseClient
      initialListings={allListings}
      hasRealListings={realListings.length > 0}
    />
  );
}
