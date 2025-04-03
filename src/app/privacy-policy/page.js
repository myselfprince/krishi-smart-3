// src/app/privacy-policy/page.js
export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Privacy Policy
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            At KrishiSmart, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information in compliance with the Information Technology
            Act, 2000, and the Digital Personal Data Protection Act, 2023 (DPDP
            Act) of India.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Personal Information: Name, email address, phone number, and address
              when you register or use our services.
            </li>
            <li>
              Farming Data: Information about your crops, land, and equipment for
              AI-driven insights.
            </li>
            <li>
              Usage Data: IP address, browser type, and pages visited on our
              platform.
            </li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Provide personalized farming recommendations.</li>
            <li>Facilitate transactions on our marketplace.</li>
            <li>Improve our services and user experience.</li>
            <li>Comply with legal obligations under Indian laws.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            3. Data Sharing
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Service providers (e.g., payment gateways like Razorpay).</li>
            <li>Government authorities, if required by law.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            4. Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We use industry-standard encryption (e.g., SSL) to protect your data.
            However, no method of transmission over the internet is 100% secure.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            5. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            Under the DPDP Act, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Access and correct your personal data.</li>
            <li>Request deletion of your data, subject to legal obligations.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For any privacy-related concerns, please contact us at{" "}
            <a href="mailto:support@krishismart.in" className="text-green-600">
              support@krishismart.in
            </a>
            .
          </p>
  
          <p className="text-gray-600 mt-4">
            Last updated: April 3, 2025
          </p>
        </div>
      </div>
    );
  }