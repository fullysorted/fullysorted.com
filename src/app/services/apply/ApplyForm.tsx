'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { ArrowRight, CheckCircle, Search } from 'lucide-react';
import Link from 'next/link';
import { CATEGORY_OPTIONS } from '@/lib/service-categories';
import { FOUNDING_PROVIDER_THRESHOLD } from '@/lib/listing-tiers';
import ProviderImagesFields from '@/components/media/ProviderImagesFields';
import { ProviderMark } from '@/components/providers/ProviderMark';
import type { LogoKind } from '@/lib/provider-images';
import { trackGaEvent } from '@/components/analytics/GoogleAnalytics';

/**
 * 2026-10-05: the four-step wizard is gone. Since the claim model (we build the
 * profile, the shop claims it) the form is the fallback, not the front door,
 * so this page is two things on one screen:
 *
 *   1. "Already listed?" A search over the live directory. A hit offers to
 *      send a login link to the address on that listing (the account-link
 *      flow, which only ever mails the stored address).
 *   2. "Not listed? Add your shop." The seven fields the API actually
 *      requires, and nothing else. Specialties, work settings, phone, website
 *      and the rest are added from the dashboard once the shop is in. A shop
 *      that is live with a thin profile beats one that bailed at step 3 of 4.
 *
 * A new listing lands as pending; a person flips it live. The ?category=
 * deep link is resolved server-side in page.tsx (see the note there).
 */

const HELP_EMAIL = 'chris@fullysorted.com';
const INPUT =
  'w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent';
const INPUT_BAD = ' border-red-400 ring-1 ring-red-300';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const INK = '#12352A';
const TEAL = '#1C8C87';
const RULE = 'rgba(18,53,42,0.14)';

type Listed = {
  id: number;
  businessName: string;
  slug: string;
  category: string;
  location: string | null;
  logoUrl?: string | null;
  logoKind?: string | null;
};

