import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, MapPin, BadgeCheck, Star } from "lucide-react";
import { getActiveGigs } from "@/lib/data/gigs";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Hire Car Specialists — Gigs Marketplace | Fully Sorted",
  description:
    "Browse fixed-price gigs from vetted collector-car specialists — inspections, detailing, transport, photography, and more. Hire a pro who actually gets it.",
  alternates: { canonical: "/gigs" },
};

export default async function GigsPage() {
  const gigs = await getActiveGigs();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Collector Car Gigs Marketplace",
    url: "https://fullysorted.com/gigs",
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: gigs.length,
      itemListElement: gigs.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: `https://fullysorted.com/gigs/${g.slug}`,
      })),
    },
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={itemList} />
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8722A" }}>Gigs Marketplace</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ color: "#1a1a18" }}>
            Hire a car specialist
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "#6b6b5e" }}>
            Fixed-price gigs from vetted pros — inspections, detailing, transport, photography, and more.
            See exactly what you get and what it costs. No agency markup.
          </p>
          <div className="mt-6">
            <Link href="/services/apply/freelancer" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#E8722A" }}>
              <Sparkles className="w-4 h-4" /> Offer your own gig <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {gigs.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>The first gigs are on their way</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              Specialists are setting up their gigs now. Are you a pro?{" "}
              <Link href="/services/apply/freelancer" className="underline" style={{ color: "#E8722A" }}>List one in five minutes.</Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gigs.map((g) => (
              <Link key={g.id} href={`/gigs/${g.slug}`}
                className="group flex flex-col rounded-2xl bg-white overflow-hidden hover:shadow-md transition-all"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="p-5 flex-1 flex flex-col">
                  {g.category && (
                    <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#E8722A" }}>{g.category}</span>
                  )}
                  <h2 className="font-bold leading-snug group-hover:text-orange-600 transition-colors" style={{ color: "#1a1a18" }}>
                    {g.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-3 text-xs" style={{ color: "#6b6b5e" }}>
                    <span className="font-semibold" style={{ color: "#1a1a18" }}>{g.provider_name}</span>
                    {g.provider_verified && <BadgeCheck className="w-3.5 h-3.5" style={{ color: "#29ABE2" }} />}
                  </div>
                  {g.provider_location && (
                    <div className="flex items-center gap-1 mt-1 text-xs" style={{ color: "#9a9a8a" }}>
                      <MapPin className="w-3 h-3" /> {g.provider_location}
                    </div>
                  )}
                </div>
                <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <span className="text-xs" style={{ color: "#9a9a8a" }}>
                    {Number(g.rating) > 0 ? (
                      <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" style={{ color: "#E8722A" }} /> {Number(g.rating).toFixed(1)}</span>
                    ) : "New"}
                  </span>
                  {g.from_price != null && (
                    <span className="text-sm" style={{ color: "#6b6b5e" }}>
                      from <strong className="price-display" style={{ color: "#1a1a18" }}>${g.from_price.toLocaleString()}</strong>
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
