import React from "react";
import { Check, X, Zap, Gauge, Sliders, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TechComparison() {
  const comparisonData = [
    {
      feature: "Controle Contínuo de Velocidade",
      inversor: { text: "Sim (0 a 100%+ com precisão)", ok: true },
      softStarter: { text: "Não (somente na aceleração/parada)", ok: false },
      direta: { text: "Não (velocidade síncrona fixa)", ok: false },
    },
    {
      feature: "Controle e Limitação de Torque",
      inversor: { text: "Sim (torque máximo em baixa rotação)", ok: true },
      softStarter: { text: "Parcial (reduz choque de partida)", ok: true },
      direta: { text: "Nenhum (torque brusco instantâneo)", ok: false },
    },
    {
      feature: "Pico de Corrente na Partida (In)",
      inversor: { text: "Mínimo (1,0 a 1,5x In)", ok: true },
      softStarter: { text: "Reduzido (2,5 a 3,5x In)", ok: true },
      direta: { text: "Crítico (6,0 a 8,0x In)", ok: false },
    },
    {
      feature: "Economia de Energia (Bombas/Ventiladores)",
      inversor: { text: "Até 40% a 50% de redução", ok: true },
      softStarter: { text: "Baixa (apenas regime nominal)", ok: false },
      direta: { text: "Nenhuma economia", ok: false },
    },
    {
      feature: "Aplicação Ideal em Pontes Rolantes",
      inversor: { text: "Altamente Recomendado (Elevação/Translação)", ok: true },
      softStarter: { text: "Apenas translação suave básica", ok: false },
      direta: { text: "Desaconselhado (causa trancos graves)", ok: false },
    },
    {
      feature: "Frenagem Dinâmica e Regenerativa",
      inversor: { text: "Totalmente compatível com resistor/banco", ok: true },
      softStarter: { text: "Frenagem CC moderada", ok: true },
      direta: { text: "Apenas por inércia ou freio mecânico", ok: false },
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            <span>Guia Técnico de Seleção</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Inversor de Frequência vs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              Soft-Starter
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Qual a tecnologia ideal para o seu motor elétrico? Nossos engenheiros dimensionam o equipamento exato para maximizar a vida útil e cortar custos energéticos.
          </p>
        </div>

        {/* Technical Table */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 text-sm font-bold">
                    Critério Técnico Operacional
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-cyan-300 bg-slate-800 border-x border-slate-700">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>Inversor de Frequência</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-amber-300">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-amber-400" />
                      <span>Soft-Starter</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-slate-300">
                    Chave Direta / Convencional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 bg-blue-50/60 border-x border-blue-100 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        {row.inversor.ok ? (
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span>{row.inversor.text}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        {row.softStarter.ok ? (
                          <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        )}
                        <span>{row.softStarter.text}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-center gap-2">
                        {row.direta.ok ? (
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span>{row.direta.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>
                Laboratório próprio em Ribeirão Preto para testes de carga, parametrização e conserto de placas multimarcas.
              </span>
            </div>
            <a
              href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20um%20dimensionamento%20de%20Inversor%20ou%20Soft-Starter.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Falar com Engenheiro de Drives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
