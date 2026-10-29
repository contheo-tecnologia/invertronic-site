import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, ArrowUp } from "lucide-react";
import { InvertronicLogo } from "@/components/ui/InvertronicLogo";
import { COMPANY } from "@/data/company";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <InvertronicLogo variant="light" height={44} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              {COMPANY.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Engenharia Registrada CREA-SP</span>
              </span>
            </div>
          </div>

          {/* Column 1: Soluções */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Soluções Técnicas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#pontes-e-talhas" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Pontes Rolantes Industriais</span>
                </a>
              </li>
              <li>
                <a href="#pontes-e-talhas" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Talhas Elétricas de Precisão</span>
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Inversores de Frequência & Drives</span>
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Soft-Starters para Motores</span>
                </a>
              </li>
              <li>
                <a href="#industria-4-0" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Automação, CLP & SCADA</span>
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Painéis Elétricos & CCMs</span>
                </a>
              </li>
              <li>
                <a href="#pontes-e-talhas" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Retrofit & Adequação NR-12</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Segmentos & Normas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Normas & Garantia
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>ABNT NBR 8400</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Norma NR-10 (Elétrica)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Norma NR-11 (Movimentação)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Norma NR-12 (Máquinas)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>ABNT NBR IEC 61439</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Emissão de ART/CREA</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contatos e Endereço */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Sede e Contato
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street} - {COMPANY.address.district}, {COMPANY.address.city} - {COMPANY.address.state} (CEP: {COMPANY.address.zipCode})
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">WhatsApp: {COMPANY.contact.whatsappFormatted}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{COMPANY.contact.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Ribeirão Preto / SP - Brasil</span>
            <a
              href="#"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
