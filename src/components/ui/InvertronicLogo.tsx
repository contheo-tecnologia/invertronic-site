import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "original";
  height?: number;
}

export function InvertronicLogo({ className = "", variant = "original", height = 78 }: LogoProps) {
  // Proporção original: 1024 x 375 (~ 2.73 : 1)
  const width = Math.round(height * 2.73);
  
  const src = variant === "light" 
    ? "/images/logo-invertronic-darkmode.png" 
    : "/images/logo-invertronic.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="relative flex items-center">
        <Image
          src={src}
          alt="Invertronic Soluções Industriais"
          width={width}
          height={height}
          priority
          className="object-contain h-auto max-h-[76px] sm:max-h-[84px] w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
