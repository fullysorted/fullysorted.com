"use client";

/**
 * The question box at the top of the Research Hub. One input, one button; the answer opens in
 * the Sort it window (SortItPanel), which does all the work and takes
 * follow-ups. The homepage keeps the plain directory search.
 */
import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SortItPanel } from "@/components/search/SortItPanel";
import { SORT_IT_NAME } from "@/lib/sort-it-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const EXAMPLES = [
  "What goes wrong on a Mercedes Pagoda?",
  "Who rebuilds Weber carburetors near Denver?",
  "Find me a red 1967 Alfa Duetto under $60k",
];

export function SortItBox() {
  const [q, setQ] = useState("");
  const [asking, setAsking] = useState<string | null>(null);

  const ask = (text: string) => {
    const t = text.trim();
    if (t.length < 3) return;
    setQ(t);
    setAsking(t);
  };

  return (
    <div className="max-w-2xl">
      <form
        onSubmit={(e) => { e.preventDefault(); ask(q); }}
        className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-[22px] sm:rounded-full p-2"
        style={{ background: "#FFFFFF", boxShadow: "0 1px 2px rgba(18,53,42,0.05), 0 24px 48px -28px rgba(18,53,42,0.38)", border: "1px solid rgba(18,53,42,0.14)" }}
      >
        <label className="flex-1 flex items-center gap-3 pl-3 sm:pl-4 min-w-0">
          <Sparkles className="w-5 h-5 shrink-0" style={{ color: TEAL }} aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask anything about your car"
            aria-label="Ask a question"
            enterKeyHint="send"
            className="w-full h-11 bg-transparent text-base sm:text-[15px] focus:outline-none min-w-0"
            style={{ color: INK }}
          />
        </label>
        <button
          type="submit"
          className="h-11 px-5 sm:px-7 rounded-full text-[15px] font-bold shrink-0 hover:opacity-90 w-full sm:w-auto text-white"
          style={{ background: TEAL }}
        >
          {SORT_IT_NAME}
        </button>
      </form>
      {/* Fine print, smaller than body text. "Powered by AI" sits in the
          badge above the title; the daily limit lives in the answer window. */}
      <p className="mt-3 pl-1 text-[11px] leading-relaxed" style={{ color: MUTED, opacity: 0.85 }}>
        Members only.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
        <span className="text-[11px] uppercase shrink-0" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
          Try
        </span>
        <ul className="flex flex-col gap-1.5 min-w-0">
          {EXAMPLES.map((ex) => (
            <li key={ex}>
              <button
                type="button"
                onClick={() => ask(ex)}
                className="group inline-flex items-center gap-1.5 text-left text-[14px] sm:text-[15px] underline-offset-4 decoration-1 hover:underline"
                style={{ color: INK, textDecorationColor: "rgba(28,140,135,0.5)" }}
              >
                {ex}
                <ArrowUpRight
                  className="w-3.5 h-3.5 shrink-0 opacity-40 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: TEAL }}
                  aria-hidden
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {asking && <SortItPanel question={asking} onClose={() => setAsking(null)} onAsk={ask} />}
    </div>
  );
}
