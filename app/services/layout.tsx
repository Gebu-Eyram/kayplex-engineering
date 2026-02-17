import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Kayplex Engineering's full range of services: mining, road construction, semiconductor manufacturing, building & construction, well engineering, pipeline design, risk assessment, and chemical supply chain.",
  alternates: {
    canonical: "https://www.kayplexengineering.com/services",
  },
  openGraph: {
    title: "Our Services | Kayplex Engineering",
    description:
      "Explore Kayplex Engineering's full range of services: mining, road construction, semiconductor manufacturing, building & construction, well engineering, pipeline design, risk assessment, and chemical supply chain.",
    url: "https://www.kayplexengineering.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
