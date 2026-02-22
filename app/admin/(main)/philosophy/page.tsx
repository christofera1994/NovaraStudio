import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PhilosophyEditor } from "./PhilosophyEditor";

export default async function AdminPhilosophyPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("philosophy_blocks").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Philosophy Blocks</h1>
      <p className="text-ghost/70 text-sm mb-4">Main philosophy text is in Site Settings (philosophy_common, philosophy_differentiated, philosophy_keyword). These blocks are optional extras.</p>
      <PhilosophyEditor items={rows ?? []} />
    </div>
  );
}
