import { FoundingBand } from "@/components/home/FoundingBand";
import { Hero, type FeaturedModel } from "@/components/home/Hero";
import { getPublishedModels } from "@/lib/data/models";
import { toSearchModels, type SearchModel } from "@/lib/search-intent";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { ResearchPicks, type ResearchPick } from "@/components/home/ResearchPicks";
import { ValueGuidePreview } from "@/components/home/ValueGuidePreview";
import { CTASection } from "@/components/home/CTASection";
import { WantedStrip } from "@/components/home/WantedStrip";
import { getOpenWantedPosts } from "@/lib/wanted";
import type { Vehicle } from "@/lib/sample-data";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";

// Was `force-dynamic`, which re-queried the database on every single homepage
// hit and opted the most-visited page on the site out of every caching layer.
// Nothing here is per-user; a five-minute window is plenty fresh for a
// marketing page that shows at most eight listings.
import type { Metadata } from "next";

// The root layout no longer sets a site-wide canonical (it was being inherited
// by every page), so the homepage declares its own.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export const revalidate = 300;

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
      .limit(8);

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
        sellerType: listing.sellerType === 'dealer' ? 'dealer' : 'private',
        dealerName: listing.dealerName ?? null,
        dealerLicense: listing.dealerLicense ?? null,
        dealerFeesNote: listing.dealerFeesNote ?? null,
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

/**
 * "This week's car" for the hero: one published model history that has a
 * photo, chosen by ISO week so it changes on its own and every visitor sees
 * the same car all week. No DB, or no photos yet: the hero shows its stock
 * photograph and no card. Never a made-up number.
 */
type HomeResearch = { featured: FeaturedModel | null; picks: ResearchPick[]; total: number; searchModels: SearchModel[] };

/**
 * One read of the published model histories feeds two things:
 * - "This week's car" in the hero: one model with a photo, chosen by ISO week
 *   so it changes on its own and every visitor sees the same car all week.
 * - Research picks lower down: six more models with photos, rotating from the
 *   same week offset so the row changes too and never repeats the hero.
 * No DB, or no photos yet: the hero shows its stock photograph and no card,
 * and the research section stays off the page. Never a made-up number.
 */
async function getHomeResearch(): Promise<HomeResearch> {
  const models = await getPublishedModels();
  // The same read feeds the search box suggestions: five small fields per model.
  const searchModels = toSearchModels(models);
  const withPhoto = models.filter((m) => m.hero_photo);
  if (withPhoto.length === 0) return { featured: null, picks: [], total: models.length, searchModels };
  const now = new Date();
  const week = Math.floor((now.getTime() - Date.UTC(now.getUTCFullYear(), 0, 1)) / 604_800_000);
  const start = (now.getUTCFullYear() * 53 + week) % withPhoto.length;
  const m = withPhoto[start];
  const featured: FeaturedModel = {
    slug: m.slug,
    make: m.make,
    model: m.model,
    generationCode: m.generation_code,
    yearStart: m.year_start,
    yearEnd: m.year_end,
    productionTotal: m.production_total,
    heroPhoto: m.hero_photo,
    heroPhotoCredit: m.hero_photo_credit,
    index: models.findIndex((x) => x.slug === m.slug) + 1,
  };
  const picks: ResearchPick[] = [];
  for (let i = 1; i < withPhoto.length && picks.length < 6; i++) {
    const p = withPhoto[(start + i) % withPhoto.length];
    picks.push({
      slug: p.slug,
      make: p.make,
      model: p.model,
      yearStart: p.year_start,
      yearEnd: p.year_end,
      heroPhoto: p.hero_photo as string,
      summary: p.summary,
    });
  }
  return { featured, picks, total: models.length, searchModels };
}

export default async function Home() {
  // The wanted strip is decoration here: if its read fails the homepage carries on without it.
  const [listings, research, wanted] = await Promise.all([
    getActiveListings(),
    getHomeResearch(),
    getOpenWantedPosts(3).catch(() => []),
  ]);

  return (
    <>
      {/* Honest about being early, without telling anyone to come back later */}
      <FoundingBand />
      {/* Services first — the hub is the front door */}
      <Hero featured={research.featured} searchModels={research.searchModels} />
      <ServicesSection />
      {/* Marketplace second — one strong section */}
      <FeaturedListings listings={listings} />
      {/* Wanted: what members are looking for, some with a finder's fee */}
      <WantedStrip posts={wanted} />
      {/* Market intelligence — the data moat. Hidden until the comp set can
          answer an ordinary search; see src/lib/features.ts. */}
      {VALUE_GUIDE_PUBLIC && <ValueGuidePreview />}
      {/* Research: model histories, the part of the hub that is alive today.
          MarketMovers (sample data) came off the homepage 2026-09-16. */}
      <ResearchPicks picks={research.picks} total={research.total} />
      <CTASection />
    </>
  );
}
