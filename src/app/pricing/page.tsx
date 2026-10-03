import Link from 'next/link';
import type { ReactNode } from 'react';
import { FREE_LISTINGS_THRESHOLD, FOUNDING_PROVIDER_THRESHOLD } from '@/lib/listing-tiers';

// 2026-10-02: listing prices appear only at the package step of /sell
// (Chris, 2026-09-28). This page explains how fees work and quotes no
// dollar figure. The gig fee is not stated until gigs open.
export const metadata = {
  alternates: { canonical: '/pricing' },
  title: 'Fees',
  description:
    'What Fully Sorted costs: free to search, free for specialists to list, and one fee, paid once, to sell a car.',
};

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const ROWS: { label: string; head: string; body: ReactNode }[] = [
  {
    label: 'Hiring a specialist',
    head: 'Free to search, free to ask.',
    body: (
      <>
        You pay the specialist, at the price you agree with them. We take nothing out of a
        quote, and no account is needed to send one.
      </>
    ),
  },
  {
    label: 'Listing your shop',
    head: 'Free.',
    body: (
      <>
        The first {FOUNDING_PROVIDER_THRESHOLD} specialists to join are founding members, and a
        founding member&apos;s directory listing stays free for life.
      </>
    ),
  },
  {
    label: 'Selling a car',
    head: 'One fee, paid once.',
    body: (
      <>
        Three packages, from a basic listing to one that stays up until the car sells. You see
        them, with prices, when you list. No commission when it sells. The first{' '}
        {FREE_LISTINGS_THRESHOLD} cars list free. Dealers and consignment houses pay the same as
        everyone, and every dealer listing is marked as one. Listing several cars?{' '}
        <Link href="/contact" className="font-semibold underline underline-offset-4" style={{ color: INK }}>
          Ask about a package
        </Link>
        .
      </>
    ),
  },
  {
    label: 'Parts, memorabilia and artwork',
    head: 'The first 100 are free.',
    body: (
      <>
        After that, a small fee per listing, or a monthly seller plan that covers several at once. You see the prices
        on the posting form, before you pay. No fee on the sale.
      </>
    ),
  },
  {
    label: 'Wanted ads',
    head: 'Free to post.',
    body: <>Finder&apos;s fees are between the two people involved.</>,
  },
  {
    label: 'Fixed-price gigs',
    head: 'Not open yet.',
    body: (
      <>
        When they open, the fee is posted on the{' '}
        <Link href="/trust#how-we-make-money" className="font-semibold underline underline-offset-4" style={{ color: INK }}>
          trust page
        </Link>{' '}
        before the first one is booked.
      </>
    ),
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <section style={{ background: '#FFFFFF', borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
            Fees
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4" style={{ color: INK }}>
            What things cost.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Browsing is free. Being listed as a specialist is free. Selling a car is one fee, paid
            once.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <dl>
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-7"
              style={{ borderTop: `1px solid ${RULE}` }}
            >
              <dt className="sm:col-span-4 text-[11px] uppercase pt-1" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
                {r.label}
              </dt>
              <dd className="sm:col-span-8">
                <p className="font-display text-xl sm:text-2xl tracking-tight" style={{ color: INK }}>
                  {r.head}
                </p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: MUTED }}>
                  {r.body}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm" style={{ color: MUTED }}>
          Everything we earn from, and anything we plan to add, is written down on the{' '}
          <Link href="/trust#how-we-make-money" className="font-semibold underline underline-offset-4" style={{ color: INK }}>
            trust page
          </Link>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/sell"
            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: TEAL }}
          >
            List a car
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold"
            style={{ color: INK, border: `1.5px solid ${INK}` }}
          >
            Find a pro
          </Link>
        </div>
      </section>
    </main>
  );
}
