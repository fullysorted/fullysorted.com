'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Loader2 } from 'lucide-react';

const OPTIONS = [
  { key: 'booked', label: 'They got back to me and the work is going ahead' },
  { key: 'talking', label: 'We are still talking' },
  { key: 'not_going_ahead', label: 'We spoke, but it is not going ahead' },
  { key: 'no_reply', label: 'I never heard back' },
];

export default function CheckinForm({ token, preset }: { token: string; preset: string }) {
  const [choice, setChoice] = useState(OPTIONS.some((o) => o.key === preset) ? preset : '');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const send = async () => {
    if (!choice) return;
    setState('sending');
    try {
      const res = await fetch('/api/leads/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, answer: choice }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <div className="bg-white rounded-2xl border border-border p-10 text-center">
        <CheckCircle className="w-12 h-12 text-green mx-auto mb-4" />
        <h1 className="font-display font-semibold tracking-tight text-2xl text-foreground mb-2">Thanks, noted.</h1>
        <p className="text-text-secondary mb-6">
          {choice === 'no_reply'
            ? 'Sorry about that. If you still need someone, there are other specialists in the directory.'
            : 'That is all we needed.'}
        </p>
        <Link href="/services" className="text-accent underline underline-offset-2">Back to the directory</Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border p-8">
      <h1 className="font-display font-semibold tracking-tight text-2xl text-foreground mb-2">How did it go?</h1>
      <p className="text-text-secondary mb-6">Pick one and confirm. It is not shown publicly.</p>
      <div className="space-y-2 mb-6">
        {OPTIONS.map((o) => (
          <button
            key={o.key}
            type="button"
            onClick={() => setChoice(o.key)}
            aria-pressed={choice === o.key}
            className={`w-full text-left rounded-xl border-2 px-4 py-3 text-sm transition-colors ${
              choice === o.key ? 'border-accent bg-accent-light text-foreground' : 'border-border hover:border-accent/50 text-foreground'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      {state === 'error' && (
        <p className="text-sm text-red-600 mb-4">That did not go through. Try again in a moment.</p>
      )}
      <button
        type="button"
        onClick={send}
        disabled={!choice || state === 'sending'}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50"
      >
        {state === 'sending' && <Loader2 className="w-4 h-4 animate-spin" />}
        Confirm
      </button>
    </div>
  );
}
