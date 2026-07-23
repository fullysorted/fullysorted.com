import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, AlertTriangle, ShieldCheck, ExternalLink,
  Gauge, Factory, Wrench, TrendingUp, BookOpen, Scale,
} from "lucide-react";
import { getPublishedModelBySlug, modelDisplayName, getModelMarketSnapshot, getActiveListingsForModel } from "@/lib/data/models";
import { JsonLd } from "@/components/seo/JsonLd";
import { RarityScale } from "@/components/research/RarityScale";
import { ProductionBreakdown } from "@/components/research/ProductionBreakdown";

export const revalidate = 3600;

interface Props {
  params: Promise<{ make: string; model: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { make, model } = await params;
  const m = await getPublishedModelBySlug(make, model);
  if (!m) return { title: "Model Not Found | Fully Sorted" };
  const name = modelDisplayName(m);
  const desc =
    (m.summary || "").replace(/[#*]/g, "").slice(0, 155) ||
    `History, specs, production numbers and buyer's notes for the ${name}.`;
  return {
    title: `${name} — History, Specs & Buyer's Guide | Fully Sorted`,
    description: desc,
    alternates: { canonical: `/research/models/${m.slug}` },
    openGraph: {
      type: "article",
      title: `${name} — History, Specs & Buyer's Guide`,
      description: desc,
      url: `https://fullysorted.com/research/models/${m.slug}`,
    },
  };
}

// Lightweight markdown → HTML (## headings, **bold**, paragraphs).
function renderMarkdown(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      if (t.startsWith("## ")) return `<h2>${t.slice(3)}</h2>`;
      const withBold = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${withBold}</p>`;
    })
    .join("");
}

const CONFIDENCE_STYLE: Record<string, { bg: string; fg: string; label: string }> = {
  high: { bg: "rgba(106,176,76,0.12)", fg: "#3d7a2a", label: "Well documented" },
  medium: { bg: "rgba(176,141,63,0.14)", fg: "#8a6d2f", label: "Reasonably documented" },
  low: { bg: "rgba(220,38,38,0.10)", fg: "#a33224", label: "Thin / uncertain" },
};

function Section({
  icon: Icon, title, children,
}: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4" />
        <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default async function ModelPage({ params }: Props) {
  const { make, model } = await params;
  const m = await getPublishedModelBySlug(make, model);
  if (!m) notFound();

  const snapshot = await getModelMarketSnapshot(m.make, m.model);
  const forSale = await getActiveListingsForModel(m.make, m.model);

  const name = modelDisplayName(m);
  const years = [m.year_start, m.year_end].filter(Boolean).join("–");
  const conf = CONFIDENCE_STYLE[m.overall_confidence || "medium"] ?? CONFIDENCE_STYLE.medium;
  const disputed = m.claims.filter((c) => c.status === "disputed");
  const sourceById = new Map(m.sources.map((s) => [s.id, s]));

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name,
    manufacturer: { "@type": "Organization", name: m.make },
    model: m.model,
    vehicleConfiguration: m.generation || undefined,
    productionDate: years || undefined,
    bodyType: (m.body_styles || []).join(", ") || undefined,
    description: (m.summary || "").replace(/[#*]/g, "").slice(0, 250) || undefined,
    url: `https://fullysorted.com/research/models/${m.slug}`,
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${name} — History, Specs & Buyer's Guide`,
    description: (m.summary || "").replace(/[#*]/g, "").slice(0, 200),
    author: { "@type": "Organization", name: "Fully Sorted" },
    publisher: { "@id": "https://fullysorted.com/#organization" },
    dateModified: m.updated_at ? new Date(m.updated_at).toISOString() : undefined,
    datePublished: m.published_at ? new Date(m.published_at).toISOString() : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://fullysorted.com/research/models/${m.slug}` },
    citation: m.sources.filter((s) => s.url).map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url })),
    inLanguage: "en-US",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Research", item: "https://fullysorted.com/research" },
      { "@type": "ListItem", position: 2, name: "Model Histories", item: "https://fullysorted.com/research/models" },
      { "@type": "ListItem", position: 3, name, item: `https://fullysorted.com/research/models/${m.slug}` },
    ],
  };

