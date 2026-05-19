import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CounterProvider } from './contexts/CounterContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CounterProvider>
          <AuthProvider>
            <CartProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </CartProvider>
          </AuthProvider>
        </CounterProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
