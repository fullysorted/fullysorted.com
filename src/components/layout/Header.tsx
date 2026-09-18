"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";

// THE SITE FLOW, left to right: Services (the hub) -> Marketplace -> Research.
// Keep this order in sync with the homepage sections (src/app/page.tsx), the
// footer columns, and /how-it-works.
//
// The bar is deliberately flat: five words, no dropdowns. The old menus mixed
// visitor destinations with provider pages and a flagged-off gig store, and
// "Market Analysis" pointed at the same page as its own parent. Everything
// they held now lives one level down where it belongs: the Research tools sit
// in the ResearchNav band on every research surface, provider entry points sit
// on /services and in the footer, and Events lives in the footer until it
// earns a bar slot back.
type NavEntry = { href: string; label: string };

const navEntries: NavEntry[] = [
  { href: "/services", label: "Services" },
  { href: "/browse", label: "Browse Cars" },
  { href: "/research/models", label: "Research" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();
  const close = () => setMobileMenuOpen(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      {/* Teal-to-apricot accent hairline (build-sheet palette) */}
      <div
        aria-hidden
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #1C8C87 35%, #F2B27A 65%, transparent)",
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
            {navEntries.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                {entry.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
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
                  href="/stable"
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
                >
                  The Stable
                </Link>
                <Link
                  href="/account"
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
                >
                  Account
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
          {navEntries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              onClick={close}
              className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
            >
              {entry.label}
            </Link>
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
                href="/stable"
                onClick={close}
                className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                The Stable
              </Link>
              <Link
                href="/account"
                onClick={close}
                className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                Account
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
