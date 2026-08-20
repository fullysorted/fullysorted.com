import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  Calculator,
  ClipboardCheck,
  Coins,
  ShieldCheck,
  ReceiptText,
  AlertTriangle,
  Info,
  PiggyBank,
  Check,
  Clock,
  ExternalLink,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  BUSINESS_GUIDE,
  GUIDE_DISCLAIMER,
  SOURCES,
  TAX_YEAR,
  totalMinutes,
  type GuideCallout,
} from "@/lib/data/businessGuide";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Running the Business — A Guide for Collector-Car Specialists",
  description:
    "Sole proprietor or LLC, what self-employment tax actually costs, why everyone wants a W-9, which insurance covers a customer's car, and how to get paid. A plain guide for independent specialists.",
  alternates: { canonical: "/services/guide/business" },
};

const ICONS: Record<string, React.ElementType> = {
  Building2,
  FileText,
  Calculator,
  ClipboardCheck,
  Coins,
  ShieldCheck,
  ReceiptText,
};

const CALLOUT_STYLE: Record<
  GuideCallout["kind"],
  { icon: React.ElementType; fg: string; bg: string; border: string; label: string }
> = {
  watch: {
    icon: AlertTriangle,
    fg: "#8a6d1f",
    bg: "rgba(176,141,63,0.10)",
    border: "rgba(176,141,63,0.30)",
    label: "Watch this",
  },
  note: {
    icon: Info,
    fg: "#1E6091",
    bg: "rgba(30,96,145,0.07)",
    border: "rgba(30,96,145,0.22)",
    label: "Worth knowing",
  },
  money: {
    icon: PiggyBank,
    fg: "#4b8b2e",
    bg: "rgba(106,176,76,0.10)",
    border: "rgba(106,176,76,0.28)",
    label: "The money bit",
  },
};

function Callout({ c }: { c: GuideCallout }) {
  const s = CALLOUT_STYLE[c.kind];
  const Icon = s.icon;
  return (
    <div
      className="rounded-2xl p-5 my-6"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 shrink-0" style={{ color: s.fg }} />
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: s.fg }}>
          {s.label}
        </span>
      </div>
      <p className="font-bold text-foreground text-sm mb-1.5">{c.title}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{c.body}</p>
    </div>
  );
}

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Running the Business — A Guide for Collector-Car Specialists",
  description:
    "Entity choice, self-employment tax, W-9s and 1099s, insurance, and getting paid — written for independent collector-car specialists.",
  url: "https://fullysorted.com/services/guide/business",
  publisher: { "@id": "https://fullysorted.com/#organization" },
  articleSection: BUSINESS_GUIDE.map((c) => c.title),
};

