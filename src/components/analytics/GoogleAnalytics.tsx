"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Set NEXT_PUBLIC_GA_ID in your Vercel env vars to your GA4 Measurement ID
 * (looks like "G-XXXXXXXXXX"). If unset, this component renders nothing —
 * a safe no-op for local dev and preview builds.
 *
 * The base snippet is configured with send_page_view:false; the effect below
 * fires a page_view on every route (including the first render), because gtag
 * does NOT auto-track client-side navigations in the Next.js App Router.
 * This mirrors the MetaPixel component's env-driven pattern.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== "function") return;
    gtag("event", "page_view", { page_path: pathname });
  }, [gaId, pathname]);

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
            gtag('config', '${gaId}', { send_page_view: false });
          `,
        }}
      />
    </>
  );
}

/**
 * Type-safe helper for firing GA4 events anywhere in the app.
 * No-ops gracefully if GA is not loaded (e.g. NEXT_PUBLIC_GA_ID unset).
 */
export function trackGaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", event, params ?? {});
}
