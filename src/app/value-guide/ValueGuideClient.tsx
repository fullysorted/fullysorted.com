"use client";

import { useState, useEffect, useTransition } from "react";
import { motion } from "framer-motion";
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
  researchSlug?: string | null;
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
        trend === "down" && "text-red",
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

function makeWisdom(make: string): string {
  const notes: Record<string, string> = {
    porsche: "On air-cooled Porsches, service history and originality separate the strong sales from the average ones — matching numbers and a clean, rust-free body are what buyers pay up for.",
    bmw: "The BMW market rewards originality and documentation; on the icons like the E30 M3 and 2002tii, any hint of hard track use or modification hurts.",
    ford: "Condition is everything on first-gen Fords — a driver-quality car and a show car aren't the same market, and correct, documented drivetrains carry a premium.",
    chevrolet: "The Chevy market splits sharply between numbers-matching cars and restorations — know which bucket a given car sits in before you price it.",
    toyota: "Supply is tight on the collectible Toyotas and enthusiast demand keeps climbing; unmodified, original examples command the premium.",
    honda: "Buyers prize original, unmodified cars with clean history — modified examples take a real hit versus stock.",
    ferrari: "Scrutinize the service records — a missed cam-belt or clutch job can mean serious deferred cost, and the market prices that in.",
    mercedes: "Quality of restoration matters enormously here; amateur work destroys value while documented, correct cars hold it.",
    jaguar: "Beautiful but maintenance-intensive — buyers price in the mechanical complexity and reward rust-free, sorted cars.",
    datsun: "The Z-car market rewards condition and originality; unrestored survivors are increasingly sought after.",
    mazda: "Rotary reliability concerns mean buyers pay up for engine-refreshed, well-documented examples.",
    lamborghini: "Provenance and documented service at official specialists are paramount at this level.",
  };
  const key = Object.keys(notes).find((k) => make.toLowerCase().includes(k));
  return key ? notes[key] : "";
}

function ourTake(
  year: number,
  make: string,
  model: string,
  r: ValuationResult,
  trend: { trend: "up" | "down" | "flat"; pct: number } | null
): string {
  const car = `${year ? year + " " : ""}${make} ${model}`.trim();
  if (r.total < 3) {
    return `There's limited sales data for the ${car} in our database (${r.total} ${r.total === 1 ? "sale" : "sales"}), so treat any number as directional. Try broadening the year range, or check back as we add auction results.`;
  }
  const bits: string[] = [];
  const median = r.medianPrice;
  const avg = r.avgPrice;
  if (median) {
    let s0 = `Across ${r.total} comparable sales, the ${car} centers on about ${formatPrice(median)} (median)`;
    if (avg) {
      const skew = (avg - median) / median;
      if (skew > 0.12) s0 += `, while the ${formatPrice(avg)} average sits higher — a few exceptional cars are pulling the top of the market up`;
      else if (skew < -0.12) s0 += `, with the ${formatPrice(avg)} average below it — project-grade cars are dragging the mean down`;
    }
    bits.push(s0 + ".");
  }
  if (r.lowPrice && r.highPrice && r.highPrice > r.lowPrice) {
    bits.push(`Recent results run from ${formatPrice(r.lowPrice)} to ${formatPrice(r.highPrice)}, so condition, originality, and documentation are doing most of the work.`);
  }
  if (trend && r.total >= 6) {
    if (trend.trend === "up") bits.push(`Comparing older sales to newer, the trend is up roughly ${trend.pct}%.`);
    else if (trend.trend === "down") bits.push(`Comparing older sales to newer, the trend is down roughly ${trend.pct}%.`);
    else bits.push(`Older and newer sales have been essentially flat.`);
  }
  const wisdom = makeWisdom(make);
  if (wisdom) bits.push(wisdom);
  if (r.total < 6) bits.push(`With only ${r.total} comparable sales, treat this as directional rather than precise.`);
  return bits.join(" ");
}

