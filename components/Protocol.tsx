"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProtocolStep } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_STEP_IMAGES = [
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
];

const SCROLL_VH_PER_STEP = 115;
const WAVY_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='w' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 40 Q20 20 40 40 T80 40' fill='none' stroke='%23e5e5e0' stroke-width='0.8' opacity='0.7'/%3E%3Cpath d='M0 48 Q20 28 40 48 T80 48' fill='none' stroke='%23eaeae5' stroke-width='0.5' opacity='0.5'/%3E%3Cpath d='M0 32 Q20 12 40 32 T80 32' fill='none' stroke='%23eaeae5' stroke-width='0.5' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23fafaf9'/%3E%3Crect width='100%25' height='100%25' fill='url(%23w)'/%3E%3C/svg%3E\")";
const WHITE_PATTERN_BG = `url(/images/bg-white-pattern.png), ${WAVY_PATTERN}`;

function GeometricMotif() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { rotation: 360, duration: 25, repeat: -1, ease: "none" });
    }, ref.current);
    return () => ctx.revert();
  }, []);
  return (
    <svg ref={ref} className="w-24 h-24 text-accent/60 shrink-0" viewBox="0 0 100 100" aria-hidden>
      <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}

function ScanlineGrid() {
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { x: "-100%" },
        { x: "100%", duration: 3, repeat: -1, ease: "none" }
      );
    }, lineRef.current);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative w-40 h-24 overflow-hidden rounded-xl">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px bg-black/5">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="bg-accent/10 rounded-sm" />
        ))}
      </div>
      <div
        ref={lineRef}
        className="absolute top-1/2 left-0 w-1/2 h-px bg-accent/70 shadow-[0_0_12px var(--color-accent)]"
        aria-hidden
      />
    </div>
  );
}

function WaveformEKG() {
  const pathRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        path,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 2, repeat: -1, repeatDelay: 0.8, ease: "power2.inOut" }
      );
    }, path);
    return () => ctx.revert();
  }, []);
  return (
    <svg className="w-48 h-20 text-accent/70 shrink-0" viewBox="0 0 200 60" aria-hidden>
      <path
        ref={pathRef}
        d="M0 30 Q20 10 40 30 T80 30 T120 30 T160 30 T200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Protocol({ steps }: { steps: ProtocolStep[] }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sorted = [...steps].sort((a, b) => a.order_index - b.order_index);
  const list: ProtocolStep[] = sorted.length >= 1 ? sorted : [
    { id: "1", step_number: 1, title: "Define", description: "Map intent to a structured experience model.", animation_type: "geometric", image_url: DEFAULT_STEP_IMAGES[0], order_index: 0, is_published: true, created_at: "", updated_at: "" },
    { id: "2", step_number: 2, title: "Orchestrate", description: "Compose interactions with precise timing.", animation_type: "scanline", image_url: DEFAULT_STEP_IMAGES[1], order_index: 1, is_published: true, created_at: "", updated_at: "" },
    { id: "3", step_number: 3, title: "Deliver", description: "Render and ship with cinematic fidelity.", animation_type: "waveform", image_url: DEFAULT_STEP_IMAGES[2], order_index: 2, is_published: true, created_at: "", updated_at: "" },
  ];

  const n = list.length;
  const totalVh = n * SCROLL_VH_PER_STEP;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const sticky = stickyRef.current;
    if (!sentinel || !sticky) return;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sentinel,
        start: "top top",
        end: `+=${totalVh}vh`,
        pin: sticky,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
      list.forEach((_, i) => {
        const card = cards[i];
        if (!card) return;
        gsap.set(card, {
          scale: i === 0 ? 1 : 0.94,
          opacity: i === 0 ? 1 : 0.5,
          zIndex: i === 0 ? n : i,
        });
      });
      ScrollTrigger.create({
        trigger: sentinel,
        start: "top top",
        end: `+=${totalVh}vh`,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const segment = 1 / n;
          list.forEach((_, i) => {
            const card = cards[i];
            if (!card) return;
            const segStart = i * segment;
            const segEnd = (i + 1) * segment;
            let scale = 0.94;
            let opacity = 0.5;
            let zIndex = i;
            if (p >= segStart && p < segEnd) {
              scale = 1;
              opacity = 1;
              zIndex = n;
            } else if (p >= segEnd) {
              const t = Math.min(1, (p - segEnd) / segment);
              scale = 1 - 0.06 * t;
              opacity = 1 - 0.5 * t;
              zIndex = n;
            }
            gsap.set(card, { scale, opacity, zIndex });
          });
        },
      });
    }, sentinel);
    return () => ctx.revert();
  }, [n, totalVh]);

  return (
    <section
      id="protocol"
      ref={sentinelRef}
      style={{ height: `${totalVh}vh` }}
      className="relative"
      aria-label="Protocol"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0 bg-[#fafaf9] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: WHITE_PATTERN_BG,
          }}
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center px-4 sm:px-8 h-full">
          {list.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-8"
              style={{ zIndex: i }}
            >
              <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 rounded-3xl border border-black/10 bg-white/90 backdrop-blur-sm p-6 sm:p-10 shadow-2xl">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 order-2 sm:order-1">
                  {step.animation_type === "geometric" && <GeometricMotif />}
                  {step.animation_type === "scanline" && <ScanlineGrid />}
                  {step.animation_type === "waveform" && <WaveformEKG />}
                  <span className="font-mono text-primary text-sm mt-4 tracking-wider">
                    Step {step.step_number}
                  </span>
                  <h3 className="font-sans font-bold text-primary text-2xl sm:text-3xl mt-2">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-graphite/80 text-sm sm:text-base max-w-md mt-3">
                      {step.description}
                    </p>
                  )}
                </div>
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 shrink-0 order-1 sm:order-2 shadow-xl border border-primary/10">
                  <img
                    src={step.image_url || DEFAULT_STEP_IMAGES[i]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
