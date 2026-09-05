import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, BookOpen, PenLine } from "lucide-react";
import { getRegisterForModel } from "@/lib/data/register";
import { coverageLine } from "@/lib/register/chassis";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";
import { MarqueNotice } from "@/components/research/MarqueNotice";
import { ChassisTable } from "@/components/register/ChassisTable";
import { RegisterSubmitForm } from "@/components/register/RegisterSubmitForm";

export const revalidate = 3600;

interface Props {
  params: Promise<{ make: string; model: string }>;
}

function titleCase(slug: string): string {
  return slug.split("-").map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { make, model } = await params;
  const slug = `${make}/${model}`.toLowerCase();
  const { data, ok } = await getRegisterForModel(slug);
  if (!data.summary) {
    return ok
      ? { title: "Register Not Found" }
      : { title: "Register Temporarily Unavailable", robots: { index: false, follow: true } };
  }
  const s = data.summary;
  const name = [s.make ?? titleCase(make), s.model ?? titleCase(model)].join(" ");
  const desc = `${name} chassis register: ${s.chassis_count.toLocaleString()} cars by chassis number with ${s.event_count.toLocaleString()} published records, each linked to its source. ${coverageLine(s.chassis_count, s.production_total)}.`;
  return {
    title: `${name} Register: Cars by Chassis Number`,
    description: desc,
    alternates: { canonical: `/register/${slug}` },
    openGraph: { type: "website", title: `${name} register`, description: desc, url: `https://fullysorted.com/register/${slug}` },
  };
}

function RegisterUnavailable({ make }: { make: string }) {
  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="register" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/register" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }}>
          <ArrowLeft className="w-4 h-4" /> Chassis Register
        </Link>
        <div className="rounded-2xl bg-white px-6 py-16 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <AlertTriangle className="w-8 h-8 mx-auto mb-4" style={{ color: "#cfcabb" }} />
          <p className="font-bold mb-1" style={{ color: "#1a1a18" }}>This register could not be loaded</p>
          <p className="text-sm max-w-md mx-auto" style={{ color: "#9a9a8a" }}>
            The page exists, the database did not answer. Reloading in a few minutes is usually enough.
          </p>
        </div>
        <MarqueNotice make={titleCase(make)} className="mt-6" />
      </div>
    </div>
  );
}

export default async function ModelRegisterPage({ params }: Props) {
  const { make, model } = await params;
  const slug = `${make}/${model}`.toLowerCase();
  const { data, ok } = await getRegisterForModel(slug);
  // A query that did not run cannot prove the register is missing.
  if (!ok) return <RegisterUnavailable make={make} />;
  if (!data.summary) notFound();

  const s = data.summary;
  const makeName = s.make ?? titleCase(make);
  const modelName = s.model ?? titleCase(model);
  const name = `${makeName} ${modelName}`;
  const rows = data.chassis;
  const base = "https://fullysorted.com";
  const disputedTotal = rows.reduce((n, r) => n + r.disputed_count, 0);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Research", item: `${base}/research` },
      { "@type": "ListItem", position: 2, name: "Chassis Register", item: `${base}/register` },
      { "@type": "ListItem", position: 3, name: `${name} register`, item: `${base}/register/${slug}` },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${name} chassis register`,
    numberOfItems: rows.length,
    itemListElement: rows.slice(0, 500).map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${name} chassis ${r.chassis}`,
      url: `${base}/register/${slug}/${encodeURIComponent(r.chassis)}`,
    })),
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[breadcrumbSchema, itemListSchema]} />
      <ResearchNav active="register" />

      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium mb-8" style={{ color: "#6b6b5e" }} aria-label="Breadcrumb">
            <Link href="/register" className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" /> Chassis Register
            </Link>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>{makeName}</p>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-5xl leading-[1.1] mt-2 mb-3" style={{ color: "#1a1a18" }}>
            {name} register
          </h1>
          <p className="text-sm" style={{ color: "#6b6b5e" }}>
            <strong>{coverageLine(s.chassis_count, s.production_total)}</strong>
            {" · "}{s.event_count.toLocaleString()} published {s.event_count === 1 ? "record" : "records"}
            {disputedTotal > 0 ? ` · ${disputedTotal} disputed` : ""}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
            <Link href={`/research/models/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#1E6091" }}>
              <BookOpen className="w-4 h-4" /> {name} model history
            </Link>
            <a href="#submit" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#1E6091" }}>
              <PenLine className="w-4 h-4" /> Your car is missing?
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ChassisTable rows={rows} modelSlug={slug} />

        <p className="text-xs mt-6 leading-relaxed max-w-3xl" style={{ color: "#9a9a8a" }}>
          Each row lists only what a cited page published about that chassis. A car with one auction appearance
          shows one record. Prices are the figures the source printed, in the currency printed, and are not
          combined into a value. Ownership is never recorded.
        </p>

        <section id="submit" className="mt-12 max-w-2xl scroll-mt-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#6b6b5e" }}>Your car is missing?</h2>
          <p className="text-sm mb-4" style={{ color: "#6b6b5e" }}>
            Send the chassis number and what you can point to. A person reads every submission before anything appears.
          </p>
          <RegisterSubmitForm modelSlug={slug} compact />
        </section>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
          <Link href={`/research/models/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#1E6091" }}>
            {name} model history <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <MarqueNotice make={makeName} className="mt-6" />
      </div>
    </div>
  );
}
