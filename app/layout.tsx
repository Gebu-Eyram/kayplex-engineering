import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import Footer from "@/components/Home/Footer";
import { HeroHeader } from "@/components/Home/Header";

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
    absolute:
      "Kayplex Engineering | Top Oilfield Services in Ghana, Suriname & Beyond",
    default:
      "%s | Kayplex Engineering | Top Oilfield Services in Ghana, Suriname & Beyond",
  },
  keywords: [
    "Kayplex Engineering",
    "Oilfield Services",
    "Oilfield Services in Ghana",
    "Oilfield Services in Suriname",
    "Oilfield Services in Guyana",
    "Oilfield Services in Saudi Arabia",
    "Ghana",
    "Suriname",
    "Guyana",
    "Saudi Arabia",
    "Engineering Consultancy",
    "Oil and Gas",
    "Energy Sector",
    "Oilfield Optimization",
    "Oilfield Efficiency",
    "Innovation in Oilfield Services",
  ],
  description:
    "Kayplex Engineering offers expert oilfield services & consultancy in Ghana, Suriname, Guyana & Saudi Arabia. We optimize operations, efficiency & innovation.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <HeroHeader />

        {children}
        <Footer />
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
