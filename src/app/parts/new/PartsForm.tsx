"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, X, Loader2 } from "lucide-react";
import { PARTS_KINDS, PARTS_CONDITIONS, PARTS_SHIPPING, PARTS_MAX_PHOTOS, type PartsKind } from "@/lib/parts-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

const field =
  "w-full px-4 py-3 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

const TITLE_HINT: Record<PartsKind, string> = {
  part: "Weber 40 IDF pair, rebuilt, off an Alfa 1750",
  memorabilia: "1973 Porsche dealer showroom sign, double-sided",
};

type ModelOption = { slug: string; name: string; make: string; model: string };

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <span className="block mb-1.5">
      <span className="text-sm font-semibold" style={{ color: INK }}>{children}</span>
      {hint && <span className="text-xs ml-2" style={{ color: MUTED }}>{hint}</span>}
    </span>
  );
}

export function PartsForm({ handle, models, presetModelSlug }: { handle: string | null; models: ModelOption[]; presetModelSlug?: string }) {
  const router = useRouter();
  const preset = models.find((m) => m.slug === presetModelSlug);
  const [kind, setKind] = useState<PartsKind>("part");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [make, setMake] = useState(preset?.make ?? "");
  const [model, setModel] = useState(preset?.model ?? "");
  const [modelSlug, setModelSlug] = useState(preset?.slug ?? "");
  const [partNumber, setPartNumber] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [shipping, setShipping] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(0);
  const [newHandle, setNewHandle] = useState("");
  const [handleNote, setHandleNote] = useState<{ ok: boolean; text: string } | null>(null);
  const [agree, setAgree] = useState(false);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Live username check, debounced so typing does not spray requests.
  useEffect(() => {
    if (handle || newHandle.trim().length < 3) { setHandleNote(null); return; }
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/account/handle?h=${encodeURIComponent(newHandle.trim())}`);
        const d = await res.json();
        setHandleNote(d.available ? { ok: true, text: `@${d.handle} is yours if you want it.` } : { ok: false, text: d.reason });
      } catch { setHandleNote(null); }
    }, 400);
    return () => clearTimeout(t);
  }, [newHandle, handle]);

  // The model picker links the listing to a model history when the typed name
  // matches one exactly; otherwise it is plain text and still fine.
  function onModelChange(v: string) {
    setModel(v);
    const hit = models.find((m) => m.name.toLowerCase() === v.trim().toLowerCase() || m.model.toLowerCase() === v.trim().toLowerCase());
    setModelSlug(hit?.slug ?? "");
    if (hit && !make) setMake(hit.make);
  }

  async function addFiles(files: FileList | null) {
    if (!files?.length) return;
    setError(null);
    const room = PARTS_MAX_PHOTOS - photos.length;
    const list = Array.from(files).slice(0, room);
    if (Array.from(files).length > room) setError(`Up to ${PARTS_MAX_PHOTOS} photos. The first ${room} were added.`);
    setUploading((n) => n + list.length);
    for (const file of list) {
      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const d = await res.json().catch(() => ({}));
        if (!res.ok || !d.url) throw new Error(d.error || "That photo did not upload.");
        setPhotos((p) => (p.includes(d.url) || p.length >= PARTS_MAX_PHOTOS ? p : [...p, d.url]));
      } catch (e) {
        setError(e instanceof Error ? e.message : "That photo did not upload.");
      } finally {
        setUploading((n) => n - 1);
      }
    }
    if (fileRef.current) fileRef.current.value = "";
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!photos.length) { setError("Add at least one photo of the actual item."); return; }
    setState("sending");
    try {
      const res = await fetch("/api/parts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, title, body, make, model, modelSlug, partNumber, condition, price, location, shipping, photos, handle: newHandle, agree, website }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "That did not save. Please try again.");
      router.push(`/parts/${d.id}?posted=1`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "That did not save. Please try again.");
      setState("idle");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <Label>What is it?</Label>
        <div className="grid grid-cols-2 gap-2">
          {PARTS_KINDS.map((k) => (
            <button key={k.key} type="button" onClick={() => setKind(k.key)} aria-pressed={kind === k.key}
              className="h-12 rounded-xl text-[15px] font-semibold"
              style={kind === k.key ? { background: INK, color: "#fff" } : { background: "#fff", color: INK, border: "1px solid rgba(18,53,42,0.2)" }}>
              {k.key === "part" ? "A part" : "Memorabilia"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label hint={`up to ${PARTS_MAX_PHOTOS}, the first is the cover`}>Photos</Label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {photos.map((url, n) => (
            <div key={url} className="relative aspect-square rounded-xl overflow-hidden" style={{ background: "#F4F6F5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`Photo ${n + 1}`} className="w-full h-full object-cover" />
              {n === 0 && <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold text-white" style={{ background: INK }}>Cover</span>}
              <button type="button" onClick={() => setPhotos((p) => p.filter((u) => u !== url))} aria-label="Remove photo"
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow">
                <X className="w-3.5 h-3.5" style={{ color: INK }} />
              </button>
            </div>
          ))}
          {photos.length + uploading < PARTS_MAX_PHOTOS && (
            <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading > 0}
              className="aspect-square rounded-xl flex flex-col items-center justify-center gap-1 text-xs font-semibold disabled:opacity-60"
              style={{ border: "1px dashed rgba(18,53,42,0.3)", color: INK, background: "#fff" }}>
              {uploading > 0 ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
              {uploading > 0 ? "Uploading" : "Add"}
            </button>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/heic" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
        <span className="block text-xs mt-1.5" style={{ color: MUTED }}>Photos of the actual item, in daylight, including any part number stamping and any damage.</span>
      </div>

      <label className="block">
        <Label>Headline</Label>
        <input required maxLength={140} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={TITLE_HINT[kind]} className={field} />
      </label>

      <label className="block">
        <Label>The details</Label>
        <textarea required rows={5} maxLength={3000} value={body} onChange={(e) => setBody(e.target.value)} className={field}
          placeholder={kind === "part"
            ? "What it came off, what it fits, its condition in plain words, what is included and what is not."
            : "What it is, roughly when it is from, how you came by it, size, and whether it is original or a reproduction. Say which."} />
        <span className="block text-xs mt-1.5" style={{ color: MUTED }}>
          Leave phone numbers, emails and links out. Buyers reach you by email, and yours stays private.
        </span>
      </label>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <Label hint="optional">Price, in US dollars</Label>
          <input inputMode="numeric" maxLength={9} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Blank means make an offer" className={field} />
        </label>
        <label className="block">
          <Label hint="optional">Condition</Label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className={field}>
            <option value="">Choose one</option>
            {PARTS_CONDITIONS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </label>
        <label className="block">
          <Label hint="optional">Make</Label>
          <input maxLength={60} value={make} onChange={(e) => setMake(e.target.value)} placeholder="Porsche" className={field} />
        </label>
        <label className="block">
          <Label hint="optional">Model</Label>
          <input maxLength={80} list="fs-models" value={model} onChange={(e) => onModelChange(e.target.value)} placeholder="911 (long-hood)" className={field} />
          {models.length > 0 && (
            <datalist id="fs-models">
              {models.map((m) => <option key={m.slug} value={m.name} />)}
            </datalist>
          )}
          {modelSlug && <span className="block text-xs mt-1.5" style={{ color: TEAL }}>Linked to the {model} model history. It will show there too.</span>}
        </label>
        {kind === "part" && (
          <label className="block">
            <Label hint="optional">Part number</Label>
            <input maxLength={60} value={partNumber} onChange={(e) => setPartNumber(e.target.value)} placeholder="901.102.101.02" className={field} />
          </label>
        )}
        <label className="block">
          <Label hint="optional">Where it is</Label>
          <input maxLength={120} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="San Diego, CA" className={field} />
        </label>
        <label className="block">
          <Label hint="optional">Shipping</Label>
          <select value={shipping} onChange={(e) => setShipping(e.target.value)} className={field}>
            <option value="">Say later</option>
            {PARTS_SHIPPING.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
          </select>
        </label>
      </div>

      {!handle && (
        <label className="block">
          <Label>Pick a username</Label>
          <input required minLength={3} maxLength={24} value={newHandle} onChange={(e) => setNewHandle(e.target.value)} placeholder="longhood_larry"
            autoCapitalize="none" autoCorrect="off" spellCheck={false} className={field} />
          <span className="block text-xs mt-1.5" style={{ color: handleNote ? (handleNote.ok ? TEAL : "#9a3f2f") : MUTED }}>
            {handleNote?.text ?? "This is the name people see on your listings. Your real name and email stay private."}
          </span>
        </label>
      )}

      {/* Honeypot: people never see it, bots fill it in. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)}
        className="absolute -left-[9999px] w-px h-px opacity-0" aria-hidden />

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 w-5 h-5 accent-[#1C8C87]" />
        <span className="text-sm leading-relaxed" style={{ color: MUTED }}>
          I own this, the photos are of the actual item, the description is honest about condition and originality, and any sale is between me and the buyer, not Fully Sorted.
        </span>
      </label>

      {error && <p className="text-sm font-medium" style={{ color: "#9a3f2f" }}>{error}</p>}

      <button type="submit" disabled={state === "sending" || uploading > 0} className="w-full sm:w-auto h-12 px-8 rounded-full text-[15px] font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
        {state === "sending" ? "Sending..." : "Send it for a quick read"}
      </button>
      {handle && <p className="text-xs" style={{ color: MUTED }}>Listing as @{handle}</p>}
    </form>
  );
}
