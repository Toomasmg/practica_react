import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { user, login, logout } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleLogin() {
    if (!name || !email) return alert('Completá todos los campos');
    login(name, email);
  }

  if (user) {
    return (
      <main className="page-container">
        <div className="card" style={{ maxWidth: '400px', margin: '4rem auto' }}>
          <h2 className="card-title">¡Bienvenido, {user.name}!</h2>
          <p className="card-description">{user.email}</p>
          <button className="btn btn-secondary" onClick={logout}>Cerrar sesión</button>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="card" style={{ maxWidth: '400px', margin: '4rem auto' }}>
        <h2 className="card-title">Iniciar sesión</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <input
            className="form-input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    </main>
  );
}
