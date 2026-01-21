import type { MouseEvent } from "react";

type LinkItem = { label: string; href: string };

type Props = {
  brand: string;
  links: LinkItem[];
  currentHash: string;
  onAnchorClick: (href: string, e: MouseEvent<HTMLAnchorElement>) => void;
};

export function SiteHeader({ brand, links, currentHash, onAnchorClick }: Props) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-[0.18em]"
          onClick={(e) => onAnchorClick("#inicio", e)}
        >
          {brand}
        </a>

        <nav aria-label="Navegação principal" className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => onAnchorClick(l.href, e)}
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
  );
}
