import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, BookOpen, Scale, ExternalLink, ShieldCheck } from "lucide-react";
import { getChassisPage, type RegisterEventRow } from "@/lib/data/register";
import { formatEventDate, formatMoney, eventTypeLabel, outcomeLabel, normalizeChassis } from "@/lib/register/chassis";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";
import { MarqueNotice } from "@/components/research/MarqueNotice";
import { RegisterSubmitForm } from "@/components/register/RegisterSubmitForm";

export const revalidate = 3600;

interface Props {
  params: Promise<{ make: string; model: string; chassis: string }>;
}

function titleCase(slug: string): string {
  return slug.split("-").map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(" ");
}

const CONFIDENCE: Record<string, { bg: string; fg: string; label: string }> = {
  high: { bg: "rgba(106,176,76,0.12)", fg: "#3d7a2a", label: "VIN and two or more sources agree" },
  medium: { bg: "rgba(176,141,63,0.14)", fg: "#8a6d2f", label: "One primary source" },
  low: { bg: "rgba(220,38,38,0.10)", fg: "#a33224", label: "Aggregator record only" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { make, model, chassis } = await params;
  const slug = `${make}/${model}`.toLowerCase();
  const key = normalizeChassis(decodeURIComponent(chassis)) ?? "";
  const { data, ok } = await getChassisPage(slug, key);
  if (!data) {
    return ok
      ? { title: "Chassis Not Found" }
      : { title: "Chassis Record Temporarily Unavailable", robots: { index: false, follow: true } };
  }
  const makeName = data.model?.make ?? titleCase(make);
  const modelName = data.model?.model ?? titleCase(model);
  const c = data.chassis;
  const n = data.events.length;
  const first = data.events.find((e) => e.event_date)?.event_date;
  const last = [...data.events].reverse().find((e) => e.event_date)?.event_date;
  const desc = `${makeName} ${modelName} chassis ${c.chassis}${c.vin ? ` (VIN ${c.vin})` : ""}${c.build_year ? `, ${c.build_year}` : ""}: ${n} published ${n === 1 ? "record" : "records"}${first && last && first !== last ? ` from ${formatEventDate(first)} to ${formatEventDate(last)}` : first ? `, ${formatEventDate(first)}` : ""}, each linked to its source.`;
  return {
    title: `${makeName} ${modelName} chassis ${c.chassis}`,
    description: desc,
    alternates: { canonical: `/register/${slug}/${encodeURIComponent(c.chassis)}` },
    openGraph: { type: "website", title: `${makeName} ${modelName} chassis ${c.chassis}`, description: desc, url: `https://fullysorted.com/register/${slug}/${encodeURIComponent(c.chassis)}` },
  };
}

function ChassisUnavailable({ slug, make }: { slug: string; make: string }) {
  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="register" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href={`/register/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
          <ArrowLeft className="w-4 h-4" /> Register
        </Link>
        <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <AlertTriangle className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
          <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>This record could not be loaded</p>
          <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
            The page exists, the database did not answer. Reloading in a few minutes is usually enough.
          </p>
        </div>
        <MarqueNotice make={make} className="mt-6" />
      </div>
    </div>
  );
}

function Fact({ label, value, mono = false }: { label: string; value: string | number | null | undefined; mono?: boolean }) {
  const missing = value == null || value === "";
  return (
    <div>
      <dt className="text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: "#9a9a8a" }}>{label}</dt>
      <dd className={`mt-0.5 text-sm leading-snug break-words ${mono && !missing ? "font-mono" : ""}`} style={{ color: missing ? "#9a9a8a" : "#1a1a18" }}>
        {missing ? "not on public record" : String(value)}
      </dd>
    </div>
  );
}

function yearOf(d: string | null): number | null {
  if (!d) return null;
  const y = parseInt(d.slice(0, 4), 10);
  return Number.isFinite(y) ? y : null;
}

function EventCard({ e }: { e: RegisterEventRow }) {
  const disputed = e.status === "disputed";
  const ownerReported = e.status === "owner_reported";
  const style = disputed
    ? { background: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.28)" }
    : ownerReported
      ? { background: "#F5EFE6", border: "1px solid rgba(176,141,63,0.28)" }
      : { background: "#fff", border: "1px solid rgba(0,0,0,0.07)" };
  const price = formatMoney(e.price_amount, e.price_currency);
  const estLow = formatMoney(e.estimate_low, e.price_currency);
  const estHigh = formatMoney(e.estimate_high, e.price_currency);
  const outcome = outcomeLabel(e.outcome);
  const where = [e.venue, e.location].filter(Boolean).join(", ");
  const sourceLabel = e.source_title || e.source_publisher || "Source";

  return (
    <li id={`event-${e.id}`} className="rounded-2xl p-5" style={style}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>{formatEventDate(e.event_date)}</span>
        <span className="text-xs" style={{ color: "#9a9a8a" }}>{eventTypeLabel(e.event_type)}</span>
        {disputed && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: "rgba(176,141,63,0.18)", color: "#8a6d2f" }}>
            <Scale className="w-3 h-3" /> Disputed
          </span>
        )}
        {ownerReported && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: "rgba(176,141,63,0.18)", color: "#8a6d2f" }}>
            Owner-reported, not independently verified
          </span>
        )}
      </div>
      <p className="font-semibold" style={{ color: "#1a1a18" }}>{e.title}</p>
      {where && <p className="text-sm mt-0.5" style={{ color: "#6b6b5e" }}>{where}</p>}

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-2.5 text-sm">
        {outcome && <span className="font-semibold" style={{ color: "#1a1a18" }}>{outcome}</span>}
        {price && <span className="font-mono" style={{ color: "#1a1a18" }}>{price}</span>}
        {(estLow || estHigh) && (
          <span className="font-mono text-xs" style={{ color: "#6b6b5e" }}>
            Estimate {estLow ?? "?"}{estHigh ? ` to ${estHigh}` : ""}
          </span>
        )}
        {e.mileage != null && (
          <span style={{ color: "#6b6b5e" }}>{e.mileage.toLocaleString("en-US")} {e.mileage_unit ?? "mi"} stated</span>
        )}
      </div>

      {e.details && <p className="text-sm mt-2.5 leading-relaxed" style={{ color: "#3a3a30" }}>{e.details}</p>}

      {disputed && e.conflict_note && (
        <p className="text-sm mt-2.5 leading-relaxed" style={{ color: "#8a6d2f" }}>
          <strong>Conflict:</strong> {e.conflict_note}
        </p>
      )}

      <p className="text-xs mt-3" style={{ color: "#6b6b5e" }}>
        <a href={e.source_url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 font-medium hover:underline" style={{ color: "#1E6091" }}>
          {sourceLabel} <ExternalLink className="w-3 h-3" />
        </a>
        {e.source_publisher && e.source_title && <span> · {e.source_publisher}</span>}
        {e.source_type && <span style={{ color: "#9a9a8a" }}> · {e.source_type}</span>}
      </p>
    </li>
  );
}

export default async function ChassisPage({ params }: Props) {
  const { make, model, chassis } = await params;
  const slug = `${make}/${model}`.toLowerCase();
  const key = normalizeChassis(decodeURIComponent(chassis)) ?? "";
  const { data, ok } = await getChassisPage(slug, key);
  if (!ok) return <ChassisUnavailable slug={slug} make={titleCase(make)} />;
  if (!data) notFound();

  const c = data.chassis;
  const makeName = data.model?.make ?? titleCase(make);
  const modelName = data.model?.model ?? titleCase(model);
  const name = `${makeName} ${modelName}`;
  const base = "https://fullysorted.com";
  const url = `${base}/register/${slug}/${encodeURIComponent(c.chassis)}`;
  const conf = c.confidence ? CONFIDENCE[c.confidence] : null;
  const events = data.events;
  const lastDated = [...events].reverse().find((e) => e.event_date);

  // Build the timeline with gap notices. Events are already oldest first with
  // undated ones last; a gap is only measurable between two dated events.
  const timeline: React.ReactNode[] = [];
  let prevDated: RegisterEventRow | null = null;
  for (const e of events) {
    if (e.event_date && prevDated) {
      const a = yearOf(prevDated.event_date);
      const b = yearOf(e.event_date);
      if (a != null && b != null && b - a > 5) {
        timeline.push(
          <li key={`gap-${e.id}`} className="text-sm px-2 py-1" style={{ color: "#9a9a8a" }}>
            No public record between {a} and {b}.
          </li>,
        );
      }
    }
    timeline.push(<EventCard key={e.id} e={e} />);
    if (e.event_date) prevDated = e;
  }

  const vehicleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${name} chassis ${c.chassis}`,
    brand: { "@type": "Brand", name: makeName },
    model: modelName,
    url,
  };
  if (c.vin) vehicleSchema.vehicleIdentificationNumber = c.vin;
  if (c.build_year) vehicleSchema.modelDate = String(c.build_year);
  if (c.exterior_color) vehicleSchema.color = c.exterior_color;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Research", item: `${base}/research` },
      { "@type": "ListItem", position: 2, name: "Chassis Register", item: `${base}/register` },
      { "@type": "ListItem", position: 3, name: `${name} register`, item: `${base}/register/${slug}` },
      { "@type": "ListItem", position: 4, name: `Chassis ${c.chassis}`, item: url },
    ],
  };

  const chassisHref = (ch: string) => `/register/${slug}/${encodeURIComponent(ch)}`;

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[vehicleSchema, breadcrumbSchema]} />
      <ResearchNav active="register" />

      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }} aria-label="Breadcrumb">
            <Link href="/register" className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" /> Chassis Register
            </Link>
            <span aria-hidden style={{ color: "#cfcabb" }}>/</span>
            <Link href={`/register/${slug}`} className="hover:opacity-70 transition-opacity">{name}</Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>{name}</span>
            {c.build_year && <span className="text-xs" style={{ color: "#9a9a8a" }}>{c.build_year}</span>}
            {c.variant && <span className="text-xs" style={{ color: "#9a9a8a" }}>{c.variant}</span>}
            {conf && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1" style={{ background: conf.bg, color: conf.fg }} title={`Confidence: ${c.confidence}`}>
                <ShieldCheck className="w-3 h-3" /> {conf.label}
              </span>
            )}
          </div>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-5xl leading-[1.1] mb-1" style={{ color: "#1a1a18" }}>
            Chassis <span className="font-mono">{c.chassis}</span>
          </h1>
          <p className="font-mono text-sm mb-6" style={{ color: c.vin ? "#6b6b5e" : "#9a9a8a" }}>
            {c.vin ? `VIN ${c.vin}` : "VIN not on public record"}
          </p>

          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            <Fact label="Year" value={c.build_year} />
            <Fact label="Variant" value={c.variant} />
            <Fact label="Spec" value={c.market_spec} />
            <Fact label="Exterior" value={c.exterior_color} />
            <Fact label="Interior" value={c.interior_color} />
            {c.engine_number && <Fact label="Engine number" value={c.engine_number} mono />}
          </dl>
          {c.notes && <p className="text-sm mt-5 max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>{c.notes}</p>}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>
                Public record{events.length ? ` · ${events.length} ${events.length === 1 ? "entry" : "entries"}` : ""}
              </h2>
              {events.length === 0 ? (
                <div className="rounded-2xl bg-white px-6 py-10 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <p className="text-sm" style={{ color: "#6b6b5e" }}>No public records yet for this chassis.</p>
                </div>
              ) : (
                <ol className="space-y-3">
                  {timeline}
                  {lastDated && (
                    <li className="text-sm px-2 py-1" style={{ color: "#9a9a8a" }}>
                      No public record after {formatEventDate(lastDated.event_date)}.
                    </li>
                  )}
                </ol>
              )}
            </section>

            <section className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>What the register does not know</h2>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#6b6b5e" }}>
                This page lists only facts that a cited page published about this chassis. A gap in the timeline
                means nothing was found on public record, not that nothing happened. The absence of a record is
                not evidence about the car. Ownership is never recorded here, and no name of any private person
                appears on this page even where a source printed one. Prices are the figures the source published,
                in the currency published, and are not a valuation.
              </p>
            </section>

            <section id="submit" className="mt-10 scroll-mt-8">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#6b6b5e" }}>Add to this record</h2>
              <p className="text-sm mb-4" style={{ color: "#6b6b5e" }}>
                Add a record, correct one, or tell us you own the car. Approved submissions are shown as owner-reported and stay labelled that way.
              </p>
              <RegisterSubmitForm modelSlug={slug} chassis={c.chassis} />
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>Neighbours</p>
              <div className="space-y-2.5">
                {data.prev ? (
                  <Link href={chassisHref(data.prev.chassis)} className="flex items-center gap-2 text-sm font-semibold group" style={{ color: "#1a1a18" }}>
                    <ArrowLeft className="w-4 h-4 shrink-0" style={{ color: "#1E6091" }} />
                    <span className="font-mono group-hover:opacity-70 transition-opacity">{data.prev.chassis}</span>
                  </Link>
                ) : (
                  <p className="text-sm" style={{ color: "#9a9a8a" }}>First chassis recorded</p>
                )}
                {data.next ? (
                  <Link href={chassisHref(data.next.chassis)} className="flex items-center gap-2 text-sm font-semibold group" style={{ color: "#1a1a18" }}>
                    <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "#1E6091" }} />
                    <span className="font-mono group-hover:opacity-70 transition-opacity">{data.next.chassis}</span>
                  </Link>
                ) : (
                  <p className="text-sm" style={{ color: "#9a9a8a" }}>Last chassis recorded</p>
                )}
              </div>
              <Link href={`/register/${slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold mt-4" style={{ color: "#1E6091" }}>
                All {modelName} chassis <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4" style={{ color: "#1E6091" }} />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>Model history</p>
              </div>
              <p className="text-xs mb-3" style={{ color: "#6b6b5e" }}>What the {name} is, how many were built, and what to check before buying one.</p>
              <Link href={`/research/models/${slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "#1E6091" }}>
                {name} history <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <MarqueNotice make={makeName} />
          </div>
        </div>
      </div>
    </div>
  );
}
