import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sampleVehicles } from "@/lib/sample-data";
import { ListingDetail } from "./ListingDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vehicle = sampleVehicles.find((v) => v.slug === id);
  if (!vehicle) return { title: "Listing Not Found" };

  return {
    title: vehicle.title,
    description: `${vehicle.title} — ${vehicle.condition} condition, ${vehicle.mileage.toLocaleString()} miles, ${vehicle.transmission}. ${vehicle.location}. ${vehicle.description}`,
    openGraph: {
      title: `${vehicle.title} | Fully Sorted`,
      description: vehicle.description,
      images: [{ url: vehicle.imageUrl, width: 800, height: 500, alt: vehicle.title }],
      type: "website",
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const { id } = await params;
  const vehicle = sampleVehicles.find((v) => v.slug === id);
  if (!vehicle) notFound();

  /* Schema.org JSON-LD for AI agents and search engines */
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
      availability: vehicle.status === "active"
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
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
