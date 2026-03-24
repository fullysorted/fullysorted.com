"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#1E3A52] to-[#1A1A1A] p-8 sm:p-12 lg:p-16"
        >
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Ready to list your car?
            </h2>
            <p className="text-white/60 mt-4 text-lg leading-relaxed">
              $3.99 gets you a listing with an AI-generated description that
              sounds like a car person wrote it — because the AI was trained by one.
              No commissions. No dealer fees. Just you and the buyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/sell"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-foreground text-sm font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                List Your Car — $3.99
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn About Chris
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
