"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t hairline px-5">
      <div className="container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
            AI workflow automation for practical teams. Project brief details
            are used only to understand your request and respond.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/70 sm:grid-cols-5 md:grid-cols-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container flex flex-col gap-3 border-t hairline py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <span>&copy; {new Date().getFullYear()} Stack and Loop.</span>
        <span>Solo-run consultancy. Built for clear systems and calmer work.</span>
      </div>
    </footer>
  );
}
