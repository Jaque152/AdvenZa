"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, CreditCard, ShieldCheck } from "lucide-react"; // Importamos iconos de seguridad
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";

export default function CheckoutPage() {
  const router = useRouter();
  const locale = useLocale();
  const { totalPrice, items } = useCart();
  const t = useTranslations("Checkout");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "", apellidos: "", pais: "", direccion: "", poblacion: "",
    region: "", cp: "", telefono: "", email: "", notas: "",
    cardNumber: "", cardExpiry: "", cardCVC: "", cardName: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientData: formData,
          amount: totalPrice * 1.16,
          cartItems: items,
          locale: locale
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        router.push(`/${locale}/success`);
      } else {
        alert("Error al procesar el pago: " + (result.message || "Verifica tus datos."));
      }
    } catch (error) {
      console.error("Error en la pasarela:", error);
      alert("Hubo un problema de conexión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-fire-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto bg-night-900/80 border border-night-800 rounded-3xl p-8 relative z-10 shadow-xl shadow-black/50">
        
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-night-400 hover:text-fire-400 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("back")}
        </button>

        <h1 className="text-3xl font-bold text-white mb-8 font-display">{t("title")}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ---------------- DATOS DEL CLIENTE ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.name")}</label>
              <input required name="nombre" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.lastName")}</label>
              <input required name="apellidos" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-night-300">{t("labels.email")}</label>
              <input required type="email" name="email" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.phone")}</label>
              <input required type="tel" name="telefono" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.country")}</label>
              <input required name="pais" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-night-300">{t("labels.address")}</label>
              <input required name="direccion" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.city")}</label>
              <input required name="poblacion" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.state")}</label>
              <input required name="region" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.zip")}</label>
              <input required name="cp" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
            </div>
          </div>

          <div className="pt-4">
            <label className="text-sm font-medium text-night-300">{t("labels.notes")}</label>
            <textarea name="notas" onChange={handleChange} rows={3} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" placeholder={t("labels.notesPlaceholder")}></textarea>
          </div>

          {/* ---------------- DATOS DE LA TARJETA (OCTANO) ---------------- */}
          <div className="border-t border-night-800 pt-10 mt-10">
            
            {/* Header del Pago con Logo de Octano */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-white">{t("payment.title")}</h2>
              </div>
              
              {/* Badge "Secured by Octano" */}
              <div className="flex items-center gap-3 bg-night-950/50 px-4 py-2 rounded-xl border border-night-800">
                <span className="text-xs text-night-400 font-medium uppercase tracking-wider">Secured by</span>
                <img 
                  src="/logo-octano-2.png" 
                  alt="Octano" 
                  className="h-6 w-auto object-contain  opacity-80" 
                  /* Nota: brightness-0 invert vuelve el logo blanco. Si el logo de Octano ya tiene colores brillantes o quieres su color original, borra esas dos clases */
                />
              </div>
            </div>

            <div className="space-y-6 bg-night-950/30 p-6 rounded-2xl border border-night-800/50">
              <div>
                <label className="text-sm font-medium text-night-300">{t("payment.cardName")}</label>
                <input required name="cardName" onChange={handleChange} placeholder="Ej. John Smith" className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-night-300">{t("payment.cardNumber")}</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-night-500" />
                  </div>
                  <input required name="cardNumber" onChange={handleChange} placeholder="**** **** **** ****" maxLength={19} className="w-full bg-night-950 border border-night-800 rounded-lg pl-12 pr-4 py-3 text-white focus:border-fire-500 outline-none transition-colors font-mono tracking-wider" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-night-300">{t("payment.expiry")}</label>
                  <input required name="cardExpiry" onChange={handleChange} placeholder="MM / YY" maxLength={5} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none transition-colors text-center" />
                </div>
                <div>
                  <label className="text-sm font-medium text-night-300">{t("payment.cvc")}</label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-night-500" />
                    </div>
                    <input required type="password" name="cardCVC" onChange={handleChange} placeholder="***" maxLength={4} className="w-full bg-night-950 border border-night-800 rounded-lg pl-11 pr-4 py-3 text-white focus:border-fire-500 outline-none transition-colors text-center tracking-[0.25em]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || items.length === 0}
            className="w-full py-6 mt-4 text-lg bg-gradient-to-r from-fire-500 to-amber-500 shadow-lg shadow-fire-500/20"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Lock className="w-5 h-5 animate-pulse" /> Procesando pago seguro...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Lock className="w-5 h-5" /> {t("submit")} (${(totalPrice * 1.16).toLocaleString('en-US', { minimumFractionDigits: 2 })} MXN)
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}