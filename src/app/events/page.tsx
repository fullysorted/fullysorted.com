import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { ConcoursMap } from '@/components/events/ConcoursMap';
import { CALENDAR_MONTHS, CONCOURS, concoursDateLabel, concoursMonthKey, isNorthAmerican, type Concours } from '@/lib/data/concours';
import { events as featureEvents } from '@/lib/events';

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const SITE = 'https://fullysorted.com';

export const metadata: Metadata = {
  title: 'Concours d\'Elegance Calendar 2026 to 2027',
  description:
    'Every judged concours d\'elegance in the United States and Canada on one map, plus the international calendar by country. Dates from the organizers, nothing guessed.',
  alternates: { canonical: '/events' },
  openGraph: {
    type: 'website',
    title: 'Concours d\'Elegance Calendar 2026 to 2027',
    description: 'Every judged concours in the US and Canada on one map, plus the international calendar by country.',
    url: `${SITE}/events`,
  },
};

// Re-render daily so a past event drops off the top.
export const revalidate = 86400;

function todayPacific(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

export default function EventsPage() {
  const today = todayPacific();
  const live = CONCOURS.filter((c) => !c.startDate || (c.endDate ?? c.startDate) >= today);
  const northAmerica = live.filter(isNorthAmerican);
  const international = live.filter((c) => !isNorthAmerican(c));
  const dated = northAmerica.filter((c) => c.startDate).length;

  // By month, dated rows first inside each month, then the "usually" rows.
  const byMonth = new Map<string, Concours[]>();
  for (const m of CALENDAR_MONTHS) byMonth.set(m, []);
  const undated: Concours[] = [];
  for (const c of northAmerica) {
    const key = concoursMonthKey(c);
    const month = c.startDate ? key : CALENDAR_MONTHS.find((m) => m.startsWith(key)) ?? '';
    if (month && byMonth.has(month)) byMonth.get(month)!.push(c);
    else undated.push(c);
  }
  for (const list of byMonth.values()) list.sort((a, b) => (a.startDate ?? '9').localeCompare(b.startDate ?? '9'));

  const byCountry = new Map<string, Concours[]>();
  for (const c of international) byCountry.set(c.country, [...(byCountry.get(c.country) ?? []), c]);
  const countries = [...byCountry.keys()].sort();

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Concours d\'Elegance Calendar 2026 to 2027',
    itemListElement: live.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/events/concours/${c.slug}`, name: c.name })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `${SITE}/events` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: '#FAFBFA' }}>
      <JsonLd data={[itemList, breadcrumb]} />

      <PageHero
        eyebrow="Events"
        title="The concours calendar."
        sub="Judged concours d'elegance only. No auctions, no cars and coffee. Dates come from each organizer's own site; where the next edition is not announced, the page says which month it usually runs."
        width="6xl"
      >
        <p className="text-sm mt-5" style={{ fontFamily: MONO, color: MUTED }}>
          {northAmerica.length} in the US and Canada, {dated} with dates · {international.length} international
        </p>
      </PageHero>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <ConcoursMap items={northAmerica} />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-[1fr_1fr] gap-4">
          <Link href="/events/california" className="group rounded-xl p-5 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>Field guide</p>
            <p className="font-display text-xl mt-2" style={{ color: INK }}>California, south and north</p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>Every judged concours in the state, which ones are gone, and what each is known for.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold mt-3" style={{ color: TEAL }}>
              Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </span>
          </Link>
          <div className="rounded-xl p-5 bg-white" style={{ border: `1px solid ${RULE}` }}>
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>Showing a car</p>
            <p className="font-display text-xl mt-2" style={{ color: INK }}>Four weeks is the number.</p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>
              Detailing books up, enclosed transport needs lead time, and a pre-event inspection catches what the judges will. Each event page links the three trades with the city already set.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>United States and Canada, by month</h2>
        <div className="space-y-8">
          {CALENDAR_MONTHS.map((m) => {
            const list = byMonth.get(m) ?? [];
            if (list.length === 0) return null;
            return (
              <div key={m}>
                <h3 className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>{m}</h3>
                <ul className="divide-y rounded-xl bg-white" style={{ border: `1px solid ${RULE}`, borderColor: RULE }}>
                  {list.map((c) => <Row key={c.slug} c={c} />)}
                </ul>
              </div>
            );
          })}
          {undated.length > 0 && (
            <div>
              <h3 className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>Month not yet known</h3>
              <ul className="divide-y rounded-xl bg-white" style={{ border: `1px solid ${RULE}`, borderColor: RULE }}>
                {undated.map((c) => <Row key={c.slug} c={c} />)}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="font-display text-2xl sm:text-3xl mb-2" style={{ color: INK }}>International, by country</h2>
        <p className="text-sm mb-6 max-w-2xl" style={{ color: MUTED }}>
          The European season runs May to October. Several of these have not posted a 2027 date, and two (Monaco, Chantilly) may not run at all; the notes say so.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <div key={country}>
              <h3 className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>{country}</h3>
              <ul className="divide-y rounded-xl bg-white" style={{ border: `1px solid ${RULE}`, borderColor: RULE }}>
                {byCountry.get(country)!.map((c) => <Row key={c.slug} c={c} />)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-xl p-5 sm:p-6 bg-white" style={{ border: `1px solid ${RULE}` }}>
          <h2 className="font-display text-xl mb-1" style={{ color: INK }}>Missing one, or have a date we do not?</h2>
          <p className="text-sm max-w-2xl" style={{ color: MUTED }}>
            Organizers and entrants: send the event name, the dates and a link to the official page. Judged concours only. There is no fee and no way to pay for a better spot.
          </p>
          <a href="mailto:hello@fullysorted.com?subject=Concours calendar" className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3 underline underline-offset-4" style={{ color: TEAL }}>
            hello@fullysorted.com
          </a>
          <p className="text-xs mt-5" style={{ color: MUTED }}>
            Also on this site:{' '}
            <Link href="/events/f1" className="underline underline-offset-4">the Formula 1 calendar</Link>
            {featureEvents.length > 0 && (
              <>
                {' '}and our write-ups of{' '}
                {featureEvents.map((e, i) => (
                  <span key={e.slug}>
                    {i > 0 && ', '}
                    <Link href={`/events/${e.slug}`} className="underline underline-offset-4">{e.shortName}</Link>
                  </span>
                ))}
                .
              </>
            )}
          </p>
        </div>
      </section>
    </main>
  );
}

function Row({ c }: { c: Concours }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1 px-4 py-3">
      <Link href={`/events/concours/${c.slug}`} className="font-semibold hover:underline underline-offset-4 min-w-0" style={{ color: INK }}>
        {c.name}
      </Link>
      <span className="text-sm" style={{ color: MUTED }}>
        {c.city}{c.state ? `, ${c.state}` : ''}
      </span>
      <span className="text-sm sm:ml-auto sm:text-right whitespace-nowrap tabular-nums" style={{ color: c.startDate ? INK : MUTED }}>
        {concoursDateLabel(c)}
        {c.dateConfidence === 'estimated' && <span style={{ color: MUTED }}> (est.)</span>}
      </span>
    </li>
  );
}
