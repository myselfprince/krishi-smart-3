// src/app/terms-and-conditions/page.js
export default function TermsAndConditions() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Terms and Conditions
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            Welcome to KrishiSmart. By using our platform, you agree to comply
            with the following Terms and Conditions. Please read them carefully.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-4">
            By accessing or using KrishiSmart, you agree to be bound by these
            Terms and Conditions, as well as all applicable laws in India,
            including the Indian Contract Act, 1872.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            2. Eligibility
          </h2>
          <p className="text-gray-600 mb-4">
            You must be at least 18 years old and a resident of India to use our
            services. By using KrishiSmart, you confirm that you meet these
            eligibility criteria.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">
            You agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Provide accurate information during registration.</li>
            <li>Not use the platform for any illegal activities.</li>
            <li>Not upload harmful or offensive content on FarmerTube.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            4. Marketplace Transactions
          </h2>
          <p className="text-gray-600 mb-4">
            KrishiSmart acts as a platform to connect buyers and sellers. We are
            not responsible for the quality of goods sold or disputes between
            parties. All transactions are subject to Indian laws, including the
            Consumer Protection Act, 2019.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600 mb-4">
            All content on KrishiSmart, including logos, images, and AI tools, is
            the property of KrishiSmart and protected under the Copyright Act,
            1957. Unauthorized use is prohibited.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            KrishiSmart is not liable for any damages arising from the use of our
            platform, including crop losses due to AI recommendations or
            marketplace disputes.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            7. Governing Law
          </h2>
          <p className="text-gray-600 mb-4">
            These Terms are governed by the laws of India. Any disputes will be
            resolved in the courts of [Your City], India.
          </p>
  
          <p className="text-gray-600 mt-4">
            Last updated: April 3, 2025
          </p>
        </div>
      </div>
    );
  }