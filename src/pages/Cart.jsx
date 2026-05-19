import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="page-container">
        <div className="card">
          <p className="card-description">🛒 El carrito está vacío</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <h1 className="page-title">Carrito</h1>

      {cart.map(item => (
        <div key={item.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">${item.price.toFixed(2)} c/u</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button className="btn btn-outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
            <span>{item.quantity}</span>
            <button className="btn btn-outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      <div className="card" style={{ textAlign: 'right' }}>
        <p>Total items: <strong>{totalItems}</strong></p>
        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        <button className="btn btn-secondary" onClick={clearCart}>Vaciar carrito</button>
      </div>
    </main>
  );
}
