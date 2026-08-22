import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUp, AlertTriangle, Library } from "lucide-react";
import {
  GLOSSARY,
  GLOSSARY_CATEGORIES,
  GLOSSARY_SOURCES,
  type GlossaryCategory,
  type GlossaryTerm,
} from "@/lib/data/glossary";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";
import { GlossaryQuickFind } from "./GlossaryQuickFind";

const PAGE_URL = "https://fullysorted.com/research/glossary";
const TERM_SET_ID = `${PAGE_URL}#termset`;

export const metadata: Metadata = {
  title: "Collector Car Glossary",
  description: `What the words in a collector car listing actually mean — ${GLOSSARY.length} terms across condition, provenance, auction, title and import language, with the traps flagged.`,
  alternates: { canonical: "/research/glossary" },
};

/* Display names for every slug, so `seeAlso` renders as the term rather than
   as its URL fragment. Built once at module scope. */
const TERM_LABELS = new Map(GLOSSARY.map((t) => [t.slug, t.term]));

const CATEGORY_LABELS = new Map<GlossaryCategory, string>(
  GLOSSARY_CATEGORIES.map((c) => [c.key, c.label]),
);

/* Terms are grouped by category, then alphabetised within it. The source file
   is ordered editorially, which is the wrong order for looking a word up. */
const BY_CATEGORY = new Map<GlossaryCategory, GlossaryTerm[]>(
  GLOSSARY_CATEGORIES.map((c) => [
    c.key,
    GLOSSARY.filter((t) => t.category === c.key).sort((a, b) =>
      a.term.localeCompare(b.term, "en", { numeric: true }),
    ),
  ]),
);

/* One contextual pointer per category, out to the page that covers the
   underlying subject in full. */
const CATEGORY_LINK: Partial<
  Record<GlossaryCategory, { href: string; label: string }>
> = {
  condition: { href: "/research/models", label: "Model histories" },
  provenance: { href: "/research/models", label: "Model histories" },
  market: { href: "/research/where-to-buy", label: "Where to buy" },
  process: { href: "/services", label: "Find a specialist" },
  paperwork: { href: "/research/importing", label: "Importing" },
  import: { href: "/research/importing", label: "Importing" },
};

const ANCHOR_OFFSET = 120;

function BackToTop() {
  return (
    <div className="mt-4 text-right">
      <a
        href="#top"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9a9a8a] transition-colors hover:text-[#1E6091]"
      >
        <ArrowUp className="w-3.5 h-3.5" aria-hidden /> Back to top
      </a>
    </div>
  );
}

function TermEntry({ term, first }: { term: GlossaryTerm; first: boolean }) {
  const seeAlso = (term.seeAlso ?? []).filter((s) => TERM_LABELS.has(s));

  return (
    <article
      id={term.slug}
      className="px-5 sm:px-7 py-6 sm:py-7"
      style={{
        scrollMarginTop: ANCHOR_OFFSET,
        borderTop: first ? undefined : "1px solid #e5e5dc",
      }}
    >
      <h3
        className="font-display text-lg sm:text-xl font-semibold tracking-tight"
        style={{ color: "#1a1a18" }}
      >
        <a href={`#${term.slug}`} className="hover:underline">
          {term.term}
        </a>
      </h3>

      {term.alsoKnownAs && term.alsoKnownAs.length > 0 && (
        <p className="mt-1 text-xs" style={{ color: "#9a9a8a" }}>
          <span className="font-bold uppercase tracking-widest">Also called</span>{" "}
          <span style={{ color: "#6b6b5e" }}>{term.alsoKnownAs.join(" · ")}</span>
        </p>
      )}

      <p
        className="mt-3 text-[15px] sm:text-base leading-relaxed"
        style={{ color: "#3a3a34" }}
      >
        {term.definition}
      </p>

      {term.watchOut && (
        <div
          className="mt-4 rounded-lg px-4 py-3"
          style={{
            background: "rgba(176,141,63,0.10)",
            borderLeft: "3px solid #B08D3F",
          }}
        >
          <p
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "#8a6d2f" }}
          >
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden /> Watch out
          </p>
          <p
            className="mt-1.5 text-sm leading-relaxed"
            style={{ color: "#4a4237" }}
          >
            {term.watchOut}
          </p>
        </div>
      )}

      {seeAlso.length > 0 && (
        <p className="mt-4 text-xs" style={{ color: "#9a9a8a" }}>
          <span className="font-bold uppercase tracking-widest">See also</span>{" "}
          {seeAlso.map((slug, i) => (
            <span key={slug}>
              {i > 0 && <span style={{ color: "#cfcabb" }}> · </span>}
              <a
                href={`#${slug}`}
                className="font-semibold hover:underline"
                style={{ color: "#1E6091" }}
              >
                {TERM_LABELS.get(slug)}
              </a>
            </span>
          ))}
        </p>
      )}
    </article>
  );
}

