import { HeroSlide } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tagline: "AUTOMAÇÃO INDUSTRIAL",
    titleLight: "PONTE ROLANTE",
    titleBold: "COM MAIS",
    titleHighlight: "EFICIÊNCIA",
    description: "Soluções completas em automação, manutenção e modernização de pontes rolantes.",
    ctaText: "CONHECER SOLUÇÕES",
    ctaLink: "/#solucoes",
    bgGradient: "from-slate-950/95 via-slate-950/50 to-transparent",
    bgImage: "/images/banner-ponte-rolante-invertronic.jpg",
    techBadges: ["Pontes 50t e 20t", "Retrofit NR-12", "Adequação NBR 8400"]
  },
  {
    id: 2,
    tagline: "ACIONAMENTOS & MOTORES",
    titleLight: "INVERSOR WEG CFW11",
    titleBold: "COM ALTA",
    titleHighlight: "PERFORMANCE",
    description: "Controle vetorial de alta precisão para motores trifásicos, elevação de cargas pesadas e economia de até 40% de energia.",
    ctaText: "CONHECER INVERSORES",
    ctaLink: "/produtos",
    bgGradient: "from-slate-950/95 via-slate-950/55 to-transparent",
    bgImage: "/images/banner-weg-cfw11-inversor.jpg",
    techBadges: ["WEG CFW11 Vectrue", "Economia até 40%", "Ensaio em Carga"]
  },
  {
    id: 3,
    tagline: "AUTOMAÇÃO & INDÚSTRIA 4.0",
    titleLight: "SISTEMAS COM CLP",
    titleBold: "E TELEMETRIA",
    titleHighlight: "CONECTADA",
    description: "Arquiteturas robustas em IEC 61131-3 para controle de linhas contínuas, redes Profinet e supervisórios SCADA modernos.",
    ctaText: "CONSULTAR PROJETOS",
    ctaLink: "/#industria-4-0",
    bgGradient: "from-slate-950/95 via-slate-950/55 to-transparent",
    bgImage: "/images/banner-clp-automacao-industrial.jpg",
    techBadges: ["Padrão IEC 61131-3", "Redes Profinet", "Supervisórios SCADA"]
  }
];
