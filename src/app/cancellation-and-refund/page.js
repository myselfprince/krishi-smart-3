// src/app/cancellation-and-refund/page.js
export default function CancellationAndRefund() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Cancellation and Refund Policy
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            At KrishiSmart, we strive to ensure a smooth experience for all users.
            This Cancellation and Refund Policy applies to transactions made on our
            marketplace.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            1. Cancellation Policy
          </h2>
          <p className="text-gray-600 mb-4">
            - You can cancel an order within 24 hours of placing it, provided the
            seller has not yet shipped the product.
            <br />
            - To cancel, go to your order history and select "Cancel Order." You
            will receive a confirmation email.
            <br />- Once the order is shipped, cancellation is subject to the
            seller’s approval.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            2. Refund Policy
          </h2>
          <p className="text-gray-600 mb-4">
            - Refunds are processed within 7-10 business days after the return is
            approved.
            <br />
            - Refunds will be credited to your original payment method (e.g., UPI,
            bank account, or Razorpay wallet).
            <br />- Shipping charges are non-refundable unless the product is
            defective.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            3. Return Conditions
          </h2>
          <p className="text-gray-600 mb-4">
            You can return a product within 7 days of delivery if:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>The product is defective or damaged.</li>
            <li>The product does not match the description on the listing.</li>
            <li>The product is unused and in its original packaging.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            4. Non-Returnable Items
          </h2>
          <p className="text-gray-600 mb-4">
            The following items are non-returnable:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Perishable goods (e.g., seeds, fertilizers).</li>
            <li>Customized or personalized products.</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            5. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For cancellation or refund queries, please contact us at{" "}
            <a href="mailto:support@krishismart.in" className="text-green-600">
              support@krishismart.in
            </a>{" "}
            or call us at +91-9876543210.
          </p>
  
          <p className="text-gray-600 mt-4">
            Last updated: April 3, 2025
          </p>
        </div>
      </div>
    );
  }