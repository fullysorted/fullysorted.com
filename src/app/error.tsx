"use client";

/**
 * Root error boundary. Without this, any uncaught server exception — a missing
 * table on a fresh deploy, a bad claim token — rendered Next's raw
 * "Application error: a server-side exception has occurred" to the user.
 */
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[unhandled]", error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-center gap-1.5 mb-5" aria-hidden="true">
          <span className="w-2 h-2 rounded-sm" style={{ background: "#6ab04c" }} />
          <span className="w-2 h-2 rounded-sm" style={{ background: "#1E6091" }} />
          <span className="w-2 h-2 rounded-sm" style={{ background: "#B08D3F" }} />
        </div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-3">
          Something went wrong on our end.
        </h1>
        <p className="text-text-secondary mb-7">
          That&apos;s our fault, not yours. Try again. If it keeps happening,
          email{" "}
          <a href="mailto:chris@fullysorted.com" className="text-accent font-semibold hover:underline">
            chris@fullysorted.com
          </a>{" "}
          and we&apos;ll sort it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 text-sm font-semibold text-foreground border border-border rounded-xl hover:bg-surface transition-colors"
          >
            Go home
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-xs text-text-tertiary">Reference: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
