import type { Metadata } from "next";
import Hero from "@/components/About/Hero";
import TeamSection from "@/components/About/TeamSection";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kayplex Engineering LTD. — our leadership team, mission, and expertise delivering engineering consultancy across Ghana, Suriname, Guyana, and Saudi Arabia.",
  alternates: {
    canonical: "https://www.kayplexengineering.com/about",
  },
  openGraph: {
    title: "About Us | Kayplex Engineering",
    description:
      "Learn about Kayplex Engineering LTD. — our leadership team, mission, and expertise delivering engineering consultancy across Ghana, Suriname, Guyana, and Saudi Arabia.",
    url: "https://www.kayplexengineering.com/about",
  },
};

const AboutPage = () => {
  return (
    <div className="inter py-20">
      <Hero />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
