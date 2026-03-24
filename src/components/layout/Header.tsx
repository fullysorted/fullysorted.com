"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Only import Clerk when publishable key is configured
const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

let useAuth: (() => { isSignedIn: boolean | undefined; isLoaded: boolean }) | null = null;
let UserButton: React.ComponentType<any> | null = null;
let SignInButton: React.ComponentType<any> | null = null;

if (clerkEnabled) {
  try {
    const clerk = require("@clerk/nextjs");
    useAuth = clerk.useAuth;
    UserButton = clerk.UserButton;
    SignInButton = clerk.SignInButton;
  } catch {
    // Clerk not available
  }
}

const navLinks = [
  { href: "/browse", label: "Browse" },
  { href: "/value-guide", label: "Value Guide" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use Clerk auth if available, otherwise default to not signed in
  let isSignedIn: boolean | undefined = false;
  let isLoaded = true;
  if (useAuth) {
    try {
      const auth = useAuth();
      isSignedIn = auth.isSignedIn;
      isLoaded = auth.isLoaded;
    } catch {
      // ClerkProvider not mounted
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Fully Sorted"
              width={140}
              height={42}
              priority
              className="h-9 w-auto"
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
            {isLoaded && isSignedIn && UserButton ? (
              <UserButton
                signInUrl="/sign-in"
                appearance={{
                  elements: {
                    avatarBox: 'w-8 h-8',
                  },
                }}
              />
            ) : isLoaded && SignInButton ? (
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
          "md:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ease-in-out shadow-lg",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <nav className="flex flex-col p-6 gap-2" style={{ backgroundColor: '#FFFFFF' }}>
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
          {isLoaded && !isSignedIn && SignInButton && (
            <SignInButton mode="modal">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium text-center text-accent rounded-xl border border-accent hover:bg-amber-50 transition-colors"
              >
                Sign In
              </button>
            </SignInButton>
          )}
          {isLoaded && isSignedIn && UserButton && (
            <div className="flex items-center justify-center px-4 py-3">
              <UserButton signInUrl="/sign-in" />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
