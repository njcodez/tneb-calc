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
  title: "TNEB Bill Comparison Calculator",
  description:
    "Compare old and revised TNEB electricity tariff bills and calculate your savings instantly.",

  keywords: [
    "TNEB",
    "Electricity Bill",
    "Tamil Nadu",
    "Tariff Calculator",
    "Bill Comparison",
  ],

  openGraph: {
    title: "TNEB Bill Comparison Calculator",
    description:
      "See how much you save under the revised electricity tariff.",
    type: "website",
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