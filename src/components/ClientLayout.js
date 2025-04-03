// components/ClientLayout.js
'use Client';

import { CartProvider } from './CartContext';

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}