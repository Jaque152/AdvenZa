"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart3, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CustomPlanPage() {
  const t = useTranslations("CustomPlan");
  const { addToCart } = useCart();

  const [planId, setPlanId] = useState("");
  // Lo manejamos como string para evitar bugs al teclear decimales
  const [amount, setAmount] = useState(""); 

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parseamos a número de forma segura
    const numericAmount = parseFloat(amount);
    if (!planId.trim() || isNaN(numericAmount) || numericAmount <= 0) return;

    // Limpiamos el ID (quitamos espacios vacíos y forzamos mayúsculas)
    const cleanId = planId.trim().replace(/\s+/g, '-').toUpperCase();

    addToCart({
      id: `custom-${cleanId}`,
      name: `${t("title")} - ID: ${cleanId}`,
      price: Math.round(numericAmount * 100) / 100, // Forzamos 2 decimales limpios
      description: "Plan de capacitación exclusivo y a la medida.",
      features: ["A la medida", "Soporte personalizado"],
    });

    // En lugar de cambiar de página, limpiamos el formulario.
    // El Sidebar se abrirá automáticamente gracias al CartContext.
    setPlanId("");
    setAmount("");
  };

  const isAmountValid = amount && !isNaN(parseFloat(amount));

  return (
    <div className="min-h-screen bg-night-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-fire-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full grid md:grid-cols-5 gap-0 items-stretch bg-night-900/60 rounded-3xl border border-night-800 backdrop-blur-xl shadow-2xl overflow-hidden relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-gradient-to-br from-fire-600 to-amber-500 p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>
          <BarChart3 className="w-24 h-24 text-white mb-6 drop-shadow-xl" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold text-white font-display leading-tight">{t("title")}</h2>
          <p className="text-white/80 mt-4 text-sm font-medium">Ingresa las credenciales de tu plan cotizado</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center">
          <form onSubmit={handleAddToCart} className="space-y-10">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-night-400 uppercase tracking-widest">
                {t("form.idLabel")} <span className="text-fire-500">*</span>
              </label>
              <input 
                required type="text" value={planId} onChange={(e) => setPlanId(e.target.value)}
                placeholder="Ej. PL-2026"
                className="w-full bg-transparent border-b-2 border-night-700 py-3 text-white text-2xl font-medium focus:outline-none focus:border-fire-500 transition-colors placeholder:text-night-800"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-night-400 uppercase tracking-widest">
                {t("form.amountLabel")} <span className="text-fire-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-0 top-3 text-night-500 text-2xl font-bold">$</span>
                <input 
                  required type="number" min="1" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-transparent border-b-2 border-night-700 py-3 pl-8 pr-4 text-white text-2xl font-medium focus:outline-none focus:border-fire-500 transition-colors placeholder:text-night-800"
                />
              </div>
            </div>

            <div className="pt-6 bg-night-950/50 p-6 rounded-2xl border border-night-800/50">
              <div className="flex items-end justify-between mb-6">
                <p className="text-night-400 font-medium">{t("form.totalLabel")}</p>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white font-display">
                    ${isAmountValid ? parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}
                  </p>
                  <p className="text-sm text-fire-400 font-semibold">{t("form.tax")}</p>
                </div>
              </div>

              <button 
                type="submit" disabled={!planId || !isAmountValid}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-5 px-8 text-lg rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
              >
                <ShoppingCart className="w-5 h-5" />
                {t("form.addBtn")}
              </button>
              <p className="text-center text-night-500 text-xs mt-4 uppercase tracking-widest">{t("form.category")}</p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}