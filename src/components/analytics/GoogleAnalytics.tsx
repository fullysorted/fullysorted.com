"use client";

import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Resolves the Measurement ID from NEXT_PUBLIC_GA_ID if set (e.g. in Vercel),
 * otherwise falls back to the constant below. A GA4 Measurement ID is NOT a
 * secret — it ships in client-side page source on every load by design — so a
 * hardcoded fallback is safe and means analytics work without any environment
 * configuration.
 *
 * 2026-07-25 — WHICH ID, AND WHY. There are two GA4 properties in the account
 * that both track fullysorted.com:
 *
 *   G-02K9L5SRQ3  stream "Fully Sorted - GA4" (4076195739) — NO data received
 *   G-GKYYW6TDSH  stream "Fully Sorted"       (5656463606) — collection ACTIVE
 *
 * This file used to point at the first one, which is why the dashboard looked
 * empty: live beacons from the site land in the second. The second also holds
 * the real session history. We now point at it. The duplicate property can be
 * archived in GA once nothing references it — do not "fix" this back without
 * checking which stream is actually receiving hits.
 *
 * Pageview tracking, including client-side (SPA) route changes in the App
 * Router, is handled by GA4 Enhanced Measurement (enabled on the property via
 * "page changes based on browser history events"). We therefore use the
 * standard gtag config and do NOT add a manual route listener, which would
 * double-count navigations.
 */
const DEFAULT_GA_ID = "G-GKYYW6TDSH";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

/**
 * Type-safe helper for firing GA4 events anywhere in the app.
 * No-ops gracefully if gtag has not loaded yet.
 */
export function trackGaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", event, params ?? {});
}
