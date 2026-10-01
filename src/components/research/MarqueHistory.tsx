import { renderMarkdownLite } from "@/lib/markdown-lite";
import type { MarqueHistory as MarqueHistoryData } from "@/lib/data/marque-histories";

/**
 * The marque story block on /research/models/<make>. Same register as the
 * model pages: plain history, a short dated spine, sources at footnote
 * weight, disputes kept but quiet.
 */
export function MarqueHistory({ m }: { m: MarqueHistoryData }) {
  const disputed = m.claims.filter((c) => c.status === "disputed" && c.conflictNote);
  const facts: [string, string][] = [
    ["Founded", m.founded],
    ...(m.founder ? ([["Founder", m.founder]] as [string, string][]) : []),
    ["Based", m.headquarters],
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16" aria-labelledby="marque-history">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6b6b5e" }}>The marque</p>
          <h2 id="marque-history" className="font-display font-semibold tracking-tight text-2xl sm:text-3xl mt-2 mb-4" style={{ color: "#1a1a18" }}>
            A short history of {m.name}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#3d3d35" }}>{m.summary}</p>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdownLite(m.history) }}
          />
          <h3 className="font-display font-semibold text-xl mt-8 mb-3" style={{ color: "#1a1a18" }}>{m.name} in America</h3>
          <p className="text-[15px] leading-relaxed" style={{ color: "#3d3d35" }}>{m.inAmerica}</p>
        </div>

        <aside className="min-w-0">
          <dl className="rounded-2xl bg-white p-5 text-sm" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            {facts.map(([k, v]) => (
              <div key={k} className="py-2 first:pt-0 last:pb-0" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#9a9a8a" }}>{k}</dt>
                <dd className="mt-0.5" style={{ color: "#1a1a18" }}>{v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase mt-8 mb-3" style={{ color: "#6b6b5e" }}>Timeline</h3>
          <ol className="text-sm space-y-3">
            {m.timeline.map((t, i) => (
              <li key={`${t.year}-${i}`} className="grid grid-cols-[44px_1fr] gap-2">
                <span className="font-semibold tabular-nums" style={{ color: "#B08D3F" }}>{t.year}</span>
                <span style={{ color: "#3d3d35" }}>{t.event}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <details className="mt-10 text-xs" style={{ color: "#9a9a8a" }}>
        <summary className="cursor-pointer font-semibold" style={{ color: "#6b6b5e" }}>
          {m.sources.length} sources{disputed.length > 0 && `, ${disputed.length} where they disagree`}
        </summary>
        {disputed.length > 0 && (
          <ul className="mt-3 space-y-2 max-w-3xl">
            {disputed.map((c, i) => (
              <li key={i}>{c.conflictNote}</li>
            ))}
          </ul>
        )}
        <ol className="mt-3 space-y-1 list-decimal pl-5 max-w-3xl">
          {m.sources.map((s) => (
            <li key={s.ref}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2 hover:opacity-70">{s.title}</a>
              ) : (
                s.title
              )}
              {s.publisher && `, ${s.publisher}`}
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}
