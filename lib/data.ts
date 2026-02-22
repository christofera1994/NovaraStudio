import { createClient } from "@/lib/supabase/server";
import type {
  SiteSettings,
  NavLink,
  Feature,
  PhilosophyBlock,
  ProtocolStep,
  PricingTier,
  GalleryItem,
  SiteContent,
} from "@/lib/types";

export async function getSiteContent(): Promise<SiteContent> {
  const supabase = await createClient();
  if (!supabase) {
    return getFallbackContent();
  }

  const [
    { data: settingsRow },
    { data: navRows },
    { data: featureRows },
    { data: philosophyRows },
    { data: protocolRows },
    { data: pricingRows },
    { data: galleryRows },
  ] = await Promise.all([
    supabase.from("site_settings").select("*").limit(1).maybeSingle(),
    supabase.from("nav_links").select("*").order("order_index", { ascending: true }),
    supabase.from("features").select("*").order("order_index", { ascending: true }),
    supabase.from("philosophy_blocks").select("*").order("order_index", { ascending: true }),
    supabase.from("protocol_steps").select("*").order("order_index", { ascending: true }),
    supabase.from("pricing_tiers").select("*").order("order_index", { ascending: true }),
    supabase.from("gallery_items").select("*").order("order_index", { ascending: true }),
  ]);

  const settings: SiteSettings | null = settingsRow
    ? {
        ...settingsRow,
        social_links: (settingsRow.social_links as Record<string, string>) ?? {},
        footer_legal_links: (settingsRow.footer_legal_links as { label: string; href: string }[]) ?? [],
      }
    : null;

  const navLinks: NavLink[] = (navRows ?? []).map((r) => ({ ...r } as NavLink));
  const features: Feature[] = (featureRows ?? []).map((r) => ({
    ...r,
    sub_labels: Array.isArray(r.sub_labels) ? r.sub_labels : [],
    typewriter_messages: Array.isArray(r.typewriter_messages) ? r.typewriter_messages : [],
  })) as Feature[];
  const philosophyBlocks: PhilosophyBlock[] = (philosophyRows ?? []).map((r) => ({ ...r } as PhilosophyBlock));
  const protocolSteps: ProtocolStep[] = (protocolRows ?? []).map((r) => ({
    ...r,
    image_url: (r as { image_url?: string | null }).image_url ?? null,
  })) as ProtocolStep[];
  const pricingTiers: PricingTier[] = (pricingRows ?? []).map((r) => ({
    ...r,
    features_list: Array.isArray(r.features_list) ? r.features_list : [],
  })) as PricingTier[];
  const galleryItems: GalleryItem[] = (galleryRows ?? []).map((r) => ({ ...r } as GalleryItem));

  return {
    settings,
    navLinks,
    features,
    philosophyBlocks,
    protocolSteps,
    pricingTiers,
    galleryItems,
  };
}

function getFallbackContent(): SiteContent {
  return {
    settings: {
      id: "",
      brand_name: "Novara",
      tagline: "A precision digital interface engineered to transform ideas into cinematic experiences.",
      cta_text: "Enter the Experience",
      hero_line_1: "Interface beyond",
      hero_line_2: "boundaries.",
      hero_background_image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80",
      philosophy_common: "Most digital products focus on: features and screens.",
      philosophy_differentiated: "We focus on: experience as instrument.",
      philosophy_keyword: "experience as instrument",
      social_links: {},
      footer_legal_links: [],
      created_at: "",
      updated_at: "",
    },
    navLinks: [
      { id: "1", label: "Experience", href: "#experience", order_index: 0, is_published: true, created_at: "", updated_at: "" },
      { id: "2", label: "Philosophy", href: "#philosophy", order_index: 1, is_published: true, created_at: "", updated_at: "" },
      { id: "3", label: "Protocol", href: "#protocol", order_index: 2, is_published: true, created_at: "", updated_at: "" },
      { id: "4", label: "Pricing", href: "#pricing", order_index: 3, is_published: true, created_at: "", updated_at: "" },
      { id: "5", label: "Contact", href: "#contact", order_index: 4, is_published: true, created_at: "", updated_at: "" },
    ],
    features: [
      {
        id: "1",
        title: "Adaptive Interface Intelligence",
        description: "Systems that learn and adapt to your workflow in real time.",
        card_type: "shuffler",
        order_index: 0,
        sub_labels: ["Context-aware layouts", "Dynamic component loading", "Predictive state management"],
        typewriter_messages: [],
        scheduler_label: null,
        is_published: true,
        created_at: "",
        updated_at: "",
      },
      {
        id: "2",
        title: "Real-Time Visual Feedback Systems",
        description: "Every interaction surfaces immediate, precise feedback.",
        card_type: "typewriter",
        order_index: 1,
        sub_labels: [],
        typewriter_messages: ["Rendering pipeline: 16ms target", "Input latency: <8ms", "State sync: real-time", "Visual diff: active"],
        scheduler_label: null,
        is_published: true,
        created_at: "",
        updated_at: "",
      },
      {
        id: "3",
        title: "Precision Interaction Architecture",
        description: "Orchestrated interactions with deterministic timing.",
        card_type: "scheduler",
        order_index: 2,
        sub_labels: [],
        typewriter_messages: [],
        scheduler_label: "Schedule your precision session",
        is_published: true,
        created_at: "",
        updated_at: "",
      },
    ],
    philosophyBlocks: [],
    protocolSteps: [
      { id: "1", step_number: 1, title: "Define", description: "Map intent to a structured experience model.", animation_type: "geometric", image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", order_index: 0, is_published: true, created_at: "", updated_at: "" },
      { id: "2", step_number: 2, title: "Orchestrate", description: "Compose interactions with precise timing.", animation_type: "scanline", image_url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80", order_index: 1, is_published: true, created_at: "", updated_at: "" },
      { id: "3", step_number: 3, title: "Deliver", description: "Render and ship with cinematic fidelity.", animation_type: "waveform", image_url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80", order_index: 2, is_published: true, created_at: "", updated_at: "" },
    ],
    pricingTiers: [
      { id: "1", name: "Essential", description: "Core interface toolkit for small teams.", price_display: "Custom", features_list: ["Up to 3 projects", "Basic support", "Standard components"], is_highlighted: false, cta_text: "Get Started", order_index: 0, is_published: true, created_at: "", updated_at: "" },
      { id: "2", name: "Performance", description: "Full precision stack for production experiences.", price_display: "Custom", features_list: ["Unlimited projects", "Priority support", "Advanced animations", "CMS integration"], is_highlighted: true, cta_text: "Enter the Experience", order_index: 1, is_published: true, created_at: "", updated_at: "" },
      { id: "3", name: "Enterprise", description: "Dedicated architecture and SLAs.", price_display: "Custom", features_list: ["Everything in Performance", "Dedicated success", "Custom integrations", "SLA guarantee"], is_highlighted: false, cta_text: "Contact Sales", order_index: 2, is_published: true, created_at: "", updated_at: "" },
    ],
    galleryItems: [],
  };
}
