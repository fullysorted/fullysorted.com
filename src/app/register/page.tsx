import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, Hash } from "lucide-react";
import { getRegisterModels, type RegisterModelSummary } from "@/lib/data/register";
import { formatEventDate, coverageLine } from "@/lib/register/chassis";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Chassis Register",
  description:
    "Individual collector cars by chassis number: every auction appearance, listing and published record with a link to its source. Gaps are stated, conflicts are shown, owners are never named.",
  alternates: { canonical: "/register" },
};

function modelName(m: RegisterModelSummary): string {
  return [m.make, m.model].filter(Boolean).join(" ") || m.model_slug;
}

export default async function RegisterIndexPage() {
  const { data: models, ok } = await getRegisterModels();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Chassis Register",
    description: "Individual collector cars by chassis number, each record linked to its published source.",
    url: "https://fullysorted.com/register",
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: models.length,
      itemListElement: models.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${modelName(m)} register`,
        url: `https://fullysorted.com/register/${m.model_slug}`,
      })),
    },
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={schema} />
      <ResearchNav active="register" />

      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link href="/research" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6b6b5e" }}>Register</p>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-5xl leading-[1.1] mt-2 mb-4" style={{ color: "#1a1a18" }}>
            Chassis Register
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            One row per car, and under each car the things that demonstrably happened to it, each with a link to
            where that fact was published. Where the public record is silent the page says so, and where two
            sources disagree both versions are shown rather than one being picked. Owners are never named, no
            fact is filled in from memory, and nothing here is a valuation.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {!ok ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <AlertTriangle className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>The register could not be loaded</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              The page exists, the database did not answer. Reloading in a few minutes is usually enough.
            </p>
          </div>
        ) : models.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <Hash className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
            <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>No registers published yet</p>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
              The first model registers are being compiled from published auction and sale records. The model
              histories are available in the meantime.
            </p>
            <Link href="/research/models" className="inline-flex items-center gap-1.5 text-sm font-bold mt-5" style={{ color: "#1E6091" }}>
              Model Histories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {models.map((m) => (
              <Link
                key={m.model_slug}
                href={`/register/${m.model_slug}`}
                className="rounded-2xl bg-white p-5 group block transition-shadow hover:shadow-sm"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                {m.make && <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>{m.make}</p>}
                <h2 className="font-display text-xl font-semibold tracking-tight mt-1 group-hover:opacity-70 transition-opacity" style={{ color: "#1a1a18" }}>
                  {m.model ?? m.model_slug}
                </h2>
                <p className="text-sm mt-2" style={{ color: "#6b6b5e" }}>{coverageLine(m.chassis_count, m.production_total)}</p>
                <p className="text-xs mt-3" style={{ color: "#9a9a8a" }}>
                  {m.chassis_count.toLocaleString()} chassis recorded · {m.event_count.toLocaleString()} {m.event_count === 1 ? "record" : "records"}
                  {m.last_event_date ? ` · last public record ${formatEventDate(m.last_event_date)}` : ""}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold mt-4" style={{ color: "#1E6091" }}>
                  Open the register <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
