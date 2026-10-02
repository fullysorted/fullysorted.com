"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TRADE_CATEGORIES, REFERRAL_SERVICES } from "@/lib/service-categories";
import Image from "next/image";
import { OwnershipYearRail, TradeGridPhoto } from "@/components/services/TradeGrid";
import { categoryLabel } from "@/lib/service-categories";
import { formatBusinessName, formatLocation } from "@/lib/provider-format";
import type { RecentProvider } from "@/lib/data/providers";

/**
 * Homepage services section.
 *
 * Renders every live category in the order lib/service-categories gives them,
 * which is the ownership year: buy it, get it home, keep it right, keep it
 * clean, put it away, sell it. Read left to right, the grid is a story.
 *
 * Restyled 2026-09-01. The previous cards each had their own tint (eight
 * colours on one screen), a ghosted numeral, a white icon tile and a
 * three-column grid that left two orphans on the last row. These are
 * typographic cards in one ink, four across on desktop (8 = 2 clean rows),
 * two across on tablet, one on a phone.
 */
const INK = "#12352A";
const MUTED = "#6b6b5e";
const TEAL = "#1C8C87";
const APRICOT_INK = "#B5652A";  // apricot deepened for legibility on paper
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const RULE = "rgba(18,53,42,0.14)";

/*
 * 2026-09-28: the ownership-year rail and trade photo grid moved to
 * /how-it-works. The hero's icon row already lists the trades, so repeating
 * them here made the page busy. This section now shows the newest live
 * providers instead. If none load (outage, empty table) it falls back to the
 * old trade grid so the homepage never shows an empty band.
 */
export function ServicesSection({ providers = [], total = 0 }: { providers?: RecentProvider[]; total?: number }) {
  const verbs = TRADE_CATEGORIES.map((c) => c.verb.toLowerCase());
  const verbLine =
    verbs.length > 1
      ? verbs.slice(0, -1).join(", ") + " and " + verbs[verbs.length - 1]
      : verbs.join("");
  const hasProviders = providers.length > 0;

  return (
    <section className="py-16 sm:py-24" style={{ background: "#ffffff", borderTop: `1px solid ${RULE}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12"
        >
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase mb-4" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
              {hasProviders ? "Recently joined" : "The whole ownership year"}
            </p>
            <h2 className="font-display text-3xl sm:text-[2.6rem] font-semibold leading-[1.1] tracking-tight" style={{ color: INK }}>
              {hasProviders ? "New in the directory." : "Everything the car needs, and the person who does it."}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-9">
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              {hasProviders
                ? "The specialists who have just listed. Reviews come only from owners who used them."
                : `${verbLine.charAt(0).toUpperCase() + verbLine.slice(1)}. In that order, usually.`}
            </p>
          </div>
        </motion.div>

        {/* The ownership year, as a timeline: verb rail then photo cards.
            Swapped in from /about on 2026-09-14. */}
        {hasProviders ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {providers.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group block rounded-xl overflow-hidden transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(18,53,42,0.45)]"
                style={{ border: `1px solid ${RULE}`, background: "#FFFFFF" }}
              >
                <div className="relative aspect-[4/3]" style={{ background: "#F4F6F5" }}>
                  <Image
                    src={p.avatar_url}
                    alt={`${formatBusinessName(p.business_name)} photo`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
                    {categoryLabel(p.category)}
                  </p>
                  <p className="mt-1.5 font-semibold leading-snug group-hover:underline underline-offset-4" style={{ color: INK }}>
                    {formatBusinessName(p.business_name)}
                  </p>
                  {p.location && (
                    <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{formatLocation(p.location)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <>
            <OwnershipYearRail />
            <TradeGridPhoto />
          </>
        )}

        {/*
          Referral services. Not directory categories: there is nobody local to
          review or book, so they get their own row and their own page rather
          than a /services?type= link that would return nothing.
        */}
        {REFERRAL_SERVICES.map((r) => (
          <motion.div
            key={r.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-12"
          >
            <Link
              href={r.href}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start rounded-xl p-6 sm:p-8 transition-colors hover:bg-[#F4F6F5]"
              style={{ border: `1px solid ${RULE}`, background: "#FFFFFF" }}
            >
              <div className="lg:col-span-3 flex items-baseline gap-3">
                <span className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: APRICOT_INK }}>
                  {r.verb}
                </span>
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-[1.35rem] font-semibold tracking-tight" style={{ color: INK }}>
                  {r.longLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed max-w-2xl" style={{ color: MUTED }}>
                  {r.blurb}
                </p>
              </div>
              <span
                className="lg:col-span-2 lg:justify-self-end inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
                style={{ color: TEAL }}
              >
                What to ask for <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <p className="text-sm" style={{ color: MUTED }}>
            {/* An owner recommending their mechanic goes to /contact, the same
                route the directory already uses for "Recommend a Provider". */}
            Can&apos;t find the trade you need?{" "}
            <Link href="/contact" className="font-semibold" style={{ color: TEAL }}>
              Tell us who should be on here
            </Link>
            .
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: TEAL }}
          >
            {total > 0 ? `See all ${total} specialists` : "Browse the whole directory"} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
