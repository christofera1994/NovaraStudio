import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ContactSubmissionsList } from "./ContactSubmissionsList";

export default async function AdminContactPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Contact submissions</h1>
      <p className="text-ghost/70 text-sm mb-6">View and delete messages from the site contact form. You cannot add submissions here.</p>
      <ContactSubmissionsList items={rows ?? []} />
    </div>
  );
}
