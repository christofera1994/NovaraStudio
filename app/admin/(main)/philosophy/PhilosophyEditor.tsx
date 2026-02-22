"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronUp, ChevronDown, Pencil, Trash2 } from "lucide-react";

type Item = { id: string; content: string; order_index: number; is_published: boolean };

export function PhilosophyEditor({ items: initial }: { items: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ content: "" });

  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  function openEdit(item: Item) {
    setEditing(item.id);
    setForm({ content: item.content });
  }

  async function saveEdit() {
    if (!editing) return;
    await supabase.from("philosophy_blocks").update({ content: form.content }).eq("id", editing);
    setItems((prev) => prev.map((p) => (p.id === editing ? { ...p, content: form.content } : p)));
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
      await supabase.from("philosophy_blocks").update({ order_index: o }).eq("id", newOrder[o].id);
    }
    setItems(newOrder.map((i, o) => ({ ...i, order_index: o })));
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this block?")) return;
    await supabase.from("philosophy_blocks").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  async function addNew() {
    const maxOrder = items.length ? Math.max(...items.map((i) => i.order_index)) + 1 : 0;
    const { data } = await supabase.from("philosophy_blocks").insert({ content: "New block", order_index: maxOrder }).select().single();
    if (data) {
      setItems((prev) => [...prev, data as Item]);
      router.refresh();
    }
  }

  return (
    <div className="space-y-4">
      <button type="button" onClick={addNew} className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium">Add block</button>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 p-3 rounded-lg bg-primary/50 border border-ghost/10">
            <button type="button" onClick={() => move(item.id, -1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronUp size={18} /></button>
            <button type="button" onClick={() => move(item.id, 1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronDown size={18} /></button>
            {editing === item.id ? (
              <>
                <textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} rows={2} className="flex-1 px-2 py-1 rounded bg-graphite text-ghost text-sm" />
                <button type="button" onClick={saveEdit} className="text-accent text-sm">Save</button>
                <button type="button" onClick={() => setEditing(null)} className="text-ghost/70 text-sm">Cancel</button>
              </>
            ) : (
              <>
                <span className="flex-1 text-ghost text-sm line-clamp-2">{item.content}</span>
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
