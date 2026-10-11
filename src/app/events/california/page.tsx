import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { CALIFORNIA_CONCOURS, type CaliforniaConcours } from '@/lib/data/california-concours';

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const SITE = 'https://fullysorted.com';

export const metadata: Metadata = {
  title: 'California Concours d\'Elegance Guide: Southern and Northern California',
  description:
    'Every judged concours in California, split south and north: Pebble Beach, The Quail, Hillsborough, La Jolla, San Marino, Ironstone, the club concours, and the ones that are gone.',
  alternates: { canonical: '/events/california' },
  openGraph: {
    type: 'website',
    title: 'California Concours d\'Elegance Guide',
    description: 'Every judged concours in California, split Southern and Northern, with what each is known for.',
    url: `${SITE}/events/california`,
  },
};

export const revalidate = 86400;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function dateLabel(c: CaliforniaConcours): string {
  if (!c.nextDate) return c.typicalMonth ? `Usually ${c.typicalMonth}` : 'Check the organizer';
  const [y, m, d] = c.nextDate.split('-').map(Number);
  let s = `${MONTHS[m - 1]} ${d}`;
  if (c.endDate) {
    const [, m2, d2] = c.endDate.split('-').map(Number);
    s += m2 === m ? ` to ${d2}` : ` to ${MONTHS[m2 - 1]} ${d2}`;
  }
  s += `, ${y}`;
  if (c.dateConfidence === 'estimated') s += ' (estimated)';
  return s;
}

const STATUS_ORDER: Record<CaliforniaConcours['status'], number> = { active: 0, dormant: 1, ended: 2 };
const MONTH_ORDER = (c: CaliforniaConcours) => {
  const i = MONTHS.findIndex((m) => (c.typicalMonth ?? '').startsWith(m));
  return i < 0 ? 99 : i;
};

export default function CaliforniaGuidePage() {
  const sorted = [...CALIFORNIA_CONCOURS].sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || MONTH_ORDER(a) - MONTH_ORDER(b));
  const south = sorted.filter((c) => c.region === 'south');
  const north = sorted.filter((c) => c.region === 'north');
  const active = CALIFORNIA_CONCOURS.filter((c) => c.status === 'active');

  // Season at a glance: active events by month, statewide.
  const season = MONTHS.map((m) => ({ m, list: active.filter((c) => (c.typicalMonth ?? '').startsWith(m)) })).filter((x) => x.list.length > 0);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `${SITE}/events` },
      { '@type': 'ListItem', position: 3, name: 'California concours guide', item: `${SITE}/events/california` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: '#FAFBFA' }}>
      <JsonLd data={[breadcrumb]} />
      <PageHero
        eyebrow="Field guide"
        title="California concours, south and north."
        sub="Every judged concours in the state, plus the shows people mistake for one. The line runs along the San Luis Obispo, Kern and San Bernardino county border: Monterey and north is Northern California."
        back={{ href: '/events', label: 'All concours' }}
        width="5xl"
      >
        <p className="text-sm mt-5" style={{ fontFamily: MONO, color: MUTED }}>
          {active.length} active · {CALIFORNIA_CONCOURS.length - active.length} dormant or ended · checked October 2026
        </p>
      </PageHero>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="font-display text-2xl sm:text-3xl mb-2" style={{ color: INK }}>Southern California</h2>
        <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: MUTED }}>
          More concours than the north and less stability. La Jolla in April and San Marino in June are the anchors, both charity events that publish class results. Palos Verdes, Dana Point, Greystone Mansion and the Desert Classic are gone; Montecito has gone quiet. Riverside and the new Santa Barbara Invitational are taking up the slack, and the marque club concours are judged harder than most of the public shows. Nothing judged was found in Rancho Santa Fe, Del Mar or Temecula.
        </p>
        <Table rows={south} />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="font-display text-2xl sm:text-3xl mb-2" style={{ color: INK }}>Northern California</h2>
        <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: MUTED }}>
          The north is Monterey car week and everything that orbits it. Pebble Beach sets the standard, The Quail runs the Friday before, and the village of Carmel fills the midweek. Away from the peninsula the season is Hillsborough in June, Danville and Ironstone in September, and the Sacramento area in October. Palo Alto lost its venue in 2012 and the Carmel Mission Classic has not returned.
        </p>
        <Table rows={north} />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="font-display text-2xl mb-4" style={{ color: INK }}>The season at a glance</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {season.map(({ m, list }) => (
            <li key={m} className="flex gap-3 text-sm">
              <span className="w-24 shrink-0" style={{ fontFamily: MONO, color: TEAL }}>{m}</span>
              <span style={{ color: INK }}>{list.map((c) => c.name.replace(/ \(.*\)$/, '')).join(' · ')}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs mt-8 max-w-3xl" style={{ color: MUTED }}>
          Dates, ticket prices and car counts come from each organizer&apos;s own site or its most recent published edition and are marked estimated or left blank where nothing is posted. Club concours are included when they are judged and open to spectators. Send corrections to hello@fullysorted.com.
          {' '}
          <Link href="/events" className="underline underline-offset-4">Back to the national calendar.</Link>
        </p>
      </section>
    </main>
  );
}

function Table({ rows }: { rows: CaliforniaConcours[] }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white" style={{ border: `1px solid ${RULE}` }}>
      <table className="w-full text-sm" style={{ minWidth: 720 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${RULE}` }}>
            {['Event', 'Where', 'When', 'Scale', 'Tickets', 'Notes'].map((h) => (
              <th key={h} className="text-left font-semibold px-3 py-2.5 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.1em', color: MUTED }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name} style={{ borderBottom: `1px solid ${RULE}`, opacity: c.status === 'active' ? 1 : 0.65 }}>
              <td className="px-3 py-3 align-top" style={{ color: INK }}>
                <span className="font-semibold">{c.name}</span>
                {c.status !== 'active' && (
                  <span className="ml-2 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.08em', color: MUTED }}>{c.status}</span>
                )}
                <span className="flex flex-wrap gap-x-3 mt-1 text-xs">
                  {c.website && (
                    <a href={c.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2" style={{ color: TEAL }}>
                      Site <ExternalLink className="w-3 h-3" aria-hidden />
                    </a>
                  )}
                  {c.resultsUrl && (
                    <a href={c.resultsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2" style={{ color: TEAL }}>
                      Results <ExternalLink className="w-3 h-3" aria-hidden />
                    </a>
                  )}
                </span>
              </td>
              <td className="px-3 py-3 align-top whitespace-nowrap" style={{ color: INK }}>{c.city}</td>
              <td className="px-3 py-3 align-top" style={{ color: c.nextDate ? INK : MUTED }}>{dateLabel(c)}</td>
              <td className="px-3 py-3 align-top whitespace-nowrap" style={{ color: INK }}>{c.cars ?? ''}</td>
              <td className="px-3 py-3 align-top" style={{ color: INK }}>{c.tickets ?? ''}</td>
              <td className="px-3 py-3 align-top" style={{ color: MUTED, minWidth: 260 }}>{c.notes ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
