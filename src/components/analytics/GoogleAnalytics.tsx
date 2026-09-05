"use client";

import Script from "next/script";
import { useConsent } from "./useConsent";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Resolves the tag ID from NEXT_PUBLIC_GA_ID if set (e.g. in Vercel), otherwise
 * falls back to the constant below. A Google tag ID is NOT a secret — it ships
 * in client-side page source on every load by design — so a hardcoded fallback
 * is safe and means analytics work without any environment configuration.
 *
 * 2026-08-20 — WHY THIS IS A "GT-" ID AND NOT A "G-" ID. READ BEFORE CHANGING.
 *
 * The GA4 property "fullysorted.com" (p391453331) has one web stream, "Fully
 * Sorted" (5656463606), whose measurement ID is G-GKYYW6TDSH. The obvious thing
 * to put here is that measurement ID. It does not work.
 *
 * That stream is served by a Google tag named "Fully Sorted - GA4" which was
 * historically COMBINED with a second, long-dead measurement ID, G-02K9L5SRQ3.
 * When gtag.js is loaded as gtag/js?id=G-GKYYW6TDSH, Google's served tag config
 * resolves it to that combined tag and addresses every /g/collect beacon as
 * tid=G-02K9L5SRQ3. Hits to the dead ID are silently discarded — the property
 * records nothing and Realtime sits at zero. This was verified by firing
 * matched beacons at both IDs: only G-GKYYW6TDSH ones were credited.
 *
 * G-02K9L5SRQ3 has since been uncombined in the GA admin, but Google's edge
 * kept serving the stale config, so the loader ID alone could not be trusted.
 *
 * Loading the tag by its Google tag ID — GT-5DC8S73 — sidesteps all of it. The
 * tag's only destination is G-GKYYW6TDSH, so beacons go out addressed to the
 * live measurement ID and land in the property. Confirmed in Realtime.
 *
 * If analytics ever goes quiet again, check what tid the /g/collect request
 * actually carries before touching this file. The loader ID and the tid are
 * different things, and only the tid decides where data lands.
 *
 * Pageview tracking, including client-side (SPA) route changes in the App
 * Router, is handled by GA4 Enhanced Measurement (enabled on the property via
 * "page changes based on browser history events"). We therefore use the
 * standard gtag config and do NOT add a manual route listener, which would
 * double-count navigations.
 */
const DEFAULT_GA_ID = "GT-5DC8S73";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;
  // Analytics is not an essential cookie. It loads only after "Accept all"
  // in the cookie banner (see lib/consent.ts); GPC forces it off.
  const consent = useConsent();
  if (!gaId || consent !== "all") return null;

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
