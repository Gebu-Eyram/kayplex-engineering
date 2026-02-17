import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kayplex Engineering LTD. Contact our team of experts in Ghana, Suriname, Guyana, and Saudi Arabia for engineering consultancy and services.",
  alternates: {
    canonical: "https://www.kayplexengineering.com/contact",
  },
  openGraph: {
    title: "Contact Us | Kayplex Engineering",
    description:
      "Get in touch with Kayplex Engineering LTD. Contact our team of experts in Ghana, Suriname, Guyana, and Saudi Arabia for engineering consultancy and services.",
    url: "https://www.kayplexengineering.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
