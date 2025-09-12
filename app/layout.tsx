import type { Metadata } from "next";
import { Inter, Oswald, Montserrat } from "next/font/google";
import "./globals.css";

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
    default: "After Effects Packs - Motionbender",
    template: "%s | Motionbender AE Packs",
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
    siteName: "Motionbender AE Packs",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
