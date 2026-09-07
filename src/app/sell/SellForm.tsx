'use client';

import { useState, useEffect } from 'react';
import { AI_ASSIST_ENABLED } from '@/lib/features';
import { motion } from 'framer-motion';
import { trackMetaEvent } from '@/components/analytics/MetaPixel';
import { trackGaEvent } from '@/components/analytics/GoogleAnalytics';
import {
  Sparkles, Loader2, CheckCircle2, ChevronRight, ChevronLeft,
  Car, FileText, Send, CreditCard, Star, Zap, Lock
} from 'lucide-react';
import PhotoUploader from '@/components/upload/PhotoUploader';
import { LISTING_TIERS, type ListingTier, getMaxPhotos } from '@/lib/listing-tiers';
import { SELLER_TYPES, DEALER_ATTESTATION, type SellerType } from '@/lib/dealer';

const CATEGORIES = ['Muscle', 'European', 'JDM', 'Vintage', 'Modern Classic', 'Barn Find', 'Truck / SUV', 'Other'];
const TRANSMISSIONS = ['Manual', 'Automatic'];
const DRIVETRAINS = ['RWD', 'FWD', 'AWD', '4WD'];
const BODY_STYLES = ['Coupe', 'Sedan', 'Convertible', 'Wagon', 'Hatchback', 'Truck', 'SUV', 'Van', 'Roadster', 'Targa'];

type Step = 'vehicle' | 'description' | 'publish';

interface UploadedPhoto {
  url: string;
  name: string;
  size: number;
  isHero?: boolean;
}

// ORDER MATTERS, and it used to be wrong.
//
// "Choose Plan" was step one, so the first thing this site did to a seller was
// ask for money, before it knew a single thing about his car. Somebody with a
// numbers-matching car was picking a $9.99 tier before anyone had looked at it.
// That is what made the page feel cheap: not the amount, the sequence.
//
// The car comes first now. The fee is a detail you settle once the listing
// exists and is worth paying for.
// THREE steps, and only four fields in the whole flow are required: year,
// make, model and price. Everything else is optional and folded away.
//
// It used to be five steps and about thirty fields, opening with "Choose Plan".
// A man photographing a 911 in his driveway on a phone was being asked for a
// ZIP code and a drivetrain before he could get a price on the screen. Nobody
// finishes that. Ask for the little that is needed, offer the rest, and let him
// stop whenever he likes.
const STEPS: { key: Step; label: string; icon: React.ReactNode }[] = [
  { key: 'vehicle', label: 'Your Car', icon: <Car className="w-5 h-5" /> },
  { key: 'description', label: 'Describe It', icon: <FileText className="w-5 h-5" /> },
  { key: 'publish', label: 'Publish', icon: <Send className="w-5 h-5" /> },
];

/**
 * An optional group, shut by default.
 *
 * Native <details>, so it works with no JavaScript, keyboard and screen readers
 * get it for free, and the browser's own find-in-page can open it.
 */
function More({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-border bg-white">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
        <span>
          <span className="font-medium text-foreground">{title}</span>
          {hint && <span className="block text-xs text-text-secondary mt-0.5">{hint}</span>}
        </span>
        <span className="text-xs font-medium text-text-secondary shrink-0 group-open:hidden">Add</span>
        <span className="text-xs font-medium text-text-secondary shrink-0 hidden group-open:inline">Hide</span>
      </summary>
      <div className="px-5 pb-5 pt-1 space-y-4">{children}</div>
    </details>
  );
}

const inputClass = "w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-white text-foreground";
const selectClass = `${inputClass} bg-white`;
const labelClass = "block text-sm font-medium text-foreground mb-1.5";

const TIER_ICONS: Record<ListingTier, React.ReactNode> = {
  standard: <Car className="w-6 h-6" />,
  featured: <Zap className="w-6 h-6" />,
  premium: <Star className="w-6 h-6" />,
};

