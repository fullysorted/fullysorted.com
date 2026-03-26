"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Vehicle } from "@/lib/sample-data";

interface FeaturedListingsProps {
  listings?: Vehicle[];
}

export function FeaturedListings({ listings = [] }: FeaturedListingsProps) {
  // Show featured first, then fall back to any active listings, max 8
  const featured = [
    ...listings.filter((v) => v.featured),
    ...listings.filter((v) => !v.featured),
  ].slice(0, 8);

  return (
    <section className="relative py-14 sm:py-20" style={{ background: "#faf9f7" }}>
      {/* Subtle top transition from dark services section */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(232,114,42,0.18) 40%, rgba(106,176,76,0.18) 60%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px" style={{ background: "#E8722A" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#E8722A" }}
              >
                Hand-picked
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Featured Listings
            </h2>
            <p className="text-text-secondary mt-1">
              {featured.length > 0
                ? "The ones worth your attention this week"
                : "Listings will appear here once approved"}
            </p>
          </div>
          {featured.length > 0 && (
            <Link
              href="/browse"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity"
              style={{ color: "#E8722A" }}
            >
              Browse All
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

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
                style={{ color: "#E8722A" }}
              >
                Browse All Listings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 border border-dashed border-stone-200 rounded-2xl">
            <p className="text-stone-400 mb-4">No listings yet</p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "#E8722A" }}
            >
              List Your Car — $3.99
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
