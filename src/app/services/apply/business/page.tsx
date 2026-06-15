'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Building2, Send, Loader2, CheckCircle, Shield, Star, Sparkles, ArrowLeft } from 'lucide-react';
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

export default function ApplyBusinessPage() {
  const { userId } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    businessName: '', ownerName: '', category: '', location: '', yearsInBusiness: '',
    email: '', phone: '', website: '', instagram: '', description: '',
    idealClient: '', whyList: '', referredBy: '', priceRange: '$$',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, providerType: 'business', clerkUserId: userId || null, specialties: [] }),
      });
      const data = await res.json();
      if (res.ok) setSubmitted(true);
      else setError(data.error || 'Something went wrong. Please try again.');
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
        <div className="bg-white rounded-2xl border border-border p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
          <p className="text-text-secondary mb-8">
            We review every application personally. You&apos;ll hear from us within 3–5 business days.
          </p>
          <Link href="/services" className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors">
            View Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/services/apply" className="inline-flex items-center gap-1.5 text-sm text-text-secondary mb-6 hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Business or freelancer?
      </Link>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-accent-light border border-accent rounded-full px-4 py-1.5 mb-5">
          <Building2 className="w-4 h-4 text-accent" />
          <span className="text-accent text-xs font-bold uppercase tracking-wider">Business / Shop — Services Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
          Get found by the collectors <span className="text-accent">who actually pay.</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          For established shops and companies — detailers, restorers, mechanics, transporters, inspectors. Reviewed personally by Chris Peterson.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-border p-6">
          <Shield className="w-8 h-8 text-accent mb-3" />
          <h3 className="text-foreground font-bold mb-2">Free for founding providers</h3>
          <p className="text-text-secondary text-sm">The first 50 specialists are listed free — no commission, no per-lead fee.</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-6">
          <Star className="w-8 h-8 text-accent mb-3" />
          <h3 className="text-foreground font-bold mb-2">In front of serious collectors</h3>
          <p className="text-text-secondary text-sm">The people searching this directory are actively buying and maintaining collector cars.</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-6">
          <Sparkles className="w-8 h-8 text-accent mb-3" />
          <h3 className="text-foreground font-bold mb-2">Founding provider status</h3>
          <p className="text-text-secondary text-sm">Early listings get a Founding Provider badge and priority placement.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Tell us about your business</h2>
          <p className="text-text-secondary">Takes about 5 minutes. We read every application ourselves.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Business Name *</label>
              <input type="text" required value={form.businessName} onChange={e => update('businessName', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
              <input type="text" required value={form.ownerName} onChange={e => update('ownerName', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Category *</label>
              <select required value={form.category} onChange={e => update('category', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent">
                {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Location *</label>
              <input type="text" required placeholder="City, State" value={form.location} onChange={e => update('location', e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact & Links</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input type="email" required value={form.email} onChange={e => update('email', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Website</label>
                <input type="url" placeholder="https://" value={form.website} onChange={e => update('website', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Instagram</label>
                <input type="text" placeholder="@handle" value={form.instagram} onChange={e => update('instagram', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">About Your Work</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Describe your business and what you specialize in *</label>
                <textarea required rows={4} value={form.description} onChange={e => update('description', e.target.value)}
                  placeholder="Full paint correction, ceramic coating, and concours-level prep..."
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to be listed on Fully Sorted?</label>
                <textarea rows={2} value={form.whyList} onChange={e => update('whyList', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none" />
              </div>
            </div>
          </div>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">{error}</div>}
          <div className="pt-4">
            <button type="submit" disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50">
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
