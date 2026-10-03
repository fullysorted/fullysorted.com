import Link from "next/link";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";
import { SignupForm } from "@/components/newsletter/SignupForm";

// Column order mirrors the site flow: Services → Marketplace → Research →
// Company. Keep in sync with Header.tsx navEntries and the homepage sections.
const footerLinks = {
  Services: [
    { href: "/services", label: "Services Directory" },
    { href: "/services/guide", label: "Provider Playbook" },
    { href: "/insurance", label: "Collector Car Insurance" },
    { href: "/services/apply", label: "List Your Services" },
  ],
  Marketplace: [
    // Labels match the header exactly — the same destination was called
    // "Browse All Cars" here, "Browse Cars" in the header and "Browse" in the
    // mobile bar, which reads as three different places.
    { href: "/browse", label: "Browse Cars" },
    { href: "/sell", label: "Sell a Car" },
    { href: "/wanted", label: "Wanted Board" },
    { href: "/parts", label: "Parts and Memorabilia" },
    { href: "/pricing", label: "Fees" },
    { href: "/shop", label: "Shop" },
  ],
  Research: [
    { href: "/research/models", label: "Model Histories" },
    // With the guide hidden the crowdsource form takes its slot — it is the one
    // live path that actually grows the comp set, so it must stay reachable.
    ...(VALUE_GUIDE_PUBLIC
      ? [{ href: "/value-guide", label: "Value Guide" }]
      : [{ href: "/submit-sale", label: "Report a Sale" }]),
    { href: "/research/compare", label: "Compare Models" },
    { href: "/vin", label: "VIN Decoder" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
    { href: "/trust", label: "Trust & Safety" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

// Plain factual assurances shown site-wide in the footer. Deliberately NOT
// "trust badges" — no stamp of approval, nothing we cannot point at.
// "Secure payments by Stripe" was removed: it appeared on every page while
// card payment only applies to fixed-price gigs from providers who have
// completed payouts setup, which implied the whole site takes your money.
// 2026-10-02: the badge row (SSL, flat fees, $0 buyer's premium) read as
// generic e-commerce chrome, and "buyer's premium" is auction vocabulary.
// Two plain facts instead, both true on every page.
const assurances = [
  { label: "Private sellers and dealers, marked as which" },
  { label: "Shops can answer a review, never remove one" },
];

const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

export function Footer() {
  return (
    <footer style={{ background: "#12352A", color: "#F5EFE6" }}>
      {/* Top accent line, matching the header hairline */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #1C8C87 35%, #F2B27A 65%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        {/* Signup. Quiet, on every page, never in the way. */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center pb-12 mb-12" style={{ borderBottom: "1px solid rgba(245,239,230,0.12)" }}>
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase mb-2" style={{ color: "#F2B27A", fontFamily: MONO, letterSpacing: "0.12em" }}>The short list</p>
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight" style={{ color: "#F5EFE6" }}>New cars and new shops, near you.</h2>
            <p className="text-sm mt-2" style={{ color: "rgba(245,239,230,0.62)" }}>A short email when there&apos;s something worth your time.</p>
          </div>
          <div className="lg:col-span-7">
            <SignupForm variant="footer" source="footer" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              {/* Badge + cream wordmark, footer is always dark */}
              <img
                src="/fullysorted-lockup-cream.svg"
                alt="Fully Sorted"
                width={166}
                height={32}
                style={{ height: 32, width: "auto" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(245,239,230,0.62)" }}>
              The collector car services network, marketplace and research hub.
              Know it. Fix it. Buy it. Sell it.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-xs" style={{ color: "rgba(245,239,230,0.42)" }}>
                San Diego, CA
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-[11px] uppercase mb-4"
                style={{ color: "#F2B27A", fontFamily: MONO, letterSpacing: "0.12em" }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(245,239,230,0.62)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          style={{ borderTop: "1px solid rgba(245,239,230,0.12)" }}
        >
          {assurances.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 text-xs font-medium"
              style={{ color: "rgba(245,239,230,0.7)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z"
                  stroke="#1C8C87"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M8.5 12l2.5 2.5L15.5 10" stroke="#1C8C87" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b.label}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(245,239,230,0.12)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,239,230,0.42)" }}>
            &copy; {new Date().getFullYear()} Fully Sorted. All rights reserved. &nbsp;·&nbsp;{" "}
            <Link href="/privacy#your-choices" className="hover:text-white transition-colors" style={{ color: "rgba(245,239,230,0.42)" }}>
              Do Not Sell or Share My Personal Information
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/fully.sorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(245,239,230,0.5)" }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/fullysorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(245,239,230,0.5)" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
