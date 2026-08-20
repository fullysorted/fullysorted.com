'use client';

import { useState } from 'react';
import { Loader2, Send, Check } from 'lucide-react';

// On-site inquiry form for a provider profile.
//
// This replaced a raw `mailto:` CTA that put the owner's email address in the
// page source — after the claim flow promised we wouldn't publish it. The
// inquiry now goes through /api/messages (durable: saved + emailed to us),
// and we relay it to the provider. Owner email never appears in the page.
export default function ProviderInquiryForm({
  slug,
  businessName,
}: {
  slug: string;
  businessName: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Name, email and a message are required.');
      return;
    }
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'provider-inquiry',
          listingSlug: `provider:${slug}`,
          listingTitle: `Provider inquiry — ${businessName}`,
          senderName: name.trim(),
          senderEmail: email.trim(),
          senderPhone: phone.trim() || undefined,
          messageText: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Couldn't send — try again in a moment.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send — try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        className="rounded-xl px-4 py-4 flex items-start gap-3"
        style={{ background: 'var(--sorted-green-light, #eaf6e6)' }}
      >
        <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }} />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--sorted-green-dark, #3d7a2a)' }}>
            Sent to {businessName}.
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            Your inquiry goes through Fully Sorted — the reply lands in your email.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    'w-full h-10 px-3 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent';

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          className={inputCls}
          style={{ borderColor: 'var(--border-light)' }}
          placeholder="Your name *"
          aria-label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={120}
        />
        <input
          className={inputCls}
          style={{ borderColor: 'var(--border-light)' }}
          type="email"
          placeholder="Your email *"
          aria-label="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
        />
      </div>
      <input
        className={inputCls}
        style={{ borderColor: 'var(--border-light)' }}
        placeholder="Phone (optional)"
        aria-label="Your phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        maxLength={40}
      />
      <textarea
        className="w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
        style={{ borderColor: 'var(--border-light)' }}
        rows={4}
        placeholder={`What's the car, and what does it need?`}
        aria-label="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={4000}
      />
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="shine w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all bg-accent hover:bg-accent-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {sending ? 'Sending…' : `Message ${businessName}`}
      </button>
      <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
        Sent through Fully Sorted. Your details go to {businessName} and nowhere else.
      </p>
    </form>
  );
}
