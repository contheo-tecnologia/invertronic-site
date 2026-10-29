import { Segment } from "@/types";

export const SEGMENTS: Segment[] = [
  {
    id: "sucroalcooleiro",
    name: "Açúcar, Etanol & Bioenergia",
    description: "Automação de caldeiras, esteiras de cana, centrífugas e pontes rolantes para recebimento e manutenção de moendas.",
    icon: "Flame",
    applications: ["Pontes rolantes de moenda", "Acionamento de esteiras transportadoras", "Controle de centrífugas e turbinas"],
    image: "/images/segment-sucroalcooleiro.jpg"
  },
  {
    id: "metalmecanica",
    name: "Metalmecânica & Caldeiraria",
    description: "Movimentação pesada de chapas e perfis estruturais, modernização de dobradeiras, pontes rolantes e tornos pesados.",
    icon: "Hammer",
    applications: ["Pontes univiga e biviga para galpões", "Talhas elétricas para montagem", "Automação de prensas e corte"],
    image: "/images/segment-metalmecanica.jpg"
  },
  {
    id: "alimentos-bebidas",
    name: "Alimentos & Bebidas",
    description: "Linhas higiênicas com automação por CLP, painéis em aço inox, rastreabilidade de bateladas e controle rigoroso de temperatura.",
    icon: "Utensils",
    applications: ["Sistemas supervisórios de dosagem", "Inversores com grau IP66", "Talhas elétricas higiênicas"],
    image: "/images/segment-alimentos-bebidas.jpg"
  },
  {
    id: "papel-celulose",
    name: "Papel, Celulose & Embalagens",
    description: "Sincronismo de múltiplos motores em linhas de papel, bobinadeiras, pontes para bobinas e controle contínuo de tensão mecânica.",
    icon: "Layers",
    applications: ["Sincronismo multi-drives", "Pontes para movimentação de bobinas", "Telemetria de motores críticos"],
    image: "/images/segment-papel-celulose.jpg"
  },
  {
    id: "mineracao-cimento",
    name: "Mineração & Cimento",
    description: "Equipamentos ultra robustos para acionamento de britadores, correias de longa distância e pontes para pátios de estocagem.",
    icon: "HardHat",
    applications: ["Soft-starters para motores de alta inércia", "Quadros à prova de pó e poeira", "Retrofit elétrico pesado"],
    image: "/images/segment-mineracao-cimento.jpg"
  },
  {
    id: "logistica-portuaria",
    name: "Centros Logísticos & Portos",
    description: "Sistemas ágeis de carga e descarga rápida com rádio controle, inversores de alta velocidade e monitoramento de ciclos.",
    icon: "Boxes",
    applications: ["Pontes rolantes expedidoras", "Talhas elétricas de alta velocidade", "Manutenção preditiva de cabos"],
    image: "/images/segment-logistica-portuaria.jpg"
  }
];
