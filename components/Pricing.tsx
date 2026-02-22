"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

export function Pricing({
  tiers,
  ctaText,
}: {
  tiers: PricingTier[];
  ctaText: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
  }, [tiers.length]);

  const sorted = [...tiers].sort((a, b) => a.order_index - b.order_index);
  const list = sorted.length ? sorted : [
    { id: "1", name: "Essential", description: "Core interface toolkit.", price_display: "Custom", features_list: ["Up to 3 projects", "Basic support"], is_highlighted: false, cta_text: "Get Started", order_index: 0, is_published: true, created_at: "", updated_at: "" },
    { id: "2", name: "Performance", description: "Full precision stack.", price_display: "Custom", features_list: ["Unlimited projects", "Priority support", "CMS integration"], is_highlighted: true, cta_text: ctaText, order_index: 1, is_published: true, created_at: "", updated_at: "" },
    { id: "3", name: "Enterprise", description: "Dedicated architecture.", price_display: "Custom", features_list: ["Everything in Performance", "SLA guarantee"], is_highlighted: false, cta_text: "Contact Sales", order_index: 2, is_published: true, created_at: "", updated_at: "" },
  ] as PricingTier[];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <h2 className="font-sans font-bold text-primary text-2xl sm:text-3xl tracking-tight mb-12 text-center">
        Get started
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((tier, i) => (
          <div
            key={tier.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`rounded-[2rem] p-6 border shadow-lg flex flex-col ${
              tier.is_highlighted
                ? "bg-primary text-ghost border-accent ring-2 ring-accent/50 scale-105 md:scale-105"
                : "bg-background border-primary/10 text-primary"
            }`}
          >
            <h3 className="font-sans font-bold text-lg">{tier.name}</h3>
            {tier.description && (
              <p className={`text-sm mt-1 ${tier.is_highlighted ? "text-ghost/80" : "text-graphite/80"}`}>
                {tier.description}
              </p>
            )}
            {tier.price_display && (
              <p className="font-mono text-accent mt-4">{tier.price_display}</p>
            )}
            <ul className="mt-4 space-y-2 flex-1">
              {(tier.features_list || []).map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#pricing"
              className={`mt-6 py-3 rounded-full text-center font-medium text-sm btn-magnetic overflow-hidden relative group ${
                tier.is_highlighted
                  ? "bg-accent text-white"
                  : "bg-primary/10 text-primary hover:bg-primary hover:text-ghost"
              }`}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">{tier.cta_text ?? "Get Started"}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
