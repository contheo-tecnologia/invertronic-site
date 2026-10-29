import React from "react";
import Image from "next/image";
import { CheckCircle2, MapPin, ShieldCheck, Wrench, Award, Phone } from "lucide-react";
import { COMPANY } from "@/data/company";

export function AboutCompany() {
  return (
    <section id="empresa" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Desde 2011 em Ribeirão Preto - SP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Excelência Técnica em Automação, Acionamentos e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
                Movimentação Industrial
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fundada em 2011 na cidade de Ribeirão Preto – polo estratégico do agronegócio e da indústria paulista –, a <strong>Invertronic Soluções Industriais</strong> consolidou-se como referência em projetos de engenharia elétrica, montagem de painéis, assistência técnica multimarcas e fabricação de pontes rolantes e talhas elétricas.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com laboratório próprio equipado com bancadas de teste com carga dinâmica real e corpo técnico habilitado pelo <strong>CREA-SP</strong>, oferecemos soluções ponta a ponta: do projeto básico à entrega técnica em campo com recolhimento de ART.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Registro e Habilitação Ativa no CREA-SP",
                "Técnicos certificados em NR-10, NR-11, NR-12 e NR-35",
                "Laboratório próprio de reparo e ensaio em carga",
                "Estoque estratégico de peças de reposição",
                "Plantão 24/7 para paradas emergenciais de linha",
                "Emissão de laudos de conformidade e memorial de cálculo"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Address & Quick Phone Card */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs text-slate-700">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Sede Operacional:</span>
                  <span>{COMPANY.address.street} - {COMPANY.address.district}, {COMPANY.address.city} - {COMPANY.address.state}</span>
                </div>
              </div>

              <a
                href={`tel:${COMPANY.contact.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <div className="relative h-96 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Instalações e Engenharia da Invertronic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 border border-slate-200 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-600/30">
                    13+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Mais de uma Década de Inovação</h4>
                    <p className="text-xs text-slate-500">Atendendo as maiores indústrias de Ribeirão Preto e de todo o Brasil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
