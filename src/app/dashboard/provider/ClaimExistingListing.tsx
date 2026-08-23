'use client';

import { useState } from 'react';
import { Loader2, Search } from 'lucide-react';

/**
 * "I'm already listed" — the self-serve half of the account-link fix.
 *
 * Without this, a shop the team onboarded by phone has no way in at all: they
 * sign up, the dashboard finds no row matching their Clerk id, and the only
 * button on offer applies again and creates a duplicate listing. This asks for
 * the address on their listing and mails a link to it.
 *
 * The response is deliberately the same whether or not the address matched
 * anything — the route will not confirm which businesses we hold which address
 * for, and this component must not either.
 */
export default function ClaimExistingListing() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState('');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/providers/link/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Try again in a moment.');
      setSent(data.message || "If that address is on a listing, we've sent it a link.");
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Try again in a moment.');
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm mt-8 pt-6 border-t border-border text-text-secondary">{sent}</p>
    );
  }

  return (
    <div className="mt-8 pt-6 border-t border-border text-left">
      {!open ? (
        <p className="text-sm text-center text-text-secondary">
          Already listed on Fully Sorted?{' '}
          <button type="button" onClick={() => setOpen(true)} className="underline font-medium text-accent">
            Link your existing listing
          </button>{' '}
          instead — don&apos;t apply twice.
        </p>
      ) : (
        <form onSubmit={submit}>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            The email address on your listing
          </label>
          <p className="text-xs text-text-secondary mb-3">
            We&apos;ll send a link to that address — not to this one — so only the business can claim it.
          </p>
          <div className="flex flex-wrap gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="shop@example.com"
              className="flex-1 min-w-[14rem] px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
            />
            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60"
            >
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Send me the link
            </button>
          </div>
          {error && <p className="text-xs font-medium text-red-600 mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}
