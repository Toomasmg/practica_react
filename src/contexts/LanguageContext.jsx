import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    nav: { home: 'Inicio', products: 'Productos', cart: 'Carrito', login: 'Iniciar Sesión' },
    home: {
      welcome: 'Bienvenido',
      subtitle: 'Práctica de React con Context API',
      globalCounter: 'Contador Global',
      sharedInfo: 'Este contador se comparte entre Navbar, Home y Footer',
    },
    counter: { increment: 'Incrementar', decrement: 'Decrementar', reset: 'Reiniciar' },
    theme: { dark: 'Modo Oscuro', light: 'Modo Claro' },
    footer: { rights: 'Todos los derechos reservados', counter: 'Contador' },
    lang: 'ES',
  },
  en: {
    nav: { home: 'Home', products: 'Products', cart: 'Cart', login: 'Login' },
    home: {
      welcome: 'Welcome',
      subtitle: 'React practice with Context API',
      globalCounter: 'Global Counter',
      sharedInfo: 'This counter is shared between Navbar, Home and Footer',
    },
    counter: { increment: 'Increment', decrement: 'Decrement', reset: 'Reset' },
    theme: { dark: 'Dark Mode', light: 'Light Mode' },
    footer: { rights: 'All rights reserved', counter: 'Counter' },
    lang: 'EN',
  },
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  return context;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
