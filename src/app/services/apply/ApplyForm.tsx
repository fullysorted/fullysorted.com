"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { trackMetaEvent } from "@/components/analytics/MetaPixel";

const CATEGORIES = [
  { value: "detailing", label: "Detailing & Paint Correction" },
  { value: "mechanical", label: "Mechanical & Repair" },
  { value: "restoration", label: "Restoration" },
  { value: "transport", label: "Transport & Shipping" },
  { value: "inspection", label: "Pre-Purchase Inspection" },
  { value: "body-paint", label: "Body Work & Paint" },
  { value: "storage", label: "Storage" },
  { value: "photography", label: "Automotive Photography" },
  { value: "financing", label: "Financing & Insurance" },
  { value: "other", label: "Other" },
];

const fieldClass =
  "w-full px-4 py-3 text-sm rounded-xl outline-none transition-colors";
const fieldStyle = {
  border: "1.5px solid rgba(0,0,0,0.12)",
  background: "#fff",
  color: "#1a1a18",
};
const labelClass = "block text-xs font-bold uppercase tracking-wider mb-1.5";
const labelStyle = { color: "#6b6b5e" };

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    category: "",
    location: "",
    phone: "",
    email: "",
    website: "",
    instagram: "",
    yearsInBusiness: "",
    specialties: "",
    idealClient: "",
    whyList: "",
    referredBy: "",
  });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/apply-provider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");
      trackMetaEvent("Lead", { content_category: "provider_application", value: 0, currency: "USD" });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at chris@fullysorted.com.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center border"
        style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "rgba(232,114,42,0.1)" }}
        >
          <CheckCircle className="w-7 h-7" style={{ color: "#E8722A" }} />
        </div>
        <h2 className="text-2xl font-black mb-2" style={{ color: "#1a1a18" }}>
          Application received.
        </h2>
        <p className="text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "#6b6b5e" }}>
          We review every application personally. If your work is a good fit,
          you&apos;ll hear from us within 3–5 business days with next steps.
        </p>
        <p className="mt-4 text-sm font-semibold" style={{ color: "#E8722A" }}>
          — The Fully Sorted Team
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 border space-y-6"
      style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
    >
      <div>
        <h2 className="text-xl font-black mb-1" style={{ color: "#1a1a18" }}>
          Tell us about your business
        </h2>
        <p className="text-sm" style={{ color: "#9a9a8a" }}>
          Takes about 5 minutes. We read every application ourselves.
        </p>
      </div>

      {/* Business basics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} style={labelStyle}>Business Name *</label>
          <input
            required
            type="text"
            placeholder="Your shop or business name"
            className={fieldClass}
            style={fieldStyle}
            value={form.businessName}
            onChange={set("businessName")}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Your Name *</label>
          <input
            required
            type="text"
            placeholder="Owner or primary contact"
            className={fieldClass}
            style={fieldStyle}
            value={form.ownerName}
            onChange={set("ownerName")}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>Category *</label>
        <select
          required
          className={fieldClass}
          style={fieldStyle}
          value={form.category}
          onChange={set("category")}
        >
          <option value="">Select your primary service category</option>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} style={labelStyle}>Location *</label>
          <input
            required
            type="text"
            placeholder="City, State (e.g. San Diego, CA)"
            className={fieldClass}
            style={fieldStyle}
            value={form.location}
            onChange={set("location")}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Years in Business</label>
          <input
            type="text"
            placeholder="e.g. 12 years"
            className={fieldClass}
            style={fieldStyle}
            value={form.yearsInBusiness}
            onChange={set("yearsInBusiness")}
          />
        </div>
      </div>

      {/* Contact */}
      <div
        className="pt-5"
        style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
      >
        <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#9a9a8a" }}>
          Contact & Links
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>Email *</label>
            <input
              required
              type="email"
              placeholder="you@yourbusiness.com"
              className={fieldClass}
              style={fieldStyle}
              value={form.email}
              onChange={set("email")}
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Phone</label>
            <input
              type="tel"
              placeholder="(619) 555-0100"
              className={fieldClass}
              style={fieldStyle}
              value={form.phone}
              onChange={set("phone")}
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Website</label>
            <input
              type="url"
              placeholder="https://yourbusiness.com"
              className={fieldClass}
              style={fieldStyle}
              value={form.website}
              onChange={set("website")}
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Instagram</label>
            <input
              type="text"
              placeholder="@yourbusiness"
              className={fieldClass}
              style={fieldStyle}
              value={form.instagram}
              onChange={set("instagram")}
            />
          </div>
        </div>
      </div>

      {/* About the work */}
      <div
        className="pt-5 space-y-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
      >
        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#9a9a8a" }}>
          About Your Work
        </p>

        <div>
          <label className={labelClass} style={labelStyle}>
            What do you specialize in? *
          </label>
          <textarea
            required
            rows={3}
            placeholder="Be specific — e.g. 'paint correction and ceramic coating for concours-level prep, primarily European classics and air-cooled Porsche'"
            className={fieldClass}
            style={{ ...fieldStyle, resize: "none" }}
            value={form.specialties}
            onChange={set("specialties")}
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Who is your ideal client?
          </label>
          <textarea
            rows={2}
            placeholder="Describe the car owner who is the perfect fit for what you do"
            className={fieldClass}
            style={{ ...fieldStyle, resize: "none" }}
            value={form.idealClient}
            onChange={set("idealClient")}
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Why do you want to be listed on Fully Sorted?
          </label>
          <textarea
            rows={2}
            placeholder="What are you hoping to get out of this? (optional but helpful)"
            className={fieldClass}
            style={{ ...fieldStyle, resize: "none" }}
            value={form.whyList}
            onChange={set("whyList")}
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>How did you hear about us?</label>
          <input
            type="text"
            placeholder="Referral, Instagram, car event, Google..."
            className={fieldClass}
            style={fieldStyle}
            value={form.referredBy}
            onChange={set("referredBy")}
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full h-12 text-sm font-bold rounded-xl text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-80 disabled:opacity-60"
        style={{ background: "#E8722A" }}
      >
        {submitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
        ) : (
          <><Send className="w-4 h-4" /> Submit Application</>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "#9a9a8a" }}>
        We review every application personally. Not everything is a fit — but if it is,
        you&apos;ll hear from us within 3–5 business days.
      </p>
    </form>
  );
}