  const stripMd = (t: string | null | undefined) =>
    (t || "").replace(/[#*`_>]/g, "").replace(/^\s*[-\u2022]\s*/gm, "").replace(/\s+/g, " ").trim();
  const faqItems = [];
  if (m.production_total != null)
    faqItems.push({ q: `How many ${name} were made?`, a: `Approximately ${m.production_total.toLocaleString()} were built${years ? ` (${years})` : ""}. See the production notes and sources on this page for details and any disputed figures.` });
  if (m.what_to_look_for) faqItems.push({ q: `What should I look for when buying a ${name}?`, a: stripMd(m.what_to_look_for).slice(0, 900) });
  if (m.common_problems) faqItems.push({ q: `What are the common problems with the ${name}?`, a: stripMd(m.common_problems).slice(0, 900) });
  if (m.market_notes) faqItems.push({ q: `What is a ${name} worth?`, a: stripMd(m.market_notes).slice(0, 900) });
  if (m.value_trajectory) faqItems.push({ q: `Are ${name} values going up or down?`, a: stripMd(m.value_trajectory).slice(0, 900) });
  if (disputed.length)
    faqItems.push({ q: `Are there disputed facts about the ${name}?`, a: `Yes. Fully Sorted flags claims where independent sources disagree rather than presenting one unverified number: ${disputed.map((c) => stripMd(c.claim_text)).join("; ").slice(0, 800)}.` });
  const faqSchema = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[vehicleSchema, articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]} />

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link href="/research/models" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
            <ArrowLeft className="w-4 h-4" /> Model Histories
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>{m.make}</span>
            {years && <span className="text-xs" style={{ color: "#9a9a8a" }}>{years}</span>}
            <span className="text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1" style={{ background: conf.bg, color: conf.fg }}>
              <ShieldCheck className="w-3 h-3" /> {conf.label}
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-5xl leading-[1.1] mb-3" style={{ color: "#1a1a18" }}>
            {m.model} {m.generation && <span style={{ color: "#9a9a8a" }}>({m.generation})</span>}
          </h1>
          {m.production_total != null && (
            <p className="text-sm" style={{ color: "#6b6b5e" }}>
              <strong>{m.production_total.toLocaleString()}</strong> built · {(m.body_styles || []).join(" · ")}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {m.summary && <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.summary) }} />}

