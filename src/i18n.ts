import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Idiomas soportados
const locales = ['es', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Obtener el locale de la solicitud (ahora es una promesa)
  const locale = await requestLocale;

  // 2. Validar que el locale entrante es válido
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});