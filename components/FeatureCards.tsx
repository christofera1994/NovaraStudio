"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Feature } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler({
  labels,
  title,
  description,
}: {
  labels: string[];
  title: string;
  description: string | null;
}) {
  const source = labels.length >= 3 ? labels.slice(0, 3) : ["Context-aware layouts", "Dynamic component loading", "Predictive state management"];
  const [frontIndex, setFrontIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (source.length < 2) return;
    const t = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % source.length);
    }, 3000);
    return () => clearInterval(t);
  }, [source.length]);

  return (
    <div
      ref={containerRef}
      className="bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col min-h-[220px]"
    >
      <h3 className="font-sans font-bold text-primary text-lg mb-1">{title}</h3>
      {description && (
        <p className="text-graphite/80 text-sm mb-4">{description}</p>
      )}
      <div className="relative h-28 flex-1 flex items-center justify-center overflow-hidden">
        {source.map((label, i) => {
          const offset = (i - frontIndex + source.length) % source.length;
          const isFront = offset === 0;
          const isBack = offset === 1;
          const isFar = offset === 2;
          return (
            <div
              key={i}
              className="absolute w-full max-w-[90%] px-4 py-2.5 rounded-xl bg-ghost/90 border border-accent/20 text-center font-mono text-sm text-primary shadow-sm"
              style={{
                transform: `translateY(${(offset - 1) * 32}px) scale(${isFront ? 1 : isBack ? 0.92 : 0.84})`,
                zIndex: isFront ? 30 : isBack ? 20 : 10,
                opacity: isFront ? 1 : isBack ? 0.85 : 0.6,
                transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
                pointerEvents: "none",
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter({
  messages,
  title,
  description,
}: {
  messages: string[];
  title: string;
  description: string | null;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause">("typing");
  const list = messages.length ? messages : ["Rendering pipeline: 16ms", "Input latency: <8ms", "State sync: real-time"];

  useEffect(() => {
    const msg = list[currentIndex % list.length];
    if (phase === "typing") {
      if (currentText.length < msg.length) {
        const t = setTimeout(() => setCurrentText(msg.slice(0, currentText.length + 1)), 60);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pause"), 1200);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentIndex((i) => i + 1);
        setCurrentText("");
        setPhase("typing");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [currentIndex, currentText, phase, list]);

  return (
    <div className="bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
        <span className="text-xs font-mono text-accent uppercase tracking-wider">Live Feed</span>
      </div>
      <h3 className="font-sans font-bold text-primary text-lg mb-1">{title}</h3>
      {description && (
        <p className="text-graphite/80 text-sm mb-4">{description}</p>
      )}
      <div className="font-mono text-sm text-primary min-h-[2.5rem] flex items-center">
        <span>{currentText}</span>
        <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-pulse" />
      </div>
    </div>
  );
}

function CursorProtocolScheduler({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string | null;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cursor = cursorRef.current;
    if (!wrapper || !cursor) return;
    const grid = wrapper.querySelector("[data-grid]");
    const cells = wrapper.querySelectorAll("[data-day]");
    const saveEl = wrapper.querySelector("[data-save]") as HTMLElement;
    const targetIndex = 3;
    const target = cells[targetIndex] as HTMLElement;

    const ctx = gsap.context(() => {
      gsap.set(cursor, { left: 0, top: 0, opacity: 1 });
      const tl = gsap.timeline({ repeat: 0, delay: 0.8 });
      if (target && grid) {
        const r = target.getBoundingClientRect();
        const wr = wrapper.getBoundingClientRect();
        const x = r.left - wr.left + r.width / 2 - 10;
        const y = r.top - wr.top + r.height / 2 - 10;
        tl.to(cursor, { left: x, top: y, duration: 0.8, ease: "power2.inOut" })
          .call(() => setActiveDay(targetIndex))
          .to(cursor, { scale: 0.95, duration: 0.1 })
          .to(cursor, { scale: 1, duration: 0.15, ease: "power2.out" });
        if (saveEl) {
          const sr = saveEl.getBoundingClientRect();
          tl.to(cursor, {
            left: sr.left - wr.left + sr.width / 2 - 10,
            top: sr.top - wr.top + sr.height / 2 - 10,
            duration: 0.6,
            ease: "power2.inOut",
          });
        }
        tl.to(cursor, { opacity: 0, duration: 0.3 });
      }
    }, wrapper);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col relative min-h-[280px]">
      <h3 className="font-sans font-bold text-primary text-lg mb-1">{title}</h3>
      {description && (
        <p className="text-graphite/80 text-sm mb-4">{description}</p>
      )}
      <p className="text-xs font-mono text-accent/90 mb-3">{label}</p>
      <div data-grid className="relative grid grid-cols-7 gap-2 max-w-[200px] mx-auto">
        {days.map((d, i) => (
          <button
            key={i}
            type="button"
            data-day={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono transition-all duration-300 ${
              activeDay === i ? "bg-accent text-white scale-95" : "bg-ghost/80 text-primary"
            }`}
          >
            {d}
          </button>
        ))}
        <div
          data-save
          className="col-span-7 mt-3 py-2 rounded-lg bg-primary/10 text-center text-xs font-mono text-primary"
        >
          Save
        </div>
      </div>
      <div
        ref={cursorRef}
        className="absolute w-5 h-5 pointer-events-none z-10 transition-opacity"
        style={{ left: 0, top: 0 }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent drop-shadow">
          <path d="M0 0 L0 20 L8 16 L12 24 L16 20 L12 16 Z" fill="currentColor" stroke="var(--color-primary)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

export function FeatureCards({ features }: { features: Feature[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [features]);

  const sorted = [...features].sort((a, b) => a.order_index - b.order_index);
  const cards = sorted.length >= 3 ? sorted : [
    { card_type: "shuffler" as const, title: "Adaptive Interface Intelligence", description: "Systems that learn and adapt.", sub_labels: ["Context-aware layouts", "Dynamic component loading", "Predictive state management"], typewriter_messages: [], scheduler_label: "Schedule your precision session" },
    { card_type: "typewriter" as const, title: "Real-Time Visual Feedback Systems", description: "Every interaction surfaces immediate feedback.", sub_labels: [], typewriter_messages: ["Rendering pipeline: 16ms", "Input latency: <8ms", "State sync: real-time"], scheduler_label: null },
    { card_type: "scheduler" as const, title: "Precision Interaction Architecture", description: "Orchestrated interactions with deterministic timing.", sub_labels: [], typewriter_messages: [], scheduler_label: "Schedule your precision session" },
  ].map((c, i) => ({ ...c, id: String(i), order_index: i } as Feature));

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 sm:px-10 max-w-6xl mx-auto"
    >
      <h2 className="font-sans font-bold text-primary text-2xl sm:text-3xl tracking-tight mb-12 text-center">
        The experience layer
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => { cardRefs.current[i] = el; }}
          >
            {card.card_type === "shuffler" && (
              <DiagnosticShuffler
                labels={card.sub_labels}
                title={card.title}
                description={card.description}
              />
            )}
            {card.card_type === "typewriter" && (
              <TelemetryTypewriter
                messages={card.typewriter_messages}
                title={card.title}
                description={card.description}
              />
            )}
            {card.card_type === "scheduler" && (
              <CursorProtocolScheduler
                label={card.scheduler_label ?? "Schedule your session"}
                title={card.title}
                description={card.description}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
