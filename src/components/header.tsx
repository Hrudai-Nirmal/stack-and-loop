"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[rgba(5,5,5,0.82)] px-5 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-sm font-medium text-white/66 transition hover:text-white"
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-center bg-[var(--accent)] transition ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-70 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-lg border border-[var(--accent-line)] px-5 text-sm font-medium text-white/88 transition hover:bg-[var(--accent-soft)] lg:inline-flex"
          >
            Send brief
          </Link>
        </div>
        <button
          type="button"
          className="inline-grid size-10 place-items-center rounded-lg border hairline text-white md:hidden"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={20} aria-hidden />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-[var(--background)] px-5 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <BrandMark />
            <button
              type="button"
            className="inline-grid size-10 place-items-center rounded-lg border hairline text-white"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} aria-hidden />
            </button>
          </div>
          <nav className="mt-12 grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border hairline px-5 py-4 text-xl font-medium text-white/88"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
