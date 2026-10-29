"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Shield, Wrench, Zap, Cpu, Anchor, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { COMPANY } from "@/data/company";

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "todos", label: "Todas as Soluções", icon: Layers },
    { id: "elevacao", label: "Pontes & Talhas", icon: Anchor },
    { id: "acionamentos", label: "Inversores & Soft-Starters", icon: Zap },
    { id: "automacao", label: "Automação & Indústria 4.0", icon: Cpu },
    { id: "paineis", label: "Painéis Elétricos & Retrofit", icon: Wrench },
  ];

  const filteredSolutions = activeTab === "todos"
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === activeTab);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 440;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="solucoes" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024162]/10 border border-[#024162]/20 text-[#024162] text-xs font-black uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5 text-[#024162]" />
              <span>Engenharia & Equipamentos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Soluções Integradas para a{" "}
              <span className="text-[#024162] underline decoration-[#fbd708] decoration-4 underline-offset-4">
                Sua Indústria
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
              Da movimentação pesada com pontes rolantes ao controle milimétrico de inversores e conectividade 4.0. Arraste horizontalmente para navegar.
            </p>
          </div>

          {/* Botões de Rolagem Horizontal */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <span className="text-xs font-bold text-slate-500 hidden sm:inline mr-2">
              Deslize para ver mais:
            </span>
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-2xl border border-slate-300 hover:border-[#024162] bg-slate-50 hover:bg-[#024162] text-slate-700 hover:text-[#fbd708] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-2xl border border-slate-300 hover:border-[#024162] bg-slate-50 hover:bg-[#024162] text-slate-700 hover:text-[#fbd708] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-[#024162] text-[#fbd708] shadow-md shadow-[#024162]/20 scale-102"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#fbd708]" : "text-[#024162]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solutions Roll Horizontal (Carrossel com Snap) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="w-[340px] sm:w-[390px] lg:w-[420px] flex-shrink-0 snap-start rounded-3xl bg-white border border-slate-200 hover:border-[#024162] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Preview with Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-900/80 text-[#fbd708] border border-white/20 backdrop-blur-md shadow-sm">
                      {solution.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#024162] transition-colors mb-2.5 line-clamp-1">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {solution.fullDesc}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-4">
                    {solution.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#024162] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specifications Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 mb-4 text-[11px]">
                    {solution.specs.slice(0, 2).map((sp, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-slate-500 font-semibold">{sp.label}:</span>
                        <span className="text-slate-800 font-black">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20tenho%20interesse%20em%20uma%20cotação%20para:%20${encodeURIComponent(solution.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#024162] hover:text-[#036294] transition-colors"
                >
                  <span>Cotação Técnica</span>
                  <ArrowUpRight className="w-4 h-4 text-[#fbd708]" />
                </a>

                <a
                  href="#orcamento"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#024162] text-xs font-bold text-slate-700 hover:text-white transition-all shadow-sm"
                >
                  Orçar Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
