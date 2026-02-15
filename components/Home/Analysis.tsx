import { FaTools, FaShieldAlt, FaChartLine, FaAward } from "react-icons/fa";
import Image from "next/image";
import FieldPerformance from "../ui/illustration";

export default function Analysis() {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium tracking-tight text-gray-900">
            Advanced Analytics & Insights for{" "}
            <span className="text-rose-950">Informed Decisions</span>
          </h2>
          <p className="mt-6 text-lg max-w-3xl">
            We leverage cutting-edge analytics tools to provide you with deep
            insights into your projects, enabling data-driven decision-making
            and optimized outcomes.
          </p>
        </div>
        <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
          <div className="perspective-midrange">
            <FieldPerformance />
          </div>
        </div>
        <div className="relative mx-auto grid  gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FaTools className="size-4 text-blue-600" />
              <h3 className="text-lg font-medium">Engineering Excellence</h3>
            </div>
            <p className="text-muted-foreground ">
              Comprehensive solutions backed by decades of industry expertise
              and technical innovation.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="size-4 text-green-600" />
              <h3 className="text-lg font-medium">Safety First</h3>
            </div>
            <p className="text-muted-foreground ">
              Uncompromising commitment to safety standards protecting people,
              environment, and assets.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaChartLine className="size-4 text-orange-600" />
              <h3 className="text-lg font-medium">Data-Driven Insights</h3>
            </div>
            <p className="text-muted-foreground ">
              Advanced analytics enabling informed decisions and optimized
              operational performance.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaAward className="size-4 text-purple-600" />
              <h3 className="text-lg font-medium">Proven Track Record</h3>
            </div>
            <p className="text-muted-foreground ">
              Delivering successful projects across diverse geological
              conditions and operational challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
