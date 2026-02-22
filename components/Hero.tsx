"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { SiteSettings } from "@/lib/types";

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80";
const BLACK_IRIDESCENT_BG = "/images/bg-black-iridescent.png";

export function Hero({ settings }: { settings: SiteSettings | null }) {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const line1 = settings?.hero_line_1 ?? "Interface beyond";
  const line2 = settings?.hero_line_2 ?? "boundaries.";
  const ctaText = settings?.cta_text ?? "Enter the Experience";
  const heroBg =
    settings?.hero_background_image_url ?? DEFAULT_HERO_IMAGE;

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        line1Ref.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          line2Ref.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);
    return () => ctx.revert();
  }, [line1, line2, ctaText]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative h-[100dvh] flex flex-col justify-end overflow-hidden rounded-b-[3rem] bg-[var(--color-studio-black)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BLACK_IRIDESCENT_BG}), url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-studio-black)] via-[var(--color-studio-black)]/90 to-[var(--color-studio-black)]/60" />
      <div className="relative z-10 px-6 sm:px-10 pb-[20dvh] max-w-4xl">
        <p className="text-white/80 text-sm font-mono tracking-widest uppercase mb-4 reveal-item">
          Precision digital interface
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-white mb-2">
          <span ref={line1Ref} className="block">
            {line1}
          </span>
          <span
            ref={line2Ref}
            className="block font-drama italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-400 via-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mt-2"
          >
            {line2}
          </span>
        </h1>
        <div ref={ctaRef} className="mt-8">
          <Link
            href="#pricing"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[var(--color-studio-black)] font-semibold tracking-tight btn-magnetic overflow-hidden relative group"
          >
            <span className="absolute inset-0 bg-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
