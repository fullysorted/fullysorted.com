'use client';

import { useState } from 'react';
import { Loader2, Send, Check, Plus, Minus } from 'lucide-react';
import { trackGaEvent } from '@/components/analytics/GoogleAnalytics';

// On-site inquiry form for a provider profile.
//
// This replaced a raw `mailto:` CTA that put the owner's email address in the
// page source — after the claim flow promised we wouldn't publish it. The
// inquiry now goes through /api/messages (durable: saved + emailed to us),
// and we relay it to the provider. Owner email never appears in the page.
//
// ─── Why the car details are a closed panel, not fields ────────────────────
// A shop cannot quote from "how much to sort my 911", so it writes back asking
// the same four questions every time and half those threads die there. Asking
// the questions up front fixes that — but only if asking them costs nothing.
//
// So the default state of this form is exactly what it was before: name,
// email, phone, and a box. The car panel is shut, optional, and says so. Not
// everyone wants to fill in a form, plenty of people are on a phone, and the
// chassis number on a 1967 car is under the carpet or on a plate nobody can
// read — a form that insists on it loses the enquiry that the shop most wanted.
// Nothing in the panel is required and an empty panel is a perfectly good lead.

const CONDITIONS = [
  ['drives', 'Drives and is road-legal'],
  ['runs-not-road', 'Runs, but not road-ready'],
  ['not-running', 'Not running'],
  ['project', 'Project: apart or stored'],
  ['unsure', "Not sure"],
] as const;

const TIMELINES = [
  ['now', 'As soon as possible'],
  ['few-weeks', 'Next few weeks'],
  ['few-months', 'Next few months'],
  ['planning', 'Just planning ahead'],
] as const;

const BUDGETS = [
  ['under-1k', 'Under $1,000'],
  ['1-5k', '$1,000 – $5,000'],
  ['5-15k', '$5,000 – $15,000'],
  ['15-50k', '$15,000 – $50,000'],
  ['over-50k', 'Over $50,000'],
  ['not-sure', 'No idea yet, tell me'],
] as const;

const TRANSPORT = [
  ['needed', 'It needs collecting'],
  ['can-deliver', 'I can bring it'],
  ['unsure', 'Not sure yet'],
] as const;

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
  // Whether the message went to the shop directly or came to us to pass on.
  // The old copy claimed the former in both cases; it is now whichever is true.
  const [relayed, setRelayed] = useState(false);
  const [error, setError] = useState('');

  // ── The optional car panel ──
  const [showCar, setShowCar] = useState(false);
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [chassis, setChassis] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [transport, setTransport] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');

  function buildBrief() {
    const b: Record<string, string> = {};
    const put = (k: string, v: string) => {
      const t = v.trim();
      if (t) b[k] = t;
    };
    put('year', year);
    put('make', make);
    put('model', model);
    put('chassis', chassis);
    put('condition', condition);
    put('location', location);
    put('transport', transport);
    put('timeline', timeline);
    put('budget', budget);
    return Object.keys(b).length ? b : undefined;
  }

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
          listingTitle: `Provider inquiry: ${businessName}`,
          senderName: name.trim(),
          senderEmail: email.trim(),
          senderPhone: phone.trim() || undefined,
          messageText: message.trim(),
          brief: buildBrief(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Couldn't send. Try again in a moment.");
      setRelayed(!!data.relayed);
      setSent(true);
      // GA4 key event: an enquiry reached a shop. Provider slug only, never PII.
      trackGaEvent('provider_enquiry', { provider: slug, has_brief: !!buildBrief() });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send. Try again in a moment.");
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
            {relayed ? `Sent to ${businessName}.` : `We've got it. Passing it to ${businessName}.`}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            {relayed
              ? 'It landed in their inbox just now, and their reply comes straight back to your email.'
              : 'We pass this one on by hand, so it may take a little longer than usual. Their reply comes straight to your email.'}
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    'w-full h-10 px-3 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent';
  const selectCls = inputCls + ' appearance-none';
  const labelCls = 'block text-[11px] font-semibold mb-1';

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

      {/* Optional car details. Shut by default, and never required. */}
      <div className="rounded-xl border" style={{ borderColor: 'var(--border-light)' }}>
        <button
          type="button"
          onClick={() => setShowCar((v) => !v)}
          aria-expanded={showCar}
          className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-left"
        >
          <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
            Add a few details about the car (optional)
          </span>
          {showCar ? (
            <Minus className="w-4 h-4 shrink-0" style={{ color: 'var(--text-tertiary)' }} />
          ) : (
            <Plus className="w-4 h-4 shrink-0" style={{ color: 'var(--text-tertiary)' }} />
          )}
        </button>

        {showCar && (
          <div className="px-3 pb-3 space-y-3">
            <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              Skip anything you don&rsquo;t know. It only saves a round of emails. The message above is
              enough on its own.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-year">Year</label>
                <input id="fs-year" className={inputCls} style={{ borderColor: 'var(--border-light)' }}
                  inputMode="numeric" placeholder="1973" value={year} maxLength={4}
                  onChange={(e) => setYear(e.target.value)} />
              </div>
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-make">Make</label>
                <input id="fs-make" className={inputCls} style={{ borderColor: 'var(--border-light)' }}
                  placeholder="Porsche" value={make} maxLength={60}
                  onChange={(e) => setMake(e.target.value)} />
              </div>
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-model">Model</label>
                <input id="fs-model" className={inputCls} style={{ borderColor: 'var(--border-light)' }}
                  placeholder="911 T" value={model} maxLength={80}
                  onChange={(e) => setModel(e.target.value)} />
              </div>
            </div>

            <div>
              <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-chassis">
                Chassis or VIN
              </label>
              <input id="fs-chassis" className={inputCls} style={{ borderColor: 'var(--border-light)' }}
                placeholder="Only if it&rsquo;s to hand" value={chassis} maxLength={40}
                onChange={(e) => setChassis(e.target.value)} />
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-tertiary)' }}>
                No need to go and look for it. It is on the registration, and they can ask later.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-condition">
                  How it runs
                </label>
                <select id="fs-condition" className={selectCls} style={{ borderColor: 'var(--border-light)' }}
                  value={condition} onChange={(e) => setCondition(e.target.value)}>
                  <option value="">Select</option>
                  {CONDITIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-location">
                  Where the car is
                </label>
                <input id="fs-location" className={inputCls} style={{ borderColor: 'var(--border-light)' }}
                  placeholder="Town or ZIP" value={location} maxLength={120}
                  onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-transport">
                  Getting it there
                </label>
                <select id="fs-transport" className={selectCls} style={{ borderColor: 'var(--border-light)' }}
                  value={transport} onChange={(e) => setTransport(e.target.value)}>
                  <option value="">Select</option>
                  {TRANSPORT.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-timeline">
                  When
                </label>
                <select id="fs-timeline" className={selectCls} style={{ borderColor: 'var(--border-light)' }}
                  value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                  <option value="">Select</option>
                  {TIMELINES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls} style={{ color: 'var(--text-secondary)' }} htmlFor="fs-budget">
                Budget in mind
              </label>
              <select id="fs-budget" className={selectCls} style={{ borderColor: 'var(--border-light)' }}
                value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">Select</option>
                {BUDGETS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-tertiary)' }}>
                A range is fine. It saves being quoted for work you weren&rsquo;t asking for.
              </p>
            </div>
          </div>
        )}
      </div>

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
        Goes to {businessName}. We keep a copy so we can chase it up if they don&rsquo;t reply, and we never pass
        your details to anyone else.
      </p>
    </form>
  );
}
