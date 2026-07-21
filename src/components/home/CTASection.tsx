"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          style={{ background: '#1E6091' }}
        >
          {/* Full-bleed classic-car photo under a racing-green wash */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(rgba(15,32,50,0.72), rgba(15,32,50,0.85))' }}
          />

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
            {/* Flag dots — tricolor on green */}
            <div className="flex gap-1.5 mb-5">
              {['#fff', '#B08D3F', 'rgba(255,255,255,0.35)'].map((c, i) => (
                <span key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
              ))}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Let&apos;s get it sorted.
            </h2>
            <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-xl">
              Whatever your car needs — an inspection before the wire goes, a proper
              detail, a trusted shop — owner-reviewed specialists are one search away. And when
              it&apos;s time to sell: flat fees from $9.99, first 100
              listings free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Find a Pro
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/50 text-white text-sm font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors"
              >
                List Your Car — From $9.99
              </Link>
            </div>
            <Link
              href="/services/apply/freelancer"
              className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              Work on cars? Get paid doing what you love
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
