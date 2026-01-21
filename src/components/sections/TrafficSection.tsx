import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, siteData } from "./siteData";

export function TrafficSection() {
  const waLink = buildWhatsAppLink(
    siteData.whatsapp.phoneE164NoPlus,
    siteData.whatsapp.defaultMessage,
  );

  return (
    <section id="trafego" className="py-14 scroll-mt-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4 text-left animate-fade-in">
          <h2 className="text-2xl font-semibold md:text-3xl">{siteData.traffic.title}</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {siteData.traffic.subtitle}
          </p>
          <ul className="space-y-2">
            {siteData.traffic.bullets.map((b) => (
              <li key={b} className="text-sm text-foreground/80">
                • {b}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button asChild>
              <a href={waLink} target="_blank" rel="noreferrer">
                {siteData.traffic.ctaLabel}
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 text-left shadow-sm animate-enter">
          <p className="text-sm font-medium">{siteData.traffic.cardTitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">{siteData.traffic.cardBody}</p>
        </div>
      </div>
    </section>
  );
}
