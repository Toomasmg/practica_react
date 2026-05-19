import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCounter } from '../contexts/CounterContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { count } = useCounter();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ⚛️ React<span>Practice</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            {t.nav.home}
          </Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
            {t.nav.products}
          </Link>
          <Link to="/cart" className={`nav-link ${isActive('/cart') ? 'active' : ''}`}>
            {t.nav.cart}
          </Link>
          <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>
            {t.nav.login}
          </Link>
        </div>

        <div className="navbar-controls">
          <div className="counter-badge" title={t.footer.counter}>
            🔢 {count}
          </div>


          <button className="control-btn" onClick={toggleLanguage} title="Cambiar idioma">
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>

          <button
            className="control-btn"
            onClick={toggleDarkMode}
            title={darkMode ? t.theme.light : t.theme.dark}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
