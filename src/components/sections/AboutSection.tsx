import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteData } from "./siteData";

export function AboutSection() {
  return (
    <section id="sobre" className="py-14 scroll-mt-20">
      <header className="text-left">
        <h2 className="text-2xl font-semibold">{siteData.about.title}</h2>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          {siteData.about.subtitle}
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteData.about.pillars.map((p) => (
          <Card key={p.title} className="hover-scale text-left">
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
