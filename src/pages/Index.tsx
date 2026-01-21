import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteData } from "@/components/sections/siteData";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#nossos-servicos" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

const Index = () => {
  const location = useLocation();
  const currentHash = location.hash || "#inicio";

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
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a
            href="#inicio"
            className="text-sm font-semibold tracking-[0.18em]"
            onClick={(e) => {
              if (location.hash === "#inicio") {
                e.preventDefault();
                scrollToHash("#inicio");
              }
            }}
          >
            {siteData.brand}
          </a>

          <nav aria-label="Navegação principal" className="hidden gap-6 text-sm md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  // Se clicar no link que já está ativo, força o scroll novamente.
                  if (location.hash === l.href) {
                    e.preventDefault();
                    scrollToHash(l.href);
                  }
                }}
                className={
                  l.href === currentHash
                    ? "font-medium text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <HeroSection onScrollToServices={() => scrollToHash("#nossos-servicos")} />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
