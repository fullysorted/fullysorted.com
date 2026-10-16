"use client";

import { SmartSearch } from "@/components/search/SmartSearch";
import { HeaderLines } from "@/components/layout/HeaderLines";
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
const RULE = "rgba(18,53,42,0.14)";

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

// `featured` is still passed by page.tsx; the white hero does not use it.
export function Hero({ searchModels = [] }: { featured?: FeaturedModel | null; searchModels?: SearchModel[] }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        {/* 2026-10-14: the white hero. No photo, no gradient: the house rule is
            one white hero pattern on every header page, and the homepage was
            the last dark photo hero. A short headline and the plain search,
            the same box returning visitors already know. The AI answers live
            on their own page (/sort-it), linked from the menu. */}
        <div className="relative flex flex-col items-center text-center pt-14 pb-14 sm:pt-24 sm:pb-24">
          <HeaderLines />
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-[2.4rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-[1.02] tracking-[-0.02em]"
            style={{ color: INK }}
          >
            Collector cars, sorted.
          </motion.h1>
          {/* z-index keeps the suggestion list above the trade tiles */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-20 w-full max-w-2xl mt-7 sm:mt-9 text-left [&>div]:mx-auto [&_.flex-wrap]:justify-center"
          >
            <SmartSearch models={searchModels} showExamples examplesColor={INK} />
          </motion.div>
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
                <Link href="/cars" className="text-sm font-bold whitespace-nowrap hover:underline underline-offset-4" style={{ color: TEAL }}>
                  Cars for sale &rarr;
                </Link>
              </div>
              {/* Three categories, so three across even on a phone: a
                  two-column grid leaves one orphan. */}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
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
