"use client";

import { useState } from "react";
import {
  Search,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  DollarSign,
  Info,
  ArrowRight,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";

/* ---------- mock comparable data ---------- */
interface Comparable {
  source: string;
  title: string;
  price: number;
  date: string;
  sold: boolean;
  url: string;
}

interface ValuationResult {
  year: number;
  make: string;
  model: string;
  variant: string;
  avgPrice: number;
  lowPrice: number;
  highPrice: number;
  trend: "up" | "down" | "flat";
  trendPct: number;
  compCount: number;
  chrisTake: string;
  recentComps: Comparable[];
}

const mockResult: ValuationResult = {
  year: 1973,
  make: "Porsche",
  model: "911T",
  variant: "Targa",
  avgPrice: 62800,
  lowPrice: 44000,
  highPrice: 89000,
  trend: "down",
  trendPct: 3.2,
  compCount: 22,
  chrisTake:
    "Air-cooled 911s have cooled off about 12% from the 2023 peak. That's not a crash — that's the market catching its breath. If you've been waiting to get into a clean SC or a 3.2 Carrera, this is your window. They're not getting cheaper than this.",
  recentComps: [
    { source: "BaT", title: "1973 Porsche 911T Targa — Silver / Black", price: 58500, date: "Mar 12, 2026", sold: true, url: "#" },
    { source: "BaT", title: "1973 Porsche 911T Targa — Sepia Brown", price: 64200, date: "Feb 28, 2026", sold: true, url: "#" },
    { source: "BaT", title: "1972 Porsche 911T Targa — Signal Orange", price: 71000, date: "Feb 15, 2026", sold: true, url: "#" },
    { source: "Classic.com", title: "1973 Porsche 911T Targa — Light Ivory", price: 55000, date: "Jan 30, 2026", sold: true, url: "#" },
    { source: "BaT", title: "1974 Porsche 911 Targa — Bitter Chocolate", price: 48000, date: "Jan 18, 2026", sold: true, url: "#" },
    { source: "Private", title: "1973 Porsche 911T Targa — Viper Green", price: 82000, date: "Jan 5, 2026", sold: true, url: "#" },
  ],
};

/* ---------- popular searches ---------- */
const popularSearches = [
  "Porsche 911", "Ford Mustang", "BMW M3 E30", "Datsun 240Z",
  "Chevrolet Corvette C2", "Toyota Supra A80", "Mercedes-Benz 300SL",
  "Ferrari 308", "Jaguar E-Type", "Chevrolet Camaro Z/28",
];

export function ValueGuideClient() {
  const [searched, setSearched] = useState(false);
  const [yearInput, setYearInput] = useState("");
  const [makeInput, setMakeInput] = useState("");
  const [modelInput, setModelInput] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearched(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-4">
          <BarChart3 className="w-3.5 h-3.5" />
          Powered by Real Auction Data
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Value Guide
        </h1>
        <p className="text-text-secondary mt-2 text-lg">
          What is your collector car worth? Enter any year, make, and model to
          get a pricing verdict backed by real auction results and my 25 years of
          market experience.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-border rounded-xl p-5 sm:p-6 mb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Year
            </label>
            <input
              type="number"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              placeholder="e.g. 1973"
              className="w-full h-12 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Make
            </label>
            <input
              type="text"
              value={makeInput}
              onChange={(e) => setMakeInput(e.target.value)}
              placeholder="e.g. Porsche"
              className="w-full h-12 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Model
            </label>
            <input
              type="text"
              value={modelInput}
              onChange={(e) => setModelInput(e.target.value)}
              placeholder="e.g. 911T"
              className="w-full h-12 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-12 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Get Valuation
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        {!searched && (
          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    const parts = s.split(" ");
                    setMakeInput(parts[0]);
                    setModelInput(parts.slice(1).join(" "));
                    setSearched(true);
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>

      {/* Results */}
      {searched && (
        <div className="space-y-6">
          {/* Pricing Summary */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                {mockResult.year} {mockResult.make} {mockResult.model}{" "}
                {mockResult.variant}
              </h2>
              <p className="text-sm text-text-secondary mt-0.5">
                Based on {mockResult.compCount} comparable sales &middot; Last 18 months
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="px-6 py-5 text-center">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                  Low
                </p>
                <p className="price-display text-xl text-foreground">
                  {formatPrice(mockResult.lowPrice)}
                </p>
              </div>
              <div className="px-6 py-5 text-center bg-accent-light/40">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                  Average
                </p>
                <p className="price-display text-2xl text-accent font-bold">
                  {formatPrice(mockResult.avgPrice)}
                </p>
              </div>
              <div className="px-6 py-5 text-center">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                  High
                </p>
                <p className="price-display text-xl text-foreground">
                  {formatPrice(mockResult.highPrice)}
                </p>
              </div>
              <div className="px-6 py-5 text-center">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                  12-Mo Trend
                </p>
                <div className="flex items-center justify-center gap-1.5">
                  {mockResult.trend === "up" && <TrendingUp className="w-5 h-5 text-green" />}
                  {mockResult.trend === "down" && <TrendingDown className="w-5 h-5 text-accent" />}
                  {mockResult.trend === "flat" && <Minus className="w-5 h-5 text-text-tertiary" />}
                  <span
                    className={cn(
                      "price-display text-xl",
                      mockResult.trend === "up" && "text-green",
                      mockResult.trend === "down" && "text-accent",
                      mockResult.trend === "flat" && "text-text-secondary"
                    )}
                  >
                    {mockResult.trend === "down" ? "-" : mockResult.trend === "up" ? "+" : ""}
                    {mockResult.trendPct}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chris's Take */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                CP
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Chris&apos;s Take
                </p>
                <p className="text-text-secondary mt-1 leading-relaxed">
                  &ldquo;{mockResult.chrisTake}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Recent Comparables */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-foreground">
                Recent Comparable Sales
              </h3>
              <span className="text-xs text-text-secondary">
                {mockResult.recentComps.length} results
              </span>
            </div>
            <div className="divide-y divide-border">
              {mockResult.recentComps.map((comp, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 hover:bg-surface/50 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {comp.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs px-1.5 py-0.5 bg-surface rounded text-text-secondary font-medium">
                        {comp.source}
                      </span>
                      <span className="text-xs text-text-tertiary">{comp.date}</span>
                    </div>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <p className="price-display text-sm text-foreground">
                      {formatPrice(comp.price)}
                    </p>
                    {comp.sold && (
                      <span className="text-xs text-green font-medium">Sold</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Factors */}
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">
                What Affects the Price
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Increases value</p>
                  <p className="text-text-secondary">
                    Matching numbers, rare colors, documented history, low mileage,
                    original paint, desirable options (sunroof delete, sport seats)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Decreases value</p>
                  <p className="text-text-secondary">
                    Non-matching engine, repainted in non-original color, accident
                    history, automatic transmission (in this model), high mileage,
                    rust
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-4">
            <p className="text-sm text-text-secondary mb-3">
              Have a {mockResult.year} {mockResult.make} {mockResult.model} to sell?
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              List It on Fully Sorted <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