            {/* Where sources differ */}
            {disputed.length > 0 && (
              <div className="mt-8 rounded-2xl p-5" style={{ background: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.28)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-4 h-4" style={{ color: "#8a6d2f" }} />
                  <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#8a6d2f" }}>Where sources differ</h2>
                </div>
                <div className="space-y-3">
                  {disputed.map((c) => (
                    <div key={c.id}>
                      <p className="text-sm font-semibold" style={{ color: "#1a1a18" }}>{c.claim_text}</p>
                      {c.conflict_note && <p className="text-sm mt-0.5" style={{ color: "#6b6b5e" }}>{c.conflict_note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {m.production_total != null && m.production_total > 0 && (
              <div className="mt-8">
                <RarityScale total={m.production_total} make={m.make} model={m.model} notes={m.production_notes} />
              </div>
            )}

            {m.notable_trims && m.notable_trims.length > 1 && (
              <div className="mt-6">
                <ProductionBreakdown variants={m.notable_trims} total={m.production_total} make={m.make} model={m.model} />
              </div>
            )}

            {m.history && (
              <Section icon={BookOpen} title="History">
                <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.history) }} />
              </Section>
            )}
            {m.common_problems && (
              <Section icon={Wrench} title="Common Problems">
                <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.common_problems) }} />
              </Section>
            )}
            {m.what_to_look_for && (
              <Section icon={AlertTriangle} title="What to Look For">
                <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.what_to_look_for) }} />
              </Section>
            )}
            {m.market_notes && (
              <Section icon={TrendingUp} title="Market Notes">
                <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.market_notes) }} />
              </Section>
            )}

            {/* Sources */}
            {m.sources.length > 0 && (
              <Section icon={ExternalLink} title="Sources">
                <ol className="space-y-2 list-decimal list-inside">
                  {m.sources.map((s) => (
                    <li key={s.id} className="text-sm" style={{ color: "#6b6b5e" }}>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="font-medium hover:underline" style={{ color: "#1a1a18" }}>
                          {s.title}
                        </a>
                      ) : (
                        <span className="font-medium" style={{ color: "#1a1a18" }}>{s.title}</span>
                      )}
                      {s.publisher && <span> — {s.publisher}</span>}
                      {s.source_type && <span style={{ color: "#9a9a8a" }}> · {s.source_type}</span>}
                    </li>
                  ))}
                </ol>
                <p className="text-xs mt-4" style={{ color: "#9a9a8a" }}>
                  Synthesized from the sources above and cross-checked. We cite and link out; we don’t
                  republish other databases verbatim. Spotted an error? <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a>.
                </p>
              </Section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specs */}
            {m.specs && Object.keys(m.specs).length > 0 && (
              <div className="rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="px-5 py-3 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <Gauge className="w-4 h-4" style={{ color: "#1E6091" }} />
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>Key Specs</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(m.specs).map(([k, v], i) => (
                      <tr key={k} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)" }}>
                        <td className="px-5 py-2.5 align-top w-2/5" style={{ color: "#9a9a8a" }}>{k}</td>
                        <td className="px-5 py-2.5" style={{ color: "#1a1a18" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Notable trims */}
            {m.notable_trims && m.notable_trims.length > 0 && (
              <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Factory className="w-4 h-4" style={{ color: "#1E6091" }} />
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>Notable Variants</p>
                </div>
                <div className="space-y-2.5">
                  {m.notable_trims.map((t) => (
                    <div key={t.name}>
                      <p className="text-sm font-semibold" style={{ color: "#1a1a18" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "#6b6b5e" }}>{t.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Value trajectory */}
            {m.value_trajectory && (
              <div className="rounded-2xl p-5" style={{ background: "rgba(41,171,226,0.06)", border: "1px solid rgba(41,171,226,0.15)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1f7fa8" }}>Value Trajectory</p>
                <p className="text-sm" style={{ color: "#6b6b5e" }}>{m.value_trajectory}</p>
              </div>
            )}

            {/* CTAs */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(30,96,145,0.06)", border: "1px solid rgba(30,96,145,0.18)" }}>
              {snapshot.count > 0 ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4" style={{ color: "#1E6091" }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>Market Snapshot</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold" style={{ color: "#1a1a18" }}>{snapshot.median ? `$${snapshot.median.toLocaleString()}` : "\u2014"}</span>
                    <span className="text-xs" style={{ color: "#9a9a8a" }}>median &middot; {snapshot.count} {snapshot.count === 1 ? "sale" : "sales"}</span>
                  </div>
                  {snapshot.low != null && snapshot.high != null && (
                    <p className="text-xs mt-1" style={{ color: "#6b6b5e" }}>Range ${snapshot.low.toLocaleString()} &ndash; ${snapshot.high.toLocaleString()}</p>
                  )}
                </>
              ) : (
                <>
                  <p className="font-bold text-sm mb-1" style={{ color: "#1a1a18" }}>What&rsquo;s one worth today?</p>
                  <p className="text-xs mb-1" style={{ color: "#6b6b5e" }}>Comp-backed pricing in the Value Guide.</p>
                </>
              )}
              <Link href={`/value-guide?make=${encodeURIComponent(m.make)}&model=${encodeURIComponent(m.model)}`} className="inline-flex items-center gap-1.5 text-xs font-bold mt-3" style={{ color: "#1E6091" }}>
                {snapshot.count > 0 ? "See all comps & the price trend" : "Open Value Guide"} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {forSale.length > 0 && (
              <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>For sale now</p>
                <div className="space-y-3">
                  {forSale.map((l) => {
                    const thumb = l.hero_photo || (l.photos && l.photos[0]) || null;
                    return (
                      <Link key={l.slug} href={`/listings/${l.slug}`} className="flex gap-3 group">
                        {thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={thumb} alt={`${l.year} ${l.make} ${l.model}`} className="w-16 h-12 rounded-lg object-cover shrink-0" style={{ background: "#eee" }} />
                        ) : (
                          <div className="w-16 h-12 rounded-lg shrink-0" style={{ background: "#eee" }} />
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold truncate group-hover:text-accent transition-colors" style={{ color: "#1a1a18" }}>{l.year} {l.make} {l.model}</p>
                          <p className="text-sm font-bold" style={{ color: "#1E6091" }}>
                            ${l.price.toLocaleString()}
                            {l.sorted_price && <span className="ml-1.5 text-[10px] font-bold" style={{ color: "#3f7a2e" }}>SORTED PRICE</span>}
                          </p>
                          {(l.city || l.state) && (
                            <p className="text-[11px]" style={{ color: "#9a9a8a" }}>{[l.city, l.state].filter(Boolean).join(", ")}</p>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <Link href={`/browse?q=${encodeURIComponent(m.model)}`} className="inline-flex items-center gap-1.5 text-xs font-bold mt-3.5" style={{ color: "#1E6091" }}>
                  See all for sale <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
            <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <p className="font-bold text-sm mb-1" style={{ color: "#1a1a18" }}>Shopping for one?</p>
              <p className="text-xs mb-3" style={{ color: "#6b6b5e" }}>Browse {m.make} listings, or decode a VIN before you buy.</p>
              <div className="flex flex-col gap-2">
                <Link href={`/browse?q=${encodeURIComponent(m.model)}`} className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "#1E6091" }}>
                  Browse listings <ArrowRight className="w-3 h-3" />
                </Link>
                <Link href="/vin" className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "#1E6091" }}>
                  Free VIN decoder <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
