import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fully Sorted — Collector Car Marketplace",
    template: "%s | Fully Sorted",
  },
  description:
    "List your collector car for $9.99. Keep 100% of the sale. The peer-to-peer marketplace built by enthusiasts, for enthusiasts — no commissions, no buyer's premiums, no success fees.",
  keywords: [
    "collector cars",
    "classic cars for sale",
    "vintage cars",
    "collector car marketplace",
    "sell my classic car",
    "collector car value",
    "classic car pricing",
    "peer to peer car sale",
    "San Diego collector cars",
  ],
  authors: [{ name: "Chris Peterson", url: "https://fullysorted.com" }],
  creator: "Chris Peterson",
  metadataBase: new URL("https://fullysorted.com"),
  alternates: { canonical: "/" },
  category: "Automotive Marketplace",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullysorted.com",
    siteName: "Fully Sorted",
    title: "Fully Sorted — The Collector Car Marketplace",
    description:
      "List your collector car for $9.99. Keep 100% of the sale. No commission, ever. Built by enthusiasts, for enthusiasts.",
    // Note: opengraph-image.png in src/app/ is auto-registered by Next.js
    // metadata conventions — do NOT set images[] here or it will override.
  },
  twitter: {
    card: "summary_large_image",
    title: "Fully Sorted — The Collector Car Marketplace",
    description: "List your collector car for $9.99. Keep 100% of the sale. No commission, ever.",
    creator: "@fully_sorted",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#d97706",
          colorTextOnPrimaryBackground: "#ffffff",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <head>
          <meta name="theme-color" content="#0d2b0e" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          {/* Favicon, apple-icon, opengraph-image, and twitter-image are
              auto-registered by Next.js from files in src/app/ (file-based
              metadata convention). Do not add manual <link rel="icon"> here. */}
          <JsonLd data={[organizationSchema, websiteSchema]} />
        </head>
        <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
          <MetaPixel />
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
