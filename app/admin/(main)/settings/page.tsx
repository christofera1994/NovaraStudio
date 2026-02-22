import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SettingsForm } from "./SettingsForm";

export default async function AdminSettingsPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: row } = await supabase.from("site_settings").select("*").single();
  const settings = row ?? null;

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Site Settings</h1>
      <SettingsForm settings={settings} />
    </div>
  );
}
