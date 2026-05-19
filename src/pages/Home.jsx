import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCounter } from '../contexts/CounterContext';

export default function Home() {
  const { darkMode, colors } = useTheme();
  const { t } = useLanguage();
  const { count, increment, decrement, reset } = useCounter();

  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">{t.home.welcome}</h1>
        <p className="hero-subtitle">{t.home.subtitle}</p>
      </section>

      <section className="counter-section">
        <div className="card counter-card">
          <h2 className="card-title">{t.home.globalCounter}</h2>
          <p className="card-description">{t.home.sharedInfo}</p>

          <div className="counter-display">
            <span className="counter-value">{count}</span>
          </div>

          <div className="counter-controls">
            <button className="btn btn-secondary" onClick={decrement}>
              ➖ {t.counter.decrement}
            </button>
            <button className="btn btn-outline" onClick={reset}>
              🔄 {t.counter.reset}
            </button>
            <button className="btn btn-primary" onClick={increment}>
              ➕ {t.counter.increment}
            </button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="card info-card">
          <h3>🎨 Theme Context</h3>
          <p>Mode: <strong>{darkMode ? 'Dark 🌙' : 'Light ☀️'}</strong></p>
          <div className="color-swatches">
            <div className="swatch" style={{ background: colors.primary }} title="Primary" />
            <div className="swatch" style={{ background: colors.secondary }} title="Secondary" />
            <div className="swatch" style={{ background: colors.accent }} title="Accent" />
            <div
              className="swatch"
              style={{ background: colors.bgPrimary, border: '1px solid var(--border-color)' }}
              title="Background"
            />
            <div className="swatch" style={{ background: colors.textPrimary }} title="Text" />
          </div>
        </div>

        <div className="card info-card">
          <h3>🌐 Language Context</h3>
          <p>
            {t.lang === 'ES' ? 'Idioma activo' : 'Active language'}:{' '}
            <strong>{t.lang === 'ES' ? 'Español 🇪🇸' : 'English 🇬🇧'}</strong>
          </p>
          <p className="card-description">
            {t.lang === 'ES'
              ? 'Cambiá el idioma desde el navbar'
              : 'Change language from the navbar'}
          </p>
        </div>

        <div className="card info-card">
          <h3>🔢 Counter Context</h3>
          <p>
            {t.lang === 'ES' ? 'Valor actual' : 'Current value'}:{' '}
            <strong>{count}</strong>
          </p>
          <p className="card-description">
            {t.lang === 'ES'
              ? 'Compartido entre Navbar, Home y Footer'
              : 'Shared between Navbar, Home and Footer'}
          </p>
        </div>
      </section>
    </main>
  );
}
