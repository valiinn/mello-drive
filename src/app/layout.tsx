import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Motorista Particular`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "motorista particular",
    "transporte particular",
    "transporte executivo",
    "transfer aeroporto",
    "transporte escolar",
    "Geely EX2 Max",
    "motorista Brasília",
    "motorista particular Brasília",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Motorista Particular`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Geely EX2 Max`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Motorista Particular`,
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
