"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";

const navLinks = [
  { href: "/browse", label: "Browse" },
  { href: "/value-guide", label: "Value Guide" },
  { href: "/research", label: "Research" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/fullysorted-logo.svg"
              alt="Fully Sorted"
              width={160}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                {link.label}
              </Link>
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
              className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              Sell a Car
            </Link>

            {/* Auth */}
            {isLoaded && isSignedIn ? (
              <div className="flex items-center gap-3">
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
                <button className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-amber-50 transition-colors">
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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border my-4" />
          <Link
            href="/sell"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-lg font-semibold text-center bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors"
          >
            Sell a Car
          </Link>
          {isLoaded && !isSignedIn && (
            <SignInButton mode="modal">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium text-center text-accent rounded-xl border border-accent hover:bg-amber-50 transition-colors"
              >
                Sign In
              </button>
            </SignInButton>
          )}
          {isLoaded && isSignedIn && (
            <>
              <Link
                href="/dashboard/provider"
                onClick={() => setMobileMenuOpen(false)}
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
    </header>
  );
}
