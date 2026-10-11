'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { US_MAP_VIEWBOX, US_STATE_PATHS } from '@/lib/data/us-map';
import { CALENDAR_MONTHS, concoursDateLabel, concoursMonthKey, type Concours } from '@/lib/data/concours';

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';
const LAND = '#EEF2F0';
const TBA = '#B9C4BF';

/**
 * The concours map: one dot per North American concours on a precomputed
 * Albers USA outline, a month rail to filter, and a detail card on click.
 * Dots with a date are teal; dots whose organizer has not announced the next
 * edition are grey, and the card says "usually <month>" rather than guessing.
 *
 * Everything is inline SVG from static data, so the page ships no map
 * library and makes no network request.
 */
export function ConcoursMap({ items }: { items: ReadonlyArray<Concours> }) {
  const [month, setMonth] = useState<string>('');
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<{ slug: string; x: number; y: number } | null>(null);

  const dots = useMemo(() => spread(items.filter((c) => c.mapX != null && c.mapY != null)), [items]);

  const matches = (c: Concours) => {
    if (!month) return true;
    if (month === 'tba') return !c.startDate;
    const key = concoursMonthKey(c);
    return key === month || (!c.startDate && key && month.startsWith(key));
  };

  const current = selected ? items.find((c) => c.slug === selected) ?? null : null;
  const hovered = hover ? dots.find((d) => d.c.slug === hover.slug) : null;
  const shown = items.filter(matches).length;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-3" role="group" aria-label="Filter by month">
        <RailButton active={month === ''} onClick={() => setMonth('')}>All</RailButton>
        {CALENDAR_MONTHS.map((m) => (
          <RailButton key={m} active={month === m} onClick={() => setMonth(month === m ? '' : m)}>{m}</RailButton>
        ))}
        <RailButton active={month === 'tba'} onClick={() => setMonth(month === 'tba' ? '' : 'tba')}>Date to be announced</RailButton>
      </div>

      <div className="relative rounded-xl overflow-hidden bg-white" style={{ border: `1px solid ${RULE}` }}>
        <svg viewBox={US_MAP_VIEWBOX} className="block w-full h-auto" role="img" aria-label="Map of the United States with a dot for each concours">
          <g>
            {US_STATE_PATHS.map((s) => (
              <path key={s.id} d={s.d} fill={LAND} stroke="#FFFFFF" strokeWidth={0.8} />
            ))}
          </g>
          <g>
            {dots.map(({ c, x, y }) => {
              const on = matches(c);
              const active = c.slug === selected;
              return (
                <circle
                  key={c.slug}
                  cx={x}
                  cy={y}
                  r={active ? 9 : 6.5}
                  fill={c.startDate ? TEAL : TBA}
                  stroke="#FFFFFF"
                  strokeWidth={1.4}
                  opacity={on ? 1 : 0.16}
                  style={{ cursor: on ? 'pointer' : 'default', transition: 'r 120ms' }}
                  tabIndex={on ? 0 : -1}
                  role="button"
                  aria-label={`${c.name}, ${concoursDateLabel(c)}`}
                  onMouseEnter={() => setHover({ slug: c.slug, x, y })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({ slug: c.slug, x, y })}
                  onBlur={() => setHover(null)}
                  onClick={() => on && setSelected(active ? null : c.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (on) setSelected(active ? null : c.slug);
                    }
                  }}
                />
              );
            })}
          </g>
          {hovered && (
            <g pointerEvents="none" transform={`translate(${Math.min(hovered.x + 12, 975 - 250)}, ${Math.max(hovered.y - 34, 6)})`}>
              <rect width={250} height={28} rx={4} fill={INK} />
              <text x={9} y={18} fontSize={12} fill="#FFFFFF">
                {truncate(`${hovered.c.name} · ${concoursDateLabel(hovered.c)}`, 42)}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2 text-xs" style={{ color: MUTED }}>
        <span className="inline-flex items-center gap-1.5"><Dot color={TEAL} /> Date announced</span>
        <span className="inline-flex items-center gap-1.5"><Dot color={TBA} /> Next date not announced yet</span>
        <span className="ml-auto">{shown} of {items.length} shown</span>
      </div>

      {current && (
        <div className="mt-4 rounded-xl p-4 sm:p-5" style={{ background: '#F6F8F7', border: `1px solid ${RULE}` }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xl leading-tight" style={{ color: INK }}>{current.name}</p>
              <p className="text-sm mt-1" style={{ color: MUTED }}>
                {[current.venue, current.city, current.state].filter(Boolean).join(', ')}
              </p>
              <p className="text-sm font-semibold mt-2" style={{ color: INK }}>
                {concoursDateLabel(current)}
                {current.dateConfidence === 'estimated' && <span className="font-normal" style={{ color: MUTED }}> (estimated)</span>}
              </p>
              {current.notes && <p className="text-sm mt-1" style={{ color: MUTED }}>{current.notes}</p>}
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-sm underline underline-offset-4 shrink-0"
              style={{ color: MUTED }}
              aria-label="Close"
            >
              Close
            </button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm">
            <Link href={`/events/concours/${current.slug}`} className="font-semibold underline underline-offset-4" style={{ color: TEAL }}>
              Event page and how to get the car ready
            </Link>
            {current.website && (
              <a href={current.website} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: INK }}>
                Organizer site
              </a>
            )}
            {current.resultsUrl && (
              <a href={current.resultsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: INK }}>
                Published results
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function RailButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className="text-xs px-3 py-1.5 rounded-full transition-colors"
      style={{
        border: `1px solid ${active ? TEAL : RULE}`,
        background: active ? TEAL : '#FFFFFF',
        color: active ? '#FFFFFF' : INK,
      }}
    >
      {children}
    </button>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: color }} aria-hidden />;
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

/**
 * Several concours share a town (Carmel and Pebble Beach, Boca Raton twice,
 * Miami and Coral Gables). Nudge coincident dots a few pixels apart so each
 * one can be hovered and clicked; the list below carries the exact places.
 */
function spread(items: Concours[]): Array<{ c: Concours; x: number; y: number }> {
  const out: Array<{ c: Concours; x: number; y: number }> = [];
  for (const c of items) {
    let x = c.mapX as number;
    let y = c.mapY as number;
    let tries = 0;
    while (out.some((o) => Math.hypot(o.x - x, o.y - y) < 11) && tries < 8) {
      const a = (tries * Math.PI * 2) / 8;
      x = (c.mapX as number) + Math.cos(a) * 12;
      y = (c.mapY as number) + Math.sin(a) * 12;
      tries++;
    }
    out.push({ c, x, y });
  }
  return out;
}
