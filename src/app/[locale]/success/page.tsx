"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";

export default function SuccessPage() {
  const { clearCart } = useCart();
  const t = useTranslations("Success");
  const locale = useLocale(); 

  // Vaciamos el carrito automáticamente cuando la compra es exitosa
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-night-950 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-night-900/80 border border-night-800 rounded-3xl p-8 md:p-12 text-center max-w-xl shadow-2xl shadow-green-900/20"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          {t("title")}
        </h1>
        
        <p className="text-lg text-night-300 mb-10 leading-relaxed">
          {t("desc")}
        </p>
        
        <Button 
          onClick={() => {
            window.location.href = `/${locale}`;
          }}
          className="w-full sm:w-auto bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 py-6 px-8 text-lg"
        >
          {t("button")}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}