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

// Aquí configuramos el SEO (Search Engine Optimization)
export const metadata: Metadata = {
  // El título que aparece en la pestaña del navegador y en Google
  title: "Urgencias Veterinarias Santa Fe | Atención 24 Horas",

  // La descripción que aparece debajo del título en Google
  description: "Clínica veterinaria en Santa Fe. Atención de urgencias 24 horas, internación (UCI), cirugías, ecografías y laboratorio clínico. Especialistas en caninos y felinos.",

  // Palabras clave estratégicas para que la gente te encuentre
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

  // Configuración para cuando comparten tu link en WhatsApp, Facebook, etc.
  openGraph: {
    title: "Urgencias Veterinarias Santa Fe | 24 Horas",
    description: "Estabilizamos pacientes críticos las 24 horas. Clínica general y emergentología en Santa Fe.",
    url: "https://www.urgenciasveterinariassf.com.ar", // Reemplaza esto por tu dominio real cuando lo tengas
    siteName: "Urgencias Veterinarias Santa Fe",
    images: [
      {
        url: "/images/logo.jpg", // Usará tu logo para la previsualización en WhatsApp
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
  // Concatenamos las clases usando un array y join para evitar errores de template literals
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