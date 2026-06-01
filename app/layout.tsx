import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urgencias Veterinarias Santa Fe | Atención 24 Horas",
  description: "Clínica veterinaria en Santa Fe. Atención de urgencias 24 horas, internación (UCI), cirugías, ecografías y laboratorio clínico. Especialistas en caninos y felinos.",
  keywords: [
    "veterinaria Santa Fe",
    "urgencias veterinarias",
    "veterinaria 24 horas",
    "clínica veterinaria",
    "internación veterinaria",
    "veterinario de guardia",
    "perros",
    "gatos",
    "Av. Gral Paz 7623"
  ],
  openGraph: {
    title: "Urgencias Veterinarias Santa Fe | 24 Horas",
    description: "Estabilizamos pacientes críticos las 24 horas. Clínica general y emergentología en Santa Fe.",
    url: "https://www.urgenciasveterinariassf.com.ar",
    siteName: "Urgencias Veterinarias Santa Fe",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Logo Urgencias Veterinarias Santa Fe",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClasses = [
    geistSans.variable,
    geistMono.variable,
    "min-h-full",
    "flex",
    "flex-col",
    "antialiased"
  ].join(" ");

  return (


    { children }


  );
}