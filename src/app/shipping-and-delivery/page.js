// src/app/shipping-and-delivery/page.js
export default function ShippingAndDelivery() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Shipping and Delivery Policy
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            KrishiSmart partners with trusted logistics providers to ensure timely
            delivery of farming goods across India. This Shipping and Delivery
            Policy applies to all orders placed on our marketplace.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            1. Shipping Process
          </h2>
          <p className="text-gray-600 mb-4">
            - Once an order is placed, the seller will process and ship it within
            2-3 business days.
            <br />
            - We partner with logistics providers like Delhivery, Blue Dart, and
            India Post to deliver across India.
            <br />- You will receive a tracking link via email or SMS to monitor
            your order.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            2. Delivery Timeline
          </h2>
          <p className="text-gray-600 mb-4">
            - Delivery typically takes 5-7 business days for metro cities (e.g.,
            Delhi, Mumbai, Bangalore).
            <br />
            - For rural areas and remote locations, delivery may take 7-10
            business days.
            <br />- Delivery times may vary due to factors like weather, festivals
            (e.g., Diwali), or regional disruptions.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            3. Shipping Charges
          </h2>
          <p className="text-gray-600 mb-4">
            - Shipping charges are calculated based on the product weight and
            delivery location.
            <br />
            - Some sellers may offer free shipping for orders above ₹500.
            <br />- Cash on Delivery (COD) is available in select locations for an
            additional fee of ₹50.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            4. Delivery Issues
          </h2>
          <p className="text-gray-600 mb-4">
            - If you receive a damaged or incorrect product, please contact us
            within 48 hours of delivery.
            <br />- For non-delivery or delays beyond 15 days, we will coordinate
            with the seller and logistics provider to resolve the issue.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            5. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For shipping or delivery queries, please contact us at{" "}
            <a href="mailto:contactprincemedia@gmail.com" className="text-green-600">
              krishismart@gmail.in
            </a>{" "}
            or call us at +91-9516067571
          </p>
  
          <p className="text-gray-600 mt-4">
            Last updated: April 3, 2025
          </p>
        </div>
      </div>
    );
  }