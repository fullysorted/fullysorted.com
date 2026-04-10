"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#faf9f7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16"
          style={{ background: '#E8722A' }}
        >
          {/* Speed lines texture */}
          <div className="absolute inset-0 speed-lines opacity-30" />

          {/* Checkered flag corner — bottom right */}
          <div
            className="absolute bottom-0 right-0 w-56 h-56 opacity-10"
            style={{
              backgroundImage: 'repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 75%)',
            }}
          />

          {/* Dark diagonal overlay */}
          <div
            className="absolute top-0 right-0 h-full w-1/3 opacity-20"
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,0.4), transparent)',
            }}
          />

          <div className="max-w-2xl relative z-10">
            {/* Flag dots */}
            <div className="flex gap-1.5 mb-5">
              {['#fff', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.25)'].map((c, i) => (
                <span key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to list your car?
            </h2>
            <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-xl">
              Plans from $9.99 — and the first 100 listings are completely free. AI-powered descriptions that sound like a car person wrote them — because one shaped every word. No commissions. No dealer fees. Let&apos;s get it sorted.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/sell"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                List Your Car — From $9.99
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/50 text-white text-sm font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
