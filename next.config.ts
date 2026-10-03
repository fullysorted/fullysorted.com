import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.bringatrailer.com",
      },
      {
        protocol: "https",
        hostname: "bringatrailer.com",
      },
    ],
  },
  async redirects() {
    return [
      // The thin AI draft at this slug was unpublished 2026-09-01 in favour of the
      // researched page; the old URL had been indexed, so keep it answering.
      {
        source: "/research/models/lancia/delta-integrale",
        destination: "/research/models/lancia/delta-hf-integrale",
        permanent: true,
      },
      // 2026-10-02: the March 2026 market desk (first-person stories and a
      // segment table frozen at Dec 2025) is retired until the news
      // aggregator replaces it. Temporary, so the URLs can come back.
      { source: "/research", destination: "/research/models", permanent: false },
      // 2026-10-02: memorabilia has its own page under For Sale.
      {
        source: "/parts",
        has: [{ type: "query", key: "kind", value: "memorabilia" }],
        destination: "/memorabilia",
        permanent: true,
      },
      ...[
        "monday-market-movers-march-24",
        "what-would-chris-buy-march",
        "sorted-or-not-e-type",
        "jdm-market-2026",
        "san-diego-spring-events",
      ].map((slug) => ({
        source: `/research/${slug}`,
        destination: "/research/models",
        permanent: false,
      })),
    ];
  },
  async rewrites() {
    // Machine-readable twin of every model history, for AI assistants:
    // /research/models/{make}/{model}.md. Runs before the dynamic page route.
    return [
      {
        source: "/research/models/:make/:model.md",
        destination: "/api/research/model-md/:make/:model",
      },
    ];
  },
  async headers() {
    // Defense-in-depth security headers applied to every response.
    // NOTE: no strict Content-Security-Policy is set here because the app loads
    // inline GA/Meta Pixel scripts; adding a CSP requires nonces/hashes for those
    // and should be done deliberately (see SECURITY-AND-QA-REPORT.md). The headers
    // below are safe to ship now and add clickjacking/MIME/referrer protection.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
