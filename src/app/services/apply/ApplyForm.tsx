'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, Shield, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CATEGORY_OPTIONS } from '@/lib/service-categories';
import { WORK_SETTINGS, TEAM_SIZES, type WorkSettingKey } from '@/lib/work-settings';
import PhotoUpload from '@/components/media/PhotoUpload';

const CATEGORIES = CATEGORY_OPTIONS;

const INPUT =
  'w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent';

/**
 * THE application. There is only one.
 *
 * This page used to be a fork: "I'm a business or shop" vs "I'm an independent
 * / freelancer", each leading to its own form. It was the wrong question. Every
 * provider who signs up is a business — an LLC, a sole proprietorship, a shop
 * with a lift. What differs is where the car has to be for them to work on it,
 * and that is now asked as a fact further down this form rather than as an
 * identity at the door.
 */
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
  });
  const [workSettings, setWorkSettings] = useState<WorkSettingKey[]>([]);
  const [photoInvalid, setPhotoInvalid] = useState(false);
  const [workInvalid, setWorkInvalid] = useState(false);
  // Set when the server says this email already has a listing. The right answer
  // then is a link to manage the existing one, not a second application.
  const [duplicate, setDuplicate] = useState(false);
  const [linkSent, setLinkSent] = useState('');

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const toggleWork = (key: WorkSettingKey) => {
    setWorkInvalid(false);
    setWorkSettings((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Caught here as well as server-side so the applicant is told before the
    // round trip, and the field is highlighted rather than just a banner.
    if (!form.avatarUrl) {
      setPhotoInvalid(true);
      setError('Please add a photo. It is the first thing an owner sees.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPhotoInvalid(false);
    // Required because it is the one thing this form exists to establish, and
    // the directory filters on it. Everything else about "what kind of outfit
    // are you" stays optional.
    if (workSettings.length === 0) {
      setWorkInvalid(true);
      setError('Tell us where the work happens. Pick at least one.');
      return;
    }
    setWorkInvalid(false);
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          workSettings,
          teamSize: form.teamSize || null,
          serviceRadiusMiles: workSettings.includes('mobile') ? form.serviceRadiusMiles : null,
          clerkUserId: userId || null,
          specialties: [],
        }),
      });
      const data = await res.json();
      if (res.ok) setSubmitted(true);
      else {
        setDuplicate(!!data.duplicate);
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // "That's already us" — mail the address on the existing listing a link to
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
      // failed send — the same false success this route was fixed to stop.
      if (!res.ok) {
        setLinkSent(
          data.error ||
            "We couldn't send that email just now. Email chris@fullysorted.com and we'll set your login up by hand.",
        );
        return;
      }
      setLinkSent(data.message || "If that address is on a listing, we've sent it a link.");
    } catch {
      setLinkSent('Try again in a moment, or email chris@fullysorted.com.');
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
          <p className="text-text-secondary mb-8">
            Lightly curated. You&apos;ll hear from us within 3–5 business days.
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2.5 bg-accent-light border border-accent rounded-full px-4 py-1.5 mb-5">
          <span className="flex gap-1" aria-hidden="true">
            <span className="w-1.5 h-1.5" style={{ background: '#1E6091' }} />
            <span className="w-1.5 h-1.5" style={{ background: '#1E6091' }} />
            <span className="w-1.5 h-1.5" style={{ background: '#B08D3F' }} />
          </span>
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Services Directory</span>
        </div>
        <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl text-foreground mb-4 leading-[1.08]">
          Get found by the collectors <span className="text-accent">who actually pay.</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          One form, whatever the size of your operation: a shop with six lifts, a two-person restoration house,
          or you and a van. Detailing, mechanical, inspection, transport, storage, photography, restoration and
          body &amp; paint.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { Icon: Shield, color: 'text-accent', title: 'Free for founding providers', body: 'Founding specialists are listed free while we build out the directory, with founding-provider placement.' },
          { Icon: Star, color: 'text-blue', title: 'In front of serious collectors', body: 'The people searching this directory are actively buying and maintaining collector cars.' },
          { Icon: Sparkles, color: 'text-gold', title: 'Inquiries come straight to you', body: 'An owner who picks you emails you. We do not fan your inquiry out to four competitors.' },
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

      <div className="bg-white rounded-2xl border border-border p-8">
        <div className="mb-8">
          <h2 className="font-display font-semibold tracking-tight text-2xl text-foreground mb-2">
            Tell us about your work
          </h2>
          <p className="text-text-secondary">
            Takes about five minutes, and it is lightly curated before it goes live. Listing is free while we
            build out the directory.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Business or trading name *</label>
              <input type="text" required value={form.businessName} onChange={e => update('businessName', e.target.value)} className={INPUT} />
              <p className="text-xs text-text-secondary mt-1.5">
                Whatever owners would search for. If you trade under your own name, put that.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Your name *</label>
              <input type="text" required value={form.ownerName} onChange={e => update('ownerName', e.target.value)} className={INPUT} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Category *</label>
              <select required value={form.category} onChange={e => update('category', e.target.value)} className={INPUT}>
                <option value="">Choose one…</option>
                {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Where you are based *</label>
              <input type="text" required placeholder="City, State" value={form.location} onChange={e => update('location', e.target.value)} className={INPUT} />
            </div>
          </div>

          {/* ── Where the work happens ────────────────────────────────────
              The question that used to be "are you a business or a
              freelancer?". It is asked here as a fact about the job rather
              than an identity, and it can be more than one answer, because
              plenty of providers genuinely are. */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
              Where the work happens *
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Pick everything that applies. This is what owners filter the directory by, and it is the only
              thing they need to know before they get in touch.
            </p>
            <div
              className={`grid gap-3 sm:grid-cols-3 ${workInvalid ? 'ring-2 ring-red-400 rounded-xl p-1' : ''}`}
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
                      on
                        ? 'border-accent bg-accent-light'
                        : 'border-border bg-white hover:border-accent/50'
                    }`}
                  >
                    <span className="block text-sm font-semibold text-foreground mb-1">{w.providerLabel}</span>
                    <span className="block text-xs text-text-secondary">{w.providerHint}</span>
                  </button>
                );
              })}
            </div>

            {workSettings.includes('mobile') && (
              <div className="mt-5 max-w-xs">
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  How far do you travel? (miles)
                </label>
                <input
                  type="number"
                  min={1}
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

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">How many of you are there?</label>
                <select value={form.teamSize} onChange={e => update('teamSize', e.target.value)} className={INPUT}>
                  <option value="">Rather not say</option>
                  {TEAM_SIZES.map(t => <option key={t.key} value={t.key}>{t.providerLabel}</option>)}
                </select>
                <p className="text-xs text-text-secondary mt-1.5">
                  Optional. Collectors like knowing whose hands are on the car. One person is an advantage here,
                  not a disadvantage.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Years doing this</label>
                <input type="text" placeholder="18" value={form.yearsInBusiness} onChange={e => update('yearsInBusiness', e.target.value)} className={INPUT} />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact &amp; links</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} className={INPUT} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className={INPUT} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Website</label>
                <input type="url" placeholder="https://" value={form.website} onChange={e => update('website', e.target.value)} className={INPUT} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Instagram</label>
                <input type="text" placeholder="@handle" value={form.instagram} onChange={e => update('instagram', e.target.value)} className={INPUT} />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Your photo *</h3>
            <p className="text-sm text-text-secondary mb-4">
              One good picture: the workshop, the van, a car you finished, or your logo. It is the first thing an
              owner sees on your card in the directory, and cards without one get skipped.
            </p>
            <PhotoUpload
              value={form.avatarUrl}
              onChange={(url) => { update('avatarUrl', url); setPhotoInvalid(false); }}
              invalid={photoInvalid}
              hint={
                <>
                  JPEG/PNG/WebP, max 10MB. If the picture is already on your website or Instagram, right-click it,
                  choose &ldquo;Copy image address&rdquo;, and paste it above. We will fetch it for you.
                </>
              }
            />
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">About your work</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  What you do and what you specialize in *
                </label>
                <textarea required rows={4} value={form.description} onChange={e => update('description', e.target.value)}
                  placeholder="Full paint correction, ceramic coating, and concours-level prep..."
                  className={`${INPUT} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Why do you want to be listed on Fully Sorted?
                </label>
                <textarea rows={2} value={form.whyList} onChange={e => update('whyList', e.target.value)}
                  className={`${INPUT} resize-none`} />
              </div>
            </div>
          </div>

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

          <div className="pt-4">
            <button type="submit" disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50">
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {submitting ? 'Submitting…' : 'Submit application'}
            </button>
          </div>
        </form>
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
