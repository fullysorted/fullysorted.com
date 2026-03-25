'use client';

import { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, ChevronRight, ChevronLeft, Car, DollarSign, FileText, Send, CreditCard } from 'lucide-react';
import PhotoUploader from '@/components/upload/PhotoUploader';

const CATEGORIES = ['Muscle', 'European', 'JDM', 'Vintage', 'Modern Classic', 'Barn Find', 'Truck / SUV', 'Other'];
const TRANSMISSIONS = ['Manual', 'Automatic'];
const DRIVETRAINS = ['RWD', 'FWD', 'AWD', '4WD'];
const BODY_STYLES = ['Coupe', 'Sedan', 'Convertible', 'Wagon', 'Hatchback', 'Truck', 'SUV', 'Van', 'Roadster', 'Targa'];

type Step = 'vehicle' | 'details' | 'description' | 'review';

interface UploadedPhoto {
  url: string;
  name: string;
  size: number;
  isHero?: boolean;
}

const STEPS: { key: Step; label: string; icon: React.ReactNode }[] = [
  { key: 'vehicle', label: 'Vehicle', icon: <Car className="w-5 h-5" /> },
  { key: 'details', label: 'Details & Photos', icon: <DollarSign className="w-5 h-5" /> },
  { key: 'description', label: 'Description', icon: <FileText className="w-5 h-5" /> },
  { key: 'review', label: 'Review & Pay', icon: <Send className="w-5 h-5" /> },
];

const inputClass = "w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition bg-white text-stone-900";
const selectClass = `${inputClass} bg-white`;
const labelClass = "block text-sm font-medium text-stone-700 mb-1.5";

