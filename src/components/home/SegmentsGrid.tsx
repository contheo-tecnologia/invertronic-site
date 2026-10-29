import React from "react";
import Image from "next/image";
import { Flame, Hammer, Utensils, Layers, HardHat, Boxes, CheckCircle2, ArrowRight, Factory } from "lucide-react";
import { SEGMENTS } from "@/data/segments";
import { COMPANY } from "@/data/company";

export function SegmentsGrid() {
  const iconMap: Record<string, React.ElementType> = {
    Flame,
    Hammer,
    Utensils,
    Layers,
    HardHat,
    Boxes,
  };

  return (
    <section id="segmentos" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024162]/10 border border-[#024162]/20 text-[#024162] text-xs font-black uppercase tracking-wider mb-4">
            <Factory className="w-4 h-4 text-[#024162]" />
            <span>Presença de Mercado & Engenharia Especializada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Segmentos Industriais{" "}
            <span className="text-[#024162] underline decoration-[#fbd708] decoration-4 underline-offset-4">
              Atendidos
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Soluções de engenharia testadas e homologadas nos ambientes mais severos do país, desde usinas sucroalcooleiras até siderurgia e mineração pesada.
          </p>
        </div>

        {/* Segments Cards com Foto Real de Cada Setor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEGMENTS.map((seg) => {
            const Icon = iconMap[seg.icon] || Boxes;
            return (
              <div
                key={seg.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#024162] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Imagem do Setor Industrial */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                    <Image
                      src={seg.image}
                      alt={seg.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                    
                    {/* Badge do Ícone Sobreposto */}
                    <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-xl bg-[#024162] text-[#fbd708] border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-extrabold text-sm drop-shadow-md">
                        {seg.name}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo Textual do Card */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {seg.description}
                    </p>

                    <div className="space-y-2 mb-2">
                      <span className="block text-[11px] font-black uppercase tracking-wider text-[#024162]">
                        Principais Aplicações:
                      </span>
                      {seg.applications.map((app, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#024162] flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card com CTA */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20atuo%20no%20setor%20de%20${encodeURIComponent(seg.name)}%20e%20gostaria%20de%20um%20diagnóstico%20técnico.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#024162] text-slate-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200 group-hover:border-[#024162]"
                  >
                    <span>Soluções para {seg.name.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#024162] group-hover:text-[#fbd708] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
