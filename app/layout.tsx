import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Wittgenstein,
  Vazirmatn,
  Estedad,
} from "next/font/google";
import "./globals.css";
import Navbar from "./ui/layout/Navbar";
import Footer from "./ui/layout/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin", "latin-ext"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein",
  subsets: ["latin", "latin-ext"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

const estedad = Estedad({
  variable: "--font-estedad",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Pars Azma Co",
  description: "Design and manufacture of industrial laboratory ovens, incubators, centrifuges, and climate testing equipment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${wittgenstein.variable} ${vazirmatn.variable} ${estedad.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
