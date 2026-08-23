import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { lookupAccountLink, ensureAccountLinkColumns, LINK_TOKEN_TTL_DAYS } from '@/lib/account-link';
import LinkActions from './LinkActions';

export const dynamic = 'force-dynamic';

// noindex: a private, single-use link. It must never be crawled or cached.
export const metadata: Metadata = {
  title: 'Set up your login | Fully Sorted',
  robots: { index: false, follow: false },
};

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen py-16 px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px" style={{ background: 'var(--accent-gold)' }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-tertiary)' }}>
            Fully Sorted
          </span>
        </div>
        <h1
          className="font-display font-semibold tracking-tight text-3xl sm:text-4xl leading-[1.1] mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}

export default async function AccountLinkPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  if (!process.env.DATABASE_URL) {
    return (
      <Shell title="We can't check that link right now">
        <p style={{ color: 'var(--text-secondary)' }}>Try again in a few minutes, or email chris@fullysorted.com.</p>
      </Shell>
    );
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  await ensureAccountLinkColumns(sql);
  const found = await lookupAccountLink(sql, token);
  const { userId } = await auth();

  if (found.state === 'not_found') {
    return (
      <Shell title="That link isn't valid">
        <p style={{ color: 'var(--text-secondary)' }}>
          It may already have been used to set up a login. If you&rsquo;re locked out of a listing you own, email{' '}
          <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a> and we&rsquo;ll sort it.
        </p>
      </Shell>
    );
  }

  if (found.state === 'expired') {
    return (
      <Shell title="That link has expired">
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          Links stay good for {LINK_TOKEN_TTL_DAYS} days and this one has run out. Nothing is wrong with your listing
          for <strong>{found.businessName}</strong> — we just need to send you a fresh one.
        </p>
        <Link href="/dashboard/provider" className="underline" style={{ color: 'var(--accent-blue)' }}>
          Request a new link
        </Link>
      </Shell>
    );
  }

  if (found.state === 'already_linked') {
    return (
      <Shell title="This listing already has a login">
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          Someone has already set up an account to manage <strong>{found.businessName}</strong>. If that wasn&rsquo;t you or
          your colleague, email <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a>{' '}
          and we&rsquo;ll unlink it while we check.
        </p>
        <Link href={`/services/${found.slug}`} className="underline" style={{ color: 'var(--accent-blue)' }}>
          View the listing
        </Link>
      </Shell>
    );
  }

  return (
    <Shell title={`Manage ${found.businessName} yourself`}>
      <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--text-secondary)' }}>
        Your listing is live already. Setting up a login lets you edit your details, reply to reviews, and keep it
        current without going through us.
      </p>
      <LinkActions token={token} businessName={found.businessName} signedIn={!!userId} />
      <p className="text-xs leading-relaxed mt-7" style={{ color: 'var(--text-tertiary)' }}>
        This link works once and only for this listing. We sent it to the address we already hold for{' '}
        {found.businessName} — if that isn&rsquo;t you, please don&rsquo;t use it.
      </p>
    </Shell>
  );
}
