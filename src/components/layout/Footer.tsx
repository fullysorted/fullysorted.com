import Link from "next/link";

const footerLinks = {
  Research: [
    { href: "/value-guide", label: "Value Guide" },
    { href: "/research", label: "Model Encyclopedia" },
    { href: "/research/models", label: "Model Directory" },
    { href: "/vin", label: "VIN Decoder" },
  ],
  "Hire a Pro": [
    { href: "/gigs", label: "Fixed-price Gigs" },
    { href: "/services", label: "Services Directory" },
    { href: "/services/guide", label: "Provider Playbook" },
    { href: "/services/apply", label: "List Your Services" },
  ],
  Marketplace: [
    { href: "/browse", label: "Browse All Cars" },
    { href: "/browse?category=muscle", label: "Muscle Cars" },
    { href: "/browse?category=european", label: "European" },
    { href: "/sell", label: "Sell a Car" },
    { href: "/shop", label: "Garage Essentials" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/trust", label: "Trust & Safety" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

// Trust signals shown site-wide in the footer.
const trustBadges = [
  { label: "Secure payments by Stripe" },
  { label: "256-bit SSL encrypted" },
  { label: "Rated by real owners" },
  { label: "$0 buyer's premium" },
];

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #10233b 0%, #0b1a2e 100%)" }}>
      {/* Top accent line — signature tricolor, matching the header hairline */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #1E6091 35%, #B08D3F 65%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              {/* Cream wordmark variant — footer is always dark */}
              <img
                src="/fullysorted-logo-cream.svg"
                alt="Fully Sorted"
                style={{ height: 28, width: "auto", maxWidth: 160 }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(230,238,247,0.55)" }}>
              The collector car research hub, marketplace, and services network —
              built by enthusiasts, for enthusiasts.
            </p>
            {/* Tricolor motif */}
            <div className="flex items-center gap-1.5 mt-4" aria-hidden>
              <span className="w-2 h-2" style={{ background: "#6ab04c" }} />
              <span className="w-2 h-2" style={{ background: "#1E6091" }} />
              <span className="w-2 h-2" style={{ background: "#B08D3F" }} />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-xs" style={{ color: "rgba(230,238,247,0.38)" }}>
                San Diego, CA
              </p>
              <p className="text-xs" style={{ color: "rgba(230,238,247,0.38)" }}>
                (619) 823-2132
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#C6A85C" }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(230,238,247,0.55)" }}
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {trustBadges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 text-xs font-medium"
              style={{ color: "rgba(230,238,247,0.6)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z"
                  stroke="#6ab04c"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M8.5 12l2.5 2.5L15.5 10" stroke="#6ab04c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b.label}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(230,238,247,0.38)" }}>
            &copy; {new Date().getFullYear()} Fully Sorted. All rights reserved. &nbsp;·&nbsp;{" "}
            <Link href="/privacy" className="hover:text-white transition-colors" style={{ color: "rgba(230,238,247,0.38)" }}>
              Do Not Sell My Info
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/fully.sorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(230,238,247,0.45)" }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/fullysorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(230,238,247,0.45)" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
