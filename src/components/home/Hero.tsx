"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SERVICE_CATEGORIES, type ServiceCategoryKey } from "@/lib/service-categories";

/*
   Services-first hero.
   Left: "What does your car need?" search → /services
   Right: the ownership year, one service at a time (no DB dependency, never empty)

   Restyled 2026-09-01. The previous version stacked an animated gradient mesh,
   film grain, speed lines, a three-square badge, a squiggle under the headline,
   per-slide icon tiles and alternating blue/gold accents. Individually fine;
   together they read as a template. This version keeps the structure and the
   Heritage Blue tokens and removes the decoration. One accent, one typeface
   pairing, real photographs.
*/

const INK = "#1a1a18";
const MUTED = "#6b6b5e";
const BLUE = "#1E6091";
const GOLD = "#B08D3F";
const RULE = "rgba(26,26,24,0.12)";

/**
 * Showcase copy per category. Photos live in public/images/services (credits
 * in CREDITS.md there) and are named by category key, so adding a category to
 * lib/service-categories and dropping in a photo is the whole job. Order comes
 * from SERVICE_CATEGORIES, which is the ownership year.
 */
const SHOWCASE: Record<ServiceCategoryKey, { tagline: string; desc: string }> = {
  inspection: {
    tagline: "Know before the wire goes",
    desc: "A trusted set of eyes on the car before you commit. Compression numbers, panel gaps, the things sellers do not photograph.",
  },
  transport: {
    tagline: "Your car rides inside",
    desc: "Door-to-door enclosed hauling, nationwide. Liftgates, soft straps, and drivers who know what they are carrying.",
  },
  mechanical: {
    tagline: "Wrenches you can trust",
    desc: "Carbs, points, cam chains, cooling systems. Mechanics who know your model, not just the diagnostic port.",
  },
  bodywork: {
    tagline: "Straight panels, correct paint",
    desc: "Metal shaping, color matching and factory-correct finishes, from the shops other shops recommend.",
  },
  restoration: {
    tagline: "Bare metal to concours lawn",
    desc: "Sympathetic refresh through to a full rotisserie rebuild, with the photos and invoices to prove it.",
  },
  detailing: {
    tagline: "Show-ready, garage-proud",
    desc: "Ceramic coating, full correction and concours prep, by specialists who treat your car like their own.",
  },
  storage: {
    tagline: "A safe home between drives",
    desc: "Climate, security, battery tending and someone who will actually start it. Storing a car well is active, not passive.",
  },
  photography: {
    tagline: "Twelve pictures decide the price",
    desc: "Listing shoots, editorial and event work. Photographers who wait for the light and show the flaws honestly.",
  },
};

const slides = SERVICE_CATEGORIES.map((c) => ({
  key: c.key,
  title: c.longLabel,
  verb: c.verb,
  photo: `/images/services/${c.key}.jpg`,
  href: `/services?type=${c.key}`,
  ...SHOWCASE[c.key],
}));

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
};

