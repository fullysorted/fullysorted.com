"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Vehicle } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Browse Collector Cars
        </h1>
        <p className="text-text-secondary mt-1">
          {filtered.length} {filtered.length === 1 ? "car" : "cars"} available
          &middot; No dealers, no commissions
          {hasRealListings && <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#EDF7E6', color: '#4a8a32' }}>Live listings</span>}
        </p>
      </div>

      {/* Search + Filter Bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search by make, model, year...'
            className="w-full h-12 pl-11 pr-4 bg-white border border-border rounded-xl text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-tertiary hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-4 h-12 border rounded-xl text-sm font-medium transition-colors shrink-0",
            showFilters
              ? "border-accent bg-accent-light text-accent"
              : "border-border bg-white text-foreground hover:bg-surface"
          )}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors shrink-0",
              activeCategory === cat
                ? "bg-accent text-white"
                : "bg-white border border-border text-text-secondary hover:text-foreground hover:border-border-medium"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filter Panel (expandable) */}
      {showFilters && (
        <div className="bg-white border border-border rounded-xl p-5 mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Year Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Price Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Transmission
            </label>
            <select className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent bg-white">
              <option>Any</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Condition
            </label>
            <select className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent bg-white">
              <option>Any</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Project</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Location
            </label>
            <select className="w-full h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent bg-white">
              <option>Anywhere</option>
              <option>San Diego, CA</option>
              <option>Los Angeles, CA</option>
              <option>California</option>
            </select>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((vehicle, i) => (
            <ListingCard key={vehicle.id} vehicle={vehicle} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-semibold text-foreground">
            No cars match your filters
          </p>
          <p className="text-text-secondary mt-2">
            Try broadening your search or clearing some filters
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2.5 text-sm font-semibold text-accent border border-accent rounded-lg hover:bg-accent-light transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
