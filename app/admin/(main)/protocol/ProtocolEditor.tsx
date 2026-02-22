"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronUp, ChevronDown, Pencil, Trash2 } from "lucide-react";

type Item = {
  id: string;
  step_number: number;
  title: string;
  description: string | null;
  animation_type: "geometric" | "scanline" | "waveform";
  image_url: string | null;
  order_index: number;
  is_published: boolean;
};

export function ProtocolEditor({ items: initial }: { items: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", description: "", animation_type: "geometric" as Item["animation_type"], image_url: "" });

  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  function openEdit(item: Item) {
    setEditing(item.id);
    setForm({
      title: item.title,
      description: item.description ?? "",
      animation_type: item.animation_type,
      image_url: item.image_url ?? "",
    });
  }

  async function saveEdit() {
    if (!editing) return;
    await supabase.from("protocol_steps").update({
      title: form.title,
      description: form.description || null,
      animation_type: form.animation_type,
      image_url: form.image_url.trim() || null,
    }).eq("id", editing);
    setItems((prev) => prev.map((p) => (p.id === editing ? { ...p, ...form } : p)));
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
      await supabase.from("protocol_steps").update({ order_index: o }).eq("id", newOrder[o].id);
    }
    setItems(newOrder.map((i, o) => ({ ...i, order_index: o })));
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this step?")) return;
    await supabase.from("protocol_steps").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  async function addNew() {
    const maxOrder = items.length ? Math.max(...items.map((i) => i.order_index)) + 1 : 0;
    const { data } = await supabase.from("protocol_steps").insert({
      step_number: items.length + 1,
      title: "New Step",
      description: "",
      animation_type: "geometric",
      image_url: null,
      order_index: maxOrder,
    }).select().single();
    if (data) {
      setItems((prev) => [...prev, data as Item]);
      router.refresh();
    }
  }

  return (
    <div className="space-y-4">
      <button type="button" onClick={addNew} className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium">Add step</button>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 p-3 rounded-lg bg-primary/50 border border-ghost/10">
            <button type="button" onClick={() => move(item.id, -1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronUp size={18} /></button>
            <button type="button" onClick={() => move(item.id, 1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronDown size={18} /></button>
            {editing === item.id ? (
              <div className="flex flex-col gap-2 w-full">
                <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full px-2 py-1 rounded bg-graphite text-ghost" placeholder="Title" />
                <input value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="w-full px-2 py-1 rounded bg-graphite text-ghost" placeholder="Description" />
                <input value={form.image_url} onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))} className="w-full px-2 py-1 rounded bg-graphite text-ghost text-sm" placeholder="Image URL (optional)" />
                <select value={form.animation_type} onChange={(e) => setForm((f) => ({ ...f, animation_type: e.target.value as Item["animation_type"] }))} className="px-2 py-1 rounded bg-graphite text-ghost text-sm w-full">
                  <option value="geometric">geometric</option>
                  <option value="scanline">scanline</option>
                  <option value="waveform">waveform</option>
                </select>
                <div className="flex gap-2">
                  <button type="button" onClick={saveEdit} className="text-accent text-sm">Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="text-ghost/70 text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <span className="text-ghost/60 text-sm">Step {item.step_number}</span>
                <span className="flex-1 text-ghost font-medium">{item.title}</span>
                <span className="text-ghost/60 text-sm">{item.animation_type}</span>
                <button type="button" onClick={() => openEdit(item)} className="p-1 text-ghost/70 hover:text-ghost"><Pencil size={16} /></button>
                <button type="button" onClick={() => remove(item.id)} className="p-1 text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
