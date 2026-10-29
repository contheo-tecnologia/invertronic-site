"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/data/company";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-xs">
            <span className="font-bold text-emerald-400 block">Engenharia Online</span>
            <span className="text-[11px] text-slate-300">Tire dúvidas sobre inversores e pontes rolantes</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:text-slate-400 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20acessei%20o%20site%20da%20Invertronic%20e%20gostaria%20de%20um%20atendimento%20técnico.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
}
