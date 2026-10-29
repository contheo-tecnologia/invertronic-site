"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, MessageSquare, CheckCircle2 } from "lucide-react";
import { HERO_SLIDES } from "@/data/heroSlides";
import { COMPANY } from "@/data/company";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 7500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused]);

  return (
    <section
      className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] flex items-end overflow-hidden bg-slate-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === current;
        const isBannerPhoto = slide.bgImage.includes("banner-ponte-rolante-invertronic");

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col justify-end transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagem Panorâmica Ampla Widescreen */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.titleBold}
                fill
                priority={index === 0}
                className={`transition-transform duration-10000 ease-out ${
                  isBannerPhoto
                    ? "object-cover object-[center_22%]"
                    : "object-cover object-center scale-102"
                }`}
              />
              
              {/* Degradê Suave que protege a leitura no canto inferior esquerdo sem criar 'box' */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
            </div>

            {/* Letras 3D Vazadas no Fundo ("4.0") */}
            <div className="absolute right-12 top-1/4 pointer-events-none hidden xl:block select-none opacity-15">
              <span
                className="text-[260px] font-black tracking-tighter text-transparent font-sans"
                style={{
                  WebkitTextStroke: "2px rgba(251, 215, 8, 0.4)",
                  textShadow: "0 0 50px rgba(251, 215, 8, 0.2)",
                }}
              >
                {index === 0 ? "4.0" : index === 1 ? "CFW11" : "CLP"}
              </span>
            </div>

            {/* CONTEÚDO SEM BOX DE FUNDO - TIPOGRAFIA LIVRE NA PARTE ESQUERDA INFERIOR */}
            <div className="relative z-20 max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 w-full pb-10 sm:pb-14">
              <div className="max-w-2xl sm:max-w-3xl text-left">
                
                {/* Linha Superior: Tagline e Badges Técnicos */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024162]/90 border border-[#fbd708]/70 text-[#fbd708] text-[10px] sm:text-[11px] font-black tracking-wider uppercase backdrop-blur-md shadow-md">
                    <Shield className="w-3.5 h-3.5 text-[#fbd708]" />
                    <span>{slide.tagline}</span>
                  </div>

                  {slide.techBadges.slice(0, 3).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 px-2.5 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#fbd708]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {/* Headline Principal Flutuante com Sombra de Alto Impacto */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  <span className="text-white drop-shadow-md">{slide.titleLight} </span>
                  <span className="text-white drop-shadow-md">{slide.titleBold} </span>
                  <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#fbd708] via-amber-200 to-white drop-shadow-[0_0_25px_rgba(251,215,8,0.6)]">
                    {slide.titleHighlight}
                  </span>
                </h1>

                {/* Descrição com Tipografia Nítida Direta na Foto */}
                <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
                  {slide.description}
                </p>

                {/* Botões de Ação na Paleta Oficial */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Botão Primário Dourado com Efeito Sweep */}
                  <a
                    href={slide.ctaLink}
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#012a40] bg-[#fbd708] hover:bg-[#e5c300] transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-black/50 group/btn"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                    <span className="relative z-10">{slide.ctaText}</span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-[#012a40] group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {/* Botão Secundário WhatsApp */}
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}?text=Olá,%20acessei%20o%20site%20da%20Invertronic%20e%20gostaria%20de%20atendimento%20sobre%20${encodeURIComponent(slide.titleHighlight)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-black/50 hover:bg-black/70 border border-white/20 hover:border-[#fbd708] backdrop-blur-md transition-all duration-300 shadow-xl"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Falar com Engenheiro</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Setas Laterais Discretas */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#024162]/80 border border-white/20 hover:border-[#fbd708] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#024162]/80 border border-white/20 hover:border-[#fbd708] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots de Paginação na Extrema Base */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {HERO_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrent(dotIdx)}
            aria-label={`Slide ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              dotIdx === current
                ? "w-7 h-1.5 bg-[#fbd708] shadow-[0_0_8px_rgba(251,215,8,0.8)]"
                : "w-2 h-1.5 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
