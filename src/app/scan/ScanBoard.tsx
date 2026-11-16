"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Camera, Plus, X, Loader2, ChevronDown, Download } from "lucide-react";
import { PARTS_KINDS, PARTS_CONDITIONS, categoriesFor, type PartsKind } from "@/lib/parts-shared";
import { SCAN_MAX_PHOTOS, SCAN_PHOTO_EDGE, type ScanItem, type ScanUsage, type ScanComp } from "@/lib/scan-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const WARN = "#9a3f2f";
const LINE = "rgba(18,53,42,0.14)";

const field =
  "w-full px-3.5 py-2.5 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

const CONFIDENCE: Record<ScanItem["confidence"], { label: string; color: string }> = {
  high: { label: "Read from print", color: TEAL },
  medium: { label: "Partly read", color: "#8a6d1f" },
  low: { label: "By appearance only", color: WARN },
};

/**
 * Shrink a photo to a JPEG no longer than SCAN_PHOTO_EDGE on its long side.
 * A phone photo is 3 to 8 MB; this makes it a few hundred KB, which uploads
 * fast on a garage signal and costs less to read. It also turns an iPhone
 * HEIC into a JPEG, since Safari can decode HEIC and the model cannot.
 */
async function shrink(file: File): Promise<Blob> {
  let source: ImageBitmap | HTMLImageElement;
  try {
    source = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    source = await new Promise<HTMLImageElement>((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("This browser cannot open that photo. Save it as a JPEG and try again.")); };
      img.src = url;
    });
  }
  const w = source.width, h = source.height;
  const k = Math.min(1, SCAN_PHOTO_EDGE / Math.max(w, h));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(w * k));
  canvas.height = Math.max(1, Math.round(h * k));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("This browser cannot prepare photos.");
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  if ("close" in source) source.close();
  return new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("That photo could not be prepared."))), "image/jpeg", 0.85),
  );
}

type Shot = { key: string; file: File; preview: string };
type Job = { key: string; previews: string[]; files: File[]; urls: string[]; state: "working" | "failed"; step: string; error?: string };

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <span className="block mb-1">
      <span className="text-[13px] font-semibold" style={{ color: INK }}>{children}</span>
      {hint && <span className="text-xs ml-2" style={{ color: MUTED }}>{hint}</span>}
    </span>
  );
}

function money(c: ScanComp) {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: c.currency, maximumFractionDigits: 0 }).format(c.price);
  } catch {
    return `${c.price.toLocaleString("en-US")} ${c.currency}`;
  }
}

