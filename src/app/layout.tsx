import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invertronic | Automação Industrial, Pontes Rolantes, Inversores & Indústria 4.0",
  description: "Líder em automação industrial, pontes rolantes, talhas elétricas, inversores de frequência, soft-starters, CLPs e painéis CCM. Engenharia e manutenção com mais de 13 anos em Ribeirão Preto e todo o Brasil.",
  keywords: [
    "automação industrial",
    "indústria 4.0",
    "ponte rolante",
    "talha elétrica",
    "inversor de frequência",
    "soft-starter",
    "controlador lógico programável",
    "CLP",
    "painéis elétricos",
    "CCM inteligente",
    "Ribeirão Preto",
    "retrofit industrial",
    "manutenção de inversores"
  ],
  authors: [{ name: "Invertronic Soluções Industriais" }],
  openGraph: {
    title: "Invertronic Soluções Industriais",
    description: "Engenharia de Automação, Acionamentos e Movimentação de Cargas Industriais.",
    url: "https://invertronic.com.br",
    siteName: "Invertronic",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-blue-600/20 selection:text-blue-700">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
