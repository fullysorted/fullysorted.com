import Link from 'next/link';
import { FOR_SALE_HUB, FOR_SALE_SECTIONS, WANTED_LINK, type ForSaleKey } from '@/lib/for-sale';

const INK = '#12352A';
const TEAL = '#1C8C87';
const RULE = 'rgba(18,53,42,0.14)';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * The tab row that ties the For Sale pages together: every page in the
 * section shows the others, with live counts where the page has them, and
 * the Wanted board at the end for whoever did not find it.
 *
 * 2026-10-05: it sits at the TOP of each For Sale header and doubles as the
 * section eyebrow, so no page prints "For sale" twice.
 */
export function ForSaleNav({
  current,
  counts,
  className = '',
}: {
  current: ForSaleKey | 'all';
  counts?: Partial<Record<ForSaleKey, number>>;
  className?: string;
}) {
  const pill = (on: boolean) =>
    `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${on ? 'text-white' : 'bg-white hover:bg-[#F4F6F5]'}`;
  const pillStyle = (on: boolean) => (on ? { background: INK } : { color: INK, border: `1px solid ${RULE}` });
  return (
    <nav aria-label="For sale" className={`flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap ${className}`}>
      <span className="text-[11px] uppercase mr-1 shrink-0" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
        For sale
      </span>
      <Link href={FOR_SALE_HUB.href} aria-current={current === 'all' ? 'page' : undefined} className={pill(current === 'all')} style={pillStyle(current === 'all')}>
        Everything
      </Link>
      {FOR_SALE_SECTIONS.map((s) => {
        const on = current === s.key;
        const n = counts?.[s.key];
        return (
          <Link key={s.key} href={s.href} aria-current={on ? 'page' : undefined} className={pill(on)} style={pillStyle(on)}>
            {s.label}
            {n ? <span className="tabular-nums opacity-60">{n}</span> : null}
          </Link>
        );
      })}
      <span aria-hidden className="w-px h-5 mx-1 shrink-0" style={{ background: RULE }} />
      <Link href={WANTED_LINK.href} className="text-sm font-semibold underline underline-offset-4 px-2 whitespace-nowrap" style={{ color: TEAL }}>
        Looking for something? {WANTED_LINK.label}
      </Link>
    </nav>
  );
}
