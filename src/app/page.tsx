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

      {/* 3. Catálogo Técnico Interativo por Abas (Todas as Soluções) */}
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
