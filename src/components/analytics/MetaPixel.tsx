"use client";

import Script from "next/script";

/**
 * Meta (Facebook) Pixel base code.
 *
 * Set NEXT_PUBLIC_META_PIXEL_ID in Vercel env vars to your numeric pixel id.
 * If unset, this component renders nothing (safe no-op for local dev).
 *
 * Standard events are fired client-side from form components via the
 * `fbq` global, e.g. `window.fbq?.("track", "Lead")`.
 */
export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

/**
 * Type-safe helper for firing Meta standard events from anywhere
 * in the app. No-ops gracefully if pixel not loaded.
 */
type FbqEvent = "Lead" | "CompleteRegistration" | "ViewContent" | "InitiateCheckout" | "Purchase";

export function trackMetaEvent(event: FbqEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq !== "function") return;
  if (params) fbq("track", event, params);
  else fbq("track", event);
}
