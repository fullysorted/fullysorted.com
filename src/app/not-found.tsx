import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4" style={{ background: "#faf9f7" }}>
      <div className="text-center max-w-md">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-2xl font-black"
          style={{ background: "rgba(232,114,42,0.12)", color: "#E8722A" }}
        >
          404
        </div>
        <h1 className="text-3xl font-black mb-3" style={{ color: "#1a1a18" }}>
          Page not found
        </h1>
        <p className="text-base mb-8 leading-relaxed" style={{ color: "#6b6b5e" }}>
          This page doesn&apos;t exist or has been moved. If you were looking
          for a listing, it may have sold or been removed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: "#E8722A" }}
          >
            <Search className="w-4 h-4" />
            Browse Listings
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-stone-200"
            style={{ color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.12)", background: "#fff" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
