import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Layers,
  Images,
  ClipboardList,
  Lightbulb,
  Tag,
  Sparkles,
  ClipboardCheck,
  Truck,
  Camera,
  Wrench,
  Hammer,
  PaintBucket,
  Warehouse,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDER_TRACKS, getTrack, trackSlugs } from "@/lib/data/providerTracks";

export const revalidate = 86400;

const ICONS: Record<string, React.ElementType> = {
  Sparkles,
  ClipboardCheck,
  Truck,
  Camera,
  Wrench,
  Hammer,
  PaintBucket,
  Warehouse,
};

export function generateStaticParams() {
  return trackSlugs().map((track) => ({ track }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = getTrack(slug);
  if (!track) return { title: "Provider Guide — Fully Sorted" };
  const title = `${track.label} on Fully Sorted — Provider Guide`;
  return {
    title,
    description: `How to get booked as a collector-car ${track.label.toLowerCase()} specialist: gig ideas, pricing tiers, portfolio checklist, and what to ask clients. ${track.hiredFor}`,
    alternates: { canonical: `/services/guide/${track.slug}` },
    openGraph: { title, description: track.hiredFor },
  };
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  const Icon = ICONS[track.icon] ?? Wrench;
  const applyHref = `/services/apply/freelancer?category=${encodeURIComponent(track.category)}`;
  const others = PROVIDER_TRACKS.filter((t) => t.slug !== track.slug);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://fullysorted.com/services/guide/${track.slug}#howto`,
    name: `How to get booked as a collector-car ${track.label.toLowerCase()} specialist on Fully Sorted`,
    description: track.intro,
    step: [
      { name: "Choose the gigs you offer", text: track.gigIdeas.map((g) => `${g.title}: ${g.blurb}`).join(" ") },
      { name: "Set your pricing", text: track.pricingNote },
      { name: "Build your portfolio", text: `Show: ${track.portfolio.join("; ")}.` },
      { name: "Set client requirements", text: `Ask clients for: ${track.requirements.join("; ")}.` },
    ].map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://fullysorted.com/services/guide/${track.slug}#faq`,
    mainEntity: track.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
      { "@type": "ListItem", position: 2, name: "Provider Guide", item: "https://fullysorted.com/services/guide" },
      { "@type": "ListItem", position: 3, name: track.label, item: `https://fullysorted.com/services/guide/${track.slug}` },
    ],
  };

  return (
    <div style={{ backgroundColor: "#f5f4f0" }} className="min-h-screen">
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "linear-gradient(160deg, #10233b 0%, #0b1a2e 60%, #0a1626 100%)" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <Link href="/services/guide" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Provider Playbook
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Icon className="w-6 h-6" style={{ color: "#D9C08A" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">{track.eyebrow}</span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-4">
            {track.headline}
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl">{track.hiredFor}</p>
          <div className="mt-8">
            <Link
              href={applyHref}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Set up a {track.label.toLowerCase()} gig <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed">{track.intro}</p>
        </div>
      </section>

      {/* Gig ideas */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4" style={{ color: "#1E6091" }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>Gigs to offer</p>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-6">
            What sells in {track.label.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {track.gigIdeas.map((g, i) => (
              <div key={i} className="rounded-2xl border border-border p-5" style={{ backgroundColor: "#faf9f7" }}>
                <h3 className="text-base font-bold text-foreground mb-1">{g.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{g.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-4 h-4" style={{ color: "#1E6091" }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>Pricing shape</p>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-3">
            How to price your work
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mb-7">{track.pricingNote}</p>

          {track.quoteBased || !track.tiers ? (
            <div className="rounded-2xl border-2 border-dashed border-border p-6 bg-white">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold">Quote-based work.</span> This trade is best listed as a directory service:
                show your craft, capture the project scope in your client requirements, and quote each car after a
                proper assessment. Phase the billing against milestones rather than naming a single number.
              </p>
              <Link href="/services/apply/business" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#1E6091" }}>
                List as a directory business <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {track.tiers.map((tier, i) => {
                const featured = i === 1;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border p-6 bg-white flex flex-col"
                    style={featured ? { borderColor: "#1E6091", borderWidth: 2, boxShadow: "0 12px 30px -18px rgba(30,96,145,0.5)" } : { borderColor: "var(--border, #e6e2da)" }}
                  >
                    {featured && (
                      <span className="self-start text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "#1E6091" }}>
                        Most booked
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                    <p className="text-2xl font-black text-foreground mt-1" style={{ color: "#1E6091" }}>{tier.price}</p>
                    <p className="text-xs text-text-secondary mb-4">Turnaround: {tier.turnaround}</p>
                    <ul className="space-y-2 flex-1">
                      {tier.includes.map((inc, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6ab04c" }} />
                          <span className="leading-snug">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {track.addOns.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Add-ons that upsell</p>
              <div className="flex flex-wrap gap-2">
                {track.addOns.map((a, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 rounded-full border border-border bg-white text-foreground">{a}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio + Requirements */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Images className="w-4 h-4" style={{ color: "#1E6091" }} />
              <h2 className="text-lg font-bold text-foreground">Your portfolio must show</h2>
            </div>
            <ul className="space-y-2.5">
              {track.portfolio.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm shrink-0" style={{ backgroundColor: "#1E6091" }} />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList className="w-4 h-4" style={{ color: "#B08D3F" }} />
              <h2 className="text-lg font-bold text-foreground">Ask every client for</h2>
            </div>
            <ul className="space-y-2.5">
              {track.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm shrink-0" style={{ backgroundColor: "#B08D3F" }} />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pro tips */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-4 h-4" style={{ color: "#8a6d2f" }} />
            <h2 className="text-lg font-bold text-foreground">Specialist tips that win repeat work</h2>
          </div>
          <div className="space-y-3">
            {track.tips.map((t, i) => (
              <div key={i} className="rounded-xl px-4 py-3.5 text-sm leading-relaxed" style={{ backgroundColor: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.25)" }}>
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-6">
            {track.label} FAQ
          </h2>
          <div className="space-y-4">
            {track.faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border p-6" style={{ backgroundColor: "#faf9f7" }}>
                <h3 className="text-base font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-2">
            Ready to get booked as a {track.label.toLowerCase()} specialist?
          </h2>
          <p className="text-sm text-text-secondary mb-6">Set up your profile and your first gig — listing is free for founding providers.</p>
          <Link
            href={applyHref}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
          >
            Start your {track.label.toLowerCase()} gig <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Other tracks */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4 text-center">Other specialist tracks</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {others.map((t) => {
              const OIcon = ICONS[t.icon] ?? Wrench;
              return (
                <Link
                  key={t.slug}
                  href={`/services/guide/${t.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-sm font-medium text-foreground hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  <OIcon className="w-4 h-4" style={{ color: "#1E6091" }} /> {t.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
