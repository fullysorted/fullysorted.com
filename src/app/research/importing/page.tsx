import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  ExternalLink,
  Gavel,
  Landmark,
  Library,
  ListChecks,
  Scale,
  ScrollText,
  Ship,
  Wind,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";
import {
  IMPORT_SECTIONS,
  IMPORT_SOURCES,
  IMPORT_ELIGIBILITY,
  IMPORT_DATA_RETRIEVED,
  IMPORT_DISCLAIMER,
  IMPORT_DISCLAIMER_SHORT,
} from "@/lib/data/importing";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Importing a Car into the US: 25-Year Rule",
  description:
    "The 25-year NHTSA exemption, the separate 21-year EPA rule, which build years become eligible when, and the CBP duty and state registration steps.",
  alternates: { canonical: "/research/importing" },
  openGraph: {
    type: "article",
    title: "Importing a Car into the US: 25-Year Rule",
    description:
      "The 25-year NHTSA exemption, the separate 21-year EPA rule, eligibility by build date, duty rates, Show or Display, and state registration.",
    url: "https://fullysorted.com/research/importing",
  },
};

/**
 * Lightweight markdown → HTML, matching the approach used on the model pages
 * rather than pulling in a markdown library. The section bodies use `**bold**`
 * and `*italic*` (document titles are italicised) and nothing else.
 *
 * SECURITY: every block is HTML-escaped BEFORE the markdown transforms are
 * applied, because the result is rendered through dangerouslySetInnerHTML.
 */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderMarkdown(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      const t = escapeHtml(block.trim());
      if (!t) return "";
      if (t.startsWith("## ")) return `<h2>${t.slice(3)}</h2>`;
      const withMarks = t
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
      return `<p>${withMarks}</p>`;
    })
    .join("");
}

const ACCENT = "#1E6091";
const MUTED = "#6b6b5e";
const MUTED_LIGHT = "#9a9a8a";
const HAIRLINE = "#e5e5dc";

