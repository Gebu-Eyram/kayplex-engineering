import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto rounded-2xl py-12 overflow-hidden bg-gray-200 dark:bg-gray-900 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
              Get Reliable Engineering Solutions Today
            </h2>
            <div className="flex justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
