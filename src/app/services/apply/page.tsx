'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Building2, Send, Loader2, CheckCircle, Shield, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { value: '', label: 'Select your primary service category' },
  { value: 'detailing', label: 'Detailing & Paint Correction' },
  { value: 'mechanical', label: 'Mechanical & Repair' },
  { value: 'restoration', label: 'Restoration' },
  { value: 'transport', label: 'Transport & Shipping' },
  { value: 'inspection', label: 'Pre-Purchase Inspection' },
  { value: 'bodywork', label: 'Body Work & Paint' },
  { value: 'storage', label: 'Storage' },
  { value: 'photography', label: 'Automotive Photography' },
  { value: 'finance', label: 'Financing & Insurance' },
  { value: 'other', label: 'Other' },
];

export default function ApplyPage() {
  const { userId } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    category: '',
    location: '',
    yearsInBusiness: '',
    email: '',
    phone: '',
    website: '',
    instagram: '',
    description: '',
    idealClient: '',
    whyList: '',
    referredBy: '',
    priceRange: '$$',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Build specialties from description keywords (provider can refine in dashboard later)
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          clerkUserId: userId || null,
          specialties: [],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Application Submitted!</h1>
          <p className="text-stone-600 mb-2">
            Thank you for applying to the Fully Sorted Services Directory.
          </p>
          <p className="text-stone-600 mb-8">
            We review every application personally. You&apos;ll hear from us within 3â5 business days.
          </p>
          {userId && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 text-left">
              <p className="text-amber-800 text-sm">
                <strong>Next step:</strong> Visit your{' '}
                <Link href="/dashboard/provider" className="text-amber-700 underline font-semibold">
                  Provider Dashboard
                </Link>{' '}
                to add specialties, set your price range, and fine-tune your profile while we review your application.
              </p>
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <Link
              href="/services"
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-xl transition-colors"
            >
              View Directory
            </Link>
            {userId && (
              <Link
                href="/dashboard/provider"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero — founding-50 angle */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-5">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">
            Founding 50 — SoCal Directory
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-stone-900 mb-4 leading-tight">
          Get found by the collectors<br />
          <span className="text-amber-600">who actually pay.</span>
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-4">
          Fully Sorted is hand-picking the first 50 specialists in Southern California — detailers, restorers, mechanics, transporters, inspectors — to anchor the directory collectors actually trust.
        </p>
        <p className="text-sm text-stone-500 max-w-xl mx-auto">
          Reviewed personally by Chris Peterson, founder of Fully Sorted and Vice Chairman of the La Jolla Concours d&apos;Elegance.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <Shield className="w-8 h-8 text-amber-600 mb-3" />
          <h3 className="text-stone-900 font-bold mb-2">Free for founding providers</h3>
          <p className="text-stone-500 text-sm">
            The first 50 specialists are listed free — no commission, no per-lead fee. Build your profile, control your story, keep every dollar.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <Star className="w-8 h-8 text-amber-600 mb-3" />
          <h3 className="text-stone-900 font-bold mb-2">In front of serious collectors</h3>
          <p className="text-stone-500 text-sm">
            The people searching this directory are actively buying, maintaining, and selling collector cars. No tire-kickers.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <Sparkles className="w-8 h-8 text-amber-600 mb-3" />
          <h3 className="text-stone-900 font-bold mb-2">Founding provider status</h3>
          <p className="text-stone-500 text-sm">
            Early listings get a Founding Provider badge and priority placement. First in, best positioned.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-2xl border border-stone-200 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Tell us about your business</h2>
          <p className="text-stone-500">Takes about 5 minutes. We read every application ourselves.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business info */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Business Name *</label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={e => update('businessName', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Your Name *</label>
              <input
                type="text"
                required
                value={form.ownerName}
                onChange={e => update('ownerName', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Category *</label>
              <select
                required
                value={form.category}
                onChange={e => update('category', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              >
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Location *</label>
              <input
                type="text"
                required
                placeholder="City, State"
                value={form.location}
                onChange={e => update('location', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">Years in Business</label>
            <input
              type="text"
              value={form.yearsInBusiness}
              onChange={e => update('yearsInBusiness', e.target.value)}
              className="w-full sm:w-1/2 px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
            />
          </div>

          {/* Contact */}
          <div className="border-t border-stone-100 pt-6">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">Contact & Links</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Website</label>
                <input
                  type="url"
                  placeholder="https://"
                  value={form.website}
                  onChange={e => update('website', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Instagram</label>
                <input
                  type="text"
                  placeholder="@handle"
                  value={form.instagram}
                  onChange={e => update('instagram', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* About Your Work */}
          <div className="border-t border-stone-100 pt-6">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">About Your Work</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Describe your business and what you specialize in *
                </label>
                <p className="text-xs text-stone-500 mb-2">
                  This will become your listing description. Write it in your own voice — tell collectors what you do and why you&apos;re the right choice.
                </p>
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={e => update('description', e.target.value)}
                  placeholder="Full paint correction, ceramic coating, and concours-level prep. We treat every car like it's headed to Pebble Beach..."
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Who is your ideal client?</label>
                <textarea
                  rows={2}
                  value={form.idealClient}
                  onChange={e => update('idealClient', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Why do you want to be listed on Fully Sorted?</label>
                <textarea
                  rows={2}
                  value={form.whyList}
                  onChange={e => update('whyList', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">How did you hear about us?</label>
                <input
                  type="text"
                  value={form.referredBy}
                  onChange={e => update('referredBy', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <p className="text-stone-500 text-sm mt-4">
              We review every application personally. Not everything is a fit — but if it is, you&apos;ll hear from us within 3â5 business days.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
