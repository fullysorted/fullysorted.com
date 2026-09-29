"use client";

import { useState } from "react";
import Link from "next/link";
import { COMMON_MARQUES } from "@/lib/marques";
import { NEWSLETTER_INTERESTS, NEWSLETTER_MARQUES_MAX, NEWSLETTER_RADII, type NewsletterInterest } from "@/lib/newsletter-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#5f6b66";
const LINE = "rgba(18,53,42,0.18)";

type Initial = { wantCars: boolean; wantShops: boolean; wantResearch: boolean; zip: string | null; radiusMi: number; marques: string[] };

const chip = (on: boolean): React.CSSProperties => ({
  border: `1px solid ${on ? TEAL : LINE}`,
  background: on ? "rgba(28,140,135,0.1)" : "transparent",
  color: on ? INK : MUTED,
});

export function ManagePrefs({ token, initial }: { token: string; initial: Initial }) {
  const [interests, setInterests] = useState<NewsletterInterest[]>(
    [initial.wantCars && "cars", initial.wantShops && "shops", initial.wantResearch && "research"].filter(Boolean) as NewsletterInterest[],
  );
  const [zip, setZip] = useState(initial.zip ?? "");
  const [radius, setRadius] = useState(initial.radiusMi);
  const [marques, setMarques] = useState<string[]>(initial.marques);
  const [custom, setCustom] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "saved" | string>("idle");

  const toggleMarque = (m: string) =>
    setMarques((c) => (c.includes(m) ? c.filter((x) => x !== m) : c.length >= NEWSLETTER_MARQUES_MAX ? c : [...c, m]));

  async function save() {
    if (interests.length === 0) return setState("Pick at least one, or unsubscribe below.");
    if (zip && !/^\d{5}$/.test(zip)) return setState("ZIP should be five digits, or leave it blank.");
    setState("busy");
    const res = await fetch("/api/newsletter", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, interests, zip: zip || null, radiusMi: radius, marques }),
    }).catch(() => null);
    if (!res || !res.ok) {
      const d = res ? await res.json().catch(() => ({})) : {};
      return setState(d.error || "Could not save just now. Try again in a minute.");
    }
    setState("saved");
  }

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-sm font-semibold mb-2" style={{ color: INK }}>What to hear about</h2>
        <div className="flex flex-wrap gap-2">
          {NEWSLETTER_INTERESTS.map((i) => {
            const on = interests.includes(i.key);
            return (
              <button key={i.key} type="button" aria-pressed={on} title={i.hint}
                onClick={() => setInterests((c) => (on ? c.filter((x) => x !== i.key) : [...c, i.key]))}
                className="px-3.5 py-2 rounded-full text-sm font-medium" style={chip(on)}>
                {i.label}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-2" style={{ color: INK }}>Where</h2>
        <div className="flex flex-wrap gap-2">
          <input inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="ZIP" aria-label="ZIP code"
            value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            className="h-10 w-28 rounded-full px-4 text-sm outline-none" style={{ border: `1px solid ${LINE}`, color: INK }} />
          <select value={radius} onChange={(e) => setRadius(Number(e.target.value))} aria-label="How far"
            className="h-10 rounded-full px-3 text-sm bg-white outline-none" style={{ border: `1px solid ${LINE}`, color: INK }}>
            {NEWSLETTER_RADII.map((r) => <option key={r} value={r}>{r === 0 ? "Anywhere in the US" : `Within ${r} miles`}</option>)}
          </select>
        </div>
        <p className="text-xs mt-1.5" style={{ color: MUTED }}>Leave ZIP blank to hear about everything, everywhere.</p>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-2" style={{ color: INK }}>Marques <span className="font-normal" style={{ color: MUTED }}>(blank means all)</span></h2>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {[...new Set([...marques, ...COMMON_MARQUES.slice(0, 20)])].map((m) => (
            <button key={m} type="button" aria-pressed={marques.includes(m)} onClick={() => toggleMarque(m)}
              className="px-2.5 py-1 rounded-full text-xs font-medium" style={chip(marques.includes(m))}>{m}</button>
          ))}
        </div>
        <div className="flex gap-2">
          <input placeholder="Another marque" aria-label="Another marque" maxLength={40} value={custom}
            onChange={(e) => setCustom(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && custom.trim()) { e.preventDefault(); toggleMarque(custom.trim()); setCustom(""); } }}
            className="h-9 flex-1 rounded-full px-4 text-sm outline-none" style={{ border: `1px solid ${LINE}`, color: INK }} />
          <button type="button" onClick={() => { if (custom.trim()) { toggleMarque(custom.trim()); setCustom(""); } }}
            className="h-9 px-4 rounded-full text-sm font-semibold" style={{ border: `1px solid ${LINE}`, color: INK }}>Add</button>
        </div>
      </section>

      <div className="flex items-center gap-4">
        <button type="button" onClick={save} disabled={state === "busy"}
          className="h-11 px-6 rounded-full text-white font-semibold disabled:opacity-60" style={{ background: TEAL }}>
          {state === "busy" ? "Saving" : "Save settings"}
        </button>
        {state === "saved" && <span className="text-sm" style={{ color: TEAL }} aria-live="polite">Saved.</span>}
      </div>
      {state !== "idle" && state !== "busy" && state !== "saved" && <p className="text-sm" role="alert" style={{ color: "#9b3b1c" }}>{state}</p>}

      <p className="text-sm pt-4" style={{ color: MUTED, borderTop: `1px solid ${LINE}` }}>
        Had enough? <Link href={`/newsletter?u=${token}`} className="underline">Unsubscribe</Link>.
      </p>
    </div>
  );
}

export function UnsubscribeButton({ token, email, already, manageHref }: { token: string; email: string; already: boolean; manageHref: string }) {
  const [state, setState] = useState<"idle" | "busy" | "done" | string>(already ? "done" : "idle");
  async function go() {
    setState("busy");
    const res = await fetch("/api/newsletter/unsubscribe", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }),
    }).catch(() => null);
    if (!res || !res.ok) {
      const d = res ? await res.json().catch(() => ({})) : {};
      return setState(d.error || "Could not do that just now. Try again in a minute.");
    }
    setState("done");
  }
  if (state === "done") {
    return (
      <>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl" style={{ color: INK }}>Done. No more email.</h1>
        <p className="text-[15px] mt-2" style={{ color: MUTED }}>{email} is off the list. The garage door is always open if you come back.</p>
        <p className="mt-6"><Link href="/" className="underline" style={{ color: TEAL }}>Back to Fully Sorted</Link></p>
      </>
    );
  }
  return (
    <>
      <h1 className="font-display tracking-tight text-3xl sm:text-4xl" style={{ color: INK }}>Unsubscribe {email}?</h1>
      <p className="text-[15px] mt-2" style={{ color: MUTED }}>
        One click and it&apos;s done. If it&apos;s just too much, you can <Link href={manageHref} className="underline">get less</Link> instead: only cars, only shops, or only one marque.
      </p>
      <button type="button" onClick={go} disabled={state === "busy"}
        className="mt-6 h-11 px-6 rounded-full text-white font-semibold disabled:opacity-60" style={{ background: INK }}>
        {state === "busy" ? "One sec" : "Unsubscribe"}
      </button>
      {state !== "idle" && state !== "busy" && <p className="text-sm mt-3" role="alert" style={{ color: "#9b3b1c" }}>{state}</p>}
    </>
  );
}
