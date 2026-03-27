"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, MapPin, Gauge, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Vehicle } from "@/lib/sample-data";
import { formatPrice, formatMileage } from "@/lib/utils";

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 56 : -56, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -56 : 56, opacity: 0, scale: 0.97 }),
};

function ListingShowcase({ vehicles }: { vehicles: Vehicle[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number, d: number) => {
      setDir(d);
      setIndex((next + vehicles.length) % vehicles.length);
    },
    [vehicles.length]
  );

  useEffect(() => {
    if (paused || vehicles.length <= 1) return;
    const id = setInterval(() => go(index + 1, 1), 4200);
    return () => clearInterval(id);
  }, [index, paused, go, vehicles.length]);

  // Empty state
  if (vehicles.length === 0) {
    return (
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ borderColor: "rgba(0,0,0,0.09)", background: "#fff" }}
      >
        <div
          className="h-52 sm:h-60 flex flex-col items-center justify-center gap-3"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(232,114,42,0.12)" }}>
            <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
              <path d="M8 30l4-12h24l4 12" stroke="#E8722A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="6" y="30" width="36" height="10" rx="3" stroke="#E8722A" strokeWidth="2.5" />
              <circle cx="14" cy="42" r="3" fill="#E8722A" />
              <circle cx="34" cy="42" r="3" fill="#E8722A" />
            </svg>
          </div>
          <p className="text-sm font-medium" style={{ color: "#9a9a8a" }}>Listings coming soon</p>
        </div>
        <div className="p-4 sm:p-5">
          <p className="font-bold text-base" style={{ color: "#1a1a18" }}>Be the first to list</p>
          <p className="text-xs mt-1" style={{ color: "#9a9a8a" }}>$3.99 flat fee · No commissions · Real buyers</p>
          <Link
            href="/sell"
            className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold transition-colors"
            style={{ color: "#E8722A" }}
          >
            List your car <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  const v = vehicles[index];
  if (!v) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#9a9a8a" }}>
          Live Listings
        </span>
        <span className="text-xs ml-auto" style={{ color: "#b0b0a0" }}>
          {index + 1} / {vehicles.length}
        </span>
      </div>

      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.10)", background: "#ffffff" }}>
        {/* Photo */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={v.id}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={v.imageUrl} alt={v.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
              <div
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg text-sm font-bold text-white shadow-lg"
                style={{ background: "#E8722A" }}
              >
                {formatPrice(v.price)}
              </div>
              {v.sortedPrice && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background: "#6ab04c", color: "#fff" }}>
                  ✓ Sorted Price
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="p-4 sm:p-5">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={v.id + "-info"}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.04 }}
            >
              <h3 className="font-bold text-lg leading-snug" style={{ color: "#1a1a18" }}>{v.title}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2" style={{ color: "#9a9a8a" }}>
                <span className="flex items-center gap-1 text-xs"><Gauge className="w-3 h-3" />{formatMileage(v.mileage)}</span>
                <span className="text-xs">{v.transmission}</span>
                <span className="flex items-center gap-1 text-xs"><MapPin className="w-3 h-3" />{v.location}</span>
              </div>
              {v.chrisTake && (
                <p className="text-xs mt-3 leading-relaxed line-clamp-2 italic" style={{ color: "#9a9a8a" }}>
                  &ldquo;{v.chrisTake}&rdquo;
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 pt-3.5" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <Link
              href={`/listings/${v.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-70"
              style={{ color: "#E8722A" }}
            >
              View listing <ArrowRight className="w-3 h-3" />
            </Link>
            {vehicles.length > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => go(index - 1, -1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                  style={{ border: "1px solid rgba(0,0,0,0.12)" }}
                >
                  <ChevronLeft className="w-4 h-4" style={{ color: "#9a9a8a" }} />
                </button>
                <button
                  onClick={() => go(index + 1, 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-stone-100"
                  style={{ border: "1px solid rgba(0,0,0,0.12)" }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: "#9a9a8a" }} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress dots */}
      {vehicles.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {vehicles.map((_, i) => (
            <button key={i} onClick={() => go(i, i > index ? 1 : -1)}>
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "18px" : "5px",
                  height: "5px",
                  background: i === index ? "#E8722A" : "rgba(0,0,0,0.15)",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface HeroProps {
  listings?: Vehicle[];
}

export function Hero({ listings = [] }: HeroProps) {
  // Show up to 6 in the carousel; prefer featured ones first
  const showcaseVehicles = [
    ...listings.filter((v) => v.featured),
    ...listings.filter((v) => !v.featured),
  ].slice(0, 6);

  return (
    <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Texture */}
      <div className="absolute inset-0 speed-lines opacity-4" />

      {/* Glow left */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,114,42,0.1) 0%, transparent 65%)" }}
      />
      {/* Glow right */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(106,176,76,0.07) 0%, transparent 65%)" }}
      />

      {/* Top accent line — hidden here since Header has one on homepage */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, #E8722A 35%, #6ab04c 65%, transparent 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Search + Headline */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-2 rounded-full"
              style={{ border: "1px solid rgba(232,114,42,0.28)", background: "rgba(232,114,42,0.07)" }}
            >
              <div className="flex gap-1">
                {["#E8722A", "#6ab04c", "#29ABE2"].map((c) => (
                  <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
                ))}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8722A" }}>
                Collector Car Services Hub &amp; Marketplace
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.08] tracking-tight"
              style={{ color: "#1a1a18" }}
            >
              Built by{" "}
              <span className="relative" style={{ color: "#E8722A" }}>
                enthusiasts,
                <svg
                  className="absolute -bottom-1 left-0 w-full overflow-visible"
                  viewBox="0 0 200 6"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: "6px" }}
                >
                  <path
                    d="M0 5 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5"
                    stroke="#E8722A"
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              for{" "}
              <span style={{ color: "#6ab04c" }}>enthusiasts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg mt-5 max-w-lg leading-relaxed"
              style={{ color: "#6b6b5e" }}
            >
              The complete platform for collector car buyers, sellers, and owners —
              real market data, vetted services, no middlemen, no commissions.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <form action="/browse" className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  style={{ color: "#9ca3af" }}
                />
                <input
                  type="text"
                  name="q"
                  placeholder='Try "1967 Mustang" or "air-cooled Porsche under $80k"'
                  className="w-full h-[54px] pl-12 pr-32 rounded-xl text-sm font-medium focus:outline-none shadow-2xl"
                  style={{ background: "#ffffff", color: "#1a1a18", border: "1px solid rgba(0,0,0,0.12)" }}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 text-white text-sm font-bold rounded-lg transition-all"
                  style={{ background: "#E8722A" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#C85E1E")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#E8722A")}
                >
                  Search
                </button>
              </form>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Muscle", "European", "JDM", "Vintage", "Under $50k"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/browse?category=${encodeURIComponent(cat)}`}
                    className="px-3.5 py-1 text-xs font-semibold rounded-full border transition-all"
                    style={{
                      color: "#6b6b5e",
                      borderColor: "rgba(0,0,0,0.12)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.borderColor = "#E8722A";
                      (e.currentTarget as HTMLElement).style.background = "#E8722A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6b6b5e";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {[
                { value: "$3.99", label: "Flat listing fee" },
                { value: "0%", label: "Commission" },
                { value: "25 years", label: "Market expertise" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold tracking-tight" style={{ color: "#1a1a18" }}>{s.value}</div>
                  <div
                    className="text-[11px] mt-0.5 uppercase tracking-widest"
                    style={{ color: "#9a9a8a" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Rotating listing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="relative"
          >
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(232,114,42,0.06) 0%, transparent 70%)" }}
            />
            <ListingShowcase vehicles={showcaseVehicles} />
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
