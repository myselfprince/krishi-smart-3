// app/cart/page.js (or pages/cart.js)
'use client';

import Head from 'next/head';
import { useCart } from '@/components/CartContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import toast from 'react-hot-toast';

export default function Cart() {
  const { cart, setCart } = useCart();
  const router = useRouter(); // Initialize useRouter for navigation

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
    toast.success('Item removed from cart!');
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

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle checkout with Razorpay
  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    const totalAmount = calculateTotal();

    try {
      // Create order by calling the server endpoint
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const order = await response.json();

      if (!order.id) {
        throw new Error('Failed to create order');
      }

      // Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'KrishiSmart',
        description: 'Purchase of Farming Essentials',
        order_id: order.id,
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#16A34A',
        },
        handler: function (response) {
          // Handle successful payment
          toast.success('Payment successful! Redirecting...');
          setCart([]); // Clear the cart
          localStorage.removeItem('cart'); // Clear local storage
          router.push('/payment-success'); // Redirect to payment success page
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function (response) {
        toast.error('Payment failed. Please try again.');
        console.error('Payment failed:', response.error);
      });
    } catch (error) {
      toast.error('Error initiating payment. Please try again.');
      console.error('Checkout error:', error);
    }
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
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2">Subtotal: ₹{calculateSubtotal(item)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-xl font-bold">Total: ₹{calculateTotal()}</p>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
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