export default function SellForm() {
  const [step, setStep] = useState<Step>('vehicle');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [earlyAdopterSpotsRemaining, setEarlyAdopterSpotsRemaining] = useState<number | null>(null);

  // Look-up state for the field at the top of the vehicle step.
  const [lookup, setLookup] = useState('');
  const [lookingUp, setLookingUp] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  type Matched = { slug: string; make: string; model: string; generation: string | null };
  const [matchedModel, setMatchedModel] = useState<Matched | null>(null);
  const [modelChoices, setModelChoices] = useState<Matched[]>([]);
  const [lookupNote, setLookupNote] = useState<string | null>(null);

  const [form, setForm] = useState({
    // Defaults to the tier the page advertises. This was 'featured', so a
    // seller who arrived on a hero reading "$9.99 flat" and accepted every
    // default was shown "Submit & Pay $29.99" at the review step.
    tier: 'standard' as ListingTier,
    year: '',
    make: '',
    model: '',
    trim: '',
    // The fields a collector car is actually identified by. A 17-digit VIN
    // only exists from 1981, so it is never required: a 1967 car has a chassis
    // or serial number and nothing else, and a form that insists on a VIN is a
    // form that tells the owner of a 275 GTB he does not qualify.
    vin: '',
    chassis: '',
    engineNumber: '',
    matchingNumbers: '',
    provenance: '',
    mileage: '',
    transmission: '',
    engine: '',
    drivetrain: '',
    exteriorColor: '',
    interiorColor: '',
    bodyStyle: '',
    category: '',
    city: '',
    state: '',
    zipCode: '',
    price: '',
    sellerNotes: '',
    description: '',
    highlights: [] as string[],
    expertTake: '',
    // Who is selling. Dealers list at the same fee; the listing is badged and
    // carries the disclosures in lib/dealer.ts.
    sellerType: 'private' as SellerType,
    dealerName: '',
    dealerLicense: '',
    dealerFeesNote: '',
  });
  const [dealerAttested, setDealerAttested] = useState(false);
  const isDealer = form.sellerType === 'dealer';
  const dealerReady = !isDealer || (form.dealerName.trim().length > 0 && dealerAttested);

  /**
   * Keep the draft.
   *
   * Somebody photographing a car in a driveway loses signal, takes a call, or
   * closes the tab, and every field they typed used to go with it. Nobody
   * retypes thirty fields; they just do not come back. This holds the draft in
   * their own browser until the listing is submitted.
   *
   * Photos are NOT held: they are already uploaded to Blob and their URLs are
   * in the draft, so re-opening restores them anyway.
   */
  const DRAFT_KEY = 'fs_sell_draft';
  const [draftRestored, setDraftRestored] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { form?: Record<string, unknown>; photos?: UploadedPhoto[] };
      if (saved.form && Object.keys(saved.form).length) {
        setForm((prev) => ({ ...prev, ...saved.form }));
        if (Array.isArray(saved.photos)) setPhotos(saved.photos);
        setDraftRestored(true);
      }
    } catch {
      // Private browsing, storage disabled, or a draft from an older shape.
      // Losing a draft must never break the form.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ form, photos }));
    } catch {}
  }, [form, photos]);

  // Check early adopter status on mount
  useEffect(() => {
    fetch('/api/listings')
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.earlyAdopterSpotsRemaining === 'number') {
          setEarlyAdopterSpotsRemaining(data.earlyAdopterSpotsRemaining);
        }
      })
      .catch(() => {});
  }, []);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * Fill the form in from a VIN or from plain text.
   *
   * Reuses /api/stable/identify, the same endpoint The Stable uses, so a seller
   * and an owner get the same answer about the same car. It decodes the VIN
   * where there is one, reads the text where there is not, and matches the car
   * to its published generation page.
   *
   * It only ever FILLS BLANKS. Anything already typed wins, because a person
   * who has corrected a field should not watch a lookup undo it.
   */
  const runLookup = async () => {
    const input = lookup.trim();
    if (!input) return;
    setLookingUp(true);
    setLookupError(null);
    setLookupNote(null);
    setMatchedModel(null);
    setModelChoices([]);
    try {
      const res = await fetch('/api/stable/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not look that up.');

      const car = data.car || {};
      setForm((prev) => ({
        ...prev,
        year: prev.year || (car.year ? String(car.year) : ''),
        make: prev.make || car.make || '',
        model: prev.model || car.model || '',
        trim: prev.trim || car.trim || '',
        vin: prev.vin || car.vin || '',
      }));
      if (data.modelPage) setMatchedModel(data.modelPage);
      if (Array.isArray(data.modelAlternatives)) setModelChoices(data.modelAlternatives);
      if (data.vinNote) setLookupNote(data.vinNote);
      if (!car.make && !car.model) {
        setLookupError('Nothing came back for that. Fill it in below and carry on.');
      }
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : 'Could not look that up.');
    } finally {
      setLookingUp(false);
    }
  };

  const currentStepIndex = STEPS.findIndex((s) => s.key === step);

  const goNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEPS.length) {
      setStep(STEPS[nextIndex].key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrev = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(STEPS[prevIndex].key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const generateAIDescription = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/ai/describe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: form.year, make: form.make, model: form.model, trim: form.trim,
          mileage: form.mileage, transmission: form.transmission, engine: form.engine,
          exteriorColor: form.exteriorColor, interiorColor: form.interiorColor,
          bodyStyle: form.bodyStyle, sellerNotes: form.sellerNotes,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setForm((prev) => ({
          ...prev,
          description: data.description || prev.description,
          highlights: data.highlights || prev.highlights,
          expertTake: data.expertTake || prev.expertTake,
        }));
      } else {
        const data = await res.json();
        setSubmitError(data.error || 'AI service unavailable. You can write your own description below.');
      }
    } catch (error) {
      console.error('Failed to generate description:', error);
      setSubmitError('AI service unavailable. You can write your own description below.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitAndPay = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Step 1: Create the listing
      const listingRes = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          dealerAttested,
          aiDescription: form.description,
          photos: photos.map((p) => p.url),
          heroPhoto: photos.find((p) => p.isHero)?.url || photos[0]?.url || null,
        }),
      });
      if (!listingRes.ok) throw new Error('Failed to create listing');
      const listingData = await listingRes.json();

      // The listing exists now, so the local draft has done its job.
      try { localStorage.removeItem(DRAFT_KEY); } catch {}

      // Meta Pixel: fire Lead event when seller creates a listing
      // (before payment, so we capture intent even on cart abandonment)
      const tierValue = form.tier === 'premium' ? 49.99 : form.tier === 'featured' ? 29.99 : 9.99;
      trackMetaEvent('Lead', {
        content_category: 'seller_listing',
        content_name: `${form.year} ${form.make} ${form.model}`.trim(),
        value: tierValue,
        currency: 'USD',
      });

      // GA4 key event: listing created, checkout about to start.
      trackGaEvent('listing_checkout', { tier: form.tier, value: tierValue, currency: 'USD' });

      // Step 2: Create checkout session (tier-aware, free check happens server-side)
      const checkoutRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listingId: listingData.listing?.id,
          year: form.year,
          make: form.make,
          model: form.model,
          tier: form.tier,
        }),
      });

      if (!checkoutRes.ok) {
        const data = await checkoutRes.json();
        if (data.error === 'Payment service not configured') {
          window.location.href = '/sell/success?dev=true';
          return;
        }
        throw new Error(data.error || 'Failed to create checkout session');
      }

      const checkoutData = await checkoutRes.json();
      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTierConfig = LISTING_TIERS[form.tier];
  const isEarlyAdopter = earlyAdopterSpotsRemaining !== null && earlyAdopterSpotsRemaining > 0;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-10">
        {STEPS.map((s, i) => (
          <div key={s.key} className="flex items-center">
            <button
              onClick={() => setStep(s.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                s.key === step
                  ? 'bg-accent text-white'
                  : i < currentStepIndex
                  ? 'bg-green text-white'
                  : 'bg-surface text-text-tertiary'
              }`}
            >
              {i < currentStepIndex ? <CheckCircle2 className="w-4 h-4" /> : s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`w-6 md:w-12 h-0.5 mx-1 ${i < currentStepIndex ? 'bg-green' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>

      {draftRestored && (
        <div className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-border bg-white px-5 py-4">
          <p className="text-sm text-text-secondary">
            We kept what you had started. Pick up where you left off.
          </p>
          <button
            type="button"
            onClick={() => {
              try { localStorage.removeItem('fs_sell_draft'); } catch {}
              window.location.reload();
            }}
            className="text-sm font-medium text-accent hover:underline shrink-0"
          >
            Start fresh
          </button>
        </div>
      )}

      {/* Animated step container — re-mounts (and fades up) on each step change */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >

      {/* ─── Step 4: Choose Plan ─────────────────────────────── */}
      {step === 'publish' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-1">Choose your listing package</h2>
            {/* The fee comparison lived in the hero, where it was the loudest
                thing on a page about somebody's car. It belongs here, at the
                one moment a seller is actually weighing what to pay. */}
            <p className="text-text-secondary">Pick the plan that fits your car. You can change your mind up until you pay.</p>
            <p className="text-sm text-text-secondary mt-3 max-w-xl">
              For comparison: most collector-car listing sites take a 4.5 to 5 percent
              success fee when your car sells, which on a $50,000 sale is over $2,250.
              Ours is a flat fee, paid once, and nothing more when it sells.
            </p>
          </div>

          {/* Early adopter banner */}
          {isEarlyAdopter && (
            <div className="bg-green-light border border-green rounded-xl p-4 flex items-start gap-3">
              <div>
                <p className="font-semibold text-green-dark">Early adopter: your listing is free.</p>
                <p className="text-green-dark text-sm mt-0.5">
                  You&apos;re one of our first sellers.{' '}
                  {earlyAdopterSpotsRemaining}{' '}{earlyAdopterSpotsRemaining === 1 ? 'spot' : 'spots'} remaining.
                  Choose any plan and we&apos;ll waive the fee.
                </p>
              </div>
            </div>
          )}

          {/* Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['standard', 'featured', 'premium'] as ListingTier[]).map((key) => {
              const tier = LISTING_TIERS[key];
              const isSelected = form.tier === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    updateField('tier', key);
                    // Auto-advance after a brief moment
                    setTimeout(goNext, 150);
                  }}
                  className={`relative text-left rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                    isSelected
                      ? key === 'premium'
                        ? 'border-gold bg-gold-light shadow-lg shadow-gold-light'
                        : 'border-accent bg-accent-light shadow-lg shadow-accent-light'
                      : key === 'premium'
                      ? 'border-border bg-white hover:border-gold hover:shadow-md'
                      : 'border-border bg-white hover:border-accent hover:shadow-md'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-white" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected
                      ? key === 'premium' ? 'bg-gold text-white' : 'bg-accent text-white'
                      : 'bg-surface text-text-secondary'
                  }`}>
                    {TIER_ICONS[key]}
                  </div>

                  <div className="mb-1">
                    <h3 className="font-bold text-foreground">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-bold font-mono ${isEarlyAdopter ? 'line-through text-text-tertiary' : 'text-foreground'}`}>
                        {tier.displayPrice}
                      </span>
                      {isEarlyAdopter && (
                        <span className="text-green font-bold text-lg">FREE</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="text-xs font-semibold text-accent bg-accent-light px-3 py-1 rounded-full">
                        Selected ✓
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-text-tertiary text-center">
            Not sure? Featured is our most popular option: {AI_ASSIST_ENABLED ? 'AI write-up, social share, and 60-day listing.' : 'social share, more photos, and a 60-day listing.'}
          </p>
        </div>
      )}

      {/* ─── Step 1: The car. Four required fields, everything else folded. ── */}
      {step === 'vehicle' && (
        <div className="space-y-5">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-1">Tell us about your car</h2>
            <p className="text-text-secondary">
              Four things are needed: year, make, model and a price. Everything below that
              is yours to add or ignore.
            </p>
          </div>

          {/* The look-up. Optional, and it fills blanks rather than typing over
              anything the seller has already corrected. */}
          <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
            <label className={labelClass} htmlFor="sell-lookup">
              Start with a VIN or chassis number
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="sell-lookup"
                type="text"
                value={lookup}
                onChange={(e) => setLookup(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); runLookup(); } }}
                placeholder="1972 Datsun 240Z"
                className={inputClass}
              />
              <button
                type="button"
                onClick={runLookup}
                disabled={lookingUp || !lookup.trim()}
                className="px-5 py-3 rounded-lg bg-accent text-white font-medium whitespace-nowrap disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                {lookingUp ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Look it up'}
              </button>
            </div>
            <p className="text-xs text-text-secondary mt-2">
              Or just type what it is. Pre-1981 cars have no 17-digit VIN and that is fine.
            </p>
            {lookupError && <p className="text-sm text-red-700 mt-3">{lookupError}</p>}
            {lookupNote && <p className="text-sm text-amber-700 mt-3">{lookupNote}</p>}
            {matchedModel && (
              <div className="mt-4 flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-text-secondary">
                  We have a history for this one:{' '}
                  <a
                    href={`/research/${matchedModel.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    {matchedModel.make} {matchedModel.model}
                    {matchedModel.generation ? ` (${matchedModel.generation})` : ''}
                  </a>
                  .
                </span>
              </div>
            )}

            {/* Several generations fit. Ask rather than pick one for him:
                "1985 Porsche 911" is genuinely three different cars. */}
            {!matchedModel && modelChoices.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-text-secondary mb-2">
                  A few of these fit. Which one is yours?
                </p>
                <ul className="flex flex-wrap gap-2">
                  {modelChoices.map((m) => (
                    <li key={m.slug}>
                      <a
                        href={`/research/${m.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-border bg-white px-3 py-1.5 text-sm text-accent hover:border-accent"
                      >
                        {m.model}{m.generation ? ` (${m.generation})` : ''}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* The four that are actually required. */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Year *</label>
              <input type="number" value={form.year} onChange={(e) => updateField('year', e.target.value)} placeholder="1967" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Make *</label>
              <input type="text" value={form.make} onChange={(e) => updateField('make', e.target.value)} placeholder="Ford" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Model *</label>
              <input type="text" value={form.model} onChange={(e) => updateField('model', e.target.value)} placeholder="Mustang" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Asking price *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary font-mono text-lg">$</span>
              <input type="number" value={form.price} onChange={(e) => updateField('price', e.target.value)} placeholder="74500" className={`${inputClass} pl-8 font-mono text-lg`} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Photos</label>
            <PhotoUploader photos={photos} onChange={setPhotos} maxPhotos={getMaxPhotos(form.tier)} />
            <p className="text-xs text-text-secondary mt-1.5">
              Up to {getMaxPhotos(form.tier)} on the {selectedTierConfig.name} plan. You can
              pick a bigger plan at the end if you need more room.
            </p>
          </div>

          {/* ── Everything below is optional and shut by default ───────────── */}
          <div className="space-y-3 pt-2">
            <p className="text-sm text-text-secondary">
              That is enough to publish. Anything you add here makes the listing better,
              and none of it is required.
            </p>

            <More title="Specs" hint="Mileage, gearbox, colors, engine">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Mileage</label>
                  <input type="number" value={form.mileage} onChange={(e) => updateField('mileage', e.target.value)} placeholder="67200" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Transmission</label>
                  <select value={form.transmission} onChange={(e) => updateField('transmission', e.target.value)} className={selectClass}>
                    <option value="">Select</option>
                    {TRANSMISSIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Drivetrain</label>
                  <select value={form.drivetrain} onChange={(e) => updateField('drivetrain', e.target.value)} className={selectClass}>
                    <option value="">Select</option>
                    {DRIVETRAINS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Trim / package</label>
                  <input type="text" value={form.trim} onChange={(e) => updateField('trim', e.target.value)} placeholder="S-Code Fastback" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Engine</label>
                  <input type="text" value={form.engine} onChange={(e) => updateField('engine', e.target.value)} placeholder="390ci V8" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Exterior color</label>
                  <input type="text" value={form.exteriorColor} onChange={(e) => updateField('exteriorColor', e.target.value)} placeholder="Highland Green" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Interior color</label>
                  <input type="text" value={form.interiorColor} onChange={(e) => updateField('interiorColor', e.target.value)} placeholder="Black vinyl" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Body style</label>
                  <select value={form.bodyStyle} onChange={(e) => updateField('bodyStyle', e.target.value)} className={selectClass}>
                    <option value="">Select body style</option>
                    {BODY_STYLES.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Category</label>
                  <select value={form.category} onChange={(e) => updateField('category', e.target.value)} className={selectClass}>
                    <option value="">Select category</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </More>

            <More title="Numbers" hint="VIN, chassis, engine number, matching numbers">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>VIN</label>
                  <input type="text" value={form.vin} onChange={(e) => updateField('vin', e.target.value.toUpperCase())} placeholder="1981 and later" className={`${inputClass} font-mono`} maxLength={17} />
                </div>
                <div>
                  <label className={labelClass}>Chassis / serial number</label>
                  <input type="text" value={form.chassis} onChange={(e) => updateField('chassis', e.target.value)} placeholder="e.g. 8891" className={`${inputClass} font-mono`} maxLength={64} />
                </div>
                <div>
                  <label className={labelClass}>Engine number</label>
                  <input type="text" value={form.engineNumber} onChange={(e) => updateField('engineNumber', e.target.value)} placeholder="Stamped on the block" className={`${inputClass} font-mono`} maxLength={64} />
                </div>
                <div>
                  <label className={labelClass}>Matching numbers</label>
                  <select value={form.matchingNumbers} onChange={(e) => updateField('matchingNumbers', e.target.value)} className={selectClass}>
                    <option value="">Prefer not to say</option>
                    <option value="yes">Yes, numbers matching</option>
                    <option value="no">No, not matching</option>
                    <option value="unknown">Not sure</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Known history</label>
                <textarea
                  value={form.provenance}
                  onChange={(e) => updateField('provenance', e.target.value)}
                  rows={4}
                  maxLength={2000}
                  placeholder="Ownership chain, restoration and by whom, concours results, documentation, books and tools. Say what you can support."
                  className={inputClass}
                />
                <p className="text-xs text-text-secondary mt-1.5">
                  Leave it blank rather than guessing. An empty field says nothing; a wrong
                  one gets found out.
                </p>
              </div>
            </More>

            <More title="Where the car is" hint="Buyers filter by it. City is enough.">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>City</label>
                  <input type="text" value={form.city} onChange={(e) => updateField('city', e.target.value)} placeholder="San Diego" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input type="text" value={form.state} onChange={(e) => updateField('state', e.target.value)} placeholder="CA" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>ZIP</label>
                  <input type="text" value={form.zipCode} onChange={(e) => updateField('zipCode', e.target.value)} placeholder="92101" className={inputClass} />
                </div>
              </div>
            </More>

            {/* Open when they have said they are a dealer, because it then has
                fields that genuinely are required. */}
            <details className="group rounded-xl border border-border bg-white" open={isDealer}>
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                <span>
                  <span className="font-medium text-foreground">Who is selling</span>
                  <span className="block text-xs text-text-secondary mt-0.5">
                    {isDealer ? 'Dealer' : 'A private seller, unless you say otherwise'}
                  </span>
                </span>
                <span className="text-xs font-medium text-text-secondary shrink-0 group-open:hidden">Change</span>
                <span className="text-xs font-medium text-text-secondary shrink-0 hidden group-open:inline">Hide</span>
              </summary>
              <div className="px-5 pb-5 pt-1 space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  {SELLER_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => updateField('sellerType', t.value)}
                      className={`text-left rounded-lg border px-4 py-3 transition-colors ${form.sellerType === t.value ? 'border-accent bg-accent-light' : 'border-border hover:border-border-medium'}`}
                      aria-pressed={form.sellerType === t.value}
                    >
                      <p className="text-sm font-semibold text-foreground">{t.label}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{t.hint}</p>
                    </button>
                  ))}
                </div>
                {isDealer && (
                  <div className="space-y-4">
                    <p className="text-xs text-text-secondary">
                      Same listing fee as a private seller. The listing is marked as a dealer listing and carries the standard dealer disclosures. Listing several cars? <a href="/contact" className="font-semibold text-accent">Ask about a package</a>.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Dealership name *</label>
                        <input type="text" value={form.dealerName} onChange={(e) => updateField('dealerName', e.target.value)} placeholder="Symbolic International" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Dealer licence number</label>
                        <input type="text" value={form.dealerLicense} onChange={(e) => updateField('dealerLicense', e.target.value)} placeholder="State licence or bond number" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Fees the buyer should expect</label>
                      <input type="text" value={form.dealerFeesNote} onChange={(e) => updateField('dealerFeesNote', e.target.value)} placeholder="$85 documentation fee; tax and registration extra" className={inputClass} />
                      <p className="text-xs text-text-tertiary mt-1">Shown on the listing next to the asking price. Leave blank and the listing says fees are set by the dealer and not included.</p>
                    </div>
                    <label className="flex items-start gap-3 text-sm text-text-secondary cursor-pointer">
                      <input type="checkbox" checked={dealerAttested} onChange={(e) => setDealerAttested(e.target.checked)} className="mt-1" />
                      <span>{DEALER_ATTESTATION}</span>
                    </label>
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>
      )}

      {/* ─── Step 3: Description ─────────────────────────────── */}
      {step === 'description' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-1">Tell the story</h2>
            <p className="text-text-secondary">Add your notes below, then write the listing in your own voice.</p>
          </div>
          <div>
            <label className={labelClass}>Your Notes</label>
            <textarea
              value={form.sellerNotes}
              onChange={(e) => updateField('sellerNotes', e.target.value)}
              rows={4}
              placeholder={`Tell us what makes this car special. Recent work done? History you know? Quirks?${AI_ASSIST_ENABLED ? " The more you share, the better the AI description." : ""}`}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* With AI_ASSIST_ENABLED off, aiDescription is false on every tier, so
              this would otherwise fall through to the "upgrade your plan" nudge —
              which would be selling an upgrade that cannot deliver. Say nothing
              instead; the description field below is right there. */}
          {!AI_ASSIST_ENABLED ? null : selectedTierConfig.aiDescription ? (
            <button
              onClick={generateAIDescription}
              disabled={isGenerating || !form.year || !form.make || !form.model}
              className="shine flex items-center gap-2 bg-gradient-to-r from-accent to-accent-hover text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-hover hover:to-accent-hover transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isGenerating ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Writing your listing...</>
              ) : (
                <><Sparkles className="w-5 h-5" /> Generate AI Description</>
              )}
            </button>
          ) : (
            <div className="bg-surface rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-text-tertiary mt-0.5 shrink-0" />
              <div>
                <p className="text-text-secondary text-sm font-medium">AI descriptions are included in Featured and Premium plans.</p>
                <button onClick={() => setStep('publish')} className="text-accent text-sm underline mt-1">
                  Upgrade your plan →
                </button>
              </div>
            </div>
          )}

          {submitError && (
            <div className="bg-red-light border border-red/40 rounded-xl p-4 text-red text-sm">{submitError}</div>
          )}

          {form.description && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>{AI_ASSIST_ENABLED ? "AI-Generated Description" : "Description"}</label>
                <textarea value={form.description} onChange={(e) => updateField('description', e.target.value)} rows={8} className={`${inputClass} resize-none`} />
                <p className="text-xs text-text-tertiary mt-1">Feel free to edit. This is your listing.</p>
              </div>
              {form.highlights.length > 0 && (
                <div>
                  <label className={labelClass}>Highlights</label>
                  <div className="space-y-2">
                    {form.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-surface px-4 py-2.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {form.expertTake && (
                <div>
                  <label className={labelClass}>Expert Take</label>
                  <div className="bg-accent-light border-l-4 border-accent px-4 py-3 rounded-r-lg">
                    <p className="text-sm italic text-foreground">&ldquo;{form.expertTake}&rdquo;</p>
                    <p className="text-xs text-accent mt-1">Fully Sorted</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {!form.description && (
            <div>
              <label className={labelClass}>Or write your own description</label>
              <textarea
                value={form.description}
                onChange={(e) => updateField('description', e.target.value)}
                rows={6}
                placeholder="Write your listing description here..."
                className={`${inputClass} resize-none`}
              />
            </div>
          )}
        </div>
      )}

      {/* ─── Step 5: Review & Pay ─────────────────────────────── */}
      {step === 'publish' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-1">Review your listing</h2>
            <p className="text-text-secondary">Make sure everything looks good, then complete your listing.</p>
          </div>

          {/* Selected plan summary */}
          <div className={`rounded-xl border-2 p-4 flex items-center justify-between ${selectedTierConfig.highlight ? 'border-accent bg-accent-light' : form.tier === 'premium' ? 'border-gold bg-gold-light' : 'border-border bg-surface'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${selectedTierConfig.highlight ? 'bg-accent text-white' : form.tier === 'premium' ? 'bg-gold text-white' : 'bg-border-medium text-text-secondary'}`}>
                {TIER_ICONS[form.tier]}
              </div>
              <div>
                <p className="font-semibold text-foreground">{selectedTierConfig.name} Plan</p>
                <p className="text-xs text-text-secondary">{selectedTierConfig.features.slice(0, 2).join(' · ')}</p>
              </div>
            </div>
            <div className="text-right">
              {isEarlyAdopter ? (
                <div>
                  <span className="text-text-tertiary line-through text-sm">{selectedTierConfig.displayPrice}</span>
                  <p className="text-green font-bold text-lg">FREE</p>
                </div>
              ) : (
                <p className="text-xl font-bold font-mono text-foreground">{selectedTierConfig.displayPrice}</p>
              )}
            </div>
          </div>

          {/* Vehicle Summary */}
          <div className="bg-white rounded-xl border border-border p-6 space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {form.year} {form.make} {form.model} {form.trim}
            </h3>
            {photos.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {photos.slice(0, 5).map((photo, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={photo.url} src={photo.url} alt={`Photo ${i + 1}`} className="w-24 h-18 object-cover rounded-lg shrink-0" />
                ))}
                {photos.length > 5 && (
                  <div className="w-24 h-18 bg-surface rounded-lg flex items-center justify-center shrink-0 text-text-secondary text-sm font-medium">
                    +{photos.length - 5} more
                  </div>
                )}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {form.mileage && <div><span className="text-text-tertiary">Mileage:</span> <span className="text-foreground">{parseInt(form.mileage).toLocaleString()} mi</span></div>}
              {form.transmission && <div><span className="text-text-tertiary">Transmission:</span> <span className="text-foreground">{form.transmission}</span></div>}
              {form.engine && <div><span className="text-text-tertiary">Engine:</span> <span className="text-foreground">{form.engine}</span></div>}
              {form.drivetrain && <div><span className="text-text-tertiary">Drivetrain:</span> <span className="text-foreground">{form.drivetrain}</span></div>}
              {form.exteriorColor && <div><span className="text-text-tertiary">Exterior:</span> <span className="text-foreground">{form.exteriorColor}</span></div>}
              {form.interiorColor && <div><span className="text-text-tertiary">Interior:</span> <span className="text-foreground">{form.interiorColor}</span></div>}
              {form.city && <div><span className="text-text-tertiary">Location:</span> <span className="text-foreground">{form.city}, {form.state}</span></div>}
              {form.category && <div><span className="text-text-tertiary">Category:</span> <span className="text-foreground">{form.category}</span></div>}
              <div><span className="text-text-tertiary">Seller:</span> <span className="text-foreground">{isDealer ? `Dealer, ${form.dealerName || 'name missing'}` : 'Private owner'}</span></div>
            </div>
            {form.price && (
              <div className="pt-3 border-t border-border">
                <span className="text-text-tertiary text-sm">Asking Price</span>
                <p className="text-2xl font-bold font-mono text-foreground">${parseInt(form.price).toLocaleString()}</p>
              </div>
            )}
          </div>

          {form.description && (
            <div className="bg-white rounded-xl border border-border p-6">
              <h4 className="font-semibold text-foreground mb-2">Description</h4>
              <p className="text-sm text-text-secondary whitespace-pre-line">{form.description}</p>
            </div>
          )}

          {/* Payment / Submit Box */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-lg">
                  {isEarlyAdopter ? 'Early adopter: free listing' : `${selectedTierConfig.name} Listing`}
                </p>
                <p className="text-stone-300 text-sm">
                  {isEarlyAdopter
                    ? "You're one of our first 100 sellers. This one's on us."
                    : 'One-time payment. No hidden fees.'}
                </p>
              </div>
              <p className="text-3xl font-bold font-mono">
                {isEarlyAdopter ? 'FREE' : selectedTierConfig.displayPrice}
              </p>
            </div>
            {!isEarlyAdopter && (
              <div className="flex items-center gap-2 text-stone-400 text-xs mb-4">
                <CreditCard className="w-4 h-4" />
                Secure payment via Stripe
              </div>
            )}
            {submitError && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 text-red-200 text-sm mb-4">
                {submitError}
              </div>
            )}
            <button
              onClick={handleSubmitAndPay}
              disabled={isSubmitting || !form.year || !form.make || !form.model || !form.price || !dealerReady}
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
              ) : isEarlyAdopter ? (
                <><Send className="w-5 h-5" /> Submit Free Listing</>
              ) : (
                <><Send className="w-5 h-5" /> Submit &amp; Pay {selectedTierConfig.displayPrice}</>
              )}
            </button>
            <p className="flex items-center justify-center gap-1.5 text-stone-400 text-xs mt-3">
              <Lock className="w-3.5 h-3.5" />
              256-bit SSL encrypted · payments processed securely by Stripe · we never store your card details
            </p>
          </div>
        </div>
      )}

      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
        <button
          onClick={goPrev}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 text-text-tertiary hover:text-foreground transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        {currentStepIndex < STEPS.length - 1 && (
          <button
            onClick={goNext}
            className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-hover transition"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
