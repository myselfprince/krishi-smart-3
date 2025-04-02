'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Subscribed!"); // Replace with actual API call
      };

  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding/Logo Area */}
          <div>
            <h3 className="text-2xl font-bold text-green-100 mb-4">KrishiSmart</h3>
            <p className="text-green-200">
              Empowering farmers with smart solutions for better harvests and sustainable farming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-green-200 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-green-100 mb-4">Contact Us</h4>
            <p className="text-green-200 mb-2">
              123 Agri Lane, Green Valley, India
            </p>
            <p className="text-green-200 mb-2">Phone: +91 123-456-7890</p>
            <p className="text-green-200">
              Email: <Link href="mailto:support@krishismart.com" className="hover:text-white transition-colors">support@krishismart.com</Link>
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold text-green-100 mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-green-200 mb-4">
              Stay updated with the latest farming tips and innovations.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-green-700 mt-8 pt-4 text-center">
          <p className="text-green-200">
            &copy; {new Date().getFullYear()} KrishiSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;