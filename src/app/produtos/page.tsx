import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Gauge, Cpu, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare, ChevronRight } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Inversores WEG CFW11, Soft-Starters SSW900 & CLP | Invertronic",
  description: "Linha premium de acionamentos WEG: Inversor de Frequência CFW11, Soft-Starter SSW900 e Controladores Lógicos Programáveis. Venda técnica, parametrização e laboratório em Ribeirão Preto.",
};

export default function ProdutosPage() {
  const cfw11Highlights = [
    { label: "Tecnologia Vectrue", desc: "Controle vetorial sensorless e com encoder para torque máximo desde rotação zero." },
    { label: "Heavy Duty para Pontes", desc: "Projetado para regimes severos de elevação e translação de pontes rolantes e siderurgia." },
    { label: "IHM Gráfica Inteligente", desc: "Display LCD gráfico com relógio em tempo real, parametrização guiada e histórico de alarmes." },
    { label: "Comunicação em Rede", desc: "Módulos opcionais Profinet, Modbus TCP, DeviceNet, CANopen e Ethernet/IP." },
  ];

  const ssw900Highlights = [
    { label: "IHM Touch/Gráfica Colorida", desc: "Exibição visual da curva de partida, tensão, corrente e potência em tempo real." },
    { label: "Bypass Incorporado", desc: "Redução drástica de perdas térmicas e consumo interno após atingir a velocidade nominal." },
    { label: "Algoritmos Anti-Golpe", desc: "Elimina transientes de pressão e o golpe de aríete em sistemas de bombeamento." },
    { label: "Diagnóstico Preditivo", desc: "Monitoramento contínuo de isolamento do motor e registro de eventos com timestamp." },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Breadcrumb Strip */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#024162] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#024162] font-black">Produtos: Inversores WEG CFW11, Soft-Starters SSW900 & CLP</span>
        </div>
      </div>

      {/* 2. Banner Principal em Camadas (Fiel à Imagem Anexada com CFW11 + SSW900 + CLP) */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
            {/* Banner Composição: Esquerda texto escuro + Fábrica ao fundo + Laranja direita + CFW11 + SSW900 + CLP */}
            <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px]">
              <Image
                src="/images/banner-equipamentos-weg-industria.jpg"
                alt="A alta performance industrial começa aqui - Inversor WEG CFW11, Soft-Starter SSW900 e CLP"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Tarja de Ação na Paleta Oficial */}
            <div className="bg-[#024162] p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#012a40]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbd708] animate-pulse" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Equipamentos WEG originais com parametrização, montagem em painel e assistência técnica de fábrica.
                </span>
              </div>

              <a
                href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20acessei%20a%20página%20de%20produtos%20da%20Invertronic%20e%20gostaria%20de%20uma%20cotação%20para%20o%20Inversor%20WEG%20CFW11%20ou%20Soft-Starter%20SSW900.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#fbd708] hover:bg-[#e5c300] font-black text-xs uppercase tracking-wider text-[#012a40] transition-all shadow-md"
              >
                <span>Falar com Engenheiro de Drives</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Destaque Especial: Inversor WEG CFW11 */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Foto Real do Inversor WEG CFW11 Flipped */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 shadow-inner group">
                <div className="relative w-48 h-64 sm:h-72 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/weg-cfw11-flipped-transparent.png"
                    alt="Inversor de Frequência WEG CFW11 Vectrue"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <span className="mt-3 text-[11px] font-black uppercase tracking-wider text-[#024162] bg-[#024162]/10 px-3 py-1 rounded-full">
                  WEG CFW11 Original
                </span>
              </div>

              {/* Informações Técnicas */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024162]/10 border border-[#024162]/30 text-[#024162] text-xs font-black uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-[#024162]" />
                  <span>Drives de Alta Performance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Inversor de Frequência WEG CFW11
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  O <strong>WEG CFW11</strong> é a linha de inversores mais robusta e versátil da indústria. Desenvolvido com controle vetorial <strong>Vectrue</strong> de alta precisão, garante torque pleno desde rotação zero, sendo o inversor ideal para <strong>pontes rolantes</strong>, siderurgia, usinas de açúcar e álcool e papel e celulose.
                </p>

                {/* Grid dos Diferenciais CFW11 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {cfw11Highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-extrabold text-xs text-[#024162] block mb-0.5">{h.label}</span>
                      <span className="text-[11px] text-slate-600 leading-tight block">{h.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20uma%20especificação%20e%20cotação%20para%20o%20Inversor%20WEG%20CFW11.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#024162] hover:bg-[#065a87] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md border-b-2 border-[#fbd708]"
                  >
                    <span>Cotação Técnica do WEG CFW11</span>
                    <ArrowRight className="w-4 h-4 text-[#fbd708]" />
                  </a>
                </div>
              </div>

              {/* Box de Autoridade Técnica */}
              <div className="lg:col-span-4 bg-gradient-to-br from-[#024162] to-[#012a40] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbd708]">
                  Por que adquirir na Invertronic?
                </span>
                <h3 className="text-lg sm:text-xl font-bold">Laboratório em Ribeirão Preto</h3>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Parametrização avançada de curvas de elevação e frenagem dinâmica.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Testes com carga dinâmica real antes do envio da bancada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Estoque de placas de controle, IHM e módulos IGBT de reposição.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Start-up e comissionamento com emissão de ART/CREA.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Destaque Especial: Soft-Starter WEG SSW900 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider">
                  <Gauge className="w-4 h-4 text-amber-600" />
                  <span>Partida Suave de Alta Performance</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Soft-Starter WEG SSW900
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  A <strong>WEG SSW900</strong> é a chave de partida estática mais completa do mercado global. Dotada de processador dedicado de 32 bits, controle de torque por controle de vetores de tensão e bypass incorporado, é a escolha definitiva para bombas pesadas, compressores de grande porte, picadores e exaustores.
                </p>

                {/* Grid dos Diferenciais SSW900 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {ssw900Highlights.map((h, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="font-extrabold text-sm text-slate-900 block mb-1">{h.label}</span>
                      <span className="text-xs text-slate-600 leading-relaxed block">{h.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20uma%20especificação%20e%20cotação%20para%20a%20Soft-Starter%20WEG%20SSW900.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fbd708] hover:bg-[#e5c300] text-[#012a40] font-black text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Cotação da WEG SSW900</span>
                    <ArrowRight className="w-4 h-4 text-[#012a40]" />
                  </a>
                </div>
              </div>

              {/* Box Benefícios SSW900 */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-5 border-l-4 border-[#fbd708]">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbd708]">
                  Tecnologia e Proteção de Ativos
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">Máxima Vida Útil dos Motores</h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Elimina trancos mecânicos e picos de corrente na subestação.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Redução de até 90% das perdas térmicas no painel através do bypass.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Comunicação pronta para Indústria 4.0 (Modbus, Profinet, Ethernet).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fbd708] flex-shrink-0 mt-0.5" />
                    <span>Garantia de fábrica e suporte de engenharia especializada Invertronic.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Destaque Controladores Lógicos (CLP) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-black uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-cyan-700" />
                  <span>Automação & Processos</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Controladores Lógicos Programáveis (CLP / PLC)
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Programação determinística em linguagens normatizadas IEC 61131-3 para integração total de inversores, sensores, atuadores e IHMs gráficas touchscreen. Arquiteturas com alta disponibilidade e migração de sistemas antigos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-sm text-[#024162] block mb-1">Lógicas IEC 61131-3</span>
                    <span className="text-xs text-slate-600">Desenvolvimento com memorial descritivo, diagramas elétricos e código estruturado.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-sm text-[#024162] block mb-1">Segurança NR-12</span>
                    <span className="text-xs text-slate-600">CLPs de segurança certificados (Safety Sil 3 / Ple) com recolhimento de ART.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20preciso%20de%20desenvolvimento/migração%20de%20CLP%20para%20minha%20fábrica.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#024162] hover:bg-[#065a87] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Falar com Projetista de CLP</span>
                    <ArrowRight className="w-4 h-4 text-[#fbd708]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#012a40] to-[#024162] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbd708]">
                  Integração Total TI / TA
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">Conectividade e SCADA</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Conecte seus controladores diretamente aos sistemas de gestão corporativa (SAP, Totvs) e a supervisórios industriais modernos acessíveis por desktop, tablet ou celular.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Chamada Final para Cotação com o WhatsApp */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Precisa de um Inversor WEG CFW11, Soft-Starter SSW900 ou CLP?
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Envie a potência do motor ou a necessidade da sua linha. Nossa equipe de engenharia retorna com a proposta técnica e condições comerciais personalizadas.
          </p>
          <a
            href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20gostaria%20de%20uma%20cotação%20para%20Inversor%20WEG%20CFW11%20ou%20Soft-Starter%20SSW900.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#024162] hover:bg-[#065a87] text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg border-b-4 border-[#fbd708]"
          >
            <MessageSquare className="w-5 h-5 text-[#fbd708]" />
            <span>Chamar no WhatsApp Comercial ({COMPANY.contact.whatsappFormatted})</span>
          </a>
        </div>
      </section>
    </div>
  );
}