export default function SellForm() {
  const [step, setStep] = useState<Step>('vehicle');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);

  const [form, setForm] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
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
    // AI-generated fields
    description: '',
    highlights: [] as string[],
    expertTake: '',
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
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
          year: form.year,
          make: form.make,
          model: form.model,
          trim: form.trim,
          mileage: form.mileage,
          transmission: form.transmission,
          engine: form.engine,
          exteriorColor: form.exteriorColor,
          interiorColor: form.interiorColor,
          bodyStyle: form.bodyStyle,
          sellerNotes: form.sellerNotes,
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
        setSubmitError(data.error || 'AI service unavailable — you can write your own description below.');
      }
    } catch (error) {
      console.error('Failed to generate description:', error);
      setSubmitError('AI service unavailable — you can write your own description below.');
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
          aiDescription: form.description,
          photos: photos.map(p => p.url),
          heroPhoto: photos.find(p => p.isHero)?.url || photos[0]?.url || null,
        }),
      });

      if (!listingRes.ok) {
        throw new Error('Failed to create listing');
      }

      const listingData = await listingRes.json();

      // Step 2: Create Stripe checkout session — pass only short fields (Stripe metadata limit: 500 chars per value)
      const checkoutRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listingId: listingData.listing?.id,
          year: form.year,
          make: form.make,
          model: form.model,
        }),
      });

      if (!checkoutRes.ok) {
        const data = await checkoutRes.json();
        // If Stripe isn't configured, show success anyway (dev mode)
        if (data.error === 'Payment service not configured') {
          window.location.href = '/sell/success?dev=true';
          return;
        }
        throw new Error(data.error || 'Failed to create checkout session');
      }

      const checkoutData = await checkoutRes.json();

      // Step 3: Redirect to Stripe Checkout
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
                  ? 'bg-amber-600 text-white'
                  : i < currentStepIndex
                  ? 'bg-emerald-500 text-white'
                  : 'bg-stone-100 text-stone-400'
              }`}
            >
              {i < currentStepIndex ? <CheckCircle2 className="w-4 h-4" /> : s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`w-8 md:w-16 h-0.5 mx-1 ${i < currentStepIndex ? 'bg-emerald-500' : 'bg-stone-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Vehicle Info */}
      {step === 'vehicle' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-1">Tell us about your car</h2>
            <p className="text-stone-500">The basics — year, make, model.</p>
          </div>

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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Trim / Package</label>
              <input type="text" value={form.trim} onChange={(e) => updateField('trim', e.target.value)} placeholder="S-Code Fastback" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <select value={form.category} onChange={(e) => updateField('category', e.target.value)} className={selectClass}>
                <option value="">Select category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Body Style</label>
              <select value={form.bodyStyle} onChange={(e) => updateField('bodyStyle', e.target.value)} className={selectClass}>
                <option value="">Select body style</option>
                {BODY_STYLES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Engine</label>
              <input type="text" value={form.engine} onChange={(e) => updateField('engine', e.target.value)} placeholder="390ci V8" className={inputClass} />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Details & Photos */}
      {step === 'details' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-1">The specifics</h2>
            <p className="text-stone-500">Mileage, colors, location, price, and photos.</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
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
              <label className={labelClass}>Exterior Color</label>
              <input type="text" value={form.exteriorColor} onChange={(e) => updateField('exteriorColor', e.target.value)} placeholder="Highland Green" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Interior Color</label>
              <input type="text" value={form.interiorColor} onChange={(e) => updateField('interiorColor', e.target.value)} placeholder="Black vinyl" className={inputClass} />
            </div>
          </div>

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
              <label className={labelClass}>ZIP Code</label>
              <input type="text" value={form.zipCode} onChange={(e) => updateField('zipCode', e.target.value)} placeholder="92101" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Asking Price *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-mono text-lg">$</span>
              <input type="number" value={form.price} onChange={(e) => updateField('price', e.target.value)} placeholder="74500" className={`${inputClass} pl-8 font-mono text-lg`} />
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className={labelClass}>Photos</label>
            <PhotoUploader photos={photos} onChange={setPhotos} maxPhotos={20} />
          </div>
        </div>
      )}

      {/* Step 3: Description */}
      {step === 'description' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-1">Tell the story</h2>
            <p className="text-stone-500">Add your notes, then let AI write the listing in an enthusiast&apos;s voice.</p>
          </div>

          <div>
            <label className={labelClass}>Your Notes</label>
            <textarea
              value={form.sellerNotes}
              onChange={(e) => updateField('sellerNotes', e.target.value)}
              rows={4}
              placeholder="Tell us what makes this car special. Recent work done? History you know? Quirks? The more you share, the better the AI description."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            onClick={generateAIDescription}
            disabled={isGenerating || !form.year || !form.make || !form.model}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Writing your listing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate AI Description — Free
              </>
            )}
          </button>

          {submitError && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm">
              {submitError}
            </div>
          )}

          {form.description && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>AI-Generated Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  rows={8}
                  className={`${inputClass} resize-none`}
                />
                <p className="text-xs text-stone-400 mt-1">Feel free to edit — this is your listing.</p>
              </div>

              {form.highlights.length > 0 && (
                <div>
                  <label className={labelClass}>Highlights</label>
                  <div className="space-y-2">
                    {form.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-stone-50 px-4 py-2.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-stone-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {form.expertTake && (
                <div>
                  <label className={labelClass}>Expert Take</label>
                  <div className="bg-amber-50 border-l-4 border-amber-500 px-4 py-3 rounded-r-lg">
                    <p className="text-sm italic text-stone-700">&ldquo;{form.expertTake}&rdquo;</p>
                    <p className="text-xs text-amber-700 mt-1">— Fully Sorted</p>
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
                placeholder="Write your listing description here if you prefer not to use AI..."
                className={`${inputClass} resize-none`}
              />
            </div>
          )}
        </div>
      )}

      {/* Step 4: Review & Pay */}
      {step === 'review' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-1">Review your listing</h2>
            <p className="text-stone-500">Make sure everything looks good, then pay $3.99 to go live.</p>
          </div>

          {/* Vehicle Summary */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-4">
            <h3 className="text-xl font-bold text-stone-900">
              {form.year} {form.make} {form.model} {form.trim}
            </h3>

            {/* Photo Preview */}
            {photos.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {photos.slice(0, 5).map((photo, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={photo.url}
                    src={photo.url}
                    alt={`Photo ${i + 1}`}
                    className="w-24 h-18 object-cover rounded-lg shrink-0"
                  />
                ))}
                {photos.length > 5 && (
                  <div className="w-24 h-18 bg-stone-100 rounded-lg flex items-center justify-center shrink-0 text-stone-500 text-sm font-medium">
                    +{photos.length - 5} more
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-sm">
              {form.mileage && <div><span className="text-stone-400">Mileage:</span> <span className="text-stone-700">{parseInt(form.mileage).toLocaleString()} mi</span></div>}
              {form.transmission && <div><span className="text-stone-400">Transmission:</span> <span className="text-stone-700">{form.transmission}</span></div>}
              {form.engine && <div><span className="text-stone-400">Engine:</span> <span className="text-stone-700">{form.engine}</span></div>}
              {form.drivetrain && <div><span className="text-stone-400">Drivetrain:</span> <span className="text-stone-700">{form.drivetrain}</span></div>}
              {form.exteriorColor && <div><span className="text-stone-400">Exterior:</span> <span className="text-stone-700">{form.exteriorColor}</span></div>}
              {form.interiorColor && <div><span className="text-stone-400">Interior:</span> <span className="text-stone-700">{form.interiorColor}</span></div>}
              {form.city && <div><span className="text-stone-400">Location:</span> <span className="text-stone-700">{form.city}, {form.state}</span></div>}
              {form.category && <div><span className="text-stone-400">Category:</span> <span className="text-stone-700">{form.category}</span></div>}
            </div>

            {form.price && (
              <div className="pt-3 border-t border-stone-100">
                <span className="text-stone-400 text-sm">Asking Price</span>
                <p className="text-2xl font-bold font-mono text-stone-900">${parseInt(form.price).toLocaleString()}</p>
              </div>
            )}
          </div>

          {/* Description Preview */}
          {form.description && (
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <h4 className="font-semibold text-stone-900 mb-2">Description</h4>
              <p className="text-sm text-stone-600 whitespace-pre-line">{form.description}</p>
            </div>
          )}

          {/* Payment Box */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-lg">Listing fee</p>
                <p className="text-stone-300 text-sm">One-time payment. No commissions. No hidden fees. Ever.</p>
              </div>
              <p className="text-3xl font-bold font-mono">$3.99</p>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-xs mb-4">
              <CreditCard className="w-4 h-4" />
              Secure payment via Stripe
            </div>

            {submitError && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 text-red-200 text-sm mb-4">
                {submitError}
              </div>
            )}

            <button
              onClick={handleSubmitAndPay}
              disabled={isSubmitting || !form.year || !form.make || !form.model || !form.price}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit & Pay $3.99
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-200">
        <button
          onClick={goPrev}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 text-stone-400 hover:text-stone-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>

        {currentStepIndex < STEPS.length - 1 && (
          <button
            onClick={goNext}
            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
