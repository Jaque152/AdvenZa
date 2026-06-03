"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // <-- Corregido para App Router
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

export default function CheckoutPage() {
  const router = useRouter();
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
      const amountToCharge = totalPrice * 1.16;

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientData: formData,
          amount: amountToCharge,
          cartItems: items
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        router.push('/success'); // Redirigir a página de gracias/éxito
      } else {
        alert("Error al procesar el pago: " + result.message);
      }
    } catch (error) {
      console.error("Error en la pasarela:", error);
      alert("Hubo un problema de conexión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto bg-night-900/80 border border-night-800 rounded-3xl p-8">
        
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-night-400 hover:text-fire-400 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("back")}
        </button>

        <h1 className="text-3xl font-bold text-white mb-8 font-display">{t("title")}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Datos del Cliente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.name")}</label>
              <input required name="nombre" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.lastName")}</label>
              <input required name="apellidos" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-night-300">{t("labels.email")}</label>
              <input required type="email" name="email" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.phone")}</label>
              <input required type="tel" name="telefono" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.country")}</label>
              <input required name="pais" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-night-300">{t("labels.address")}</label>
              <input required name="direccion" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.city")}</label>
              <input required name="poblacion" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.state")}</label>
              <input required name="region" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-night-300">{t("labels.zip")}</label>
              <input required name="cp" onChange={handleChange} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
            </div>
          </div>

          <div className="pt-4">
            <label className="text-sm font-medium text-night-300">{t("labels.notes")}</label>
            {/* Único campo que NO lleva el atributo required */}
            <textarea name="notas" onChange={handleChange} rows={3} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" placeholder={t("labels.notesPlaceholder")}></textarea>
          </div>

          {/* Datos de la Tarjeta (Octano) */}
          <div className="border-t border-night-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-6">{t("payment.title")}</h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-night-300">{t("payment.cardName")}</label>
                <input required name="cardName" onChange={handleChange} placeholder="John Smith" className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-night-300">{t("payment.cardNumber")}</label>
                <input required name="cardNumber" onChange={handleChange} placeholder="**** **** **** ****" maxLength={19} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-night-300">{t("payment.expiry")}</label>
                  <input required name="cardExpiry" onChange={handleChange} placeholder="MM / YY" maxLength={5} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-night-300">{t("payment.cvc")}</label>
                  <input required type="password" name="cardCVC" onChange={handleChange} placeholder="***" maxLength={4} className="w-full mt-2 bg-night-950 border border-night-800 rounded-lg px-4 py-3 text-white focus:border-fire-500 outline-none" />
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || items.length === 0}
            className="w-full py-6 text-lg bg-gradient-to-r from-fire-500 to-amber-500"
          >
            {isLoading ? t("processing") : `${t("submit")} ($${(totalPrice * 1.16).toLocaleString()} MXN)`}
          </Button>
        </form>
      </div>
    </div>
  );
}