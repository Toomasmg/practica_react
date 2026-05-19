import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCounter } from '../contexts/CounterContext';

export default function Footer() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const { count } = useCounter();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <span className="footer-brand">⚛️ React Practice</span>
          <p className="footer-text">
            © {new Date().getFullYear()} — {t.footer.rights}
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-counter">
            <span className="footer-counter-label">{t.footer.counter}:</span>
            <span className="footer-counter-value">{count}</span>
          </div>
        </div>

        <div className="footer-section">
          <span className="footer-theme-indicator">
            {darkMode ? '🌙 Dark' : '☀️ Light'} Mode
          </span>
        </div>
      </div>
    </footer>
  );
}
