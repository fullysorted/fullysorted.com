import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, MapPin, BadgeCheck, Star } from "lucide-react";
import { getActiveGigs } from "@/lib/data/gigs";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Hire Car Specialists — Gigs Marketplace | Fully Sorted",
  description:
    "Browse fixed-price gigs from owner-reviewed collector-car specialists — inspections, detailing, transport, photography, and more. Hire a pro who actually gets it.",
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
      <div className="relative overflow-hidden" style={{ background: "#12271C" }}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80"
          alt="Specialist working in a vintage car garage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(rgba(15,32,50,0.6), rgba(15,32,50,0.82))" }} />
        <div aria-hidden className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div aria-hidden className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1E6091 35%, #B08D3F 65%, transparent)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ border: "1px solid rgba(255,255,255,0.28)", background: "rgba(30,96,145,0.35)" }}>
            <span aria-hidden className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            Gigs Marketplace
          </span>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl mt-4 mb-4 text-white" style={{ lineHeight: 1.08 }}>
            Hire a car specialist
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.88)" }}>
            Fixed-price gigs from top-rated pros — inspections, detailing, transport, photography, and more.
            See exactly what you get and what it costs. No agency markup.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/services/apply/freelancer" className="inline-flex items-center gap-1.5 rounded-xl px-4 h-11 text-sm font-bold bg-white text-accent shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <Sparkles className="w-4 h-4" style={{ color: "#B08D3F" }} /> Offer your own gig <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/guide" className="inline-flex items-center gap-1.5 rounded-xl px-4 h-11 text-sm font-bold border border-white/40 text-white hover:bg-white/10 transition-all">
              How to get booked
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
              <Link href="/services/apply/freelancer" className="underline text-accent hover:text-accent-hover">List one in five minutes.</Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gigs.map((g) => (
              <Link key={g.id} href={`/gigs/${g.slug}`}
                className="group flex flex-col rounded-2xl bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ border: "1px solid rgba(0,0,0,0.10)" }}>
                <div className="p-5 flex-1 flex flex-col">
                  {g.category && (
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 text-accent">{g.category}</span>
                  )}
                  <h2 className="font-bold leading-snug group-hover:text-accent transition-colors" style={{ color: "#1a1a18" }}>
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
                      <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" style={{ color: "#B08D3F" }} /> {Number(g.rating).toFixed(1)}</span>
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
