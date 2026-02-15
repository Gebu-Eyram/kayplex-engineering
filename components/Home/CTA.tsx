import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="relative rounded-3xl overflow-hidden bg-black min-h-80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full p-8 md:p-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl  leading-tight text-balance text-white">
                Engineering Excellence In Every Discipline
              </h2>
              <p className="text-gray-300 text-base">
                Our expert engineers handle complex projects so you can focus on
                what matters. From design to execution, we deliver precision and
                reliability across all engineering disciplines.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="flex items-center gap-4 bg-yellow-400 rounded-full px-6 py-4 w-fit">
              <span className=" text-black text-sm md:text-base">
                Ready to elevate your project? Let's talk!
              </span>
              <Button
                asChild
                className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6 flex-shrink-0"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/engineering.webp"
              alt="Cleaning supplies"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
