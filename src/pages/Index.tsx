import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PaidTrafficSection,
  PricingSection,
  ServicesSection,
  siteData,
} from "@/components/sections";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.replace("#", ""));
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const scrollToHash = (hash: string) => {
    const id = decodeURIComponent(hash.replace("#", ""));
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-4 py-10">
        <HeroSection onScrollToServices={() => scrollToHash("#nossos-servicos")} />
        <PaidTrafficSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
