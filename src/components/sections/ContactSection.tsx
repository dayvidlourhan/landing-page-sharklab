import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppLink, siteData } from "./siteData";

export function ContactSection() {
  const waLink = buildWhatsAppLink(
    siteData.whatsapp.phoneE164NoPlus,
    siteData.whatsapp.defaultMessage,
  );

  return (
    <section id="contato" className="py-14 scroll-mt-20">
      <header className="text-left">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          Chame no WhatsApp ou deixe uma mensagem (UI pronta — envio será conectado depois, se você quiser).
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-base">WhatsApp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Resposta rápida e alinhamento de escopo.
            </p>
            <div className="mt-4">
              <Button asChild>
                <a href={waLink} target="_blank" rel="noreferrer">
                  FALAR COM A SHARKLAB
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-base">Mensagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" placeholder="Seu nome" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="voce@exemplo.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea id="mensagem" placeholder="Me conte sobre o projeto..." />
            </div>
            <Button type="button" variant="secondary" className="w-full" disabled>
              Enviar (em breve)
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
