"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Camera, ClipboardCheck, Paintbrush, Warehouse, Truck, Wrench,
  Hammer, Shield, ShieldCheck,
} from "lucide-react";
import { SERVICE_CATEGORIES, REFERRAL_SERVICES } from "@/lib/service-categories";

/**
 * Homepage services section.
 *
 * Renders every live category — the name promises the whole ownership year
 * handled, so a homepage that visibly narrows works against it. Membership and
 * order come from lib/service-categories; this component assumes nothing about
 * how many there are.
 *
 * The previous version advertised financing, insurance, valuation and
 * documentation, none of which are real directory categories, so those links
 * silently fell back to an unfiltered list.
 */
const ICONS: Record<string, (cls: string) => React.ReactNode> = {
  photography: (c) => <Camera className={c} />,
  inspection: (c) => <ClipboardCheck className={c} />,
  detailing: (c) => <Paintbrush className={c} />,
  storage: (c) => <Warehouse className={c} />,
  transport: (c) => <Truck className={c} />,
  mechanical: (c) => <Wrench className={c} />,
  restoration: (c) => <Hammer className={c} />,
  bodywork: (c) => <Shield className={c} />,
};

export function ServicesSection() {
  const verbs = SERVICE_CATEGORIES.map((c) => c.verb.toLowerCase()).join(", ");

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
              The whole ownership year
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[2.6rem] font-semibold leading-[1.1] tracking-tight max-w-3xl" style={{ color: "#1a1a18" }}>
            Everything the car needs,{" "}
            <span style={{ color: "#6b6b5e" }}>and the person who does it.</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            {verbs.charAt(0).toUpperCase() + verbs.slice(1)}. We&apos;re signing founding
            specialists across Southern California first, so the directory is deep where
            you actually need it rather than thin everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_CATEGORIES.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
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
                    {ICONS[c.key]?.("w-7 h-7")}
                  </div>
                  <span
                    className="absolute top-3.5 left-4 text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {c.verb}
                  </span>
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

        {/*
          Referral services. Not directory categories — there is nobody local to
          review or book — so they get their own card and their own page rather
          than a /services?type= link that would return nothing.
        */}
        {REFERRAL_SERVICES.map((r, i) => (
          <motion.div
            key={r.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5"
          >
            <Link
              href={r.href}
              className="group relative flex flex-col sm:flex-row sm:items-center gap-5 overflow-hidden rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#0F2032" }}
            >
              <span
                className="absolute -bottom-8 right-4 font-display font-semibold leading-none select-none pointer-events-none"
                style={{ fontSize: "8rem", color: "rgba(255,255,255,0.05)" }}
                aria-hidden
              >
                {String(SERVICE_CATEGORIES.length + i + 1).padStart(2, "0")}
              </span>
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: r.tint, color: "#fff" }}
              >
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex-1 relative">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "#D9BC72" }}
                >
                  {r.verb}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight mt-1" style={{ color: "#fff" }}>
                  {r.longLabel}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed max-w-2xl" style={{ color: "#9fb5cd" }}>
                  {r.blurb}
                </p>
              </div>
              <span
                className="relative inline-flex items-center gap-1.5 text-sm font-bold shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{ color: "#8FBBDF" }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4"
        >
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            Can&apos;t find the trade you need?{" "}
            <Link href="/services/apply" className="font-bold" style={{ color: "#1E6091" }}>
              Tell us who should be on here
            </Link>
            .
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold"
            style={{ color: "#1E6091" }}
          >
            Browse the whole directory <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