function PriceHistoryChart({ comps, median }: { comps: Comp[]; median: number | null }) {
  const pts = comps
    .filter((c) => c.sale_price && c.auction_date)
    .map((c) => ({ t: new Date(c.auction_date as string).getTime(), p: c.sale_price, label: c.lot_title }))
    .filter((d) => Number.isFinite(d.t))
    .sort((a, b) => a.t - b.t);
  if (pts.length < 5) return null;

  const W = 720, H = 300, mL = 66, mR = 18, mT = 18, mB = 34;
  const iw = W - mL - mR, ih = H - mT - mB;
  const tMin = pts[0].t, tMax = pts[pts.length - 1].t;
  const pMax = Math.max(...pts.map((d) => d.p));
  const pMin = Math.min(...pts.map((d) => d.p));
  const span = pMax - pMin || pMax || 1;
  const yLo = Math.max(0, pMin - span * 0.12);
  const yHi = pMax + span * 0.12;
  const x = (t: number) => mL + (tMax === tMin ? iw / 2 : ((t - tMin) / (tMax - tMin)) * iw);
  const y = (v: number) => mT + ih - ((v - yLo) / (yHi - yLo || 1)) * ih;
  const fmtP = (v: number) => (v >= 1000 ? `$${Math.round(v / 1000)}k` : `$${Math.round(v)}`);
  const fmtD = (t: number) => new Date(t).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const ticks = Array.from({ length: 4 }, (_, i) => yLo + ((yHi - yLo) * i) / 3);

  return (
    <div className="bg-white border border-border rounded-xl p-5 sm:p-6">
      <h3 className="font-semibold text-foreground mb-1">Price over time</h3>
      <p className="text-xs text-text-secondary mb-4">
        Each dot is one comparable sale{median ? <>. The dashed line marks the median ({formatPrice(median)}).</> : "."}
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Comparable sale prices over time" style={{ display: "block" }}>
        {ticks.map((tk, i) => (
          <g key={i}>
            <line x1={mL} x2={W - mR} y1={y(tk)} y2={y(tk)} stroke="#ecebe6" strokeWidth={1} />
            <text x={mL - 8} y={y(tk) + 4} textAnchor="end" fontSize="12" fill="#9a9a8a">{fmtP(tk)}</text>
          </g>
        ))}
        {median != null && median >= yLo && median <= yHi && (
          <line x1={mL} x2={W - mR} y1={y(median)} y2={y(median)} stroke="#B08D3F" strokeWidth={2} strokeDasharray="5 4" />
        )}
        {[tMin, (tMin + tMax) / 2, tMax].map((t, i) => (
          <text key={i} x={x(t)} y={H - 12} textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"} fontSize="12" fill="#9a9a8a">
            {fmtD(t)}
          </text>
        ))}
        {pts.map((d, i) => (
          <circle key={i} cx={x(d.t)} cy={y(d.p)} r={5} fill="#1E6091" fillOpacity={0.82} stroke="#ffffff" strokeWidth={1.5}>
            <title>{`${d.label} — ${formatPrice(d.p)} (${fmtD(d.t)})`}</title>
          </circle>
        ))}
      </svg>
    </div>
  );
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

  // Prefill from URL params (?make=&model=&year=) and auto-search — enables
  // shareable searches and deep links from Research model pages.
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const qMake = sp.get("make");
    const qModel = sp.get("model");
    const qYear = sp.get("year") || "";
    if (qMake && qModel) {
      setYearInput(qYear);
      setMakeInput(qMake);
      setModelInput(qModel);
      doSearch(qYear, qMake, qModel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl text-foreground">
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
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

          {/* Price over time */}
          <PriceHistoryChart comps={result.comps} median={result.medianPrice} />

          {/* Chris's Take */}
          {result.total > 0 && (
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full text-white flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#1E6091" }}
                >
                  FS
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Our Take
                  </p>
                  <p className="text-text-secondary mt-1 leading-relaxed">
                    &ldquo;{ourTake(parseInt(searchedFor.year) || 0, searchedFor.make, searchedFor.model, result, trendInfo)}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.researchSlug && (
            <Link
              href={`/research/models/${result.researchSlug}`}
              className="flex items-center justify-between gap-3 bg-white border border-border rounded-xl p-5 hover:border-accent transition-colors group"
            >
              <div>
                <p className="font-semibold text-foreground text-sm">Read the full history &amp; buyer&apos;s guide</p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Cited {searchedFor.make} {searchedFor.model} model history, specs, production numbers, and what to look for.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-accent shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
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
                <DollarSign className="w-4 h-4 text-red mt-0.5 shrink-0" />
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
        </motion.div>
      )}
    </div>
  );
}
