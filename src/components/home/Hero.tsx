"use client";

import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TRADE_CATEGORIES, type ServiceCategoryKey } from "@/lib/service-categories";
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
const APRICOT = "#F2B27A";
const CREAM = "#F5EFE6";
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
      className="rounded-2xl p-5 w-full lg:w-[264px]"
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
      <p className="font-display text-[1.35rem] leading-tight mt-2">
        {m.make} {m.model}
      </p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 mt-3 text-[13px]" style={{ fontFamily: MONO }}>
        {years && (<><dt><Label>Years</Label></dt><dd>{years}</dd></>)}
        {m.generationCode && (<><dt><Label>Code</Label></dt><dd>{m.generationCode}</dd></>)}
        <dt><Label>Built</Label></dt>
        <dd>{built ?? <span style={{ color: MUTED }}>see history</span>}</dd>
      </dl>
      <Link
        href={`/research/models/${m.slug}`}
        className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-bold hover:underline underline-offset-4"
        style={{ color: TEAL }}
      >
        Read the model history <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.aside>
  );
}

export function Hero({ featured }: { featured: FeaturedModel | null }) {
  const photo = featured?.heroPhoto ?? "/images/services/restoration.jpg";
  const credit = featured?.heroPhoto
    ? featured.heroPhotoCredit
    : "Photo: Egor Vikhrev / Unsplash";

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Shapes behind the frame. Apricot is teal's complement. */}
      <div aria-hidden className="absolute rounded-full pointer-events-none" style={{ right: -140, top: 40, width: 520, height: 520, background: APRICOT }} />
      <div aria-hidden className="absolute rounded-full pointer-events-none" style={{ left: -90, top: 470, width: 320, height: 320, background: TEAL, opacity: 0.18 }} />
      <div aria-hidden className="absolute rounded-full pointer-events-none" style={{ left: 300, top: 690, width: 120, height: 120, background: APRICOT, opacity: 0.7 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        {/* The frame */}
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] min-h-[560px] lg:min-h-[600px]"
          style={{ background: INK }}
        >
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

          <div className="relative p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-10 min-h-[560px] lg:min-h-[600px]">
            <div className="flex-1 flex flex-col justify-between gap-8" style={{ color: CREAM }}>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="text-[11px] uppercase"
                  style={{ fontFamily: MONO, letterSpacing: "0.12em", opacity: 0.8 }}
                >
                  The collector car services hub
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="font-display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[1.02] tracking-[-0.02em] mt-4 max-w-[13ch]"
                >
                  The right specialist for your collector car.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="text-base sm:text-lg mt-5 max-w-lg leading-relaxed"
                  style={{ opacity: 0.9 }}
                >
                  Shops and specialists are joining every week. Find help with
                  maintenance, restoration, inspections and more, rated by real owners.
                </motion.p>
              </div>

              <motion.form
                action="/services"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="flex items-center gap-2 rounded-full p-2 max-w-2xl"
                style={{ background: CREAM, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
              >
                <label className="flex-1 flex items-center gap-3 pl-4 min-w-0">
                  <Search className="w-5 h-5 shrink-0" style={{ color: MUTED }} aria-hidden />
                  <input
                    type="text"
                    name="q"
                    aria-label="What does your car need?"
                    placeholder="What does your car need?"
                    className="w-full h-11 bg-transparent text-[15px] focus:outline-none min-w-0"
                    style={{ color: INK }}
                  />
                </label>
                <button
                  type="submit"
                  className="h-11 px-5 sm:px-7 rounded-full text-[15px] font-bold shrink-0 transition-colors"
                  style={{ background: TEAL, color: CREAM }}
                >
                  Find a specialist
                </button>
              </motion.form>
            </div>

            {featured && (
              <div className="lg:w-[264px] shrink-0 flex lg:justify-end">
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
                href={`/services?type=${encodeURIComponent(c.key)}`}
                className="flex flex-col gap-3 rounded-2xl bg-white p-4 text-[15px] font-medium transition-colors hover:bg-[#E6F3F2]"
                style={{ color: INK, border: `1px solid ${RULE}` }}
              >
                <TradeIcon k={c.key} className="w-8 h-8" />
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
