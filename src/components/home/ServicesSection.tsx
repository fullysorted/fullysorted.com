"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES, REFERRAL_SERVICES } from "@/lib/service-categories";

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
const INK = "#1a1a18";
const MUTED = "#6b6b5e";
const BLUE = "#1E6091";
const GOLD = "#B08D3F";
const RULE = "rgba(26,26,24,0.12)";

export function ServicesSection() {
  const verbs = SERVICE_CATEGORIES.map((c) => c.verb.toLowerCase());
  const verbLine =
    verbs.length > 1
      ? verbs.slice(0, -1).join(", ") + " and " + verbs[verbs.length - 1]
      : verbs.join("");

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
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: MUTED }}>
              The whole ownership year
            </p>
            <h2 className="font-display text-3xl sm:text-[2.6rem] font-semibold leading-[1.1] tracking-tight" style={{ color: INK }}>
              Everything the car needs, and the person who does it.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-9">
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              {verbLine.charAt(0).toUpperCase() + verbLine.slice(1)}. In that order,
              usually. We are signing founding specialists region by region, so the
              directory is deep where you need it rather than thin everywhere.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {SERVICE_CATEGORIES.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            >
              <Link
                href={`/services?type=${c.key}`}
                className="group flex h-full flex-col pt-4"
                style={{ borderTop: `2px solid ${INK}` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="price-display text-xs tabular-nums" style={{ color: MUTED }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                    {c.verb}
                  </span>
                </div>
                <h3 className="font-display text-[1.35rem] font-semibold tracking-tight leading-snug mt-3" style={{ color: INK }}>
                  {c.longLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: MUTED }}>
                  {c.blurb}
                </p>
                <p className="mt-4 font-display text-sm italic" style={{ color: MUTED }}>
                  &ldquo;{c.askedFor}&rdquo;
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: BLUE }}
                >
                  Find one near you <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/*
          Referral services. Not directory categories: there is nobody local to
          review or book, so they get their own row and their own page rather
          than a /services?type= link that would return nothing.
        */}
        {REFERRAL_SERVICES.map((r, i) => (
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
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start rounded-xl p-6 sm:p-8 transition-colors hover:bg-[#F5EFE6]"
              style={{ border: `1px solid ${RULE}`, background: "#faf9f7" }}
            >
              <div className="lg:col-span-3 flex items-baseline gap-3">
                <span className="price-display text-xs tabular-nums" style={{ color: MUTED }}>
                  {String(SERVICE_CATEGORIES.length + i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
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
                style={{ color: BLUE }}
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
            <Link href="/contact" className="font-semibold" style={{ color: BLUE }}>
              Tell us who should be on here
            </Link>
            .
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: BLUE }}
          >
            Browse the whole directory <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
