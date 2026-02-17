"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn("fixed z-20 w-full border-b bg-white duration-150")}
      >
        <div className="mx-auto max-w-7xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <div className="text-xs uppercase">
                <p className="text-sm font-semibold">Kayplex</p>
                <p>Engineering LTD.</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium hover:text-rose-900 transition-colors ${
                    pathname === item.href ? "text-rose-900" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className={`hidden lg:block text-sm font-medium hover:text-rose-900 transition-colors ${
                pathname === "/contact" ? "text-rose-900" : ""
              }`}
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          {menuState && (
            <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-10 pt-20">
              <div className="flex flex-col items-center gap-6 py-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium hover:text-rose-900 transition-colors ${
                      pathname === item.href ? "text-rose-900" : ""
                    }`}
                    onClick={() => setMenuState(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={`text-lg font-medium hover:text-rose-900 transition-colors ${
                    pathname === "/contact" ? "text-rose-900" : ""
                  }`}
                  onClick={() => setMenuState(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
