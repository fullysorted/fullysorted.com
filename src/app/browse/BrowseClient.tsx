"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, Car } from "lucide-react";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Vehicle } from "@/lib/sample-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = [
  "All",
  "Muscle",
  "European",
  "JDM",
  "Vintage",
  "Modern Classic",
  "Track / Race",
  "Barn Finds",
];

interface BrowseClientProps {
  initialListings: Vehicle[];
  hasRealListings?: boolean;
}

export function BrowseClient({ initialListings, hasRealListings = false }: BrowseClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = initialListings.filter((v) => {
    const matchesCategory =
      activeCategory === "All" || v.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      {/* Photo Header Banner — heritage green over real metal */}
      <div className="relative overflow-hidden py-12 sm:py-16">
        {/* Photography backdrop */}
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(15,32,50,0.72), rgba(15,32,50,0.84))" }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #1E6091 35%, #B08D3F 65%, transparent)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex gap-1" aria-hidden="true">
                <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
                <span className="w-1.5 h-1.5" style={{ background: "#29ABE2" }} />
                <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-white/85">
                Collector Car Marketplace
              </span>
            </div>
            <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl mb-2 text-white [text-wrap:balance] leading-[1.08]">
              Browse Listings
            </h1>
            <p className="text-sm mb-8 text-white/75">
              {hasRealListings
                ? `${initialListings.length} ${initialListings.length === 1 ? "car" : "cars"} available · No dealers, direct from owners`
                : "No listings yet · Be the first to list your car"}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="flex gap-3 max-w-2xl"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#9a9a8a" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by make, model, year..."
                className="w-full h-12 pl-11 pr-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition-colors"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#1a1a18",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70"
                  style={{ color: "#9a9a8a" }}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 h-12 rounded-xl text-sm font-medium transition-colors shrink-0 border",
                showFilters
                  ? "bg-white text-accent border-white"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all shrink-0 border",
                activeCategory === cat
                  ? "bg-accent border-accent text-white shadow-sm"
                  : "bg-white border-stone-200 text-stone-500 hover:text-stone-800 hover:border-stone-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white border border-stone-200 rounded-2xl p-5 mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 shadow-sm">
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Year Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Price Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Transmission
              </label>
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white">
                <option>Any</option>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Condition
              </label>
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white">
                <option>Any</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Project</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Location
              </label>
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent bg-white">
                <option>Anywhere</option>
                <option>San Diego, CA</option>
                <option>Los Angeles, CA</option>
                <option>California</option>
              </select>
            </div>
          </div>
        )}

        {/* Results */}
        {filtered.length > 0 ? (
          <>
            <p className="text-sm text-stone-400 mb-4">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((vehicle, i) => (
                <ListingCard key={vehicle.id} vehicle={vehicle} index={i} />
              ))}
            </div>
          </>
        ) : initialListings.length === 0 ? (
          // No listings at all — launch state
          <div className="text-center py-24">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: "var(--accent-light)" }}
            >
              <Car className="w-10 h-10" style={{ color: "var(--accent)" }} />
            </div>
            <h2 className="font-display font-semibold tracking-tight text-2xl text-stone-800 mb-2">
              No listings yet
            </h2>
            <p className="text-stone-400 max-w-sm mx-auto mb-8">
              Be the first to list your collector car on Fully Sorted. Zero
              commissions, serious buyers only.
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              List Your Car — From $9.99
            </Link>
          </div>
        ) : (
          // Filters returned no results
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-stone-800">
              No cars match your filters
            </p>
            <p className="text-stone-400 mt-2">
              Try broadening your search or clearing some filters
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 text-sm font-semibold rounded-lg border text-accent border-accent hover:bg-accent-light transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
