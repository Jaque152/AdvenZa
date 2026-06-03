"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const [formData, setFormData] = useState({
    nombre: "", empresa: "", email: "", objetivos: "", plazo: "", presupuesto: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", empresa: "", email: "", objetivos: "", plazo: "", presupuesto: "" });
        setTimeout(() => setStatus("idle"), 5000); // Ocultar mensaje después de 5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fire-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-20 max-w-2xl font-display leading-tight"
        >
          {t("title")}
        </motion.h1>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Info Lateral */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-12 bg-night-900/40 p-8 rounded-3xl border border-night-800 backdrop-blur-md"
          >
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-fire-400 tracking-widest uppercase mb-4">
                <MapPin className="w-4 h-4" /> {t("info.addressLabel")}
              </h3>
              <p className="text-night-300 whitespace-pre-line leading-relaxed text-sm">{t("info.addressValue")}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-fire-400 tracking-widest uppercase mb-4">
                <Mail className="w-4 h-4" /> {t("info.emailLabel")}
              </h3>
              <a href={`mailto:${t("info.emailValue")}`} className="text-white hover:text-fire-400 transition-colors text-sm font-medium">{t("info.emailValue")}</a>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-fire-400 tracking-widest uppercase mb-4">
                <Phone className="w-4 h-4" /> {t("info.phoneLabel")}
              </h3>
              <a href={`tel:${t("info.phoneValue").replace(/\s/g, '')}`} className="text-white hover:text-fire-400 transition-colors text-sm font-medium">{t("info.phoneValue")}</a>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="lg:col-span-8 lg:pl-12"
          >
            <h3 className="text-sm font-semibold text-night-400 tracking-widest uppercase mb-12 border-b border-night-800 pb-4">
              {t("form.subtitle")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.name")}</label>
                  <input required name="nombre" value={formData.nombre} onChange={handleChange} type="text" className="w-full bg-transparent border-b-2 border-night-800 py-2 text-white focus:outline-none focus:border-fire-500 transition-colors" />
                </div>
                <div className="relative group">
                  <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.company")}</label>
                  <input required name="empresa" value={formData.empresa} onChange={handleChange} type="text" className="w-full bg-transparent border-b-2 border-night-800 py-2 text-white focus:outline-none focus:border-fire-500 transition-colors" />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.email")}</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border-b-2 border-night-800 py-2 text-white focus:outline-none focus:border-fire-500 transition-colors" />
              </div>

              <div className="relative group">
                <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.goals")}</label>
                <textarea required name="objetivos" value={formData.objetivos} onChange={handleChange} rows={2} className="w-full bg-transparent border-b-2 border-night-800 py-2 text-white focus:outline-none focus:border-fire-500 transition-colors resize-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.timeframe")}</label>
                  <input required name="plazo" value={formData.plazo} onChange={handleChange} type="text" className="w-full bg-transparent border-b-2 border-night-800 py-2 text-white focus:outline-none focus:border-fire-500 transition-colors" />
                </div>
                <div className="relative group">
                  <label className="block text-night-400 text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-fire-400">{t("form.budget")}</label>
                  <div className="relative">
                    <span className="absolute left-0 top-2 text-night-500">$</span>
                    <input required name="presupuesto" value={formData.presupuesto} onChange={handleChange} type="number" min="0" placeholder="0.00" className="w-full bg-transparent border-b-2 border-night-800 py-2 pl-5 text-white focus:outline-none focus:border-fire-500 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-6">
                <button 
                  type="submit" disabled={status === "loading"}
                  className="flex items-center gap-2 text-lg font-bold text-white bg-gradient-to-r from-fire-500 to-amber-500 px-8 py-4 rounded-xl hover:from-fire-600 hover:to-amber-600 transition-all disabled:opacity-50"
                >
                  {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {t("form.submit")}
                </button>

                {/* Notificación de Éxito Inline */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-3 rounded-lg border border-green-500/20"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">¡Mensaje enviado exitosamente!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}