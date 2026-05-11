import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keryakos Alkis Felopater | Fullstack Developer & DevOps Engineer",
  description: "Futuristic personal portfolio of Keryakos Alkis Felopater, showcasing scalable applications, cloud infrastructure, and premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <LenisProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
