"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, BadgeCheck, Wrench } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────
   Services-first hero.
   Left: "What does your car need?" search → /services
   Right: rotating service showcase (no DB dependency — never empty)
   ───────────────────────────────────────────────────────────── */

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 56 : -56, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -56 : 56, opacity: 0, scale: 0.97 }),
};

interface ShowcaseService {
  key: string;
  title: string;
  tagline: string;
  desc: string;
  accent: string;
  photo: string;
  href: string;
  icon: React.ReactNode;
}

const showcaseServices: ShowcaseService[] = [
  {
    key: "inspection",
    title: "Pre-Purchase Inspection",
    tagline: "Know before the wire goes",
    desc: "A trusted set of eyes on the car before you commit. Compression numbers, panel gaps, the stuff sellers don't photograph.",
    accent: "#1E6091",
    photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    href: "/services?type=inspection",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="2.5" />
        <path d="M30 30l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 21l4 4 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "detailing",
    title: "Detailing & Paint Correction",
    tagline: "Show-ready, garage-proud",
    desc: "Ceramic coating, full correction, concours prep — specialists who treat your car like their own.",
    accent: "#1E6091",
    photo: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600&q=80",
    href: "/services?type=detailing",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="32" rx="18" ry="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M6 32V20c0-4 8-8 18-8s18 4 18 8v12" stroke="currentColor" strokeWidth="2.5" />
        <path d="M31 8l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" fill="currentColor" fillOpacity="0.9" />
      </svg>
    ),
  },
  {
    key: "transport",
    title: "Enclosed Transport",
    tagline: "Your car rides inside",
    desc: "Door-to-door enclosed hauling, nationwide. Liftgates, soft straps, and drivers who know what they're carrying.",
    accent: "#B08D3F",
    photo: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80",
    href: "/services?type=transport",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 20h8l4 6v8h-12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="13" cy="36" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="37" cy="36" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    key: "mechanical",
    title: "Service & Mechanical",
    tagline: "Wrenches you can trust",
    desc: "Carbs, points, cam chains, cooling systems — mechanics who know your model, not just modern diagnostics ports.",
    accent: "#1E6091",
    photo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80",
    href: "/services?type=mechanical",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M30 8a10 10 0 0 0-9.6 12.8L8 33.2a4 4 0 1 0 5.7 5.7l12.4-12.4A10 10 0 0 0 40 17l-6 6-5-1-1-5 6-6a10 10 0 0 0-4-3Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "restoration",
    title: "Restoration",
    tagline: "Done right, documented",
    desc: "From sympathetic refresh to rotisserie rebuild — craftsmen with the photos, invoices and references to prove it.",
    accent: "#1E6091",
    photo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
    href: "/services?type=restoration",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M10 38 38 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 28l12 12M28 8l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 42l6-2-4-4-2 6Z" fill="currentColor" fillOpacity="0.9" />
      </svg>
    ),
  },
  {
    key: "bodywork",
    title: "Body & Paint",
    tagline: "Panel-fit perfectionists",
    desc: "Metal shaping, color matching, factory-correct finishes. The shops other shops recommend.",
    accent: "#B08D3F",
    photo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80",
    href: "/services?type=bodywork",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 30l4-12h24l4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="30" width="36" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 12l2-4 2 4M30 12l2-4 2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      </svg>
    ),
  },
];

