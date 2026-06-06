"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function CartSidebar() {
  const { items, removeFromCart, clearCart, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const router = useRouter();
  const locale = useLocale();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-night-900 to-night-950 border-l border-fire-500/20 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-night-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-fire-500/20 to-amber-500/20 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-fire-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-display">Tu Carrito</h2>
                  <p className="text-sm text-night-400">
                    {items.length} {items.length === 1 ? "programa" : "programas"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-night-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-night-800/50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart className="w-10 h-10 text-night-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-night-400 mb-6">
                    Explora nuestros programas y añade el que mejor se adapte a tus objetivos.
                  </p>
                  <Button
                    onClick={() => {
                      setIsCartOpen(false); // Cierra el carrito
                      router.push(`/${locale}/#programs`); // Navega a la sección de programas
                    }}
                    className="bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 transition-colors"
                  >
                    Ver Programas
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="bg-night-800/50 border border-night-700/50 rounded-2xl p-4 group hover:border-fire-500/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-white">{item.name}</h4>
                            <p className="text-sm text-night-400">{item.description}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-night-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Features preview */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs bg-fire-500/10 text-fire-400 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {item.features.length > 3 && (
                            <span className="text-xs bg-night-700 text-night-400 px-2 py-1 rounded-full">
                              +{item.features.length - 3} más
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-night-700">
                          <span className="text-sm text-night-400">Pago único</span>
                          <span className="text-lg font-bold text-white">
                            ${item.price.toLocaleString()}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-night-800 bg-night-900/80 backdrop-blur-sm">
                {/* Desglose de precios con IVA */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-night-400 text-sm">Subtotal</span>
                  <span className="text-white text-sm">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-night-400 text-sm">IVA (16%)</span>
                  <span className="text-white text-sm">${(totalPrice * 0.16).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-6 pt-4 border-t border-night-800">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-white font-display">
                    ${(totalPrice * 1.16).toLocaleString()}
                  </span>
                </div>

                {/* Checkout Button - Corrección con router.push */}
                <Button
                  onClick={() => {
                    setIsCartOpen(false); // Cerramos el sidebar
                    router.push(`/${locale}/cart`); // Navegamos usando React Router
                  }}
                  className="w-full bg-gradient-to-r from-fire-500 to-amber-500 hover:from-fire-600 hover:to-amber-600 text-white font-semibold py-6 text-lg shadow-lg shadow-fire-500/25 group"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ir al Carrito
                  <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <button
                  onClick={clearCart}
                  className="w-full mt-3 text-sm text-night-500 hover:text-red-400 transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}