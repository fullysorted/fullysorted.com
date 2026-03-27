import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Fully Sorted",
  description:
    "Get in touch with Chris Peterson and the Fully Sorted team. Questions about listings, valuations, or just want to talk cars — we're here.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Light header banner */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#E8722A" }}
          >
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "#1a1a18" }}>
            We read every message
            <br />
            <span style={{ color: "#E8722A" }}>ourselves.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6b6b5e" }}>
            Whether you have a question about a listing, need help with a
            valuation, or just want to talk cars — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <h2 className="font-bold text-xl mb-1" style={{ color: "#1a1a18" }}>
              Send a Message
            </h2>
            <p className="text-sm mb-6" style={{ color: "#6b6b5e" }}>
              Usually a response within a few hours.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: "#6b6b5e" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-11 px-4 text-sm rounded-lg outline-none transition-colors"
                  style={{
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    background: "#faf9f7",
                    color: "#1a1a18",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: "#6b6b5e" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-11 px-4 text-sm rounded-lg outline-none transition-colors"
                  style={{
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    background: "#faf9f7",
                    color: "#1a1a18",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: "#6b6b5e" }}
                >
                  Subject
                </label>
                <select
                  className="w-full h-11 px-4 text-sm rounded-lg outline-none transition-colors"
                  style={{
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    background: "#faf9f7",
                    color: "#1a1a18",
                  }}
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
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: "#6b6b5e" }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-colors resize-none"
                  style={{
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    background: "#faf9f7",
                    color: "#1a1a18",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 text-sm font-bold rounded-lg transition-colors text-white"
                style={{ background: "#E8722A" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="space-y-5">

            {/* Direct contact */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
            >
              <h2 className="font-bold text-lg mb-5" style={{ color: "#1a1a18" }}>
                Direct Contact
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "San Diego, California",
                    href: null,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(619) 823-2132",
                    href: "tel:+16198232132",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "chris@fullysorted.com",
                    href: "mailto:chris@fullysorted.com",
                  },
                  {
                    icon: Clock,
                    label: "Response Time",
                    value: "Usually within a few hours. I read every message myself.",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(232,114,42,0.1)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#E8722A" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#9a9a8a" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium mt-0.5 block hover:underline"
                          style={{ color: "#E8722A" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm mt-0.5" style={{ color: "#3a3a30" }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
            >
              <h2 className="font-bold text-lg mb-1" style={{ color: "#1a1a18" }}>Follow Along</h2>
              <p className="text-sm mb-5" style={{ color: "#6b6b5e" }}>
                Car photos, market takes, and San Diego life.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/fully.sorted/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: "#E8722A" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Instagram — @fully.sorted
                </a>
                <a
                  href="https://www.facebook.com/fullysorted/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: "#E8722A" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Facebook — @fullysorted
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
