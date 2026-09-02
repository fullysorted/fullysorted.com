'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, Check, LogIn } from 'lucide-react';

/**
 * Two states, because the token and the account are separate factors:
 *
 *   signed out — send them to Clerk with a redirect back to this exact URL, so
 *                the token survives the round trip through sign-up. Anything
 *                that dropped it would land them on a dashboard telling them
 *                they have no listing, which is the bug we are here to fix.
 *   signed in  — one button, which is the only call that sets clerk_user_id.
 */
export default function LinkActions({
  token,
  businessName,
  signedIn,
}: {
  token: string;
  businessName: string;
  signedIn: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const here = `/services/link/${token}`;

  async function link() {
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/providers/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "That didn't work. Try again in a moment.");
      setDone(true);
      setTimeout(() => router.push('/dashboard/provider'), 1800);
    } catch (e) {
      setError(e instanceof Error ? e.message : "That didn't work. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div
        className="rounded-2xl px-6 py-6 flex items-start gap-3"
        style={{ background: 'var(--sorted-green-light, #eaf6e6)' }}
      >
        <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }} />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }}>
            {businessName} is yours to manage.
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            Taking you to your dashboard…
          </p>
        </div>
      </div>
    );
  }

  if (!signedIn) {
    return (
      <div
        className="rounded-2xl px-6 py-6"
        style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-lg)' }}
      >
        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
          First, create your Fully Sorted account, or sign in if you already have one. We&rsquo;ll bring you straight
          back here.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/sign-up?redirect_url=${encodeURIComponent(here)}`}
            className="shine inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all bg-accent hover:bg-accent-hover hover:-translate-y-0.5"
          >
            Create my account
          </Link>
          <Link
            href={`/sign-in?redirect_url=${encodeURIComponent(here)}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border transition-colors"
            style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
          >
            <LogIn className="w-4 h-4" /> I already have one
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl px-6 py-6"
      style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-lg)' }}
    >
      <button
        onClick={link}
        disabled={busy}
        className="shine w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3.5 rounded-xl transition-all bg-accent hover:bg-accent-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        {busy ? 'Linking…' : `Link ${businessName} to my account`}
      </button>
      {error && <p className="text-xs font-medium text-red-600 mt-3">{error}</p>}
    </div>
  );
}
