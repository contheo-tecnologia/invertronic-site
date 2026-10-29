import React from "react";
import { Award, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/data/company";

export function CredentialsBar() {
  const icons = [Award, CheckCircle, ShieldCheck, Clock];

  return (
    <section className="relative z-20 bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY.metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {metric.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
                    {metric.label}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Standards / Brands Banner Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <span className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Normas de Engenharia Atendidas:
          </span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-semibold text-slate-700">
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">
              ABNT NBR 8400
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">
              NR-10 (Segurança Elétrica)
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">
              NR-11 (Movimentação de Cargas)
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">
              NR-12 (Segurança em Máquinas)
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">
              Profinet • Modbus TCP • OPC UA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
