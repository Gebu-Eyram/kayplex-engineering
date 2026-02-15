import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          {/* Left - Main Headline */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
              We design engineering solutions
              <br />
              <span className="inline-flex items-center gap-2">
                that power{" "}
                <span className="bg-rose-950 px-1 text-white">industries.</span>
              </span>
            </h1>
          </div>

          {/* Right - Description */}
          <div className="md:pt-4">
            <p className="text-gray-600 text-lg mb-6">
              At Kayplex, we deliver industrial-grade engineering across mining,
              infrastructure, energy and manufacturing — process design,
              embedded systems, and operational technology that solve real
              challenges and drive measurable results.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-gray-900 font-medium border-b border-gray-900 pb-1 hover:text-gray-700 hover:border-gray-700 transition-colors"
            >
              Browse our services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden mb-20">
          <Image
            src="/engineering-1.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
          {/* Left Label */}
          <div className="md:col-span-2">
            <span className="text-sm text-rose-950 tracking-wide">
              OUR VISION
            </span>
          </div>

          {/* Right Content */}
          <div className="md:col-span-10">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
              Whether it&apos;s mining operations, road infrastructure,
              <br className="hidden md:block" />
              semiconductor fabrication, or energy systems —
              <br className="hidden md:block" />
              we deliver engineering excellence.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              From risk assessment and pipeline design to consultancy and
              optimization, our engineering drives operational efficiency,
              safety, and sustainable growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-medium text-rose-950 mb-2">
                3+
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                Projects delivered
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-medium text-rose-950 mb-2">
                $2.2M+
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                Client revenue impacted
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-medium text-rose-950 mb-2">
                95%
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                Client retention
              </p>
            </div>

            {/* Decorative Arrows */}
            <div className="flex items-center justify-center">
              <div className="flex gap-2">
                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-gray-900 stroke-[1.5]" />
                <ArrowDownLeft className="w-8 h-8 md:w-10 md:h-10 text-gray-900 stroke-[1.5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
