"use client";

import { useState } from "react";
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
      {/* Light Header Banner */}
      <div
        className="relative overflow-hidden py-12 sm:py-16"
        style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2 flex items-center gap-2">
            <div className="w-6 h-px" style={{ background: "#E8722A" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8722A" }}>
              Collector Car Marketplace
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: "#1a1a18" }}>
            Browse Listings
          </h1>
          <p className="text-sm mb-8" style={{ color: "#6b6b5e" }}>
            {hasRealListings
              ? `${initialListings.length} ${initialListings.length === 1 ? "car" : "cars"} available · No dealers, no commissions`
              : "No listings yet · Be the first to list your car"}
          </p>

          {/* Search Bar */}
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#9a9a8a" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by make, model, year..."
                className="w-full h-12 pl-11 pr-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
                style={{
                  background: "#faf9f7",
                  border: "1px solid rgba(0,0,0,0.12)",
                  color: "#1a1a18",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70"
                  style={{ color: "#9a9a8a" }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 h-12 rounded-xl text-sm font-medium transition-colors shrink-0",
                showFilters
                  ? "text-white"
                  : "text-stone-600 hover:text-stone-900"
              )}
              style={{
                background: showFilters ? "#E8722A" : "#faf9f7",
                border: showFilters ? "1px solid #E8722A" : "1px solid rgba(0,0,0,0.12)",
              }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
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
                  ? "text-white shadow-sm"
                  : "bg-white border-stone-200 text-stone-500 hover:text-stone-800 hover:border-stone-300"
              )}
              style={
                activeCategory === cat
                  ? { background: "#E8722A", border: "1px solid #E8722A" }
                  : {}
              }
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
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
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
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Transmission
              </label>
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 bg-white">
                <option>Any</option>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Condition
              </label>
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 bg-white">
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
              <select className="w-full h-9 px-3 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 bg-white">
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
              style={{ background: "rgba(232,114,42,0.1)" }}
            >
              <Car className="w-10 h-10" style={{ color: "#E8722A" }} />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              No listings yet
            </h2>
            <p className="text-stone-400 max-w-sm mx-auto mb-8">
              Be the first to list your collector car on Fully Sorted. Zero
              commissions, serious buyers only.
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "#E8722A" }}
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
              className="mt-4 px-5 py-2.5 text-sm font-semibold rounded-lg border transition-colors"
              style={{ color: "#E8722A", borderColor: "#E8722A" }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
