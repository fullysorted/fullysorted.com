/**
 * Cookie / tracking consent, one source of truth.
 *
 * Two states only: "essential" (sign-in, preferences, fraud and rate-limit
 * cookies) or "all" (adds Google Analytics and the Meta Pixel). Nothing
 * non-essential loads until the visitor has chosen "all".
 *
 * Global Privacy Control (navigator.globalPrivacyControl) is honored as an
 * opt-out of sale/sharing: when the signal is on, the answer is "essential"
 * regardless of what is stored, which is what the CPRA requires.
 *
 * The old key `fs_cookies_accepted` was set by a banner that promised
 * "essential cookies only", so it is deliberately NOT read as consent to
 * analytics or advertising. Those visitors see the new banner once.
 */
export type Consent = "all" | "essential";

export const CONSENT_KEY = "fs_consent";
export const CONSENT_EVENT = "fs-consent-change";

export function hasGPC(): boolean {
  if (typeof navigator === "undefined") return false;
  return (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

/** Stored choice, or null if the visitor has not chosen yet. */
export function readStoredConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

/** Effective consent: GPC wins, then the stored choice, then essential. */
export function effectiveConsent(): Consent {
  if (hasGPC()) return "essential";
  return readStoredConsent() ?? "essential";
}

export function writeConsent(c: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, c);
  } catch {
    /* storage unavailable: the choice lives for this page only */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: c }));
  }
}
