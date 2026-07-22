import type { Metadata } from "next";
import Image from "next/image";
import { ValueGuideClient } from "./ValueGuideClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { BarChart3, TrendingUp, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Value Guide — What Is Your Classic Car Worth?",
  description:
    "Get real pricing data for any collector car. Backed by aggregated market comps from across the collector-car world — not ask prices.",
};

const STATS = [
  { icon: Database, label: "Sold prices, not ask prices", value: "Real comps" },
  { icon: TrendingUp, label: "Across the collector market", value: "Aggregated data" },
  { icon: BarChart3, label: "Refreshed regularly", value: "Up to date" },
];

const valueGuideSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fully Sorted Value Guide",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://fullysorted.com/value-guide",
  description:
    "Comp-backed valuations for collector cars. Enter a year, make, and model to see low, average, median, and high sale prices from real market comparables, with the underlying sales shown.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": "https://fullysorted.com/#organization" },
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Fully Sorted collector-car sale comparables",
  description:
    "Aggregated publicly available factual sale results (year, make, model, sale price, date, venue) for collector cars, used to produce comp-backed valuations. Factual data only; no third-party photos or descriptions are republished.",
  url: "https://fullysorted.com/value-guide",
  creator: { "@id": "https://fullysorted.com/#organization" },
  isAccessibleForFree: true,
};

export default function ValueGuidePage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <JsonLd data={[valueGuideSchema, datasetSchema]} />

      {/* Photo hero — classic sports car under a racing-green overlay */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
        />
        <Image
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
          alt="Classic sports car"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(15,32,50,0.62), rgba(15,32,50,0.82))" }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 speed-lines opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 mb-5">
            <span className="flex gap-1" aria-hidden="true">
              {["#1E6091", "#1E6091", "#B08D3F"].map((c) => (
                <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </span>
            <span className="text-stone-200 text-xs font-bold uppercase tracking-widest">
              Value Guide
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-6xl leading-[1.05] mb-4">
            What is your
            <br />
            <span className="text-gold">collector car worth?</span>
          </h1>
          <p className="text-lg max-w-2xl mb-10 text-stone-200">
            Real auction results, not ask prices. Search by year, make, and
            model to see what cars like yours actually sell for.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {STATS.map(({ icon: Icon, label, value }, i) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 border border-white/20">
                  <Icon className="w-4 h-4" style={{ color: ["#6ab04c", "#29ABE2", "#B08D3F"][i % 3] }} />
                </div>
                <div>
                  <p className="text-lg font-black leading-tight text-white">
                    {value}
                  </p>
                  <p className="text-xs text-stone-300">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive client component */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ValueGuideClient />
      </section>
    </main>
  );
}
