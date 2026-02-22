import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-ghost mb-2">Dashboard</h1>
      <p className="text-ghost/70 mb-8">Manage site content below. Changes reflect on the public site.</p>
      <div className="grid gap-4 max-w-md">
        <Link href="/admin/nav" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Nav Links
        </Link>
        <Link href="/admin/features" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Features
        </Link>
        <Link href="/admin/protocol" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Protocol Steps
        </Link>
        <Link href="/admin/pricing" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Pricing Tiers
        </Link>
        <Link href="/admin/gallery" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Gallery
        </Link>
        <Link href="/admin/settings" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Site Settings
        </Link>
        <Link href="/admin/contact" className="p-4 rounded-xl bg-primary/50 border border-ghost/10 hover:border-accent/50">
          Contact submissions
        </Link>
      </div>
    </div>
  );
}