function ServiceShowcase() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIndex((next + slides.length) % slides.length);
  }, []);

  // WCAG 2.2.2: auto-advancing content must be pausable, and must not move at
  // all for anyone who has asked the OS for reduced motion.
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(index + 1, 1), 4600);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const s = slides[index];
  const n = String(index + 1).padStart(2, "0");
  const total = String(slides.length).padStart(2, "0");

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="The ownership year, one service at a time"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: MUTED }}>
          The ownership year
        </span>
        <span className="price-display text-xs tabular-nums" style={{ color: MUTED }}>
          {n} / {total}
        </span>
      </div>

      <div
        className="overflow-hidden rounded-xl bg-white"
        style={{ border: `1px solid ${RULE}`, boxShadow: "0 18px 40px -24px rgba(26,26,24,0.35)" }}
      >
        {/* Photograph */}
        <div className="relative aspect-[16/10] overflow-hidden" style={{ background: "#0F2032" }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.key}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.36, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.photo}
                alt=""
                width={1280}
                height={832}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,32,50,0.78) 0%, rgba(15,32,50,0.15) 45%, rgba(15,32,50,0) 70%)" }}
              />
              <div className="absolute left-5 right-5 bottom-4">
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {n} · {s.verb}
                </div>
                <div className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white mt-1">
                  {s.title}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Copy */}
        <div className="px-5 pt-4 pb-4 sm:px-6">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.key + "-copy"}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.04 }}
            >
              <p className="font-display text-base italic" style={{ color: INK }}>{s.tagline}</p>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px solid ${RULE}` }}>
            <Link
              href={s.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: BLUE }}
            >
              Find a specialist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => go(index - 1, -1)}
                aria-label="Previous service"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                style={{ border: `1px solid ${RULE}`, color: INK }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1, 1)}
                aria-label="Next service"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                style={{ border: `1px solid ${RULE}`, color: INK }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Segmented progress: one bar per service, the current one filled */}
      <div className="grid gap-1 mt-3" style={{ gridTemplateColumns: `repeat(${slides.length}, minmax(0, 1fr))` }}>
        {slides.map((sl, i) => (
          <button
            key={sl.key}
            type="button"
            onClick={() => go(i, i > index ? 1 : -1)}
            aria-label={`Show ${sl.title}`}
            aria-current={i === index ? "true" : undefined}
            className="py-1.5"
          >
            <span
              className="block h-[3px] rounded-full transition-colors duration-300"
              style={{ background: i === index ? BLUE : "rgba(26,26,24,0.14)" }}
            />
          </button>
        ))}
      </div>

      {/* Bridge to the marketplace. Second billing, still present. */}
      <Link
        href="/browse"
        className="group mt-4 flex items-center justify-between gap-3 text-sm"
        style={{ color: MUTED }}
      >
        <span>
          Buying or selling? <span className="font-semibold" style={{ color: INK }}>Visit the marketplace</span>
        </span>
        <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: BLUE }} />
      </Link>
    </div>
  );
}

// Every live category, in the canonical order. These use the SHORT label:
// sitting directly under a search box they read as filters.
const quickPicks = SERVICE_CATEGORIES.map((c) => ({ label: c.label, type: c.key as string }));

export function Hero() {
  return (
    <section className="relative" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* LEFT: headline + service search */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: MUTED }}
            >
              The collector car services hub
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display text-[2.7rem] sm:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] tracking-tight"
              style={{ color: INK }}
            >
              Get your car{" "}
              <span className="whitespace-nowrap" style={{ color: BLUE }}>
                fully sorted<span style={{ color: GOLD }}>.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-base sm:text-lg mt-5 max-w-xl leading-relaxed"
              style={{ color: MUTED }}
            >
              The right specialist for whatever your car needs, found in minutes.
              Built by people who have spent their lives around these cars.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 max-w-xl"
            >
              <form action="/services" className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  style={{ color: "#9a9a8a" }}
                  aria-hidden
                />
                <input
                  type="text"
                  name="q"
                  aria-label="What does your car need?"
                  placeholder='What does your car need? Try "inspection" or "ceramic coating"'
                  className="w-full h-[54px] pl-12 pr-[7.5rem] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6091]/30"
                  style={{ background: "#ffffff", color: INK, border: `1px solid ${RULE}`, boxShadow: "0 8px 24px -16px rgba(26,26,24,0.35)" }}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[42px] px-5 text-white text-sm font-semibold rounded-md transition-colors hover:bg-[#174B72]"
                  style={{ background: BLUE }}
                >
                  Find a Pro
                </button>
              </form>

              <div className="flex flex-wrap gap-1 mt-4">
                {quickPicks.map((cat) => (
                  <Link
                    key={cat.type}
                    href={`/services?type=${encodeURIComponent(cat.type)}`}
                    className="px-3 py-1 text-[13px] font-medium rounded-full transition-colors hover:bg-white"
                    style={{ color: INK, border: `1px solid ${RULE}` }}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* One trust row, three claims, no icons. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-3 gap-y-2 mt-10 pt-6 text-sm"
              style={{ borderTop: `1px solid ${RULE}`, color: MUTED }}
            >
              <span className="font-semibold" style={{ color: INK }}>Owner-reviewed specialists</span>
              <span aria-hidden className="hidden sm:inline" style={{ color: GOLD }}>·</span>
              <span className="font-semibold" style={{ color: INK }}>25 years in the paddock</span>
              <span aria-hidden className="hidden sm:inline" style={{ color: GOLD }}>·</span>
              <span className="font-semibold" style={{ color: INK }}>Free to browse</span>
            </motion.div>
          </div>

          {/* RIGHT: the ownership year, one service at a time */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="lg:col-span-5"
          >
            <ServiceShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