export default function BusinessGuidePage() {
  const mins = totalMinutes();

  return (
    <div className="min-h-screen" style={{ background: "#faf9f7" }}>
      <JsonLd data={guideSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #10233b 0%, #0b1a2e 60%, #0a1626 100%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#29ABE2" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Running the Business</span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-4">
            The part of the job that
            <br />
            <span style={{ color: "#D9C08A" }}>isn&rsquo;t the craft.</span>
          </h1>
          <p className="text-lg text-stone-200 max-w-2xl">
            You already know how to correct paint, read a chassis, or move a car without marking it.
            This is the other half: what you are, what you owe, what covers you when something goes
            wrong, and how the money actually reaches you.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-300">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {mins} minutes end to end
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> {BUSINESS_GUIDE.length} chapters
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> Figures current for {TAX_YEAR}
            </span>
          </div>
        </div>
      </section>

      {/* Disclaimer — first thing, not buried */}
      <section className="px-4 sm:px-6 pt-8">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-4 flex items-start gap-3"
            style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <Info className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6b6b5e" }} />
            <p className="text-xs leading-relaxed" style={{ color: "#6b6b5e" }}>
              {GUIDE_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter index */}
      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-1.5">
            What&rsquo;s in here
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Read it in order the first time. After that, it is a reference &mdash; most people come
            back for chapters three and four.
          </p>
          <ol className="space-y-2">
            {BUSINESS_GUIDE.map((c) => {
              const Icon = ICONS[c.icon] ?? FileText;
              return (
                <li key={c.slug}>
                  <a
                    href={`#${c.slug}`}
                    className="group flex items-start gap-4 rounded-2xl bg-white border border-border p-4 hover:border-accent hover:-translate-y-0.5 hover:shadow-md transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(30,96,145,0.08)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-bold text-foreground flex items-center gap-1.5">
                        <span className="tabular-nums" style={{ color: "#9a9a8a" }}>
                          {c.number}.
                        </span>
                        {c.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" style={{ color: "#1E6091" }} />
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">{c.question}</p>
                    </div>
                    <span className="text-xs shrink-0 tabular-nums" style={{ color: "#9a9a8a" }}>
                      {c.minutes} min
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Chapters */}
      {BUSINESS_GUIDE.map((chapter, i) => {
        const Icon = ICONS[chapter.icon] ?? FileText;
        const onWhite = i % 2 === 0;
        return (
          <section
            key={chapter.slug}
            id={chapter.slug}
            className={
              "py-14 px-4 sm:px-6 scroll-mt-20 " + (onWhite ? "bg-white border-y border-border" : "")
            }
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(30,96,145,0.08)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9a9a8a" }}>
                  Chapter {chapter.number}
                </span>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-1.5">
                {chapter.title}
              </h2>
              <p className="text-sm mb-8" style={{ color: "#6b6b5e" }}>
                {chapter.question}
              </p>

              {chapter.sections.map((s, si) => (
                <div key={si} className="mb-9">
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.heading}</h3>
                  {s.body.map((para, pi) => (
                    <p key={pi} className="text-[15px] leading-relaxed text-text-secondary mb-3.5">
                      {para}
                    </p>
                  ))}

                  {s.bullets && (
                    <dl className="mt-5 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                      {s.bullets.map((b, bi) => (
                        <div
                          key={bi}
                          className="px-5 py-3.5 sm:flex sm:gap-5"
                          style={{
                            borderTop: bi === 0 ? "none" : "1px solid rgba(0,0,0,0.06)",
                            background: onWhite ? "#faf9f7" : "#ffffff",
                          }}
                        >
                          <dt className="text-sm font-bold text-foreground sm:w-52 sm:shrink-0 mb-1 sm:mb-0">
                            {b.term}
                          </dt>
                          <dd className="text-sm text-text-secondary leading-relaxed">{b.def}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {s.callout && <Callout c={s.callout} />}
                </div>
              ))}

              {chapter.checklist && (
                <div
                  className="rounded-2xl p-5 sm:p-6"
                  style={{ background: onWhite ? "#faf9f7" : "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1E6091" }}>
                    Before you move on
                  </p>
                  <ul className="space-y-2.5">
                    {chapter.checklist.map((item, ci) => (
                      <li key={ci} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6ab04c" }} />
                        <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Sources */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-1.5">
            Where the numbers come from
          </h2>
          <p className="text-sm text-text-secondary mb-5">
            Every figure above traces to one of these. Thresholds move &mdash; sometimes retroactively
            &mdash; so if you are reading this well after {TAX_YEAR}, check the primary source rather
            than trusting the number here.
          </p>
          <ul className="space-y-2">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm hover:underline"
                  style={{ color: "#1E6091" }}
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div
            className="rounded-2xl p-4 mt-6 flex items-start gap-3"
            style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <Info className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6b6b5e" }} />
            <p className="text-xs leading-relaxed" style={{ color: "#6b6b5e" }}>
              {GUIDE_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-3">
            Now the part that pays for it
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto mb-7">
            The business side is table stakes. Getting booked is the job. Your trade has its own
            playbook &mdash; gig structures, real price bands, and what a portfolio has to show
            before a collector will hand over the keys.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services/guide"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Find your trade playbook <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              Get listed
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
