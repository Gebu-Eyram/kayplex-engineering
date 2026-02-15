"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      image: "/services/mining.jpg",
      title: "Mining Engineering Consultancy",
      subtitle:
        "Comprehensive consultancy for mining operations, resource extraction, and environmental management.",
      description:
        "Our mining engineering consultancy services provide expert guidance in all aspects of mining operations, from exploration and planning to extraction and rehabilitation. We focus on sustainable practices, safety, and efficiency to maximize resource recovery while minimizing environmental impact.",
    },
    {
      image: "/services/road.jpeg",
      title: "Road Construction Engineering",
      subtitle:
        "Expert design and construction of road infrastructure for safe and efficient transportation.",
      description:
        "Our road construction engineering services cover the full spectrum of road development, from initial planning and design to construction management and maintenance. We ensure compliance with safety standards and environmental regulations while delivering cost-effective solutions.",
    },
    {
      image: "/services/semiconductor.jpg",
      title: "Semiconductor Manufacturing Consultancy",
      subtitle:
        "Specialized consultancy for semiconductor fabrication and process optimization.",
      description:
        "We provide expert consultancy services for semiconductor manufacturing, including fab design, process development, yield improvement, and quality control. Our team of specialists helps optimize production efficiency and reduce costs in the semiconductor industry.",
    },
    {
      image: "/services/building.jpg",
      title: "Building and Construction Engineering",
      subtitle:
        "Comprehensive engineering services for residential, commercial, and industrial construction projects.",
      description:
        "Our building and construction engineering services encompass the entire project lifecycle, from conceptual design and structural analysis to construction management and quality assurance. We deliver innovative, sustainable, and cost-effective solutions that meet the highest standards.",
    },
    {
      image: "/services/1.jpg",
      title: "Well Engineering Consultancy",
      subtitle:
        "Comprehensive well design and engineering tailored to different geological conditions.",
      description:
        "Our Well Engineering Consultancy services provide expert guidance throughout the entire well lifecycle, from initial concept to abandonment. We leverage decades of industry experience and cutting-edge technologies to optimize well performance while maintaining strict safety standards.",
    },
    {
      image: "/services/2.jpg",
      title: "Pipeline Design and Engineering",
      subtitle:
        "Creating project plans, schedules, scope and detailed estimates for successful execution and commissioning.",
      description:
        "Our pipeline engineering services deliver comprehensive solutions for the design, construction, and maintenance of oil and gas pipeline systems. We ensure regulatory compliance while maximizing operational efficiency and minimizing environmental impact.",
    },
    {
      image: "/services/3.jpg",
      title: "Risk Assessment and Analysis",
      subtitle:
        "Comprehensive risk evaluations for offshore and onshore operations with actionable mitigation strategies.",
      description:
        "Our risk assessment services identify, analyze, and mitigate potential hazards across your operations. We employ systematic methodologies to evaluate risks and develop practical mitigation strategies that enhance safety while maintaining operational efficiency.",
    },
    {
      image: "/services/4.webp",
      title: "Chemical Supply Chain",
      subtitle:
        "Supply chain management for chemical products and services with a focus on quality and safety.",
      description:
        "Our chemical supply chain management services ensure reliable access to high-quality chemicals essential for oil and gas operations. We handle logistics, quality control, and inventory management to optimize your chemical supply needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <BlurFade delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-4 text-balance">
            Highest Quality in Engineering Services for Your Success <br />
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-16">
            Comprehensive engineering solutions across mining, infrastructure,
            energy, semiconductors, and more. Let us power your operations.
          </p>
        </BlurFade>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, idx) => (
            <BlurFade key={idx} delay={0.3 + idx * 0.1} inView>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  idx % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full h-80 md:h-96 rounded-2xl overflow-hidden ${
                    idx % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-950 px-6 py-3 font-medium text-white hover:bg-rose-900 transition-colors"
                  >
                    Book Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Section */}
        <BlurFade delay={0.9} inView>
          <div className="mt-20 bg-rose-950 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our engineering experts to discuss how Kayplex can
              deliver solutions tailored to your operational needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-rose-950 hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default ServicesPage;
