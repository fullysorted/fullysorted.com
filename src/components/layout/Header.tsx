"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";

// "Research" unifies the encyclopedia and the market/valuation tools under one
// entry — the strategy's "encyclopedia ↔ market, unified" wedge — instead of
// exposing "Value Guide" and "Research" as two look-alike top-level tabs.
type NavItem = { href: string; label: string; desc: string; divider?: boolean };
type NavMenu = { label: string; items: NavItem[] };

// Order mirrors how an owner actually uses the area: what is this car, what is
// it worth, how does it compare, verify the VIN, then the wider market.
// NOTE: "Model Encyclopedia" used to point at /research — the editorial desk —
// while the actual model histories sat unlinked at /research/models. Every
// entry below now points where its label says.
const researchMenu: NavMenu = {
  label: "Research",
  items: [
    { href: "/research/models", label: "Model Histories", desc: "Cited history, specs & production, model by model" },
    ...(VALUE_GUIDE_PUBLIC
      ? [{ href: "/value-guide", label: "Value Guide", desc: "What any collector car is worth: real sold-price comps" }]
      : []),
    { href: "/research/compare", label: "Compare Models", desc: "Two cars head to head: rarity, value & specs" },
    { href: "/vin", label: "VIN Decoder", desc: "Decode any 1981+ VIN: specs & open recalls" },
    { href: "/research", label: "Market Analysis", desc: "Segment prices & written market analysis", divider: true },
  ],
};

// "Services" is the lead product — the hub is the front door, so it sits first
// in the bar. Following Upwork/Fiverr: never expose browse-vs-hire as rival
// top-level tabs — nest them under one entry, differentiated by transaction
// model.
const servicesMenu: NavMenu = {
  label: "Services",
  items: [
    { href: "/services", label: "Services directory", desc: "Find a specialist business, request a quote" },
    { href: "/gigs", label: "Fixed-price gigs", desc: "Upfront-priced service packages, opening soon" },
    { href: "/services/guide", label: "Provider playbook", desc: "How to get booked, tailored by trade" },
    { href: "/services/apply", label: "List your services", desc: "Become a provider on Fully Sorted", divider: true },
  ],
};

// THE SITE FLOW, left to right: Services (the hub) → Marketplace → Research.
// Keep this order in sync with the homepage sections (src/app/page.tsx), the
// footer columns, and /how-it-works. Everything after Research is a trailing
// secondary destination.
type NavEntry =
  | { kind: "link"; href: string; label: string }
  | { kind: "menu"; label: string; items: NavItem[] };

const navEntries: NavEntry[] = [
  { kind: "menu", ...servicesMenu },
  { kind: "link", href: "/browse", label: "Browse Cars" },
  { kind: "menu", ...researchMenu },
  { kind: "link", href: "/shop", label: "Shop" },
  { kind: "link", href: "/events", label: "Events" },
  { kind: "link", href: "/about", label: "About" },
];

type DropdownItem = { href: string; label: string; desc: string; divider?: boolean };

/**
 * Hover/focus dropdown that actually closes after you pick something. The
 * header persists across client-side navigation, so the clicked link kept
 * focus (focus-within held the menu open) and the cursor was still over the
 * panel (hover held it open). On click we blur the link and suppress the
 * open state until the pointer leaves the trigger.
 */
function DesktopDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [suppressed, setSuppressed] = useState(false);
  const open = suppressed
    ? ""
    : "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0";
  return (
    <div className="relative group" onMouseLeave={() => setSuppressed(false)}>
      <button
        type="button"
        className="px-3 py-2 text-sm font-medium text-text-secondary group-hover:text-foreground group-focus-within:text-foreground rounded-lg group-hover:bg-surface transition-colors inline-flex items-center gap-1"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${suppressed ? "" : "group-hover:rotate-180"}`} />
      </button>
      <div className={`absolute left-0 top-full pt-2 w-72 opacity-0 invisible translate-y-1 ${open} transition-all duration-150 z-50`}>
        <div className="rounded-xl bg-white border border-border shadow-[0_16px_40px_-16px_rgba(26,26,24,0.28)] p-2">
          {items.map((it) => (
            <div key={it.href}>
              {it.divider && <div className="border-t border-border my-1.5" />}
              <Link
                href={it.href}
                className="block px-3 py-2 rounded-lg hover:bg-surface transition-colors"
                onClick={(e) => {
                  e.currentTarget.blur();
                  setSuppressed(true);
                }}
              >
                <p className="text-sm font-semibold text-foreground">{it.label}</p>
                <p className="text-xs text-text-secondary mt-0.5">{it.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();
  const close = () => setMobileMenuOpen(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      {/* Signature tricolor accent hairline */}
      <div
        aria-hidden
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #1E6091 35%, #B08D3F 65%, transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/fullysorted-logo.svg"
              alt="Fully Sorted"
              width={178}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services → Browse Cars → Research → trailing links */}
            {navEntries.map((entry) => entry.kind === "link" ? (
              <Link
                key={entry.href}
                href={entry.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                {entry.label}
              </Link>
            ) : (
              <DesktopDropdown key={entry.label} label={entry.label} items={entry.items} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-surface transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/sell"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
            >
              Sell a Car
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(30,96,145,0.55)] transition-all duration-200"
            >
              Find a Pro
            </Link>

            {/* Auth */}
            {isLoaded && isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/orders"
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
                >
                  My Orders
                </Link>
                <Link
                  href="/dashboard/provider"
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </div>
            ) : isLoaded ? (
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-light transition-colors">
                  Sign In
                </button>
              </SignInButton>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-surface transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    </header>
      {/* Mobile Menu Overlay — rendered OUTSIDE <header> so position:fixed
          resolves to the viewport. The header's backdrop-blur creates a
          containing block that would otherwise trap this fixed overlay. */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 overflow-y-auto transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <nav className="flex flex-col p-6 gap-2">
          {/* Same flow as desktop: Services → Browse Cars → Research → rest */}
          {navEntries.map((entry) => entry.kind === "link" ? (
            <Link
              key={entry.href}
              href={entry.href}
              onClick={close}
              className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
            >
              {entry.label}
            </Link>
          ) : (
            <div key={entry.label}>
              <p className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-text-secondary">{entry.label}</p>
              {entry.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={close}
                  className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors block"
                >
                  {it.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2" />
            </div>
          ))}

          <div className="border-t border-border my-4" />
          <Link
            href="/services"
            onClick={close}
            className="px-4 py-3 text-lg font-semibold text-center bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors"
          >
            Find a Pro
          </Link>
          <Link
            href="/sell"
            onClick={close}
            className="px-4 py-3 text-lg font-medium text-center text-foreground rounded-xl border border-border hover:bg-surface transition-colors"
          >
            Sell a Car
          </Link>
          {isLoaded && !isSignedIn && (
            <SignInButton mode="modal">
              <button
                onClick={close}
                className="px-4 py-3 text-lg font-medium text-center text-accent rounded-xl border border-accent hover:bg-accent-light transition-colors"
              >
                Sign In
              </button>
            </SignInButton>
          )}
          {isLoaded && isSignedIn && (
            <>
              <Link
                href="/orders"
                onClick={close}
                className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                My Orders
              </Link>
              <Link
                href="/dashboard/provider"
                onClick={close}
                className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                Dashboard
              </Link>
              <div className="flex items-center justify-center px-4 py-3">
                <UserButton />
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
