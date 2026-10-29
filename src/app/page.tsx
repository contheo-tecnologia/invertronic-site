import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CredentialsBar } from "@/components/home/CredentialsBar";
import { SolutionsTabs } from "@/components/home/SolutionsTabs";
import { CraneAndHoistSection } from "@/components/home/CraneAndHoistSection";
import { Industry40Section } from "@/components/home/Industry40Section";
import { SegmentsGrid } from "@/components/home/SegmentsGrid";
import { AboutCompany } from "@/components/home/AboutCompany";
import { QuoteSection } from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section com Banner Amplo da Ponte Rolante & Conteúdo de Indústria 4.0 */}
      <HeroSlider />

      {/* 2. Barra de Credenciais & Normas (13+ anos, 1800+ projetos) */}
      <CredentialsBar />

      {/* 3. Chamada Destacada para a Segunda Página (Produtos WEG: Inversores, Soft-Starters & CLP) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/produtos" className="group block">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group-hover:shadow-2xl group-hover:border-blue-400 transition-all duration-300">
              <div className="relative w-full aspect-[16/9] max-h-[460px] bg-slate-950">
                <Image
                  src="/images/banner-equipamentos-weg-industria.jpg"
                  alt="A alta performance industrial começa aqui - Linha WEG"
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Tarja Informativa com Botão de Acesso */}
              <div className="bg-[#024162] p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#012a40]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fbd708] text-[#012a40] flex items-center justify-center font-black text-xs flex-shrink-0">
                    WEG
                  </div>
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white block">
                      Inversores de Frequência, Soft-Starters e Controladores Lógicos
                    </span>
                    <span className="text-xs text-slate-200">
                      Conheça os modelos em estoque, tabelas de potência e especificações técnicas.
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fbd708] hover:bg-[#e5c300] font-black text-xs uppercase tracking-wider text-[#012a40] transition-all shadow-md">
                  <span>Acessar Página de Produtos</span>
                  <ArrowRight className="w-4 h-4 text-[#012a40] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Catálogo Técnico Interativo por Abas (Todas as Soluções) */}
      <SolutionsTabs />

      {/* 5. Seção Especial de Pontes Rolantes e Talhas Elétricas (Estilo Movequip) */}
      <CraneAndHoistSection />

      {/* 6. Seção de Indústria 4.0, CLP & SCADA (Estilo Siembra) */}
      <Industry40Section />

      {/* 7. Segmentos Industriais Atendidos */}
      <SegmentsGrid />

      {/* 8. Sobre a Empresa (Trajetória desde 2011 em Ribeirão Preto - SP) */}
      <AboutCompany />

      {/* 9. Formulário de Orçamento Rápido & Contato Comercial */}
      <QuoteSection />
    </>
  );
}
