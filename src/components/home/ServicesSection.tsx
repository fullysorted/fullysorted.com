"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 8V4M24 44v-4M8 24H4M44 24h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 24a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
        <path d="M24 18v2M24 28v2M18 24h2M28 24h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Pre-Purchase Inspection",
    desc: "A trusted inspector in your area before the wire goes. We can recommend certified specialists nationwide.",
    href: "/services?type=inspection",
    accent: "#E8722A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="4" y="20" width="40" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 28h40" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.4" />
        <circle cx="12" cy="36" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="36" cy="36" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 24l5-8h8l5 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Enclosed Transport",
    desc: "Door-to-door enclosed hauling. Your car rides inside, not on top. Nationwide and cross-border.",
    href: "/services?type=transport",
    accent: "#29ABE2",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6L8 16v16l16 10 16-10V16L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M8 16l16 10 16-10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M24 26V42" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M17 21l7 4 7-4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" strokeLinejoin="round" />
      </svg>
    ),
    title: "Valuation & Appraisal",
    desc: "Written appraisals backed by real comps. For insurance, estates, financing, or just knowing what you have.",
    href: "/value-guide",
    accent: "#6ab04c",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <ellipse cx="24" cy="32" rx="18" ry="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M6 32V20c0-4 8-8 18-8s18 4 18 8v12" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 28c0-2.5 4.5-5 10-5s10 2.5 10 5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="24" cy="20" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Detailing & Paint Correction",
    desc: "Show-ready prep, ceramic coating, full paint correction. Specialists who treat your car like their own.",
    href: "/services?type=detailing",
    accent: "#E8722A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 20h32" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
        <path d="M16 8v8M32 8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 28h4v6h-4zM28 26h4v8h-4z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Collector Car Financing",
    desc: "Agreed-value loans for collector cars at rates that don't treat your 911 like a used Camry.",
    href: "/services?type=financing",
    accent: "#29ABE2",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6L6 14v12c0 10 8 18 18 20 10-2 18-10 18-20V14L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 6L6 14v12c0 10 8 18 18 20 10-2 18-10 18-20V14L24 6Z" fill="currentColor" fillOpacity="0.06" />
        <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Agreed Value Insurance",
    desc: "Policies that actually pay out what your car is worth. Specialist brokers for collector vehicles.",
    href: "/services?type=insurance",
    accent: "#6ab04c",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="20" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 20V14a8 8 0 0 1 16 0v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="31" r="3.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
        <path d="M24 34.5V37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Climate-Controlled Storage",
    desc: "Monitored, climate-controlled facilities that treat your investment the way it deserves.",
    href: "/services?type=storage",
    accent: "#E8722A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 10h24v4l4 4v16H8V18l4-4V10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M8 34h32" stroke="currentColor" strokeWidth="2" />
        <path d="M20 18h8M16 24h16M18 30h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
      </svg>
    ),
    title: "Title & Documentation",
    desc: "Provenance research, title recovery, build sheets, ownership history. Know what you have.",
    href: "/services?type=documentation",
    accent: "#29ABE2",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-24" style={{ background: "#0f0e08" }}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(232,114,42,0.3) 40%, rgba(106,176,76,0.3) 60%, transparent)" }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-px" style={{ background: "#E8722A" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8722A" }}>
                Vetted Specialists
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Everything your car needs,<br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>from people who get it.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white border transition-all shrink-0"
            style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "#E8722A";
              (e.currentTarget as HTMLElement).style.background = "rgba(232,114,42,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.055 }}
            >
              <Link
                href={s.href}
                className="group flex flex-col h-full p-5 rounded-2xl border transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = s.accent + "50";
                  el.style.background = s.accent + "0A";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = `0 20px 40px -12px ${s.accent}25`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ background: s.accent + "18", color: s.accent }}
                >
                  {s.icon}
                </div>

                {/* Text */}
                <h3 className="font-bold text-white text-sm leading-snug mb-2">{s.title}</h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1 mt-4 text-xs font-bold transition-all duration-300"
                  style={{ color: s.accent + "70" }}>
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border"
          style={{ borderColor: "rgba(232,114,42,0.2)", background: "rgba(232,114,42,0.05)" }}
        >
          <div>
            <p className="text-sm font-bold text-white">Are you a specialist?</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Apply to join the Fully Sorted vetted network and get in front of serious car people.
            </p>
          </div>
          <Link
            href="/services/apply"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shrink-0 transition-all"
            style={{ background: "#E8722A" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#C85E1E")}
            onMouseLeave={e => (e.currentTarget.style.background = "#E8722A")}
          >
            Apply to List <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 50%, transparent)" }} />
    </section>
  );
}
