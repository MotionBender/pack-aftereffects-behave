import type { Metadata } from "next";
import { Inter, Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const siteUrl = "https://www.motionbender.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Motion bender | After Effects Packs",
    template: "%s | Motion Bender",
  },
  description:
    "Buy exclusive After Effects packs for your creative projects. High-quality templates, transitions, and motion graphics for professionals.",
  keywords: [
    "after effects packs",
    "motion graphics",
    "ae templates",
    "video editing",
    "creative assets",
    "promo pack",
    "essential pack",
    "behave",
    "motionbender",
    "buy after effects packs",
    "video templates",
    "typography pack",
    "motion bender",
    "behave",
    "hotmart",
    "hotmart motionbender",
    "buy templates after effects",
    "after effects",
    "behave templates",
    "transition pack",
    "assets pack",
  ],
  authors: [{ name: "[Vitor Letta - Behave]" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "After Effects Packs - Motionbender",
    description:
      "Buy exclusive After Effects packs for your creative projects. High-quality templates, transitions, and motion graphics for professionals.",
    url: siteUrl,
    siteName: "Motion bender",
    images: [
      {
        url: "/images/logo-behave.jpg",
        width: 280,
        height: 280,
        alt: "After Effects Packs Behave",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "After Effects Packs - Motionbender",
    description:
      "Buy exclusive After Effects packs for your creative projects. High-quality templates, transitions, and motion graphics for professionals.",
    images: [`${siteUrl}/images/logo-behave.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Motion Bender",
    alternateName: "Motionbender",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Motion Bender",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} ${montserrat.variable} antialiased`}
      >
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
