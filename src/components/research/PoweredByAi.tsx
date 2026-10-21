import { Sparkles } from "lucide-react";
import { POWERED_SHORT } from "@/lib/sort-it-shared";

const TEAL = "#1C8C87";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * The "Powered by AI" badge above the Research Hub title. Mono, like every
 * eyebrow on the site, with one slow light sweep across the words on load
 * (globals.css, .fs-ai-text). Links to the plain-words terms for AI answers.
 */
export function PoweredByAi() {
  return (
    <a
      href="/terms#research"
      className="fs-ai-badge inline-flex items-center gap-2 rounded-full pl-2.5 pr-3.5 py-1.5 text-[11px] uppercase transition-colors hover:bg-[rgba(28,140,135,0.10)]"
      style={{
        fontFamily: MONO,
        letterSpacing: "0.14em",
        background: "rgba(28,140,135,0.06)",
        border: "1px solid rgba(28,140,135,0.22)",
      }}
    >
      <Sparkles className="w-3.5 h-3.5" style={{ color: TEAL }} aria-hidden />
      <span className="fs-ai-text">{POWERED_SHORT}</span>
    </a>
  );
}
