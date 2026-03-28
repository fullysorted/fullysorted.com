"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on every SSR hydration
    const accepted = localStorage.getItem("fs_cookies_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("fs_cookies_accepted", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:pb-6 pointer-events-none"
      aria-live="polite"
    >
      <div
        className="max-w-2xl mx-auto rounded-2xl p-4 sm:p-5 shadow-2xl pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: "#1a1a18",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>
          We use essential cookies to keep you signed in and remember your preferences.
          We don&apos;t serve ads or sell your data.{" "}
          <Link
            href="/privacy"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: "#E8722A" }}
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: "#E8722A" }}
          >
            Got it
          </button>
          <Link
            href="/privacy"
            className="px-4 py-2 text-xs font-medium rounded-xl transition-colors"
            style={{
              color: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
