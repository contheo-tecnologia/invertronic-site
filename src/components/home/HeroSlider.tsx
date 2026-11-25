"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/heroSlides";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, 7500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused]);

  return (
    <section
      className="relative w-full h-[calc(100vh-96px)] min-h-[560px] flex items-center overflow-hidden bg-[#2d2d2d] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === current;
        const isBannerPhoto = slide.bgImage.includes("banner-ponte-rolante-invertronic");

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Foto em tela cheia com camada escura uniforme */}
            <Image
              src={slide.bgImage}
              alt={`${slide.titleLight} ${slide.titleBold} ${slide.titleHighlight}`}
              fill
              priority={index === 0}
              className={`object-cover ${isBannerPhoto ? "object-[center_35%]" : "object-center"}`}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Conteúdo: título grande, texto e botão de contorno */}
            <div className="relative z-20 mx-auto flex h-full w-full max-w-[1480px] flex-col justify-center px-6 sm:px-12 lg:px-20">
              <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#fbd708]">
                {slide.tagline}
              </span>

              <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
                {slide.titleLight} {slide.titleBold}{" "}
                <span className="text-[#fbd708]">{slide.titleHighlight}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200">
                {slide.description}
              </p>

              <div className="mt-8">
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center rounded-md border border-white px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#fbd708] hover:border-[#fbd708] hover:text-[#2d2d2d]"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Setas laterais */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:border-[#fbd708] hover:text-[#fbd708]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:border-[#fbd708] hover:text-[#fbd708]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2.5">
        {HERO_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrent(dotIdx)}
            aria-label={`Slide ${dotIdx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              dotIdx === current ? "w-9 bg-[#fbd708]" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
