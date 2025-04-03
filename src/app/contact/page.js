// src/app/contact/page.js
export default function ContactUs() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Contact Us
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4 text-center">
            We are here to help! Reach out to us with any questions, feedback, or
            support requests.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:contactprincemedia@gmail.com" className="text-green-600">
                  krishismart@gmail.com
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +91-9516067571
              </p>
              <p className="text-gray-600 mb-2">
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/919516067571"
                  className="text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91-9516067571
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> 11 Mile, Bhopal,
                Madhya Pradesh, India - 462001
              </p>
              <p className="text-gray-600">
                <strong>Office Hours:</strong> Monday to Saturday, 9:00 AM - 6:00
                PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }