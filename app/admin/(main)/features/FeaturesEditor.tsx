"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronUp, ChevronDown, Pencil, Trash2 } from "lucide-react";

type Item = {
  id: string;
  title: string;
  description: string | null;
  card_type: "shuffler" | "typewriter" | "scheduler";
  order_index: number;
  sub_labels: string[];
  typewriter_messages: string[];
  scheduler_label: string | null;
  is_published: boolean;
};

export function FeaturesEditor({ items: initial }: { items: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    card_type: "shuffler" as "shuffler" | "typewriter" | "scheduler",
    sub_labels: "[]",
    typewriter_messages: "[]",
    scheduler_label: "",
  });

  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  function openEdit(item: Item) {
    setEditing(item.id);
    setForm({
      title: item.title,
      description: item.description ?? "",
      card_type: item.card_type,
      sub_labels: JSON.stringify(item.sub_labels ?? [], null, 2),
      typewriter_messages: JSON.stringify(item.typewriter_messages ?? [], null, 2),
      scheduler_label: item.scheduler_label ?? "",
    });
  }

  async function saveEdit() {
    if (!editing) return;
    let sub: string[] = [];
    let msg: string[] = [];
    try {
      sub = JSON.parse(form.sub_labels);
    } catch {}
    try {
      msg = JSON.parse(form.typewriter_messages);
    } catch {}
    await supabase.from("features").update({
      title: form.title,
      description: form.description || null,
      card_type: form.card_type,
      sub_labels: sub,
      typewriter_messages: msg,
      scheduler_label: form.scheduler_label || null,
    }).eq("id", editing);
    setItems((prev) => prev.map((p) => (p.id === editing ? { ...p, ...form, sub_labels: sub, typewriter_messages: msg } : p)));
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
      await supabase.from("features").update({ order_index: o }).eq("id", newOrder[o].id);
    }
    setItems(newOrder.map((i, o) => ({ ...i, order_index: o })));
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this feature?")) return;
    await supabase.from("features").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  async function addNew() {
    const maxOrder = items.length ? Math.max(...items.map((i) => i.order_index)) + 1 : 0;
    const { data } = await supabase.from("features").insert({
      title: "New Feature",
      description: "",
      card_type: "shuffler",
      order_index: maxOrder,
      sub_labels: [],
      typewriter_messages: [],
      scheduler_label: null,
    }).select().single();
    if (data) {
      setItems((prev) => [...prev, data as Item]);
      setEditing((data as Item).id);
      setForm({
        title: (data as Item).title,
        description: "",
        card_type: "shuffler",
        sub_labels: "[]",
        typewriter_messages: "[]",
        scheduler_label: "",
      });
      router.refresh();
    }
  }

  return (
    <div className="space-y-4">
      <button type="button" onClick={addNew} className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium">Add feature</button>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-4 rounded-xl bg-primary/50 border border-ghost/10">
            {editing === item.id ? (
              <div className="space-y-3">
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost"
                  placeholder="Title"
                />
                <input
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost"
                  placeholder="Description"
                />
                <select
                  value={form.card_type}
                  onChange={(e) => setForm((f) => ({ ...f, card_type: e.target.value as Item["card_type"] }))}
                  className="px-3 py-2 rounded-lg bg-graphite text-ghost"
                >
                  <option value="shuffler">Shuffler</option>
                  <option value="typewriter">Typewriter</option>
                  <option value="scheduler">Scheduler</option>
                </select>
                {(form.card_type === "shuffler") && (
                  <textarea value={form.sub_labels} onChange={(e) => setForm((f) => ({ ...f, sub_labels: e.target.value }))} rows={3} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost font-mono text-sm" placeholder='["A","B","C"]' />
                )}
                {(form.card_type === "typewriter") && (
                  <textarea value={form.typewriter_messages} onChange={(e) => setForm((f) => ({ ...f, typewriter_messages: e.target.value }))} rows={3} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost font-mono text-sm" placeholder='["msg1","msg2"]' />
                )}
                {(form.card_type === "scheduler") && (
                  <input value={form.scheduler_label} onChange={(e) => setForm((f) => ({ ...f, scheduler_label: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-graphite text-ghost" placeholder="Scheduler label" />
                )}
                <div className="flex gap-2">
                  <button type="button" onClick={saveEdit} className="px-3 py-1 rounded bg-accent text-white text-sm">Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="px-3 py-1 rounded bg-ghost/20 text-ghost text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(item.id, -1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronUp size={18} /></button>
                <button type="button" onClick={() => move(item.id, 1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronDown size={18} /></button>
                <span className="flex-1 font-medium text-ghost">{item.title}</span>
                <span className="text-ghost/60 text-sm">{item.card_type}</span>
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
