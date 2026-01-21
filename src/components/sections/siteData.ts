export const siteData = {
  brand: "SHARKLAB",
  whatsapp: {
    // TODO: troque pelo número real no formato E.164 sem + (ex.: 5511999999999)
    phoneE164NoPlus: "5599999999999",
    defaultMessage: "Olá! Quero um orçamento.",
  },
  hero: {
    eyebrow: "Studio digital",
    title: "Sites rápidos, bonitos e que convertem.",
    subtitle:
      "Uma presença online com design sólido, performance e experiência fluida — do primeiro scroll ao contato.",
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
      name: "Essencial",
      priceNote: "a partir de",
      price: "R$ 1.490",
      features: ["1 página (landing)", "Design responsivo", "CTA para WhatsApp"],
    },
    {
      name: "Institucional",
      priceNote: "a partir de",
      price: "R$ 2.990",
      features: ["Até 5 seções", "Animações leves", "Otimização básica"],
      highlight: true,
    },
    {
      name: "Sob medida",
      priceNote: "vamos conversar",
      price: "Custom",
      features: ["Escopo flexível", "Integrações", "Evolução contínua"],
    },
  ],
} as const;

export const buildWhatsAppLink = (phone: string, message: string) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
};
