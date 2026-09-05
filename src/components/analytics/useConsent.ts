"use client";

import { useSyncExternalStore } from "react";
import { CONSENT_EVENT, effectiveConsent, hasGPC, readStoredConsent, type Consent } from "@/lib/consent";

function subscribe(cb: () => void) {
  window.addEventListener(CONSENT_EVENT, cb);
  return () => window.removeEventListener(CONSENT_EVENT, cb);
}

/**
 * Live view of the visitor's tracking consent. The server snapshot is
 * "essential", so nothing non-essential can render before the stored choice
 * has been read on the client.
 */
export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, effectiveConsent, () => "essential");
}

/** Stored choice ("all" | "essential"), "none" if unanswered, "unknown" on the server. */
export function useStoredConsent(): Consent | "none" | "unknown" {
  return useSyncExternalStore(subscribe, () => readStoredConsent() ?? "none", () => "unknown");
}

/** Whether the browser sends Global Privacy Control; false on the server. */
export function useGPC(): boolean {
  return useSyncExternalStore(subscribe, hasGPC, () => false);
}
