import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { buildWhatsAppLink, siteData } from "./siteData";

export function PricingSection() {
  const waLink = buildWhatsAppLink(
    siteData.whatsapp.phoneE164NoPlus,
    siteData.whatsapp.defaultMessage,
  );

  return (
    <section id="precos" className="py-14 scroll-mt-20">
      <header className="text-left">
        <h2 className="text-2xl font-semibold">Preços</h2>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          Valores de referência — ajustamos conforme escopo e prazo.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {siteData.pricing.map((p) => (
          <Card
            key={p.name}
            className={
              "highlight" in p && p.highlight
                ? "relative text-left ring-1 ring-ring"
                : "text-left"
            }
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base">{p.name}</CardTitle>
                {"highlight" in p && p.highlight ? (
                  <Badge variant="secondary">Mais escolhido</Badge>
                ) : null}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{p.priceNote}</p>
              <p className="text-3xl font-semibold tracking-tight">{p.price}</p>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full">
                <a href={waLink} target="_blank" rel="noreferrer">
                  {"buttonText" in p ? (p as any).buttonText : "Pedir orçamento"}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
