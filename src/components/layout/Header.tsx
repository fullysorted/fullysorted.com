"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 transition-colors bg-white border-b border-stone-200 backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* brightness(0) forces all channels to black — more reliable than invert on SVG-filtered images */}
            <img
              src="/fs-text-logo.svg"
              alt="Fully Sorted"
              className="h-8 w-auto"
              style={{ maxWidth: 180, filter: "brightness(0)" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    active
                      ? "text-stone-900 font-semibold bg-stone-100"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/sell"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#E8722A" }}
            >
              Sell a Car
            </Link>

            {/* Auth */}
            {isLoaded && isSignedIn && UserButton ? (
              <UserButton
                signInUrl="/sign-in"
                appearance={{ elements: { avatarBox: "w-8 h-8" } }}
              />
            ) : isLoaded && SignInButton ? (
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium rounded-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-stone-500 hover:text-stone-900 hover:bg-stone-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ease-in-out bg-white",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >

        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3.5 text-lg font-medium text-stone-700 rounded-xl hover:bg-stone-100 hover:text-stone-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px my-4" style={{ background: "rgba(0,0,0,0.08)" }} />
          <Link
            href="/sell"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3.5 text-lg font-semibold text-center text-white rounded-xl hover:opacity-90 transition-opacity"
            style={{ background: "#E8722A" }}
          >
            Sell a Car — $3.99
          </Link>
          {isLoaded && !isSignedIn && SignInButton && (
            <SignInButton mode="modal">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3.5 text-lg font-medium text-center text-stone-600 rounded-xl border border-stone-200 hover:text-stone-900 hover:border-stone-300 transition-colors w-full"
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
