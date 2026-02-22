"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronUp, ChevronDown, Pencil, Trash2 } from "lucide-react";

type Item = {
  id: string;
  name: string;
  description: string | null;
  price_display: string | null;
  features_list: string[];
  is_highlighted: boolean;
  cta_text: string | null;
  order_index: number;
  is_published: boolean;
};

export function PricingEditor({ items: initial }: { items: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price_display: "",
    features_list: "[]",
    is_highlighted: false,
    cta_text: "",
  });

  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  function openEdit(item: Item) {
    setEditing(item.id);
    setForm({
      name: item.name,
      description: item.description ?? "",
      price_display: item.price_display ?? "",
      features_list: JSON.stringify(item.features_list ?? [], null, 2),
      is_highlighted: item.is_highlighted,
      cta_text: item.cta_text ?? "",
    });
  }

  async function saveEdit() {
    if (!editing) return;
    let features: string[] = [];
    try {
      features = JSON.parse(form.features_list);
    } catch {}
    await supabase.from("pricing_tiers").update({
      name: form.name,
      description: form.description || null,
      price_display: form.price_display || null,
      features_list: features,
      is_highlighted: form.is_highlighted,
      cta_text: form.cta_text || null,
    }).eq("id", editing);
    setEditing(null);
    router.refresh();
  }

  async function move(id: string, dir: number) {
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1 || (dir < 0 && idx === 0) || (dir > 0 && idx === items.length - 1)) return;
    const newOrder = [...items];
    const otherIdx = idx + dir;
    [newOrder[idx], newOrder[otherIdx]] = [newOrder[otherIdx], newOrder[idx]];
    for (let o = 0; o < newOrder.length; o++) {
      await supabase.from("pricing_tiers").update({ order_index: o }).eq("id", newOrder[o].id);
    }
    setItems(newOrder.map((i, o) => ({ ...i, order_index: o })));
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this tier?")) return;
    await supabase.from("pricing_tiers").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  async function addNew() {
    const maxOrder = items.length ? Math.max(...items.map((i) => i.order_index)) + 1 : 0;
    const { data } = await supabase.from("pricing_tiers").insert({
      name: "New Tier",
      description: "",
      price_display: "Custom",
      features_list: [],
      is_highlighted: false,
      cta_text: "Get Started",
      order_index: maxOrder,
    }).select().single();
    if (data) {
      setItems((prev) => [...prev, data as Item]);
      router.refresh();
    }
  }

  return (
    <div className="space-y-4">
      <button type="button" onClick={addNew} className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium">Add tier</button>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-4 rounded-xl bg-primary/50 border border-ghost/10">
            {editing === item.id ? (
              <div className="space-y-3">
                <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost" placeholder="Name" />
                <input value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost" placeholder="Description" />
                <input value={form.price_display} onChange={(e) => setForm((f) => ({ ...f, price_display: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost" placeholder="Price" />
                <label className="flex items-center gap-2 text-ghost/80">
                  <input type="checkbox" checked={form.is_highlighted} onChange={(e) => setForm((f) => ({ ...f, is_highlighted: e.target.checked }))} />
                  Highlighted (middle card)
                </label>
                <input value={form.cta_text} onChange={(e) => setForm((f) => ({ ...f, cta_text: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost" placeholder="CTA text" />
                <textarea value={form.features_list} onChange={(e) => setForm((f) => ({ ...f, features_list: e.target.value }))} rows={4} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost font-mono text-sm" placeholder='["Feature 1","Feature 2"]' />
                <div className="flex gap-2">
                  <button type="button" onClick={saveEdit} className="px-3 py-1 rounded bg-accent text-white text-sm">Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="px-3 py-1 rounded bg-ghost/20 text-ghost text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(item.id, -1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronUp size={18} /></button>
                <button type="button" onClick={() => move(item.id, 1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronDown size={18} /></button>
                <span className="flex-1 font-medium text-ghost">{item.name}</span>
                {item.is_highlighted && <span className="text-accent text-sm">Highlighted</span>}
                <button type="button" onClick={() => openEdit(item)} className="p-1 text-ghost/70 hover:text-ghost"><Pencil size={16} /></button>
                <button type="button" onClick={() => remove(item.id)} className="p-1 text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
