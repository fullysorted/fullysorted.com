import { Gem } from "lucide-react";

/**
 * Rarity Scale — places a model's approximate total production on a log scale
 * against well-known reference cars, so "63,762 built" becomes legible at a
 * glance. Reference figures are widely-documented, stable approximations used
 * purely for scale (not valuation). Nobody else contextualizes rarity visually.
 */

type Anchor = { n: number; label: string };

// Curated reference points spanning ~10^1.5 → ~10^7.3, each a widely-cited
// approximate total. Short labels keep the axis readable on mobile.
const ANCHORS: Anchor[] = [
  { n: 36, label: "250 GTO" },
  { n: 106, label: "McLaren F1" },
  { n: 1315, label: "F40" },
  { n: 9000, label: "DeLorean" },
  { n: 160000, label: "240Z" },
  { n: 1300000, label: "Mustang '65–'68" },
  { n: 21500000, label: "Beetle" },
];

const AXIS_MIN = 20; // ~10^1.3
const AXIS_MAX = 25000000; // ~10^7.4
const L_MIN = Math.log10(AXIS_MIN);
const L_MAX = Math.log10(AXIS_MAX);

function posOf(n: number): number {
  const clamped = Math.max(AXIS_MIN, Math.min(AXIS_MAX, n));
  return ((Math.log10(clamped) - L_MIN) / (L_MAX - L_MIN)) * 100;
}

function tierOf(n: number): { label: string; color: string } {
  if (n < 500) return { label: "Extraordinarily rare", color: "#8a2f2f" };
  if (n < 5000) return { label: "Very rare", color: "#8a5a2f" };
  if (n < 50000) return { label: "Scarce", color: "#8a6d2f" };
  if (n < 500000) return { label: "Uncommon", color: "#1E6091" };
  if (n < 5000000) return { label: "Widely produced", color: "#4a6b7a" };
  return { label: "Mass-produced", color: "#6b6b5e" };
}

function fmt(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(n >= 10000000 ? 0 : 1)}M`;
  if (n >= 1000) return `${Math.round(n / 1000)}k`;
  return `${n}`;
}

function neighborText(total: number, make: string, model: string): string {
  const car = `${make} ${model}`.trim();
  const lower = [...ANCHORS].filter((a) => a.n < total).sort((a, b) => b.n - a.n)[0]; // rarer than these
  const higher = [...ANCHORS].filter((a) => a.n > total).sort((a, b) => a.n - b.n)[0]; // more common than these
  if (lower && higher)
    return `With about ${total.toLocaleString()} built, the ${car} is rarer than a ${higher.label} (~${fmt(higher.n)}) yet more common than a ${lower.label} (~${fmt(lower.n)}).`;
  if (!lower && higher)
    return `At about ${total.toLocaleString()} built, the ${car} is among the rarest cars on this scale — rarer even than a ${higher.label} (~${fmt(higher.n)}).`;
  if (lower && !higher)
    return `At about ${total.toLocaleString()} built, the ${car} sits among the most widely produced — more common than a ${lower.label} (~${fmt(lower.n)}).`;
  return `About ${total.toLocaleString()} were built.`;
}

export function RarityScale({
  total,
  make,
  model,
  notes,
}: {
  total: number;
  make: string;
  model: string;
  notes?: string | null;
}) {
  if (!total || total <= 0) return null;
  const tier = tierOf(total);
  const markerPos = posOf(total);

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-6" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="flex items-center justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <Gem className="w-4 h-4" style={{ color: "#1E6091" }} />
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>How rare is it?</p>
        </div>
        <span
          className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{ color: tier.color, backgroundColor: `${tier.color}14`, border: `1px solid ${tier.color}44` }}
        >
          {tier.label}
        </span>
      </div>

      <p className="text-sm leading-relaxed mt-2 mb-6" style={{ color: "#3a3a34" }}>
        {neighborText(total, make, model)}
      </p>

      {/* Log-scale ladder */}
      <div className="relative" style={{ paddingTop: 26, paddingBottom: 30 }}>
        {/* track */}
        <div
          className="absolute left-0 right-0 rounded-full"
          style={{
            top: 30,
            height: 8,
            background: "linear-gradient(to right, rgba(138,47,47,0.85) 0%, rgba(176,141,63,0.85) 34%, rgba(30,96,145,0.7) 66%, rgba(107,107,94,0.55) 100%)",
          }}
        />

        {/* anchor ticks + labels */}
        {ANCHORS.map((a) => {
          const left = posOf(a.n);
          return (
            <div key={a.label} className="absolute" style={{ left: `${left}%`, top: 26, transform: "translateX(-50%)" }}>
              <div style={{ width: 1, height: 16, backgroundColor: "rgba(0,0,0,0.18)", margin: "0 auto" }} />
              <div className="text-center" style={{ marginTop: 4, whiteSpace: "nowrap" }}>
                <span className="block" style={{ fontSize: 9, color: "#9a9a8a", lineHeight: 1.1 }}>{a.label}</span>
              </div>
            </div>
          );
        })}

        {/* this model's marker */}
        <div className="absolute" style={{ left: `${markerPos}%`, top: 0, transform: "translateX(-50%)", zIndex: 2 }}>
          <span
            className="block px-2 py-0.5 rounded-md font-bold"
            style={{ fontSize: 10, color: "#fff", backgroundColor: "#1E6091", whiteSpace: "nowrap" }}
          >
            {fmt(total)}
          </span>
          <div style={{ width: 2, height: 24, backgroundColor: "#1E6091", margin: "2px auto 0" }} />
          <div
            style={{
              width: 12, height: 12, borderRadius: "50%", backgroundColor: "#1E6091",
              border: "2.5px solid #fff", boxShadow: "0 2px 6px rgba(30,96,145,0.5)", margin: "-3px auto 0",
            }}
          />
        </div>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: "#9a9a8a" }}>
        Approximate total production placed on a log scale against well-known reference cars, for scale only.
        {notes ? " Figures and any disputes are detailed in the production notes and sources." : ""}
      </p>
    </div>
  );
}
