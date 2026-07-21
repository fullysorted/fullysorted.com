"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Vehicle } from "@/lib/sample-data";

/* ─────────────────────────────────────────────────────────────
   The Marketplace — the homepage's single, strong marketplace
   section. Services lead the site; this is where buying and
   selling get their moment: simple flat fees.
   ───────────────────────────────────────────────────────────── */

interface FeaturedListingsProps {
  listings?: Vehicle[];
}

const valueProps = [
  { stat: "$9.99", label: "Flat listing fee — not 5–10% of your car" },
  { stat: "P2P", label: "Direct owner-to-owner — no dealers in the middle" },
  { stat: "$0", label: "Buyer's premium — the price you see is the price you pay" },
];

export function FeaturedListings({ listings = [] }: FeaturedListingsProps) {
  // Show featured first, then fall back to any active listings, max 8
  const featured = [
    ...listings.filter((v) => v.featured),
    ...listings.filter((v) => !v.featured),
  ].slice(0, 8);

  return (
    <section className="relative py-14 sm:py-20" style={{ background: "#ffffff" }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.07) 50%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px" style={{ background: "#1E6091" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#1E6091" }}
              >
                The Marketplace
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a18" }}>
              When it&apos;s time to buy or sell
            </h2>
            <p className="mt-1 text-sm max-w-xl" style={{ color: "#6b6b5e" }}>
              Peer-to-peer listings with simple flat fees — because the
              platform that services your car shouldn&apos;t take a cut when you sell it.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#1E6091" }}
            >
              Browse Cars <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition-colors hover:bg-stone-50"
              style={{ borderColor: "rgba(0,0,0,0.14)", color: "#1a1a18", background: "#ffffff" }}
            >
              Sell a Car
            </Link>
          </div>
        </motion.div>

        {/* Value props strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
        >
          {valueProps.map((vp) => (
            <div
              key={vp.stat + vp.label}
              className="flex items-center gap-4 px-5 py-4 rounded-xl"
              style={{ background: "#faf9f7", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <span className="price-display text-2xl" style={{ color: "#1E6091" }}>{vp.stat}</span>
              <span className="text-xs leading-snug" style={{ color: "#6b6b5e" }}>{vp.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Grid or Empty State */}
        {featured.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {featured.map((vehicle, i) => (
                <ListingCard key={vehicle.id} vehicle={vehicle} index={i} />
              ))}
            </div>

            {/* Mobile "Browse All" link */}
            <div className="sm:hidden mt-6 text-center">
              <Link
                href="/browse"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#1E6091" }}
              >
                Browse All Listings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div
            className="text-center py-16 rounded-2xl"
            style={{ border: "1.5px dashed rgba(0,0,0,0.15)" }}
          >
            <p className="mb-1 font-bold" style={{ color: "#1a1a18" }}>
              Be the first to list
            </p>
            <p className="mb-5 text-sm" style={{ color: "#9a9a8a" }}>
              From $9.99 · First 100 listings free
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "#1E6091" }}
            >
              List Your Car — From $9.99
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
