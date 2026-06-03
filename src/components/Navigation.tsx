"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Selector de Idioma Integrado
export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath || `/${nextLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-night-400 hover:text-fire-400 transition-colors text-sm font-medium"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "es" ? "ES / EN" : "EN / ES"}</span>
    </button>
  );
}

export function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ENLACES 
  const navLinks = [
    { name: t("programs"), href: `/${locale}/#programs` },
    { name: t("services"), href: `/${locale}/#pricing` },
    { name: t("benefits"), href: `/${locale}/#benefits` },
    { name: t("about"), href: `/${locale}/#about` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-night-950/95 backdrop-blur-xl border-b border-fire-500/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative">
              <img 
              src="/Advenza-logo.png" 
              alt="Advenza Logo" 
              className="h-10 w-auto object-contain" 
            />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Adven Za<span className="text-fire-500">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-night-400 hover:text-fire-400 transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fire-500 to-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-night-300 hover:text-fire-400 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-fire-500 to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 text-white font-semibold shadow-lg shadow-fire-500/25">
                {t("start")}
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-night-400 hover:text-white">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-night-400 hover:text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-night-950/98 backdrop-blur-xl border-t border-fire-500/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-night-300 hover:text-fire-400 py-2">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}