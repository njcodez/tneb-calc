import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TNEB Bill Comparison Calculator",
    template: "%s | TNEB Calculator",
  },

  description:
    "Compare old and revised Tamil Nadu electricity tariff slabs instantly. Calculate savings under the new TNEB tariff structure.",

  keywords: [
    "TNEB calculator",
    "Tamil Nadu electricity bill calculator",
    "TNEB slab calculator",
    "Electricity tariff Tamil Nadu",
    "TNEB comparison",
    "Current bill calculator",
    "Tamil Nadu EB bill",
  ],

  authors: [
    {
      name: "Your Name",
    },
  ],

  creator: "Your Name",

  metadataBase: new URL(
    "https://YOUR-VERCEL-URL.vercel.app"
  ),

  openGraph: {
    title: "TNEB Bill Comparison Calculator",

    description:
      "Compare previous and revised Tamil Nadu electricity tariff slabs instantly.",

    url: "https://YOUR-VERCEL-URL.vercel.app",

    siteName: "TNEB Calculator",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TNEB Bill Comparison Calculator",

    description:
      "Compare old vs revised Tamil Nadu EB tariffs instantly.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans antialiased"
      )}
    >
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}