import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlurFade } from "../ui/blur-fade";

const Hero = () => {
  return (
    <div className="relative h-screen  px-4 py-20 ">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: "url(/bg/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative py-20 max-w-7xl mx-auto ">
        <div className=" w-full h-full flex-col flex items-center justify-center ">
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance text-center   font-medium tracking-tight text-gray-900">
              Reliable Engineering Solutions for{" "}
              <span className="text-rose-950">Diverse Industry Needs</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4  max-w-2xl text-center text-balance text-lg text-gray-700">
              The trusted partner for comprehensive engineering solutions and
              expertise across various sectors.
            </p>
          </BlurFade>
          <BlurFade delay={0.6}>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-rose-900 px-6 py-3  font-medium text-white hover:bg-rose-800"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center rounded-full border border-rose-900 px-6 py-3 text-lg font-medium text-rose-900 hover:bg-rose-50"
              >
                Our Services
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* <div className="relative grid lg:grid-cols-2 gap-6">
        <div className=" p-4 py-6 border flex flex-col items-center text-center justify-center space-y-4">
          <Image
            src="/world.svg"
            alt="Hero Image"
            className=" h-80 w-auto invert object-cover self-center"
            width={400}
            height={300}
          />
          <h2 className=" max-w-xl uppercase text-xl text-balance font-semibold tracking-tighter  text-rose-900 md:text-2xl">
            Global high quality services
          </h2>

          <p className="max-w-xl text-lg text-balance  tracking-tighter  text-gray-900 md:text-xl">
            We are dedicated to delivering top-notch engineering services,
            ensuring excellence and reliability in every project we undertake.
          </p>
        </div>
        <div className=" p-4 py-6 border flex flex-col items-center text-center justify-center space-y-4">
          <Image
            src="/hero.png"
            alt="Hero Image"
            className=" h-80 object-cover self-center"
            width={400}
            height={300}
          />
          <h2 className=" max-w-xl uppercase text-xl text-balance font-semibold tracking-tighter  text-rose-900 md:text-2xl">
            Excellence in Engineering Services
          </h2>

          <p className="max-w-xl text-lg text-balance  tracking-tighter  text-gray-900 md:text-xl">
            Our team of experts is committed to providing innovative and
            efficient engineering solutions tailored to meet your unique needs.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
