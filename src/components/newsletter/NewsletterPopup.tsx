"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useStoredConsent } from "@/components/analytics/useConsent";
import {
  NL_EVENT,
  NL_KEY_DISMISSED,
  NL_KEY_SUBSCRIBED,
  NL_SESSION_SHOWN,
  NL_SESSION_VIEWS,
  type NewsletterInterest,
} from "@/lib/newsletter-shared";
import { SignupForm } from "./SignupForm";

/**
 * The signup popup, built to not annoy anyone. It is a small card that slides
 * up in the corner (a bottom sheet on phones), never a full-screen takeover,
 * never focus-trapping, and it only appears when ALL of these hold:
 *
 *  - the page is a browsing page (never sell, apply, checkout, account, admin,
 *    sign-in, contact, legal, or anywhere someone is mid-task);
 *  - the cookie question has been answered (never two things at once);
 *  - this is at least the second page of the visit;
 *  - they have read: 55% scrolled or 35 seconds on the page, or on desktop
 *    they head for the tab bar after 15 seconds;
 *  - they are not typing in a field;
 *  - never signed up in this browser, not shown yet this visit, and not
 *    dismissed in the last 30 days (120 after a second dismissal).
 *
 * The copy follows the page: model pages offer that marque, the directory
 * offers new shops, browse offers new cars.
 */
const BLOCKED = [
  "/admin", "/team", "/dashboard", "/account", "/sign-in", "/sign-up", "/sell", "/services/apply",
  "/services/claim", "/services/link", "/lead", "/review", "/orders", "/checkout", "/newsletter",
  "/register", "/stable", "/contact", "/privacy", "/terms", "/submit-sale", "/pricing", "/wanted/new", "/parts/new",
];
const DAY = 24 * 60 * 60 * 1000;

function ls(k: string): string | null { try { return localStorage.getItem(k); } catch { return null; } }
function ss(k: string): string | null { try { return sessionStorage.getItem(k); } catch { return null; } }
function ssSet(k: string, v: string) { try { sessionStorage.setItem(k, v); } catch { /* ignore */ } }

function snoozed(): boolean {
  if (ls(NL_KEY_SUBSCRIBED)) return true;
  try {
    const d = JSON.parse(ls(NL_KEY_DISMISSED) || "null") as { at: number; count: number } | null;
    if (!d) return false;
    return Date.now() - d.at < (d.count >= 2 ? 120 : 30) * DAY;
  } catch { return false; }
}

type Pitch = { eyebrow: string; title: string; blurb: string; defaults: NewsletterInterest[]; marque?: string; source: "popup" };

function pitchFor(path: string): Pitch {
  const marque = typeof document !== "undefined"
    ? document.querySelector<HTMLElement>("[data-nl-marque]")?.dataset.nlMarque
    : undefined;
  if (marque) {
    return {
      eyebrow: "Before you go",
      title: `Hear when a ${marque} is listed.`,
      blurb: "New cars for sale in the marques you pick, plus good shops near you as they join.",
      defaults: ["cars", "shops"], marque, source: "popup",
    };
  }
  if (path.startsWith("/services")) {
    return {
      eyebrow: "New shops near you",
      title: "Know when a good one opens up nearby.",
      blurb: "Specialists as they join in your area. Add your ZIP and we'll keep it local.",
      defaults: ["shops"], source: "popup",
    };
  }
  if (path.startsWith("/browse") || path.startsWith("/listings") || path.startsWith("/parts") || path.startsWith("/wanted")) {
    return {
      eyebrow: "New cars, first",
      title: "See new listings before everyone else.",
      blurb: "Fresh cars for sale near you or in the marques you care about.",
      defaults: ["cars"], source: "popup",
    };
  }
  return {
    eyebrow: "The short list",
    title: "New cars and new shops, near you.",
    blurb: "A short email when there's something worth your time. That's it.",
    defaults: ["cars", "shops"], source: "popup",
  };
}

export function NewsletterPopup() {
  const pathname = usePathname() || "/";
  const consent = useStoredConsent();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [pitch, setPitch] = useState<Pitch | null>(null);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const shownRef = useRef(false);

  // Count page views in this visit.
  useEffect(() => {
    const n = Number(ss(NL_SESSION_VIEWS) || "0") + 1;
    ssSet(NL_SESSION_VIEWS, String(n));
  }, [pathname]);

  // Stand down the moment any form on the page signs them up.
  useEffect(() => {
    const off = () => { if (!open) shownRef.current = true; };
    window.addEventListener(NL_EVENT, off);
    return () => window.removeEventListener(NL_EVENT, off);
  }, [open]);

  useEffect(() => {
    if (open || shownRef.current) return;
    if (consent === "none" || consent === "unknown") return; // cookie question first
    if (BLOCKED.some((p) => pathname === p || pathname.startsWith(p + "/"))) return;
    if (ss(NL_SESSION_SHOWN) || snoozed()) return;
    if (Number(ss(NL_SESSION_VIEWS) || "0") < 2) return;

    const start = Date.now();
    let fired = false;
    const show = () => {
      if (fired || shownRef.current || snoozed()) return;
      const a = document.activeElement;
      if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.tagName === "SELECT" || (a as HTMLElement).isContentEditable)) return;
      fired = true;
      shownRef.current = true;
      ssSet(NL_SESSION_SHOWN, "1");
      setPitch(pitchFor(pathname));
      setOpenPath(pathname);
      setOpen(true);
    };

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= 0.55 && Date.now() - start > 8000) show();
    };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget && Date.now() - start > 15000) show();
    };
    const timer = window.setTimeout(show, 35000);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [pathname, consent, open]);

  const dismiss = useCallback(() => {
    setOpen(false);
    if (done) return;
    try {
      const prev = JSON.parse(ls(NL_KEY_DISMISSED) || "null") as { count: number } | null;
      localStorage.setItem(NL_KEY_DISMISSED, JSON.stringify({ at: Date.now(), count: (prev?.count ?? 0) + 1 }));
    } catch { /* ignore */ }
  }, [done]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  // Leave the page, lose the popup (unless they're mid-thanks).
  if (!open || !pitch || (!done && openPath !== pathname)) return null;

  return (
    <div
      className="fixed z-[60] inset-x-0 bottom-0 px-3 pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:inset-x-auto md:right-6 md:bottom-6 md:p-0 pointer-events-none"
    >
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Sign up for new cars and new shops"
        className="fs-nl-popup pointer-events-auto relative w-full md:w-[400px] rounded-3xl bg-white p-5 sm:p-6"
        style={{ border: "1px solid rgba(18,53,42,0.14)", boxShadow: "0 24px 60px -20px rgba(18,53,42,0.45)" }}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-lg leading-none hover:bg-black/5"
          style={{ color: "#5f6b66" }}
        >
          ×
        </button>
        <SignupForm
          variant="popup"
          source="popup"
          eyebrow={pitch.eyebrow}
          title={pitch.title}
          blurb={pitch.blurb}
          defaults={pitch.defaults}
          marque={pitch.marque}
          onDone={() => setDone(true)}
        />
        {!done && (
          <button type="button" onClick={dismiss} className="mt-2 text-xs underline" style={{ color: "#5f6b66" }}>
            Not now
          </button>
        )}
      </div>
    </div>
  );
}
