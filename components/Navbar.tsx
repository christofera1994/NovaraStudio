"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink, SiteSettings } from "@/lib/types";

const navLinkClass =
  "text-sm font-medium tracking-tight link-lift opacity-90 hover:opacity-100";

export function Navbar({
  links,
  settings,
  ctaText,
}: {
  links: NavLink[];
  settings: SiteSettings | null;
  ctaText: string;
}) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setScrolledPastHero(!e.isIntersecting),
      { threshold: 0.1, rootMargin: "-10% 0px 0px 0px" }
    );
    const hero = document.getElementById("hero-section");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const brandName = settings?.brand_name ?? "Novara";

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-500 rounded-[2rem] ${
        scrolledPastHero
          ? "bg-background/60 backdrop-blur-xl border border-primary/10 text-primary shadow-lg"
          : "bg-transparent text-ghost"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight link-lift"
        >
          {brandName}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium tracking-tight btn-magnetic overflow-hidden relative group"
          >
            <span className="absolute inset-0 bg-plasma/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">{ctaText}</span>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 link-lift"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-primary/10 mt-2 pt-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium text-center btn-magnetic"
            onClick={() => setMobileOpen(false)}
          >
            {ctaText}
          </Link>
        </div>
      )}
    </header>
  );
}
