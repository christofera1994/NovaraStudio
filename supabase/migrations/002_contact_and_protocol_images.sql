-- Contact form submissions (admin only can read/delete)
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public insert contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin read contact_submissions" ON contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete contact_submissions" ON contact_submissions FOR DELETE USING (auth.role() = 'authenticated');

-- Optional image per protocol step (3D / nature hero-style images)
ALTER TABLE protocol_steps ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Optional: default images for existing steps (run once)
-- UPDATE protocol_steps SET image_url = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80' WHERE order_index = 0 AND image_url IS NULL;
-- UPDATE protocol_steps SET image_url = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80' WHERE order_index = 1 AND image_url IS NULL;
-- UPDATE protocol_steps SET image_url = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80' WHERE order_index = 2 AND image_url IS NULL;
