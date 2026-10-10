"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * Closing band. One photograph from the founder's archive under a navy wash,
 * one headline, two buttons. The checkered-flag corner, speed lines, tricolour
 * dots and diagonal overlay that used to sit on top were removed 2026-09-01.
 */
export function CTASection() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl p-8 sm:p-12 lg:p-16"
          style={{ background: "#12352A" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/archive/concours-lawn.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(18,53,42,0.94) 0%, rgba(18,53,42,0.8) 55%, rgba(18,53,42,0.45) 100%)" }}
          />

          <div className="max-w-2xl relative">
            <p className="text-[11px] uppercase mb-5" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: "#F2B27A" }}>
              Start here
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
              Let&apos;s get it sorted<span style={{ color: "#F2B27A" }}>.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: "#F2B27A", color: "#12352A" }}
              >
                Find a Pro
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/50 text-white text-sm font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-colors"
              >
                List your car
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
