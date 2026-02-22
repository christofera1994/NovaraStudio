"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";

type Item = { id: string; name: string; email: string; message: string; created_at: string };

export function ContactSubmissionsList({ items: initial }: { items: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const supabase = createClient();
  if (!supabase) return <p className="text-red-400">Supabase not configured.</p>;

  async function remove(id: string) {
    if (!confirm("Delete this submission?")) return;
    await supabase.from("contact_submissions").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    router.refresh();
  }

  if (items.length === 0) {
    return <p className="text-ghost/60">No submissions yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="p-4 rounded-xl bg-primary/50 border border-ghost/10">
          <div className="flex justify-between items-start gap-4">
            <div className="min-w-0 flex-1">
              <p className="font-medium text-ghost">{item.name}</p>
              <p className="text-sm text-accent">{item.email}</p>
              <p className="text-sm text-ghost/80 mt-2 whitespace-pre-wrap">{item.message}</p>
              <p className="text-xs text-ghost/50 mt-2">{new Date(item.created_at).toLocaleString()}</p>
            </div>
            <button
              type="button"
              onClick={() => remove(item.id)}
              className="p-2 text-red-400 hover:text-red-300 shrink-0"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
