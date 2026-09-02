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
  const [result, setResult] = useState<
    { action: string; linkUrl?: string | null; loginEmailSent?: boolean; contactEmail?: string } | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  // Removing is permanent — the listing goes to 'declined' and the address goes
  // on the suppression list — and it sat behind a single click on a link that
  // arrives by email, which is exactly where mis-clicks happen. Confirmed in the
  // page instead of a browser dialog, which is easy to dismiss without reading.
  const [confirmRemove, setConfirmRemove] = useState(false);

  async function handle(action: Action) {
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
      setResult({
        action: data.action,
        linkUrl: data.linkUrl ?? null,
        loginEmailSent: data.loginEmailSent === true,
        contactEmail: data.contactEmail || 'chris@fullysorted.com',
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
    } finally {
      setSubmitting(null);
    }
  }

  if (result) {
    if (result.action === 'removed') {
      return (
        <div className="bg-white rounded-2xl border border-border p-8 text-center">
          <h3 className="font-display font-semibold tracking-tight text-xl text-foreground mb-2">Done. You&apos;re removed.</h3>
          <p className="text-sm text-text-secondary">
            We won&apos;t reach out again. If you change your mind, email{' '}
            <a href="mailto:chris@fullysorted.com" className="underline">chris@fullysorted.com</a>.
          </p>
        </div>
      );
    }
    if (result.action === 'list_only') {
      return (
        <div className="bg-white rounded-2xl border border-border p-8 text-center">
          <h3 className="font-display font-semibold tracking-tight text-xl text-foreground mb-2">You&apos;re live in the directory.</h3>
          <p className="text-sm text-text-secondary mb-5">
            <strong>{businessName}</strong> is now visible to collectors browsing Fully Sorted. No account needed.
          </p>
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
          >
            View your listing
          </Link>
        </div>
      );
    }
    // claimed
    const contact = result.contactEmail || 'chris@fullysorted.com';
    return (
      <div className="bg-white rounded-2xl border border-border p-8 text-center">
        <h3 className="font-display font-semibold tracking-tight text-xl text-foreground mb-2">Welcome aboard.</h3>
        {/* Three genuinely different outcomes, and the copy used to describe
            only the happy one. The claim is saved in all three — what varies is
            whether there is a login link, and whether an email carrying it
            actually went out. Never say we emailed something we did not. */}
        <p className={`text-sm text-text-secondary ${result.linkUrl ? 'mb-5' : 'mb-2'}`}>
          <strong>{businessName}</strong> is live as a founding provider.{' '}
          {result.linkUrl && result.loginEmailSent
            ? 'Set up your login now and you can edit your details and add photos yourself. It takes a minute. We\u2019ve emailed you the same link in case you\u2019d rather do it later.'
            : result.linkUrl
              ? 'Set up your login below and you can edit your details and add photos yourself. It takes a minute. The email with that link didn\u2019t go out, so use the button rather than waiting for one, or bookmark this page.'
              : null}
        </p>
        {!result.linkUrl && (
          <p className="text-sm text-text-secondary mb-5">
            We couldn&apos;t set up your login link just now, and no email has been sent, so there is nothing waiting
            in your inbox. Email{' '}
            <a href={`mailto:${contact}`} className="underline" style={{ color: '#1E6091' }}>{contact}</a>{' '}
            and we&apos;ll set it up by hand. Your listing stays live either way.
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {result.linkUrl && (
            <Link
              href={result.linkUrl.replace('https://fullysorted.com', '')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Set up my login
            </Link>
          )}
          <Link
            href={`/services/${slug}`}
            className={
              result.linkUrl
                ? 'inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-surface transition-colors'
                : 'inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors'
            }
          >
            View your listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-4">What would you like us to do?</h3>

      <button
        type="button"
        disabled={submitting !== null}
        onClick={() => handle('claim')}
        className="block w-full text-left p-5 rounded-xl border-2 mb-3 transition-all hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50"
        style={{ borderColor: 'var(--accent)', background: 'var(--accent-light)' }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-foreground mb-1">
              {submitting === 'claim' ? 'Saving…' : 'Yes, this is mine: claim it'}
            </p>
            <p className="text-xs text-text-secondary">
              Goes live immediately. We&apos;ll email you a link to edit your profile and add photos.
            </p>
          </div>
          <span className="text-xl" style={{ color: 'var(--accent)' }}>→</span>
        </div>
      </button>

      <button
        type="button"
        disabled={submitting !== null}
        onClick={() => handle('list_only')}
        className="block w-full text-left p-5 rounded-xl border border-border mb-3 hover:border-border-medium transition-colors disabled:opacity-50"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-foreground mb-1">
              {submitting === 'list_only' ? 'Saving…' : 'List it, but I don\u2019t want an account'}
            </p>
            <p className="text-xs text-text-secondary">
              Goes live immediately. Nothing to set up and nothing to maintain. If an owner inquires through your profile we pass it straight to you by email. That is the only thing you will ever hear from us.
            </p>
          </div>
          <span className="text-xl text-text-secondary">→</span>
        </div>
      </button>

      {confirmRemove ? (
        // A div, not a button — the confirm and cancel controls live inside it,
        // and nesting buttons is invalid markup.
        <div className="block w-full text-left p-5 rounded-xl border border-border">
          <p className="font-bold text-foreground mb-1">Are you sure? This removes your listing.</p>
          <p className="text-xs text-text-secondary mb-3">
            <strong>{businessName}</strong> comes down, and we add you to our suppression list so we never reach out
            again. Undoing it means emailing us.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={submitting !== null}
              onClick={() => handle('remove')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              {submitting === 'remove' ? 'Removing…' : 'Yes, remove my listing'}
            </button>
            <button
              type="button"
              disabled={submitting !== null}
              onClick={() => setConfirmRemove(false)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-border text-foreground hover:bg-surface transition-colors disabled:opacity-50"
            >
              Cancel: keep me listed
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          disabled={submitting !== null}
          onClick={() => setConfirmRemove(true)}
          className="block w-full text-left p-5 rounded-xl border border-border hover:border-border-medium transition-colors disabled:opacity-50"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-bold text-foreground mb-1">No thanks, remove me</p>
              <p className="text-xs text-text-secondary">
                We&apos;ll delete the staged listing and add you to our suppression list so we never reach out again.
              </p>
            </div>
            <span className="text-xl text-text-secondary">→</span>
          </div>
        </button>
      )}

      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
    </div>
  );
}
