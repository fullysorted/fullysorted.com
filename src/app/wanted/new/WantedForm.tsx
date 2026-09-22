"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WANTED_KINDS, type WantedKind } from "@/lib/wanted-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

const field =
  "w-full px-4 py-3 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

const TITLE_HINT: Record<WantedKind, string> = {
  car: "1972 Porsche 911T, driver quality, West Coast",
  part: "Weber 40 IDF pair for an Alfa 1750",
  service: "Someone who can retrim Lancia Fulvia seats",
};

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <span className="block mb-1.5">
      <span className="text-sm font-semibold" style={{ color: INK }}>{children}</span>
      {hint && <span className="text-xs ml-2" style={{ color: MUTED }}>{hint}</span>}
    </span>
  );
}

export function WantedForm({ handle, categories }: { handle: string | null; categories: { key: string; label: string }[] }) {
  const router = useRouter();
  const [kind, setKind] = useState<WantedKind>("car");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [make, setMake] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [offerFee, setOfferFee] = useState(false);
  const [feeText, setFeeText] = useState("");
  const [feeTerms, setFeeTerms] = useState("");
  const [newHandle, setNewHandle] = useState("");
  const [handleNote, setHandleNote] = useState<{ ok: boolean; text: string } | null>(null);
  const [agree, setAgree] = useState(false);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState<string | null>(null);

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

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setState("sending");
    try {
      const res = await fetch("/api/wanted", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind, title, body, make, category, location, budget,
          feeText: offerFee ? feeText : "", feeTerms: offerFee ? feeTerms : "",
          handle: newHandle, agree, website,
        }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "That did not save. Please try again.");
      router.push(`/wanted/${d.id}?posted=1`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "That did not save. Please try again.");
      setState("idle");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <Label>What are you looking for?</Label>
        <div className="grid grid-cols-3 gap-2">
          {WANTED_KINDS.map((k) => (
            <button key={k.key} type="button" onClick={() => setKind(k.key)} aria-pressed={kind === k.key}
              className="h-12 rounded-xl text-[15px] font-semibold"
              style={kind === k.key ? { background: INK, color: "#fff" } : { background: "#fff", color: INK, border: "1px solid rgba(18,53,42,0.2)" }}>
              A {k.singular.toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <Label>Headline</Label>
        <input required maxLength={140} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={TITLE_HINT[kind]} className={field} />
      </label>

      <label className="block">
        <Label>The details</Label>
        <textarea required rows={5} maxLength={2000} value={body} onChange={(e) => setBody(e.target.value)} className={field}
          placeholder={kind === "car"
            ? "Years, colors, condition, what you will and will not consider. The more exact, the better the replies."
            : kind === "part"
              ? "Part numbers if you have them, condition you will accept, what it is going on."
              : "The car, the job, and roughly when you need it done."} />
        <span className="block text-xs mt-1.5" style={{ color: MUTED }}>
          Leave phone numbers, emails and links out. Replies reach you by email, and yours stays private.
        </span>
      </label>

      <div className="grid sm:grid-cols-2 gap-4">
        {kind === "service" ? (
          <label className="block">
            <Label hint="optional">Trade</Label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={field}>
              <option value="">Not sure</option>
              {categories.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
          </label>
        ) : null}
        <label className="block">
          <Label hint="optional">Make</Label>
          <input maxLength={60} value={make} onChange={(e) => setMake(e.target.value)} placeholder="Porsche" className={field} />
        </label>
        <label className="block">
          <Label hint="optional">{kind === "service" ? "Where the car is" : "Where you are looking"}</Label>
          <input maxLength={120} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="San Diego, CA or Anywhere in the US" className={field} />
        </label>
        <label className="block">
          <Label hint="optional">Budget</Label>
          <input maxLength={80} value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Up to $60,000" className={field} />
        </label>
      </div>

      <div className="rounded-2xl p-5" style={{ background: "var(--bg-surface)" }}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={offerFee} onChange={(e) => setOfferFee(e.target.checked)} className="mt-1 w-5 h-5 accent-[#1C8C87]" />
          <span>
            <span className="block font-semibold" style={{ color: INK }}>Offer a finder&apos;s fee</span>
            <span className="block text-sm mt-0.5 leading-relaxed" style={{ color: MUTED }}>
              Optional. It gets more people looking. You pay it yourself, directly to whoever finds the thing.
            </span>
          </span>
        </label>
        {offerFee && (
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <label className="block">
              <Label>The fee</Label>
              <input required={offerFee} maxLength={80} value={feeText} onChange={(e) => setFeeText(e.target.value)} placeholder="$500, or 2% of the price" className={field} />
            </label>
            <label className="block">
              <Label hint="optional">When it is paid</Label>
              <input maxLength={200} value={feeTerms} onChange={(e) => setFeeTerms(e.target.value)} placeholder="When I have bought the car" className={field} />
            </label>
            <p className="sm:col-span-2 text-xs leading-relaxed" style={{ color: MUTED }}>
              Fully Sorted does not hold, take a share of, or guarantee the fee. Agree the terms in writing with your finder.
              {kind === "car" ? " Rules on paying someone for arranging a vehicle sale differ by state; following them is up to the two of you." : ""}
            </p>
          </div>
        )}
      </div>

      {!handle && (
        <label className="block">
          <Label>Pick a username</Label>
          <input required minLength={3} maxLength={24} value={newHandle} onChange={(e) => setNewHandle(e.target.value)} placeholder="longhood_larry"
            autoCapitalize="none" autoCorrect="off" spellCheck={false} className={field} />
          <span className="block text-xs mt-1.5" style={{ color: handleNote ? (handleNote.ok ? TEAL : "#9a3f2f") : MUTED }}>
            {handleNote?.text ?? "This is the name people see on your posts. Your real name and email stay private."}
          </span>
        </label>
      )}

      {/* Honeypot: people never see it, bots fill it in. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)}
        className="absolute -left-[9999px] w-px h-px opacity-0" aria-hidden />

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 w-5 h-5 accent-[#1C8C87]" />
        <span className="text-sm leading-relaxed" style={{ color: MUTED }}>
          This is a real request, and any deal or fee that comes of it is between me and the person I deal with, not Fully Sorted.
        </span>
      </label>

      {error && <p className="text-sm font-medium" style={{ color: "#9a3f2f" }}>{error}</p>}

      <button type="submit" disabled={state === "sending"} className="w-full sm:w-auto h-12 px-8 rounded-full text-[15px] font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
        {state === "sending" ? "Sending..." : "Send it for a quick read"}
      </button>
      {handle && <p className="text-xs" style={{ color: MUTED }}>Posting as @{handle}</p>}
    </form>
  );
}
