import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GitCompareArrows, ShieldCheck } from "lucide-react";
import { getPublishedModels, getPublishedModelBySlug, getModelMarketSnapshot, modelDisplayName, parseModelSlug } from "@/lib/data/models";
import { CompareSelector } from "./CompareSelector";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Compare Collector Cars — Side by Side | Fully Sorted",
  description: "Compare any two collector cars head to head — production numbers and rarity, market values, specs, and buyer confidence. Cited, honest data.",
  alternates: { canonical: "/research/compare" },
};

function rarityTier(n: number | null): string {
  if (!n) return "—";
  if (n < 500) return "Extraordinarily rare";
  if (n < 5000) return "Very rare";
  if (n < 50000) return "Scarce";
  if (n < 500000) return "Uncommon";
  if (n < 5000000) return "Widely produced";
  return "Mass-produced";
}
const money = (n: number | null) => (n == null ? "—" : `$${n.toLocaleString()}`);
const confLabel: Record<string, string> = { high: "High", medium: "Medium", low: "Low" };

export default async function ComparePage({ searchParams }: { searchParams: Promise<{ a?: string; b?: string }> }) {
  const sp = await searchParams;
  const a = sp.a || "";
  const b = sp.b || "";

  const models = await getPublishedModels();
  const options = models
    .map((m) => ({ slug: m.slug, label: modelDisplayName(m) }))
    .sort((x, y) => x.label.localeCompare(y.label));

  async function load(slug: string) {
    if (!slug) return null;
    const { make, modelSlug } = parseModelSlug(slug);
    const m = await getPublishedModelBySlug(make, modelSlug);
    if (!m) return null;
    const snap = await getModelMarketSnapshot(m.make, m.model);
    return { m, snap };
  }
  const [A, B] = await Promise.all([load(a), load(b)]);
  const both = A && B;

  const rows: { label: string; a: string; b: string; hint?: "lowA" | "lowB" | "highA" | "highB" }[] = both ? (() => {
    const pa = A.m.production_total, pb = B.m.production_total;
    const ma = A.snap.median, mb = B.snap.median;
    return [
      { label: "Years", a: [A.m.year_start, A.m.year_end].filter(Boolean).join("–") || "—", b: [B.m.year_start, B.m.year_end].filter(Boolean).join("–") || "—" },
      { label: "Production", a: pa != null ? pa.toLocaleString() : "—", b: pb != null ? pb.toLocaleString() : "—", hint: pa != null && pb != null ? (pa < pb ? "lowA" : pa > pb ? "lowB" : undefined) : undefined },
      { label: "Rarity", a: rarityTier(pa), b: rarityTier(pb) },
      { label: "Market median", a: money(ma), b: money(mb), hint: ma != null && mb != null ? (ma > mb ? "highA" : ma < mb ? "highB" : undefined) : undefined },
      { label: "Sample (sales)", a: A.snap.count ? String(A.snap.count) : "—", b: B.snap.count ? String(B.snap.count) : "—" },
      { label: "Body styles", a: (A.m.body_styles || []).join(", ") || "—", b: (B.m.body_styles || []).join(", ") || "—" },
      { label: "Engines", a: (A.m.engines || []).slice(0, 3).join(" · ") || "—", b: (B.m.engines || []).slice(0, 3).join(" · ") || "—" },
      { label: "Notable variants", a: String((A.m.notable_trims || []).length || "—"), b: String((B.m.notable_trims || []).length || "—") },
      { label: "Data confidence", a: confLabel[A.m.overall_confidence || ""] || "—", b: confLabel[B.m.overall_confidence || ""] || "—" },
    ];
  })() : [];

  const Head = ({ side }: { side: typeof A }) => side ? (
    <Link href={`/research/models/${side.m.slug}`} className="group block">
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>{side.m.make}</p>
      <p className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:underline">
        {side.m.model} {side.m.generation && <span style={{ color: "#9a9a8a" }}>({side.m.generation})</span>}
      </p>
    </Link>
  ) : <p className="text-sm text-text-secondary">Pick a model above</p>;

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden text-white" style={{ background: "linear-gradient(160deg, #10233b 0%, #0b1a2e 60%, #0a1626 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
          <Link href="/research/models" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Model Directory
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <GitCompareArrows className="w-5 h-5" style={{ color: "#D9C08A" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">Head to Head</span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl mb-3">Compare collector cars</h1>
          <p className="text-stone-300 max-w-2xl">Two models, side by side — rarity, market value, specs, and how much we&rsquo;d trust each figure. Cited and honest.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <CompareSelector options={options} a={a} b={b} />

        {both ? (
          <div className="mt-8 rounded-2xl bg-white border border-border overflow-hidden">
            <div className="grid grid-cols-[minmax(90px,1fr)_1.4fr_1.4fr] sm:grid-cols-[160px_1fr_1fr]">
              <div className="p-4 sm:p-5 border-b border-border" />
              <div className="p-4 sm:p-5 border-b border-l border-border"><Head side={A} /></div>
              <div className="p-4 sm:p-5 border-b border-l border-border"><Head side={B} /></div>
              {rows.map((r, i) => (
                <div key={r.label} className="contents">
                  <div className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-text-secondary flex items-center" style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border,#e6e2da)" : "none", background: "#faf9f7" }}>{r.label}</div>
                  <div className="p-4 sm:p-5 text-sm border-l border-border flex items-center gap-1.5" style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border,#e6e2da)" : "none", color: "#1a1a18", fontWeight: r.hint === "lowA" || r.hint === "highA" ? 700 : 400 }}>
                    {r.a}{(r.hint === "lowA" || r.hint === "highA") && <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#4b8b2e" }} />}
                  </div>
                  <div className="p-4 sm:p-5 text-sm border-l border-border flex items-center gap-1.5" style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border,#e6e2da)" : "none", color: "#1a1a18", fontWeight: r.hint === "lowB" || r.hint === "highB" ? 700 : 400 }}>
                    {r.b}{(r.hint === "lowB" || r.hint === "highB") && <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#4b8b2e" }} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-white border border-border p-10 text-center">
            <GitCompareArrows className="w-9 h-9 mx-auto mb-3" style={{ color: "#cfcabb" }} />
            <p className="font-semibold text-foreground mb-1">Pick two models to compare</p>
            <p className="text-sm text-text-secondary">Rarity, market value, specs, and buyer confidence — side by side.</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/research/models" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#1E6091" }}>
            Browse all models <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
