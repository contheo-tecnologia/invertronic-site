"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/heroSlides";

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
      className="relative w-full h-[85vh] min-h-[580px] max-h-[820px] flex items-center overflow-hidden bg-slate-950 select-none"
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
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagem Panorâmica */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.titleBold}
                fill
                priority={index === 0}
                className={`transition-transform duration-10000 ease-out ${
                  isBannerPhoto
                    ? "object-cover object-[center_35%]"
                    : "object-cover object-center"
                }`}
              />

              {/* Metade da Esquerda Escura (Conforme Anexo) com Transição Suave para a Direita */}
              <div className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[54%] bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 z-10 pointer-events-none" />
            </div>

            {/* Conteúdo com Tipografia Nítida e Proporcional na Esquerda */}
            <div className="relative z-20 max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 w-full h-full flex flex-col justify-center">
              <div className="max-w-xl lg:max-w-2xl text-left">
                
                {/* Tagline com Traço Dourado ao Lado (Fiel ao Exemplo) */}
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-slate-300 uppercase">
                    {slide.tagline}
                  </span>
                  <span className="w-12 sm:w-16 h-[2px] bg-[#fbd708]" />
                </div>

                {/* Headline Principal (Fonte Compacta e Proporcional) */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3.5 drop-shadow-md">
                  <span>{slide.titleLight}</span> <br />
                  <span>{slide.titleBold} </span>
                  <span className="text-[#fbd708]">{slide.titleHighlight}</span>
                </h1>

                {/* Descrição Concisa (2 linhas) */}
                <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-6 max-w-lg font-normal drop-shadow">
                  {slide.description}
                </p>

                {/* Botão de Destaque Amarelo Dourado */}
                <div>
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-[#012a40] bg-[#fbd708] hover:bg-[#e5c300] transition-all duration-300 hover:scale-105 shadow-xl shadow-black/40 group"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#012a40] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Traços de Navegação na Esquerda Inferior (Exatamente como no Anexo) */}
                <div className="flex items-center space-x-2.5 mt-8 sm:mt-12">
                  {HERO_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrent(dotIdx)}
                      aria-label={`Slide ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === current
                          ? "w-9 bg-[#fbd708]"
                          : "w-5 bg-slate-600/70 hover:bg-slate-400"
                      }`}
                    />
                  ))}
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
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-[#fbd708] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-[#fbd708] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </section>
  );
}
