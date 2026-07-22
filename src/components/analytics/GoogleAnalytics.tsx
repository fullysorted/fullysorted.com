"use client";

import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Resolves the Measurement ID from NEXT_PUBLIC_GA_ID if set (e.g. in Vercel),
 * otherwise falls back to the Fully Sorted GA4 property. A GA4 Measurement ID
 * is NOT a secret — it is exposed in client-side page source on every load by
 * design — so a hardcoded fallback is safe and means analytics work without any
 * environment configuration.
 *
 * Pageview tracking, including client-side (SPA) route changes in the App
 * Router, is handled by GA4 Enhanced Measurement (enabled on the property via
 * "page changes based on browser history events"). We therefore use the
 * standard gtag config and do NOT add a manual route listener, which would
 * double-count navigations.
 */
const DEFAULT_GA_ID = "G-02K9L5SRQ3";

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
