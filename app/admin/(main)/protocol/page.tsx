import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ProtocolEditor } from "./ProtocolEditor";

export default async function AdminProtocolPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("protocol_steps").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Protocol Steps</h1>
      <ProtocolEditor items={rows ?? []} />
    </div>
  );
}
