"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Loader2, ShieldAlert, Car, ArrowRight, Info } from "lucide-react";

interface Decoded {
  vin: string;
  modelYear: string | null; make: string | null; model: string | null;
  trim: string | null; series: string | null; bodyClass: string | null;
  vehicleType: string | null; engineCylinders: string | null; displacementL: string | null;
  fuelType: string | null; drivetrain: string | null; transmission: string | null;
  doors: string | null; plantCountry: string | null; plantCity: string | null;
  manufacturer: string | null; errorText: string | null;
}
interface Recall {
  campaign: string; component: string; summary: string;
  consequence: string; remedy: string; reportDate: string;
}

const ACCENT = "#E8722A";

export default function VinPage() {
  const [vin, setVin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [decoded, setDecoded] = useState<Decoded | null>(null);
  const [recalls, setRecalls] = useState<Recall[]>([]);

  async function lookup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(""); setDecoded(null); setRecalls([]);
    try {
      const res = await fetch(`/api/vin/decode?vin=${encodeURIComponent(vin.trim())}`);
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Lookup failed"); }
      else { setDecoded(data.decoded); setRecalls(data.recalls || []); }
    } catch {
      setError("Network error — try again.");
    }
    setLoading(false);
  }

  const rows: [string, string | null][] = decoded ? [
    ["Year", decoded.modelYear], ["Make", decoded.make], ["Model", decoded.model],
    ["Trim / Series", decoded.trim || decoded.series], ["Body", decoded.bodyClass],
    ["Engine", [decoded.displacementL && `${decoded.displacementL}L`, decoded.engineCylinders && `${decoded.engineCylinders}-cyl`].filter(Boolean).join(" ") || null],
    ["Fuel", decoded.fuelType], ["Drivetrain", decoded.drivetrain],
    ["Transmission", decoded.transmission], ["Doors", decoded.doors],
    ["Built in", [decoded.plantCity, decoded.plantCountry].filter(Boolean).join(", ") || null],
    ["Manufacturer", decoded.manufacturer],
  ] : [];

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      {/* Hero */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
            Free VIN Decoder
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ color: "#1a1a18" }}>
            Decode any VIN
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#6b6b5e" }}>
            Enter a 17-character VIN to pull the factory build details — year, make, model, engine,
            and assembly plant — plus any open safety recalls. Powered by the NHTSA public database.
          </p>

          <form onSubmit={lookup} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#9a9a8a" }} />
              <input
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="e.g. WP0AB2964KS123456"
                maxLength={17}
                className="w-full h-12 pl-11 pr-3 text-sm font-mono tracking-wider border rounded-xl focus:outline-none focus:ring-2"
                style={{ borderColor: "rgba(0,0,0,0.12)", caretColor: ACCENT }}
              />
            </div>
            <button
              type="submit"
              disabled={loading || vin.trim().length < 11}
              className="h-12 px-6 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center justify-center gap-2"
              style={{ background: ACCENT }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Car className="w-4 h-4" />}
              {loading ? "Decoding…" : "Decode VIN"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-sm flex items-start gap-2" style={{ color: "#b4451f" }}>
              <Info className="w-4 h-4 mt-0.5 shrink-0" /> {error}
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      {decoded && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
          <div>
            <h2 className="text-lg font-bold mb-1" style={{ color: "#1a1a18" }}>
              {[decoded.modelYear, decoded.make, decoded.model].filter(Boolean).join(" ") || "Decoded vehicle"}
            </h2>
            <p className="text-xs font-mono" style={{ color: "#9a9a8a" }}>{decoded.vin}</p>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <table className="w-full text-sm">
              <tbody>
                {rows.map(([k, v], i) => (
                  <tr key={k} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="px-5 py-3 font-medium w-2/5" style={{ color: "#6b6b5e" }}>{k}</td>
                    <td className="px-5 py-3" style={{ color: v ? "#1a1a18" : "#bbb" }}>{v || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recalls */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "#6b6b5e" }}>
              <ShieldAlert className="w-4 h-4" /> Open Recalls ({recalls.length})
            </h3>
            {recalls.length === 0 ? (
              <p className="text-sm rounded-xl px-4 py-3 bg-white" style={{ color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.07)" }}>
                No open NHTSA recalls returned for this year/make/model. (Older and imported cars may
                simply have no records in the U.S. database.)
              </p>
            ) : (
              <div className="space-y-3">
                {recalls.map((r, i) => (
                  <div key={i} className="rounded-xl p-4 bg-white" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <p className="text-sm font-bold" style={{ color: "#1a1a18" }}>{r.component}</p>
                      {r.campaign && <span className="text-xs font-mono" style={{ color: "#9a9a8a" }}>{r.campaign}</span>}
                    </div>
                    {r.summary && <p className="text-sm mb-2" style={{ color: "#6b6b5e" }}>{r.summary}</p>}
                    {r.remedy && <p className="text-xs" style={{ color: "#6b6b5e" }}><strong>Remedy:</strong> {r.remedy}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl p-4 text-xs leading-relaxed" style={{ background: "rgba(0,0,0,0.03)", color: "#6b6b5e" }}>
            <strong>What this is — and isn’t.</strong> This decodes the VIN using the free, public NHTSA
            vPIC database and lists open U.S. safety recalls. It is <em>not</em> a title, mileage, or
            accident-history report. For title/brand history you need a licensed provider (NMVTIS,
            Carfax, AutoCheck) — we’ll add that through a proper partnership, never by scraping.
          </div>

          {/* Cross-link to research */}
          <Link
            href="/research/models"
            className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
            style={{ color: ACCENT }}
          >
            Explore model histories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
