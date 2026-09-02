'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Loader2, ThumbsUp, Ban } from 'lucide-react';

/**
 * One question, two buttons, no login.
 *
 * The shop is standing in its own inbox with a phone in its hand — this page
 * gets one interaction at most. So: no account, no form, no explanation of why
 * we are asking beyond a single line, and a junk reason that is optional.
 *
 * The wording avoids implying we can see whether they replied. We cannot; this
 * is the shop telling us, and the copy says so.
 */
export default function LeadOutcome({
  token,
  preset,
}: {
  token: string;
  preset: 'replied' | 'junk' | null;
}) {
  const [done, setDone] = useState<'replied' | 'junk' | null>(null);
  const [sending, setSending] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [showReason, setShowReason] = useState(preset === 'junk');
  const [error, setError] = useState('');

  async function send(action: 'replied' | 'junk') {
    setSending(action);
    setError('');
    try {
      const res = await fetch('/api/leads/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, action, reason: action === 'junk' ? reason.trim() || undefined : undefined }),
      });
      if (!res.ok) throw new Error('That did not go through. Try once more.');
      setDone(action);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'That did not go through. Try once more.');
    } finally {
      setSending(null);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border p-8 text-center" style={{ borderColor: 'var(--border-light)', background: 'var(--surface, #fff)' }}>
        <Check className="w-8 h-8 mx-auto mb-3" style={{ color: '#4b8b2e' }} />
        <h1 className="font-display text-2xl mb-2">Got it. Thank you.</h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {done === 'replied'
            ? 'Nothing else to do. Knowing which inquiries get answered is how we work out which ones are worth sending you.'
            : 'Noted. Enough of these from one direction and we go and fix the source rather than keep forwarding it.'}
        </p>
        <Link href="/services" className="inline-block mt-6 text-sm font-semibold" style={{ color: 'var(--accent, #1E6091)' }}>
          Back to the directory
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border p-8" style={{ borderColor: 'var(--border-light)', background: 'var(--surface, #fff)' }}>
      <h1 className="font-display text-2xl mb-2">What happened with that inquiry?</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        One click. We cannot see your inbox and we are not asking what you said, just whether it was worth
        your time.
      </p>

      <div className="space-y-3">
        <button
          onClick={() => send('replied')}
          disabled={!!sending}
          className="w-full inline-flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all hover:-translate-y-0.5 disabled:opacity-60"
          style={{ borderColor: 'var(--border-light)' }}
        >
          {sending === 'replied' ? <Loader2 className="w-5 h-5 animate-spin" /> : <ThumbsUp className="w-5 h-5" style={{ color: '#4b8b2e' }} />}
          <span>
            <span className="block text-sm font-semibold">I replied to this one</span>
            <span className="block text-xs" style={{ color: 'var(--text-tertiary)' }}>A real inquiry. I got back to them.</span>
          </span>
        </button>

        <button
          onClick={() => (showReason ? send('junk') : setShowReason(true))}
          disabled={!!sending}
          className="w-full inline-flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all hover:-translate-y-0.5 disabled:opacity-60"
          style={{ borderColor: 'var(--border-light)' }}
        >
          {sending === 'junk' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Ban className="w-5 h-5" style={{ color: '#9a5a33' }} />}
          <span>
            <span className="block text-sm font-semibold">Not a real inquiry</span>
            <span className="block text-xs" style={{ color: 'var(--text-tertiary)' }}>Spam, a sales pitch, or nothing to do with what I do.</span>
          </span>
        </button>

        {showReason && (
          <div className="pl-1">
            <input
              className="w-full h-10 px-3 text-sm rounded-lg border bg-white"
              style={{ borderColor: 'var(--border-light)' }}
              placeholder="What was wrong with it? (optional)"
              aria-label="What was wrong with it (optional)"
              value={reason}
              maxLength={120}
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              onClick={() => send('junk')}
              disabled={!!sending}
              className="mt-2 text-sm font-semibold px-4 py-2 rounded-lg text-white bg-accent hover:bg-accent-hover disabled:opacity-60"
            >
              Send it
            </button>
          </div>
        )}
      </div>

      {error && <p className="text-xs font-medium text-red-600 mt-4">{error}</p>}
    </div>
  );
}
