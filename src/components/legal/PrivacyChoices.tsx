"use client";

import { writeConsent } from "@/lib/consent";
import { useConsent, useGPC, useStoredConsent } from "@/components/analytics/useConsent";

/**
 * The "Do Not Sell or Share" control, live on /privacy#your-choices.
 * Reads and writes the same consent flag the cookie banner does, so a
 * visitor can change their mind here at any time without clearing cookies.
 */
export function PrivacyChoices() {
  const consent = useConsent();
  const gpc = useGPC();
  const hydrated = useStoredConsent() !== "unknown";

  const optedOut = consent !== "all";

  return (
    <div
      className="rounded-xl p-5 mt-4"
      style={{ background: "#F5EFE6", border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <p className="text-sm font-bold mb-1" style={{ color: "#1a1a18" }}>
        Analytics and advertising cookies on this device:{" "}
        <span style={{ color: optedOut ? "#1E6091" : "#8a6d1f" }}>
          {!hydrated ? "checking" : optedOut ? "off (opted out)" : "on"}
        </span>
      </p>
      {gpc ? (
        <p className="text-sm" style={{ color: "#3a3a30" }}>
          Your browser is sending a Global Privacy Control signal. We treat that as a request to
          opt out of sale and sharing, so these cookies stay off and there is nothing else to do.
        </p>
      ) : (
        <>
          <p className="text-sm mb-3" style={{ color: "#3a3a30" }}>
            Turning them off stops Google Analytics and the Meta pixel from loading in this
            browser. Signing in, listing a car, and contacting a specialist all keep working.
            The choice is stored on this device only, so repeat it on other browsers.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => writeConsent("essential")}
              disabled={optedOut}
              className="px-4 py-2 text-sm font-bold rounded-lg disabled:opacity-50"
              style={{ background: "#1E6091", color: "#fff" }}
            >
              Opt out (essential only)
            </button>
            <button
              type="button"
              onClick={() => writeConsent("all")}
              disabled={!optedOut}
              className="px-4 py-2 text-sm font-semibold rounded-lg disabled:opacity-50"
              style={{ background: "#fff", color: "#1a1a18", border: "1px solid rgba(0,0,0,0.15)" }}
            >
              Allow analytics and advertising
            </button>
          </div>
        </>
      )}
    </div>
  );
}
