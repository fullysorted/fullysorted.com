"use client";

import { useState } from "react";
import { Loader2, Database } from "lucide-react";

// Phone-friendly front end for POST /api/admin/seed-providers.
// Auth is the fs_admin cookie, which the route checks server-side.

type Row = { businessName: string; ok: boolean; id?: number; claimUrl?: string; skipped?: string; error?: string };
type Summary = {
  dryRun: boolean;
  inserted?: number;
  wouldInsert?: number;
  skipped: number;
  skipCounts: Record<string, number>;
  failed: number;
  results: Row[];
};

export default function AdminSeedProvidersPage() {
  const [text, setText] = useState("");
  const [offset, setOffset] = useState("");
  const [limit, setLimit] = useState("");
  const [busy, setBusy] = useState<"dry" | "real" | null>(null);
  const [result, setResult] = useState<Summary | null>(null);
  const [sentInfo, setSentInfo] = useState("");
  const [error, setError] = useState("");

  async function run(dryRun: boolean) {
    setError(""); setResult(null); setSentInfo("");

    let parsed: { providers?: unknown };
    try {
      parsed = JSON.parse(text);
    } catch {
      setError("That is not valid JSON. Paste the whole thing, starting with {\"providers\":[");
      return;
    }
    const all = Array.isArray(parsed?.providers) ? parsed.providers : null;
    if (!all || all.length === 0) {
      setError("No providers array found. The payload must look like {\"providers\":[...]}.");
      return;
    }

    const start = offset.trim() ? Math.max(0, parseInt(offset, 10) || 0) : 0;
    const count = limit.trim() ? Math.max(0, parseInt(limit, 10) || 0) : all.length - start;
    const slice = all.slice(start, start + count);
    if (slice.length === 0) {
      setError(`Nothing in that slice. The array has ${all.length} rows.`);
      return;
    }

    if (!dryRun && !confirm(`Seed ${slice.length} rows (${start + 1} to ${start + slice.length} of ${all.length})?`)) return;

    setBusy(dryRun ? "dry" : "real");
    try {
      const res = await fetch(`/api/admin/seed-providers${dryRun ? "?dryRun=1" : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providers: slice }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.status === 401) setError("Not signed in. Sign in at /admin first, then come back.");
      else if (!res.ok) setError(d.error || `Request failed (${res.status}). Run a dry run on a smaller slice to find the bad row.`);
      else {
        setResult(d as Summary);
        setSentInfo(`Rows ${start + 1} to ${start + slice.length} of ${all.length}. Next offset: ${start + slice.length}.`);
      }
    } catch {
      setError("Network error. Try again.");
    }
    setBusy(null);
  }

  const input = "w-full px-3 py-3 bg-white border border-border rounded-lg text-base text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";
  const label = "block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5";
  const problems = result ? result.results.filter((r) => !r.ok) : [];
  const added = result ? result.results.filter((r) => r.ok && r.claimUrl) : [];

  return (
    <div className="max-w-xl mx-auto py-6">
      <div className="flex items-center gap-2 mb-1">
        <Database className="w-5 h-5" style={{ color: "#1E6091" }} />
        <h1 className="text-2xl font-display font-semibold tracking-tight text-foreground">Seed providers</h1>
      </div>
      <p className="text-sm text-text-secondary mb-6">
        Paste the payload, run a dry run first, then seed. Seeded profiles stay hidden until the shop approves from its claim link.
      </p>

      <label className={label}>Payload (JSON)</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        placeholder='{"providers":[ ... ]}'
        className={input + " font-mono text-xs resize-y"}
      />

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div>
          <label className={label}>Offset</label>
          <input type="number" inputMode="numeric" min={0} value={offset} onChange={(e) => setOffset(e.target.value)} placeholder="0" className={input} />
        </div>
        <div>
          <label className={label}>Limit</label>
          <input type="number" inputMode="numeric" min={1} value={limit} onChange={(e) => setLimit(e.target.value)} placeholder="All" className={input} />
        </div>
      </div>
      <p className="text-xs text-text-tertiary mt-1.5">Optional. Seed in slices of 50: offset 0 limit 50, then offset 50 limit 50, and so on.</p>

      <div className="flex flex-col gap-3 mt-5">
        <button
          onClick={() => run(true)}
          disabled={!!busy || !text.trim()}
          className="w-full inline-flex items-center justify-center gap-2 h-12 text-base font-semibold rounded-lg border-2 disabled:opacity-60"
          style={{ borderColor: "#1E6091", color: "#1E6091", backgroundColor: "#fff" }}
        >
          {busy === "dry" && <Loader2 className="w-4 h-4 animate-spin" />} Dry run
        </button>
        <button
          onClick={() => run(false)}
          disabled={!!busy || !text.trim()}
          className="w-full inline-flex items-center justify-center gap-2 h-12 text-base font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60"
        >
          {busy === "real" && <Loader2 className="w-4 h-4 animate-spin" />} Seed
        </button>
      </div>

      {error && <p className="text-sm mt-4" style={{ color: "#DC2626" }}>{error}</p>}

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-border bg-white p-4 text-sm space-y-1">
            <p className="font-semibold text-foreground">{result.dryRun ? "Dry run. Nothing was written." : "Seeded."}</p>
            <p className="text-text-secondary">{sentInfo}</p>
            <p className="text-foreground">
              {result.dryRun ? "Would insert" : "Inserted"}: <b>{result.dryRun ? result.wouldInsert : result.inserted}</b>
              {" · "}Skipped: <b>{result.skipped}</b>
              {" · "}Errors: <b>{result.failed}</b>
            </p>
            {Object.keys(result.skipCounts || {}).length > 0 && (
              <ul className="text-text-secondary text-xs pt-1">
                {Object.entries(result.skipCounts).map(([reason, n]) => (
                  <li key={reason}>{reason}: {n}</li>
                ))}
              </ul>
            )}
          </div>

          {problems.length > 0 && (
            <div className="rounded-xl border border-border bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Skips and errors</p>
              <ul className="space-y-1.5 text-sm">
                {problems.map((r, i) => (
                  <li key={i} className="break-words">
                    <span className="font-medium text-foreground">{r.businessName}</span>
                    {": "}
                    <span style={{ color: r.error ? "#DC2626" : undefined }} className={r.error ? "" : "text-text-secondary"}>
                      {r.error ? `error: ${r.error}` : `skipped: ${r.skipped}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {added.length > 0 && (
            <div className="rounded-xl border border-border bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Claim links</p>
              <ul className="space-y-2 text-sm">
                {added.map((r, i) => (
                  <li key={i} className="break-all">
                    <span className="font-medium text-foreground">{r.businessName}</span>
                    <br />
                    <a href={r.claimUrl} className="text-accent underline text-xs" target="_blank" rel="noopener noreferrer">{r.claimUrl}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <details className="rounded-xl border border-border bg-white p-4">
            <summary className="text-sm font-semibold text-foreground cursor-pointer">Full response</summary>
            <pre className="mt-3 text-[11px] overflow-x-auto" style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
