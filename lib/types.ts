export interface SiteSettings {
  id: string;
  brand_name: string;
  tagline: string | null;
  cta_text: string;
  hero_line_1: string | null;
  hero_line_2: string | null;
  hero_background_image_url: string | null;
  philosophy_common: string | null;
  philosophy_differentiated: string | null;
  philosophy_keyword: string | null;
  social_links: Record<string, string>;
  footer_legal_links: { label: string; href: string }[];
  created_at: string;
  updated_at: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export type FeatureCardType = "shuffler" | "typewriter" | "scheduler";

export interface Feature {
  id: string;
  title: string;
  description: string | null;
  card_type: FeatureCardType;
  order_index: number;
  sub_labels: string[];
  typewriter_messages: string[];
  scheduler_label: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface PhilosophyBlock {
  id: string;
  content: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProtocolStep {
  id: string;
  step_number: number;
  title: string;
  description: string | null;
  animation_type: "geometric" | "scanline" | "waveform";
  image_url: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string | null;
  price_display: string | null;
  features_list: string[];
  is_highlighted: boolean;
  cta_text: string | null;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryItem {
  id: string;
  title: string | null;
  caption: string | null;
  media_type: "image" | "video";
  media_url: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface SiteContent {
  settings: SiteSettings | null;
  navLinks: NavLink[];
  features: Feature[];
  philosophyBlocks: PhilosophyBlock[];
  protocolSteps: ProtocolStep[];
  pricingTiers: PricingTier[];
  galleryItems: GalleryItem[];
}
