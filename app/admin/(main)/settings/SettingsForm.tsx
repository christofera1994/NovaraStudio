"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Row = {
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
};

export function SettingsForm({ settings }: { settings: Row | null }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    brand_name: settings?.brand_name ?? "",
    tagline: settings?.tagline ?? "",
    cta_text: settings?.cta_text ?? "",
    hero_line_1: settings?.hero_line_1 ?? "",
    hero_line_2: settings?.hero_line_2 ?? "",
    hero_background_image_url: settings?.hero_background_image_url ?? "",
    philosophy_common: settings?.philosophy_common ?? "",
    philosophy_differentiated: settings?.philosophy_differentiated ?? "",
    philosophy_keyword: settings?.philosophy_keyword ?? "",
    footer_legal_links: JSON.stringify(settings?.footer_legal_links ?? [], null, 2),
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    if (!supabase) {
      setSaving(false);
      return;
    }
    let parsed: { label: string; href: string }[] = [];
    try {
      parsed = JSON.parse(form.footer_legal_links);
    } catch {
      parsed = [];
    }
    if (settings?.id) {
      await supabase.from("site_settings").update({
        brand_name: form.brand_name,
        tagline: form.tagline || null,
        cta_text: form.cta_text,
        hero_line_1: form.hero_line_1 || null,
        hero_line_2: form.hero_line_2 || null,
        hero_background_image_url: form.hero_background_image_url || null,
        philosophy_common: form.philosophy_common || null,
        philosophy_differentiated: form.philosophy_differentiated || null,
        philosophy_keyword: form.philosophy_keyword || null,
        footer_legal_links: parsed,
      }).eq("id", settings.id);
    } else {
      await supabase.from("site_settings").insert({
        brand_name: form.brand_name,
        tagline: form.tagline || null,
        cta_text: form.cta_text,
        hero_line_1: form.hero_line_1 || null,
        hero_line_2: form.hero_line_2 || null,
        hero_background_image_url: form.hero_background_image_url || null,
        philosophy_common: form.philosophy_common || null,
        philosophy_differentiated: form.philosophy_differentiated || null,
        philosophy_keyword: form.philosophy_keyword || null,
        footer_legal_links: parsed,
      });
    }
    setSaving(false);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Brand name</label>
        <input
          value={form.brand_name}
          onChange={(e) => setForm((f) => ({ ...f, brand_name: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Tagline</label>
        <input
          value={form.tagline}
          onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">CTA text</label>
        <input
          value={form.cta_text}
          onChange={(e) => setForm((f) => ({ ...f, cta_text: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Hero line 1</label>
        <input
          value={form.hero_line_1}
          onChange={(e) => setForm((f) => ({ ...f, hero_line_1: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Hero line 2</label>
        <input
          value={form.hero_line_2}
          onChange={(e) => setForm((f) => ({ ...f, hero_line_2: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Hero background image URL</label>
        <input
          value={form.hero_background_image_url}
          onChange={(e) => setForm((f) => ({ ...f, hero_background_image_url: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Philosophy common</label>
        <input
          value={form.philosophy_common}
          onChange={(e) => setForm((f) => ({ ...f, philosophy_common: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Philosophy differentiated</label>
        <input
          value={form.philosophy_differentiated}
          onChange={(e) => setForm((f) => ({ ...f, philosophy_differentiated: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Philosophy keyword (accent)</label>
        <input
          value={form.philosophy_keyword}
          onChange={(e) => setForm((f) => ({ ...f, philosophy_keyword: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
        />
      </div>
      <div>
        <label className="block text-sm text-ghost/70 mb-1">Footer legal links (JSON)</label>
        <textarea
          value={form.footer_legal_links}
          onChange={(e) => setForm((f) => ({ ...f, footer_legal_links: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost font-mono text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        className="px-4 py-2 rounded-lg bg-accent text-white font-medium disabled:opacity-50"
      >
        {saving ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
