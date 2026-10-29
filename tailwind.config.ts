import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        invertronic: {
          blue: "#024162",       // Azul petróleo oficial das letras e viga
          dark: "#012a40",       // Azul petróleo escuro
          light: "#065a87",      // Azul petróleo médio iluminado
          cyan: "#0088cc",       // Tom ciano de apoio
          yellow: "#fbd708",     // Amarelo oficial do diodo da logo
          yellowDark: "#e5c300", // Amarelo escuro hover
          surface: "#f8fafc",    // Cinza suave de fundo
          border: "#e2e8f0",     // Bordas neutras
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
