export const siteConfig = {
  name: "Mello Transportes",
  legalName: "Mello Transportes",
  tagline: "Transporte particular com conforto e segurança.",
  description:
    "Motorista particular e transporte executivo com conforto, segurança e atendimento personalizado. Geely EX2 Max, Renault Kwid e atendimento direto pelo WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mellotransportes.com.br",
  locale: "pt_BR",
  region: {
    city: "Brasília",
    state: "DF",
    area: "Brasília e região",
  },
  contact: {
    phoneDisplay: "(61) 8445-1267",
    address: "Brasília, DF",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "556184451267",
    defaultMessage:
      "Olá! Gostaria de consultar disponibilidade para transporte particular.",
    availabilityMessage:
      "Olá! Gostaria de consultar a disponibilidade do veículo.",
  },
  social: {
    instagram: "https://instagram.com/mellotransportes",
    instagramHandle: "@mellotransportes",
  },
  logo: "/brand/logo.png",
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Veículos", href: "#veiculos" },
    { label: "Conheça-me", href: "#conheca-me" },
  ],
  driver: {
    name: "João Pedro",
    role: "Motorista particular",
    image: "/drivers/joao-pedro.jpg",
    paragraphs: [
      "Meu trabalho é proporcionar uma experiência tranquila do início ao fim. Cada atendimento é feito com atenção, pontualidade e respeito ao seu tempo.",
      "Transporte particular feito para você — sem pressa aparente, sem improviso.",
    ],
  },
  images: {
    /** Usada em Open Graph / SEO — displays dos carros ficam na seção Veículos */
    og: "/vehicles/geely-display.webp",
  },
} as const;

export const services = [
  {
    id: "01",
    title: "Motorista Particular",
    description: "Deslocamentos do dia a dia com conforto e pontualidade.",
    icon: "user",
    highlight: false,
    ctaLabel: "Solicitar particular",
    message:
      "Olá! Gostaria de saber mais sobre o serviço de motorista particular.",
  },
  {
    id: "02",
    title: "Transfer Aeroporto",
    description: "Ida e volta ao aeroporto com antecedência e tranquilidade.",
    icon: "plane",
    highlight: false,
    ctaLabel: "Consultar transfer",
    message: "Olá! Gostaria de consultar um transfer.",
  },
  {
    id: "03",
    title: "Transporte Escolar",
    description:
      "Transporte escolar com pontualidade, responsabilidade e atenção em cada trajeto.",
    icon: "school",
    highlight: true,
    ctaLabel: "Saber mais",
    message:
      "Olá! Gostaria de saber mais sobre o serviço de transporte escolar.",
  },
  {
    id: "04",
    title: "Eventos",
    description: "Casamentos, festas e ocasiões especiais.",
    icon: "calendar",
    highlight: false,
    ctaLabel: "Reservar para evento",
    message: "Olá! Gostaria de consultar disponibilidade para um evento.",
  },
  {
    id: "05",
    title: "Motorista à Disposição",
    description: "Mobilidade por período ou diária, conforme sua agenda.",
    icon: "clock",
    highlight: false,
    ctaLabel: "Pedir diária",
    message: "Olá! Gostaria de consultar a disponibilidade de motorista.",
  },
] as const;

/** Opção de atendimento — sem nome, foto ou dados pessoais. */
export const femaleDriverOption = {
  title: "Motorista feminina",
  description:
    "Prefere ser atendido por uma motorista? Consulte nossa disponibilidade.",
  ctaLabel: "Consultar disponibilidade",
  message:
    "Olá! Gostaria de consultar a disponibilidade de uma motorista feminina.",
} as const;

export const vehicles = [
  {
    id: "geely-ex2-max",
    name: "Geely EX2 Max",
    shortName: "GEELY EX2 MAX",
    watermark: "GEELY",
    badge: "Nosso veículo principal.",
    description:
      "Conforto, tecnologia e uma experiência diferenciada para seus deslocamentos.",
    image: "/vehicles/geely-display.webp",
  },
  {
    id: "renault-kwid",
    name: "Renault Kwid",
    shortName: "RENAULT KWID",
    watermark: "KWID",
    badge: "Uma opção prática.",
    description:
      "Uma alternativa simples e eficiente para deslocamentos do dia a dia.",
    image: "/vehicles/kwid-display.png",
  },
] as const;

export const differentials = [
  {
    title: "Pontualidade",
    description: "Chego no horário. Sem atrasos, sem surpresas.",
  },
  {
    title: "Segurança",
    description: "Condução responsável e atenção total ao trajeto.",
  },
  {
    title: "Conforto",
    description: "Veículos preparados para uma viagem agradável.",
  },
  {
    title: "Atendimento personalizado",
    description: "Cada solicitação tratada de forma individual.",
  },
] as const;

/**
 * Substitua pelos textos reais das avaliações dos clientes.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  meta: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Pontualidade impecável e um atendimento discreto do início ao fim. Exatamente o padrão que eu esperava.",
    name: "Cliente executivo",
    meta: "Cliente verificado",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Usei para transfer no aeroporto e para reuniões durante a semana. Organização, conforto e total tranquilidade.",
    name: "Cliente corporativo",
    meta: "Cliente verificado",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Solicitei atendimento com motorista mulher e fui muito bem atendida. Sensação de segurança e profissionalismo.",
    name: "Cliente particular",
    meta: "Cliente verificado",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Contratei para um evento familiar. Chegada antecipada, veículo impecável e condução extremamente confortável.",
    name: "Cliente de eventos",
    meta: "Cliente verificado",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "O transporte escolar tem sido uma rotina sem preocupações. Pontualidade e responsabilidade em todos os dias.",
    name: "Responsável familiar",
    meta: "Cliente verificado",
    rating: 5,
  },
];
