import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Vehicles } from "@/components/vehicles";
import { Differentials } from "@/components/differentials";
import { Testimonials } from "@/components/testimonials";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+${siteConfig.whatsapp.number}`,
  image: siteConfig.images.og,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.region.city,
    addressRegion: siteConfig.region.state,
    addressCountry: "BR",
  },
  areaServed: siteConfig.region.area,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <Vehicles />
        <Differentials />
        <Testimonials />
        <About />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
