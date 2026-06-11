import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.urgenciasveterinariassf.com.ar"),
  title: "Urgencias Veterinarias Santa Fe | Atención 24 Horas",
  description:
    "Clínica veterinaria en Santa Fe. Atención de urgencias 24 horas, internación (UCI), cirugías, ecografías y laboratorio clínico. Especialistas en caninos y felinos.",
  keywords: [
    "veterinaria Santa Fe",
    "urgencias veterinarias",
    "veterinaria 24 horas",
    "clínica veterinaria",
    "internación veterinaria",
    "veterinario de guardia",
    "guardia veterinaria Santa Fe",
    "perros",
    "gatos",
    "Av. Gral Paz 7623",
  ],
  alternates: {
    canonical: "https://www.urgenciasveterinariassf.com.ar",
  },
  openGraph: {
    title: "Urgencias Veterinarias Santa Fe | 24 Horas",
    description:
      "Estabilizamos pacientes críticos las 24 horas. Clínica general y emergentología en Santa Fe.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/logo.jpg",
    // Si llegás a armar un archivo .png o .ico dedicado, ponés su ruta acá, ej: "/favicon.ico"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Urgencias Veterinarias Santa Fe",
  url: "https://www.urgenciasveterinariassf.com.ar",
  telephone: "+5493425502341",
  image: "https://www.urgenciasveterinariassf.com.ar/images/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Gral. Paz 7623",
    addressLocality: "Santa Fe",
    addressRegion: "Santa Fe",
    postalCode: "3000",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.602013,
    longitude: -60.675325,
  },
  openingHours: "Mo-Su 00:00-24:00",
  description:
    "Clínica veterinaria de urgencias 24 horas en Santa Fe, especializada en caninos y felinos. UCI, internación, cirugías y laboratorio clínico.",
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/urgencias.veterinarias.sf",
  ],
  hasMap: "https://maps.google.com/?q=Av.+Gral.+Paz+7623,+Santa+Fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClasses = [
    geistSans.variable,
    geistMono.variable,
    leagueSpartan.variable,
    "min-h-full",
    "flex",
    "flex-col",
    "antialiased",
  ].join(" ");

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={bodyClasses}>{children}</body>
    </html>
  );
}