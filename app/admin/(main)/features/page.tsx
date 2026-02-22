import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { FeaturesEditor } from "./FeaturesEditor";

export default async function AdminFeaturesPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("features").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Features</h1>
      <FeaturesEditor items={rows ?? []} />
    </div>
  );
}
