
'use client';
import { useCart } from '@/components/CartContext';

export default function Cart() {
  const { cart } = useCart();

  // Calculate subtotal for each item (price * quantity)
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cost of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Cart</h2>
      </section>

      <div className="container mx-auto p-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{calculateSubtotal(item)}</p>
                </div>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-xl font-bold">Total: ₹{calculateTotal()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}