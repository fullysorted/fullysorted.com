"use client";

/**
 * The one search box. Homepage hero and the services directory both use it.
 *
 * It is a plain GET form to /services first, so it works with JavaScript off
 * and on a slow phone before hydration. With JavaScript it adds suggestions
 * read from lib/search-intent: trades, model histories, and specialists for a
 * make. Nothing here talks to the database.
 */
import { useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Wrench, BookOpen, ArrowRight } from "lucide-react";
import { suggest, type SearchModel, type Suggestion } from "@/lib/search-intent";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

const EXAMPLES = ["Pre-purchase inspection", "Porsche 911 service", "Enclosed transport", "Paint correction"];

const KIND_LABEL: Record<Suggestion["kind"], string> = {
  trade: "Specialists",
  make: "Specialists",
  model: "Research",
};

export function SmartSearch({
  models = [],
  initialQuery = "",
  buttonLabel = "Find a specialist",
  showExamples = false,
  examplesColor = INK,
  onSearch,
}: {
  models?: SearchModel[];
  initialQuery?: string;
  buttonLabel?: string;
  /** Tappable example searches under the box. */
  showExamples?: boolean;
  examplesColor?: string;
  /** When set, submitting calls this instead of navigating (the directory uses it to stay on the page). */
  onSearch?: (q: string) => void;
}) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const items = useMemo(() => suggest(q, models), [q, models]);
  const showList = open && items.length > 0;

  const go = (query: string) => {
    setOpen(false);
    setActive(-1);
    if (onSearch) onSearch(query);
    else router.push(query.trim() ? `/services?q=${encodeURIComponent(query.trim())}` : "/services");
  };

  return (
    <div className="max-w-2xl">
      {/* The list hangs off the box itself, so it covers the examples instead of sitting under them */}
      <div className="relative">
      <form
        action="/services"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (showList && active >= 0) router.push(items[active].href);
          else go(q);
        }}
        className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-[22px] sm:rounded-full p-2"
        style={{ background: "#FFFFFF", boxShadow: "0 1px 0 rgba(18,53,42,0.06), 0 18px 40px -18px rgba(18,53,42,0.35)", border: "1px solid rgba(18,53,42,0.12)" }}
      >
        <label className="flex-1 flex items-center gap-3 pl-3 sm:pl-4 min-w-0">
          <Search className="w-5 h-5 shrink-0" style={{ color: MUTED }} aria-hidden />
          <input
            ref={inputRef}
            type="search"
            name="q"
            value={q}
            autoComplete="off"
            enterKeyHint="search"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
            aria-label="What does your car need?"
            placeholder="Try brake job, Porsche 911, or transport"
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 120)}
            onKeyDown={(e) => {
              if (!showList) return;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => (i + 1) % items.length);
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => (i <= 0 ? items.length - 1 : i - 1));
              } else if (e.key === "Escape") {
                setOpen(false);
                setActive(-1);
              }
            }}
            className="w-full h-11 bg-transparent text-base sm:text-[15px] focus:outline-none min-w-0 [&::-webkit-search-cancel-button]:appearance-none"
            style={{ color: INK }}
          />
        </label>
        <button
          type="submit"
          className="h-11 px-5 sm:px-7 rounded-full text-[15px] font-bold shrink-0 transition-opacity hover:opacity-90 w-full sm:w-auto"
          style={{ background: TEAL, color: "#FFFFFF" }}
        >
          {buttonLabel}
        </button>
      </form>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl overflow-hidden py-1.5 text-left"
          style={{ background: "#FFFFFF", border: "1px solid rgba(18,53,42,0.12)", boxShadow: "0 24px 50px -20px rgba(18,53,42,0.4)" }}
        >
          {items.map((s, i) => (
            <li key={s.href} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
              <a
                href={s.href}
                // mousedown fires before the input's blur closes the list
                onMouseDown={(e) => {
                  e.preventDefault();
                  router.push(s.href);
                  setOpen(false);
                }}
                onMouseEnter={() => setActive(i)}
                className="flex items-center gap-3 px-4 py-2.5"
                style={{ background: i === active ? "rgba(28,140,135,0.08)" : "transparent" }}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ background: "rgba(18,53,42,0.06)", color: INK }}>
                  {s.kind === "model" ? <BookOpen className="w-4 h-4" aria-hidden /> : <Wrench className="w-4 h-4" aria-hidden />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-semibold truncate" style={{ color: INK }}>{s.label}</span>
                  <span className="block text-xs truncate" style={{ color: MUTED }}>{s.sub}</span>
                </span>
                <span className="text-[11px] uppercase tracking-wider shrink-0 hidden sm:block" style={{ color: MUTED }}>
                  {KIND_LABEL[s.kind]}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" style={{ color: TEAL }} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
      </div>

      {showExamples && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => go(ex)}
              className="px-3 py-1.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-80"
              style={{ color: examplesColor, border: `1px solid ${examplesColor}`, opacity: 0.85 }}
            >
              {ex}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
