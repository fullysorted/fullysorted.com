'use client';

import { useState } from 'react';
import { Loader2, Check, Star } from 'lucide-react';

export default function ReviewForm({
  token,
  businessName,
  clientName,
}: {
  token: string;
  businessName: string;
  clientName: string;
}) {
  const [name, setName] = useState(clientName || '');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [vehicle, setVehicle] = useState('');
  const [workDate, setWorkDate] = useState('');
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError('Please add your name.');
    if (!rating) return setError('Please choose a rating.');
    if (body.trim().length < 20) return setError('Please write a sentence or two. A bare rating helps nobody.');
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          authorName: name.trim(),
          rating,
          vehicle: vehicle.trim() || undefined,
          workDate: workDate.trim() || undefined,
          body: body.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Try again in a moment.');
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again in a moment.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        className="rounded-2xl px-6 py-6 flex items-start gap-3"
        style={{ background: 'var(--sorted-green-light, #eaf6e6)' }}
      >
        <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }} />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }}>
            Thank you. That is genuinely useful.
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            It goes live on {businessName}&rsquo;s profile once we have checked it for spam and abuse. We do not edit
            reviews, and neither can they.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    'w-full h-11 px-3 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent';

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl px-6 sm:px-8 py-7 space-y-5"
      style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-lg)' }}
    >
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-tertiary)' }}>
          Your rating *
        </label>
        <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              aria-label={`${n} star${n > 1 ? 's' : ''}`}
              aria-pressed={rating === n}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className="w-8 h-8"
                style={{
                  fill: (hover || rating) >= n ? 'var(--accent-gold, #B08D3F)' : 'transparent',
                  color: (hover || rating) >= n ? 'var(--accent-gold, #B08D3F)' : 'var(--border-light, #d8d4cb)',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
            Your name *
          </label>
          <input
            className={inputCls}
            style={{ borderColor: 'var(--border-light)' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
            The car
          </label>
          <input
            className={inputCls}
            style={{ borderColor: 'var(--border-light)' }}
            placeholder="1973 911 T"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            maxLength={120}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
          When was the work done?
        </label>
        <input
          className={inputCls}
          style={{ borderColor: 'var(--border-light)' }}
          placeholder="Spring 2026"
          value={workDate}
          onChange={(e) => setWorkDate(e.target.value)}
          maxLength={40}
        />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
          Your review *
        </label>
        <textarea
          className="w-full px-3 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          style={{ borderColor: 'var(--border-light)' }}
          rows={7}
          placeholder="What did they do, how did it go, and would you take another car back to them? The specifics are what other owners actually read."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={5000}
        />
        <p className="text-[11px] mt-1" style={{ color: 'var(--text-tertiary)' }}>
          {body.trim().length < 20 ? 'A sentence or two, minimum.' : `${body.length} characters`}
        </p>
      </div>

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="shine w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3.5 rounded-xl transition-all bg-accent hover:bg-accent-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        {sending ? 'Sending…' : 'Post my review'}
      </button>
    </form>
  );
}
