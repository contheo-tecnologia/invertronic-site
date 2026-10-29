import { HeroSlide } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tagline: "AUTOMAÇÃO & INDÚSTRIA 4.0",
    titleLight: "SOLUÇÕES PARA",
    titleBold: "A SUA INDÚSTRIA",
    titleHighlight: "4.0",
    description: "Sua fábrica conectada com o que há de mais moderno em engenharia: conectividade IIoT, integração de CLPs, inversores de alta precisão e supervisórios SCADA para zerar o downtime fabril.",
    ctaText: "Conhecer Soluções 4.0",
    ctaLink: "/#industria-4-0",
    bgGradient: "from-slate-950/95 via-slate-950/50 to-transparent",
    bgImage: "/images/banner-ponte-rolante-invertronic.jpg",
    techBadges: ["Conectividade IIoT", "Programação CLP / PLC", "Supervisórios SCADA", "Pontes 50t e 20t"]
  },
  {
    id: 2,
    tagline: "ACIONAMENTOS & CONTROLE ELETRÔNICO",
    titleLight: "TECNOLOGIA DE PONTA COM",
    titleBold: "INVERSOR WEG CFW11",
    titleHighlight: "EM AUTOMAÇÃO INDUSTRIAL",
    description: "Controle vetorial Vectrue de alta precisão para motores trifásicos, pontes rolantes e linhas pesadas. Economize até 40% de energia e conte com bancadas de teste em carga real em nosso laboratório.",
    ctaText: "Ver Linha de Inversores WEG",
    ctaLink: "/produtos",
    bgGradient: "from-slate-950/95 via-slate-950/55 to-transparent",
    bgImage: "/images/banner-weg-cfw11-inversor.jpg",
    techBadges: ["WEG CFW11 Vectrue", "Controle de Torque", "Economia de Energia", "Laboratório em Ribeirão Preto"]
  },
  {
    id: 3,
    tagline: "ENGENHARIA DE CONTROLE & PROCESSOS",
    titleLight: "AUTOMAÇÃO AVANÇADA COM",
    titleBold: "CONTROLADOR LÓGICO PROGRAMÁVEL",
    titleHighlight: "(CLP / PLC)",
    description: "Arquiteturas robustas em IEC 61131-3 para controle de linhas contínuas e máquinas especiais. Comunicação em alta velocidade via Profinet e Ethernet/IP com IHMs touchscreen e remotas de campo.",
    ctaText: "Consultar Projetos de CLP",
    ctaLink: "/produtos",
    bgGradient: "from-slate-950/95 via-slate-950/55 to-transparent",
    bgImage: "/images/banner-clp-automacao-industrial.jpg",
    techBadges: ["Padrão IEC 61131-3", "Redes Profinet & Modbus", "IHMs Touchscreen", "Sistemas Safety NR-12"]
  }
];
