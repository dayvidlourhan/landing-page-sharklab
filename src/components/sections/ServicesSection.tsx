import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteData } from "./siteData";

export function ServicesSection() {
  return (
    <section id="nossos-servicos" className="py-14 scroll-mt-20">
      <header className="text-left">
        <h2 className="text-2xl font-semibold">Nossos Serviços</h2>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          Escolha um pacote e evolua conforme o seu negócio cresce.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteData.services.map((s) => (
          <Card key={s.title} className="hover-scale text-left">
            <CardHeader>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
