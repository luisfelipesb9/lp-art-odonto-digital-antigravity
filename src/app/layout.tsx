import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
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
  title: "Art Odonto Digital",
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
    images: [
      {
        url: "/social-proof-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Hanne Fiuza e Paciente - Art Odonto Digital",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17942246022"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17942246022');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
