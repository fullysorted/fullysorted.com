import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { MarketMovers } from "@/components/home/MarketMovers";
import { ValueGuidePreview } from "@/components/home/ValueGuidePreview";
import { CTASection } from "@/components/home/CTASection";
import type { Vehicle } from "@/lib/sample-data";

export const dynamic = 'force-dynamic';

async function getActiveListings(): Promise<Vehicle[]> {
  if (!process.env.DATABASE_URL) return [];

  try {
    const { getDb, schema } = await import("@/lib/db");
    const { eq, desc } = await import("drizzle-orm");
    const db = getDb();

    const rows = await db
      .select()
      .from(schema.listings)
      .where(eq(schema.listings.status, "active"))
      .orderBy(desc(schema.listings.publishedAt))
      .limit(20);

    return rows.map((listing): Vehicle => {
      const trim = listing.trim ? ` ${listing.trim}` : "";
      const title = `${listing.year} ${listing.make} ${listing.model}${trim}`.trim();
      const photos: string[] = (listing.photos as string[]) ?? [];
      const imageUrl =
        listing.heroPhoto ||
        photos[0] ||
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80";
      const location =
        [listing.city, listing.state].filter(Boolean).join(", ") ||
        "Location not specified";

      return {
        id: String(listing.id),
        title,
        year: listing.year,
        make: listing.make,
        model: listing.model,
        variant: listing.trim ?? undefined,
        price: listing.price,
        mileage: listing.mileage ?? 0,
        transmission: listing.transmission ?? "Unknown",
        engine: listing.engine ?? "Unknown",
        exteriorColor: listing.exteriorColor ?? "Unknown",
        interiorColor: listing.interiorColor ?? "Unknown",
        condition: "Good",
        originality: "Original",
        location,
        category: listing.category ?? "Other",
        photoCount: photos.length || 1,
        imageUrl,
        photos,
        saves: 0,
        comments: 0,
        featured: listing.featured ?? false,
        sortedPrice: listing.sortedPrice ?? false,
        description: (listing.aiDescription || listing.description) ?? "",
        chrisTake: listing.chrisTake ?? "",
        compAvg: listing.compAvg ?? listing.price,
        compCount: listing.compCount ?? 0,
        compSource: "Fully Sorted",
        highlights: (listing.highlights as string[]) ?? [],
        status: "active",
        listedAt: listing.createdAt?.toISOString() ?? new Date().toISOString(),
        slug: listing.slug,
      };
    });
  } catch (e) {
    console.error("Failed to fetch listings for homepage:", e);
    return [];
  }
}

export default async function Home() {
  const listings = await getActiveListings();

  return (
    <>
      <Hero listings={listings} />
      <ServicesSection />
      <FeaturedListings listings={listings} />
      <ValueGuidePreview />
      <MarketMovers />
      <CTASection />
    </>
  );
}
