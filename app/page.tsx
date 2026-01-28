import Analysis from "@/components/Home/Analysis";
import CTA from "@/components/Home/CTA";
import Features from "@/components/Home/Features";
import { HeroHeader } from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroHeader />

      <Hero />
      <Services />
      <Analysis />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;
