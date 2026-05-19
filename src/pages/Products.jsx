import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Mouse', price: 29.99 },
  { id: 3, name: 'Teclado', price: 79.99 },
  { id: 4, name: 'Monitor', price: 349.99 },
  { id: 5, name: 'Auriculares', price: 149.99 },
  { id: 6, name: 'Webcam', price: 89.99 },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <main className="page-container">
      <h1 className="page-title">Productos</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <h3 className="card-title">{product.name}</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-primary)' }}>
              ${product.price.toFixed(2)}
            </p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
