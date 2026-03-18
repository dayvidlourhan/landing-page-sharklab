export const siteData = {
  brand: "SHARKLAB",
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Tráfego pago", href: "#trafego-pago" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#nossos-servicos" },
    { label: "Preços", href: "#precos" },
    { label: "Contato", href: "#contato" },
  ],
  whatsapp: {
    // TODO: troque pelo número real no formato E.164 sem + (ex.: 5511999999999)
    phoneE164NoPlus: "5562981939260",
    defaultMessage: "",
  },
  hero: {
    eyebrow: "Studio digital",
    title: "Sites rápidos, bonitos e que convertem.",
    subtitle:
      "Uma presença online com design sólido, performance e experiência fluida — do primeiro scroll ao contato.",
  },
  about: {
    title: "Sobre",
    subtitle:
      "A gente combina estratégia, execução e foco em resultado para tirar seu negócio do comum — com um processo simples e transparente.",
    pillars: [
      {
        title: "Estratégia",
        description:
          "Entendemos seu objetivo, público e oferta antes de desenhar a página.",
      },
      {
        title: "Execução",
        description:
          "Design limpo, componentes consistentes e performance desde o primeiro build.",
      },
      {
        title: "Resultados",
        description:
          "CTA claro, navegação por âncoras e conteúdo orientado a conversão.",
      },
    ],
  },
  services: [
    {
      title: "Landing pages",
      description: "Páginas focadas em conversão com CTA claro, prova social e performance.",
    },
    {
      title: "Sites institucionais",
      description: "Estrutura completa com seções, conteúdo e navegação por âncoras.",
    },
    {
      title: "UI & refinamento",
      description: "Melhoria visual, micro-interações e componentes consistentes.",
    },
  ],
  pricing: [
    {
      name: "Shark Start",
      priceNote: "/mês",
      price: "R$ 1.800",
      features: [
        "Planejamento estratégico mensal",
        "Gestão de 1 rede social",
        "Conteúdo estratégico (feed + stories)",
        "Artes institucionais",
        "Copywriting básico",
        "Relatório mensal simples"
      ],
      buttonText: "Começar Agora",
    },
    {
      name: "Shark Growth",
      priceNote: "/mês",
      price: "R$ 2.500",
      features: [
        "Estratégia de marketing completa",
        "Gestão de até 2 redes sociais",
        "Conteúdo estratégico em vídeo",
        "Design + copy profissional",
        "Gestão de tráfego pago (Meta Ads)",
        "Estrutura de funil",
        "Relatório mensal detalhado"
      ],
      highlight: true,
      buttonText: "Escolher Growth",
    },
    {
      name: "Shark Scale",
      priceNote: "/mês",
      price: "R$ 4.000",
      features: [
        "Estratégia avançada",
        "Gestão completa de redes sociais",
        "Produção profissional de vídeos",
        "Conteúdo para anúncios e institucionais",
        "Gestão de tráfego (Meta + Google Ads)",
        "Otimizações constantes",
        "Relatórios estratégicos",
        "Suporte prioritário"
      ],
      buttonText: "Escalar Agora",
    },
    {
      name: "Shark Custom",
      priceNote: "Valor definido conforme escopo",
      price: "Sob orçamento",
      features: [
        "TikTok Ads",
        "Campanhas específicas",
        "Lançamentos",
        "Produções audiovisuais especiais",
        "Captação presencial",
        "Consultoria estratégica"
      ],
      buttonText: "Falar com a SharkLab",
    },
  ],
  contact: {
    email: "agencysharklab@gmail.com",
    phone: "+55 (62) 98193-9260",
    address: "Goiânia, GO - Brasil",
  },
} as const;

export const buildWhatsAppLink = (phone: string, message?: string) => {
  if (!message) return `https://wa.me//${phone}`;
  const text = encodeURIComponent(message);
  return `https://wa.me//${phone}?text=${text}`;
};
