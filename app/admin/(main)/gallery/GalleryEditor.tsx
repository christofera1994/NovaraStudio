"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronUp, ChevronDown, Pencil, Trash2, Upload } from "lucide-react";

type Item = {
  id: string;
  title: string | null;
  caption: string | null;
  media_type: "image" | "video";
  media_url: string;
  order_index: number;
  is_published: boolean;
};

export function GalleryEditor({ items: initial, bucket }: { items: Item[]; bucket: string }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", caption: "" });
  const [uploading, setUploading] = useState(false);

  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  function openEdit(item: Item) {
    setEditing(item.id);
    setForm({ title: item.title ?? "", caption: item.caption ?? "" });
  }

  async function saveEdit() {
    if (!editing) return;
    await supabase.from("gallery_items").update({
      title: form.title || null,
      caption: form.caption || null,
    }).eq("id", editing);
    setItems((prev) => prev.map((p) => (p.id === editing ? { ...p, title: form.title, caption: form.caption } : p)));
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
      await supabase.from("gallery_items").update({ order_index: o }).eq("id", newOrder[o].id);
    }
    setItems(newOrder.map((i, o) => ({ ...i, order_index: o })));
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this item?")) return;
    await supabase.from("gallery_items").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  async function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop() ?? "bin";
    const isVideo = /^(mp4|webm|mov)$/i.test(ext);
    const path = `${Date.now()}-${file.name.replace(/\s/g, "-")}`;
    const { error: uploadErr } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if (uploadErr) {
      alert(uploadErr.message);
      setUploading(false);
      return;
    }
    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path);
    const maxOrder = items.length ? Math.max(...items.map((i) => i.order_index)) + 1 : 0;
    const { data: row } = await supabase.from("gallery_items").insert({
      title: file.name,
      caption: null,
      media_type: isVideo ? "video" : "image",
      media_url: urlData.publicUrl,
      order_index: maxOrder,
    }).select().single();
    if (row) {
      setItems((prev) => [...prev, row as Item]);
      router.refresh();
    }
    setUploading(false);
    e.target.value = "";
  }

  return (
    <div className="space-y-4">
      <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium cursor-pointer">
        <Upload size={18} />
        {uploading ? "Uploading…" : "Upload image or video"}
        <input type="file" accept="image/*,video/*" className="hidden" onChange={onFileSelect} disabled={uploading} />
      </label>
      <p className="text-ghost/60 text-sm">Create a bucket named &quot;site-media&quot; in Supabase Storage with public read access.</p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id} className="p-3 rounded-xl bg-primary/50 border border-ghost/10">
            <div className="aspect-video rounded-lg overflow-hidden bg-graphite mb-2">
              {item.media_type === "image" ? (
                <img src={item.media_url} alt={item.title ?? ""} className="w-full h-full object-cover" />
              ) : (
                <video src={item.media_url} controls className="w-full h-full object-cover" />
              )}
            </div>
            {editing === item.id ? (
              <div className="space-y-2">
                <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full px-2 py-1 rounded bg-graphite text-ghost text-sm" placeholder="Title" />
                <input value={form.caption} onChange={(e) => setForm((f) => ({ ...f, caption: e.target.value }))} className="w-full px-2 py-1 rounded bg-graphite text-ghost text-sm" placeholder="Caption" />
                <div className="flex gap-2">
                  <button type="button" onClick={saveEdit} className="text-accent text-sm">Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="text-ghost/70 text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-wrap">
                <button type="button" onClick={() => move(item.id, -1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronUp size={16} /></button>
                <button type="button" onClick={() => move(item.id, 1)} className="p-1 text-ghost/70 hover:text-ghost"><ChevronDown size={16} /></button>
                <span className="flex-1 text-ghost text-sm truncate">{item.title ?? "Untitled"}</span>
                <button type="button" onClick={() => openEdit(item)} className="p-1 text-ghost/70 hover:text-ghost"><Pencil size={14} /></button>
                <button type="button" onClick={() => remove(item.id)} className="p-1 text-red-400 hover:text-red-300"><Trash2 size={14} /></button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
