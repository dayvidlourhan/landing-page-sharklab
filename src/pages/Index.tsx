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
import { SiteFooter } from "@/components/layout/SiteFooter";

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

      <SiteFooter
        brand={siteData.brand}
        links={siteData.nav}
        onAnchorClick={(href, e) => {
          // Se clicar no link que já está ativo, força o scroll novamente.
          if (location.hash === href) {
            e.preventDefault();
            scrollToHash(href);
          }
        }}
      />
    </div>
  );
};

export default Index;
