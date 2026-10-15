"use client";

/**
 * The question box on /sort-it. One input, one button; the answer opens in
 * the Sort it window (SortItPanel), which does all the work and takes
 * follow-ups. The homepage keeps the plain directory search.
 */
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { SortItPanel } from "@/components/search/SortItPanel";
import { SORT_IT_NAME, POWERED_SHORT } from "@/lib/sort-it-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

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
        style={{ background: "#FFFFFF", boxShadow: "0 1px 0 rgba(18,53,42,0.06), 0 18px 40px -18px rgba(18,53,42,0.35)", border: "1px solid rgba(18,53,42,0.12)" }}
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
      <p className="mt-3 text-[10.5px] flex items-center gap-1" style={{ color: MUTED, opacity: 0.8 }}>
        <Sparkles className="w-3 h-3" aria-hidden /> {POWERED_SHORT}. Members, 20 questions a day.
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => ask(ex)}
            className="px-3 py-1.5 rounded-full text-[13px] font-medium text-left hover:opacity-80"
            style={{ color: INK, border: "1px solid rgba(18,53,42,0.2)" }}
          >
            {ex}
          </button>
        ))}
      </div>

      {asking && <SortItPanel question={asking} onClose={() => setAsking(null)} onAsk={ask} />}
    </div>
  );
}
