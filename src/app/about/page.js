// src/app/about/page.js
export default function About() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          About Us
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Introduction Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome to KrishiSmart
            </h2>
            <p className="text-gray-600 mb-4">
              KrishiSmart is an innovative platform designed to empower Indian
              farmers by integrating smart technology into traditional farming
              practices. Agriculture is the backbone of India&quot;s economy, yet
              farmers face numerous challenges, including limited access to
              resources, unpredictable weather, and financial instability. At
              KrishiSmart, we aim to bridge the gap between technology and
              agriculture, providing AI-driven solutions to enhance productivity,
              financial security, and resilience for every Kisan.
            </p>
          </section>
  
          {/* Mission Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Our mission is to simplify agriculture for every farmer in India by
              providing accessible tools and AI-driven insights. We strive to
              promote sustainability, improve farmer prosperity, and create a
              smarter, more connected agricultural ecosystem.
            </p>
          </section>
  
          {/* Vision Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-4">
              We envision a future where every Indian farmer has the tools and
              knowledge to thrive. By leveraging technology, we aim to make farming
              more efficient, profitable, and sustainable, ensuring that agriculture
              remains a viable livelihood for generations to come.
            </p>
          </section>
  
          {/* Key Features Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Online Marketplace
                </h3>
                <p className="text-gray-600">
                  Buy and sell farming goods like seeds, fertilizers, and equipment
                  with ease.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  AI-Powered Crop Planner
                </h3>
                <p className="text-gray-600">
                  Get seasonal crop recommendations based on climate and soil
                  conditions.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Disease Detection
                </h3>
                <p className="text-gray-600">
                  Use AI to identify crop diseases and get actionable solutions.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  FarmerTube
                </h3>
                <p className="text-gray-600">
                  Access tutorials and expert insights to learn modern farming
                  techniques.
                </p>
              </div>
            </div>
          </section>
  
          {/* Impact Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 mb-4">
              KrishiSmart is committed to creating a sustainable agricultural
              future. By providing AI-driven solutions and a strong digital support
              network, we aim to enhance productivity and financial security for
              farmers across India. Join us in transforming agriculture, one Kisan
              at a time.
            </p>
          </section>
  
          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Join the KrishiSmart Community
            </h2>
            <p className="text-gray-600 mb-4">
              Together, we can make farming smarter, more sustainable, and more
              profitable. Sign up today and start your journey with KrishiSmart!
            </p>
            <a
              href="/signup"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Get Started
            </a>
          </section>
        </div>
      </div>
    );
  }