import React from "react";
import Image from "next/image";
import { Cpu, Network, BarChart3, Lock, Wifi, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/company";

export function Industry40Section() {
  const pillars = [
    {
      icon: Cpu,
      title: "Controladores Lógicos (CLP / PLC)",
      desc: "Lógicas de controle determinístico em IEC 61131-3 para processos contínuos e máquinas especiais, com suporte a Rockwell, Siemens, WEG e Schneider.",
      image: "/images/ind40-clp-plc.jpg",
      tag: "Hardware & Lógicas"
    },
    {
      icon: Network,
      title: "Conectividade IIoT & Redes Industriais",
      desc: "Topologias em anel de alta velocidade com Profinet, Modbus TCP e Ethernet/IP integrando sensores inteligentes, atuadores e gateways de borda.",
      image: "/images/ind40-iiot-networks.jpg",
      tag: "Sensores & Borda"
    },
    {
      icon: BarChart3,
      title: "Supervisórios SCADA & Dashboard OEE",
      desc: "Visualização em tempo real de KPIs de produção, paradas de linha, alarmes históricos e cálculo instantâneo de eficiência global dos equipamentos.",
      image: "/images/ind40-scada-dashboard.jpg",
      tag: "Telemetria & KPIs"
    },
    {
      icon: Lock,
      title: "Segurança Cibernética Industrial",
      desc: "Segmentação de rede conforme ISA/IEC 62443, isolando o chão de fábrica de ameaças externas e garantindo acesso remoto seguro para manutenção.",
      image: "/images/ind40-cybersecurity-network.jpg",
      tag: "Norma ISA/IEC 62443"
    }
  ];

  return (
    <section id="industria-4-0" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024162]/10 border border-[#024162]/20 text-[#024162] text-xs font-black uppercase tracking-wider mb-4">
            <Wifi className="w-4 h-4 text-[#024162]" />
            <span>Fábricas Inteligentes & Conectadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Indústria 4.0 & Automação de{" "}
            <span className="text-[#024162] underline decoration-[#fbd708] decoration-4 underline-offset-4">
              Alta Precisão
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Transformamos linhas industriais tradicionais em operações digitalizadas, previsíveis e com telemetria em tempo real na palma da sua mão.
          </p>
        </div>

        {/* 4 Pillars Grid com Foto para Cada Aplicação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#024162] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Foto da Aplicação */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badge / Tag Técnica */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[#fbd708] text-[10px] font-black uppercase tracking-wider">
                      {pillar.tag}
                    </div>

                    {/* Ícone Sobreposto */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#024162] text-[#fbd708] border border-white/20 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#024162] transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Rodapé com Link Rápido */}
                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20consultar%20soluções%20em%20${encodeURIComponent(pillar.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#024162] hover:text-[#036294] transition-colors group-hover:underline"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#fbd708] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#024162] to-slate-900 text-white border border-slate-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#fbd708]">
                Engenharia de Software Industrial
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Supervisórios SCADA sob medida para o seu processo produtivo
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Desenvolvemos interfaces de operação com gráficos de alto desempenho que reduzem a fadiga do operador e facilitam a tomada rápida de decisão. Compatível com servidores locais e nuvem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Telas responsivas HTML5",
                  "Histórico de dados e rastreabilidade",
                  "Notificação de alarmes por e-mail/SMS",
                  "Integração direta com ERPs (SAP, TOTVS)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#fbd708] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20de%20Indústria%204.0%20e%20Supervisórios.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-[#fbd708] hover:bg-[#e5c300] text-[#012a40] transition-all shadow-md shadow-[#fbd708]/25"
                >
                  <span>Agendar Demonstração Técnica</span>
                  <ArrowRight className="w-4 h-4 text-[#012a40]" />
                </a>
              </div>
            </div>

            {/* Right: Technical Image with Telemetry overlay */}
            <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/images/ind40-scada-dashboard.jpg"
                alt="Automação Industrial e Indústria 4.0"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Telemetria Online 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
