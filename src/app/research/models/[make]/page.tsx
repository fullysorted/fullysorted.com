import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Database } from "lucide-react";
import { getPublishedModelsWithMetaResult } from "@/lib/data/models";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";
import { ModelCard, MAKE_PAGE_MIN, type ModelCardItem } from "@/components/research/ModelCard";
import { MarqueNotice } from "@/components/research/MarqueNotice";

export const revalidate = 3600;

interface Props {
  params: Promise<{ make: string }>;
}

async function loadMake(makeSlug: string) {
  const { rows, ok } = await getPublishedModelsWithMetaResult();
  const slug = makeSlug.toLowerCase();
  const items: ModelCardItem[] = rows
    .filter((m) => m.slug.split("/")[0].toLowerCase() === slug)
    .map((m) => ({
      id: m.id, slug: m.slug, make: m.make, model: m.model, generation: m.generation,
      year_start: m.year_start, year_end: m.year_end, production_total: m.production_total,
      summary: m.summary, overall_confidence: m.overall_confidence,
      source_count: m.source_count, claim_count: m.claim_count, disputed_count: m.disputed_count,
    }))
    .sort((a, b) => (a.year_start ?? 9999) - (b.year_start ?? 9999) || a.model.localeCompare(b.model));
  return { items, ok, make: items[0]?.make ?? null };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { make: makeSlug } = await params;
  const { items, ok, make } = await loadMake(makeSlug);
  if (!make) return ok ? { title: "Make Not Found" } : { title: "Model Histories Temporarily Unavailable", robots: { index: false, follow: true } };
  const years = yearSpan(items);
  const desc = `${items.length} researched, cited ${make} model ${items.length === 1 ? "history" : "histories"}${years ? ` from ${years}` : ""}: production numbers, specs, what to look for and market context, with disputed figures flagged.`;
  return {
    title: `${make} Model Histories`,
    description: desc,
    alternates: { canonical: `/research/models/${makeSlug.toLowerCase()}` },
    // A make with one or two pages is a thin listing; keep it out of the index
    // until it earns a place. The sitemap applies the same threshold.
    robots: items.length >= MAKE_PAGE_MIN ? undefined : { index: false, follow: true },
    openGraph: { type: "website", title: `${make} Model Histories`, description: desc, url: `https://fullysorted.com/research/models/${makeSlug.toLowerCase()}` },
  };
}

function yearSpan(items: ModelCardItem[]): string | null {
  const starts = items.map((m) => m.year_start).filter((y): y is number => typeof y === "number");
  const ends = items.map((m) => m.year_end ?? m.year_start).filter((y): y is number => typeof y === "number");
  if (!starts.length) return null;
  return `${Math.min(...starts)} to ${Math.max(...ends)}`;
}

export default async function MakePage({ params }: Props) {
  const { make: makeSlug } = await params;
  const { items, ok, make } = await loadMake(makeSlug);

  if (!make && !ok) {
    return (
      <div style={{ background: "#faf9f7" }} className="min-h-screen">
        <ResearchNav active="models" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <Database className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>The model histories could not be loaded</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>This is a fault at our end, not an empty database. Reloading in a few minutes will usually be enough.</p>
          </div>
        </div>
      </div>
    );
  }
  if (!make) notFound();

  const canonicalSlug = makeSlug.toLowerCase();
  const years = yearSpan(items);
  const first = items[0];
  const last = items[items.length - 1];
  const disputed = items.reduce((n, m) => n + m.disputed_count, 0);
  const sources = items.reduce((n, m) => n + m.source_count, 0);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${make} Model Histories`,
    url: `https://fullysorted.com/research/models/${canonicalSlug}`,
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    about: { "@type": "Organization", name: make },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: [m.make, m.model, m.generation && m.generation.toLowerCase() !== m.model.toLowerCase() && `(${m.generation})`].filter(Boolean).join(" "),
        url: `https://fullysorted.com/research/models/${m.slug}`,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Research", item: "https://fullysorted.com/research" },
      { "@type": "ListItem", position: 2, name: "Model Histories", item: "https://fullysorted.com/research/models" },
      { "@type": "ListItem", position: 3, name: make, item: `https://fullysorted.com/research/models/${canonicalSlug}` },
    ],
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="models" />
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />

      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link href="/research/models" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
            <ArrowLeft className="w-4 h-4" /> Model Histories
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6b6b5e" }}>Model histories by make</p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4" style={{ color: "#1a1a18" }}>
            {make}<span style={{ color: "#B08D3F" }}>.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "#6b6b5e" }}>
            {items.length === 1
              ? `One researched ${make} history so far${years ? `, covering ${years}` : ""}.`
              : `${items.length} researched ${make} histories${years ? ` spanning ${years}` : ""}, from the ${first.model} to the ${last.model}.`}{" "}
            {sources > 0 && `${sources.toLocaleString()} cited sources in all`}
            {disputed > 0 && `, with ${disputed} ${disputed === 1 ? "claim" : "claims"} where those sources disagree and we say so`}
            {(sources > 0 || disputed > 0) && "."}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm font-semibold">
            <Link href={`/services?q=${encodeURIComponent(make)}`} className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "#1E6091" }}>
              Specialists who work on {make} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/browse?q=${encodeURIComponent(make)}`} className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "#1E6091" }}>
              {make} for sale <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((m) => (
            <ModelCard key={m.id} m={m} showMake={false} />
          ))}
        </div>
        <MarqueNotice make={make} className="mt-12 max-w-2xl" />
      </div>
    </div>
  );
}
