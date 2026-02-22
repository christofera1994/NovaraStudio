import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Settings, Menu, Layers, Quote, ListOrdered, CreditCard, Image, Mail } from "lucide-react";

export default async function AdminMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = supabase ? await supabase.auth.getUser() : { data: { user: null } };

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-ghost/10 p-4 flex flex-col gap-2">
        <Link href="/admin" className="font-sans font-bold text-accent mb-4">
          Novara Admin
        </Link>
        <NavLink href="/admin" icon={<Settings size={18} />}>Settings</NavLink>
        <NavLink href="/admin/nav" icon={<Menu size={18} />}>Nav Links</NavLink>
        <NavLink href="/admin/features" icon={<Layers size={18} />}>Features</NavLink>
        <NavLink href="/admin/philosophy" icon={<Quote size={18} />}>Philosophy</NavLink>
        <NavLink href="/admin/protocol" icon={<ListOrdered size={18} />}>Protocol</NavLink>
        <NavLink href="/admin/pricing" icon={<CreditCard size={18} />}>Pricing</NavLink>
        <NavLink href="/admin/gallery" icon={<Image size={18} />}>Gallery</NavLink>
        <NavLink href="/admin/contact" icon={<Mail size={18} />}>Contact submissions</NavLink>
        <a href="/" target="_blank" rel="noopener noreferrer" className="text-sm text-ghost/70 hover:text-ghost mt-4">
          View site →
        </a>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm text-ghost/80 hover:text-ghost py-2"
    >
      {icon}
      {children}
    </Link>
  );
}
