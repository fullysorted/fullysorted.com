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
};

export default nextConfig;
