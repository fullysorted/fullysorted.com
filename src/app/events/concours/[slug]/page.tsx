import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { CONCOURS, concoursDateLabel, getConcoursBySlug, isNorthAmerican } from '@/lib/data/concours';
import { categoryLabel } from '@/lib/service-categories';

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const SITE = 'https://fullysorted.com';

const COUNTRY_CODE: Record<string, string> = {
  'United States': 'US', Canada: 'CA', 'United Kingdom': 'GB', Italy: 'IT', France: 'FR', Germany: 'DE', Switzerland: 'CH',
  Belgium: 'BE', Netherlands: 'NL', Monaco: 'MC', Japan: 'JP', Mexico: 'MX', India: 'IN', Kuwait: 'KW',
};

/** The three trades a car needs before it is shown, in the order the weeks run. */
const PREP: Array<{ key: string; lead: string; why: string }> = [
  { key: 'detailing', lead: 'Four weeks out', why: 'Paint correction and a proper detail take days, and the good shops book out before car week.' },
  { key: 'inspection', lead: 'Three weeks out', why: 'A pre-event inspection finds the leak, the loose trim and the wrong fastener before a judge does.' },
  { key: 'transport', lead: 'Two weeks out', why: 'Enclosed transport to the venue, booked early enough to pick the carrier rather than take whoever is left.' },
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CONCOURS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getConcoursBySlug(slug);
  if (!c) return { title: 'Concours not found' };
  const where = [c.city, c.state ?? c.country].filter(Boolean).join(', ');
  const title = `${c.name}, ${c.startDate ? c.startDate.slice(0, 4) : 'dates'}`;
  const description = `${c.name} in ${where}: ${concoursDateLabel(c)}. Venue, organizer links, published results, and how to get a car ready to show.`;
  return {
    title,
    description,
    alternates: { canonical: `/events/concours/${c.slug}` },
    openGraph: { type: 'website', title, description, url: `${SITE}/events/concours/${c.slug}` },
  };
}

export const revalidate = 86400;

export default async function ConcoursPage({ params }: Props) {
  const { slug } = await params;
  const c = getConcoursBySlug(slug);
  if (!c) notFound();

  const url = `${SITE}/events/concours/${c.slug}`;
  const where = [c.city, c.state, c.country].filter(Boolean).join(', ');
  const q = encodeURIComponent(c.city);

  // Event rich results need a real startDate, so an unannounced edition gets
  // breadcrumbs only. The organizer is the organizer, not us.
  const eventSchema = c.startDate
    ? {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: c.name,
        startDate: c.startDate,
        ...(c.endDate ? { endDate: c.endDate } : {}),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: c.venue ?? c.city,
          address: {
            '@type': 'PostalAddress',
            addressLocality: c.city,
            ...(c.state ? { addressRegion: c.state } : {}),
            addressCountry: COUNTRY_CODE[c.country] ?? c.country,
          },
        },
        description: `${c.name}, a judged concours d'elegance in ${where}.`,
        url,
        ...(c.website ? { organizer: { '@type': 'Organization', name: c.name, url: c.website } } : {}),
      }
    : null;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `${SITE}/events` },
      { '@type': 'ListItem', position: 3, name: c.name, item: url },
    ],
  };

  // Neighbors: the next three dated concours after this one, for the "also that month" rail.
  const after = CONCOURS.filter((o) => o.slug !== c.slug && o.startDate && (!c.startDate || o.startDate >= c.startDate))
    .sort((a, b) => (a.startDate ?? '').localeCompare(b.startDate ?? ''))
    .slice(0, 3);

  return (
    <main className="min-h-screen" style={{ background: '#FAFBFA' }}>
      <JsonLd data={eventSchema ? [eventSchema, breadcrumb] : [breadcrumb]} />

      <PageHero
        eyebrow={`Concours · ${c.country}`}
        title={c.name}
        sub={where}
        back={{ href: '/events', label: 'All concours' }}
        width="4xl"
      >
        <p className="text-lg font-semibold mt-5" style={{ color: INK }}>
          {concoursDateLabel(c)}
          {c.dateConfidence === 'estimated' && <span className="font-normal text-base" style={{ color: MUTED }}> (estimated, check the organizer)</span>}
        </p>
        {c.venue && <p className="text-sm mt-1" style={{ color: MUTED }}>{c.venue}</p>}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm">
          {c.website && (
            <a href={c.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold underline underline-offset-4" style={{ color: TEAL }}>
              Organizer site <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          )}
          {c.resultsUrl && (
            <a href={c.resultsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4" style={{ color: INK }}>
              Published results <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          )}
        </div>
      </PageHero>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {c.notes && (
          <p className="text-sm mb-8 max-w-2xl" style={{ color: MUTED }}>{c.notes}</p>
        )}

        <h2 className="font-display text-2xl mb-1" style={{ color: INK }}>Getting the car ready</h2>
        <p className="text-sm mb-5 max-w-2xl" style={{ color: MUTED }}>
          Three trades, in the order the weeks run.{isNorthAmerican(c) ? ` Each link opens the directory with ${c.city} already in the search.` : ' The directory is North American for now; the links open the trade page.'}
        </p>
        <ul className="grid sm:grid-cols-3 gap-3">
          {PREP.map((p) => (
            <li key={p.key} className="rounded-xl p-4 bg-white" style={{ border: `1px solid ${RULE}` }}>
              <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>{p.lead}</p>
              <p className="font-semibold mt-1" style={{ color: INK }}>{categoryLabel(p.key)}</p>
              <p className="text-sm mt-1" style={{ color: MUTED }}>{p.why}</p>
              <Link
                href={isNorthAmerican(c) ? `/services?type=${p.key}&q=${q}` : `/services?type=${p.key}`}
                className="inline-flex items-center gap-1 text-sm font-semibold mt-3 underline underline-offset-4"
                style={{ color: TEAL }}
              >
                Find a pro <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        {c.resultsUrl && (
          <div className="mt-10 rounded-xl p-5 bg-white" style={{ border: `1px solid ${RULE}` }}>
            <h2 className="font-display text-xl mb-1" style={{ color: INK }}>Results</h2>
            <p className="text-sm max-w-2xl" style={{ color: MUTED }}>
              The organizer publishes class winners and Best of Show. Fully Sorted keeps a register of cars shown at concours, built from published results and never naming an owner; this event is on it.
            </p>
            <a href={c.resultsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold mt-3 underline underline-offset-4" style={{ color: TEAL }}>
              Latest published results <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>
        )}

        {after.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>Next on the calendar</h2>
            <ul className="divide-y rounded-xl bg-white" style={{ border: `1px solid ${RULE}`, borderColor: RULE }}>
              {after.map((o) => (
                <li key={o.slug} className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1 px-4 py-3">
                  <Link href={`/events/concours/${o.slug}`} className="font-semibold hover:underline underline-offset-4" style={{ color: INK }}>{o.name}</Link>
                  <span className="text-sm" style={{ color: MUTED }}>{o.city}{o.state ? `, ${o.state}` : ''}</span>
                  <span className="text-sm sm:ml-auto whitespace-nowrap tabular-nums" style={{ color: INK }}>{concoursDateLabel(o)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-xs mt-10" style={{ color: MUTED }}>
          Dates and venue from the organizer, checked October 2026. Fully Sorted is not the organizer and does not sell tickets. If a date here is wrong, write to hello@fullysorted.com.
        </p>
      </section>
    </main>
  );
}