function normalizeWebsite(v: string) {
  const t = v.trim();
  if (!t) return '';
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

// ─── "Already listed?" ────────────────────────────────────
function ClaimSearch() {
  const [q, setQ] = useState('');
  const [hits, setHits] = useState<Listed[]>([]);
  const [searched, setSearched] = useState(false);
  const [failed, setFailed] = useState(false);
  const [picked, setPicked] = useState<Listed | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState('');

  // Server-side search, debounced. The API does the matching and caps the
  // answer at six, so this costs the same at 22 shops as at 2,000.
  useEffect(() => {
    const t = q.trim();
    if (t.length < 2) { setHits([]); setSearched(false); return; }
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => {
      fetch(`/api/providers?fields=card&limit=6&q=${encodeURIComponent(t)}`, { signal: ctrl.signal })
        .then(async (r) => {
          const d = await r.json().catch(() => ({}));
          if (!r.ok || d.error) throw new Error('failed');
          setHits(Array.isArray(d.providers) ? d.providers : []);
          setSearched(true);
          setFailed(false);
        })
        .catch((e) => { if (e?.name !== 'AbortError') setFailed(true); });
    }, 250);
    return () => { window.clearTimeout(timer); ctrl.abort(); };
  }, [q]);

  const label = (key: string) => CATEGORY_OPTIONS.find((c) => c.value === key)?.label ?? key;

  const sendLink = async () => {
    if (!picked) return;
    setSending(true);
    try {
      const res = await fetch('/api/providers/link/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: picked.id }),
      });
      const data = await res.json().catch(() => ({}));
      setSent(
        res.ok
          ? data.message || "If that listing has an email on file, we've sent it a link. Check your inbox."
          : data.error || `We couldn't send that just now. Email ${HELP_EMAIL} and we'll set your login up by hand.`,
      );
    } catch {
      setSent(`Try again in a moment, or email ${HELP_EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="rounded-2xl bg-white p-5 sm:p-7" style={{ border: `1px solid ${RULE}` }}>
      <p className="text-[11px] uppercase mb-2" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
        Already listed?
      </p>
      <h2 className="font-display text-2xl tracking-tight mb-1" style={{ color: INK }}>
        Find your shop and claim it.
      </h2>
      <p className="text-sm text-text-secondary mb-4">
        We build profiles for shops we know. If yours is here, take it over rather than starting a second one.
      </p>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9a9a8a' }} aria-hidden />
        <input
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setPicked(null); setSent(''); }}
          placeholder="Shop name or city"
          aria-label="Search the directory for your shop"
          className={INPUT + ' pl-10'}
        />
      </div>

      {failed && (
        <p className="text-sm text-text-secondary mt-3">
          The directory is not answering right now. The form below works, or email {HELP_EMAIL}.
        </p>
      )}

      {searched && hits.length === 0 && !picked && (
        <p className="text-sm text-text-secondary mt-3">Nothing by that name yet. Add it below and it is yours from the start.</p>
      )}

      {hits.length > 0 && !picked && (
        <ul className="mt-3 divide-y" style={{ borderColor: RULE }}>
          {hits.map((p) => (
            <li key={p.id} className="flex items-center gap-3 py-2.5">
              <ProviderMark name={p.businessName} category={p.category} logoUrl={p.logoUrl} logoKind={p.logoKind} size={36} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate" style={{ color: INK }}>{p.businessName}</p>
                <p className="text-xs text-text-secondary truncate">
                  {label(p.category)}{p.location ? ` · ${p.location}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPicked(p)}
                className="shrink-0 text-sm font-semibold px-3 py-1.5 rounded-full hover:bg-[#E6F3F2]"
                style={{ color: INK, border: `1px solid ${RULE}` }}
              >
                This is mine
              </button>
            </li>
          ))}
        </ul>
      )}

      {picked && (
        <div className="mt-4 rounded-xl p-4" style={{ background: '#F4F6F5' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: INK }}>{picked.businessName}</p>
          {sent ? (
            <p className="text-sm text-text-secondary">{sent}</p>
          ) : (
            <>
              <p className="text-sm text-text-secondary mb-3">
                We will send a login link to the email address on this listing. Nobody else sees that address, and the link only works once.
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={sendLink}
                  disabled={sending}
                  className="px-4 py-2 rounded-full text-sm font-bold text-white disabled:opacity-60"
                  style={{ background: TEAL }}
                >
                  {sending ? 'Sending' : 'Send me the link'}
                </button>
                <button type="button" onClick={() => setPicked(null)} className="px-3 py-2 text-sm font-semibold underline underline-offset-4" style={{ color: INK }}>
                  Not this one
                </button>
              </div>
              <p className="text-xs text-text-secondary mt-3">
                Wrong address on file, or none? Email {HELP_EMAIL} from the shop&apos;s own domain and a person will sort it.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
}

// ─── "Not listed? Add your shop." ─────────────────────────
export default function ApplyForm({ presetCategory = '' }: { presetCategory?: string }) {
  const { userId } = useAuth();
  const [form, setForm] = useState({
    businessName: '', ownerName: '', category: presetCategory, location: '', email: '',
    description: '', avatarUrl: '', bannerFocus: '50% 35%', logoUrl: '', logoKind: 'logo' as LogoKind,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [linkSent, setLinkSent] = useState('');

  const update = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => { if (!e[k]) return e; const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.businessName.trim()) e.businessName = 'What would an owner search for?';
    if (!form.ownerName.trim()) e.ownerName = 'A name, so we know who to write to.';
    if (!form.category) e.category = 'Pick the trade you are best known for.';
    if (!form.location.trim()) e.location = 'City and state.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'A working email address.';
    if (form.description.trim().length < 20) e.description = 'A sentence or two is plenty.';
    if (!form.avatarUrl) e.avatarUrl = 'One photo. It is the first thing an owner sees.';
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      const first = document.getElementById(`apply-${Object.keys(e)[0]}`);
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: normalizeWebsite(''),
          workSettings: [],
          serviceTypes: [],
          specialties: [],
          priceRange: '$$',
          teamSize: null,
          serviceRadiusMiles: null,
          clerkUserId: userId || null,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        trackGaEvent('provider_apply', { work_settings: '' });
      } else {
        setDuplicate(!!data.duplicate);
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // The API found a listing on this email: offer the takeover link instead.
  const requestLink = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/providers/link/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      setLinkSent(
        res.ok
          ? data.message || "If that address is on a listing, we've sent it a link."
          : data.error || `We couldn't send that email just now. Email ${HELP_EMAIL} and we'll set your login up by hand.`,
      );
    } catch {
      setLinkSent(`Try again in a moment, or email ${HELP_EMAIL}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p className="text-xs text-red-600 mt-1.5" role="alert">{errors[k]}</p> : null;
  const cls = (k: string) => INPUT + (errors[k] ? INPUT_BAD : '');

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-10 text-center" style={{ border: `1px solid ${RULE}` }}>
          <CheckCircle className="w-14 h-14 mx-auto mb-5" style={{ color: TEAL }} />
          <h1 className="font-display tracking-tight text-3xl mb-3" style={{ color: INK }}>
            Got it.
          </h1>
          <p className="text-text-secondary mb-2">
            A person reads it, then it goes live. Expect an email within a few days with your profile link and your login.
          </p>
          <p className="text-sm text-text-secondary mb-8">
            Phone, website, specialties and the rest get added from your dashboard once you are in.
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: TEAL }}>
            See the directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Header: the sitewide white hero. */}
      <div style={{ background: '#FFFFFF', borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
            Services directory
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4" style={{ color: INK }}>
            Get found by collectors.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
            Free for the first {FOUNDING_PROVIDER_THRESHOLD}, and it stays free for them. Reviews come only from owners who used you, and you can answer every one.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid gap-8">
        <ClaimSearch />

        <form onSubmit={submit} noValidate className="rounded-2xl bg-white p-5 sm:p-7" style={{ border: `1px solid ${RULE}` }}>
          <p className="text-[11px] uppercase mb-2" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
            Not listed?
          </p>
          <h2 className="font-display text-2xl tracking-tight mb-1" style={{ color: INK }}>
            Add your shop.
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Seven things. Everything else is added from your dashboard once you are in.
          </p>

          <div className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="apply-businessName" className="block text-sm font-medium text-foreground mb-1.5">Business or trading name</label>
                <input id="apply-businessName" value={form.businessName} onChange={(e) => update('businessName', e.target.value)} className={cls('businessName')} autoComplete="organization" />
                <Err k="businessName" />
              </div>
              <div>
                <label htmlFor="apply-ownerName" className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                <input id="apply-ownerName" value={form.ownerName} onChange={(e) => update('ownerName', e.target.value)} className={cls('ownerName')} autoComplete="name" />
                <Err k="ownerName" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="apply-category" className="block text-sm font-medium text-foreground mb-1.5">Main trade</label>
                <select id="apply-category" value={form.category} onChange={(e) => update('category', e.target.value)} className={cls('category')}>
                  <option value="">Choose one</option>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
                <Err k="category" />
              </div>
              <div>
                <label htmlFor="apply-location" className="block text-sm font-medium text-foreground mb-1.5">Where you are based</label>
                <input id="apply-location" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="City, State" className={cls('location')} autoComplete="address-level2" />
                <Err k="location" />
              </div>
            </div>

            <div>
              <label htmlFor="apply-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input id="apply-email" type="email" inputMode="email" autoCapitalize="none" value={form.email} onChange={(e) => update('email', e.target.value)} className={cls('email')} autoComplete="email" />
              <p className="text-xs text-text-secondary mt-1.5">Inquiries from owners land here. Members see it on your profile; nobody else does.</p>
              <Err k="email" />
            </div>

            <div>
              <label htmlFor="apply-description" className="block text-sm font-medium text-foreground mb-1.5">What you do</label>
              <textarea
                id="apply-description"
                rows={3}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                placeholder="The work, the marques you know best, how long you have been at it."
                className={cls('description')}
                maxLength={4000}
              />
              <Err k="description" />
            </div>

            <div id="apply-avatarUrl" tabIndex={-1} className="outline-none">
              <p className="text-sm font-medium text-foreground mb-1.5">One photo</p>
              <p className="text-xs text-text-secondary mb-3">Your work or your space in decent light. A real garage reads as a business; a flyer reads as an ad.</p>
              <ProviderImagesFields
                value={{ avatarUrl: form.avatarUrl, bannerFocus: form.bannerFocus, logoUrl: form.logoUrl, logoKind: form.logoKind }}
                onChange={(patch) => {
                  setForm((f) => ({ ...f, ...patch }));
                  if (patch.avatarUrl) setErrors((e) => { const n = { ...e }; delete n.avatarUrl; return n; });
                }}
                name={form.businessName}
                category={form.category}
                bannerInvalid={!!errors.avatarUrl}
              />
              <Err k="avatarUrl" />
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-xl p-4 text-sm" style={{ background: '#FFF4EC', border: '1px solid #F2B27A' }} role="alert">
              <p className="text-foreground">{error}</p>
              {duplicate && !linkSent && (
                <button type="button" onClick={requestLink} disabled={submitting} className="mt-2 font-semibold underline underline-offset-4" style={{ color: INK }}>
                  Send that address a login link
                </button>
              )}
              {linkSent && <p className="mt-2 text-text-secondary">{linkSent}</p>}
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white disabled:opacity-60"
              style={{ background: TEAL }}
            >
              {submitting ? 'Sending' : 'Add my shop'} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-text-secondary">A person reads it before it goes live. Usually a few days.</p>
          </div>
        </form>

        <p className="text-sm text-text-secondary">
          How the directory works for shops, in five minutes:{' '}
          <Link href="/services/guide" className="font-semibold underline underline-offset-4" style={{ color: INK }}>the provider playbook</Link>.
          Something else? Email {HELP_EMAIL} and a person will answer.
        </p>
      </div>
    </div>
  );
}
