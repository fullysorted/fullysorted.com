"use client";

import Link from "next/link";
import { writeConsent } from "@/lib/consent";
import { useGPC, useStoredConsent } from "@/components/analytics/useConsent";

/**
 * Consent banner. Two real choices, both one click, neither pre-selected.
 * "Essential only" is a full answer, not a dark-pattern "manage settings" trip.
 *
 * Nothing non-essential (Google Analytics, Meta Pixel) loads until the visitor
 * picks "Accept all". A Global Privacy Control signal is treated as "essential
 * only" and the banner says so instead of asking.
 */
export function CookieBanner() {
  const stored = useStoredConsent();
  const gpc = useGPC();

  function choose(all: boolean) {
    writeConsent(all ? "all" : "essential");
  }

  // "unknown" is the server render; the banner only appears once the client
  // has read storage and found no answer.
  if (stored !== "none") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:pb-6 pointer-events-none"
      aria-live="polite"
      role="dialog"
      aria-label="Cookie choices"
    >
      <div
        className="max-w-2xl mx-auto rounded-2xl p-4 sm:p-5 shadow-2xl pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: "#0F2032", border: "1px solid rgba(245,239,230,0.12)" }}
      >
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(245,239,230,0.78)" }}>
          Essential cookies keep you signed in. With your OK we also use Google Analytics to see
          what gets read, and a Meta pixel to measure our own ads. We never sell your data.{" "}
          {gpc && (
            <span style={{ color: "#C6A85C" }}>
              Your browser is sending a Global Privacy Control signal, so analytics and advertising
              cookies stay off.{" "}
            </span>
          )}
          <Link
            href="/privacy#cookies"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: "#C6A85C" }}
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          {!gpc && (
            <button
              onClick={() => choose(true)}
              className="px-5 py-2 text-sm font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ background: "#F5EFE6", color: "#1E6091" }}
            >
              Accept all
            </button>
          )}
          <button
            onClick={() => choose(false)}
            className="px-4 py-2 text-sm font-semibold rounded-xl transition-colors hover:text-white"
            style={{ color: "rgba(245,239,230,0.75)", border: "1px solid rgba(245,239,230,0.22)" }}
          >
            {gpc ? "Got it" : "Essential only"}
          </button>
        </div>
      </div>
    </div>
  );
}
