// marketplace/page.js
'use client'; // Mark as a Client Component

import Head from 'next/head';
import { useState } from 'react';
import { useCart } from '@/components/CartContext'; // Adjust the path
import toast, { Toaster } from 'react-hot-toast';



export default function Marketplace() {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { cart, setCart } = useCart(); // Access cart and setCart from context

  // Sample product data (replace with dynamic data from MongoDB)
  const products = [
    { id: 1, name: 'Organic Seeds Pack', category: 'seeds', price: 50, image: '/placeholder-seeds.jpg', rating: 4.5 },
    { id: 2, name: 'Nitrogen Fertilizer', category: 'fertilizers', price: 120, image: '/placeholder-fertilizer.jpg', rating: 4.0 },
    { id: 3, name: 'Tractor Attachment', category: 'equipment', price: 500, image: '/placeholder-equipment.jpg', rating: 4.7 },
  ];

  // Filter products based on category and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesPrice =
      priceRange === 'all' ||
      (priceRange === '0-100' && product.price <= 100) ||
      (priceRange === '100-500' && product.price > 100 && product.price <= 500) ||
      (priceRange === '500+' && product.price > 500);
    return matchesCategory && matchesPrice;
  });

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Replace alert with toast notification
    toast.success(`${product.name} added to cart!`, {
      autoClose: 3000, // Auto-close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
       <Toaster position="bottom-center" reverseOrder={false}
            />
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to KrishiSmart Marketplace</h2>
        <p className="text-lg">Buy quality farming essentials directly from verified suppliers.</p>
      </section>
     
      {/* Main Content */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All</option>
                <option value="seeds">Seeds</option>
                <option value="fertilizers">Fertilizers</option>
                <option value="equipment">Equipment</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All</option>
                <option value="0-100">₹0 - ₹100</option>
                <option value="100-500">₹100 - ₹500</option>
                <option value="500+">₹500+</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-green-600 font-bold">₹{product.price}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white p-2 rounded-md w-full cursor-pointer hover:bg-green-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
}