export default function ImportingPage() {
  const nhtsa = IMPORT_SECTIONS.find((s) => s.id === "nhtsa-25-year");
  const epa = IMPORT_SECTIONS.find((s) => s.id === "epa-21-year");

  // The data file records one point where the codified EPA text and EPA's own
  // operating practice do not line up. Surface that paragraph as written rather
  // than smoothing it into a clean rule.
  const epaDiscrepancy =
    epa?.body
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .find((p) => p.includes("85.1511(f)(2)")) ?? null;

  const currentYear = new Date().getUTCFullYear();
  const primaryCount = IMPORT_SOURCES.filter((s) => s.isPrimary).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Importing a Car into the US: 25-Year Rule",
    description:
      "The 25-year NHTSA safety exemption, the separate 21-year EPA emissions exemption, eligibility by date of manufacture, CBP duty and paperwork, Show or Display, Registered Importers, state registration and enforcement.",
    author: { "@type": "Organization", name: "Fully Sorted" },
    publisher: { "@id": "https://fullysorted.com/#organization" },
    dateModified: IMPORT_DATA_RETRIEVED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fullysorted.com/research/importing",
    },
    articleSection: IMPORT_SECTIONS.map((s) => s.heading),
    citation: IMPORT_SOURCES.map((s) => ({
      "@type": "CreativeWork",
      name: s.title,
      url: s.url,
      publisher: { "@type": "Organization", name: s.publisher },
    })),
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://fullysorted.com/research" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Importing",
        item: "https://fullysorted.com/research/importing",
      },
    ],
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="importing" />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      {/* Header */}
      <div className="relative overflow-hidden text-white">
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 80% -10%, rgba(30,96,145,0.38) 0%, rgba(14,33,54,0) 60%), linear-gradient(160deg, #10233b 0%, #0b1a2e 55%, #0a1626 100%)",
          }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 text-stone-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <div className="flex items-center gap-2.5">
            <Ship className="w-4 h-4 text-stone-200" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Import Law
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4">
            Importing a car into the US
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-stone-200">
            The 25-year rule and everything around it: the two federal agencies that set
            two different age thresholds, the forms filed at the border, duty rates, the
            narrow routes for cars that are not old enough yet, and the state step that no
            federal exemption covers. Cited throughout to the statutes, regulations and
            agency forms in the source list.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Disclaimer — top */}
        <aside
          id="disclaimer"
          className="rounded-2xl p-5 sm:p-6 scroll-mt-24"
          style={{
            background: "rgba(176,141,63,0.08)",
            border: "1px solid rgba(176,141,63,0.28)",
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <Scale className="w-4 h-4" style={{ color: "#8a6d2f" }} aria-hidden="true" />
            <h2
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#8a6d2f" }}
            >
              Read this first
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#4a4a42" }}>
            {IMPORT_DISCLAIMER}
          </p>
          <p className="text-xs mt-3" style={{ color: MUTED_LIGHT }}>
            Sources retrieved {IMPORT_DATA_RETRIEVED}. Regulations, tariff classifications
            and state registration requirements change after that date.
          </p>
        </aside>

        {/* Eligibility — the thing most people came for */}
        <section id="eligibility" className="mt-10 sm:mt-12 scroll-mt-24">
          <div className="flex items-center gap-2 mb-3">
            <CalendarClock className="w-4 h-4" style={{ color: ACCENT }} aria-hidden="true" />
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: MUTED }}>
              What is eligible, and when
            </h2>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: `1px solid ${HAIRLINE}` }}
          >
            <ul>
              {IMPORT_ELIGIBILITY.map((e, i) => (
                <li
                  key={e.year}
                  className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-5 px-5 sm:px-6 py-4"
                  style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE}` }}
                >
                  <div className="sm:w-28 sm:shrink-0 flex items-baseline gap-2">
                    <span
                      className="font-display font-semibold text-xl"
                      style={{ color: e.year === currentYear ? ACCENT : "#1a1a18" }}
                    >
                      {e.year}
                    </span>
                    {e.year === currentYear && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(30,96,145,0.10)", color: ACCENT }}
                      >
                        Now
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed break-words" style={{ color: MUTED }}>
                    {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs mt-3" style={{ color: MUTED_LIGHT }}>
            Eligibility is per vehicle and rolls forward continuously: see{" "}
            <Link href="#rolling-window" className="underline" style={{ color: ACCENT }}>
              the rolling eligibility window
            </Link>
            .
          </p>
        </section>

        {/* Two agencies, two thresholds */}
        <section id="two-agencies" className="mt-10 sm:mt-12 scroll-mt-24">
          <div className="flex items-center gap-2 mb-3">
            <Landmark className="w-4 h-4" style={{ color: ACCENT }} aria-hidden="true" />
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: MUTED }}>
              Two agencies, two different thresholds
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nhtsa && (
              <a
                href={`#${nhtsa.id}`}
                className="block rounded-2xl p-5 sm:p-6 transition-colors"
                style={{ background: "#fff", border: `2px solid ${ACCENT}` }}
              >
                <div className="flex items-center gap-2">
                  <ScrollText className="w-4 h-4" style={{ color: ACCENT }} aria-hidden="true" />
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: ACCENT }}
                  >
                    NHTSA · safety
                  </span>
                </div>
                <p
                  className="font-display font-semibold text-4xl mt-2"
                  style={{ color: "#1a1a18" }}
                >
                  25 years
                </p>
                <p className="text-sm font-semibold mt-1" style={{ color: "#1a1a18" }}>
                  {nhtsa.heading}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(nhtsa.keyPoints ?? []).map((k) => (
                    <li
                      key={k}
                      className="text-sm leading-relaxed break-words pl-3.5 relative"
                      style={{ color: MUTED }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      {k}
                    </li>
                  ))}
                </ul>
              </a>
            )}
            {epa && (
              <a
                href={`#${epa.id}`}
                className="block rounded-2xl p-5 sm:p-6 transition-colors"
                style={{ background: "#fff", border: "2px solid #3d7a2a" }}
              >
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4" style={{ color: "#3d7a2a" }} aria-hidden="true" />
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#3d7a2a" }}
                  >
                    EPA · emissions
                  </span>
                </div>
                <p
                  className="font-display font-semibold text-4xl mt-2"
                  style={{ color: "#1a1a18" }}
                >
                  21 years
                </p>
                <p className="text-sm font-semibold mt-1" style={{ color: "#1a1a18" }}>
                  {epa.heading}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(epa.keyPoints ?? []).map((k) => (
                    <li
                      key={k}
                      className="text-sm leading-relaxed break-words pl-3.5 relative"
                      style={{ color: MUTED }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full"
                        style={{ background: "#3d7a2a" }}
                      />
                      {k}
                    </li>
                  ))}
                </ul>
              </a>
            )}
          </div>
          <p className="text-sm mt-4 leading-relaxed" style={{ color: MUTED }}>
            The two are independent gates on the same shipment, they are filed on two
            different forms, and they do not count age the same way. Clearing one does not
            clear the other.
          </p>

          {epaDiscrepancy && (
            <div
              className="mt-4 rounded-2xl p-5"
              style={{
                background: "rgba(176,141,63,0.08)",
                border: "1px solid rgba(176,141,63,0.28)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-4 h-4" style={{ color: "#8a6d2f" }} aria-hidden="true" />
                <h3
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#8a6d2f" }}
                >
                  Where the text and the practice do not line up
                </h3>
              </div>
              <div
                className="article-body text-sm"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(epaDiscrepancy) }}
              />
            </div>
          )}
        </section>

        {/* Body: table of contents + sections */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          <nav aria-label="On this page" className="lg:col-span-1 min-w-0">
            <div className="lg:sticky lg:top-6">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: MUTED_LIGHT }}
              >
                On this page
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#eligibility"
                    className="text-sm hover:underline break-words"
                    style={{ color: MUTED }}
                  >
                    What is eligible, and when
                  </a>
                </li>
                {IMPORT_SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm hover:underline break-words"
                      style={{ color: MUTED }}
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#sources"
                    className="text-sm hover:underline break-words"
                    style={{ color: MUTED }}
                  >
                    Sources
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-3 min-w-0">
            {IMPORT_SECTIONS.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
                style={{
                  marginTop: i === 0 ? 0 : "3rem",
                  paddingTop: i === 0 ? 0 : "3rem",
                  borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE}`,
                }}
              >
                <h2
                  className="font-display font-semibold tracking-tight text-2xl sm:text-3xl leading-tight mb-4"
                  style={{ color: "#1a1a18" }}
                >
                  {section.heading}
                </h2>
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(section.body) }}
                />
                {/* The NHTSA and EPA sections already show their key points in the
                    "two agencies" summary cards above, so skip the repeat here. */}
                {section.keyPoints &&
                  section.keyPoints.length > 0 &&
                  section.id !== "nhtsa-25-year" &&
                  section.id !== "epa-21-year" && (
                  <div
                    className="mt-6 rounded-2xl p-5"
                    style={{
                      background: "rgba(30,96,145,0.05)",
                      borderLeft: `3px solid ${ACCENT}`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <ListChecks className="w-4 h-4" style={{ color: ACCENT }} aria-hidden="true" />
                      <h3
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: ACCENT }}
                      >
                        Key points
                      </h3>
                    </div>
                    <ul className="space-y-1.5">
                      {section.keyPoints.map((k) => (
                        <li
                          key={k}
                          className="text-sm leading-relaxed break-words pl-3.5 relative"
                          style={{ color: "#4a4a42" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full"
                            style={{ background: ACCENT }}
                          />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Sources */}
            <section
              id="sources"
              className="scroll-mt-24"
              style={{ marginTop: "3rem", paddingTop: "3rem", borderTop: `1px solid ${HAIRLINE}` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4" style={{ color: MUTED }} aria-hidden="true" />
                <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: MUTED }}>
                  Sources
                </h2>
              </div>
              <p className="text-sm mb-5" style={{ color: MUTED }}>
                {IMPORT_SOURCES.length} sources, of which {primaryCount}{' '}are primary: the
                statute, the regulation, the agency form or the agency&apos;s own guidance,
                rather than a secondary account of it. Every quotation above is taken from
                one of them.
              </p>
              <ol className="space-y-3.5">
                {IMPORT_SOURCES.map((s, i) => (
                  <li key={s.ref} id={`source-${s.ref}`} className="flex gap-3 scroll-mt-24">
                    <span
                      className="text-xs font-bold tabular-nums shrink-0 pt-0.5"
                      style={{ color: MUTED_LIGHT, width: "1.75rem" }}
                    >
                      {i + 1}.
                    </span>
                    <div className="min-w-0">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline break-words"
                        style={{ color: "#1a1a18" }}
                      >
                        {s.title}
                      </a>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        {s.isPrimary && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(30,96,145,0.10)", color: ACCENT }}
                          >
                            Primary source
                          </span>
                        )}
                        <span className="text-xs break-words" style={{ color: MUTED }}>
                          {s.publisher}
                        </span>
                        <span className="text-xs" style={{ color: MUTED_LIGHT }}>
                          · retrieved {s.retrieved}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        {/* Cross-links */}
        <section className="mt-12 sm:mt-16">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4" style={{ color: MUTED }} aria-hidden="true" />
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: MUTED }}>
              Next
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/research/glossary"
              className="rounded-2xl p-5 block"
              style={{ background: "#fff", border: `1px solid ${HAIRLINE}` }}
            >
              <Library className="w-4 h-4 mb-2" style={{ color: ACCENT }} aria-hidden="true" />
              <p className="text-sm font-bold mb-1" style={{ color: "#1a1a18" }}>
                Glossary
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                HS-7, 3520-1, Show or Display, RI, OP year: what the import terms in a
                listing actually mean.
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold mt-2"
                style={{ color: ACCENT }}
              >
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/research/where-to-buy"
              className="rounded-2xl p-5 block"
              style={{ background: "#fff", border: `1px solid ${HAIRLINE}` }}
            >
              <Gavel className="w-4 h-4 mb-2" style={{ color: ACCENT }} aria-hidden="true" />
              <p className="text-sm font-bold mb-1" style={{ color: "#1a1a18" }}>
                Where to buy
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                The auction houses and marketplaces, including the overseas ones a car has
                to be bought through before any of this applies.
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold mt-2"
                style={{ color: ACCENT }}
              >
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/research/models"
              className="rounded-2xl p-5 block"
              style={{ background: "#fff", border: `1px solid ${HAIRLINE}` }}
            >
              <BookOpen className="w-4 h-4 mb-2" style={{ color: ACCENT }} aria-hidden="true" />
              <p className="text-sm font-bold mb-1" style={{ color: "#1a1a18" }}>
                Model histories
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Several models covered here were never sold new in the United States, so
                importing is the only way to own one.
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold mt-2"
                style={{ color: ACCENT }}
              >
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* Disclaimer — foot */}
        <aside
          className="mt-12 sm:mt-16 rounded-2xl p-5 sm:p-6"
          style={{ background: "#fff", border: `1px solid ${HAIRLINE}` }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <Scale className="w-4 h-4" style={{ color: MUTED }} aria-hidden="true" />
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>
              Not legal advice
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            {IMPORT_DISCLAIMER_SHORT}
          </p>
        </aside>
      </div>
    </div>
  );
}
