import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReviewForm from './ReviewForm';

export const dynamic = 'force-dynamic';

// noindex: these are one-time private links. They must never be crawled,
// cached by a proxy, or turn up in a search result.
export const metadata: Metadata = {
  title: 'Write a review | Fully Sorted',
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ token: string }>;
}

type Invite = {
  businessName: string;
  clientName: string;
  workType: string | null;
  used: boolean;
} | null;

async function getInvite(token: string): Promise<Invite> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const [row] = await sql`
      SELECT r.author_name, r.work_type, r.token_used_at, p.business_name
      FROM provider_reviews r
      JOIN service_providers p ON p.id = r.provider_id
      WHERE r.review_token = ${token}
      LIMIT 1
    `;
    if (!row) return null;
    return {
      businessName: String(row.business_name),
      clientName: String(row.author_name ?? ''),
      workType: row.work_type ? String(row.work_type) : null,
      used: !!row.token_used_at,
    };
  } catch (e) {
    console.error('Review invite lookup failed:', e);
    return null;
  }
}

export default async function ReviewPage({ params }: Props) {
  const { token } = await params;
  const invite = await getInvite(token);
  if (!invite) notFound();

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px" style={{ background: 'var(--accent-gold)' }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-tertiary)' }}>
            Fully Sorted
          </span>
        </div>

        <h1
          className="font-display font-semibold tracking-tight text-3xl sm:text-4xl leading-[1.1] mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          How did {invite.businessName} do?
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {invite.workType
            ? `They asked us to invite you to review the ${invite.workType.toLowerCase()} they did for you.`
            : 'They asked us to invite you to review the work they did for you.'}{' '}
          Owners use these to decide who to trust with their car, so the useful review is the honest one — good or bad.
        </p>

        {invite.used ? (
          <div
            className="rounded-2xl px-6 py-6"
            style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)' }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              This link has already been used.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Your review is in — thank you. If you meant to change something, email chris@fullysorted.com.
            </p>
          </div>
        ) : (
          <ReviewForm token={token} businessName={invite.businessName} clientName={invite.clientName} />
        )}

        <p className="text-xs leading-relaxed mt-8" style={{ color: 'var(--text-tertiary)' }}>
          Your review is published with your name and your car, never your email address.{' '}
          {invite.businessName} can reply to it publicly, but cannot edit it, hide it, or take it down.
          We check reviews for abuse and spam before they go live — never for whether they are flattering.{' '}
          <Link href="/faq" className="underline">
            More about how this works
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
