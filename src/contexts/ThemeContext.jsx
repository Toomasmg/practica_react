import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return context;
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  /* Colores globales accesibles desde JS */
  const colors = {
    bgPrimary: darkMode ? '#0d1117' : '#f8f9fa',
    bgSecondary: darkMode ? '#161b22' : '#ffffff',
    textPrimary: darkMode ? '#e6edf3' : '#1a1a2e',
    textSecondary: darkMode ? '#8b949e' : '#6b7280',
    primary: '#6c63ff',
    secondary: '#ff6584',
    accent: '#00d2ff',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}
