import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Gauge, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Download, Award } from "lucide-react";
import { COMPANY } from "@/data/company";

export function WegShowcaseSection() {
  const products = [
    {
      icon: Zap,
      title: "Inversores de Frequência WEG CFW11",
      family: "Linhas CFW100 • CFW300 • CFW500 • CFW11 • CFW900",
      desc: "Controle vetorial Vectrue de altíssima precisão com torque elevado desde 0 rpm. Ideal para pontes rolantes, siderurgia, usinas e indústrias pesadas.",
      benefits: [
        "Economia de até 40% na conta de energia elétrica fabril",
        "Controle de torque e velocidade milimétrico com encoder",
        "Frenagem dinâmica e prevenção contra choques mecânicos",
        "Laboratório próprio em Ribeirão Preto para ensaio em carga real"
      ]
    },
    {
      icon: Gauge,
      title: "Soft-Starters WEG SSW900",
      family: "Linhas SSW05 • SSW07 • SSW08 • SSW900",
      desc: "Chaves de partida estática microprocessadas de última geração com bypass embutido e IHM touchscreen colorida para motores pesados.",
      benefits: [
        "Eliminação total de picos de corrente na partida de motores",
        "Atenuação de golpes de aríete em redes de bombeamento",
        "Redução de até 90% das perdas térmicas no painel elétrico",
        "Diagnósticos gráficos avançados e registro preditivo de eventos"
      ]
    },
    {
      icon: Cpu,
      title: "Controladores Lógicos Programáveis (CLP)",
      family: "Lógicas IEC 61131-3 • IHMs Gráficas • Remotas de E/S",
      desc: "Automação e controle inteligente para processos industriais contínuos e discretos. Programação, migração de sistemas legados e integração com supervisórios SCADA.",
      benefits: [
        "Arquiteturas de rede Profinet, Modbus TCP e Ethernet/IP",
        "Integração rápida com sensores, células de carga e atuadores",
        "CLPs de segurança para atendimento rigoroso à NR-12",
        "Memorial descritivo, diagramas e suporte na partida (start-up)"
      ]
    }
  ];

  return (
    <section id="equipamentos-weg" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024162]/10 border border-[#024162]/20 text-[#024162] text-xs font-black uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#024162]" />
            <span>Engenharia de Acionamentos & Controle WEG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Inversores WEG CFW11, Soft-Starters SSW900 e{" "}
            <span className="text-[#024162] underline decoration-[#fbd708] decoration-4 underline-offset-4">
              Automação com CLP
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Venda técnica autorizada, parametrização avançada, montagem de painéis elétricos certificados e assistência técnica com laboratório de ensaio em carga dinâmica.
          </p>
        </div>

        {/* Banner Composição Formato Foto 2 Anexada */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-16 bg-slate-900">
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px]">
            <Image
              src="/images/banner-equipamentos-weg-industria.jpg"
              alt="A alta performance industrial começa aqui - Inversor WEG CFW11, Soft Starter SSW900 e CLP"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Fast Action Bar */}
          <div className="bg-[#024162] p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#012a40]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbd708] animate-pulse" />
              <span className="text-xs sm:text-sm text-slate-200 font-medium">
                Equipamentos WEG e CLPs a pronta entrega e sob projeto para Ribeirão Preto, SP e todo o Brasil.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#fbd708]" />
              </Link>
              
              <a
                href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20uma%20cotação%20para%20Inversor%20WEG%20CFW11,%20Soft-Starter%20SSW900%20ou%20CLP.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#fbd708] hover:bg-[#e5c300] font-black text-xs uppercase tracking-wider text-[#012a40] transition-all shadow-md"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="w-4 h-4 text-[#012a40]" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Detail Cards (Inversor WEG CFW11, Soft Starter SSW900, CLP) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#024162] hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#024162]/10 border border-[#024162]/20 text-[#024162] flex items-center justify-center group-hover:bg-[#024162] group-hover:text-[#fbd708] transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    {idx === 0 && (
                      <div className="relative w-20 h-24 -my-3 group-hover:scale-110 transition-transform">
                        <Image
                          src="/images/weg-cfw11-flipped-transparent.png"
                          alt="Inversor WEG CFW11"
                          fill
                          className="object-contain drop-shadow-md"
                        />
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-wider text-[#024162] block mb-1">
                    {p.family}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#024162] transition-colors mb-3">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {p.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#024162] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20preciso%20de%20informações%20sobre:%20${encodeURIComponent(p.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#024162] hover:bg-[#065a87] text-white font-black text-xs uppercase tracking-wider transition-all border-b-2 border-[#fbd708]"
                >
                  <span>Falar com Especialista</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fbd708]" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
