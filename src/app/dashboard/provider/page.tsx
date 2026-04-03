'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Building2, MapPin, Phone, Globe, Instagram, Save, Loader2, CheckCircle, Clock, AlertCircle, ArrowRight, Sparkles, Tag, DollarSign, Wrench } from 'lucide-react';
import Link from 'next/link';
import type { ServiceProvider } from '@/lib/db/schema';

const CATEGORIES = [
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

const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { color: string; icon: typeof CheckCircle; label: string }> = {
    active: { color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: CheckCircle, label: 'Active' },
    pending: { color: 'bg-amber-50 text-amber-700 border-amber-200', icon: Clock, label: 'Pending Review' },
    paused: { color: 'bg-stone-50 text-stone-600 border-stone-200', icon: AlertCircle, label: 'Paused' },
    rejected: { color: 'bg-red-50 text-red-700 border-red-200', icon: AlertCircle, label: 'Not Approved' },
  };
  const c = config[status] || config.pending;
  const Icon = c.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${c.color}`}>
      <Icon className="w-4 h-4" /> {c.label}
    </span>
  );
}

export default function ProviderDashboardPage() {
  const { userId, isLoaded } = useAuth();
  const [provider, setProvider] = useState<ServiceProvider | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [specialtyInput, setSpecialtyInput] = useState('');

  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    category: '',
    location: '',
    yearsInBusiness: '',
    phone: '',
    website: '',
    instagram: '',
    description: '',
    specialties: [] as string[],
    priceRange: '$$',
  });

  useEffect(() => {
    if (!isLoaded || !userId) return;
    fetch('/api/providers/me')
      .then(res => res.json())
      .then(data => {
        if (data.provider) {
          setProvider(data.provider);
          const p = data.provider;
          setForm({
            businessName: p.businessName || '',
            ownerName: p.ownerName || '',
            category: p.category || '',
            location: p.location || '',
            yearsInBusiness: p.yearsInBusiness || '',
            phone: p.phone || '',
            website: p.website || '',
            instagram: p.instagram || '',
            description: p.description || '',
            specialties: Array.isArray(p.specialties) ? p.specialties : [],
            priceRange: p.priceRange || '$$',
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [isLoaded, userId]);

  const addSpecialty = () => {
    const trimmed = specialtyInput.trim();
    if (trimmed && form.specialties.length < 8 && !form.specialties.includes(trimmed)) {
      setForm({ ...form, specialties: [...form.specialties, trimmed] });
      setSpecialtyInput('');
    }
  };

  const removeSpecialty = (spec: string) => {
    setForm({ ...form, specialties: form.specialties.filter(s => s !== spec) });
  };

  const handleSave = async (e: React.FormEvent) => {
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
        setSaveMessage('Profile updated successfully!');
      } else {
        setSaveMessage(data.error || 'Failed to save.');
      }
    } catch {
      setSaveMessage('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center">
          <Building2 className="w-16 h-16 text-stone-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-stone-900 mb-3">No Provider Profile Yet</h1>
          <p className="text-stone-600 mb-8">
            Apply to join the vetted services directory and get in front of serious collectors.
          </p>
          <Link
            href="/services/apply"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Apply to Be Listed <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 mb-1">Provider Dashboard</h1>
          <p className="text-stone-500">Manage your services directory profile</p>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status={provider.status} />
          {provider.foundingProvider && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
              <Sparkles className="w-4 h-4" /> Founding Provider
            </span>
          )}
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Business Info */}
        <section className="bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-600" /> Business Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Business Name *</label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={e => setForm({ ...form, businessName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Owner / Contact Name</label>
              <input
                type="text"
                value={form.ownerName}
                onChange={e => setForm({ ...form, ownerName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              00" /> Business Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Business Name *</label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={e => setForm({ ...form, businessName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Your Name *</label>
              <input
                type="text"
                required
                value={form.ownerName}
                onChange={e => setForm({ ...form, ownerName: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Category *</label>
              <select
                required
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              >
                <option value="">Select category</option>
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                <MapPin className="w-3.5 h-3.5 inline mr-1" /> Location *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. San Diego, CA"
                value={form.location}
                onChange={e => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Years in Business</label>
              <input
                type="text"
                placeholder="e.g. 12"
                value={form.yearsInBusiness}
                onChange={e => setForm({ ...form, yearsInBusiness: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
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
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {pr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-600" /> Contact Information
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                <Phone className="w-3.5 h-3.5 inline mr-1" /> Phone
              </label>
              <input
                type="tel"
                placeholder="(619) 555-0100"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                <Globe className="w-3.5 h-3.5 inline mr-1" /> Website
              </label>
              <input
                type="url"
                placeholder="https://yoursite.com"
                value={form.website}
                onChange={e => setForm({ ...form, website: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                <Instagram className="w-3.5 h-3.5 inline mr-1" /> Instagram
              </label>
              <input
                type="text"
                placeholder="@yourbusiness"
                value={form.instagram}
                onChange={e => setForm({ ...form, instagram: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
              />
            </div>
          </div>
        </section>

        {/* About Your Work */}
        <section className="bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-600" /> About Your Work
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Description *
              </label>
              <p className="text-xs text-stone-500 mb-2">
                This is what collectors see in the directory. Tell them what you do and why you&apos;re the right choice. Write in your own voice.
              </p>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                placeholder="Full paint correction, ceramic coating, and concours-level prep. We treat every car like it's headed to Pebble Beach..."
                className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                <Tag className="w-3.5 h-3.5 inline mr-1" /> Specialties
              </label>
              <p className="text-xs text-stone-500 mb-2">
                Add up to 8 tags that describe your specialties (e.g., &quot;Air-Cooled Porsche&quot;, &quot;Concours Prep&quot;)
              </p>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={specialtyInput}
                  onChange={e => setSpecialtyInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSpecialty(); } }}
                  placeholder="Add a specialty..."
                  className="flex-1 px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={addSpecialty}
                  disabled={form.specialties.length >= 8}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.specialties.map(spec => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full border border-amber-200"
                  >
                    {spec}
                    <button
                      type="button"
                      onClick={() => removeSpecialty(spec)}
                      className="ml-1 text-amber-500 hover:text-amber-700"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Save */}
        <div className="flex items-center justify-between">
          <div>
            {saveMessage && (
              <p className={`text-sm font-medium ${saveMessage.includes('success') ? 'text-emerald-600' : 'text-red-600'}`}>
                {saveMessage}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}
