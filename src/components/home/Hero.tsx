"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a2e1a] to-[#111111]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Where car people{" "}
            <span className="text-[#6ab04c]">help car people.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/65 mt-6 max-w-2xl leading-relaxed"
          >
            Real market data. Trusted experts. Vetted services. Everything you
            need to find, buy, and care for collector cars — no dealers or
            commissions involved.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10"
          >
            <form className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder='Try "1967 Mustang" or "Porsche under $60k"'
                className="w-full h-14 pl-12 pr-32 bg-white rounded-xl text-foreground placeholder:text-text-tertiary text-base focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Search
              </button>
            </form>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Muscle", "European", "JDM", "Vintage", "Modern Classic", "Barn Finds"].map(
                (cat) => (
                  <a
                    key={cat}
                    href={`/browse?category=${cat.toLowerCase().replace(" ", "-")}`}
                    className="px-3 py-1.5 text-xs font-medium text-white/50 border border-white/20 rounded-full hover:bg-white/10 hover:text-white/80 transition-colors"
                  >
                    {cat}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
