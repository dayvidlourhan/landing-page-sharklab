const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#nossos-servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#inicio" className="text-sm font-semibold tracking-[0.18em]">
            SHARKLAB
          </a>

          <nav aria-label="Navegação principal" className="hidden gap-6 text-sm md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground/80">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 scroll-smooth">
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
