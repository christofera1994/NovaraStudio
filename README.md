# Novara — Cinematic Landing Page

A precision digital interface landing page with **Preset D — Vapor Clinic** aesthetic, GSAP animations, and a full **Supabase-powered admin CMS**.

## Stack

- **Next.js 15** (App Router), React 19, TypeScript
- **Tailwind CSS** 3.4.17
- **GSAP 3** + ScrollTrigger
- **Supabase** (Auth, Postgres, Storage)
- **Lucide React** icons

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run both migrations in order:  
   - `supabase/migrations/001_initial_schema.sql`  
   - `supabase/migrations/002_contact_and_protocol_images.sql`  
   See **DATABASE_SETUP.md** for a full step-by-step guide.
3. In **Storage**, create a bucket named **`site-media`** and set it to **Public** (so uploaded images/videos get public URLs).
4. In **Authentication → Providers**, enable **Email** and create an admin user (or use sign up from `/admin/login` if you enable it).

### 3. Environment variables

Copy `.env.local.example` to `.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL` — project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon/public key

### 4. Run the app

```bash
npm run dev
```

- **Site:** [http://localhost:3000](http://localhost:3000)
- **Admin:** [http://localhost:3000/admin](http://localhost:3000/admin) (redirects to `/admin/login` if not signed in)

## Admin panel

- **Settings** — Brand, hero lines, CTA, philosophy copy, footer links.
- **Nav Links** — Add / edit / reorder / delete.
- **Features** — Three cards (Shuffler, Typewriter, Scheduler); edit titles, copy, and card-specific data.
- **Philosophy** — Optional extra blocks (main copy is in Settings).
- **Protocol** — Steps with animation type and reorder.
- **Pricing** — Tiers, features list, highlighted card, CTA.
- **Gallery** — Upload images/videos to **site-media**; add / edit / reorder.
- **Contact submissions** — View and delete messages from the contact form (no add; submissions come from the site).

All content is read from Supabase on the public site; edits in admin reflect after refresh (or use revalidation as needed).

## Design system (Preset D — Vapor Clinic)

- **Primary:** Deep Void `#0A0A14`
- **Accent:** Plasma `#7B61FF`
- **Background:** Ghost `#F0EFF4`
- **Typography:** Sora (headings), Instrument Serif (drama), Fira Code (data)
- **Image mood:** bioluminescence, dark water, neon, microscopy (Unsplash)

Global noise overlay, rounded corners (2rem–4rem), magnetic buttons, and GSAP-driven scroll/entrance animations are applied across the site.
