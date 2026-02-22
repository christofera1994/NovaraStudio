"use client";

import Link from "next/link";
import type { SiteSettings, NavLink } from "@/lib/types";

export function Footer({
  settings,
  navLinks,
}: {
  settings: SiteSettings | null;
  navLinks: NavLink[];
}) {
  const brandName = settings?.brand_name ?? "Novara";
  const tagline = settings?.tagline ?? "Precision digital interface.";
  const legalLinks = settings?.footer_legal_links ?? [];

  return (
    <footer className="bg-primary text-ghost rounded-t-[4rem] mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-sans font-bold text-lg tracking-tight">{brandName}</p>
            <p className="text-ghost/70 text-sm mt-1 max-w-xs">{tagline}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
              <span className="font-mono text-xs text-ghost/80">System Operational</span>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-3">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-sm link-lift opacity-90 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2">
              {legalLinks.length ? legalLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm link-lift opacity-90 hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              )) : (
                <>
                  <li><Link href="#" className="text-sm link-lift opacity-90">Privacy</Link></li>
                  <li><Link href="#" className="text-sm link-lift opacity-90">Terms</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <p className="text-ghost/50 text-xs font-mono mt-12 pt-8 border-t border-ghost/10">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
