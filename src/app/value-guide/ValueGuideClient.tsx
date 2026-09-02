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
  typicalAvgPrice?: number | null;
  typicalLow?: number | null;
  typicalHigh?: number | null;
  outliersExcluded?: number;
  meanSkewed?: boolean;
  latestSaleDate?: string | null;
  oldestSaleDate?: string | null;
  matchTier?: "exact_model" | "model_family" | "widened_years";
  yearRangeUsed?: number;
  source: string;
  researchSlug?: string | null;
  error?: string;
}

/* ---------- Popular Searches ---------- */
const popularSearches = [
  { label: "Porsche 911", year: "1973", make: "Porsche", model: "911" },
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

/**
 * How much this page is willing to claim, given how many comps stand behind it.
 *
 * The point of a value guide is to be right, and a confident-looking number
 * drawn from three sales is worse than no number — it is the exact failure the
 * product exists to fix. So what we publish is gated on n:
 *
 *   n = 0      nothing
 *   n 1–2      the raw sales only, no estimate at all
 *   n 3–5      a range, explicitly no point estimate
 *   n 6–8      a median plus the full range (n=6 is the smallest sample with a
 *              ≥95% distribution-free confidence interval for the median)
 *   n ≥ 9      a median we are willing to stand on
 *   n ≥ 20     median plus trend
 *
 * No incumbent publishes a minimum-n rule. Publishing ours is the point.
 */
type Confidence = "none" | "raw" | "range" | "median" | "solid";

function confidenceOf(n: number): Confidence {
  if (n <= 0) return "none";
  if (n <= 2) return "raw";
  if (n <= 5) return "range";
  if (n <= 8) return "median";
  return "solid";
}

/**
 * Six comps is the floor for printing ANY midpoint anywhere on this page — the
 * median tile, the condition estimate, the median line on the chart. Below it
 * the page shows sales and a range and nothing else. One component quietly
 * printing a number the tile beside it has just refused to print is the exact
 * failure the minimum-n rule exists to prevent.
 */
function showMidpoint(n: number): boolean {
  const c = confidenceOf(n);
  return c === "median" || c === "solid";
}

/** Year cap on the search box — modern collectibles are collectibles too. */
const CURRENT_YEAR = new Date().getFullYear();

const CONFIDENCE_COPY: Record<Exclude<Confidence, "none">, { label: string; body: string; tone: string; bg: string; border: string }> = {
  raw: {
    label: "Not enough sales for an estimate",
    body: "One or two recorded sales cannot describe a market. The sales themselves are below. Read them as anecdotes, not as a value.",
    tone: "#8a6d1f", bg: "rgba(176,141,63,0.12)", border: "rgba(176,141,63,0.28)",
  },
  range: {
    label: "Directional: range only",
    body: "Too few sales to put a single number on this car honestly, so we are showing what the range looked like rather than a midpoint.",
    tone: "#8a6d1f", bg: "rgba(176,141,63,0.12)", border: "rgba(176,141,63,0.28)",
  },
  median: {
    label: "Reasonable read",
    body: "Enough sales for a median worth using, but not enough to be precise. Use it to frame an offer, not to settle one.",
    tone: "#1E6091", bg: "rgba(30,96,145,0.08)", border: "rgba(30,96,145,0.24)",
  },
  solid: {
    label: "Well supported",
    body: "Enough comparable sales for a median we will stand behind.",
    tone: "#4b8b2e", bg: "rgba(106,176,76,0.12)", border: "rgba(106,176,76,0.30)",
  },
};

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
    porsche: "On air-cooled Porsches, service history and originality separate the strong sales from the average ones. Matching numbers and a clean, rust-free body are what buyers pay up for.",
    bmw: "The BMW market rewards originality and documentation; on the icons like the E30 M3 and 2002tii, any hint of hard track use or modification hurts.",
    ford: "Condition is everything on first-gen Fords. A driver-quality car and a show car aren't the same market, and correct, documented drivetrains carry a premium.",
    chevrolet: "The Chevy market splits sharply between numbers-matching cars and restorations. Know which bucket a given car sits in before you price it.",
    toyota: "Supply is tight on the collectible Toyotas and enthusiast demand keeps climbing; unmodified, original examples command the premium.",
    honda: "Buyers prize original, unmodified cars with clean history. Modified examples take a real hit versus stock.",
    ferrari: "Scrutinize the service records. A missed cam-belt or clutch job can mean serious deferred cost, and the market prices that in.",
    mercedes: "Quality of restoration matters enormously here; amateur work destroys value while documented, correct cars hold it.",
    jaguar: "Beautiful but maintenance-intensive. Buyers price in the mechanical complexity and reward rust-free, sorted cars.",
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
  // Mirror the confidence rule — the prose must not assert a midpoint the
  // stat row has just refused to print.
  const conf = confidenceOf(r.total);
  if (conf === "raw") {
    return `We have ${r.total} recorded ${r.total === 1 ? "sale" : "sales"} for the ${car}, which is not a market. It is an anecdote. Read the ${r.total === 1 ? "sale" : "sales"} below on its own terms, and treat any figure you derive from it with suspicion.`;
  }
  const bits: string[] = [];
  const median = r.medianPrice;
  const avg = r.avgPrice;
  if (conf === "range") {
    if (r.lowPrice && r.highPrice) {
      bits.push(`Across ${r.total} comparable sales, the ${car} changed hands between ${formatPrice(r.lowPrice)} and ${formatPrice(r.highPrice)}. That is too few results to put a single number on the car honestly, so we are not going to.`);
    }
  } else if (median) {
    let s0 = `Across ${r.total} comparable sales, the ${car} centers on about ${formatPrice(median)} (median)`;
    if (avg && !r.meanSkewed) {
      const skew = (avg - median) / median;
      if (skew > 0.12) s0 += `, while the ${formatPrice(avg)} average sits higher: a few exceptional cars are pulling the top of the market up`;
      else if (skew < -0.12) s0 += `, with the ${formatPrice(avg)} average below it: project-grade cars are dragging the mean down`;
    }
    bits.push(s0 + ".");
    if (r.meanSkewed) {
      bits.push(`We're leaving the average out: one result in this set sits far enough above the rest to drag the mean somewhere no ordinary example trades.`);
    }
  }
  if (conf !== "range" && r.lowPrice && r.highPrice && r.highPrice > r.lowPrice) {
    // Quote the IQR-trimmed band when there is one — otherwise this sentence
    // reintroduces the very outlier the stat row just set aside.
    const useTypical = (r.outliersExcluded ?? 0) > 0 && r.typicalLow && r.typicalHigh;
    const lo = useTypical ? r.typicalLow! : r.lowPrice;
    const hi = useTypical ? r.typicalHigh! : r.highPrice;
    bits.push(
      `${useTypical ? "Setting the outliers aside, recent" : "Recent"} results run from ${formatPrice(lo)} to ${formatPrice(hi)}, so condition, originality, and documentation are doing most of the work.`
    );
  }
  if (trend && r.total >= 20) {
    if (trend.trend === "up") bits.push(`Comparing older sales to newer, the trend is up roughly ${trend.pct}%.`);
    else if (trend.trend === "down") bits.push(`Comparing older sales to newer, the trend is down roughly ${trend.pct}%.`);
    else bits.push(`Older and newer sales have been essentially flat.`);
  }
  const wisdom = makeWisdom(make);
  if (wisdom) bits.push(wisdom);
  if (conf === "median") bits.push(`With ${r.total} comparable sales this is a reasonable read, not a precise one: use it to frame an offer rather than to settle one.`);
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
            <title>{`${d.label}: ${formatPrice(d.p)} (${fmtD(d.t)})`}</title>
          </circle>
        ))}
      </svg>
    </div>
  );
}

