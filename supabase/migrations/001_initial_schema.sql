-- Novara CMS Schema
-- Run this in Supabase SQL Editor to create tables, RLS, and storage.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- site_settings (singleton)
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_name TEXT NOT NULL DEFAULT 'Novara',
  tagline TEXT,
  cta_text TEXT NOT NULL DEFAULT 'Enter the Experience',
  hero_line_1 TEXT,
  hero_line_2 TEXT,
  hero_background_image_url TEXT,
  philosophy_common TEXT,
  philosophy_differentiated TEXT,
  philosophy_keyword TEXT,
  social_links JSONB DEFAULT '{}',
  footer_legal_links JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO site_settings (brand_name, tagline, cta_text, hero_line_1, hero_line_2)
SELECT 'Novara', 'A precision digital interface engineered to transform ideas into cinematic experiences.', 'Enter the Experience', 'Interface beyond', 'boundaries.'
WHERE NOT EXISTS (SELECT 1 FROM site_settings LIMIT 1);

-- nav_links (ordered)
CREATE TABLE nav_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  href TEXT NOT NULL,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO nav_links (label, href, order_index) VALUES
  ('Experience', '#experience', 0),
  ('Philosophy', '#philosophy', 1),
  ('Protocol', '#protocol', 2),
  ('Pricing', '#pricing', 3);

-- features (3 cards: shuffler, typewriter, scheduler)
CREATE TABLE features (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  card_type TEXT NOT NULL CHECK (card_type IN ('shuffler', 'typewriter', 'scheduler')),
  order_index INT NOT NULL DEFAULT 0,
  -- shuffler: sub_labels JSON array of 3 strings
  sub_labels JSONB DEFAULT '[]',
  -- typewriter: messages JSON array of strings
  typewriter_messages JSONB DEFAULT '[]',
  -- scheduler: label for the grid
  scheduler_label TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO features (title, description, card_type, order_index, sub_labels, typewriter_messages, scheduler_label) VALUES
  (
    'Adaptive Interface Intelligence',
    'Systems that learn and adapt to your workflow in real time.',
    'shuffler',
    0,
    '["Context-aware layouts", "Dynamic component loading", "Predictive state management"]'::jsonb,
    NULL,
    NULL
  ),
  (
    'Real-Time Visual Feedback Systems',
    'Every interaction surfaces immediate, precise feedback.',
    'typewriter',
    1,
    NULL,
    '["Rendering pipeline: 16ms target", "Input latency: <8ms", "State sync: real-time", "Visual diff: active"]'::jsonb,
    NULL
  ),
  (
    'Precision Interaction Architecture',
    'Orchestrated interactions with deterministic timing.',
    'scheduler',
    2,
    NULL,
    NULL,
    'Schedule your precision session'
  );

-- philosophy (optional extra blocks; main text in site_settings)
CREATE TABLE philosophy_blocks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- protocol_steps (ordered, full-screen cards)
CREATE TABLE protocol_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  step_number INT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  animation_type TEXT CHECK (animation_type IN ('geometric', 'scanline', 'waveform')),
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO protocol_steps (step_number, title, description, animation_type, order_index) VALUES
  (1, 'Define', 'Map intent to a structured experience model.', 'geometric', 0),
  (2, 'Orchestrate', 'Compose interactions with precise timing.', 'scanline', 1),
  (3, 'Deliver', 'Render and ship with cinematic fidelity.', 'waveform', 2);

-- pricing_tiers (ordered)
CREATE TABLE pricing_tiers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price_display TEXT,
  features_list JSONB DEFAULT '[]',
  is_highlighted BOOLEAN DEFAULT false,
  cta_text TEXT,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO pricing_tiers (name, description, price_display, features_list, is_highlighted, cta_text, order_index) VALUES
  ('Essential', 'Core interface toolkit for small teams.', 'Custom', '["Up to 3 projects", "Basic support", "Standard components"]'::jsonb, false, 'Get Started', 0),
  ('Performance', 'Full precision stack for production experiences.', 'Custom', '["Unlimited projects", "Priority support", "Advanced animations", "CMS integration"]'::jsonb, true, 'Enter the Experience', 1),
  ('Enterprise', 'Dedicated architecture and SLAs.', 'Custom', '["Everything in Performance", "Dedicated success", "Custom integrations", "SLA guarantee"]'::jsonb, false, 'Contact Sales', 2);

-- gallery_items (ordered, image or video)
CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  caption TEXT,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
  media_url TEXT NOT NULL,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Storage: create bucket "site-media" in Supabase Dashboard (Storage → New bucket).
-- Set the bucket to Public so uploaded files get public URLs for gallery/hero.

-- RLS: public read for all content tables; authenticated write
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE nav_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE philosophy_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE protocol_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Public read (anon can select published or all for settings)
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read nav_links" ON nav_links FOR SELECT USING (is_published = true);
CREATE POLICY "Public read features" ON features FOR SELECT USING (is_published = true);
CREATE POLICY "Public read philosophy_blocks" ON philosophy_blocks FOR SELECT USING (is_published = true);
CREATE POLICY "Public read protocol_steps" ON protocol_steps FOR SELECT USING (is_published = true);
CREATE POLICY "Public read pricing_tiers" ON pricing_tiers FOR SELECT USING (is_published = true);
CREATE POLICY "Public read gallery_items" ON gallery_items FOR SELECT USING (is_published = true);

-- Authenticated full access for admin (service role or authenticated user)
CREATE POLICY "Admin all site_settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all nav_links" ON nav_links FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all features" ON features FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all philosophy_blocks" ON philosophy_blocks FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all protocol_steps" ON protocol_steps FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all pricing_tiers" ON pricing_tiers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all gallery_items" ON gallery_items FOR ALL USING (auth.role() = 'authenticated');

-- Updated_at trigger helper
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER nav_links_updated_at BEFORE UPDATE ON nav_links FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER features_updated_at BEFORE UPDATE ON features FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER philosophy_blocks_updated_at BEFORE UPDATE ON philosophy_blocks FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER protocol_steps_updated_at BEFORE UPDATE ON protocol_steps FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER pricing_tiers_updated_at BEFORE UPDATE ON pricing_tiers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER gallery_items_updated_at BEFORE UPDATE ON gallery_items FOR EACH ROW EXECUTE FUNCTION update_updated_at();
