import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, siteData } from "./siteData";

type Props = {
  onScrollToServices: () => void;
};

export function HeroSection({ onScrollToServices }: Props) {
  const waLink = buildWhatsAppLink(
    siteData.whatsapp.phoneE164NoPlus,
    siteData.whatsapp.defaultMessage,
  );

  return (
    <section id="inicio" className="py-14 scroll-mt-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="animate-fade-in text-left">
          <p className="text-sm text-muted-foreground">{siteData.hero.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {siteData.hero.title}
          </h1>
          <p className="mt-4 max-w-prose text-base text-muted-foreground md:text-lg">
            {siteData.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={waLink} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="secondary" onClick={onScrollToServices}>
              Ver serviços
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            * Número do WhatsApp está como placeholder — você pode trocar depois.
          </p>
        </div>

        <div className="animate-enter rounded-xl border bg-card p-6 text-left shadow-sm">
          <div className="space-y-4">
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm font-medium">Performance</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Carregamento rápido e experiência fluida.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm font-medium">Design</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Layout consistente com micro-interações.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm font-medium">Conversão</p>
              <p className="mt-1 text-sm text-muted-foreground">
                CTA claro e navegação por âncoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
