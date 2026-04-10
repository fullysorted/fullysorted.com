"use client";

import { useState, useTransition } from "react";
import {
  Search,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  DollarSign,
  Info,
  ArrowRight,
  Loader2,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";

/* ---------- Types ---------- */
interface Comp {
  id: number;
  source: string;
  lot_title: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  sale_price: number;
  auction_date?: string;
  auction_house?: string;
  mileage?: number;
  transmission?: string;
  exterior_color?: string;
  thumbnail_url?: string;
  source_url?: string;
  sold: boolean;
}

interface ValuationResult {
  comps: Comp[];
  total: number;
  avgPrice: number | null;
  medianPrice: number | null;
  highPrice: number | null;
  lowPrice: number | null;
  source: string;
  error?: string;
}

/* ---------- Popular Searches ---------- */
const popularSearches = [
  { label: "Porsche 911", year: "", make: "Porsche", model: "911" },
  { label: "Ford Mustang", year: "1967", make: "Ford", model: "Mustang" },
  { label: "BMW M3 E30", year: "1988", make: "BMW", model: "M3" },
  { label: "Datsun 240Z", year: "1972", make: "Datsun", model: "240Z" },
  { label: "Toyota Supra MK4", year: "1994", make: "Toyota", model: "Supra" },
  { label: "Honda NSX", year: "1992", make: "Honda", model: "NSX" },
  { label: "Ferrari 308", year: "1980", make: "Ferrari", model: "308" },
  { label: "Jaguar E-Type", year: "1965", make: "Jaguar", model: "E-Type" },
  { label: "Chevrolet Camaro", year: "1969", make: "Chevrolet", model: "Camaro" },
  { label: "Mazda RX-7 FD", year: "1993", make: "Mazda", model: "RX-7" },
];

/* ---------- Helper components ---------- */
function TrendBadge({ trend, pct }: { trend: "up" | "down" | "flat"; pct: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold",
        trend === "up" && "text-green",
        trend === "down" && "text-accent",
        trend === "flat" && "text-text-secondary"
      )}
    >
      {trend === "up" && <TrendingUp className="w-4 h-4" />}
      {trend === "down" && <TrendingDown className="w-4 h-4" />}
      {trend === "flat" && <Minus className="w-4 h-4" />}
      {trend === "up" ? "+" : trend === "down" ? "-" : "±"}
      {pct}%
    </span>
  );
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Unknown date";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function chrisTake(year: number, make: string, model: string, avgPrice: number | null, total: number): string {
  if (total < 3) {
    return `There's limited sales data for the ${year} ${make} ${model} in our database. Try broadening the year range, or check back as we add more auction results daily.`;
  }
  if (!avgPrice) return "Not enough data to produce a valuation for this vehicle.";

  const makes: Record<string, string> = {
    porsche: "Air-cooled Porsches have softened from their 2022–23 peaks, but well-documented cars with no rust and matching numbers still command strong prices. Focus on service history and originality.",
    bmw: "The BMW collector market rewards originality and documentation. E30 M3s and 2002tiis especially — any evidence of track use or modifications will hurt you significantly.",
    ford: "First-gen Mustangs have the deepest buyer pool of any American classic. Condition is everything — a driver-quality car and a show car aren't even the same market.",
    chevrolet: "The Chevy muscle market is bifurcated: numbers-matching concours cars and daily-driver restorations. Know which bucket you're in before you price it.",
    toyota: "JDM Toyotas are on a sustained run. The MK4 Supra and AE86 especially — supply is constrained and enthusiast demand keeps climbing.",
    honda: "The NSX market has matured. NA1s in original colors with clean history are the sweet spot. Modified cars take a real hit compared to stock examples.",
    ferrari: "Ferraris require extra scrutiny on service records — a missed cam belt or clutch job can mean $20–40k in deferred costs. Price the car accordingly.",
    mercedes: "SL Pagodas and W113s are steady earners, not speculative plays. Quality of restoration matters enormously — amateur work destroys value fast.",
    jaguar: "E-Types remain the most beautiful cars ever made, but they're also maintenance-intensive. Buyers price in their mechanical complexity.",
    datsun: "The Z-car market has been quietly strong. 240Zs still reward condition and originality — unrestored survivors are getting serious money.",
    mazda: "The FD RX-7 is having its moment. Rotary reliability concerns mean buyers pay up for engine-refreshed examples with documentation.",
    lamborghini: "Lamborghini values are institutional now. Countach and Diablo are blue-chip collectibles. Provenance and service history at official dealers is paramount.",
  };

  const makeLower = make.toLowerCase();
  const specific = Object.keys(makes).find(k => makeLower.includes(k));
  return specific ? makes[specific] : `The ${make} ${model} has ${total} comparable sales in our database. The data shows an average of ${formatPrice(avgPrice)}, with significant spread based on condition, mileage, and originality.`;
}

