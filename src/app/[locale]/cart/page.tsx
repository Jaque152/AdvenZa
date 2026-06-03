"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CartPage() {
  const { items, removeFromCart, totalPrice, isMounted } = useCart();
  const router = useRouter();
  const t = useTranslations("CartPage");
  
  // PREVENCIÓN DE ERRORES DE HIDRATACIÓN DE NEXT.JS
  if (!isMounted) return <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4"></div>;

  const iva = totalPrice * 0.16;
  const finalTotal = totalPrice + iva;

  // Utilidad para formatear la moneda sin que arroje NaN
  const formatMoney = (val: number) => val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <button onClick={() => router.back()} className="flex items-center text-night-400 hover:text-fire-400 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("back")}
        </button>

        <h1 className="text-4xl font-bold text-white mb-8 font-display">{t("title")}</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-night-900/50 rounded-3xl border border-night-800">
            <ShoppingCart className="w-16 h-16 text-night-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">{t("empty")}</h2>
            <Link href="/#programs">
              <Button className="mt-6 bg-gradient-to-r from-fire-500 to-amber-500">
                {t("explore")}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div key={item.id} layout className="bg-night-900/80 border border-night-800 rounded-2xl p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <p className="text-night-400 text-sm mt-1">{item.description}</p>
                    <span className="text-fire-400 font-bold mt-2 block">${formatMoney(item.price)} MXN</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-3 text-night-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-night-900/80 border border-night-800 rounded-2xl p-6 h-fit sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">{t("summary")}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-night-300">
                  <span>{t("subtotal")}</span>
                  <span>${formatMoney(totalPrice)} MXN</span>
                </div>
                <div className="flex justify-between text-night-300">
                  <span>{t("tax")}</span>
                  <span>${formatMoney(iva)} MXN</span>
                </div>
                <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-night-800">
                  <span>{t("total")}</span>
                  <span>${formatMoney(finalTotal)} MXN</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600">
                  {t("proceed")} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}