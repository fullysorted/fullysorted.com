'use client';

import { useState } from 'react';

export default function AskForm({ slug, businessName }: { slug: string; businessName: string }) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [workType, setWorkType] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-stone-200 p-6">
        <p className="font-semibold text-stone-900">Check your email.</p>
        <p className="text-sm text-stone-600 mt-1">
          The link to review {businessName} is on its way to {clientEmail}. It works once.
        </p>
      </div>
    );
  }

  const field =
    'w-full px-4 py-3 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent';

  return (
    <form
      className="grid gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setState('sending');
        setError(null);
        try {
          const res = await fetch('/api/reviews/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug, clientName, clientEmail, workType, website }),
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success) setState('sent');
          else {
            setError(data.error || 'That did not send. Please try again.');
            setState('idle');
          }
        } catch {
          setError('That did not send. Please try again.');
          setState('idle');
        }
      }}
    >
      <input required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Your name" aria-label="Your name" autoComplete="name" className={field} />
      <input required type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Your email" aria-label="Your email" autoComplete="email" className={field} />
      <input value={workType} onChange={(e) => setWorkType(e.target.value)} placeholder="What they did, and on which car (optional)" aria-label="What they did" className={field} />
      <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden className="hidden" name="website" />
      <button type="submit" disabled={state === 'sending'} className="h-12 rounded-xl text-sm font-bold text-white bg-accent hover:opacity-90 disabled:opacity-60">
        {state === 'sending' ? 'Sending...' : 'Email me the review link'}
      </button>
      {error && <p className="text-sm" style={{ color: '#9a3f2f' }}>{error}</p>}
    </form>
  );
}
