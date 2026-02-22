# Database setup – step-by-step

Use this after your first Supabase project is created and you have already run the initial schema.

---

## 1. Run the first migration (if you haven’t yet)

1. Open **Supabase Dashboard** → your project.
2. Go to **SQL Editor**.
3. Click **New query**.
4. Open `novara/supabase/migrations/001_initial_schema.sql` in your code editor, copy **all** of its contents.
5. Paste into the SQL Editor.
6. Click **Run** (or Ctrl+Enter).
7. Confirm it runs without errors.

This creates: `site_settings`, `nav_links`, `features`, `philosophy_blocks`, `protocol_steps`, `pricing_tiers`, `gallery_items`, RLS policies, and triggers.

---

## 2. Run the second migration (contact form + protocol images)

1. In **SQL Editor**, click **New query** again.
2. Open `novara/supabase/migrations/002_contact_and_protocol_images.sql`, copy **all** of its contents.
3. Paste into the SQL Editor.
4. Click **Run**.

This creates:

- **`contact_submissions`** – stores contact form submissions (name, email, message). Public can INSERT; only authenticated admins can SELECT/DELETE.
- **`protocol_steps.image_url`** – optional image URL per protocol step (for 3D/nature style images). Existing rows get `NULL`; you can set URLs in Admin → Protocol.

---

## 3. Add a “Contact” nav link (optional)

If you want “Contact” in the main nav:

1. Go to **Table Editor** → **nav_links**.
2. Click **Insert row**.
3. Set:
   - **label:** `Contact`
   - **href:** `#contact`
   - **order_index:** one more than your last link (e.g. `4` if you have 0–3).
   - **is_published:** `true`
4. Save.

Or use **Admin** → **Nav Links** → **Add link** and set label “Contact”, href “#contact”, then use the up/down arrows to reorder.

---

## 4. Set hero and protocol images from Admin

- **Hero image:** Admin → **Settings** → **Hero background image URL**. Use any full URL (e.g. Unsplash). Example: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80`.
- **Protocol step images:** Admin → **Protocol** → **Edit** on each step → **Image URL (optional)**. Same idea: paste an image URL (3D or nature style).

No extra SQL needed; the app reads these from the existing tables.

---

## 5. Summary: what you can do in Admin

| Section              | Add | Edit | Delete | Reorder |
|----------------------|-----|------|--------|---------|
| **Settings**         | –   | Yes  | –      | –       |
| **Nav Links**        | Yes | Yes  | Yes    | Yes     |
| **Features**         | Yes | Yes  | Yes    | Yes     |
| **Philosophy blocks**| Yes | Yes  | Yes    | Yes     |
| **Protocol**         | Yes | Yes  | Yes    | Yes     |
| **Pricing**          | Yes | Yes  | Yes    | Yes     |
| **Gallery**          | Yes | Yes  | Yes    | Yes     |
| **Contact submissions** | No* | No*  | Yes    | –       |

\*Submissions are created only by the public contact form; in Admin you can only **view** and **delete** them.

---

## 6. If something fails

- **“relation does not exist”** – Run the migration that creates that table (001 or 002).
- **“permission denied”** – You must be logged in as an admin (Auth) when using the Admin panel; RLS allows only authenticated users to write.
- **Contact form “Server not configured”** – Check `.env.local` has `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and that `002_contact_and_protocol_images.sql` has been run so `contact_submissions` exists.
