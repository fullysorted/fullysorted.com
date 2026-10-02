'use client';

import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import {
  Send, Loader2, CheckCircle, Shield, Star, Sparkles, ArrowLeft, ArrowRight, Check, HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { CATEGORY_OPTIONS } from '@/lib/service-categories';
import ExtraCategoriesFields from '@/components/provider/ExtraCategoriesFields';
import { FOUNDING_PROVIDER_THRESHOLD } from '@/lib/listing-tiers';
import { WORK_SETTINGS, TEAM_SIZES, type WorkSettingKey } from '@/lib/work-settings';
import ProviderImagesFields from '@/components/media/ProviderImagesFields';
import type { LogoKind } from '@/lib/provider-images';
import { trackGaEvent } from '@/components/analytics/GoogleAnalytics';

const CATEGORIES = CATEGORY_OPTIONS;

const INPUT =
  'w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent';
const INPUT_BAD = ' border-red-400 ring-1 ring-red-300';

const DRAFT_KEY = 'fs_apply_draft';
const HELP_EMAIL = 'chris@fullysorted.com';

/**
 * THE application. There is only one.
 *
 * This page used to be a fork: "I'm a business or shop" vs "I'm an independent
 * / freelancer", each leading to its own form. It was the wrong question. Every
 * provider who signs up is a business. What differs is where the car has to be
 * for them to work on it, and that is asked as a fact in step 2.
 *
 * 2026-10-02: the single long form became a four-step wizard. Same fields, same
 * POST body, same validation rules, same duplicate/takeover path. What it adds:
 *   - one short step at a time, with a progress bar and a way back
 *   - a draft kept on the device, so a shop owner who gets called onto the
 *     floor halfway through does not lose it
 *   - a closed-by-default "questions people ask here" panel per step. Help is
 *     there if you open it and invisible if you don't. No popups, no timers,
 *     no chat bubble.
 *   - a review screen before submit, with an edit link per section
 *   - a GA event per step reached, so drop-off can be seen by step
 * Every answer in HELP below is checked against how the site actually works
 * (contact gate, approval email, dashboard, founding threshold). Keep it that way.
 */

type StepKey = 'basics' | 'work' | 'contact' | 'about';

const STEPS: { key: StepKey; title: string; blurb: string }[] = [
  { key: 'basics', title: 'The basics', blurb: 'Who you are and what you do.' },
  { key: 'work', title: 'How you work', blurb: 'Where the car needs to be for you to work on it.' },
  { key: 'contact', title: 'Contact and photos', blurb: 'How owners reach you, and the first thing they see.' },
  { key: 'about', title: 'In your words', blurb: 'A few lines about the work, then one last look.' },
];

type Help = { q: string; a: React.ReactNode };

const HELP: Record<StepKey, Help[]> = {
  basics: [
    {
      q: 'What does it cost?',
      a: `The first ${FOUNDING_PROVIDER_THRESHOLD} providers are founding members. The listing is free now and stays free for life.`,
    },
    {
      q: 'I do more than one kind of work.',
      a: 'Pick the one you are best known for as your main category. Once you do, you can tick the others, and owners searching those trades find you too.',
    },
    {
      q: 'I trade under my own name.',
      a: 'Plenty do. Put whatever a customer would type into a search box.',
    },
  ],
  work: [
    {
      q: "I don't have a shop.",
      a: 'Some of the best people in the trade work out of a van or a home office. Pick "I travel to the car" or the off-site option, whichever fits. It is a filter for owners, not a grade.',
    },
    {
      q: 'Will a travel radius hide me from people further away?',
      a: 'No. It shows on your profile as guidance and is never used to filter you out.',
    },
    {
      q: 'Why ask how many of you there are?',
      a: 'Collectors like knowing whose hands are on the car. It is optional, and "just me" tends to read as a plus.',
    },
  ],
  contact: [
    {
      q: 'Who sees my phone number and website?',
      a: 'Signed-in members. Everyone else reaches you through the inquiry form on your profile, which lands in your email inbox.',
    },
    {
      q: 'Do you take a cut of the job?',
      a: 'No. Owners contact you directly and you bill them the way you already do. We are not in the middle of the payment.',
    },
    {
      q: 'What makes a good main photo?',
      a: 'Your work or your space, in decent light: a finished car, the shop floor, you mid-job. Stock photos and flyers read as an ad. A real garage reads as a business.',
    },
    {
      q: 'I think I am already listed.',
      a: (
        <>
          If we have a listing on your email, you will be offered a link to take it over instead of starting a
          second one. You can also{' '}
          <Link href="/services/claim" className="text-accent underline underline-offset-2">
            claim an existing listing
          </Link>{' '}
          directly.
        </>
      ),
    },
  ],
  about: [
    {
      q: 'What happens after I send it?',
      a: 'A person reads it. It is lightly curated, not an exam. You will hear back within 3 to 5 business days, and the approval email has your profile link.',
    },
    {
      q: 'Can I change things later?',
      a: 'Yes. Once you are live you manage details, photos and review replies from your provider dashboard. No account yet is fine; the approval email sets up your login.',
    },
    {
      q: 'Is there a guide to doing well here?',
      a: (
        <>
          The{' '}
          <Link href="/services/guide" className="text-accent underline underline-offset-2">
            Provider Playbook
          </Link>{' '}
          covers building a profile owners trust, pricing, and turning first jobs into regulars.
        </>
      ),
    },
  ],
};

const DESCRIPTION_PROMPTS = [
  'What cars do you see most, and which do you know best?',
  'What is the job you are proudest of?',
  'What do you not do? Owners appreciate knowing.',
  'How far out are you booking right now?',
];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function ApplyForm({ presetCategory = '' }: { presetCategory?: string }) {
  const { userId } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    businessName: '', ownerName: '', category: presetCategory, location: '', yearsInBusiness: '',
    email: '', phone: '', website: '', instagram: '', description: '',
    idealClient: '', whyList: '', referredBy: '', priceRange: '$$',
    avatarUrl: '', teamSize: '', serviceRadiusMiles: '',
    bannerFocus: '50% 50%', logoUrl: '', logoKind: 'logo' as LogoKind,
  });
  const [workSettings, setWorkSettings] = useState<WorkSettingKey[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [duplicate, setDuplicate] = useState(false);
  const [linkSent, setLinkSent] = useState('');

  // Wizard state
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [draftRestored, setDraftRestored] = useState(false);
  const [draftReady, setDraftReady] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // ── Draft: restore once, then save quietly on every change ────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as {
          form?: Partial<typeof form>; workSettings?: WorkSettingKey[]; serviceTypes?: string[]; step?: number;
        };
        const hasContent = saved.form && Object.entries(saved.form).some(
          ([k, v]) => typeof v === 'string' && v.trim() && !['priceRange', 'bannerFocus', 'logoKind'].includes(k),
        );
        if (hasContent) {
          setForm((prev) => ({
            ...prev,
            ...saved.form,
            // A category deep link (/services/apply?category=detailing) is the
            // newer intent and wins over whatever the draft had.
            category: presetCategory || saved.form!.category || prev.category,
          }));
          if (Array.isArray(saved.workSettings)) setWorkSettings(saved.workSettings);
          if (Array.isArray(saved.serviceTypes)) setServiceTypes(saved.serviceTypes);
          const s = Math.min(Math.max(Number(saved.step) || 0, 0), STEPS.length - 1);
          setStep(s);
          setMaxStep(s);
          setDraftRestored(true);
        }
      }
    } catch {
      // Private browsing, storage disabled, or an older draft shape. Losing a
      // draft must never break the form.
    }
    setDraftReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!draftReady || submitted) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ form, workSettings, serviceTypes, step }));
    } catch {}
  }, [form, workSettings, serviceTypes, step, draftReady, submitted]);

  const startOver = () => {
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
    setForm({
      businessName: '', ownerName: '', category: presetCategory, location: '', yearsInBusiness: '',
      email: '', phone: '', website: '', instagram: '', description: '',
      idealClient: '', whyList: '', referredBy: '', priceRange: '$$',
      avatarUrl: '', teamSize: '', serviceRadiusMiles: '',
      bannerFocus: '50% 50%', logoUrl: '', logoKind: 'logo',
    });
    setWorkSettings([]);
    setServiceTypes([]);
    setStep(0);
    setMaxStep(0);
    setFieldErrors({});
    setError('');
    setDuplicate(false);
    setDraftRestored(false);
  };

  // Bring the step into view and move focus to its heading, so keyboard and
  // screen-reader users land at the top of the new step rather than on a
  // button that no longer exists.
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const normalizeWebsite = (v: string) => {
    const t = v.trim();
    if (!t) return '';
    return /^https?:\/\//i.test(t) ? t : `https://${t}`;
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const toggleWork = (key: WorkSettingKey) => {
    setFieldErrors((e) => { const n = { ...e }; delete n.workSettings; return n; });
    setWorkSettings((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  // ── Per-step checks. Same required set as the old single form. ────────────
  const validate = (s: number): Record<string, string> => {
    const e: Record<string, string> = {};
    const key = STEPS[s].key;
    if (key === 'basics') {
      if (!form.businessName.trim()) e.businessName = 'Add the name owners would search for.';
      if (!form.ownerName.trim()) e.ownerName = 'Add your name.';
      if (!form.category) e.category = 'Pick the trade you are best known for.';
      if (!form.location.trim()) e.location = 'City and state is enough.';
    }
    if (key === 'work') {
      if (workSettings.length === 0) e.workSettings = 'Pick at least one. Owners filter the directory by this.';
    }
    if (key === 'contact') {
      if (!isEmail(form.email)) e.email = 'Add an email address. Inquiries are sent here.';
      if (!form.avatarUrl) e.avatarUrl = 'Add a main photo. It is the first thing an owner sees.';
    }
    if (key === 'about') {
      if (!form.description.trim()) e.description = 'A few lines about what you do is all it takes.';
    }
    return e;
  };

  const focusFirst = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    const el = document.getElementById(`apply-${first}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if ('focus' in el) (el as HTMLElement).focus({ preventScroll: true });
    }
  };

  const goTo = (s: number) => {
    setError('');
    setStep(s);
  };

  const next = () => {
    const errs = validate(step);
    setFieldErrors(errs);
    if (Object.keys(errs).length) { focusFirst(errs); return; }
    const n = step + 1;
    setStep(n);
    setMaxStep((m) => Math.max(m, n));
    // GA4: which step people reach, so drop-off is visible per step.
    trackGaEvent('provider_apply_step', { step: n + 1, step_name: STEPS[n].key });
  };

  const back = () => goTo(Math.max(0, step - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Enter in a text field on an early step means "next", not "send".
    if (step < STEPS.length - 1) { next(); return; }

    // Re-check every step: a restored draft or a jump back can leave an
    // earlier step incomplete.
    for (let s = 0; s < STEPS.length; s++) {
      const errs = validate(s);
      if (Object.keys(errs).length) {
        setFieldErrors(errs);
        setStep(s);
        setTimeout(() => focusFirst(errs), 350);
        return;
      }
    }

    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          // Typed as plain text so "yourshop.com" is accepted. A type="url"
          // field silently blocked submit on phones when the scheme was missing.
          website: normalizeWebsite(form.website),
          workSettings,
          serviceTypes: serviceTypes.filter((k) => k !== form.category),
          teamSize: form.teamSize || null,
          serviceRadiusMiles: workSettings.includes('mobile') ? form.serviceRadiusMiles : null,
          clerkUserId: userId || null,
          specialties: [],
        }),
      });
      const data = await res.json();
      if (res.ok) {
        try { localStorage.removeItem(DRAFT_KEY); } catch {}
        setSubmitted(true);
        // GA4 key event: a shop applied to list.
        trackGaEvent('provider_apply', { work_settings: workSettings.join('|') });
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

  // "That's already us": mail the address on the existing listing a link to
  // take it over, rather than creating a duplicate.
  const requestLink = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/providers/link/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      // The request route returns 502 when the mail provider refused the send.
      // Reading the body regardless would render "we've sent it a link" after a
      // failed send, the same false success this route was fixed to stop.
      if (!res.ok) {
        setLinkSent(
          data.error ||
            `We couldn't send that email just now. Email ${HELP_EMAIL} and we'll set your login up by hand.`,
        );
        return;
      }
      setLinkSent(data.message || "If that address is on a listing, we've sent it a link.");
    } catch {
      setLinkSent(`Try again in a moment, or email ${HELP_EMAIL}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl border border-border p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green mx-auto mb-6" />
          <h1 className="font-display font-semibold tracking-tight text-3xl text-foreground mb-4">
            Application submitted
          </h1>
          <p className="text-text-secondary mb-3">
            Lightly curated. You&apos;ll hear from us within 3 to 5 business days.
          </p>
          <p className="text-sm text-text-secondary mb-8">
            While you wait, the{' '}
            <Link href="/services/guide" className="text-accent underline underline-offset-2">Provider Playbook</Link>{' '}
            is worth ten minutes.
          </p>
          <Link
            href="/services"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
          >
            View directory
          </Link>
        </div>
      </div>
    );
  }

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const err = (k: string) => fieldErrors[k];
  const FieldError = ({ k }: { k: string }) =>
    err(k) ? <p className="text-xs text-red-600 mt-1.5" role="alert">{err(k)}</p> : null;

  const categoryLabel = CATEGORIES.find((c) => c.value === form.category)?.label || '';
  const workLabels = WORK_SETTINGS.filter((w) => workSettings.includes(w.key)).map((w) => w.providerLabel);
  const teamLabel = TEAM_SIZES.find((t) => t.key === form.teamSize)?.providerLabel || '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p
          className="text-[11px] uppercase mb-5"
          style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: '#1C8C87' }}
        >
          Services directory
        </p>
        <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl text-foreground mb-4 leading-[1.08]">
          Get found by <span className="text-accent">collectors.</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          One form, whatever the size of your operation: a shop with six lifts, a two-person restoration house,
          or you and a van. Detailing, mechanical, inspection, transport, storage, photography, restoration,
          body &amp; paint, upholstery and title work.
        </p>
      </motion.div>

      {step === 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { Icon: Shield, color: 'text-accent', title: 'Free for life for founding providers', body: `The first ${FOUNDING_PROVIDER_THRESHOLD} specialists to join are founding members. Your directory listing is free now and stays free for life, whatever we add later.` },
            { Icon: Star, color: 'text-blue', title: 'In front of serious collectors', body: 'The people searching this directory are actively buying and maintaining collector cars.' },
            { Icon: Sparkles, color: 'text-gold', title: 'Inquiries come straight to you', body: 'An owner who picks you emails you, and the conversation stays between the two of you.' },
          ].map(({ Icon, color, title, body }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-xl border border-border p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 + i * 0.1 }}
            >
              <Icon className={`w-8 h-8 ${color} mb-3`} />
              <h3 className="text-foreground font-bold mb-2">{title}</h3>
              <p className="text-text-secondary text-sm">{body}</p>
            </motion.div>
          ))}
        </div>
      )}

      <div ref={topRef} className="scroll-mt-24 bg-white rounded-2xl border border-border p-6 sm:p-8">
        {/* ── Progress ─────────────────────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
            <span>Step {step + 1} of {STEPS.length}</span>
            <span>About five minutes in all</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          <ol className="hidden sm:grid grid-cols-4 gap-2 mt-3">
            {STEPS.map((s, i) => {
              const reachable = i <= maxStep;
              const done = i < step || (i <= maxStep && i !== step && Object.keys(validate(i)).length === 0);
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    disabled={!reachable}
                    onClick={() => reachable && goTo(i)}
                    aria-current={i === step ? 'step' : undefined}
                    className={`w-full text-left text-xs flex items-center gap-1.5 ${
                      i === step ? 'text-foreground font-semibold' : reachable ? 'text-text-secondary hover:text-foreground' : 'text-text-tertiary cursor-default'
                    }`}
                  >
                    {done ? <Check className="w-3.5 h-3.5 text-accent shrink-0" /> : <span className="w-3.5 text-center shrink-0">{i + 1}</span>}
                    {s.title}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {draftRestored && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface px-4 py-3 text-sm">
            <span className="text-text-secondary">We kept your answers from last time.</span>
            <button type="button" onClick={startOver} className="text-accent underline underline-offset-2">
              Start over
            </button>
          </div>
        )}

        <div className="mb-6">
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="font-display font-semibold tracking-tight text-2xl text-foreground mb-1 outline-none"
          >
            {current.title}
          </h2>
          <p className="text-text-secondary">{current.blurb}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* ── Step 1: basics ─────────────────────────────────────────── */}
          {current.key === 'basics' && (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="apply-businessName" className="block text-sm font-medium text-foreground mb-1.5">Business or trading name *</label>
                  <input id="apply-businessName" type="text" autoComplete="organization" value={form.businessName} onChange={e => update('businessName', e.target.value)} className={INPUT + (err('businessName') ? INPUT_BAD : '')} />
                  <FieldError k="businessName" />
                  {!err('businessName') && (
                    <p className="text-xs text-text-secondary mt-1.5">
                      Whatever owners would search for. If you trade under your own name, put that.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="apply-ownerName" className="block text-sm font-medium text-foreground mb-1.5">Your name *</label>
                  <input id="apply-ownerName" type="text" autoComplete="name" value={form.ownerName} onChange={e => update('ownerName', e.target.value)} className={INPUT + (err('ownerName') ? INPUT_BAD : '')} />
                  <FieldError k="ownerName" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="apply-category" className="block text-sm font-medium text-foreground mb-1.5">Main category *</label>
                  <select id="apply-category" value={form.category} onChange={e => update('category', e.target.value)} className={INPUT + (err('category') ? INPUT_BAD : '')}>
                    <option value="">Choose one…</option>
                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                  <FieldError k="category" />
                </div>
                <div>
                  <label htmlFor="apply-location" className="block text-sm font-medium text-foreground mb-1.5">Where you are based *</label>
                  <input id="apply-location" type="text" placeholder="City, State" autoComplete="address-level2" value={form.location} onChange={e => update('location', e.target.value)} className={INPUT + (err('location') ? INPUT_BAD : '')} />
                  <FieldError k="location" />
                </div>
              </div>

              {form.category && (
                <ExtraCategoriesFields headline={form.category} value={serviceTypes} onChange={setServiceTypes} />
              )}
            </>
          )}

          {/* ── Step 2: where the work happens ────────────────────────────
              The question that used to be "are you a business or a
              freelancer?", asked as a fact about the job rather than an
              identity. It can be more than one answer. */}
          {current.key === 'work' && (
            <>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Where the work happens *</p>
                <p className="text-sm text-text-secondary mb-4">
                  Pick everything that applies. This is what owners filter the directory by.
                </p>
                <div
                  id="apply-workSettings"
                  tabIndex={-1}
                  className={`grid gap-3 sm:grid-cols-3 outline-none ${err('workSettings') ? 'ring-2 ring-red-400 rounded-xl p-1' : ''}`}
                >
                  {WORK_SETTINGS.map((w) => {
                    const on = workSettings.includes(w.key);
                    return (
                      <button
                        type="button"
                        key={w.key}
                        onClick={() => toggleWork(w.key)}
                        aria-pressed={on}
                        className={`text-left rounded-xl border-2 p-4 transition-all ${
                          on ? 'border-accent bg-accent-light' : 'border-border bg-white hover:border-accent/50'
                        }`}
                      >
                        <span className="block text-sm font-semibold text-foreground mb-1">{w.providerLabel}</span>
                        <span className="block text-xs text-text-secondary">{w.providerHint}</span>
                      </button>
                    );
                  })}
                </div>
                <FieldError k="workSettings" />
              </div>

              {workSettings.includes('mobile') && (
                <div className="max-w-xs">
                  <label htmlFor="apply-serviceRadiusMiles" className="block text-sm font-medium text-foreground mb-1.5">
                    How far do you travel? (miles)
                  </label>
                  <input
                    id="apply-serviceRadiusMiles"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    placeholder="75"
                    value={form.serviceRadiusMiles}
                    onChange={e => update('serviceRadiusMiles', e.target.value)}
                    className={INPUT}
                  />
                  <p className="text-xs text-text-secondary mt-1.5">
                    Optional. Shown as guidance on your profile, never used to hide you from anyone.
                  </p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="apply-teamSize" className="block text-sm font-medium text-foreground mb-1.5">How many of you are there?</label>
                  <select id="apply-teamSize" value={form.teamSize} onChange={e => update('teamSize', e.target.value)} className={INPUT}>
                    <option value="">Rather not say</option>
                    {TEAM_SIZES.map(t => <option key={t.key} value={t.key}>{t.providerLabel}</option>)}
                  </select>
                  <p className="text-xs text-text-secondary mt-1.5">Optional.</p>
                </div>
                <div>
                  <label htmlFor="apply-yearsInBusiness" className="block text-sm font-medium text-foreground mb-1.5">Years doing this</label>
                  <input id="apply-yearsInBusiness" type="text" inputMode="numeric" placeholder="18" value={form.yearsInBusiness} onChange={e => update('yearsInBusiness', e.target.value)} className={INPUT} />
                  <p className="text-xs text-text-secondary mt-1.5">Optional.</p>
                </div>
              </div>
            </>
          )}

          {/* ── Step 3: contact and photos ─────────────────────────────── */}
          {current.key === 'contact' && (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="apply-email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input id="apply-email" type="email" autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} className={INPUT + (err('email') ? INPUT_BAD : '')} />
                  <FieldError k="email" />
                  {!err('email') && <p className="text-xs text-text-secondary mt-1.5">Inquiries from owners are sent here.</p>}
                </div>
                <div>
                  <label htmlFor="apply-phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input id="apply-phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className={INPUT} />
                </div>
                <div>
                  <label htmlFor="apply-website" className="block text-sm font-medium text-foreground mb-1.5">Website</label>
                  <input id="apply-website" type="text" inputMode="url" autoCapitalize="none" autoCorrect="off" placeholder="yourshop.com" value={form.website} onChange={e => update('website', e.target.value)} className={INPUT} />
                </div>
                <div>
                  <label htmlFor="apply-instagram" className="block text-sm font-medium text-foreground mb-1.5">Instagram</label>
                  <input id="apply-instagram" type="text" autoCapitalize="none" placeholder="@handle" value={form.instagram} onChange={e => update('instagram', e.target.value)} className={INPUT} />
                </div>
              </div>

              <div id="apply-avatarUrl" tabIndex={-1} className="border-t border-border pt-6 outline-none">
                <p className="text-sm font-medium text-foreground mb-4">Photos *</p>
                <ProviderImagesFields
                  value={{ avatarUrl: form.avatarUrl, bannerFocus: form.bannerFocus, logoUrl: form.logoUrl, logoKind: form.logoKind }}
                  onChange={(patch) => {
                    setForm((f) => ({ ...f, ...patch }));
                    if (patch.avatarUrl) setFieldErrors((e) => { const n = { ...e }; delete n.avatarUrl; return n; });
                  }}
                  name={form.businessName}
                  category={form.category}
                  bannerInvalid={!!err('avatarUrl')}
                />
                <FieldError k="avatarUrl" />
              </div>
            </>
          )}

          {/* ── Step 4: in your words, then review ─────────────────────── */}
          {current.key === 'about' && (
            <>
              <div>
                <label htmlFor="apply-description" className="block text-sm font-medium text-foreground mb-1.5">
                  What you do and what you specialize in *
                </label>
                <textarea
                  id="apply-description"
                  rows={5}
                  value={form.description}
                  onChange={e => update('description', e.target.value)}
                  placeholder="Full paint correction, ceramic coating, and concours-level prep..."
                  className={`${INPUT} resize-none` + (err('description') ? INPUT_BAD : '')}
                />
                <FieldError k="description" />
                <div className="flex flex-wrap items-center justify-between gap-2 mt-1.5 text-xs text-text-secondary">
                  <span>
                    {form.description.trim().length < 120
                      ? 'Owners read two or three sentences before deciding.'
                      : 'Good. That reads like a real shop.'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPrompts((v) => !v)}
                    aria-expanded={showPrompts}
                    className="text-accent underline underline-offset-2"
                  >
                    {showPrompts ? 'Hide ideas' : 'Not sure what to say?'}
                  </button>
                </div>
                {showPrompts && (
                  <ul className="mt-3 rounded-lg bg-surface p-4 text-sm text-text-secondary space-y-1.5 list-disc pl-8">
                    {DESCRIPTION_PROMPTS.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
              </div>

              <div>
                <label htmlFor="apply-whyList" className="block text-sm font-medium text-foreground mb-1.5">
                  Why do you want to be listed on Fully Sorted?
                </label>
                <textarea id="apply-whyList" rows={2} value={form.whyList} onChange={e => update('whyList', e.target.value)} className={`${INPUT} resize-none`} />
                <p className="text-xs text-text-secondary mt-1.5">Optional.</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground mb-3">One last look</p>
                <dl className="divide-y divide-border rounded-xl border border-border text-sm">
                  {[
                    { s: 0, label: 'The basics', value: [form.businessName, form.ownerName, categoryLabel, form.location].filter(Boolean).join(' · ') },
                    { s: 1, label: 'How you work', value: [workLabels.join(', '), teamLabel, form.yearsInBusiness && `${form.yearsInBusiness} years`].filter(Boolean).join(' · ') },
                    { s: 2, label: 'Contact', value: [form.email, form.phone, form.website, form.instagram].filter(Boolean).join(' · ') + (form.avatarUrl ? ' · photo added' : ' · no photo yet') },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-4 px-4 py-3">
                      <dt className="w-28 shrink-0 text-text-secondary">{row.label}</dt>
                      <dd className="flex-1 text-foreground break-words">{row.value || <span className="text-text-tertiary">Not filled in</span>}</dd>
                      <button type="button" onClick={() => goTo(row.s)} className="shrink-0 text-accent underline underline-offset-2">
                        Edit
                      </button>
                    </div>
                  ))}
                </dl>
              </div>
            </>
          )}

          {error && !duplicate && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">{error}</div>
          )}
          {duplicate && (
            <div className="bg-surface border border-border rounded-lg p-4 text-sm">
              <p className="font-semibold text-foreground mb-1">You&apos;re already listed with us.</p>
              <p className="text-text-secondary mb-3">
                There&apos;s a listing on <strong>{form.email}</strong> already. A second one would split your reviews
                and confuse owners searching for you. Better to take over the one that exists.
              </p>
              {linkSent ? (
                <p className="text-text-secondary">{linkSent}</p>
              ) : (
                <button
                  type="button"
                  onClick={requestLink}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60"
                >
                  Email me a link to manage it
                </button>
              )}
            </div>
          )}

          {/* ── Navigation ─────────────────────────────────────────────── */}
          <div className="flex items-center justify-between gap-3 pt-4">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-text-secondary hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <span />}
            {isLast ? (
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50"
              >
                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {submitting ? 'Submitting…' : 'Submit application'}
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Next: {STEPS[step + 1].title} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
          {draftReady && !isLast && (
            <p className="text-right text-[11px] text-text-tertiary -mt-3">Your answers are saved on this device as you go.</p>
          )}
        </form>

        {/* ── Questions people ask at this step. Closed until opened. ──── */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Questions people ask here
          </p>
          <div className="divide-y divide-border">
            {HELP[current.key].map((h) => (
              <details key={h.q} className="group py-2.5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm text-foreground">
                  {h.q}
                  <span className="text-text-tertiary transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <div className="pt-2 text-sm text-text-secondary">{h.a}</div>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary">
            Something else? Email{' '}
            <a href={`mailto:${HELP_EMAIL}?subject=Question%20about%20listing`} className="text-accent underline underline-offset-2">
              {HELP_EMAIL}
            </a>{' '}
            and a person will answer.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1E6091' }}>
            New here?
          </p>
          <h2 className="font-display font-semibold tracking-tight text-xl text-foreground mb-1">
            Read the Provider Playbook first
          </h2>
          <p className="text-sm text-text-secondary">
            A step-by-step guide to building a profile owners trust, pricing your work, and turning first jobs
            into steady bookings.
          </p>
        </div>
        <Link
          href="/services/guide"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
        >
          Open the playbook
        </Link>
      </div>
    </div>
  );
}
