import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { NavLinksEditor } from "./NavLinksEditor";

export default async function AdminNavPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("nav_links").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Nav Links</h1>
      <NavLinksEditor items={rows ?? []} />
    </div>
  );
}
