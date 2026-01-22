import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Art Odonto Digital | Dra. Hanne Fiuza | Montes Claros MG",
  description:
    "Clínica odontológica com tecnologia digital em Montes Claros. Implantes, estética dental e harmonização facial. Agende sua avaliação com a Dra. Hanne Fiuza.",
  keywords: [
    "dentista montes claros",
    "implante dentário",
    "estética dental",
    "harmonização facial",
    "dra hanne fiuza",
    "art odonto digital",
  ],
  openGraph: {
    title: "Art Odonto Digital | Conquiste o Sorriso dos Sonhos",
    description:
      "Tecnologia digital e atendimento humanizado. Referência em odontologia em Montes Claros.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
