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
      {/* 1. Hero em tela cheia */}
      <HeroSlider />

      {/* 2. Sobre a empresa (desde 2011 em Ribeirão Preto - SP) */}
      <AboutCompany />

      {/* 3. Soluções / produtos em destaque */}
      <SolutionsTabs />

      {/* 4. Faixa escura: reconhecidos por (métricas e normas) */}
      <CredentialsBar />

      {/* 5. Pontes rolantes e talhas elétricas */}
      <CraneAndHoistSection />

      {/* 6. Indústria 4.0, CLP & SCADA */}
      <Industry40Section />

      {/* 7. Segmentos atendidos (cases) */}
      <SegmentsGrid />

      {/* 8. Orçamento e contato comercial */}
      <QuoteSection />
    </>
  );
}
