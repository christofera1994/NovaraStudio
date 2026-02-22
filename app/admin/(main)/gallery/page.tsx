import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { GalleryEditor } from "./GalleryEditor";

const BUCKET = "site-media";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rows } = await supabase.from("gallery_items").select("*").order("order_index", { ascending: true });

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-6">Gallery</h1>
      <GalleryEditor items={rows ?? []} bucket={BUCKET} />
    </div>
  );
}
