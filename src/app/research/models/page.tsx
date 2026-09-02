import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Database } from "lucide-react";
import { getPublishedModelsWithMetaResult } from "@/lib/data/models";
import { ModelsDirectory } from "./ModelsDirectory";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Model Histories",
  description:
    "Researched, cited histories of collectible cars grouped by make: production numbers, specs, what to look for and honest market context, with disputed figures flagged rather than smoothed over.",
  alternates: { canonical: "/research/models" },
};

export default async function ModelsIndexPage() {
  // Use the result-carrying variant: an empty list from a failed query must not
  // be reported to readers as an editorial queue (see src/lib/data/models.ts).
  const { rows: models, ok: modelsOk } = await getPublishedModelsWithMetaResult();
  const items = models.map((m) => ({
    id: m.id, slug: m.slug, make: m.make, model: m.model, generation: m.generation,
    year_start: m.year_start, year_end: m.year_end, production_total: m.production_total,
    summary: m.summary, overall_confidence: m.overall_confidence,
    source_count: m.source_count, claim_count: m.claim_count, disputed_count: m.disputed_count,
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Collector Car Model Histories",
    description:
      "Researched, cited histories of collectible cars by model and generation.",
    url: "https://fullysorted.com/research/models",
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: models.length,
      itemListElement: models.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: [m.make, m.model, m.generation && `(${m.generation})`].filter(Boolean).join(" "),
        url: `https://fullysorted.com/research/models/${m.slug}`,
      })),
    },
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="models" />
      <JsonLd data={itemListSchema} />

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link href="/research" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6b6b5e" }}>Model histories</p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4" style={{ color: "#1a1a18" }}>
            Collector car model histories, by make<span style={{ color: "#B08D3F" }}>.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "#6b6b5e" }}>
            One page per model: production numbers, specs, what to look for, common problems and market
            context. Every non-obvious fact is cross-checked and cited. Where the sources disagree, we say so
            instead of picking a number.
          </p>
          <Link href="/research/compare" className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 hover:opacity-70 transition-opacity" style={{ color: "#1E6091" }}>
            Compare two models head to head <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Directory */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {items.length === 0 && !modelsOk ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <Database className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>The model histories could not be loaded</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              This is a fault at our end, not an empty database. The pages are
              published and will render again once the source is reachable.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <Database className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>The first model histories are in review</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              Pages are researched, cited and human-reviewed before they go live. Check back shortly. The collectibles are first in the queue.
            </p>
          </div>
        ) : (
          <ModelsDirectory items={items} />
        )}
      </div>
    </div>
  );
}
