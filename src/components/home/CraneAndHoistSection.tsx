import React from "react";
import Image from "next/image";
import { Anchor, ShieldAlert, CheckCircle2, ArrowRight, Wrench, Radio, Cpu } from "lucide-react";
import { COMPANY } from "@/data/company";

export function CraneAndHoistSection() {
  const craneFeatures = [
    {
      icon: Anchor,
      title: "Pontes Univiga e Biviga Sob Medida",
      desc: "Vãos e capacidades customizados (até 80t+) com vigas caixão soldadas por processo arco submerso e cálculo por elementos finitos conforme NBR 8400."
    },
    {
      icon: Cpu,
      title: "Acionamento com Inversores Dedicados",
      desc: "Eliminação total do balanço da carga (anti-sway) e frenagem elétrica suave antes da atuação do freio mecânico, aumentando a durabilidade das lonas em 4x."
    },
    {
      icon: Radio,
      title: "Rádio Controle Industrial & Barramento",
      desc: "Operação ergonômica e segura com rádio sem fio homologado pela Anatel, além de barramento elétrico blindado de alta condutividade para galpões fabris."
    },
    {
      icon: Wrench,
      title: "Manutenção & Retrofit Mecânico/Elétrico",
      desc: "Substituição de vigas, cabeceiras, rodas, cabos de aço e revitalização total do quadro elétrico antigo para total conformidade com a NR-11 e NR-12."
    }
  ];

  return (
    <section id="pontes-e-talhas" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Movimentação & Elevação Segura de Cargas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engenharia Completa em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                Pontes Rolantes & Talhas
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-3xl">
              Projetamos, fabricamos, instalamos e modernizamos sistemas de elevação que operam nos ambientes mais exigentes do país — com segurança máxima para os operadores e zero paradas inesperadas.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20preciso%20de%20um%20projeto/manutenção%20de%20Ponte%20Rolante%20ou%20Talha%20Elétrica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Consultar Engenharia de Elevação</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Big Visual & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Image with Overlays */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group min-h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80"
              alt="Ponte Rolante Industrial e Talha Elétrica"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 border border-slate-200 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Inspeção & Emissão de Laudos
                </span>
                <span className="text-[11px] font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  CREA-SP
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Adequação Integral às Normas NR-11 e NR-12
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inspeção estrutural não-destrutiva, ensaios de freios e cabos, teste de carga dinâmico e estático com emissão de Laudo Técnico e recolhimento de ART.
              </p>
            </div>
          </div>

          {/* Right: 4 Core Features */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {craneFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all duration-300 group/card"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-3 group-hover/card:bg-amber-500 group-hover/card:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover/card:text-amber-600 transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why choose retrofit vs new banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Sua ponte rolante ou talha está desatualizada ou apresentando trancos?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Nosso retrofit elétrico adiciona inversores vetoriais modernos, rádio controle e sensores de segurança sem a necessidade de trocar a estrutura metálica existente.
              </p>
            </div>
          </div>

          <a
            href="#orcamento"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-amber-400 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            Simular Retrofit
          </a>
        </div>
      </div>
    </section>
  );
}
