import type { MouseEvent } from "react";

type LinkItem = { label: string; href: string };

type Props = {
  brand: string;
  links: readonly LinkItem[];
  onAnchorClick: (href: string, e: MouseEvent<HTMLAnchorElement>) => void;
};

export function SiteFooter({ brand, links, onAnchorClick }: Props) {
  return (
    <footer className="border-t bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            href="#inicio"
            className="text-sm font-semibold tracking-[0.18em]"
            onClick={(e) => onAnchorClick("#inicio", e)}
          >
            {brand}
          </a>

          <nav aria-label="Links rápidos" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => onAnchorClick(l.href, e)}
                className="text-foreground/70 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
