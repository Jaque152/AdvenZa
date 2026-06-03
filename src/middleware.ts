import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos los idiomas soportados
  locales: ['es', 'en'],
  // Idioma por defecto si el usuario no especifica uno
  defaultLocale: 'es'
});

export const config = {
  // Aplicar el middleware a todas las rutas excepto a archivos estáticos y APIs
  matcher: ['/((?!api|_next|.*\\..*).*)']
};