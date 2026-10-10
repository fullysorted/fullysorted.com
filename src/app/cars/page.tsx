import type { Metadata } from "next";
import { BrowseClient } from "./BrowseClient";
import { getActiveVehicles } from "@/lib/data/listings";
import Link from "next/link";
import { tradeHref } from "@/lib/category-slugs";
import { ForSaleNav } from "@/components/marketplace/ForSaleNav";
import { isProjectCategory } from "@/lib/listing-categories";

export const metadata: Metadata = {
  alternates: { canonical: "/cars" },
  title: "Collector Cars for Sale from Private Owners and Dealers",
  description: "Collector cars for sale from private owners and dealers, every listing marked private or dealer, with the model history, an inspector and transport one click away.",
};

export const dynamic = 'force-dynamic';

// 2026-10-09: the four next steps sit ABOVE the grid now, as a compact strip.
// They are the Services -> Marketplace loop on one screen, and the thing no
// other classifieds page has. Server-rendered so a crawler follows them.
const BEFORE_YOU_BUY = [
  { t: "Read the model history", d: "What was built, what changed year to year, and what goes wrong.", href: "/research/models", cta: "Model histories" },
  { t: "Get it inspected", d: "Someone who knows the model, looking before the wire goes.", href: tradeHref("inspection"), cta: "Find an inspector" },
  { t: "Plan the trip home", d: "Enclosed transport, quoted door to door.", href: tradeHref("transport"), cta: "Find transport" },
  { t: "Not here yet?", d: "Post what you are after. Sellers who have it write to you.", href: "/wanted/new", cta: "Post a wanted ad" },
];

export default async function CarsPage() {
  const realListings = await getActiveVehicles();

  // ItemList of the live cars, so the page itself (not only each listing)
  // carries structured data. Each listing page already emits a Car entity;
  // this points at those URLs rather than repeating them.
  const itemList = realListings.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Collector cars for sale on Fully Sorted",
    numberOfItems: realListings.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: realListings.slice(0, 100).map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.title,
      url: `https://fullysorted.com/listings/${v.slug}`,
    })),
  } : null;

  const beforeYouBuy = (
    <section aria-labelledby="before-you-buy" className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
      <h2 id="before-you-buy" className="text-[11px] uppercase mb-3" style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: "#1C8C87" }}>Before you buy</h2>
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {BEFORE_YOU_BUY.map((c) => (
          <Link key={c.t} href={c.href} className="group block rounded-xl px-4 py-3 bg-white transition-shadow hover:shadow-md" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
            <span className="block text-sm font-semibold" style={{ color: "#12352A" }}>{c.t}</span>
            <span className="hidden sm:block text-xs mt-0.5 leading-relaxed" style={{ color: "#6B7280" }}>{c.d}</span>
            <span className="inline-block text-xs font-semibold mt-1.5 group-hover:underline underline-offset-4" style={{ color: "#1C8C87" }}>{c.cta}</span>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
      <BrowseClient
        initialListings={realListings}
        hasRealListings={realListings.length > 0}
        topSlot={beforeYouBuy}
      />
      {/* The rest of the For Sale section lives below the cars, not above
          them: cars are the main event, the tab row is the way on. */}
      <section aria-labelledby="also-for-sale" className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <h2 id="also-for-sale" className="sr-only">Also for sale</h2>
        <ForSaleNav
          current="cars"
          counts={{ cars: realListings.length, projects: realListings.filter((v) => isProjectCategory(v.category)).length }}
        />
      </section>
    </>
  );
}
