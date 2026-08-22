"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Handshake, Loader2, Eye, EyeOff } from "lucide-react";

function TeamLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [secret, setSecret] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // A rejected fetch (offline, DNS, aborted request) used to leave the
    // button spinning forever: setLoading(false) only ran on the !res.ok
    // branch, so a network failure never cleared it and never said why.
    try {
      const res = await fetch("/api/team/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });

      if (res.ok) {
        // Only ever bounce to a path on this site. "//evil.com" and
        // "/\\evil.com" are both browser-legal ways to leave the origin, so a
        // bare startsWith("/") check is not enough.
        const requested = searchParams.get("redirect") || "";
        const safe =
          requested.startsWith("/") && !requested.startsWith("//") && !requested.startsWith("/\\")
            ? requested
            : "/team/dashboard";
        router.push(safe);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect access code. Try again.");
      }
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f5f4f0" }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
            style={{ backgroundColor: "#1E6091" }}
          >
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Team Access</h1>
          <p className="text-sm text-text-secondary mt-1">
            Fully Sorted — Provider Onboarding
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-border p-6 shadow-sm space-y-4"
        >
          <div>
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5">
              Access Code
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter your team access code"
                className="w-full h-12 px-4 pr-11 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-foreground"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading || !secret}
            className="w-full h-12 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#1E6091" }}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Signing in…" : "Enter Console"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function TeamLoginPage() {
  return (
    <Suspense fallback={null}>
      <TeamLoginForm />
    </Suspense>
  );
}
