import dashboardImage from "@/assets/trafego-pago-dashboard.png";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Gestão de Tráfego Pago (Meta, Google, TikTok)",
  "Estrutura de Funil de Vendas",
  "Otimizações Constantes e Relatórios Estratégicos",
];

export function PaidTrafficSection() {
  return (
    <section id="trafego-pago" className="py-14 scroll-mt-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="text-left">
          <Badge variant="secondary" className="mb-4">
            Tráfego pago
          </Badge>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Tráfego pago que <span className="text-primary">gera resultado</span>
          </h2>

          <p className="mt-4 max-w-prose text-sm text-muted-foreground">
            Deixe o amadorismo de lado. Nossa gestão de <strong>Meta Ads</strong>,{" "}
            <strong>Google Ads</strong> e <strong>TikTok Ads</strong> combina estratégia, dados e
            criativos de alta conversão para escalar empresas que buscam crescimento real.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_70%_20%,hsl(var(--primary)/0.18),transparent_60%)]" />
          <img
            src={dashboardImage}
            alt="Painel ilustrativo de performance: tráfego e receita"
            loading="lazy"
            decoding="async"
            className="relative h-auto w-full"
          />
        </Card>
      </div>
    </section>
  );
}
