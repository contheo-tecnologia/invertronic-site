import { Solution } from "@/types";

export const SOLUTIONS: Solution[] = [
  // 1. ELEVAÇÃO E MOVIMENTAÇÃO DE CARGA
  {
    id: "pontes-rolantes",
    title: "Pontes Rolantes Industriais",
    slug: "pontes-rolantes",
    badge: "NR-11 & NBR 8400",
    category: "elevacao",
    iconName: "Crane",
    shortDesc: "Engenharia de fabricação, montagem, cálculo estrutural e retrofit de pontes rolantes univiga, biviga e suspensas.",
    fullDesc: "Desenvolvemos e modernizamos sistemas de elevação e translação de cargas para condições severas de operação. Nossos projetos contemplam cálculo estrutural conforme NBR 8400, acionamento suave via inversores de frequência que eliminam o balanço de carga e comandos via rádio industrial sem fio homologado.",
    highlights: [
      "Pontes rolantes Univiga (até 15t) e Biviga (até 80t+)",
      "Projetos com cálculo estrutural e emissão de ART/CREA",
      "Acionamento com controle vetorial de velocidade e frenagem suave",
      "Linha completa de barramentos blindados e cabos esteira flexíveis"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "1 tonelada até 80+ toneladas" },
      { label: "Vão Livre", value: "Customizado conforme layout fabril" },
      { label: "Classes de Serviço", value: "Normas ABNT NBR 8400 / FEM / CMAA" },
      { label: "Controle", value: "Botoeira pendente e Rádio Controle Industrial" }
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "talhas-eletricas",
    title: "Talhas Elétricas de Alta Precisão",
    slug: "talhas-eletricas",
    badge: "Alta Disponibilidade",
    category: "elevacao",
    iconName: "Anchor",
    shortDesc: "Talhas elétricas de cabo de aço e corrente para elevação rápida, segura e com baixíssimo índice de manutenção.",
    fullDesc: "Equipamentos de alta tecnologia para manuseio vertical de cargas com máxima segurança. Contam com duplo limitador de fim de curso, freios cônicos ou a disco de ação imediata, guias de cabo de alta resistência ao atrito e proteção contra sobrecarga mecânica e elétrica.",
    highlights: [
      "Talhas elétricas de corrente (compactas, para oficinas e linhas leves)",
      "Talhas de cabo de aço de alto rendimento (para siderurgia, usinas e caldeirarias)",
      "Sistemas de trole manual ou motorizado com inversor integrado",
      "Redução de ruído e manutenção com engrenagens cementadas e retificadas"
    ],
    specs: [
      { label: "Capacidade", value: "250 kg até 50 toneladas" },
      { label: "Altura de Elevação", value: "De 6m até 48m de altura útil" },
      { label: "Velocidade", value: "Simples ou Dupla com controle por Inversor" },
      { label: "Proteção", value: "Grau IP55 / IP65 com sensores de fim de curso" }
    ],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80"
  },

  // 2. ACIONAMENTOS E CONTROLE
  {
    id: "inversores-de-frequencia",
    title: "Inversores de Frequência & Drives",
    slug: "inversores-de-frequencia",
    badge: "Eficiência Energética",
    category: "acionamentos",
    iconName: "Zap",
    shortDesc: "Venda, parametrização, comissionamento e manutenção especializada de inversores de frequência multimarcas.",
    fullDesc: "Soluções completas para controle de velocidade e torque de motores de indução trifásicos. Especialistas em dimensionamento de drives para elevação de carga (macro pontes rolantes), bombas, ventiladores, esteiras e extrusoras. Reduza o consumo de energia em até 40% com controle preciso de processos.",
    highlights: [
      "Parametrização avançada (controle escalar V/F e vetorial com/sem encoder)",
      "Linha completa de marcas globais (WEG, Schneider, Danfoss, ABB, Siemens, INVT)",
      "Laboratório técnico com bancadas de ensaio com carga dinâmica real",
      "Projetos com frenagem reostática e regenerativa para pontes rolantes"
    ],
    specs: [
      { label: "Faixa de Potência", value: "0,25 cv até 1.200 cv (0,18 kW a 900 kW)" },
      { label: "Tensões de Operação", value: "220V, 380V, 440V e 690V Trifásico" },
      { label: "Comunicação", value: "Profinet, Ethernet/IP, Modbus TCP, CANopen" },
      { label: "Economia", value: "Até 40% de redução no consumo de energia elétrica" }
    ],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "soft-starters",
    title: "Soft-Starters Industriais",
    slug: "soft-starters",
    badge: "Proteção de Motores",
    category: "acionamentos",
    iconName: "Gauge",
    shortDesc: "Partida suave de motores de indução, eliminação de picos de corrente na rede e atenuação de golpes mecânicos.",
    fullDesc: "Chaves de partida estática microprocessadas que controlam a tensão aplicada ao motor durante a partida e frenagem. Ideais para aplicações de velocidade fixa como bombas centrífugas, ventiladores, picadores e moedores, evitando golpes de aríete e quedas de tensão na subestação.",
    highlights: [
      "Bypass interno integrado para redução de perdas térmicas no painel",
      "Proteção térmica completa do motor e dos semicondutores de potência",
      "Eliminação de choques mecânicos em acoplamentos, correias e caixas redutoras",
      "Diagnósticos de falha via IHM frontal com histórico detalhado"
    ],
    specs: [
      { label: "Corrente Nominal", value: "10A até 1.400A" },
      { label: "Tensões de Rede", value: "220V até 690V (50/60 Hz)" },
      { label: "Recursos", value: "Controle de Torque, Kick-Start e Frenagem CC" },
      { label: "Normas", value: "IEC 60947-4-2 / UL / CE" }
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
  },

  // 3. AUTOMAÇÃO E INDÚSTRIA 4.0
  {
    id: "controladores-logicos-programaveis",
    title: "Controladores Lógicos Programáveis (CLP / PLC)",
    slug: "controladores-logicos-programaveis",
    badge: "Automação de Processos",
    category: "automacao",
    iconName: "Cpu",
    shortDesc: "Programação, migração de sistemas legados, arquiteturas redundantes e integração completa de linhas de manufatura.",
    fullDesc: "O coração da automação fabril: desenvolvemos lógicas determinísticas em linguagens normatizadas IEC 61131-3 (Ladder, ST, Bloco de Funções). Executamos desde pequenas máquinas autônomas até plantas de processo contínuo com E/S remotas e redundância de controladoras.",
    highlights: [
      "Domínio das principais famílias de mercado (Siemens S7, Rockwell/Allen-Bradley, WEG, Schneider)",
      "Migração de sistemas obsoletos sem parada estendida de fábrica",
      "Integração com sensores ópticos, analógicos, encoders e células de carga",
      "Desenvolvimento de telas de IHM modernas e intuitivas para operadores"
    ],
    specs: [
      { label: "Padrão de Linguagem", value: "IEC 61131-3 (Ladder, ST, FBD, SFC)" },
      { label: "Topologias", value: "E/S Distribuídas em anel de fibra ou cobre (Profinet)" },
      { label: "Segurança", value: "CLPs de Segurança integrados (Safety Sil 3 / Ple)" },
      { label: "Documentação", value: "Memorial descritivo, diagramas e código documentado" }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "industria-4-0",
    title: "Soluções para Indústria 4.0 & SCADA",
    slug: "industria-4-0",
    badge: "Fábricas Inteligentes",
    category: "automacao",
    iconName: "Network",
    shortDesc: "Sistemas supervisórios, telemetria em tempo real, conectividade IIoT, monitoramento de OEE e integração TI/TA.",
    fullDesc: "Conecte seu chão de fábrica à gestão estratégica da empresa. Implementamos gateways IoT industriais, dashboards web em tempo real, rastreabilidade de lotes, alarmes preditivos via WhatsApp/e-mail e cálculo automatizado de OEE (Disponibilidade, Performance e Qualidade).",
    highlights: [
      "Supervisórios SCADA modernos acessíveis por desktop, tablet e celular",
      "Comunicação padronizada com OPC-UA, MQTT e bancos de dados SQL",
      "Monitoramento preditivo de vibração e temperatura de motores críticos",
      "Integração dos dados de produção com ERPs corporativos (SAP, Totvs, Senior)"
    ],
    specs: [
      { label: "Protocolos", value: "OPC UA, MQTT, Modbus TCP, Rest API, Profinet" },
      { label: "Visualização", value: "Web SCADA responsivo HTML5 e telas de chão de fábrica" },
      { label: "Métricas", value: "OEE em tempo real, MTBF, MTTR e consumo energético" },
      { label: "Segurança Cibernética", value: "Redes industriais segmentadas conforme ISA/IEC 62443" }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  },

  // 4. PAINÉIS ELÉTRICOS E RETROFIT
  {
    id: "paineis-eletricos-e-ccm",
    title: "Painéis Elétricos & CCMs Inteligentes",
    slug: "paineis-eletricos-e-ccm",
    badge: "NR-10 & NBR IEC 61439",
    category: "paineis",
    iconName: "Layers",
    shortDesc: "Montagem de CCMs, QGBTs e painéis de automação ensaiados, com barramento dimensionado e total segurança operacional.",
    fullDesc: "Projetamos e fabricamos quadros elétricos de baixa tensão sob medida para plantas industriais. Construções compartimentadas tipo forma 2b/3b/4b, gavetas fixas ou extraíveis, proteção contra arco elétrico interno e homologação técnica com emissão de relatórios de ensaio.",
    highlights: [
      "Centros de Controle de Motores (CCM) convencionais e inteligentes com rede de comunicação",
      "Quadros Gerais de Baixa Tensão (QGBT) de até 4.000A com proteção seletiva",
      "Painéis de comando e segurança certificados conforme NR-10 e NR-12",
      "Identificação padronizada a laser de bornes, fios e anilhas de alta durabilidade"
    ],
    specs: [
      { label: "Tensão de Isolação", value: "Até 1.000V CA" },
      { label: "Grau de Proteção", value: "IP42, IP54 até IP66 em Aço Carbono ou Inox" },
      { label: "Norma Construtiva", value: "ABNT NBR IEC 61439-1/2 e NR-10" },
      { label: "Garantia", value: "Garantia técnica e suporte de comissionamento" }
    ],
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "retrofit-modernizacao-industrial",
    title: "Retrofit & Modernização de Máquinas",
    slug: "retrofit-modernizacao-industrial",
    badge: "Custo-Benefício Máximo",
    category: "paineis",
    iconName: "RefreshCw",
    shortDesc: "Renovação completa de pontes rolantes, linhas produtivas e maquinário antigo com ganhos de até 70% vs comprar novo.",
    fullDesc: "Transforme máquinas robustas porém desatualizadas em equipamentos de ponta. Substituímos comandos obsoletos a contatores e relés por inversores e CLPs modernos, instalamos sensores de segurança para adequação à NR-12 e revitalizamos a fiação e barramentos da sua fábrica.",
    highlights: [
      "Eliminação de peças de reposição descontinuadas e de alto custo",
      "Adequação técnica completa à NR-12 com laudo e recolhimento de ART",
      "Aumento da velocidade de produção e precisão no posicionamento",
      "Cronograma planejado para execução em janelas de parada programada"
    ],
    specs: [
      { label: "Economia Média", value: "60% a 70% mais econômico que adquirir equipamento novo" },
      { label: "Tempo de Implantação", value: "Execução rápida durante paradas de manutenção" },
      { label: "Conformidade", value: "Laudo de adequação às normas NR-10, NR-11 e NR-12" },
      { label: "Vida Útil Estendida", value: "+10 a 15 anos de operação estável" }
    ],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80"
  }
];
