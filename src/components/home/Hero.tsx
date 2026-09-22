"use client";

import { ArrowRight } from "lucide-react";
import { SmartSearch } from "@/components/search/SmartSearch";
import type { SearchModel } from "@/lib/search-intent";
import { tradeHref } from "@/lib/category-slugs";
import { motion } from "framer-motion";
import Link from "next/link";
import { TRADE_CATEGORIES, SALES_CATEGORIES, type ServiceCategoryKey } from "@/lib/service-categories";
import { TradeIcon } from "@/components/home/TradeIcon";

/*
   Homepage hero, rebuilt 2026-09-16 from the "Build sheet" proof.

   One full-bleed photograph in a rounded frame, the headline and the
   services search on top of it, and a "This week's car" card in the corner
   that reads from the model histories (see page.tsx: getFeaturedModel).
   Under it, every live trade as an icon tile. Apricot and teal circles sit
   behind the frame so the page has a hand in it.

   Everything a returning visitor already knows is still here: the search
   posts to /services with `q`, the tiles are the same /services?type= links
   the old quick picks were, and the model card links into /research/models.
*/

const INK = "#12352A";
const TEAL = "#1C8C87";
const CREAM = "#FFFFFF";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

export type FeaturedModel = {
  slug: string;
  make: string;
  model: string;
  generationCode: string | null;
  yearStart: number | null;
  yearEnd: number | null;
  productionTotal: number | null;
  heroPhoto: string | null;
  heroPhotoCredit: string | null;
  /** 1-based position in the published list, for the "No. 014" corner mark */
  index: number;
};

/**
 * Tile order on the homepage. Photography, detailing and inspections lead
 * (the trades most owners come for); the rest follow the ownership year that
 * lib/service-categories already defines, so a new category joins the row
 * without touching this file.
 */
const LEAD: ServiceCategoryKey[] = ["photography", "detailing", "inspection"];
const tiles = [
  ...LEAD.map((k) => TRADE_CATEGORIES.find((c) => c.key === k)).filter(Boolean),
  ...TRADE_CATEGORIES.filter((c) => !LEAD.includes(c.key)),
] as typeof TRADE_CATEGORIES;

function formatYears(m: FeaturedModel): string | null {
  if (!m.yearStart) return null;
  if (!m.yearEnd || m.yearEnd === m.yearStart) return String(m.yearStart);
  return `${m.yearStart}-${m.yearEnd}`;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] uppercase"
      style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTED }}
    >
      {children}
    </span>
  );
}

function FeaturedCard({ m }: { m: FeaturedModel }) {
  const years = formatYears(m);
  const built = m.productionTotal ? m.productionTotal.toLocaleString("en-US") : null;
  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      className="rounded-2xl p-4 w-[232px] self-start"
      style={{ background: CREAM, color: INK, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
      aria-label="This week's car"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: TEAL }}>
          This week&apos;s car
        </span>
        <span className="text-[10px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTED }}>
          No. {String(m.index).padStart(3, "0")}
        </span>
      </div>
      <p className="font-display text-[1.15rem] leading-tight mt-1.5">
        {m.make} {m.model}
      </p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 mt-2.5 text-[12px]" style={{ fontFamily: MONO }}>
        {years && (<><dt><Label>Years</Label></dt><dd>{years}</dd></>)}
        {m.generationCode && (<><dt><Label>Code</Label></dt><dd>{m.generationCode}</dd></>)}
        <dt><Label>Built</Label></dt>
        <dd>{built ?? <span style={{ color: MUTED }}>see history</span>}</dd>
      </dl>
      <Link
        href={`/research/models/${m.slug}`}
        className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-bold hover:underline underline-offset-4"
        style={{ color: TEAL }}
      >
        Read the model history <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.aside>
  );
}

