"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Paintbrush, ClipboardCheck, Camera, Wrench, Truck, Hammer, Shield } from "lucide-react";
import { FEATURED_CATEGORIES, SERVICE_CATEGORIES } from "@/lib/service-categories";

/**
 * Homepage services section.
 *
 * Built around the three launch categories rather than listing everything.
 * The previous version advertised financing, insurance, storage, valuation and
 * documentation — none of which are real directory categories, so those links
 * silently fell back to an unfiltered list.
 *
 * Order and membership come from lib/service-categories; to promote a
 * different category, move its `featured` flag.
 */
const ICONS: Record<string, React.ReactNode> = {
  detailing: <Paintbrush className="w-7 h-7" />,
  inspection: <ClipboardCheck className="w-7 h-7" />,
  photography: <Camera className="w-7 h-7" />,
  mechanical: <Wrench className="w-4 h-4" />,
  transport: <Truck className="w-4 h-4" />,
  restoration: <Hammer className="w-4 h-4" />,
  bodywork: <Shield className="w-4 h-4" />,
};

const rest = SERVICE_CATEGORIES.filter((c) => !c.featured);

export function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-24" style={{ background: "#faf9f7" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(30,96,145,0.18) 40%, rgba(176,141,63,0.18) 60%, transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-px" style={{ background: "#1E6091" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1E6091" }}>
              Starting with three
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[2.6rem] font-semibold leading-[1.1] tracking-tight max-w-3xl" style={{ color: "#1a1a18" }}>
            The three things owners ask us for{" "}
            <span style={{ color: "#6b6b5e" }}>before anything else.</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            We&apos;re building this category by category, in Southern California first, so the
            people you find are people we can actually vouch for.
          </p>
        </motion.div>

        {/* Featured three */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED_CATEGORIES.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services?type=${c.key}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(0,0,0,0.09)", boxShadow: "0 1px 2px rgba(26,26,24,0.04)" }}
              >
                {/* Colour block header with oversized numeral */}
                <div className="relative h-28 overflow-hidden" style={{ background: c.tint }}>
                  <span
                    className="absolute -bottom-5 right-3 font-display font-semibold leading-none select-none"
                    style={{ fontSize: "6rem", color: "rgba(255,255,255,0.16)" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 speed-lines opacity-20" aria-hidden />
                  <div
                    className="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.94)", color: c.tint }}
                  >
                    {ICONS[c.key]}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold tracking-tight" style={{ color: "#1a1a18" }}>
                    {c.longLabel}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "#6b6b5e" }}>
                    {c.blurb}
                  </p>
                  <p className="mt-4 text-sm italic" style={{ color: "#9a9a8a" }}>
                    &ldquo;{c.askedFor}&rdquo;
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-0.5"
                    style={{ color: c.tint }}
                  >
                    Find one near you <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Everything else — still live, deliberately quieter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-2.5"
        >
          <span className="text-sm mr-1" style={{ color: "#9a9a8a" }}>
            Also on the platform:
          </span>
          {rest.map((c) => (
            <Link
              key={c.key}
              href={`/services?type=${c.key}`}
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
              style={{ borderColor: "rgba(0,0,0,0.12)", background: "#fff", color: "#6b6b5e" }}
            >
              <span style={{ color: c.tint }}>{ICONS[c.key]}</span>
              {c.longLabel}
            </Link>
          ))}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold ml-1"
            style={{ color: "#1E6091" }}
          >
            See the whole directory <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