function ServiceShowcase() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number, d: number) => {
      setDir(d);
      setIndex((next + showcaseServices.length) % showcaseServices.length);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1, 1), 4200);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const s = showcaseServices[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#6ab04c" }} />
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#9a9a8a" }}>
          The Services Hub
        </span>
        <span className="text-xs ml-auto" style={{ color: "#b0b0a0" }}>
          {index + 1} / {showcaseServices.length}
        </span>
      </div>

      <div
        className="shine rounded-2xl overflow-hidden border shadow-[0_24px_60px_-20px_rgba(26,26,24,0.35)]"
        style={{ borderColor: "rgba(0,0,0,0.10)", background: "#ffffff" }}
      >
        {/* Visual header */}
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.key}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
              style={{ background: "#1E6091" }}
            >
              {/* Photographic header */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.photo}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Legibility overlay — racing-green wash */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,32,50,0.72) 0%, rgba(15,32,50,0.22) 55%, rgba(15,32,50,0.08) 100%)" }}
              />
              <div
                className="absolute bottom-3 right-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: "rgba(255,255,255,0.94)", color: s.accent }}
              >
                {s.icon}
              </div>
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold shadow-md"
                style={{ background: s.accent, color: "#fff" }}
              >
                {s.tagline}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="p-4 sm:p-5">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.key + "-info"}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.04 }}
            >
              <h3 className="font-bold text-lg leading-snug" style={{ color: "#1a1a18" }}>{s.title}</h3>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: "#6b6b5e" }}>
                {s.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 pt-3.5" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <Link
              href={s.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-70"
              style={{ color: s.accent }}
            >
              Find a pro <ArrowRight className="w-3 h-3" />
            </Link>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => go(index - 1, -1)}
                aria-label="Previous service"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                style={{ border: "1px solid rgba(0,0,0,0.12)" }}
              >
                <ChevronLeft className="w-4 h-4" style={{ color: "#9a9a8a" }} />
              </button>
              <button
                onClick={() => go(index + 1, 1)}
                aria-label="Next service"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                style={{ border: "1px solid rgba(0,0,0,0.12)" }}
              >
                <ChevronRight className="w-4 h-4" style={{ color: "#9a9a8a" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {showcaseServices.map((_, i) => (
          <button key={i} onClick={() => go(i, i > index ? 1 : -1)} aria-label={`Go to service ${i + 1}`}>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === index ? "18px" : "5px",
                height: "5px",
                background: i === index ? "#1E6091" : "rgba(0,0,0,0.15)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Bridge to the marketplace — second billing, still present */}
      <Link
        href="/browse"
        className="group mt-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all hover:-translate-y-0.5"
        style={{ borderColor: "rgba(0,0,0,0.09)", background: "rgba(255,255,255,0.7)" }}
      >
        <span className="text-xs" style={{ color: "#6b6b5e" }}>
          Buying or selling? <span className="font-bold" style={{ color: "#1a1a18" }}>Visit the marketplace</span>
        </span>
        <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: "#1E6091" }} />
      </Link>
    </div>
  );
}

const quickPicks = [
  { label: "Inspection", type: "inspection" },
  { label: "Detailing", type: "detailing" },
  { label: "Transport", type: "transport" },
  { label: "Mechanics", type: "mechanical" },
  { label: "Restoration", type: "restoration" },
  { label: "Body & Paint", type: "bodywork" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  // Gentle parallax on the showcase column as the hero scrolls away
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, -32]);

  return (
    <section ref={heroRef} className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Animated paddock-color mesh + editorial film grain */}
      <div className="absolute inset-0 paddock-mesh pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 speed-lines opacity-[0.03] pointer-events-none" />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Headline + service search */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-2 rounded-full"
              style={{ border: "1px solid rgba(30,96,145,0.28)", background: "rgba(30,96,145,0.07)" }}
            >
              <div className="flex gap-1">
                {["#1E6091", "#1E6091", "#B08D3F"].map((c) => (
                  <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
                ))}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1E6091" }}>
                The Collector Car Services Hub
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-semibold leading-[1.08] tracking-tight"
              style={{ color: "#1a1a18" }}
            >
              Get your car{" "}
              <span className="relative whitespace-nowrap" style={{ color: "#1E6091" }}>
                fully sorted.
                <svg
                  className="absolute -bottom-1 left-0 w-full overflow-visible"
                  viewBox="0 0 200 6"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: "6px" }}
                >
                  <path
                    d="M0 5 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5"
                    stroke="#1E6091"
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg mt-5 max-w-lg leading-relaxed"
              style={{ color: "#6b6b5e" }}
            >
              Trusted specialists for everything your collector car needs — inspection,
              detailing, transport, restoration and more. And when it&apos;s time to buy
              or sell: a marketplace that puts owners first.
            </motion.p>

            {/* Service search */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <form action="/services" className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  style={{ color: "#9ca3af" }}
                />
                <input
                  type="text"
                  name="q"
                  placeholder='What does your car need? Try "inspection" or "ceramic coating"'
                  className="w-full h-[54px] pl-12 pr-32 rounded-xl text-sm font-medium focus:outline-none shadow-2xl"
                  style={{ background: "#ffffff", color: "#1a1a18", border: "1px solid rgba(0,0,0,0.12)" }}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 text-white text-sm font-bold rounded-lg transition-all"
                  style={{ background: "#1E6091" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#174B72")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1E6091")}
                >
                  Find a Pro
                </button>
              </form>

              <div className="flex flex-wrap gap-2 mt-4">
                {quickPicks.map((cat) => (
                  <Link
                    key={cat.type}
                    href={`/services?type=${encodeURIComponent(cat.type)}`}
                    className="px-3.5 py-1 text-xs font-semibold rounded-full border transition-all"
                    style={{
                      color: "#6b6b5e",
                      borderColor: "rgba(0,0,0,0.12)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.borderColor = "#1E6091";
                      (e.currentTarget as HTMLElement).style.background = "#1E6091";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6b6b5e";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {[
                { icon: <BadgeCheck className="w-4 h-4" />, text: "Rated by real owners", accent: "#6ab04c" },
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Transparent flat fees", accent: "#1E6091" },
                { icon: <Wrench className="w-4 h-4" />, text: "25 years in the paddock", accent: "#1E6091" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span style={{ color: item.accent }}>{item.icon}</span>
                  <span className="text-sm font-bold tracking-tight" style={{ color: "#1a1a18" }}>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Rotating service showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            style={{ y: showcaseY }}
            className="relative"
          >
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(30,96,145,0.07) 0%, transparent 70%)" }}
            />
            <ServiceShowcase />
          </motion.div>
        </div>
      </div>

      {/* Bottom feather */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.04))" }}
      />
    </section>
  );
}
