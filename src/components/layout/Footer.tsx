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
    { href: "/events", label: "Events" },
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
    <footer className="hidden md:block bg-foreground text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <span className="text-lg font-bold text-white">Fully Sorted</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              The first automotive services hub designed specifically for collector
              cars and the passionate owners who cherish them.
            </p>
            <p className="text-sm text-white/60">
              Built by enthusiasts, for enthusiasts.
            </p>
            <p className="text-sm text-white/40 mt-4">San Diego, CA</p>
            <p className="text-sm text-white/40">(619) 823-2132</p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
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
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Fully Sorted. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/fully.sorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/fullysorted/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
