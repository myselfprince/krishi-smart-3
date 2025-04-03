
'use client';

import Head from 'next/head';
import { useCart } from '@/components/CartContext';

export default function Cart() {
  const { cart, setCart } = useCart(); // Add setCart to update the cart state

  // Calculate subtotal for each item (price * quantity)
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cost of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Function to update quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>KrishiSmart - Your Cart</title>
        <meta name="description" content="View your shopping cart" />
      </Head>

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
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l-md hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r-md hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2">Subtotal: ₹{calculateSubtotal(item)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-xl font-bold">Total: ₹{calculateTotal()}</p>
              <button
                onClick={() => alert('Checkout functionality to be implemented')}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}