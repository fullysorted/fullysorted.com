"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#111008' }}>

      {/* Speed lines texture */}
      <div className="absolute inset-0 speed-lines" />

      {/* Bold diagonal orange accent stripe */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full opacity-[0.07]"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, #E8722A 30%, #E8722A 55%, transparent 55%)',
        }}
      />

      {/* Green accent stripe — thinner, offset */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full opacity-[0.05]"
        style={{
          background: 'linear-gradient(135deg, transparent 55%, #6ab04c 55%, #6ab04c 60%, transparent 60%)',
        }}
      />

      {/* Checkered flag corner — top right */}
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle at top right, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black 40%, transparent 75%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-sm" style={{ background: '#E8722A' }} />
              <span className="w-3 h-3 rounded-sm" style={{ background: '#6ab04c' }} />
              <span className="w-3 h-3 rounded-sm" style={{ background: '#29ABE2' }} />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8722A' }}>
              Collector Car Marketplace
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight"
          >
            Where car people{" "}
            <span style={{ color: '#6ab04c' }}>help car people.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 mt-6 max-w-2xl leading-relaxed"
          >
            Real market data. Trusted experts. Vetted services. Find, buy, and care for
            collector cars — no dealers, no commissions, no BS.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10"
          >
            <form className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder='Try "1967 Mustang" or "Porsche under $60k"'
                className="w-full h-14 pl-12 pr-36 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 shadow-xl"
                style={{ '--tw-ring-color': '#E8722A66' } as any}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 text-white text-sm font-bold rounded-lg transition-colors"
                style={{ background: '#E8722A' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#C85E1E')}
                onMouseLeave={e => (e.currentTarget.style.background = '#E8722A')}
              >
                Search
              </button>
            </form>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Muscle", "European", "JDM", "Vintage", "Modern Classic", "Barn Finds"].map((cat) => (
                <a
                  key={cat}
                  href={`/browse?category=${cat.toLowerCase().replace(" ", "-")}`}
                  className="px-3.5 py-1.5 text-xs font-semibold border rounded-full transition-all"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    borderColor: 'rgba(255,255,255,0.15)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = '#E8722A';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(232,114,42,0.1)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {cat}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-8 mt-10 pt-10 border-t border-white/10"
          >
            {[
              { value: "$3.99", label: "Flat listing fee" },
              { value: "0%", label: "Commission" },
              { value: "25yr", label: "Market expertise" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
