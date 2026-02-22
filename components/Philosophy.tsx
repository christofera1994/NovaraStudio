"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteSettings } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_TEXTURE =
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=60";
const BLACK_IRIDESCENT_BG = "/images/bg-black-iridescent.png";

export function Philosophy({ settings }: { settings: SiteSettings | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const commonRef = useRef<HTMLParagraphElement>(null);
  const diffRef = useRef<HTMLParagraphElement>(null);
  const keywordRef = useRef<HTMLSpanElement>(null);

  const common =
    settings?.philosophy_common ??
    "Most digital products focus on: features and screens.";
  const differentiated =
    settings?.philosophy_differentiated ??
    "We focus on: experience as instrument.";
  const keyword = settings?.philosophy_keyword ?? "experience as instrument";
  const textureUrl = settings?.hero_background_image_url ?? DEFAULT_TEXTURE;

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        commonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        diffRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        keywordRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [common, differentiated, keyword]);

  const parts = differentiated.split(keyword);
  const beforeKeyword = parts[0] ?? "";
  const afterKeyword = parts[1] ?? "";

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-32 px-6 sm:px-10 rounded-[3rem] overflow-hidden bg-[var(--color-studio-black)] text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${BLACK_IRIDESCENT_BG}), url(${textureUrl})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--color-studio-black)]/80" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p
          ref={commonRef}
          className="text-white/70 text-base sm:text-lg mb-8 font-sans tracking-tight"
        >
          {common}
        </p>
        <p
          ref={diffRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-drama italic leading-tight text-white"
        >
          {beforeKeyword}
          <span ref={keywordRef} className="bg-gradient-to-r from-blue-400 via-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-drama italic">
            {keyword}
          </span>
          {afterKeyword}
        </p>
      </div>
    </section>
  );
}
