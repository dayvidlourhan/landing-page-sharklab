import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";

function renderIndex(initialUrl: string) {
  return render(
    <MemoryRouter initialEntries={[initialUrl]}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Home sections render", () => {
  it("renders key navigation anchors", () => {
    renderIndex("/#inicio");

    expect(document.getElementById("inicio")).toBeTruthy();
    expect(document.getElementById("trafego-pago")).toBeTruthy();
    expect(document.getElementById("sobre")).toBeTruthy();
    expect(document.getElementById("nossos-servicos")).toBeTruthy();
    expect(document.getElementById("precos")).toBeTruthy();
    expect(document.getElementById("contato")).toBeTruthy();
  });

  it("renders key section texts", () => {
    renderIndex("/#sobre");

    // Hero
    expect(
      screen.getByRole("heading", { name: /Sites rápidos, bonitos e que convertem\./i }),
    ).toBeInTheDocument();

    // Services/Pricing/Contact titles
    expect(screen.getByRole("heading", { name: /Nossos Serviços/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Preços/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Contato/i })).toBeInTheDocument();

    // About title
    expect(screen.getByRole("heading", { name: /^Sobre$/i })).toBeInTheDocument();
  });

  it("renders header links for each anchor", () => {
    renderIndex("/#inicio");

    expect(screen.getByRole("link", { name: /Início/i })).toHaveAttribute("href", "#inicio");
    expect(screen.getByRole("link", { name: /Tráfego pago/i })).toHaveAttribute(
      "href",
      "#trafego-pago",
    );
    expect(screen.getByRole("link", { name: /Sobre/i })).toHaveAttribute("href", "#sobre");
    expect(screen.getByRole("link", { name: /Serviços/i })).toHaveAttribute(
      "href",
      "#nossos-servicos",
    );
    expect(screen.getByRole("link", { name: /Preços/i })).toHaveAttribute("href", "#precos");
    expect(screen.getByRole("link", { name: /Contato/i })).toHaveAttribute("href", "#contato");
  });
});