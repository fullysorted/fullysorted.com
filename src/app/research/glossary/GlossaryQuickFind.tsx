"use client";

import { useMemo, useState } from "react";
import { Search, X, CornerDownLeft } from "lucide-react";

/**
 * Jump-to-term box for the glossary.
 *
 * Deliberately a *finder*, not a filter: every one of the 124 terms is server
 * rendered into the page below this component, and typing here only produces
 * anchor links into that list. Nothing is ever hidden from a reader who has
 * JavaScript off, and nothing is ever hidden from a crawler.
 */
export interface QuickFindTerm {
  slug: string;
  term: string;
  categoryLabel: string;
  alsoKnownAs?: string[];
}

const MAX_RESULTS = 8;

export function GlossaryQuickFind({ terms }: { terms: QuickFindTerm[] }) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const scored: { t: QuickFindTerm; score: number }[] = [];
    for (const t of terms) {
      const name = t.term.toLowerCase();
      const aka = (t.alsoKnownAs ?? []).map((a) => a.toLowerCase());
      let score = -1;
      if (name.startsWith(query)) score = 0;
      else if (aka.some((a) => a.startsWith(query))) score = 1;
      else if (name.includes(query)) score = 2;
      else if (aka.some((a) => a.includes(query))) score = 3;
      else if (t.slug.includes(query.replace(/\s+/g, "-"))) score = 4;
      if (score >= 0) scored.push({ t, score });
    }
    scored.sort((a, b) => a.score - b.score || a.t.term.localeCompare(b.t.term));
    return scored.slice(0, MAX_RESULTS).map((s) => s.t);
  }, [query, terms]);

  const showEmpty = query.length >= 2 && results.length === 0;

  return (
    <div className="max-w-xl">
      <label
        htmlFor="glossary-quick-find"
        className="block text-xs font-bold uppercase tracking-widest mb-2"
        style={{ color: "#9a9a8a" }}
      >
        Jump to a term
      </label>

      <div className="relative">
        <Search
          className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "#9a9a8a" }}
          aria-hidden
        />
        <input
          id="glossary-quick-find"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
          placeholder="matching numbers, bought-in, HS-7…"
          className="w-full rounded-full bg-white py-2.5 pl-10 pr-10 text-sm outline-none"
          style={{ border: "1px solid #e5e5dc", color: "#1a1a18" }}
        />
        {q.length > 0 && (
          <button
            type="button"
            onClick={() => setQ("")}
            aria-label="Clear"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1"
            style={{ color: "#9a9a8a" }}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <ul
          className="mt-2 rounded-xl bg-white overflow-hidden"
          style={{ border: "1px solid #e5e5dc" }}
        >
          {results.map((t, i) => (
            <li
              key={t.slug}
              style={{ borderTop: i === 0 ? undefined : "1px solid #e5e5dc" }}
            >
              <a
                href={`#${t.slug}`}
                className="flex items-baseline justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[#f5f2ea]"
              >
                <span className="min-w-0">
                  <span className="font-semibold" style={{ color: "#1E6091" }}>
                    {t.term}
                  </span>
                  {t.alsoKnownAs && t.alsoKnownAs.length > 0 && (
                    <span className="ml-2 text-xs" style={{ color: "#9a9a8a" }}>
                      {t.alsoKnownAs[0]}
                    </span>
                  )}
                </span>
                <span
                  className="shrink-0 text-[11px] uppercase tracking-wider"
                  style={{ color: "#9a9a8a" }}
                >
                  {t.categoryLabel}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {showEmpty && (
        <p className="mt-2 text-sm" style={{ color: "#6b6b5e" }}>
          No term matches that. The full list is below, grouped by category.
        </p>
      )}

      {results.length > 0 && (
        <p
          className="mt-2 flex items-center gap-1.5 text-xs"
          style={{ color: "#9a9a8a" }}
        >
          <CornerDownLeft className="w-3 h-3" aria-hidden /> Select a term to jump
          to its entry
        </p>
      )}
    </div>
  );
}
