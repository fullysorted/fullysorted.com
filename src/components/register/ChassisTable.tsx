"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Scale } from "lucide-react";
import type { RegisterChassisListItem } from "@/lib/data/register";
import { formatEventDate, outcomeLabel } from "@/lib/register/chassis";

/**
 * The register table. Rows arrive already sorted by chassis; this component
 * only filters them (chassis or VIN, client-side) and lays them out as a
 * table on wide screens and as cards on a phone.
 */
export function ChassisTable({ rows, modelSlug }: { rows: RegisterChassisListItem[]; modelSlug: string }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!needle) return rows;
    return rows.filter((r) => r.chassis.includes(needle) || (r.vin ?? "").includes(needle));
  }, [rows, q]);

  const href = (c: string) => `/register/${modelSlug}/${encodeURIComponent(c)}`;
  const na = <span style={{ color: "#cfcabb" }}>&ndash;</span>;

  return (
    <div>
      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#9a9a8a" }} />
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="Search by chassis or VIN"
          aria-label="Search by chassis or VIN"
          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-stone-200 bg-white font-mono focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
        />
      </div>
      <p className="text-xs mb-3" style={{ color: "#9a9a8a" }}>
        {filtered.length === rows.length ? `${rows.length} chassis` : `${filtered.length} of ${rows.length} chassis`}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-12 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-sm" style={{ color: "#6b6b5e" }}>No chassis matches that search. It may not be on public record yet.</p>
        </div>
      ) : (
        <>
          {/* Wide: table */}
          <div className="hidden md:block rounded-2xl bg-white overflow-x-auto" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: "#9a9a8a", borderBottom: "1px solid #e5e5dc" }}>
                  <th className="px-4 py-3">Chassis</th>
                  <th className="px-4 py-3">VIN</th>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Variant</th>
                  <th className="px-4 py-3">Spec</th>
                  <th className="px-4 py-3">Color</th>
                  <th className="px-4 py-3 text-right">Records</th>
                  <th className="px-4 py-3">First record</th>
                  <th className="px-4 py-3">Last record</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => {
                  const lastOutcome = outcomeLabel(r.last_event_outcome);
                  return (
                    <tr key={r.id} style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                      <td className="px-4 py-3 font-mono font-semibold">
                        <Link href={href(r.chassis)} className="hover:underline" style={{ color: "#1E6091" }}>{r.chassis}</Link>
                      </td>
                      <td className="px-4 py-3 font-mono whitespace-nowrap" style={{ color: "#1a1a18" }}>{r.vin ?? na}</td>
                      <td className="px-4 py-3" style={{ color: "#1a1a18" }}>{r.build_year ?? na}</td>
                      <td className="px-4 py-3" style={{ color: "#1a1a18" }}>{r.variant ?? na}</td>
                      <td className="px-4 py-3" style={{ color: "#1a1a18" }}>{r.market_spec ?? na}</td>
                      <td className="px-4 py-3" style={{ color: "#1a1a18" }}>{r.exterior_color ?? na}</td>
                      <td className="px-4 py-3 text-right whitespace-nowrap" style={{ color: "#1a1a18" }}>
                        {r.event_count}
                        {r.disputed_count > 0 && (
                          <span className="ml-1.5 inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider align-middle" style={{ color: "#8a6d2f" }} title={`${r.disputed_count} disputed`}>
                            <Scale className="w-3 h-3" /> disputed
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#6b6b5e" }}>{r.first_event_date ? formatEventDate(r.first_event_date) : na}</td>
                      <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#6b6b5e" }}>
                        {r.last_event_date ? formatEventDate(r.last_event_date) : na}
                        {lastOutcome && <span className="block text-xs" style={{ color: "#9a9a8a" }}>{lastOutcome}</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Narrow: cards */}
          <ul className="md:hidden space-y-3">
            {filtered.map((r) => {
              const lastOutcome = outcomeLabel(r.last_event_outcome);
              return (
                <li key={r.id} className="rounded-2xl bg-white p-4" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <Link href={href(r.chassis)} className="font-mono font-bold text-lg hover:underline" style={{ color: "#1E6091" }}>{r.chassis}</Link>
                    <span className="text-xs whitespace-nowrap" style={{ color: "#6b6b5e" }}>
                      {r.event_count} {r.event_count === 1 ? "record" : "records"}
                      {r.disputed_count > 0 && <span className="ml-1 font-bold uppercase tracking-wider text-[10px]" style={{ color: "#8a6d2f" }}>disputed</span>}
                    </span>
                  </div>
                  <p className="font-mono text-xs mt-1 break-all" style={{ color: "#6b6b5e" }}>{r.vin ?? "VIN not on public record"}</p>
                  <p className="text-sm mt-2" style={{ color: "#1a1a18" }}>
                    {[r.build_year, r.variant, r.market_spec, r.exterior_color].filter(Boolean).join(" · ") || "No chassis-level facts on record"}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#9a9a8a" }}>
                    {r.first_event_date ? `First ${formatEventDate(r.first_event_date)}` : "No dated record"}
                    {r.last_event_date && r.last_event_date !== r.first_event_date ? ` · Last ${formatEventDate(r.last_event_date)}` : ""}
                    {lastOutcome ? ` · ${lastOutcome}` : ""}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