export default function GlossaryPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": TERM_SET_ID,
    name: "Collector Car Glossary",
    description:
      "The vocabulary of collector car listings, auction catalogues, inspection reports and title paperwork, defined term by term.",
    url: PAGE_URL,
    inLanguage: "en-US",
    publisher: { "@id": "https://fullysorted.com/#organization" },
    isPartOf: { "@id": "https://fullysorted.com/#website" },
    hasDefinedTerm: GLOSSARY.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#${t.slug}`,
      name: t.term,
      termCode: t.slug,
      url: `${PAGE_URL}#${t.slug}`,
      description: t.watchOut
        ? `${t.definition} Watch out: ${t.watchOut}`
        : t.definition,
      ...(t.alsoKnownAs?.length ? { alternateName: t.alsoKnownAs } : {}),
      inDefinedTermSet: { "@id": TERM_SET_ID },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fullysorted.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research",
        item: "https://fullysorted.com/research",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Glossary",
        item: PAGE_URL,
      },
    ],
  };

  /* Search payload only — the readable list below is server rendered in full. */
  const quickFindTerms = GLOSSARY.map((t) => ({
    slug: t.slug,
    term: t.term,
    categoryLabel: CATEGORY_LABELS.get(t.category) ?? "",
    ...(t.alsoKnownAs?.length ? { alsoKnownAs: t.alsoKnownAs } : {}),
  }));

  return (
    <div id="top" style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="glossary" />
      <JsonLd data={definedTermSet} />
      <JsonLd data={breadcrumbSchema} />

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
            <span className="flex gap-1" aria-hidden="true">
              {["#1E6091", "#1E6091", "#B08D3F"].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="w-2 h-2 rounded-sm"
                  style={{ background: c }}
                />
              ))}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Reference
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4">
            The collector car glossary
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-stone-200">
            Listing copy, auction catalogues, inspection reports and title
            paperwork each carry a vocabulary of their own, and a good deal of it
            is load-bearing. Here are {GLOSSARY.length} of those words: what each
            one means, where the meaning came from, and how it gets stretched.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-stone-300">
            <Library className="w-4 h-4" aria-hidden />
            {GLOSSARY.length} terms in {GLOSSARY_CATEGORIES.length} groups
          </p>
        </div>
      </div>

      {/* Orientation + quick find */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-8">
        <div className="max-w-3xl space-y-4 text-[15px] sm:text-base leading-relaxed" style={{ color: "#3a3a34" }}>
          <p>
            Terms are grouped by where they turn up rather than run together
            alphabetically, on the reasoning that a word off a title brand and a
            word off a paint estimate are rarely looked up in the same sitting.
            Within each group they run A to Z. Where a term has both a settled
            technical meaning and a looser trade usage, both are given, and where
            a word is routinely doing work it has not earned, that is marked.
          </p>
          <p style={{ color: "#6b6b5e" }}>
            For the cars these words describe, start with the{" "}
            <Link href="/research/models" className="font-semibold underline" style={{ color: "#1E6091" }}>
              model histories
            </Link>
            . Auction mechanics — who charges what, and at which point in the sale
            — are set out under{" "}
            <Link href="/research/where-to-buy" className="font-semibold underline" style={{ color: "#1E6091" }}>
              where to buy
            </Link>
            , and the agencies behind the import vocabulary are covered in the{" "}
            <Link href="/research/importing" className="font-semibold underline" style={{ color: "#1E6091" }}>
              importing guide
            </Link>
            . A pre-purchase inspection, defined below, is arranged through the{" "}
            <Link href="/services" className="font-semibold underline" style={{ color: "#1E6091" }}>
              specialist directory
            </Link>
            .
          </p>
        </div>

        <div className="mt-8">
          <GlossaryQuickFind terms={quickFindTerms} />
        </div>
      </div>

      {/* Sticky category nav */}
      <div
        className="sticky z-30"
        style={{
          top: 65,
          background: "rgba(250,249,247,0.94)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderTop: "1px solid #e5e5dc",
          borderBottom: "1px solid #e5e5dc",
        }}
      >
        <nav
          aria-label="Glossary categories"
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <ul className="flex gap-1.5 overflow-x-auto py-2.5 -mx-1 px-1">
            {GLOSSARY_CATEGORIES.map((c) => (
              <li key={c.key} className="shrink-0">
                <a
                  href={`#cat-${c.key}`}
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#e5e5dc] bg-white px-3 py-1.5 text-xs font-semibold text-[#6b6b5e] transition-colors hover:border-[#1E6091] hover:text-[#1E6091]"
                >
                  {c.label}
                  <span style={{ color: "#9a9a8a" }}>
                    {BY_CATEGORY.get(c.key)?.length ?? 0}
                  </span>
                </a>
              </li>
            ))}
            <li className="shrink-0">
              <a
                href="#sources"
                className="flex items-center whitespace-nowrap rounded-full border border-transparent px-3 py-1.5 text-xs font-semibold text-[#9a9a8a] transition-colors hover:text-[#1E6091]"
              >
                Sources
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Terms */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {GLOSSARY_CATEGORIES.map((c) => {
          const terms = BY_CATEGORY.get(c.key) ?? [];
          const link = CATEGORY_LINK[c.key];
          return (
            <section
              key={c.key}
              id={`cat-${c.key}`}
              className="mb-12 sm:mb-16"
              style={{ scrollMarginTop: ANCHOR_OFFSET }}
              aria-labelledby={`cat-${c.key}-heading`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2
                  id={`cat-${c.key}-heading`}
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: "#1a1a18" }}
                >
                  {c.label}
                </h2>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#9a9a8a" }}
                >
                  {terms.length} terms
                </span>
              </div>
              <p
                className="mt-2 mb-2 max-w-2xl text-sm sm:text-[15px] leading-relaxed"
                style={{ color: "#6b6b5e" }}
              >
                {c.blurb}
              </p>
              {link && (
                <p className="mb-5">
                  <Link
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest hover:underline"
                    style={{ color: "#1E6091" }}
                  >
                    {link.label} →
                  </Link>
                </p>
              )}

              <div
                className="rounded-2xl bg-white overflow-hidden"
                style={{ border: "1px solid #e5e5dc" }}
              >
                {terms.map((t, i) => (
                  <TermEntry key={t.slug} term={t} first={i === 0} />
                ))}
              </div>

              <BackToTop />
            </section>
          );
        })}

        {/* Sources */}
        <section
          id="sources"
          style={{ scrollMarginTop: ANCHOR_OFFSET }}
          aria-labelledby="sources-heading"
        >
          <h2
            id="sources-heading"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ color: "#1a1a18" }}
          >
            Sources
          </h2>
          <p
            className="mt-2 mb-5 max-w-2xl text-sm sm:text-[15px] leading-relaxed"
            style={{ color: "#6b6b5e" }}
          >
            Definitions with an outside authority behind them were checked against
            the following. Where a term has no authority behind it — and a good
            many here do not — the entry says so rather than picking a side.
          </p>
          <ol
            className="rounded-2xl bg-white overflow-hidden"
            style={{ border: "1px solid #e5e5dc" }}
          >
            {GLOSSARY_SOURCES.map((s, i) => (
              <li
                key={s.url}
                className="px-5 sm:px-7 py-3.5"
                style={{ borderTop: i === 0 ? undefined : "1px solid #e5e5dc" }}
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-sm font-semibold hover:underline break-words"
                  style={{ color: "#1E6091" }}
                >
                  {s.title}
                </a>
                <span className="ml-2 text-xs" style={{ color: "#9a9a8a" }}>
                  {s.publisher}
                </span>
              </li>
            ))}
          </ol>
          <BackToTop />
        </section>
      </div>
    </div>
  );
}
