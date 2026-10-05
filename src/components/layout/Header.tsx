"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FOR_SALE_HUB, FOR_SALE_SECTIONS, WANTED_LINK } from "@/lib/for-sale";
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
//
// 2026-10-02: Browse Cars and Parts and Memorabilia merged into one "For
// Sale" entry (Chris). It is the one menu with a dropdown, and only for
// visitor destinations: Cars, Parts, Memorabilia, Projects, plus Wanted. The
// word itself links to the /for-sale hub, so a tap on a touch screen still
// lands somewhere useful and nothing is reachable only through the panel.
type NavEntry = { href: string; label: string; short?: string; forSale?: boolean };

const navEntries: NavEntry[] = [
  { href: "/services", label: "Services" },
  { href: FOR_SALE_HUB.href, label: FOR_SALE_HUB.label, forSale: true },
  { href: "/research/models", label: "Research" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

const NAV_LINK =
  "px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors whitespace-nowrap";

// The supply side in one place (2026-10-03): shops kept missing where to list
// a service, because the only header way in was "Sell a Car". Shop or service
// comes first; that is who could not find it.
const LIST_ITEMS = [
  { href: "/services/apply", label: "Your shop or service", blurb: "Get your business in the directory. Free for the first 500." },
  { href: "/sell", label: "A car", blurb: "Private sellers and dealers, one fee, paid once." },
  { href: "/parts/new", label: "A part, memorabilia or artwork", blurb: "Up for 90 days." },
];

function ListMenu() {
  return (
    <div className="relative group">
      <button type="button" className={`${NAV_LINK} inline-flex items-center gap-1`} aria-haspopup="true">
        List or sell
        <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
        <div className="w-80 rounded-2xl bg-white p-2 shadow-[0_24px_48px_-16px_rgba(18,53,42,0.28)]" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
          {LIST_ITEMS.map((i) => (
            <Link key={i.href} href={i.href} className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors">
              <span className="block text-sm font-semibold text-foreground">{i.label}</span>
              <span className="block text-xs text-text-secondary mt-0.5 leading-snug">{i.blurb}</span>
            </Link>
          ))}
          <div className="border-t border-border my-1.5 mx-3" />
          <Link href="/pricing" className="block px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground">
            How fees work
          </Link>
        </div>
      </div>
    </div>
  );
}

function ForSaleMenu() {
  return (
    <div className="relative group">
      <Link href={FOR_SALE_HUB.href} className={`${NAV_LINK} inline-flex items-center gap-1`} aria-haspopup="true">
        {FOR_SALE_HUB.label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>
      {/* Opens on hover and on keyboard focus. pt-2 bridges the gap so the
          pointer can travel from the word to the panel without it closing. */}
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
        <div className="w-80 rounded-2xl bg-white p-2 shadow-[0_24px_48px_-16px_rgba(18,53,42,0.28)]" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
          {FOR_SALE_SECTIONS.map((s) => (
            <Link key={s.key} href={s.href} className="block rounded-xl px-3 py-2.5 hover:bg-surface transition-colors">
              <span className="block text-sm font-semibold text-foreground">{s.label}</span>
              <span className="block text-xs text-text-secondary mt-0.5 leading-snug">{s.blurb}</span>
            </Link>
          ))}
          <div className="border-t border-border my-1.5 mx-3" />
          <div className="flex items-center justify-between px-3 py-2">
            <Link href={WANTED_LINK.href} className="text-sm font-semibold text-accent hover:underline underline-offset-4">
              {WANTED_LINK.label} board
            </Link>
            <Link href={FOR_SALE_HUB.href} className="text-sm font-medium text-text-secondary hover:text-foreground">
              Everything for sale
            </Link>
          </div>
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
              src="/fullysorted-lockup.svg"
              alt="Fully Sorted"
              width={207}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navEntries.map((entry) => entry.forSale ? (
              <ForSaleMenu key={entry.href} />
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                className={NAV_LINK}
              >
                {entry.short ? (
                  <>
                    <span className="xl:hidden">{entry.short}</span>
                    <span className="hidden xl:inline">{entry.label}</span>
                  </>
                ) : (
                  entry.label
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ListMenu />
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
            <div key={entry.href}>
              <Link
                href={entry.href}
                onClick={close}
                className="block px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                {entry.label}
              </Link>
              {entry.forSale && (
                <div className="ml-4 pl-3 mb-1 border-l border-border flex flex-col">
                  {[...FOR_SALE_SECTIONS, { key: "wanted", href: WANTED_LINK.href, label: WANTED_LINK.label }].map((s) => (
                    <Link
                      key={s.key}
                      href={s.href}
                      onClick={close}
                      className="px-3 py-2 text-base text-text-secondary rounded-lg hover:bg-surface hover:text-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
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
          <p className="px-4 pt-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">List or sell</p>
          {LIST_ITEMS.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={close}
              className="px-4 py-3 text-base font-medium text-foreground rounded-xl border border-border hover:bg-surface transition-colors"
            >
              {i.label}
            </Link>
          ))}
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