/* ---------- Glass-box Condition Estimator ----------
   No black box: we read the real distribution of comparable sold prices and map
   the standard collector condition ladder (#1 concours → project) onto where
   cars in each condition actually land in that distribution. Everything shown. */
function percentile(sortedAsc: number[], pct: number): number {
  const n = sortedAsc.length;
  if (n === 0) return 0;
  if (n === 1) return sortedAsc[0];
  const idx = (pct / 100) * (n - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sortedAsc[lo];
  return sortedAsc[lo] + (sortedAsc[hi] - sortedAsc[lo]) * (idx - lo);
}

const CONDITION_GRADES = [
  { key: "concours", label: "Concours", tag: "#1", desc: "Show-winning, better-than-factory. Best cars in the market.", lo: 78, mid: 88, hi: 96 },
  { key: "excellent", label: "Excellent", tag: "#2", desc: "Beautifully restored or a stunning preserved original.", lo: 60, mid: 72, hi: 82 },
  { key: "good", label: "Good", tag: "#3", desc: "A sorted, honest, usable driver: the heart of the market.", lo: 40, mid: 50, hi: 62 },
  { key: "fair", label: "Fair", tag: "#4", desc: "Presentable but needs work: deferred maintenance or cosmetics.", lo: 20, mid: 32, hi: 44 },
  { key: "project", label: "Project", tag: "#5", desc: "Incomplete or needs full restoration. Priced on potential.", lo: 6, mid: 15, hi: 26 },
] as const;

function ConditionEstimator({
  comps,
  car,
  typicalLow,
  typicalHigh,
  outliersExcluded = 0,
}: {
  comps: Comp[];
  car: string;
  typicalLow?: number | null;
  typicalHigh?: number | null;
  outliersExcluded?: number;
}) {
  const [grade, setGrade] = useState<string>("good");
  const [showMethod, setShowMethod] = useState(false);

  // The ladder reads the SHAPE of the distribution, so any lot the comps API
  // already set aside as an outlier must not be allowed to become the
  // "Concours" number. Use the IQR-trimmed band when the API gives us one.
  const prices = comps
    .map((c) => c.sale_price)
    .filter((v): v is number => typeof v === "number" && v > 0)
    .filter(
      (v) =>
        (typicalLow == null || v >= typicalLow) &&
        (typicalHigh == null || v <= typicalHigh)
    )
    .sort((a, b) => a - b);

  // Six — the same floor confidenceOf() uses before the page will print a
  // midpoint. Below it this estimate would contradict the "—" in the median
  // tile a few inches above it.
  if (prices.length < 6) return null;

  const g = CONDITION_GRADES.find((x) => x.key === grade) ?? CONDITION_GRADES[2];
  const est = Math.round(percentile(prices, g.mid));
  const bandLo = Math.round(percentile(prices, g.lo));
  const bandHi = Math.round(percentile(prices, g.hi));
  const median = Math.round(percentile(prices, 50));

  // Clip the axis to p2–p98 so a single outlier doesn't squash the strip.
  const axLo = percentile(prices, 2);
  const axHi = percentile(prices, 98);
  const axSpan = axHi - axLo || axHi || 1;
  const pos = (v: number) => Math.max(0, Math.min(100, ((v - axLo) / axSpan) * 100));
  const thin = prices.length < 9;
  /** Cheapest-to-dearest multiple. High values mean variant spread, not condition spread. */
  const spread = prices[0] > 0 ? prices[prices.length - 1] / prices[0] : 0;

  return (
    <div className="bg-white border border-border rounded-xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Value by condition</h3>
          <p className="text-xs text-text-secondary mt-0.5 max-w-md">
            Not a black-box estimate: pick a condition and see where {car || "cars"} in that shape
            actually land across {prices.length} real sales.
          </p>
        </div>
        <span
          className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
          style={{ color: "#1E6091", backgroundColor: "rgba(30,96,145,0.08)", border: "1px solid rgba(30,96,145,0.25)" }}
        >
          Glass-box
        </span>
      </div>

      {/* Grade selector */}
      <div className="grid grid-cols-5 gap-1.5">
        {CONDITION_GRADES.map((x) => {
          const active = x.key === grade;
          return (
            <button
              key={x.key}
              type="button"
              onClick={() => setGrade(x.key)}
              className={cn(
                "flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg border text-center transition-all",
                active ? "border-transparent text-white" : "border-border text-text-secondary hover:border-accent hover:text-accent"
              )}
              style={active ? { backgroundColor: "#1E6091" } : undefined}
            >
              <span className="text-[11px] font-bold tabular-nums">{x.tag}</span>
              <span className="text-[11px] font-semibold leading-tight">{x.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-text-secondary mt-2 min-h-[2.5em]">{g.desc}</p>

      {/* Estimate */}
      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
          {g.label} ({g.tag})
        </p>
        <p className="price-display text-3xl font-bold" style={{ color: "#1E6091" }}>{formatPrice(est)}</p>
        <p className="text-sm text-text-secondary">
          typical range <span className="font-semibold text-foreground">{formatPrice(bandLo)} – {formatPrice(bandHi)}</span>
        </p>
      </div>

      {/* Distribution strip */}
      <div className="mt-5">
        <div className="relative h-20">
          {/* band highlight */}
          <div
            className="absolute top-6 bottom-6 rounded-md"
            style={{
              left: `${pos(bandLo)}%`,
              width: `${Math.max(1.5, pos(bandHi) - pos(bandLo))}%`,
              backgroundColor: "rgba(176,141,63,0.16)",
              border: "1px solid rgba(176,141,63,0.5)",
            }}
          />
          {/* baseline */}
          <div className="absolute left-0 right-0 top-1/2 h-px" style={{ backgroundColor: "#e6e2da" }} />
          {/* comp ticks */}
          {prices.map((v, i) => (
            <div
              key={i}
              className="absolute w-px"
              style={{
                left: `${pos(v)}%`,
                top: "calc(50% - 9px)",
                height: "18px",
                backgroundColor: "#1E6091",
                opacity: 0.35,
              }}
            />
          ))}
          {/* median marker */}
          <div className="absolute top-4 bottom-4 w-px" style={{ left: `${pos(median)}%`, backgroundColor: "#9a9a8a" }} />
          <span
            className="absolute text-[10px] font-medium"
            style={{ left: `${pos(median)}%`, top: 0, transform: "translateX(-50%)", color: "#9a9a8a" }}
          >
            median
          </span>
          {/* estimate marker */}
          <div
            className="absolute rounded-full"
            style={{
              left: `${pos(est)}%`,
              top: "calc(50% - 7px)",
              width: 14,
              height: 14,
              backgroundColor: "#1E6091",
              border: "2.5px solid #ffffff",
              boxShadow: "0 2px 6px rgba(30,96,145,0.5)",
              transform: "translateX(-50%)",
            }}
          />
          <span
            className="absolute text-[10px] font-bold"
            style={{ left: `${pos(est)}%`, bottom: 0, transform: "translateX(-50%)", color: "#1E6091" }}
          >
            {g.label}
          </span>
        </div>
        <div className="flex justify-between text-[11px] text-text-tertiary mt-1">
          <span>{formatPrice(Math.round(axLo))}</span>
          <span>Each tick = one real sale</span>
          <span>{formatPrice(Math.round(axHi))}</span>
        </div>
      </div>

      {/* Methodology + honesty */}
      <div className="mt-4 pt-4 border-t border-border">
        <button
          type="button"
          onClick={() => setShowMethod((v) => !v)}
          className="text-xs font-semibold flex items-center gap-1"
          style={{ color: "#1E6091" }}
        >
          <Info className="w-3.5 h-3.5" /> How this works
        </button>
        {showMethod && (
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">
            We take the {prices.length} comparable sold prices, sort them, and read the distribution directly.
            Condition maps to where cars in that shape land: Concours (#1) to the top of the market, Good (#3)
            around the median, Project (#5) to the bottom. The point estimate is the middle of that band and the
            range is its edges: computed live from the real sales you can see listed below, never a hidden model.
            {outliersExcluded > 0
              ? ` ${outliersExcluded} sale${outliersExcluded === 1 ? "" : "s"} sat far enough outside the rest of the set to be set aside first, so ${outliersExcluded === 1 ? "it is" : "they are"} not shaping the top of this ladder.`
              : ""}
          </p>
        )}
        {/* The ladder assumes the spread in the set is driven by CONDITION. On a
            comp set that mixes variants — a base Mustang convertible next to a
            GT500KR — the spread is driven by which car it is, and the ladder
            reads high. Say so rather than let the number stand unqualified. */}
        {spread >= 4 && (
          <p className="text-xs mt-2 leading-relaxed" style={{ color: "#8a6d2f" }}>
            The cheapest and dearest sales in this set are {spread.toFixed(1)}× apart, which is
            usually a sign the set mixes variants, not just conditions. Narrow the model
            (add the trim) for a ladder that reads condition alone.
          </p>
        )}
        {thin && (
          <p className="text-xs mt-2 leading-relaxed" style={{ color: "#8a6d2f" }}>
            Only {prices.length} comparable sales here. Treat this as directional, not precise. Broaden the year range for a firmer read.
          </p>
        )}
        <p className="text-[11px] text-text-tertiary mt-2">
          An estimate from recent comparable sales, not a formal appraisal. Options, originality, and documentation move individual cars within these bands.
        </p>
      </div>
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
        // `comps: []` is truthy, so the old `!data.comps` guard never fired and
        // a database failure rendered as the calm "no comparable sales on
        // record" empty state — telling the user the car has no history when
        // in fact we never looked.
        if (!res.ok) throw new Error(data?.error || `Search failed (${res.status})`);
        if (data.error) throw new Error(data.error);
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
    // The comps API requires all three fields. If a preset is ever missing a
    // year, focus the field instead of firing a request that is certain to
    // come back as a red "year, make, and model are required" error.
    if (!s.year) return;
    doSearch(s.year, s.make, s.model);
  }

  // Determine trend from comps (compare first 5 vs last 5 by date)
  function deriveTrend(comps: Comp[]): { trend: "up" | "down" | "flat"; pct: number } {
    // Undated comps used to fall back to the epoch, which parked them at the
    // "old" end of the split and invented a trend out of missing metadata.
    const sorted = comps
      .filter((c) => c.auction_date)
      .sort(
        (a, b) =>
          new Date(a.auction_date as string).getTime() -
          new Date(b.auction_date as string).getTime()
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
    // The page section already supplies the max-width container and padding.
    <div>
      {/* Header */}
      <div className="mb-10">
        {/* "Powered by Real Auction Data" was retired site-wide: the comp set
            is not a licensed feed. The page hero already carries the H1, so
            this is an H2 — two H1s on one URL was also an SEO own-goal. */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-4">
          <BarChart3 className="w-3.5 h-3.5" />
          Sold prices, not asking prices
        </div>
        <h2 className="font-display font-semibold tracking-tight text-2xl sm:text-3xl text-foreground">
          Search the comps
        </h2>
        <p className="text-text-secondary mt-2">
          Enter a year, make, and model. You get what comparable cars actually
          sold for, and, just as importantly, how many sales stand behind the
          number.
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
              max={CURRENT_YEAR}
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
                {/* searchedFor, not the live input — editing the year box after
                    a search used to silently rewrite the range under the results. */}
                {searchedFor.year
                  ? `· ${parseInt(searchedFor.year) - (result.yearRangeUsed ?? parseInt(yearRange))} – ${parseInt(searchedFor.year) + (result.yearRangeUsed ?? parseInt(yearRange))}`
                  : ""}
                {" · "}aggregated market comps
                {result.latestSaleDate
                  ? ` · data through ${formatDate(result.latestSaleDate)}`
                  : ""}
              </p>
              {(() => {
                if (!result.latestSaleDate) return null;
                const ageDays = Math.floor(
                  (Date.now() - new Date(result.latestSaleDate).getTime()) / 86400000
                );
                if (ageDays < 120) return null;
                const months = Math.floor(ageDays / 30);
                return (
                  <p className="text-xs mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md"
                     style={{ color: "#8a6d1f", background: "rgba(176,141,63,0.12)", border: "1px solid rgba(176,141,63,0.28)" }}>
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    Newest comparable sale is about {months} months old. Treat this as directional.
                  </p>
                );
              })()}
              {(() => {
                const c = confidenceOf(result.total);
                if (c === "none") return null;
                const copy = CONFIDENCE_COPY[c];
                return (
                  <div
                    className="mt-3 px-3 py-2 rounded-lg"
                    style={{ background: copy.bg, border: `1px solid ${copy.border}` }}
                  >
                    <p className="text-xs font-bold" style={{ color: copy.tone }}>
                      {copy.label} · {result.total} {result.total === 1 ? "sale" : "sales"}
                    </p>
                    <p className="text-xs mt-0.5 text-text-secondary">{copy.body}</p>
                  </div>
                );
              })()}
              {result.matchTier === "model_family" && (
                <p className="text-xs text-text-tertiary mt-1">
                  Nothing matched &ldquo;{searchedFor.model}&rdquo; exactly, so we broadened to the{" "}
                  {searchedFor.model.split(" ")[0]} family. Check the sales below are really
                  comparable to your car before you lean on the number.
                </p>
              )}
              {result.matchTier === "widened_years" && (
                <p className="text-xs text-text-tertiary mt-1">
                  Exact-year sales were thin, so we widened the window to ±{result.yearRangeUsed} years to give you a usable read.
                </p>
              )}
              {typeof result.outliersExcluded === "number" && result.outliersExcluded > 0 && result.typicalAvgPrice && (
                <p className="text-xs text-text-tertiary mt-1">
                  {result.outliersExcluded} outlier {result.outliersExcluded === 1 ? "sale" : "sales"} set aside: the typical market runs{" "}
                  {formatPrice(result.typicalLow!)} – {formatPrice(result.typicalHigh!)} (avg {formatPrice(result.typicalAvgPrice)}).
                </p>
              )}
            </div>

            {result.total === 0 ? (
              <div className="px-6 py-10 text-center">
                <AlertCircle className="w-10 h-10 text-text-tertiary mx-auto mb-3" />
                <p className="font-medium text-foreground">No comparable sales on record</p>
                <p className="text-sm text-text-secondary mt-1 max-w-md mx-auto">
                  Our comp database doesn&apos;t cover this car yet. It is deep on some
                  segments and thin on others, and we would rather tell you that than
                  produce a number from nothing.
                </p>
                <div className="flex flex-wrap gap-3 justify-center mt-5">
                  <Link
                    href="/submit-sale"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-lg"
                    style={{ background: "#1E6091" }}
                  >
                    Know a sale we&apos;ve missed? Add it
                  </Link>
                  <Link
                    href="/research/models"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border border-border text-text-secondary"
                  >
                    Read the model history instead
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    Low
                  </p>
                  <p className="price-display text-xl text-foreground">
                    {result.lowPrice ? formatPrice(result.lowPrice) : "–"}
                  </p>
                </div>
                <div className="px-6 py-5 text-center bg-accent-light/40">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                    Median
                  </p>
                  {/* Below six comps there is no honest midpoint to print. */}
                  {!showMidpoint(result.total) ? (
                    <>
                      <p className="price-display text-2xl text-text-tertiary font-bold">–</p>
                      <p className="text-[10px] text-text-tertiary mt-1">Too few sales</p>
                    </>
                  ) : (
                    <>
                      <p className="price-display text-2xl text-accent font-bold">
                        {result.medianPrice ? formatPrice(result.medianPrice) : "–"}
                      </p>
                      <p className="text-[10px] text-text-tertiary mt-1">Typical sale</p>
                    </>
                  )}
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    Average
                  </p>
                  {/* One exceptional car wrecks a mean. A four-comp 1965 Corvette
                      set holding a $3.85M L88 printed "Average $1,039,500" against
                      a median of $118,000. When the API flags the mean as dragged,
                      say so instead of showing it. */}
                  {result.meanSkewed ? (
                    <>
                      <p className="price-display text-xl text-text-tertiary">–</p>
                      <p className="text-[10px] text-text-tertiary mt-1 leading-tight">
                        Skewed by an outlier
                      </p>
                    </>
                  ) : (
                    <p className="price-display text-xl text-foreground">
                      {result.avgPrice ? formatPrice(result.avgPrice) : "–"}
                    </p>
                  )}
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                    High
                  </p>
                  <p className="price-display text-xl text-foreground">
                    {result.highPrice ? formatPrice(result.highPrice) : "–"}
                  </p>
                  {/* Without this, a set whose median is suppressed still prints
                      a $3.85M L88 as the biggest number on the page. */}
                  {typeof result.outliersExcluded === "number" &&
                    result.outliersExcluded > 0 &&
                    result.typicalHigh && (
                      <p className="text-[10px] text-text-tertiary mt-1 leading-tight">
                        Outlier sale: typical top {formatPrice(result.typicalHigh)}
                      </p>
                    )}
                </div>
              </div>
            )}

            {trendInfo && result.total >= 20 && (
              <div className="px-6 py-3 border-t border-border bg-surface/30 flex items-center gap-3">
                <span className="text-xs text-text-secondary">Price trend (older vs. newer sales):</span>
                <TrendBadge trend={trendInfo.trend} pct={trendInfo.pct} />
              </div>
            )}
          </div>

          {/* Glass-box condition estimator */}
          {showMidpoint(result.total) && (
            <ConditionEstimator
              comps={result.comps}
              car={`${searchedFor.make} ${searchedFor.model}`.trim()}
              typicalLow={result.typicalLow}
              typicalHigh={result.typicalHigh}
              outliersExcluded={result.outliersExcluded ?? 0}
            />
          )}

          {/* Price over time. The dashed median line is a midpoint like any
              other — below six comps it stays off the chart. */}
          <PriceHistoryChart
            comps={result.comps}
            median={showMidpoint(result.total) ? result.medianPrice : null}
          />

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
