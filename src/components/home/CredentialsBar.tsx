import React from "react";
import { Award, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/data/company";

const NORMAS = [
  "ABNT NBR 8400",
  "NR-10 (Segurança Elétrica)",
  "NR-11 (Movimentação de Cargas)",
  "NR-12 (Segurança em Máquinas)",
  "Profinet • Modbus TCP • OPC UA",
];

export function CredentialsBar() {
  const icons = [Award, CheckCircle, ShieldCheck, Clock];

  return (
    <section className="bg-[#2d2d2d] py-16 text-white">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-12">
        <h2 className="text-center text-2xl sm:text-3xl font-bold uppercase tracking-wide">
          Reconhecidos por
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-300">
          Engenharia, qualidade e segurança em cada projeto entregue.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {COMPANY.metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-7 w-7 text-[#fbd708]" />
                <span className="mt-3 block text-3xl font-bold">{metric.value}</span>
                <span className="mt-1 block text-sm font-semibold">{metric.label}</span>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2">{metric.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-300">
            Normas atendidas:
          </span>
          {NORMAS.map((norma) => (
            <span
              key={norma}
              className="rounded-md border border-white/20 px-3 py-1 font-medium text-white"
            >
              {norma}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
