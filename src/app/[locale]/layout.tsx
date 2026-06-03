import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "../ClientBody";
import Script from "next/script";
import { CartProvider } from "@/context/CartContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Navigation } from "@/components/Navigation"; // <-- Importamos
import { CartSidebar } from "@/components/CartSidebar"; // <-- Importamos

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { 
  title: "Adven Za | Capacitación", 
  description: "Plataforma de capacitación",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            {/* Globalizamos la navegación y el Sidebar */}
            <Navigation /> 
            <ClientBody>{children}</ClientBody>
            <CartSidebar />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}