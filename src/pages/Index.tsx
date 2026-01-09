import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";

const Index = () => {
  useEffect(() => {
    document.title = "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire";
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ReSKN Clinic",
          "description": "Personalised skin plans, evidence-informed guidance, and curated treatments.",
          "url": "https://resknclinic.co.uk",
          "email": "hello@resknclinic.co.uk",
          "telephone": "+44 1234 567 890",
          "address": { "@type": "PostalAddress", "addressLocality": "Windsor", "addressRegion": "Berkshire", "addressCountry": "UK" }
        })
      }} />
      <HeroSection />
    </>
  );
};

export default Index;
