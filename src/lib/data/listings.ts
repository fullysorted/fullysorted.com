import type { Vehicle } from '@/lib/sample-data';

// Active marketplace listings as Vehicle rows, newest first. Shared by
// /browse, /projects and the /for-sale hub so all three read the same cars.
// Returns [] with no database (build time) or on error; callers that need to
// tell an outage from an empty market should not rely on this.
export async function getActiveVehicles(limit = 100): Promise<Vehicle[]> {
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
      .limit(limit);

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
        condition: '',
        originality: '',
        location,
        category: listing.category ?? 'Other',
        photoCount: photos.length || 1,
        imageUrl,
        photos,
        saves: 0,
        comments: 0,
        featured: listing.featured ?? false,
        sortedPrice: listing.sortedPrice ?? false,
        sellerType: listing.sellerType === 'dealer' ? 'dealer' : 'private',
        dealerName: listing.dealerName ?? null,
        dealerLicense: listing.dealerLicense ?? null,
        dealerFeesNote: listing.dealerFeesNote ?? null,
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
