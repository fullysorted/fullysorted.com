import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * The one page header, per the 2026-09-23 direction: white, a mono teal
 * eyebrow, the display title in deep green, a muted standfirst. Nine pages
 * (the research references, the business guide, report-a-sale) carried a
 * pasted-in navy gradient hero from the old palette until 2026-10-05; this
 * replaced all of them so the next restyle is one file.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  back,
  width = "5xl",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  back?: { href: string; label: string };
  /** Matches the page body's max-width so the header lines up with it. */
  width?: "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  /** Anything that sits under the standfirst: a meta row, a count, buttons. */
  children?: React.ReactNode;
}) {
  const max = { "3xl": "max-w-3xl", "4xl": "max-w-4xl", "5xl": "max-w-5xl", "6xl": "max-w-6xl", "7xl": "max-w-7xl" }[width];
  return (
    <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
      <div className={`${max} mx-auto px-4 sm:px-6 py-12 sm:py-16`}>
        {back && (
          <Link
            href={back.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 hover:underline underline-offset-4"
            style={{ color: MUTED }}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden /> {back.label}
          </Link>
        )}
        {eyebrow && (
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
            {eyebrow}
          </p>
        )}
        <h1
          className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[20ch]"
          style={{ color: INK }}
        >
          {title}
        </h1>
        {sub && (
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            {sub}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
