"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          style={{ background: "#0F2032" }}
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
            style={{ background: "linear-gradient(to right, rgba(15,32,50,0.92) 0%, rgba(15,32,50,0.78) 55%, rgba(15,32,50,0.45) 100%)" }}
          />

          <div className="max-w-2xl relative">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
              Start here
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
              Let&apos;s get it sorted<span style={{ color: "#B08D3F" }}>.</span>
            </h2>
            <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-xl">
              Whatever your car needs, from an inspection before the wire goes to a
              proper detail or a trusted shop, owner-reviewed specialists are one
              search away. And when it&apos;s time to sell: flat fees from $9.99,
              first 100 listings free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sm font-semibold rounded-lg hover:bg-[#F5EFE6] transition-colors"
                style={{ color: "#1a1a18" }}
              >
                Find a Pro
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/50 text-white text-sm font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-colors"
              >
                List your car from $9.99
              </Link>
            </div>
            <Link
              href="/services/apply"
              className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-white/85 hover:text-white transition-colors"
            >
              Work on cars? Get listed free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
