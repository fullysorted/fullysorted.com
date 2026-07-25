"use client";

import { useState } from "react";
import { CheckCircle, Mail } from "lucide-react";

export function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "General Question", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState<string | null>(null);

  const inputStyle = {
    border: "1.5px solid rgba(0,0,0,0.12)",
    background: "#faf9f7",
    color: "#1a1a18",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setError("Name, email, and message are required.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        return;
      }
      if (data?.undelivered && data?.mailto) {
        // Nothing reached us — hand the message back rather than losing it.
        setMailto(data.mailto);
        setStatus("error");
        setError(data.error);
        return;
      }
      setStatus("error");
      setError(data?.error || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server — check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-6 sm:p-8 border flex flex-col items-center justify-center text-center gap-4 min-h-[320px]"
        style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(106,176,76,0.12)" }}>
          <CheckCircle className="w-7 h-7" style={{ color: "#6ab04c" }} />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1" style={{ color: "#1a1a18" }}>Message sent</h3>
          <p className="text-sm" style={{ color: "#6b6b5e" }}>
            Chris will be in touch within a few hours. Thanks for reaching out.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
      <h2 className="font-bold text-xl mb-1" style={{ color: "#1a1a18" }}>Send a Message</h2>
      <p className="text-sm mb-6" style={{ color: "#6b6b5e" }}>Usually a response within a few hours.</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6b6b5e" }}>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            className="w-full h-11 px-4 text-sm rounded-lg outline-none focus:ring-2 focus:ring-accent-light focus:border-accent transition-colors"
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6b6b5e" }}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            className="w-full h-11 px-4 text-sm rounded-lg outline-none focus:ring-2 focus:ring-accent-light focus:border-accent transition-colors"
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6b6b5e" }}>Subject</label>
          <select
            value={fields.subject}
            onChange={e => setFields(f => ({ ...f, subject: e.target.value }))}
            className="w-full h-11 px-4 text-sm rounded-lg outline-none focus:ring-2 focus:ring-accent-light transition-colors"
            style={inputStyle}
          >
            <option>General Question</option>
            <option>Listing Inquiry</option>
            <option>Valuation Request</option>
            <option>Service Recommendation</option>
            <option>Partnership</option>
            <option>Press / Media</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6b6b5e" }}>Message</label>
          <textarea
            rows={5}
            placeholder="What's on your mind?"
            value={fields.message}
            onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
            className="w-full px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-accent-light focus:border-accent transition-colors resize-none"
            style={inputStyle}
            required
          />
        </div>

        {error && (
          <div
            className="rounded-xl px-3.5 py-3"
            style={{
              background: mailto ? "rgba(176,141,63,0.10)" : "rgba(220,38,38,0.07)",
              border: `1px solid ${mailto ? "rgba(176,141,63,0.28)" : "rgba(220,38,38,0.2)"}`,
            }}
          >
            <p className="text-sm" style={{ color: mailto ? "#8a6d1f" : "#b91c1c" }}>{error}</p>
            {mailto && (
              <a
                href={mailto}
                className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg"
                style={{ background: "#1E6091" }}
              >
                <Mail className="w-4 h-4" /> Open email with your message
              </a>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full h-11 text-sm font-bold rounded-lg bg-accent hover:bg-accent-hover transition-colors text-white disabled:opacity-60 shine"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
