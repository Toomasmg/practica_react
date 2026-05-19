import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCounter } from '../contexts/CounterContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { count } = useCounter();
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ⚛️ React<span>Practice</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>{t.nav.home}</Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>{t.nav.products}</Link>
          <Link to="/cart" className={`nav-link ${isActive('/cart') ? 'active' : ''}`}>{t.nav.cart}</Link>
          <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>{t.nav.login}</Link>
        </div>

        <div className="navbar-controls">
          <div className="counter-badge">🔢 {count}</div>
          <Link to="/cart" className="counter-badge">🛒 {totalItems}</Link>

          {user ? (
            <>
              <span style={{ fontSize: '0.85rem' }}>👤 {user.name}</span>
              <button className="control-btn" onClick={logout}>🚪</button>
            </>
          ) : (
            <Link to="/login" className="control-btn">🔑</Link>
          )}

          <button className="control-btn" onClick={toggleLanguage}>
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
          <button className="control-btn" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
