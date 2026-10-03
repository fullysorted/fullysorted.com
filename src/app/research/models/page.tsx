import type { Metadata } from "next";
import { Database } from "lucide-react";
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
      hero_photo: m.hero_photo ?? null,
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
    <div style={{ background: "var(--bg-primary)" }} className="min-h-screen">
      <ResearchNav active="models" title="Research Hub" subtitle="Know the car before you buy it." />
      <JsonLd data={itemListSchema} />

      {/* Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16">
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
