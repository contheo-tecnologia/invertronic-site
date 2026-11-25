"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { InvertronicLogo } from "@/components/ui/InvertronicLogo";

const NAV_ITEMS = [
  { label: "Empresa", href: "/#empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Atuação", href: "/#segmentos" },
  { label: "Indústria 4.0", href: "/#industria-4-0" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2d2d2d] shadow-md">
      <div className="flex h-24 items-center justify-between px-6 lg:px-12">
        {/* Logo (versão para fundo escuro) */}
        <Link href="/" className="group flex items-center" aria-label="Invertronic - Início">
          <InvertronicLogo variant="light" height={64} />
        </Link>

        {/* Menu principal */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-wide text-white">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-2 border-b-2 border-transparent hover:border-[#fbd708] hover:text-[#fbd708] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão de orçamento */}
        <a
          href="/#orcamento"
          className="hidden lg:inline-flex h-10 items-center rounded-md bg-[#fbd708] px-5 text-xs font-bold uppercase tracking-wide text-[#2d2d2d] hover:bg-[#e5c300] transition-colors"
        >
          Solicite seu orçamento
        </a>

        {/* Toggle mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2d2d2d] border-t border-white/10 px-6 pb-6 pt-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-white border-b border-white/10 hover:text-[#fbd708]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#orcamento"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex h-11 items-center justify-center rounded-md bg-[#fbd708] text-xs font-bold uppercase tracking-wide text-[#2d2d2d]"
          >
            Solicite seu orçamento
          </a>
        </div>
      )}
    </header>
  );
}
