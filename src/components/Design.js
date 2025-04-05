'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Design() {
  useEffect(() => {
    // Preload images for better performance
    const images = [
      '/farmer-with-apples.jpg', // Replace with actual image paths
      '/tractor-field.jpg',
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center overflow-hidden">
        {/* Hero Section */}
        <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-yellow-600">Get to know</span>{' '}
              <span className="text-green-700">KrishiSmart - KisanHelper</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-prose">
              Agriculture is the backbone of our economy, yet farmers face numerous challenges, including limited access to resources, unpredictable weather, and financial instability. KrishiSmart is an Android app designed to simplify farming and address challenges faced by farmers.
            </p>
          <Link href="#services"> <button
              className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
            >
              Discover More
            </button></Link> 
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end relative z-10">
            <div className="flex space-x-6">
              {/* Farmer Image */}
              <div className="relative">
                <img
                  src="/images/farmer1.webp" // Replace with your image path
                  alt="Farmer with apples"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
              {/* Tractor Image */}
              <div className="relative">
                <img
                  src="/images/tractor-in-field.png" // Replace with your image path
                  alt="Tractor in field"
                  className="w-72 h-72 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            {/* Decorative Overlay */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gray-200 opacity-50 rounded-full blur-xl animate-pulse hidden md:block"></div>
          </div>

         

          {/* Partners Text */}
          <div className="absolute bottom-6 right-6 text-green-600 font-semibold text-sm md:text-base flex items-center space-x-2 animate-fade-in-delay">
            <span>KRISHISMART </span>
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              🌍
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// Animation Keyframes
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInDelay {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  .animate-fade-in-delay {
    animation: fadeInDelay 1s ease-out 0.5s backwards;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}