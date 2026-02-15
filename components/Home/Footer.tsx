import { Logo } from "@/components/logo";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook, Github } from "lucide-react";
import Image from "next/image";

const footerNav = [
  {
    title: "Features",
    links: [
      { title: "Overview", href: "#" },
      { title: "Analytics", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Security", href: "#" },
    ],
  },
  {
    title: "Solution",
    links: [
      { title: "Enterprise", href: "#" },
      { title: "SMBs", href: "#" },
      { title: "Startups", href: "#" },
      { title: "Partners", href: "#" },
    ],
  },
  {
    title: "Customers",
    links: [
      { title: "Case Studies", href: "#" },
      { title: "Testimonials", href: "#" },
      { title: "Industries", href: "#" },
      { title: "Partners", href: "#" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { title: "Plans", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Compare", href: "#" },
      { title: "Discounts", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { title: "Docs", href: "#" },
      { title: "Guides", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "About Us", href: "#" },
      { title: "Team", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Press", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "GitHub", href: "#", icon: Github },
];

export default function Footer() {
  return (
    <footer className="bg-muted/60 py-16 border-t border-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + description + social */}
          <div>
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <div className="text-xs uppercase">
                <p className="text-sm font-semibold">Kayplex</p>
                <p>Engineering Services</p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Engineering excellence in every discipline.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                Follow us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Icon className="size-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation groups */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary block duration-150"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-muted/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kayplex — All rights reserved
          </span>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
