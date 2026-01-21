import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#nossos-servicos" },
  { label: "Sobre", href: "#sobre" },
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
            SHARKLAB
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
        <section id="inicio" className="min-h-[40vh] py-12 scroll-mt-20">
          <h1 className="text-2xl font-semibold">Início</h1>
        </section>
        <section id="nossos-servicos" className="min-h-[40vh] py-12 scroll-mt-20">
          <h2 className="text-xl font-semibold">Nossos Serviços</h2>
        </section>
        <section id="sobre" className="min-h-[40vh] py-12 scroll-mt-20">
          <h2 className="text-xl font-semibold">Sobre</h2>
        </section>
        <section id="precos" className="min-h-[40vh] py-12 scroll-mt-20">
          <h2 className="text-xl font-semibold">Preços</h2>
        </section>
        <section id="contato" className="min-h-[40vh] py-12 scroll-mt-20">
          <h2 className="text-xl font-semibold">Contato</h2>
        </section>
      </main>
    </div>
  );
};

export default Index;
