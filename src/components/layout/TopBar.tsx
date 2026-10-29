import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-[#040812] border-b border-slate-800/80 text-xs text-slate-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${COMPANY.contact.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{COMPANY.contact.phone}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20informações%20técnicas%20sobre%20as%20soluções%20da%20Invertronic.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">WhatsApp:</span>
            <span>{COMPANY.contact.whatsappFormatted}</span>
          </a>

          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{COMPANY.contact.email}</span>
          </a>
        </div>

        {/* Right: Location & Credentials */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span>Ribeirão Preto - SP | Atendimento Nacional</span>
          </div>

          <div className="flex items-center gap-1.5 text-brand-cyan font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Normas NR-10 • NR-11 • NR-12</span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Plantão de Manutenção 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
