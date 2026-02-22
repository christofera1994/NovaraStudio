import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PricingEditor } from "./PricingEditor";

export default async function AdminPricingPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("pricing_tiers").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Pricing Tiers</h1>
      <PricingEditor items={rows ?? []} />
    </div>
  );
}
