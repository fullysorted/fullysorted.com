import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Fully Sorted",
  description: "The terms governing your use of the Fully Sorted marketplace and services directory.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8722A" }}>
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "#1a1a18" }}>
            Terms of Service
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
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Using Fully Sorted</h2>
            <p>
              Fully Sorted is a collector car marketplace and vetted services directory. By using this
              platform, you agree to these terms. You must be 18 or older to list a vehicle or apply
              as a service provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Listings</h2>
            <p>
              Listing fees are non-refundable and cover one vehicle listing until it is marked
              sold or removed. You are responsible for the accuracy of your listing. Misrepresentation
              of a vehicle&apos;s condition, history, or title status is grounds for immediate removal
              and may be reported to relevant authorities.
            </p>
            <p className="mt-3">
              Fully Sorted is a marketing platform only — we are not a party to any transaction between
              buyer and seller. All negotiations, payments, and transfers happen directly between the
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Services Directory</h2>
            <p>
              Service provider listings are personal endorsements based on our own experience and vetting
              process. Inclusion in the directory does not constitute a warranty or guarantee of service
              quality. We reserve the right to remove any provider at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Prohibited Use</h2>
            <p>
              You may not use Fully Sorted to list salvage, flood-damaged, or stolen vehicles; to
              misrepresent a vehicle&apos;s history or condition; to scrape or redistribute our data; or
              for any unlawful purpose. Violations result in permanent account removal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Value Guide Data</h2>
            <p>
              Market valuations provided through our Value Guide are based on historical auction data and
              are for informational purposes only. They do not constitute a formal appraisal and should
              not be relied upon for financing, insurance, or legal purposes without independent verification.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Limitation of Liability</h2>
            <p>
              Fully Sorted is not liable for any loss or damage arising from transactions conducted
              between users of the platform, the actions or inactions of service providers listed in
              our directory, or reliance on market data from our Value Guide.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after changes
              are posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1a1a18" }}>Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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
