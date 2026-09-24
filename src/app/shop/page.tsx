import type { Metadata } from "next";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SHOP_PRODUCTS, SHOP_CATEGORIES } from "@/lib/data/shopProducts";
import { AFFILIATE_DISCLOSURE, affiliateHref } from "@/lib/affiliate";
import { Suspense } from "react";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Garage Essentials: Gear Worth Owning",
  description:
    "A curated, editorial pick of the detailing, tools, storage, and reference gear serious collector-car owners actually use. Chosen for the recommendation, not the catalog.",
  alternates: { canonical: "/shop" },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://fullysorted.com/shop#collection",
  name: "Garage Essentials",
  description:
    "A curated, editorial selection of the gear serious collector-car owners actually use: detailing, tools, storage, and reference.",
  url: "https://fullysorted.com/shop",
  isPartOf: { "@id": "https://fullysorted.com/#website" },
  hasPart: {
    "@type": "ItemList",
    numberOfItems: SHOP_PRODUCTS.length,
    itemListElement: SHOP_PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.blurb,
        category: SHOP_CATEGORIES.find((c) => c.key === p.category)?.label,
        url: affiliateHref(p),
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
    { "@type": "ListItem", position: 2, name: "Garage Essentials", item: "https://fullysorted.com/shop" },
  ],
};

export default function ShopPage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(18,53,42,0.14)" }}>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: "0.12em", color: "#1C8C87" }}>
            Garage essentials
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[16ch]" style={{ color: "#12352A" }}>
            The gear we&rsquo;d put in our own garage.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "#6B7280" }}>
            A short list of the detailing supplies, tools and storage kit we would buy again. Not a store.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Disclosure — honest, quiet, up front */}
        <div
          className="flex items-start gap-3 rounded-xl px-4 py-3 mb-10"
          style={{ backgroundColor: "rgba(30,96,145,0.05)", border: "1px solid rgba(30,96,145,0.16)" }}
        >
          <Info className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#1E6091" }} />
          <p className="text-xs leading-relaxed text-text-secondary">{AFFILIATE_DISCLOSURE}</p>
        </div>

        <Suspense fallback={null}>
            <ShopClient />
          </Suspense>

        {/* Editorial close */}
        <div className="mt-4 rounded-2xl bg-white border border-border p-6 sm:p-8 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-2">
            Everything here, we&rsquo;d actually use
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mb-6">
            This list is curated and grows slowly on purpose: a specific product only makes it in when it earns the
            recommendation. Looking for a specialist to do the work instead? That&rsquo;s what the directory is for.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
          >
            Find a specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