/* ---------- Main Component ---------- */
export function ValueGuideClient() {
  const [yearInput, setYearInput] = useState("");
  const [makeInput, setMakeInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [yearRange, setYearRange] = useState("3");
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [searched, setSearched] = useState(false);
  const [searchedFor, setSearchedFor] = useState({ year: "", make: "", model: "" });
  const [isPending, startTransition] = useTransition();
  const [fetchError, setFetchError] = useState<string | null>(null);

  async function doSearch(year: string, make: string, model: string) {
    if (!make || !model) return;
    setSearched(true);
    setSearchedFor({ year, make, model });
    setFetchError(null);
    setResult(null);

    startTransition(async () => {
      try {
        const params = new URLSearchParams({
          make,
          model,
          yearRange,
          ...(year ? { year } : {}),
        });
        if (!year) params.set("year", "0");

        const res = await fetch(`/api/market/comps?${params}`);
        const data = await res.json();
        if (data.error && !data.comps) throw new Error(data.error);
        setResult(data);
      } catch (err: unknown) {
        setFetchError(err instanceof Error ? err.message : "Failed to fetch comparables");
      }
    });
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    doSearch(yearInput, makeInput, modelInput);
  }

  function handlePopularSearch(s: typeof popularSearches[0]) {
    setYearInput(s.year);
    setMakeInput(s.make);
    setModelInput(s.model);
    doSearch(s.year, s.make, s.model);
  }

  // Determine trend from comps (compare first 5 vs last 5 by date)
  function deriveTrend(comps: Comp[]): { trend: "up" | "down" | "flat"; pct: number } {
    const sorted = [...comps].sort((a, b) =>
      new Date(a.auction_date || 0).getTime() - new Date(b.auction_date || 0).getTime()
    );
    if (sorted.length < 6) return { trend: "flat", pct: 0 };
    const half = Math.floor(sorted.length / 2);
    const older = sorted.slice(0, half).map(c => c.sale_price).filter(Boolean);
    const newer = sorted.slice(half).map(c => c.sale_price).filter(Boolean);
    if (!older.length || !newer.length) return { trend: "flat", pct: 0 };
    const avgOlder = older.reduce((a, b) => a + b, 0) / older.length;
    const avgNewer = newer.reduce((a, b) => a + b, 0) / newer.length;
    const pct = Math.abs(((avgNewer - avgOlder) / avgOlder) * 100);
    if (pct < 1.5) return { trend: "flat", pct: Math.round(pct * 10) / 10 };
    return { trend: avgNewer > avgOlder ? "up" : "down", pct: Math.round(pct * 10) / 10 };
  }

  const trendInfo = result?.comps ? deriveTrend(result.comps) : null;

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
          see what cars like yours actually sell for — real auction results,
          not ask prices.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-border rounded-xl p-5 sm:p-6 mb-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              Year
            </label>
            <input
              type="number"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              placeholder="e.g. 1973"
              min="1900"
              max="2020"
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
              placeholder="e.g. 911"
              className="w-full h-12 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
              ±Year Range
            </label>
            <select
              value={yearRange}
              onChange={(e) => setYearRange(e.target.value)}
              className="w-full h-12 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
            >
              <option value="1">±1 year</option>
              <option value="2">±2 years</option>
              <option value="3">±3 years</option>
              <option value="5">±5 years</option>
              <option value="10">±10 years</option>
            </select>
          </div>
          <div className="flex items-end col-span-2 sm:col-span-1">
            <button
              type="submit"
              disabled={isPending || !makeInput || !modelInput}
              className="w-full h-12 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              {isPending ? "Searching..." : "Get Valuation"}
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
                  key={s.label}
                  type="button"
                  onClick={() => handlePopularSearch(s)}
                  className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>

      {/* Loading */}
      {isPending && (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-6 h-6 animate-spin text-accent" />
          <span>Searching auction database…</span>
        </div>
      )}

      {/* Error */}
      {fetchError && !isPending && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-800 text-sm">Couldn&apos;t fetch comparables</p>
            <p className="text-red-600 text-xs mt-1">{fetchError}</p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && !isPending && (
        <div className="space-y-6">
          {/* Pricing Summary */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                {searchedFor.year && `${searchedFor.year} `}
                {searchedFor.make} {searchedFor.model}
              </h2>
              <p className="text-sm text-text-secondary mt-0.5">
                Based on {result.total} comparable {result.total === 1 ? "sale" : "sales"}{" "}
                {yearInput ? `· ${parseInt(yearInput) - parseInt(yearRange)} – ${parseInt(yearInput) + parseInt(yearRange)}` : ""}
                {" · "}aggregated market comps
              </p>
            </div>

            {result.total === 0 ? (
              <div className="px-6 py-10 text-center">
                <AlertCircle className="w-10 h-10 text-text-tertiary mx-auto mb-3" />
                <p className="font-medium text-foreground">No comparable sales found</p>
                <p className="text-sm text-text-secondary mt-1 max-w-sm mx-auto">
                  Try broadening the year range or adjusting the make/model. We&apos;re adding
                  auction data daily — check back soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    Low
                  </p>
                  <p className="price-display text-xl text-foreground">
                    {result.lowPrice ? formatPrice(result.lowPrice) : "—"}
                  </p>
                </div>
                <div className="px-6 py-5 text-center bg-accent-light/40">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                    Average
                  </p>
                  <p className="price-display text-2xl text-accent font-bold">
                    {result.avgPrice ? formatPrice(result.avgPrice) : "—"}
                  </p>
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    Median
                  </p>
                  <p className="price-display text-xl text-foreground">
                    {result.medianPrice ? formatPrice(result.medianPrice) : "—"}
                  </p>
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    High
                  </p>
                  <p className="price-display text-xl text-foreground">
                    {result.highPrice ? formatPrice(result.highPrice) : "—"}
                  </p>
                </div>
              </div>
            )}

            {trendInfo && result.total >= 6 && (
              <div className="px-6 py-3 border-t border-border bg-surface/30 flex items-center gap-3">
                <span className="text-xs text-text-secondary">Price trend (older vs. newer sales):</span>
                <TrendBadge trend={trendInfo.trend} pct={trendInfo.pct} />
              </div>
            )}
          </div>

          {/* Chris's Take */}
          {result.total > 0 && (
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full text-white flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#C1440E" }}
                >
                  CP
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Chris&apos;s Take
                  </p>
                  <p className="text-text-secondary mt-1 leading-relaxed">
                    &ldquo;{chrisTake(
                      parseInt(searchedFor.year) || 0,
                      searchedFor.make,
                      searchedFor.model,
                      result.avgPrice,
                      result.total
                    )}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Recent Comparables */}
          {result.comps.length > 0 && (
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  Recent Comparable Sales
                </h3>
                <span className="text-xs text-text-secondary">
                  {result.total} results
                </span>
              </div>
              <div className="divide-y divide-border">
                {result.comps.map((comp) => (
                  <div
                    key={comp.id}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-surface/50 transition-colors"
                  >
                    {comp.thumbnail_url && (
                      <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-surface">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={comp.thumbnail_url}
                          alt={comp.lot_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">
                        {comp.lot_title}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                        <span className="text-xs px-1.5 py-0.5 bg-surface rounded text-text-secondary font-medium">
                          Market comp
                        </span>
                        <span className="text-xs text-text-tertiary">
                          {formatDate(comp.auction_date)}
                        </span>
                        {comp.mileage && (
                          <span className="text-xs text-text-tertiary">
                            {comp.mileage.toLocaleString()} mi
                          </span>
                        )}
                        {comp.exterior_color && (
                          <span className="text-xs text-text-tertiary">
                            {comp.exterior_color}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right ml-2 shrink-0 flex flex-col items-end gap-1">
                      <p className="price-display text-sm text-foreground font-semibold">
                        {formatPrice(comp.sale_price)}
                      </p>
                      {comp.sold ? (
                        <span className="text-xs text-green font-medium">Sold</span>
                      ) : (
                        <span className="text-xs text-text-tertiary">Listed</span>
                      )}
                      {comp.source_url && (
                        <a
                          href={comp.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:underline flex items-center gap-0.5"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                    Matching numbers, rare factory colors, documented history, low mileage,
                    original paint, desirable options, fresh professional service
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Decreases value</p>
                  <p className="text-text-secondary">
                    Non-matching engine or drivetrain, non-original color, accident history,
                    modified (for most segments), high mileage, deferred maintenance, rust
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-4">
            <p className="text-sm text-text-secondary mb-3">
              Have a {searchedFor.year && `${searchedFor.year} `}
              {searchedFor.make} {searchedFor.model} to sell?
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
