import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute:
      "Kayplex Engineering | Top Engineering Services in Ghana, Suriname & Beyond",
    default:
      "%s | Kayplex Engineering | Top Engineering Services in Ghana, Suriname & Beyond",
  },
  keywords: [
    "Kayplex Engineering",
    "Engineering Services",
    "Engineering Services in Ghana",
    "Engineering Services in Suriname",
    "Engineering Services in Guyana",
    "Engineering Services in Saudi Arabia",
    "Ghana",
    "Suriname",
    "Guyana",
    "Saudi Arabia",
    "Engineering Consultancy",
    "Oil and Gas",
    "Energy Sector",
    "Engineering Optimization",
    "Engineering Efficiency",
    "Innovation in Engineering Services",
  ],
  description:
    "Kayplex Engineering LTD. offers expert engineering services & consultancy in Ghana, Suriname, Guyana & Saudi Arabia. We optimize operations, efficiency & innovation.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <HeroHeader />

        {children}
        <Footer />
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
