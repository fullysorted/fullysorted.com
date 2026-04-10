'use client';

import { useState } from 'react';
import Link from 'next/link';

type Action = 'claim' | 'list_only' | 'remove';

export default function ClaimActions({
  token,
  businessName,
  slug,
}: {
  token: string;
  businessName: string;
  slug: string;
}) {
  const [submitting, setSubmitting] = useState<Action | null>(null);
  const [result, setResult] = useState<{ action: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handle(action: Action) {
    if (action === 'remove' && !confirm(`Remove ${businessName} from Fully Sorted? You won't be contacted again.`)) return;

    setSubmitting(action);
    setError(null);
    try {
      const res = await fetch('/api/providers/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, action }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setResult({ action: data.action });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
    } finally {
      setSubmitting(null);
    }
  }

  if (result) {
    if (result.action === 'removed') {
      return (
        <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Done — you&apos;re removed.</h3>
          <p className="text-sm text-text-secondary">
            We won&apos;t reach out again. If you change your mind, email{' '}
            <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a>.
          </p>
        </div>
      );
    }
    if (result.action === 'list_only') {
      return (
        <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">You&apos;re live in the directory.</h3>
          <p className="text-sm text-text-secondary mb-5">
            <strong>{businessName}</strong> is now visible to collectors browsing Fully Sorted. No account needed.
          </p>
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl"
            style={{ background: '#C1440E' }}
          >
            View your listing
          </Link>
        </div>
      );
    }
    // claimed
    return (
      <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Welcome aboard.</h3>
        <p className="text-sm text-text-secondary mb-5">
          <strong>{businessName}</strong> is live as a founding provider. Create your account to manage your profile, respond to inquiries, and update your specialties.
        </p>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl"
          style={{ background: '#C1440E' }}
        >
          Create your account
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-4">What would you like us to do?</h3>

      <button
        type="button"
        disabled={submitting !== null}
        onClick={() => handle('claim')}
        className="block w-full text-left p-5 rounded-xl border-2 mb-3 transition-colors disabled:opacity-50"
        style={{ borderColor: '#C1440E', background: '#fef2ee' }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-foreground mb-1">
              {submitting === 'claim' ? 'Saving…' : 'Yes, this is mine — claim it'}
            </p>
            <p className="text-xs text-text-secondary">
              Goes live immediately. You&apos;ll create a free account next so you can edit your profile, see who&apos;s reaching out, and add photos.
            </p>
          </div>
          <span className="text-xl" style={{ color: '#C1440E' }}>→</span>
        </div>
      </button>

      <button
        type="button"
        disabled={submitting !== null}
        onClick={() => handle('list_only')}
        className="block w-full text-left p-5 rounded-xl border border-stone-200 mb-3 hover:border-stone-300 transition-colors disabled:opacity-50"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-foreground mb-1">
              {submitting === 'list_only' ? 'Saving…' : 'List it, but I don\u2019t want an account'}
            </p>
            <p className="text-xs text-text-secondary">
              Goes live immediately. Collectors can see your profile and reach out via your existing website. No account, no notifications from us.
            </p>
          </div>
          <span className="text-xl text-text-secondary">→</span>
        </div>
      </button>

      <button
        type="button"
        disabled={submitting !== null}
        onClick={() => handle('remove')}
        className="block w-full text-left p-5 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors disabled:opacity-50"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-foreground mb-1">
              {submitting === 'remove' ? 'Removing…' : 'No thanks — remove me'}
            </p>
            <p className="text-xs text-text-secondary">
              We&apos;ll delete the staged listing and add you to our suppression list so we never reach out again.
            </p>
          </div>
          <span className="text-xl text-text-secondary">→</span>
        </div>
      </button>

      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
    </div>
  );
}
