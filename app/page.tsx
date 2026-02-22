import { getSiteContent } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { Philosophy } from "@/components/Philosophy";
import { Protocol } from "@/components/Protocol";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const content = await getSiteContent();
  const { settings, navLinks, features, protocolSteps, pricingTiers } = content;
  const ctaText = settings?.cta_text ?? "Enter the Experience";

  return (
    <>
      <Navbar links={navLinks} settings={settings} ctaText={ctaText} />
      <main>
        <Hero settings={settings} />
        <FeatureCards features={features} />
        <Philosophy settings={settings} />
        <Protocol steps={protocolSteps} />
        <Pricing tiers={pricingTiers} ctaText={ctaText} />
        <Contact />
        <Footer settings={settings} navLinks={navLinks} />
      </main>
    </>
  );
}
