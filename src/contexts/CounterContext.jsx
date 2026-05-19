import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error('useCounter debe usarse dentro de CounterProvider');
  return context;
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}
