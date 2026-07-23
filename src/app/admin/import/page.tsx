"use client";

import { useState } from "react";
import { Loader2, UploadCloud, CheckCircle2, FileUp, Code2, Database } from "lucide-react";

const CSV_TEMPLATE = "make,model,year,trim,sale_price,auction_date,auction_house,mileage,exterior_color,vin,source_url,sold\nPorsche,911,1973,Carrera RS,1250000,2025-08-15,RM Sotheby's,41000,Grand Prix White,9113600123,https://example.com/lot/123,true";

export default function AdminImportPage() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("import");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<null | { received: number; valid: number; inserted: number; updated: number; skipped: number }>(null);
  const [error, setError] = useState("");

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setText(String(reader.result || ""));
    reader.readAsText(file);
  }

  async function run() {
    setBusy(true); setError(""); setResult(null);
    const trimmed = text.trim();
    const isJson = trimmed.startsWith("[") || trimmed.startsWith("{");
    try {
      const res = await fetch("/api/admin/import/auction-results", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isJson ? { json: trimmed, source } : { csv: trimmed, source }),
      });
      const d = await res.json();
      if (res.ok) setResult(d);
      else setError(d.error || "Import failed");
    } catch { setError("Network error — try again."); }
    setBusy(false);
  }

  const input = "w-full px-3 py-2.5 bg-white border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 mb-1">
        <Database className="w-5 h-5" style={{ color: "#1E6091" }} />
        <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Import auction results</h1>
      </div>
      <p className="text-sm text-text-secondary mb-8">Paste a CSV or JSON export, or upload a file. Rows are normalized and de-duplicated, then upserted into the market database — instantly feeding the Value Guide, model snapshots, and comparisons.</p>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-3 mb-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">CSV or JSON</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={12}
            placeholder="Paste CSV (with a header row) or a JSON array of result objects…"
            className={input + " font-mono text-xs resize-y"} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">Source label</label>
          <input value={source} onChange={(e) => setSource(e.target.value)} className={input} placeholder="e.g. rm-sothebys" />
          <label className="mt-3 inline-flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg border border-border bg-white cursor-pointer hover:border-accent transition-colors w-full">
            <FileUp className="w-4 h-4" style={{ color: "#1E6091" }} /> Upload file
            <input type="file" accept=".csv,.json,.txt" onChange={onFile} className="hidden" />
          </label>
          <button onClick={run} disabled={busy || !text.trim()}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />} Import
          </button>
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "#DC2626" }}>{error}</p>}

      {result && (
        <div className="rounded-xl p-4 mb-6 flex flex-wrap gap-x-6 gap-y-1 items-center" style={{ background: "rgba(106,176,76,0.1)", border: "1px solid rgba(106,176,76,0.3)" }}>
          <CheckCircle2 className="w-5 h-5" style={{ color: "#4b8b2e" }} />
          <span className="text-sm font-semibold text-foreground">Imported.</span>
          <span className="text-sm text-text-secondary"><b className="text-foreground">{result.inserted}</b> new · <b className="text-foreground">{result.updated}</b> updated · {result.skipped} skipped · {result.received} received</span>
        </div>
      )}

      {/* Docs */}
      <details className="rounded-xl border border-border bg-white p-5">
        <summary className="text-sm font-bold text-foreground cursor-pointer flex items-center gap-2"><Code2 className="w-4 h-4" style={{ color: "#1E6091" }} /> CSV template & API ingestion</summary>
        <div className="mt-4 space-y-4 text-sm text-text-secondary">
          <div>
            <p className="font-semibold text-foreground mb-1">Accepted columns</p>
            <p><code>make</code>, <code>model</code>, <code>year</code> (required: make + model + year or sale_price); optional <code>trim</code>, <code>sale_price</code>, <code>currency</code>, <code>sold</code>, <code>auction_date</code>, <code>auction_house</code>, <code>mileage</code>, <code>transmission</code>, <code>exterior_color</code>, <code>vin</code>, <code>location</code>, <code>source_url</code>, <code>external_id</code>, <code>notes</code>. Column names are matched loosely (spaces/case ignored).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">CSV template</p>
            <pre className="text-[11px] bg-surface rounded-lg p-3 overflow-x-auto" style={{ whiteSpace: "pre" }}>{CSV_TEMPLATE}</pre>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Programmatic ingestion (for a licensed feed)</p>
            <p className="mb-2">Set <code>INGEST_API_KEY</code> in the environment, then POST batches (≤5,000 rows) — idempotent, safe to re-send:</p>
            <pre className="text-[11px] bg-surface rounded-lg p-3 overflow-x-auto" style={{ whiteSpace: "pre-wrap" }}>{`curl -X POST https://fullysorted.com/api/ingest/auction-results \\
  -H "x-ingest-key: $INGEST_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"source":"classic-feed","rows":[
    {"make":"Porsche","model":"911","year":1973,"trim":"Carrera RS","sale_price":1250000,"auction_date":"2025-08-15","auction_house":"RM Sotheby'"'"'s","external_id":"rm-2025-123"}
  ]}'`}</pre>
            <p className="mt-2">Dedup is automatic: pass a stable <code>external_id</code> per record and re-sends update in place rather than duplicating.</p>
          </div>
        </div>
      </details>
    </div>
  );
}
