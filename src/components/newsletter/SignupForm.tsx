"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { trackGaEvent } from "@/components/analytics/GoogleAnalytics";
import { COMMON_MARQUES } from "@/lib/marques";
import {
  NEWSLETTER_INTERESTS,
  NEWSLETTER_MARQUES_MAX,
  NEWSLETTER_RADII,
  NL_EVENT,
  NL_KEY_SUBSCRIBED,
  type NewsletterInterest,
  type NewsletterSource,
} from "@/lib/newsletter-shared";
import { CarDoodle } from "./CarDoodle";

/**
 * The one signup form, in five dresses. Two steps, both short:
 *   1. email (+ optional ZIP) and what to hear about. One tap to submit.
 *   2. while the confirmation email travels: optional radius and marques.
 * Step 2 is always skippable; nothing in it is required.
 */
export type SignupVariant = "card" | "band" | "footer" | "popup" | "page";

type Props = {
  variant: SignupVariant;
  source: NewsletterSource;
  eyebrow?: string;
  title?: string;
  blurb?: string;
  /** Interests ticked by default. */
  defaults?: NewsletterInterest[];
  /** Pre-picked marque, e.g. on a model history page. */
  marque?: string;
  /** Called after a successful signup (the popup uses it to stay open on the thanks). */
  onDone?: () => void;
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const PEACH = "#F2B27A";
const MUTED = "#5f6b66";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

type Phase =
  | { k: "form" }
  | { k: "extras"; token: string | null; emailed: boolean }
  | { k: "saved" }
  | { k: "check" }
  | { k: "manual" };

function rememberSubscribed() {
  try { localStorage.setItem(NL_KEY_SUBSCRIBED, "1"); } catch { /* private mode */ }
  window.dispatchEvent(new Event(NL_EVENT));
}

export function SignupForm({ variant, source, eyebrow, title, blurb, defaults, marque, onDone }: Props) {
  const id = useId();
  const pathname = usePathname();
  const dark = variant === "footer";
  const compact = variant === "footer" || variant === "popup";

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [interests, setInterests] = useState<NewsletterInterest[]>(defaults ?? ["cars", "shops"]);
  const [marques, setMarques] = useState<string[]>(marque ? [marque] : []);
  const [radius, setRadius] = useState(100);
  const [custom, setCustom] = useState("");
  const [honey, setHoney] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<{ text: string; mailto?: string } | null>(null);
  const [phase, setPhase] = useState<Phase>({ k: "form" });

  // Keep a pre-picked marque in sync if the page changes under a persistent component.
  useEffect(() => { if (marque) setMarques((m) => (m.includes(marque) ? m : [marque, ...m])); }, [marque]);

  const fg = dark ? "#F5EFE6" : INK;
  const sub = dark ? "rgba(245,239,230,0.66)" : MUTED;
  const line = dark ? "rgba(245,239,230,0.22)" : "rgba(18,53,42,0.18)";
  const field = dark ? "rgba(245,239,230,0.08)" : "#fff";

  function toggle(k: NewsletterInterest) {
    setInterests((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));
  }
  function toggleMarque(m: string) {
    setMarques((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : cur.length >= NEWSLETTER_MARQUES_MAX ? cur : [...cur, m]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setError({ text: "That email address does not look right." });
    if (interests.length === 0) return setError({ text: "Pick at least one thing to hear about." });
    if (zip && !/^\d{5}$/.test(zip)) return setError({ text: "ZIP should be five digits, or leave it blank." });
    setBusy(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip, interests, marques, source, path: pathname, website: honey }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError({ text: data.error || "Something went sideways. Try again in a minute.", mailto: data.undelivered ? data.mailto : undefined });
        return;
      }
      rememberSubscribed();
      trackGaEvent("newsletter_signup", { source, interests: interests.join(",") });
      if (data.status === "check") setPhase({ k: "check" });
      else if (data.status === "manual") setPhase({ k: "manual" });
      else setPhase({ k: "extras", token: data.token ?? null, emailed: data.emailed !== false });
      onDone?.();
    } catch {
      setError({ text: "No connection. Try again in a minute." });
    } finally {
      setBusy(false);
    }
  }

  async function saveExtras() {
    if (phase.k !== "extras" || !phase.token) return setPhase({ k: "saved" });
    if (zip && !/^\d{5}$/.test(zip)) return setError({ text: "ZIP should be five digits, or leave it blank." });
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: phase.token, zip: zip || null, radiusMi: radius, marques }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setError({ text: d.error || "Could not save that. The link in your email lets you set it later." });
        return;
      }
      setPhase({ k: "saved" });
    } catch {
      setError({ text: "No connection. The link in your email lets you set this later." });
    } finally {
      setBusy(false);
    }
  }

  const chip = (on: boolean): React.CSSProperties => ({
    border: `1px solid ${on ? TEAL : line}`,
    background: on ? (dark ? "rgba(28,140,135,0.28)" : "rgba(28,140,135,0.1)") : "transparent",
    color: on ? (dark ? "#fff" : INK) : sub,
  });

  const errorLine = error && (
    <p className="text-sm mt-2" role="alert" style={{ color: dark ? PEACH : "#9b3b1c" }}>
      {error.text}
      {error.mailto && (
        <> <a href={error.mailto} className="underline font-semibold">Email it instead</a></>
      )}
    </p>
  );

  // ─── After submit ──────────────────────────────────────────────────────────
  if (phase.k !== "form") {
    const headline =
      phase.k === "check" ? "You're already on the list."
      : phase.k === "manual" ? "Got it. You'll be added by hand."
      : phase.k === "saved" ? "Sorted."
      : "Check your inbox.";
    const body =
      phase.k === "check" ? "Every email has a link to change what you get."
      : phase.k === "manual" ? "Our list had a hiccup, so your address went to a human instead. Watch for a confirmation."
      : phase.k === "saved" ? "Confirm from the email and the first one comes your way."
      : phase.emailed
        ? "One click in the email and you're in. Nothing goes out until you do."
        : "The confirmation is slow to leave. If it hasn't arrived in ten minutes, sign up again and we'll resend.";
    return (
      <div className={compact ? "" : "text-center sm:text-left"} aria-live="polite">
        <div className={`flex ${compact ? "items-center gap-3" : "flex-col sm:flex-row sm:items-center gap-4"}`}>
          <CarDoodle driving dark={dark} className={compact ? "w-20 shrink-0" : "w-28 shrink-0 mx-auto sm:mx-0"} />
          <div>
            <p className="font-display text-xl" style={{ color: fg }}>{headline}</p>
            <p className="text-sm mt-1" style={{ color: sub }}>{body}</p>
          </div>
        </div>

        {phase.k === "extras" && phase.token && (
          <div className="mt-5 pt-4" style={{ borderTop: `1px dashed ${line}` }}>
            <p className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: dark ? PEACH : TEAL }}>
              While you wait: make it yours (optional)
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <label className="sr-only" htmlFor={`${id}-zip2`}>ZIP code</label>
              <input
                id={`${id}-zip2`}
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                placeholder="ZIP"
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                className="h-9 w-24 rounded-full px-3 text-sm outline-none focus:ring-2"
                style={{ border: `1px solid ${line}`, background: field, color: fg }}
              />
              <label className="sr-only" htmlFor={`${id}-radius`}>How far</label>
              <select
                id={`${id}-radius`}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="h-9 rounded-full px-3 text-sm outline-none"
                style={{ border: `1px solid ${line}`, background: field, color: fg }}
              >
                {NEWSLETTER_RADII.map((r) => (
                  <option key={r} value={r}>{r === 0 ? "Anywhere in the US" : `Within ${r} miles`}</option>
                ))}
              </select>
            </div>
            <p className="text-sm mb-2" style={{ color: sub }}>Marques you care about. Leave blank for all.</p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {[...new Set([...marques, ...COMMON_MARQUES.slice(0, compact ? 10 : 16)])].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => toggleMarque(m)}
                  aria-pressed={marques.includes(m)}
                  className="px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
                  style={chip(marques.includes(m))}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              <label className="sr-only" htmlFor={`${id}-custom`}>Another marque</label>
              <input
                id={`${id}-custom`}
                placeholder="Another marque"
                value={custom}
                maxLength={40}
                onChange={(e) => setCustom(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); if (custom.trim()) { toggleMarque(custom.trim()); setCustom(""); } }
                }}
                className="h-8 flex-1 min-w-0 rounded-full px-3 text-xs outline-none"
                style={{ border: `1px solid ${line}`, background: field, color: fg }}
              />
              <button
                type="button"
                onClick={() => { if (custom.trim()) { toggleMarque(custom.trim()); setCustom(""); } }}
                className="h-8 px-3 rounded-full text-xs font-semibold"
                style={{ border: `1px solid ${line}`, color: fg }}
              >
                Add
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={saveExtras}
                disabled={busy}
                className="h-10 px-5 rounded-full text-sm font-semibold text-white disabled:opacity-60"
                style={{ background: TEAL }}
              >
                {busy ? "Saving" : "Save"}
              </button>
              <button type="button" onClick={() => setPhase({ k: "saved" })} className="text-sm underline" style={{ color: sub }}>
                Skip
              </button>
            </div>
            {errorLine}
          </div>
        )}
      </div>
    );
  }

  // ─── The form ──────────────────────────────────────────────────────────────
  return (
    <form onSubmit={submit} noValidate>
      {variant === "page" && <CarDoodle className="w-28 mb-5" />}
      {(eyebrow || title || blurb) && (
        <div className={variant === "band" ? "mb-5" : "mb-4"}>
          {eyebrow && (
            <p className="text-[11px] uppercase mb-2" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: dark ? PEACH : TEAL }}>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className={`font-display tracking-tight ${variant === "band" || variant === "page" ? "text-2xl sm:text-3xl" : "text-xl"}`} style={{ color: fg }}>
              {title}
            </h2>
          )}
          {blurb && <p className={`text-sm mt-1.5 max-w-prose ${variant === "popup" ? "hidden sm:block" : ""}`} style={{ color: sub }}>{blurb}</p>}
        </div>
      )}

      <fieldset className="mb-3">
        <legend className="sr-only">What to hear about</legend>
        <div className="flex flex-wrap gap-1.5">
          {NEWSLETTER_INTERESTS.map((i) => {
            const on = interests.includes(i.key);
            return (
              <button
                key={i.key}
                type="button"
                title={i.hint}
                onClick={() => toggle(i.key)}
                aria-pressed={on}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors"
                style={chip(on)}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full text-[9px]"
                  style={{ background: on ? TEAL : "transparent", border: `1px solid ${on ? TEAL : line}`, color: "#fff" }}
                >
                  {on ? "✓" : ""}
                </span>
                {i.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className={`flex ${variant === "card" ? "flex-col" : "flex-col sm:flex-row"} gap-2`}>
        <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`h-11 w-full min-w-0 rounded-full px-4 text-[15px] outline-none focus:ring-2 ${variant === "card" ? "" : "sm:flex-1 sm:w-auto"}`}
          style={{ border: `1px solid ${line}`, background: field, color: fg }}
        />
        {!compact && (
          <>
            <label className="sr-only" htmlFor={`${id}-zip`}>ZIP code (optional)</label>
            <input
              id={`${id}-zip`}
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="ZIP (optional)"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              className={`h-11 rounded-full px-4 text-[15px] outline-none focus:ring-2 ${variant === "card" ? "" : "sm:w-36"}`}
              style={{ border: `1px solid ${line}`, background: field, color: fg }}
            />
          </>
        )}
        {/* Honeypot: hidden from people and screen readers, irresistible to bots. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label>Website<input tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} name="website" /></label>
        </div>
        <button
          type="submit"
          disabled={busy}
          className="h-11 px-6 rounded-full text-[15px] font-semibold whitespace-nowrap transition-transform active:scale-[0.98] disabled:opacity-60"
          style={{ background: dark ? PEACH : TEAL, color: dark ? INK : "#fff" }}
        >
          {busy ? "One sec" : "Keep me posted"}
        </button>
      </div>

      {errorLine}
      <p className="text-xs mt-2.5" style={{ color: sub }}>
        {marque ? `${marque} included. ` : ""}No more than one email a week. Unsubscribe in one click.
      </p>
    </form>
  );
}
