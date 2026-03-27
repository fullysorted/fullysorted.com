import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Fully Sorted",
  description: "How Fully Sorted collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8722A" }}>
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "#1a1a18" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="rounded-2xl p-8 sm:p-10 border space-y-8 text-base leading-relaxed"
          style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)", color: "#3a3a30" }}
        >
          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Information We Collect</h2>
            <p>
              When you use Fully Sorted, we collect information you provide directly — such as your name,
              email address, phone number, and vehicle details when listing a car or applying to our services
              directory. We also collect payment information through our secure payment processor (Stripe),
              though we never store full card numbers.
            </p>
            <p className="mt-3">
              We collect usage data such as pages viewed, search queries, and how you interact with the site.
              This helps us improve the experience for collectors and service providers alike.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>How We Use Your Information</h2>
            <p>
              We use your information to operate the marketplace, process payments, display listings, connect
              buyers with sellers, and review applications from service providers. We may contact you about
              your account, listings, or applications. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Photos and Listings</h2>
            <p>
              Photos you upload for vehicle listings are stored securely and displayed publicly on the
              platform. When a listing is removed or sold, associated photos are deleted from our storage
              within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Cookies</h2>
            <p>
              We use essential cookies to keep you signed in and remember your preferences. We do not use
              advertising cookies or tracking pixels that follow you across the web.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Data Security</h2>
            <p>
              We take security seriously. All data is transmitted over HTTPS. Payment processing is handled
              entirely by Stripe — we never see or store your full payment details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Your Rights</h2>
            <p>
              You can request deletion of your account and associated data at any time by emailing
              chris@fullysorted.com. We will process requests within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:chris@fullysorted.com"
                className="font-semibold hover:opacity-70 transition-opacity"
                style={{ color: "#E8722A" }}
              >
                chris@fullysorted.com
              </a>
              {" "}or use our{" "}
              <Link
                href="/contact"
                className="font-semibold hover:opacity-70 transition-opacity"
                style={{ color: "#E8722A" }}
              >
                contact form
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
