import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Database } from "lucide-react";
import { getPublishedModels, parseModelSlug } from "@/lib/data/models";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Model Histories | Fully Sorted Research",
  description:
    "Deeply researched, cited histories of collectible cars — production numbers, specs, what to look for, and honest market context. Built to be the most useful page on the internet for each model.",
  alternates: { canonical: "/research/models" },
};

export default async function ModelsIndexPage() {
  const models = await getPublishedModels();

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
      <JsonLd data={itemListSchema} />

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors"
            style={{ color: "#6b6b5e" }}
          >
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8722A" }}>
            Model Database
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ color: "#1a1a18" }}>
            Collector car model histories
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "#6b6b5e" }}>
            One rich, honest page per model — production numbers, specs, what to look for, common
            problems, and market context. Every non-obvious fact is cross-checked and cited, with
            uncertainty called out rather than glossed over.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {models.length === 0 ? (
          <div
            className="rounded-2xl bg-white px-6 py-16 text-center"
            style={{ border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <Database className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>
              The first model histories are in review
            </p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              Pages are researched, cited, and human-reviewed before they go live. Check back shortly —
              the collectibles are first in the queue.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {models.map((m) => {
              const { make, modelSlug } = parseModelSlug(m.slug);
              return (
                <Link
                  key={m.id}
                  href={`/research/models/${make}/${modelSlug}`}
                  className="block rounded-2xl p-5 bg-white hover:shadow-md transition-all group"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#E8722A" }}>
                    {m.make}
                  </span>
                  <h2 className="font-bold mt-1 leading-snug group-hover:text-orange-600 transition-colors" style={{ color: "#1a1a18" }}>
                    {m.model} {m.generation && <span style={{ color: "#9a9a8a" }}>({m.generation})</span>}
                  </h2>
                  <p className="text-xs mt-1" style={{ color: "#9a9a8a" }}>
                    {[m.year_start, m.year_end].filter(Boolean).join("–")}
                    {m.production_total ? ` · ${m.production_total.toLocaleString()} built` : ""}
                  </p>
                  {m.summary && (
                    <p className="text-sm mt-3 line-clamp-3" style={{ color: "#6b6b5e" }}>
                      {m.summary.replace(/[#*]/g, "").slice(0, 160)}…
                    </p>
                  )}
                  <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: "#E8722A" }}>
                    <BookOpen className="w-3 h-3" /> Read history <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
