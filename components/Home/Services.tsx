"use client";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Services = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setIsSheetOpen(true);
  };
  const cardData = [
    {
      badge: { text: "New", variant: "orange" as const },
      image: "/services/1.jpg",
      href: "/",
      title: "Well Engineering Consultancy",
      subtitle:
        "Comprehensive well design and engineering tailored to different geological conditions.",
      description:
        "Our Well Engineering Consultancy services provide expert guidance throughout the entire well lifecycle, from initial concept to abandonment. We leverage decades of industry experience and cutting-edge technologies to optimize well performance while maintaining strict safety standards.",
      advantages: [
        "Customized well design solutions for optimal production",
        "Expert geological analysis and reservoir characterization",
        "Cost-effective drilling strategies and execution",
        "Comprehensive well integrity management",
      ],
    },
    {
      badge: { text: "New", variant: "orange" as const },
      image: "/services/2.jpg",
      href: "/",
      title: "Pipeline design and engineering",
      subtitle:
        "Creating project plans, schedules, scope and detailed estimates for successful execution and commissioning.",
      description:
        "Our pipeline engineering services deliver comprehensive solutions for the design, construction, and maintenance of oil and gas pipeline systems. We ensure regulatory compliance while maximizing operational efficiency and minimizing environmental impact.",
      advantages: [
        "End-to-end pipeline project management",
        "Advanced flow simulation and hydraulic analysis",
        "Compliance with local and international regulations",
        "Risk-based inspection and maintenance programs",
      ],
    },
    {
      badge: { text: "New", variant: "orange" as const },
      image: "/services/3.jpg",
      href: "/",
      title: "Risk assessment and analysis",
      subtitle:
        "Comprehensive risk evaluations for offshore and onshore operations with actionable mitigation strategies.",
      description:
        "Our risk assessment services identify, analyze, and mitigate potential hazards across your operations. We employ systematic methodologies to evaluate risks and develop practical mitigation strategies that enhance safety while maintaining operational efficiency.",
      advantages: [
        "Quantitative and qualitative risk analysis",
        "HAZOP, HAZID, and other specialized risk studies",
        "Customized risk management frameworks",
        "Regulatory compliance and emergency response planning",
      ],
    },
    {
      badge: { text: "New", variant: "orange" as const },
      image: "/services/4.webp",
      href: "/",
      title: "Chemical supply chain",
      subtitle:
        "Supply chain management for chemical products and services with a focus on quality and safety.",
      description:
        "Our chemical supply chain management services ensure reliable access to high-quality chemicals essential for oil and gas operations. We handle logistics, quality control, and inventory management to optimize your chemical supply needs.",
      advantages: [
        "Strategic sourcing and supplier qualification",
        "Quality assurance and product testing",
        "Just-in-time inventory management",
        "Environmental compliance and sustainable practices",
      ],
    },
  ];
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <p className="mt-2 max-w-xl text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Our Premium Services for Your Success in Engineering Operations
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {cardData.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div
                className="gap-4 relative rounded-xl cursor-pointer transition-transform "
                onClick={() => handleCardClick(index)}
              >
                {/* <span
                  className={`text-sm font-semibold px-2 py-1 absolute top-2 left-2 rounded-md ${card.badge.variant === "orange" ? "bg-orange-200 text-orange-800" : ""}`}
                >
                  {card.badge.text}
                </span> */}
                <Image
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-80 rounded-4xl"
                  width={600}
                  height={600}
                />
                <div className="mt-4 px-2">
                  <p className="mt-2 line-clamp-1 text-xl font-semibold tracking-tighter text-balance text-gray-900 md:text-2xl">
                    {card.title}
                  </p>
                  <h4 className="text-md md:text-lg line-clamp-2 mb-2 text-gray-700">
                    {card.subtitle}
                  </h4>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-end gap-4 mb-4 md:absolute md:-top-16 md:right-0 md:mb-0">
          <CarouselPrevious className="relative inset-0 h-10 w-10 rounded-2xl bg-orange-500 text-white! hover:bg-orange-600" />
          <CarouselNext className="relative inset-0 h-10 w-10 rounded-2xl bg-orange-500 text-white! hover:bg-orange-600" />
        </div>
      </Carousel>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedCard !== null && (
            <>
              <SheetHeader className="border-b">
                <SheetTitle className="">
                  <p className="mt-2 max-w-xl text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
                    {cardData[selectedCard].title}
                  </p>
                </SheetTitle>
                <SheetDescription className="text-md md:text-lg line-clamp-2 mb-2 text-gray-700">
                  {cardData[selectedCard].subtitle}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6 p-4">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                    src={cardData[selectedCard].image}
                    alt={cardData[selectedCard].title}
                    className="object-cover"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Overview</h3>
                  <p className="text-md md:text-lg line-clamp-2 mb-2 text-gray-700">
                    {cardData[selectedCard].description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Advantages</h3>
                  <ul className="space-y-3">
                    {cardData[selectedCard].advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Services;
