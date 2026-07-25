import Link from "next/link";
import { BookOpen, BarChart3, GitCompare, ScanLine, Newspaper } from "lucide-react";

/**
 * One shared sub-navigation for the whole Research area.
 *
 * Research spans four genuinely different surfaces — cited model histories, a
 * comps-driven Value Guide, a VIN decoder, and the market-analysis desk. Before
 * this they were reachable only from a top-nav dropdown, so landing on any one
 * of them gave no signal that the others existed, and the nav's "Model
 * Encyclopedia" entry actually pointed at the editorial desk rather than the
 * model histories. This band renders on every research surface so the area
 * explains itself wherever you arrive.
 *
 * Pass `active` to mark the current surface.
 */
export type ResearchSection = "models" | "value" | "compare" | "vin" | "market";

const ITEMS: {
  key: ResearchSection;
  href: string;
  label: string;
  blurb: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "models",
    href: "/research/models",
    label: "Model Histories",
    blurb: "Cited history, specs and production, model by model",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    key: "value",
    href: "/value-guide",
    label: "Value Guide",
    blurb: "What one is worth — from real sold prices",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    key: "compare",
    href: "/research/compare",
    label: "Compare",
    blurb: "Two models head to head",
    icon: <GitCompare className="w-4 h-4" />,
  },
  {
    key: "vin",
    href: "/vin",
    label: "VIN Decoder",
    blurb: "Decode any 1981-or-newer VIN, free",
    icon: <ScanLine className="w-4 h-4" />,
  },
  {
    key: "market",
    href: "/research",
    label: "Market Analysis",
    blurb: "Segment prices and written analysis",
    icon: <Newspaper className="w-4 h-4" />,
  },
];

export function ResearchNav({ active }: { active: ResearchSection }) {
  const current = ITEMS.find((i) => i.key === active);

  return (
    <nav
      aria-label="Research sections"
      className="border-b border-border"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1E6091" }}
          >
            Research
          </span>
          {current && (
            <span className="text-xs" style={{ color: "#9a9a8a" }}>
              {current.blurb}
            </span>
          )}
        </div>
        <p className="mt-1.5 mb-4 text-sm max-w-3xl" style={{ color: "#6b6b5e" }}>
          Know the car before anyone asks you for money — what it is, what it&apos;s
          worth, and what the market is doing.
        </p>

        <ul className="flex gap-1 overflow-x-auto -mx-1 px-1">
          {ITEMS.map((it) => {
            const isActive = it.key === active;
            return (
              <li key={it.key} className="shrink-0">
                <Link
                  href={it.href}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center gap-2 px-3.5 py-3 text-sm font-semibold transition-colors hover:text-foreground"
                  style={{
                    color: isActive ? "#1E6091" : "#6b6b5e",
                    borderBottom: isActive ? "2px solid #1E6091" : "2px solid transparent",
                  }}
                >
                  <span style={{ color: isActive ? "#1E6091" : "#9a9a8a" }}>{it.icon}</span>
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
