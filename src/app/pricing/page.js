// src/app/pricing/page.js
export default function Pricing() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Pricing
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-8 text-center">
            At KrishiSmart, we offer affordable plans to help every farmer access
            our AI-driven tools and marketplace. Choose the plan that best suits
            your needs!
          </p>
  
          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="border rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Free Plan
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-4">₹0/month</p>
              <p className="text-gray-600 mb-6">
                Get started with basic features at no cost.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ Access to FarmerTube tutorials</li>
                <li>✔ Basic marketplace browsing</li>
                <li>✔ Community support</li>
                <li>✘ AI Crop Planner</li>
                <li>✘ Disease Detection</li>
              </ul>
              <a
                href="/signup"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Get Started
              </a>
            </div>
  
            {/* Basic Plan */}
            {/* <div className="border rounded-lg p-6 text-center shadow-md hover:shadow-lg transition border-green-600">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Basic Plan
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-4">
                ₹99/month
              </p>
              <p className="text-gray-600 mb-6">
                Unlock essential tools for smarter farming.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ All Free Plan features</li>
                <li>✔ AI-Powered Crop Planner</li>
                <li>✔ Disease Detection (up to 5 scans/month)</li>
                <li>✔ Market Price Predictor</li>
                <li>✔ Smart Budgeting Tool</li>
              </ul>
              <a
                href="/signup"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Choose Plan
              </a>
            </div> */}
  
            {/* Pro Plan */}
            {/* <div className="border rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Pro Plan
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-4">
                ₹299/month
              </p>
              <p className="text-gray-600 mb-6">
                Get the full KrishiSmart experience.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ All Basic Plan features</li>
                <li>✔ Unlimited Disease Detection</li>
                <li>✔ Land Leasing & Equipment Rentals</li>
                <li>✔ Priority Community Crowdfunding</li>
                <li>✔ 24/7 Customer Support</li>
              </ul>
              <a
                href="/signup"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Choose Plan
              </a>
            </div> */}
          </div>
  
          {/* Additional Information */}
          <section className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Why Choose KrishiSmart?
            </h2>
            <p className="text-gray-600 mb-4">
              Our pricing plans are designed to be affordable for Indian farmers,
              ensuring you get the best value for your money. Whether you’re a
              small-scale farmer or managing a large farm, KrishiSmart has a plan
              for you.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Note:</strong> All prices are inclusive of GST. We accept
              payments via UPI, debit/credit cards, and net banking through secure
              gateways like Razorpay.
            </p>
          </section>
  
          {/* Contact for Custom Plans */}
          <section className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Need a Custom Plan?
            </h2>
            <p className="text-gray-600 mb-4">
              For large farms or cooperatives, we offer custom pricing plans.
              Contact us to discuss your needs!
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    );
  }