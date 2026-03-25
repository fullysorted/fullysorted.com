import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sampleVehicles, type Vehicle } from "@/lib/sample-data";
import { ListingDetail } from "./ListingDetail";

interface Props {
  params: Promise<{ id: string }>;
}

/** Convert a DB listing record into the Vehicle shape ListingDetail expects */
function dbListingToVehicle(listing: any): Vehicle {
  const make = listing.make ?? '';
  const model = listing.model ?? '';
  const year = listing.year ?? 0;
  const trim = listing.trim ? ` ${listing.trim}` : '';
  const title = `${year} ${make} ${model}${trim}`.trim();

  const photos: string[] = listing.photos ?? [];
  const imageUrl = listing.heroPhoto || photos[0] || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80';

  const city = listing.city ?? '';
  const state = listing.state ?? '';
  const location = [city, state].filter(Boolean).join(', ') || 'Location not specified';

  return {
    id: String(listing.id),
    title,
    year,
    make,
    model,
    variant: listing.trim ?? undefined,
    price: listing.price ?? 0,
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
    description: listing.aiDescription || listing.description || '',
    chrisTake: listing.chrisTake ?? '',
    compAvg: listing.compAvg ?? listing.price ?? 0,
    compCount: listing.compCount ?? 0,
    compSource: 'Fully Sorted',
    highlights: listing.highlights ?? [],
    status: listing.status === 'active' ? 'active' : 'active',
    listedAt: listing.createdAt ? new Date(listing.createdAt).toISOString() : new Date().toISOString(),
    slug: listing.slug,
  };
}

async function getListing(slug: string): Promise<Vehicle | null> {
  // 1. Try DB first (real listings)
  if (process.env.DATABASE_URL) {
    try {
      const { getDb, schema } = await import('@/lib/db');
      const { eq } = await import('drizzle-orm');
      const db = getDb();
      const [dbListing] = await db
        .select()
        .from(schema.listings)
        .where(eq(schema.listings.slug, slug))
        .limit(1);
      if (dbListing) return dbListingToVehicle(dbListing);
    } catch (e) {
      console.error('DB lookup failed, falling back to sample data:', e);
    }
  }

  // 2. Fall back to sample data
  return sampleVehicles.find((v) => v.slug === slug) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vehicle = await getListing(id);
  if (!vehicle) return { title: "Listing Not Found" };

  return {
    title: `${vehicle.title} | Fully Sorted`,
    description: `${vehicle.title} — ${vehicle.condition} condition, ${vehicle.mileage.toLocaleString()} miles, ${vehicle.transmission}. ${vehicle.location}.`,
    openGraph: {
      title: `${vehicle.title} | Fully Sorted`,
      description: vehicle.description?.slice(0, 200) ?? '',
      images: [{ url: vehicle.imageUrl, width: 800, height: 500, alt: vehicle.title }],
      type: "website",
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const { id } = await params;
  const vehicle = await getListing(id);
  if (!vehicle) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: vehicle.title,
    description: vehicle.description,
    image: vehicle.imageUrl,
    itemCondition: "https://schema.org/UsedCondition",
    priceCurrency: "USD",
    price: vehicle.price.toString(),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage.toString(),
      unitCode: "SMI",
    },
    vehicleEngine: { "@type": "EngineSpecification", name: vehicle.engine },
    vehicleTransmission: vehicle.transmission,
    color: vehicle.exteriorColor,
    vehicleInteriorColor: vehicle.interiorColor,
    brand: { "@type": "Brand", name: vehicle.make },
    model: vehicle.model,
    vehicleModelDate: vehicle.year.toString(),
    offers: {
      "@type": "Offer",
      price: vehicle.price.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ListingDetail vehicle={vehicle} />
    </>
  );
}
