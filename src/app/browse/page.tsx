import type { Metadata } from "next";
import { BrowseClient } from "./BrowseClient";
import { SignupForm } from "@/components/newsletter/SignupForm";
import { getActiveVehicles } from "@/lib/data/listings";
import Link from "next/link";
import { tradeHref } from "@/lib/category-slugs";

export const metadata: Metadata = {
  alternates: { canonical: "/browse" },
  title: "Collector Cars for Sale",
  description: "Collector cars for sale from private owners and dealers, every listing marked as which, with the model history one click away.",
};

export const dynamic = 'force-dynamic';

const BEFORE_YOU_BUY = [
  { t: "Read the model history", d: "What was built, what changed year to year, and what goes wrong.", href: "/research/models", cta: "Model histories" },
  { t: "Get it inspected", d: "Someone who knows the model, looking before the wire goes.", href: tradeHref("inspection"), cta: "Find an inspector" },
  { t: "Plan the trip home", d: "Enclosed transport, quoted door to door.", href: tradeHref("transport"), cta: "Find transport" },
  { t: "Not here yet?", d: "Post what you are after. Sellers who have it write to you.", href: "/wanted/new", cta: "Post a wanted ad" },
];

export default async function BrowsePage() {
  const realListings = await getActiveVehicles();

  return (
    <>
      <BrowseClient
        initialListings={realListings}
        hasRealListings={realListings.length > 0}
      />
      {/* Before you buy: everything a car on this page might need next, on
          the site already. Server-rendered so a crawler follows it too. */}
      <section aria-labelledby="before-you-buy" className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <h2 id="before-you-buy" className="font-display text-2xl sm:text-3xl mb-5" style={{ color: "#12352A" }}>Before you buy</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BEFORE_YOU_BUY.map((c) => (
            <Link key={c.t} href={c.href} className="group block rounded-2xl p-5 bg-white transition-shadow hover:shadow-md" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
              <span className="block font-semibold" style={{ color: "#12352A" }}>{c.t}</span>
              <span className="block text-sm mt-1 leading-relaxed" style={{ color: "#6B7280" }}>{c.d}</span>
              <span className="inline-block text-sm font-semibold mt-3 group-hover:underline underline-offset-4" style={{ color: "#1C8C87" }}>{c.cta}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="rounded-3xl bg-white p-6 sm:p-8" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
          <SignupForm
            variant="band"
            source="browse"
            eyebrow="Not here yet?"
            title="Hear when the right one is listed."
            blurb="New cars for sale near you, or in the marques you care about. Add a ZIP to keep it local."
            defaults={["cars"]}
          />
        </div>
      </section>
    </>
  );
}
