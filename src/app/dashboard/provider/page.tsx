'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@clerk/nextjs';
import { Building2, MapPin, Phone, Globe, AtSign, Save, Loader2, CheckCircle, Clock, AlertCircle, ArrowRight, Sparkles, Tag, DollarSign, Wrench } from 'lucide-react';
import Link from 'next/link';
import type { ServiceProvider } from '@/lib/db/schema';
import { PayoutsPanel } from './PayoutsPanel';

const CATEGORIES = [
  { value: 'photography', label: 'Photography' },
  { value: 'detailing', label: 'Detailing & Paint Correction' },
  { value: 'mechanical', label: 'Mechanical & Repair' },
  { value: 'transport', label: 'Transport & Shipping' },
  { value: 'inspection', label: 'Pre-Purchase Inspections' },
  { value: 'restoration', label: 'Restoration' },
  { value: 'bodywork', label: 'Body & Paint' },
  { value: 'storage', label: 'Storage' },
  { value: 'finance', label: 'Financing & Insurance' },
  { value: 'other', label: 'Other' },
];

const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

function StatusBadge({ status }: { status: string }) {
  const config = {
    active: { icon: CheckCircle, label: 'Active — Listed in Directory', bg: 'bg-green-light', text: 'text-green-dark', border: 'border-green' },
    pending: { icon: Clock, label: 'Pending Review', bg: 'bg-accent-light', text: 'text-accent', border: 'border-accent' },
    paused: { icon: AlertCircle, label: 'Paused', bg: 'bg-surface', text: 'text-text-secondary', border: 'border-border' },
    rejected: { icon: AlertCircle, label: 'Not Approved', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  }[status] || { icon: Clock, label: status, bg: 'bg-surface', text: 'text-text-secondary', border: 'border-border' };

  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text} border ${config.border}`}>
      <Icon className="w-4 h-4" />
      {config.label}
    </span>
  );
}

export default function ProviderDashboard() {
  const { userId, isLoaded } = useAuth();
  const [provider, setProvider] = useState<ServiceProvider | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [specialtyInput, setSpecialtyInput] = useState('');

  // Form state
  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    category: '',
    location: '',
    phone: '',
    website: '',
    instagram: '',
    description: '',
    specialties: [] as string[],
    yearsInBusiness: '',
    priceRange: '$$',
  });

  // Fetch provider profile
  useEffect(() => {
    if (!isLoaded || !userId) return;
    fetch('/api/providers/me')
      .then(res => res.json())
      .then(data => {
        if (data.provider) {
          setProvider(data.provider);
          setForm({
            businessName: data.provider.businessName || '',
            ownerName: data.provider.ownerName || '',
            category: data.provider.category || '',
            location: data.provider.location || '',
            phone: data.provider.phone || '',
            website: data.provider.website || '',
            instagram: data.provider.instagram || '',
            description: data.provider.description || '',
            specialties: data.provider.specialties || [],
            yearsInBusiness: data.provider.yearsInBusiness || '',
            priceRange: data.provider.priceRange || '$$',
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [isLoaded, userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveMessage('');

    try {
      const res = await fetch('/api/providers/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setProvider(data.provider);
        setSaveMessage('Profile saved successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage(data.error || 'Failed to save');
      }
    } catch {
      setSaveMessage('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addSpecialty = () => {
    const trimmed = specialtyInput.trim();
    if (trimmed && !form.specialties.includes(trimmed) && form.specialties.length < 8) {
      setForm({ ...form, specialties: [...form.specialties, trimmed] });
      setSpecialtyInput('');
    }
  };

  const removeSpecialty = (spec: string) => {
    setForm({ ...form, specialties: form.specialties.filter(s => s !== spec) });
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  // No profile yet — prompt to apply
  if (!provider) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white rounded-2xl border border-border p-12 shadow-[0_24px_60px_-20px_rgba(26,26,24,0.35)]"
        >
          <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
          <div className="flex items-center justify-center gap-1.5 mb-4" aria-hidden="true">
            <span className="w-2 h-2 rounded-[2px] bg-accent" />
            <span className="w-2 h-2 rounded-[2px] bg-blue" />
            <span className="w-2 h-2 rounded-[2px] bg-gold" />
          </div>
          <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground mb-4">Become a Service Provider</h1>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            You don&apos;t have a provider profile yet. Apply to join the Fully Sorted Services Directory and get in front of serious collector car owners.
          </p>
          <Link
            href="/services/apply"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply to Be Listed <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <div className="flex items-center gap-1.5 mb-2" aria-hidden="true">
            <span className="w-2 h-2 rounded-[2px] bg-accent" />
            <span className="w-2 h-2 rounded-[2px] bg-blue" />
            <span className="w-2 h-2 rounded-[2px] bg-gold" />
          </div>
          <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Your Provider Profile</h1>
          <p className="text-text-secondary mt-1">Manage how you appear in the Services Directory</p>
        </div>
        <StatusBadge status={provider.status} />
      </motion.div>

      {provider.status === 'pending' && (
        <div className="bg-accent-light border border-accent rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent mt-0.5" />
            <div>
              <p className="text-accent font-medium">Your profile is under review</p>
              <p className="text-accent text-sm mt-1">
                We review every application personally. You can update your profile while you wait — changes will be reflected once approved. Expect a response within 3–5 business days.
              </p>
            </div>
          </div>
        </div>
      )}

      {provider.foundingProvider && (
        <div className="bg-gold-light border border-gold/40 rounded-xl p-5 mb-8 shine">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold" />
            <p className="text-[#8a6d2f] font-medium">Founding Provider — Thank you for being one of the first!</p>
          </div>
        </div>
      )}

      {/* Profile Form */}
      {/* Payments, payouts & orders */}
      <PayoutsPanel />

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Business Info */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          className="bg-white rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" /> Business Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Business Name *</label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={e => setForm({ ...form, businessName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
              <input
                type="text"
                required
                value={form.ownerName}
                onChange={e => setForm({ ...form, ownerName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Category *</label>
              <select
                required
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              >
                <option value="">Select category</option>
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <MapPin className="w-3.5 h-3.5 inline mr-1" /> Location *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. San Diego, CA"
                value={form.location}
                onChange={e => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Years in Business</label>
              <input
                type="text"
                placeholder="e.g. 12"
                value={form.yearsInBusiness}
                onChange={e => setForm({ ...form, yearsInBusiness: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <DollarSign className="w-3.5 h-3.5 inline mr-1" /> Price Range
              </label>
              <div className="flex gap-2">
                {PRICE_RANGES.map(pr => (
                  <button
                    key={pr}
                    type="button"
                    onClick={() => setForm({ ...form, priceRange: pr })}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      form.priceRange === pr
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-surface text-text-secondary hover:bg-surface'
                    }`}
                  >
                    {pr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
          className="bg-white rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" /> Contact Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <Phone className="w-3.5 h-3.5 inline mr-1" /> Phone
              </label>
              <input
                type="tel"
                placeholder="(619) 555-0100"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <Globe className="w-3.5 h-3.5 inline mr-1" /> Website
              </label>
              <input
                type="url"
                placeholder="https://yoursite.com"
                value={form.website}
                onChange={e => setForm({ ...form, website: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <AtSign className="w-3.5 h-3.5 inline mr-1" /> Instagram
              </label>
              <input
                type="text"
                placeholder="@yourbusiness"
                value={form.instagram}
                onChange={e => setForm({ ...form, instagram: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
            </div>
          </div>
        </motion.section>

        {/* About Your Work */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
          className="bg-white rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-accent" /> About Your Work
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Description *
              </label>
              <p className="text-xs text-text-secondary mb-2">
                This is what collectors see in the directory. Tell them what you do and why you&apos;re the right choice. Write in your own voice.
              </p>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                placeholder="Full paint correction, ceramic coating, and concours-level prep. We treat every car like it's headed to Pebble Beach..."
                className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                <Tag className="w-3.5 h-3.5 inline mr-1" /> Specialties
              </label>
              <p className="text-xs text-text-secondary mb-2">
                Add up to 8 tags that describe your specialties (e.g., &quot;Air-Cooled Porsche&quot;, &quot;Concours Prep&quot;)
              </p>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={specialtyInput}
                  onChange={e => setSpecialtyInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSpecialty(); } }}
                  placeholder="Add a specialty..."
                  className="flex-1 px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <button
                  type="button"
                  onClick={addSpecialty}
                  disabled={form.specialties.length >= 8}
                  className="px-4 py-2.5 bg-surface hover:bg-surface text-foreground font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.specialties.map(spec => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1 bg-accent-light text-accent text-sm font-medium px-3 py-1.5 rounded-full border border-accent"
                  >
                    {spec}
                    <button
                      type="button"
                      onClick={() => removeSpecialty(spec)}
                      className="ml-1 text-accent hover:text-accent-hover"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Save */}
        <div className="flex items-center justify-between">
          <div>
            {saveMessage && (
              <p className={`text-sm font-medium ${saveMessage.includes('success') ? 'text-green' : 'text-red-600'}`}>
                {saveMessage}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}
