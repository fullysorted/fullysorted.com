import Link from "next/link";

const footerLinks = {
  Marketplace: [
    { href: "/browse", label: "Browse All Cars" },
    { href: "/browse?category=muscle", label: "Muscle Cars" },
    { href: "/browse?category=european", label: "European" },
    { href: "/browse?category=jdm", label: "JDM" },
    { href: "/sell", label: "Sell a Car" },
  ],
  Resources: [
    { href: "/value-guide", label: "Value Guide" },
    { href: "/research", label: "Market Research" },
    { href: "/services", label: "Services Directory" },
  ],
  Company: [
    { href: "/about", label: "About Chris" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#0f0e08" }}>
      {/* Top accent line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #E8722A 30%, #6ab04c 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-4">
              {/* Logo is white — footer is always dark so no invert needed */}
              <img
                src="/fs-text-logo.svg"
                alt="Fully Sorted"
                style={{ height: 28, width: "auto", maxWidth: 160 }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.38)" }}>
              The collector car services hub and marketplace built by enthusiasts,
              for enthusiasts.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
                San Diego, CA
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
                (619) 823-2132
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#E8722A" }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            &copy; {new Date().getFullYear()} Fully Sorted. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/fully.sorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/fullysorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
