/**
 * Plain-markdown rendering of a model history, for machines.
 *
 * AI assistants and answer engines cite pages that hand them a clean, dated,
 * sourced fact. The HTML page is built for people; this is the same record
 * with the chrome taken off. Served at /research/models/{make}/{model}.md and
 * concatenated into /llms-full.txt.
 *
 * Only published fields are rendered. Nothing here may assert more than the
 * HTML page does.
 */
import type { ModelPage, VehicleModelRow } from '@/lib/data/models';
import { modelDisplayName } from '@/lib/data/models';

const BASE = 'https://fullysorted.com';

function years(m: VehicleModelRow): string | null {
  if (!m.year_start) return null;
  if (!m.year_end || m.year_end === m.year_start) return String(m.year_start);
  return `${m.year_start} to ${m.year_end}`;
}

function section(title: string, body: string | null | undefined): string {
  const text = (body ?? '').trim();
  if (!text) return '';
  // Seed prose carries its own "## " headings; push them down one level so the
  // document keeps a single H1 and a sane outline.
  const demoted = text.replace(/^(#{1,5}) /gm, '#$1 ');
  return `\n## ${title}\n\n${demoted}\n`;
}

export function modelToMarkdown(m: ModelPage | VehicleModelRow): string {
  const name = modelDisplayName(m);
  const url = `${BASE}/research/models/${m.slug}`;
  const verified = m.updated_at ? new Date(m.updated_at).toISOString().slice(0, 10) : null;
  const out: string[] = [];

  out.push(`# ${name}`);
  out.push('');
  out.push(`Source: ${url}`);
  out.push('Publisher: Fully Sorted (fullysorted.com), collector car research');
  if (verified) out.push(`Last updated: ${verified}`);
  out.push('');

  const facts: [string, string | null][] = [
    ['Make', m.make],
    ['Model', m.model],
    ['Generation', m.generation],
    ['Factory code', m.generation_code],
    ['Years', years(m)],
    ['Body styles', m.body_styles?.length ? m.body_styles.join(', ') : null],
    ['Engines', m.engines?.length ? m.engines.join('; ') : null],
    ['Production total', m.production_total != null ? m.production_total.toLocaleString('en-US') : null],
  ];
  out.push('## Key facts');
  out.push('');
  for (const [k, v] of facts) if (v) out.push(`- ${k}: ${v}`);
  if (m.production_notes?.trim()) out.push(`- Production notes: ${m.production_notes.trim()}`);
  out.push('');

  if (m.summary?.trim()) {
    out.push('## Summary');
    out.push('');
    out.push(m.summary.trim());
    out.push('');
  }

  if (m.specs && Object.keys(m.specs).length) {
    out.push('## Specifications');
    out.push('');
    for (const [k, v] of Object.entries(m.specs)) out.push(`- ${k}: ${v}`);
    out.push('');
  }

  if (m.notable_trims?.length) {
    out.push('## Notable variants');
    out.push('');
    for (const t of m.notable_trims) out.push(`- ${t.name}: ${t.note}`);
    out.push('');
  }

  out.push(section('History', m.history));
  out.push(section('What to look for', m.what_to_look_for));
  out.push(section('Common problems', m.common_problems));
  out.push(section('Market notes', m.market_notes));
  out.push(section('Value trajectory', m.value_trajectory));

  const sources = 'sources' in m ? m.sources : [];
  if (sources.length) {
    out.push('\n## Sources\n');
    for (const s of sources) {
      const pub = s.publisher ? ` (${s.publisher})` : '';
      out.push(s.url ? `- [${s.title}](${s.url})${pub}` : `- ${s.title}${pub}`);
    }
    out.push('');
  }

  out.push(`\nCite as: Fully Sorted, "${name}", ${url}${verified ? `, updated ${verified}` : ''}.`);
  return out.filter((l) => l !== '').join('\n').replace(/\n(## )/g, '\n\n$1').replace(/\n{3,}/g, '\n\n') + '\n';
}
