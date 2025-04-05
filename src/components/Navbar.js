// components/Navbar.js
'use client'; // Mark as a Client Component

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useCart } from './CartContext'; // Adjust the path if needed

const Navbar = () => {
  const { cart } = useCart(); 
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const checkAuthStatus = useCallback(async () => {
    try {
      const res = await axios.get('/api/users/me', { validateStatus: () => true });
      if (res.status === 200) {
        setIsAuthenticated(true);
        setUserName(res.data.data.username);
        setUser(res.data.data._id);
        setError(null);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setUserName(null);
        setError(null);
      }
    } catch (err) {
      console.error('Error checking auth status:', err);
      setIsAuthenticated(false);
      setUser(null);
      setUserName(null);
      setError(null);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  function closeMenu(){
    setIsOpen(false);
  } 

  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      if (response.status === 200) {
        toast.success('Logout successful');
        setUser(null);
        setUserName(null);
        setIsAuthenticated(false);
        setIsDropdownOpen(false);
        setIsOpen(false);
        router.push('/login');
      }
    } catch (error) {
      toast.error('Logout failed');
      setError('Failed to logout');
    }
  };

  useEffect(() => {
    window.refreshNavbar = checkAuthStatus;
    return () => {
      delete window.refreshNavbar;
    };
  }, [checkAuthStatus]);

  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div onClick={closeMenu} className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" alt="KrishiSmart Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-green-600">KrishiSmart</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none" aria-label="Toggle menu">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-green-600">MarketPlace</Link>
            <Link href="/seasonal-crop-planner" className="text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
            <Link href="/community" className="text-gray-700 hover:text-green-600">Community</Link>
            <Link href="/fund-raise" className="text-gray-700 hover:text-green-600">Raise Funds</Link>

            {/* Cart Icon */}
           {user && <Link href="/cart" className="relative text-gray-700 hover:text-green-600">
              <span className="text-2xl">🛒</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>}

            {/* Profile Icon or Guest */}
            {userName ? (
              <div className="relative">
                <div onClick={toggleDropdown} className="w-10 h-10 text-xl bg-green-300 rounded-full flex items-center justify-center text-green-800 font-semibold cursor-pointer">
                  {getFirstLetter(userName)}
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-500 rounded-lg shadow-md z-10">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg border-b border-gray-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Visit Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer rounded-lg border-gray-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link onClick={closeMenu} href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
              <Link onClick={closeMenu} href="/marketplace" className="block px-3 py-2 text-gray-700 hover:text-green-600">Marketplace</Link>
              <Link onClick={closeMenu} href="/seasonal-crop-planner" className="block px-3 py-2 text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
              <Link onClick={closeMenu} href="/community" className="block px-3 py-2 text-gray-700 hover:text-green-600">Community</Link>
             {user && <Link onClick={closeMenu} href="/cart" className="block px-3 py-2 text-gray-700 hover:text-green-600 relative">
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>}
              {userName ? (
                <div className="relative">
                  <div onClick={toggleDropdown} className="flex items-center px-3 py-2 cursor-pointer">
                    <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center text-green-800 font-semibold mr-2">
                      {getFirstLetter(userName)}
                    </div>
                    <span className="text-gray-700">{userName}</span>
                  </div>
                  {isDropdownOpen && (
                    <div className="pl-4 mt-1 w-full bg-white rounded-lg shadow-md">
                      <Link 
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Visit Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link onClick={closeMenu} href="/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-center py-2">{error}</div>}
    </nav>
  );
};

export default Navbar;