export function Hero({ featured, searchModels = [] }: { featured: FeaturedModel | null; searchModels?: SearchModel[] }) {
  const photo = featured?.heroPhoto ?? "/images/services/restoration.jpg";
  const credit = featured?.heroPhoto
    ? featured.heroPhotoCredit
    : "Photo: Egor Vikhrev / Unsplash";

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        {/* The frame */}
        <div
          className="relative rounded-[28px] sm:rounded-[32px]"
          style={{ background: INK }}
        >
          {/* The photo layer clips to the frame. The frame itself does not, so
              the search suggestions can hang below it. */}
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.9 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(90deg, rgba(18,53,42,0.94) 0%, rgba(18,53,42,0.62) 45%, rgba(18,53,42,0.15) 75%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{ background: "linear-gradient(180deg, rgba(18,53,42,0.2) 0%, rgba(18,53,42,0.85) 70%)" }}
          />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10 min-h-[440px] lg:min-h-[520px]">
            <div className="flex-1 flex flex-col justify-between gap-8 lg:self-stretch" style={{ color: CREAM }}>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="text-[11px] uppercase"
                  style={{ fontFamily: MONO, letterSpacing: "0.12em", opacity: 0.8 }}
                >
                  Collector car specialists and research
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="font-display text-[2.1rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] mt-3 max-w-[18ch]"
                >
                  The right specialist for your collector car.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="text-[15px] sm:text-base mt-4 max-w-md leading-relaxed"
                  style={{ opacity: 0.9 }}
                >
                  Shops and specialists are joining every week. Find help with
                  maintenance, restoration, inspections and more, rated by real owners.
                </motion.p>
              </div>

              {/* z-index keeps the suggestion list above the "This week's car" card */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="relative z-20"
              >
                <SmartSearch models={searchModels} showExamples examplesColor={CREAM} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="text-sm -mt-2"
                style={{ opacity: 0.85 }}
              >
                Buying a car?{" "}
                <Link href="/research/models" className="font-bold underline underline-offset-4 hover:opacity-80" style={{ color: CREAM }}>
                  Research it first
                </Link>
              </motion.p>
            </div>

            {featured && (
              <div className="hidden lg:flex w-[232px] shrink-0 items-start justify-end">
                <FeaturedCard m={featured} />
              </div>
            )}
          </div>

          {credit && (
            <div
              className="absolute left-5 bottom-3 text-[10px] uppercase hidden sm:block"
              style={{ fontFamily: MONO, letterSpacing: "0.08em", color: CREAM, opacity: 0.7 }}
            >
              {credit}
            </div>
          )}
        </div>

        {/* Every live trade, as an icon tile */}
        <div className="relative pt-10 sm:pt-12 pb-4">
          <div className="flex items-baseline justify-between mb-4 gap-4">
            <h2 className="font-display text-2xl sm:text-[1.9rem]" style={{ color: INK }}>
              What does your car need?
            </h2>
            <Link href="/services" className="text-sm font-bold whitespace-nowrap hover:underline underline-offset-4" style={{ color: TEAL }}>
              All service categories &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {tiles.map((c) => (
              <Link
                key={c.key}
                href={tradeHref(c.key)}
                className="flex flex-col gap-3 rounded-2xl bg-white p-4 text-[15px] font-medium transition-colors hover:bg-[#E6F3F2]"
                style={{ color: INK, border: `1px solid ${RULE}` }}
              >
                <TradeIcon k={c.key} className="w-8 h-8" />
                {c.label}
              </Link>
            ))}
          </div>

          {/* Buying and selling: dealers, consignment, auction reps. Its own
              row, separate from the trades, per the 2026-09-04 decision. */}
          {SALES_CATEGORIES.length > 0 && (
            <>
              <div className="flex items-baseline justify-between mt-8 mb-3 gap-4">
                <h3 className="font-display text-xl" style={{ color: INK }}>
                  Buying and selling
                </h3>
                <Link href="/browse" className="text-sm font-bold whitespace-nowrap hover:underline underline-offset-4" style={{ color: TEAL }}>
                  Cars for sale &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {SALES_CATEGORIES.map((c) => (
                  <Link
                    key={c.key}
                    href={`/services?type=${encodeURIComponent(c.key)}`}
                    className="flex flex-col gap-3 rounded-2xl p-4 text-[15px] font-medium transition-colors hover:bg-[#E6F3F2]"
                    style={{ color: INK, background: "var(--bg-surface)", border: `1px solid ${RULE}` }}
                  >
                    <TradeIcon k={c.key} className="w-8 h-8" />
                    {c.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
