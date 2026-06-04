"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Globe, GraduationCap, Menu,
  TrendingUp, Users, X, Zap, BookOpen, Briefcase, Clock, Shield, Sparkles,
  ShoppingCart, Plus, Minus, Info, Download, Laptop, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartProvider, useCart } from "@/context/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/Navigation";

// ----------------------------------------------------------------------
// SECCIÓN: Hero
// ----------------------------------------------------------------------
function HeroSection() {
  const t = useTranslations("Hero");

  const cardsKeys = ["online", "time", "practical", "resources", "growth", "values"] as const;
  const icons = [Laptop, Clock, Briefcase, Download, TrendingUp, Heart];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-night-950 pt-32 pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fire-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fire-500/10 to-amber-500/10 border border-fire-500/20 rounded-full mb-8 shadow-lg shadow-fire-500/5"
          >
            <Sparkles className="w-4 h-4 text-fire-400" />
            <span className="text-sm font-medium text-fire-300">{t("badge")}</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-display">
            {t("title1")} <br className="hidden sm:block" />
            <span className="text-amber-500 drop-shadow-md">{t("titleHighlight")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-night-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bottom Content - Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {cardsKeys.map((key, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
                className="group relative h-56 bg-gradient-to-br from-night-900/80 to-night-900/40 backdrop-blur-sm border border-fire-500/10 rounded-2xl p-6 transition-all duration-500 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-fire-500/20 hover:border-fire-500/30 overflow-hidden flex flex-col justify-center items-center text-center cursor-default"
              >
                <div className="transform transition-transform duration-500 group-hover:-translate-y-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-fire-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-inner ring-1 ring-white/5">
                    <Icon className="w-6 h-6 text-fire-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {t(`cards.${key}.title`)}
                  </h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-night-300 leading-relaxed font-medium">
                    {t(`cards.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-fire-400/40 hover:text-fire-400 transition-colors cursor-pointer" />
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: Beneficios
// ----------------------------------------------------------------------
function BenefitsSection() {
  const t = useTranslations("Benefits");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const benefitKeys = ["strategic", "skills", "boost", "flexible", "holistic"];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-night-950 to-night-900 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-fire-500/10 border border-fire-500/20 rounded-full text-fire-400 text-sm font-medium mb-4">
            {t("badge")}
          </span>
        </motion.div>

        <div className="space-y-4">
          {benefitKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-gradient-to-br from-night-900/80 to-night-900/40 border rounded-2xl p-6 transition-all duration-300 ${
                  openIndex === index
                    ? "border-fire-500/30"
                    : "border-night-800/50 hover:border-fire-500/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{t(`items.${key}.q`)}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-fire-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-night-400 leading-relaxed">{t(`items.${key}.a`)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: Programas
// ----------------------------------------------------------------------
function ProgramsSection() {
  const t = useTranslations("Programs");
  const { addToCart, isInCart, removeFromCart } = useCart();
  const [attendees, setAttendees] = useState<Record<string, number>>({});

  // Lógica de Negocio y Precios (Datos que no se traducen)
  const programsLogic = [
    { id: "estrategias-intermedio", price: 8400, featured: false },
    { id: "cambio-organizacional", price: 2800, featured: false },
    { id: "equipos-multidisciplinarios", price: 1980, featured: false },
    { id: "estrategias-basico", price: 1500, featured: false },
    { id: "marketing-digital", price: 2500, featured: false },
    { id: "recursos-humanos", price: 2100, featured: true },
    { id: "comunicacion-efectiva", price: 1800, featured: false },
    { id: "liderazgo-mandos-medios", price: 3450, featured: false },
    { id: "finanzas-no-financieros", price: 3200, featured: false },
  ];

  const handleQuantityChange = (id: string, delta: number) => {
    setAttendees((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleCartAction = (id: string, qty: number, basePrice: number, name: string, target: string, features: string[]) => {
    if (isInCart(id)) {
      removeFromCart(id);
    } else {
      addToCart({
        id: id,
        name: `${name} (${qty})`,
        price: basePrice * qty,
        description: target,
        features: features,
      });
    }
  };

  return (
    <section id="programs" className="py-24 bg-night-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-fire-500/5 rounded-full blur-[120px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-fire-500/10 border border-fire-500/20 rounded-full text-fire-400 text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            {t("title")} <span className="gradient-text">{t("highlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsLogic.map((prog, index) => {
            const qty = attendees[prog.id] || 1;
            const totalPrice = prog.price * qty;

            const title = t(`items.${prog.id}.title`);
            const target = t(`items.${prog.id}.target`);
            const duration = t(`items.${prog.id}.duration`);
            const modality = t(`items.${prog.id}.modality`);
            const includes = t(`items.${prog.id}.includes`);

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative flex flex-col"
              >
                <div
                  className={`flex-1 flex flex-col bg-gradient-to-br from-night-900/90 to-night-900/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 ${
                    prog.featured
                      ? "border-fire-500/50 shadow-xl shadow-fire-500/20 bg-gradient-to-br from-fire-900/40 to-night-900/80"
                      : "border-night-800/50 hover:border-fire-500/20"
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase leading-snug">{title}</h3>
                    
                    <div className="mb-6 pb-6 border-b border-night-800/50">
                      <span className={`text-4xl font-bold font-display ${prog.featured ? 'text-fire-400' : 'text-white'}`}>
                        ${totalPrice.toLocaleString()}
                      </span>
                      <span className="text-night-400 text-sm ml-2">{t("ui.tax")}</span>
                    </div>

                    <p className="text-night-300 text-sm mb-6 italic border-l-2 border-fire-500/30 pl-3">
                      {t("ui.idealFor")} {target}
                    </p>

                    <ul className="space-y-4 mb-8 text-sm">
                      <li className="flex items-start gap-3 text-night-300">
                        <Check className="w-5 h-5 text-fire-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">{t("ui.includes")}</strong> {includes}</span>
                      </li>
                      <li className="flex items-start gap-3 text-night-300">
                        <Globe className="w-5 h-5 text-fire-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">{t("ui.modality")}</strong> {modality}</span>
                      </li>
                      <li className="flex items-start gap-3 text-night-300">
                        <Clock className="w-5 h-5 text-fire-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">{t("ui.duration")}</strong> {duration}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-6 bg-night-950 p-3 rounded-xl border border-night-800/50">
                      <span className="text-sm font-medium text-night-300">{t("ui.attendees")}</span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleQuantityChange(prog.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-night-800 text-night-300 hover:text-white hover:bg-night-700 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-white font-bold text-lg">{qty}</span>
                        <button 
                          onClick={() => handleQuantityChange(prog.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-night-800 text-night-300 hover:text-white hover:bg-night-700 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleCartAction(prog.id, qty, prog.price, title, target, [duration, modality])}
                      className={`w-full py-6 text-lg ${
                        isInCart(prog.id)
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 text-white"
                      }`}
                    >
                      {isInCart(prog.id) ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          {t("ui.inCart")}
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          {t("ui.buyNow")}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: Nosotros
// ----------------------------------------------------------------------
function AboutSection() {
  const t = useTranslations("About");
  const featureKeys = ["experts", "curriculum", "community", "access"];
  const icons = [GraduationCap, BookOpen, Users, Shield];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-night-950 to-night-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-fire-500/20 to-amber-500/10 rounded-3xl" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                  alt="Equipo trabajando en colaboración"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-night-950/20" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-fire-500/10 border border-fire-500/20 rounded-full text-fire-400 text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              {t("title")} <span className="gradient-text">{t("highlight")}</span> {t("suffix")}
            </h2>
            <p className="text-lg text-night-400 mb-8 leading-relaxed">
              {t("desc")}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {featureKeys.map((key, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-fire-500/10 to-amber-500/10 rounded-xl flex items-center justify-center text-fire-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t(`features.${key}.title`)}</h3>
                        <p className="text-sm text-night-400">{t(`features.${key}.desc`)}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: Servicios Adicionales
// ----------------------------------------------------------------------
function AdditionalServicesSection() {
  const t = useTranslations("Services");
  const pt = useTranslations("Programs.ui"); // Reutilizamos textos de UI como 'inCart'
  const { addToCart, isInCart, removeFromCart } = useCart();

  const servicesLogic = [
    { id: "mini-tutoria", price: 150 },
    { id: "sesion-mentoria", price: 490 },
    { id: "consultoria-grupal", price: 940 },
    { id: "apoyo-extendido", price: 2000 },
    { id: "paquete-seguimiento", price: 4700 },
  ];

  const handleCartAction = (id: string, price: number, title: string, desc: string, duration: string, modality: string) => {
    if (isInCart(id)) {
      removeFromCart(id);
    } else {
      addToCart({
        id,
        name: title,
        price,
        description: desc,
        features: [duration, modality],
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-night-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fire-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-fire-500/10 border border-fire-500/20 rounded-full text-fire-400 text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {t("title")} <span className="gradient-text">{t("highlight")}</span>
          </h2>
          <p className="text-lg text-night-400 max-w-2xl mx-auto">
            {t("desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesLogic.map((svc, index) => {
            const title = t(`items.${svc.id}.title`);
            const desc = t(`items.${svc.id}.desc`);
            const modality = t(`items.${svc.id}.modality`);
            const duration = t(`items.${svc.id}.duration`);
            const notes = t(`items.${svc.id}.notes`);

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col h-full bg-gradient-to-br from-night-900/80 to-night-900/40 backdrop-blur-sm border border-night-800 rounded-3xl p-6 hover:border-fire-500/30 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-fire-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-night-400 text-sm line-clamp-2">{desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-night-950 border border-night-800 text-xs text-night-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {modality}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-night-950 border border-night-800 text-xs text-night-300">
                    <Clock className="w-3.5 h-3.5 text-fire-400" />
                    {duration}
                  </span>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-fire-500/5 border border-fire-500/10">
                    <Info className="w-4 h-4 text-fire-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-night-300 italic leading-relaxed">{notes}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-night-800/80 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-sm text-night-400 mb-0.5">{t("ui.priceTax")}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white font-display">
                        ${svc.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-night-500 font-medium">MXN</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleCartAction(svc.id, svc.price, title, desc, duration, modality)}
                    size="icon"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isInCart(svc.id)
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/20"
                        : "bg-night-800 hover:bg-gradient-to-r hover:from-fire-500 hover:to-amber-500 text-white"
                    }`}
                    title={isInCart(svc.id) ? pt("inCart") : pt("buyNow")}
                  >
                    {isInCart(svc.id) ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: CTA (A la medida)
// ----------------------------------------------------------------------
function CTASection() {
  const t = useTranslations("CTA");
  const locale = useLocale();

  return (
    <section className="py-24 bg-night-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-fire-500/10 via-transparent to-amber-500/10" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-fire-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fire-500/10 border border-fire-500/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-fire-400" />
            <span className="text-sm font-medium text-fire-300">{t("badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            {t("title1")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-xl text-night-400 mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Redirige a nueva pestaña */}
            <Link href={`/${locale}/contact`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-fire-500/25 hover:shadow-fire-500/40 transition-all duration-300 group"
              >
                {t("btnRequest")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Redirige en la misma pestaña */}
            <Link href={`/${locale}/custom-plan`}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-fire-500/30 text-fire-400 hover:bg-fire-500/10 px-8 py-6 text-lg"
              >
                {t("btnHavePlan")}
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-night-500 text-sm">
            {t("disclaimer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SECCIÓN: Footer
// ----------------------------------------------------------------------
function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation"); // Importamos los textos del Nav
  const locale = useLocale();

  // El arreglo de Empresa ahora coincide 100% con el Navbar y son enlaces reales
  const companyLinks = [
    { name: tNav("programs"), href: `/${locale}/#programs` },
    { name: tNav("services"), href: `/${locale}/#pricing` },
    { name: tNav("benefits"), href: `/${locale}/#benefits` },
    { name: tNav("about"), href: `/${locale}/#about` },
    { name: tNav("contact"), href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { name: t("links.privacy"), href: "#" },
    { name: t("links.terms"), href: "#" },
    { name: t("links.refunds"), href: "#" }
  ];

  return (
    <footer className="bg-night-950 border-t border-night-800/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href={`/${locale}`} className="flex items-center gap-3 mb-6">
              <img 
                src="/Advenza-logo.png" 
                alt="Advenza Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Adven Za<span className="text-fire-500">.</span>
              </span>
            </a>
            <p className="text-night-400 mb-6 max-w-sm">
              {t("desc")}
            </p>
          </div>

          {/* Links de Empresa  */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">{t("catCompany")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-night-400 hover:text-fire-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Legales */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">{t("catLegal")}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-night-400 hover:text-fire-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-night-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-night-500 text-sm">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-night-500 text-sm">{t("slogan")}</span>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
            <svg className="h-4" viewBox="0 0 780 500" fill="none"><rect width="780" height="500" rx="40" fill="white"/><path fill="#1434CB" d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"/><path fill="#1434CB" d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"/><path fill="#F7B600" d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"/></svg>
          </div>
          <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
            <svg className="h-4" viewBox="0 0 152 100" fill="none"><rect width="152" height="100" rx="8" fill="white"/><circle cx="55" cy="50" r="30" fill="#EB001B"/><circle cx="97" cy="50" r="30" fill="#F79E1B"/><path d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z" fill="#FF5F00"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
// ----------------------------------------------------------------------
// ROOT & EXPORT
// ----------------------------------------------------------------------
function PageContent() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProgramsSection />
      <AboutSection />
      <AdditionalServicesSection />
      <CTASection />
      <Footer />
      <CartSidebar />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-night-950">
        <PageContent />
      </main>
    </CartProvider>
  );
}