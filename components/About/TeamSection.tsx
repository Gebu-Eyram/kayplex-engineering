import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Member = {
  initials: string;
  name: string;
  role: string;
  description: string;
  skill: string;
  experience: string;
  email: string;
  img?: string;
};

const TeamMembers: Member[] = [
  {
    initials: "KD",
    img: "/team/ceo.webp",
    name: "Ing. Kwaku Duah",
    role: "Chief Executive Officer",
    description: "Strategic leadership and company vision",
    skill: "Strategic Planning",
    experience: "10+ years experience",
    email: "kwaku.duah@kayplexengineering.com",
  },
  {
    initials: "SA",
    name: "Dr. Stephen Adjei",
    img: "/team/eng-dir.webp",
    role: "Engineering Director",
    description: "Driving innovative engineering solutions",
    skill: "Technical Leadership",
    experience: "15+ years experience",
    email: "stephen.adjei@kayplexengineering.com",
  },
  {
    initials: "FKA",
    name: "Ing. Felix Kofi Amindi",
    role: "Engineering Director",
    description: "Organizational growth & development",
    skill: "Project Management",
    experience: "12+ years experience",
    email: "#email",
  },
  {
    initials: "RY",
    name: "Mr. Reginald Yeboah",
    role: "Operations Officer",
    description: "Ensuring operational efficiency",
    skill: "Operations Management",
    experience: "8+ years experience",
    email: "#email",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 ">
      <div className="md:flex md:items-center md:justify-between mb-6 gap-6">
        <div className="">
          <p className="text-sm text-rose-950 font-medium mb-8">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance  font-medium tracking-tight text-gray-900">
            The Minds Behind{" "}
            <span className="bg-rose-950 text-white px-1">Kayplex</span>
          </h2>
          <p className="mt-3 md:text-lg max-w-3xl text-balance text-muted-foreground">
            Our team comprises expert engineers and seasoned industry veterans
            with decades of combined experience in delivering top-tier oilfield
            services.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TeamMembers.map((member) => {
          const avatar = member.img ?? `/team/placeholder.jpg`;
          const firstName = member.name.split(" ")[0];
          return (
            <article
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-transform duration-200"
            >
              <div className="relative h-72 w-full bg-gray-100">
                <Image
                  src={avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* stronger gradient to blend image into card */}
                <div className="absolute left-0 right-0 bottom-0 h-28 pointer-events-none bg-gradient-to-b from-transparent via-white/40 to-white" />
              </div>

              <div className="p-4  bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl tracking-tighter font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-rose-950 mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