export function ScanBoard({ initial, initialTotal, initialUsage, ready }: { initial: ScanItem[]; initialTotal: number; initialUsage: ScanUsage; ready: boolean }) {
  const [items, setItems] = useState<ScanItem[]>(initial);
  const [total, setTotal] = useState(initialTotal);
  const [usage, setUsage] = useState<ScanUsage>(initialUsage);
  const [tray, setTray] = useState<Shot[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const left = Math.max(0, usage.limit - usage.used);

  function pick(files: FileList | null) {
    if (!files?.length) return;
    setNotice(null);
    const room = SCAN_MAX_PHOTOS - tray.length;
    const list = Array.from(files).slice(0, room);
    if (files.length > room) setNotice(`Up to ${SCAN_MAX_PHOTOS} photos an item. The first ${room} were added.`);
    setTray((t) => [...t, ...list.map((file) => ({ key: `${Date.now()}-${Math.random()}`, file, preview: URL.createObjectURL(file) }))]);
    if (fileRef.current) fileRef.current.value = "";
  }

  function patchJob(key: string, p: Partial<Job>) {
    setJobs((js) => js.map((j) => (j.key === key ? { ...j, ...p } : j)));
  }

  /** Upload what is not up yet, then ask for the read. Safe to call again on a failed job: uploaded photos are kept. */
  async function run(job: Job) {
    const urls = [...job.urls];
    try {
      for (let n = urls.length; n < job.files.length; n++) {
        patchJob(job.key, { state: "working", step: `Uploading ${n + 1} of ${job.files.length}`, error: undefined });
        const fd = new FormData();
        fd.append("file", new File([await shrink(job.files[n])], "scan.jpg", { type: "image/jpeg" }));
        const res = await fetch("/api/scan/upload", { method: "POST", body: fd });
        const d = await res.json().catch(() => ({}));
        if (!res.ok || !d.url) throw new Error(d.error || "That photo did not upload.");
        urls.push(d.url);
        patchJob(job.key, { urls: [...urls] });
      }
      patchJob(job.key, { state: "working", step: "Reading", error: undefined });
      const res = await fetch("/api/scan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ photos: urls }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.item) throw new Error(d.error || "The read did not come through. Try that one again.");
      setItems((list) => [d.item as ScanItem, ...list]);
      setTotal((n) => n + 1);
      if (d.usage) setUsage(d.usage as ScanUsage);
      job.previews.forEach((p) => URL.revokeObjectURL(p));
      setJobs((js) => js.filter((j) => j.key !== job.key));
    } catch (e) {
      patchJob(job.key, { state: "failed", urls, step: "", error: e instanceof Error ? e.message : "That did not work." });
    }
  }

  function read() {
    if (!tray.length) return;
    const job: Job = { key: `${Date.now()}-${Math.random()}`, previews: tray.map((s) => s.preview), files: tray.map((s) => s.file), urls: [], state: "working", step: "Preparing" };
    setJobs((js) => [job, ...js]);
    setTray([]);
    setNotice(null);
    void run(job);
  }

  function dropJob(job: Job) {
    job.previews.forEach((p) => URL.revokeObjectURL(p));
    setJobs((js) => js.filter((j) => j.key !== job.key));
  }

  async function more() {
    const last = items[items.length - 1];
    if (!last) return;
    setLoadingMore(true);
    try {
      const res = await fetch(`/api/scan?before=${last.id}`);
      const d = await res.json();
      if (res.ok && Array.isArray(d.items)) {
        setItems((list) => [...list, ...(d.items as ScanItem[]).filter((x) => !list.some((y) => y.id === x.id))]);
        setTotal(d.total ?? total);
      }
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* ── Capture ─────────────────────────────────────────────────────── */}
      <section className="rounded-2xl p-5 sm:p-6" style={{ background: "var(--bg-surface)" }}>
        {!ready ? (
          <p className="text-sm" style={{ color: MUTED }}>The scanner is switched off for the moment. Your inventory below still works.</p>
        ) : (
          <>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {tray.map((s, n) => (
                <div key={s.key} className="relative aspect-square rounded-xl overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.preview} alt={`Photo ${n + 1}`} className="w-full h-full object-cover" />
                  <button type="button" aria-label="Remove photo" onClick={() => { URL.revokeObjectURL(s.preview); setTray((t) => t.filter((x) => x.key !== s.key)); }}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow">
                    <X className="w-3.5 h-3.5" style={{ color: INK }} />
                  </button>
                </div>
              ))}
              {tray.length < SCAN_MAX_PHOTOS && (
                <button type="button" onClick={() => fileRef.current?.click()} disabled={left === 0}
                  className={`${tray.length ? "aspect-square" : "col-span-3 sm:col-span-6 h-28"} rounded-xl flex flex-col items-center justify-center gap-1.5 text-sm font-semibold bg-white disabled:opacity-50`}
                  style={{ border: `1px dashed rgba(18,53,42,0.3)`, color: INK }}>
                  {tray.length ? <Plus className="w-5 h-5" /> : <Camera className="w-6 h-6" />}
                  {tray.length ? "Add" : "Photograph an item"}
                </button>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => pick(e.target.files)} />
            <p className="text-xs mt-3 leading-relaxed" style={{ color: MUTED }}>
              One item at a time, up to {SCAN_MAX_PHOTOS} photos. Include the box label, the baseplate, the part number or the print margin: that is what identifies it.
            </p>
            {tray.length > 0 && (
              <button type="button" onClick={read} className="mt-4 w-full sm:w-auto h-12 px-8 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
                Read {tray.length === 1 ? "this photo" : `these ${tray.length} photos`}
              </button>
            )}
            <p className="text-xs mt-3" style={{ color: left === 0 ? WARN : MUTED }}>
              {left === 0 ? `That is ${usage.limit} scans in a day. It opens again tomorrow.` : `${left} of ${usage.limit} scans left today.`}
            </p>
          </>
        )}
        {notice && <p className="text-sm font-medium mt-3" style={{ color: WARN }}>{notice}</p>}
      </section>

      {/* ── In flight ───────────────────────────────────────────────────── */}
      {jobs.length > 0 && (
        <ul className="space-y-2">
          {jobs.map((j) => (
            <li key={j.key} className="flex items-center gap-3 rounded-2xl p-3 bg-white" style={{ border: `1px solid ${LINE}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={j.previews[0]} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
              <div className="min-w-0 flex-1">
                {j.state === "working" ? (
                  <p className="text-sm font-semibold flex items-center gap-2" style={{ color: INK }}>
                    <Loader2 className="w-4 h-4 animate-spin" /> {j.step}
                  </p>
                ) : (
                  <>
                    <p className="text-sm font-medium" style={{ color: WARN }}>{j.error}</p>
                    <div className="flex gap-4 mt-1">
                      <button type="button" onClick={() => void run(j)} className="text-sm font-semibold" style={{ color: TEAL }}>Try again</button>
                      <button type="button" onClick={() => dropJob(j)} className="text-sm font-semibold" style={{ color: MUTED }}>Discard</button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ── Inventory ───────────────────────────────────────────────────── */}
      <section>
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: INK }}>
            Your inventory <span className="font-semibold" style={{ color: MUTED }}>{total}</span>
          </h2>
          {total > 0 && (
            // A file download, not a page: a plain anchor is the right element.
            <a href="/api/scan/export" download className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: TEAL }}>
              <Download className="w-4 h-4" /> Spreadsheet
            </a>
          )}
        </div>
        {items.length === 0 ? (
          <p className="text-sm" style={{ color: MUTED }}>Nothing scanned yet.</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <ItemRow key={item.id} item={item} open={openId === item.id} staff={usage.staff}
                onToggle={() => setOpenId((id) => (id === item.id ? null : item.id))}
                onChange={(next) => setItems((list) => list.map((x) => (x.id === next.id ? next : x)))}
                onDelete={() => { setItems((list) => list.filter((x) => x.id !== item.id)); setTotal((n) => Math.max(0, n - 1)); setOpenId(null); }} />
            ))}
          </ul>
        )}
        {items.length < total && (
          <button type="button" onClick={more} disabled={loadingMore} className="mt-4 h-11 px-6 rounded-full text-sm font-semibold disabled:opacity-60" style={{ color: INK, border: `1px solid ${INK}` }}>
            {loadingMore ? "Loading..." : `Show more (${total - items.length} left)`}
          </button>
        )}
      </section>
    </div>
  );
}

function ItemRow({ item, open, staff, onToggle, onChange, onDelete }: { item: ScanItem; open: boolean; staff: boolean; onToggle: () => void; onChange: (i: ScanItem) => void; onDelete: () => void }) {
  const conf = CONFIDENCE[item.confidence];
  const meta = [item.maker, item.scale, item.reference].filter(Boolean).join(" · ");
  return (
    <li className="rounded-2xl bg-white overflow-hidden" style={{ border: `1px solid ${open ? TEAL : LINE}` }}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full flex items-center gap-3 p-3 text-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.photos[0]} alt="" loading="lazy" className="w-14 h-14 rounded-lg object-cover shrink-0" style={{ background: "#F4F6F5" }} />
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-semibold leading-snug truncate" style={{ color: INK }}>{item.title}</span>
          <span className="block text-xs mt-0.5 truncate" style={{ color: MUTED }}>
            {meta || PARTS_KINDS.find((k) => k.key === item.kind)?.label}
            {item.price != null && ` · $${item.price.toLocaleString("en-US")}`}
          </span>
          <span className="block text-xs mt-0.5 font-semibold" style={{ color: item.status === "listed" ? INK : conf.color }}>
            {item.status === "listed" ? "Listed" : conf.label}
          </span>
        </span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: MUTED }} />
      </button>
      {open && <ItemEditor item={item} staff={staff} onChange={onChange} onDelete={onDelete} />}
    </li>
  );
}

function ItemEditor({ item, staff, onChange, onDelete }: { item: ScanItem; staff: boolean; onChange: (i: ScanItem) => void; onDelete: () => void }) {
  const router = useRouter();
  const [f, setF] = useState(() => ({
    kind: item.kind as PartsKind, category: item.category ?? "", title: item.title, body: item.body,
    maker: item.maker ?? "", scale: item.scale ?? "", reference: item.reference ?? "", make: item.make ?? "", model: item.model ?? "",
    partNumber: item.partNumber ?? "", era: item.era ?? "", condition: item.condition ?? "",
    price: item.price == null ? "" : String(item.price), location: item.location ?? "", note: item.note ?? "",
  }));
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<null | "save" | "list" | "delete" | "comps">(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return;
    const t = setTimeout(() => setSaved(false), 2000);
    return () => clearTimeout(t);
  }, [saved]);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const v = e.target.value;
    setF((prev) => (k === "kind" ? { ...prev, kind: v as PartsKind, category: "" } : { ...prev, [k]: v }));
    setDirty(true);
    setSaved(false);
  };

  async function save(): Promise<boolean> {
    setError(null);
    const res = await fetch(`/api/scan/${item.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
    const d = await res.json().catch(() => ({}));
    if (!res.ok || !d.item) { setError(d.error || "That did not save."); return false; }
    onChange(d.item as ScanItem);
    setDirty(false);
    return true;
  }

  async function onSave() {
    setBusy("save");
    if (await save()) setSaved(true);
    setBusy(null);
  }

  async function onList() {
    setBusy("list");
    if (!dirty || (await save())) router.push(`/parts/new?scan=${item.id}`);
    else setBusy(null);
  }

  async function onRemove() {
    setBusy("delete");
    setError(null);
    const res = await fetch(`/api/scan/${item.id}`, { method: "DELETE" });
    if (res.ok) onDelete();
    else { setError("That did not delete."); setBusy(null); setConfirmDelete(false); }
  }

  async function onComps() {
    setBusy("comps");
    setError(null);
    try {
      if (dirty && !(await save())) return;
      const res = await fetch(`/api/scan/${item.id}/comps`, { method: "POST" });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.item) { setError(d.error || "The lookup did not come through."); return; }
      onChange(d.item as ScanItem);
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="px-3 pb-4 sm:px-4 space-y-4" style={{ borderTop: `1px solid ${LINE}` }}>
      {item.photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pt-3">
          {item.photos.map((url, n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={url} src={url} alt={`Photo ${n + 1}`} loading="lazy" className="w-20 h-20 rounded-lg object-cover shrink-0" />
          ))}
        </div>
      )}

      {(item.seen.length > 0 || item.missing.length > 0) && (
        <div className="grid sm:grid-cols-2 gap-3 pt-3 text-[13px] leading-relaxed">
          {item.seen.length > 0 && (
            <div>
              <p className="font-semibold" style={{ color: INK }}>What the read rests on</p>
              <ul className="mt-1 space-y-0.5" style={{ color: MUTED }}>{item.seen.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          )}
          {item.missing.length > 0 && (
            <div>
              <p className="font-semibold" style={{ color: WARN }}>Still open</p>
              <ul className="mt-1 space-y-0.5" style={{ color: MUTED }}>{item.missing.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          )}
        </div>
      )}

      <label className="block">
        <Label>Headline</Label>
        <input maxLength={140} value={f.title} onChange={set("title")} className={field} />
      </label>
      <label className="block">
        <Label>The details</Label>
        <textarea rows={4} maxLength={3000} value={f.body} onChange={set("body")} className={field} />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <Label>What it is</Label>
          <select value={f.kind} onChange={set("kind")} className={field}>
            {PARTS_KINDS.map((k) => <option key={k.key} value={k.key}>{k.key === "part" ? "A part" : k.label}</option>)}
          </select>
        </label>
        <label className="block">
          <Label>Shelf</Label>
          <select value={f.category} onChange={set("category")} className={field}>
            <option value="">Choose one</option>
            {categoriesFor(f.kind).map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </label>
        <label className="block">
          <Label>Maker</Label>
          <input maxLength={60} value={f.maker} onChange={set("maker")} placeholder="CMC" className={field} />
        </label>
        {f.kind === "part" ? (
          <label className="block">
            <Label>Part number</Label>
            <input maxLength={60} value={f.partNumber} onChange={set("partNumber")} className={field} />
          </label>
        ) : (
          <label className="block">
            <Label>Reference</Label>
            <input maxLength={60} value={f.reference} onChange={set("reference")} placeholder="M-153" className={field} />
          </label>
        )}
        {f.category === "models" && (
          <label className="block">
            <Label>Scale</Label>
            <input maxLength={12} value={f.scale} onChange={set("scale")} placeholder="1:18" className={field} />
          </label>
        )}
        <label className="block">
          <Label>Date of the item</Label>
          <input maxLength={40} value={f.era} onChange={set("era")} placeholder="1973" className={field} />
        </label>
        <label className="block">
          <Label>Make</Label>
          <input maxLength={60} value={f.make} onChange={set("make")} placeholder="Ferrari" className={field} />
        </label>
        <label className="block">
          <Label>Model</Label>
          <input maxLength={80} value={f.model} onChange={set("model")} placeholder="250 GTO" className={field} />
        </label>
        <label className="block">
          <Label>Condition</Label>
          <select value={f.condition} onChange={set("condition")} className={field}>
            <option value="">Not set</option>
            {PARTS_CONDITIONS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </label>
        <label className="block">
          <Label>Asking, US dollars</Label>
          <input inputMode="numeric" maxLength={9} value={f.price} onChange={set("price")} className={field} />
        </label>
        <label className="block">
          <Label>Where it is</Label>
          <input maxLength={120} value={f.location} onChange={set("location")} placeholder="San Diego, CA" className={field} />
        </label>
        <label className="block">
          <Label hint="private">Note to self</Label>
          <input maxLength={200} value={f.note} onChange={set("note")} placeholder="Garage, shelf 3" className={field} />
        </label>
      </div>

      {staff && (
        <div className="rounded-xl p-3.5" style={{ background: "var(--bg-surface)" }}>
          <div className="flex items-center justify-between gap-3">
            <p className="text-[13px] font-semibold" style={{ color: INK }}>Prices found <span className="font-normal" style={{ color: MUTED }}>staff only</span></p>
            <button type="button" onClick={onComps} disabled={busy !== null} className="text-sm font-semibold disabled:opacity-60 inline-flex items-center gap-1.5" style={{ color: TEAL }}>
              {busy === "comps" && <Loader2 className="w-4 h-4 animate-spin" />}
              {busy === "comps" ? "Searching" : item.compsAt ? "Search again" : "Search"}
            </button>
          </div>
          {item.compsAt && (
            <div className="mt-2 text-[13px] leading-relaxed">
              {item.comps.length === 0 ? (
                <p style={{ color: MUTED }}>No sale of this exact item was found with a source.</p>
              ) : (
                <ul className="space-y-2">
                  {item.comps.map((c) => (
                    <li key={`${c.url}-${c.price}`}>
                      <span className="font-semibold price-display" style={{ color: INK }}>{money(c)}</span>{" "}
                      <span className="font-semibold" style={{ color: c.sold ? TEAL : WARN }}>{c.sold ? "sold" : "asking"}</span>
                      <span style={{ color: MUTED }}>
                        {c.date ? ` · ${c.date}` : " · no date given"}{c.venue ? ` · ${c.venue}` : ""}{c.condition ? ` · ${c.condition}` : ""}
                        {c.sold && ` · buyer's premium ${c.premium === "unknown" ? "not stated" : c.premium}`}
                      </span>
                      <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" className="block truncate underline" style={{ color: MUTED }}>{c.title}</a>
                    </li>
                  ))}
                </ul>
              )}
              {item.compsNote && <p className="mt-2" style={{ color: MUTED }}>{item.compsNote}</p>}
              <p className="mt-2" style={{ color: MUTED }}>
                Searched {item.compsAt.slice(0, 10)}. An asking price is not a sale. Open the source before relying on any figure.
              </p>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-sm font-medium" style={{ color: WARN }}>{error}</p>}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="button" onClick={onList} disabled={busy !== null} className="h-11 px-6 rounded-full text-sm font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
          {busy === "list" ? "Opening..." : item.status === "listed" ? "List it again" : "List it"}
        </button>
        <button type="button" onClick={onSave} disabled={busy !== null || !dirty} className="h-11 px-6 rounded-full text-sm font-semibold disabled:opacity-50" style={{ color: INK, border: `1px solid ${INK}` }}>
          {busy === "save" ? "Saving..." : saved ? "Saved" : "Save"}
        </button>
        {item.status === "listed" && item.postId && (
          <Link href={`/parts/${item.postId}`} className="text-sm font-semibold" style={{ color: TEAL }}>See the listing</Link>
        )}
        <span className="flex-1" />
        {confirmDelete ? (
          <span className="flex items-center gap-4">
            <button type="button" onClick={onRemove} disabled={busy !== null} className="text-sm font-semibold" style={{ color: WARN }}>
              {busy === "delete" ? "Deleting..." : "Yes, delete it"}
            </button>
            <button type="button" onClick={() => setConfirmDelete(false)} className="text-sm font-semibold" style={{ color: MUTED }}>Keep</button>
          </span>
        ) : (
          <button type="button" onClick={() => setConfirmDelete(true)} disabled={busy !== null} className="text-sm font-semibold" style={{ color: MUTED }}>Delete</button>
        )}
      </div>
    </div>
  );
}
