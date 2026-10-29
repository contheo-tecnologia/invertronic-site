"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, User, Instagram, Linkedin, Facebook } from "lucide-react";
import { InvertronicLogo } from "@/components/ui/InvertronicLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Itens de navegação exatos solicitados
  const navItems = [
    { label: "Home", href: "/", isHighlight: true },
    { label: "Sobre nós", href: "/#empresa" },
    { label: "Soluções", href: "/#solucoes" },
    { label: "Produtos", href: "/produtos", isBadge: "WEG" },
    { label: "Indústria 4.0", href: "/#industria-4-0" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[3.5px] border-[#024162] shadow-sm">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[88px] sm:h-[96px]">
          
          {/* LADO ESQUERDO / CENTRO: Logo Oficial Aumentada e Centralizada */}
          <div className="flex items-center pl-2 sm:pl-6 lg:pl-10">
            <Link href="/" className="group flex items-center py-1">
              <InvertronicLogo variant="original" height={78} />
            </Link>
          </div>

          {/* CENTRO: Menu com Paleta Azul Petróleo Invertronic */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5 text-[14px] xl:text-[15px]">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`px-3 py-2 transition-colors relative flex items-center gap-1.5 ${
                  item.isHighlight
                    ? "font-extrabold text-[#024162] border-b-2 border-[#fbd708]"
                    : "font-semibold text-slate-700 hover:text-[#024162]"
                }`}
              >
                <span>{item.label}</span>
                {item.isBadge && (
                  <span className="text-[10px] bg-[#024162]/10 text-[#024162] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    {item.isBadge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* LADO DIREITO: Ícones Sociais + Botão de Orçamento no Amarelo Oficial do Diodo */}
          <div className="hidden sm:flex items-center space-x-1.5 pr-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 bg-slate-600 hover:bg-[#024162] text-white flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 bg-slate-600 hover:bg-[#024162] text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 bg-slate-600 hover:bg-[#024162] text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Botão de Destaque no Amarelo Oficial da Logo com texto em Azul Petróleo Escuro */}
            <a
              href="/#orcamento"
              aria-label="Orçamento"
              className="h-9 px-4 rounded-lg bg-[#fbd708] hover:bg-[#e5c300] text-[#012a40] flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all shadow-sm ml-1"
            >
              <User className="w-3.5 h-3.5 text-[#012a40]" />
              <span>Orçamento</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#024162] focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#024162]" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-3">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base ${
                item.isHighlight
                  ? "font-black text-[#024162] bg-blue-50"
                  : "font-semibold text-slate-800 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
