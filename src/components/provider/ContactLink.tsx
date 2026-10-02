'use client';

import { trackGaEvent } from '@/components/analytics/GoogleAnalytics';

export type ContactKind = 'phone' | 'website' | 'instagram';

/**
 * A phone / website / Instagram link that records the tap.
 *
 * Two records, both fire-and-forget so the call or the new tab is never held
 * up: a GA event (consent-gated like every other GA event) and a row in
 * contact_clicks via sendBeacon, which survives the page unloading as the
 * phone app opens. It counts taps, not calls: nobody can see whether the call
 * connected, and the admin page says so.
 */
export default function ContactLink({
  providerId, kind, href, className, style, children, newTab,
}: {
  providerId: number;
  kind: ContactKind;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  newTab?: boolean;
}) {
  const record = () => {
    try {
      trackGaEvent('provider_contact_click', { kind, provider_id: providerId });
    } catch {}
    try {
      const body = JSON.stringify({ providerId, kind });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/providers/contact-click', new Blob([body], { type: 'application/json' }));
      } else {
        fetch('/api/providers/contact-click', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
      }
    } catch {}
  };
  return (
    <a
      href={href}
      onClick={record}
      className={className}
      style={style}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
