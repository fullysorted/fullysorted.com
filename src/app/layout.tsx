import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

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
    "The first automotive services hub designed specifically for collector cars and the passionate owners who cherish them. Built by enthusiasts, for enthusiasts.",
  keywords: [
    "collector cars",
    "classic cars",
    "vintage cars",
    "car marketplace",
    "collector car value",
    "classic car pricing",
    "San Diego cars",
    "bring a trailer",
  ],
  authors: [{ name: "Chris Peterson", url: "https://fullysorted.com" }],
  creator: "Chris Peterson",
  metadataBase: new URL("https://fullysorted.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullysorted.com",
    siteName: "Fully Sorted",
    title: "Fully Sorted — Collector Car Marketplace",
    description:
      "The first automotive services hub for collector cars. Expert pricing, vetted services, and a community that gets it.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fully Sorted — Built by enthusiasts, for enthusiasts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fully Sorted — Collector Car Marketplace",
    description:
      "Expert pricing, vetted services, and a community that gets it.",
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
          colorPrimary: '#d97706',
          colorTextOnPrimaryBackground: '#ffffff',
          borderRadius: '0.75rem',
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <head>
          <meta name="theme-color" content="#1E6091" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
        </body>
      </html>
    </ClerkProvider>
  );
}
