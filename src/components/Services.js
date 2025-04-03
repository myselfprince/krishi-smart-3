import { FaShoppingCart, FaCalendarAlt, FaBug, FaChartLine, FaPlayCircle, FaBook } from "react-icons/fa";
import Link from "next/link";

export default function Home() {

  const services = [
    {
      icon: <FaShoppingCart />,
      title: "Online Marketplace",
      description: "Buy seeds, fertilizers, and equipment directly from verified suppliers.",
      buttonText: "Shop Now",
      link:"/marketplace",
    },
    {
      icon: <FaCalendarAlt />,
      title: "AI Crop Planner",
      description: "Smart seasonal crop planning based on soil, climate, and market data.",
      buttonText: "Plan Crops",
      link: "seasonal-crop-planner",
    },
    {
      icon: <FaBug />,
      title: "Disease Detection",
      description: "AI-powered tool for identifying plant diseases from photos.",
      buttonText: "Scan Plants",
      link:"/disease-detection",
    },
    {
      icon: <FaChartLine />,
      title: "Market Price Predictor",
      description: "Real-time price predictions and future price trends.",
      buttonText: "Check Prices",
      link:"/market-price-predictor",
    },
    {
      icon: <FaPlayCircle />,
      title: "FarmerTube",
      description: "Farming tutorials & knowledge hub with expert videos.",
      buttonText: "Watch Videos",
      link:"/farmer-tube",
    },
    {
      icon: <FaBook />,
      title: "AgriGuide",
      description: "Smart solutions, expert advice, and success stories for modern farmers.",
      buttonText: "Read Blogs",
      link:"/blogs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">

      {/* Heading and Subheading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800">Our Services</h1>
        <p className="text-lg text-green-700 mt-2">
          Empowering Farmers with Smart Solutions
        </p>
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-100 rounded-lg p-6 flex flex-col items-start shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-2xl mb-4 text-[#214E20]">{service.icon}</span>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
         <Link href={`${service.link}`}>   <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors cursor-pointer">
              {service.buttonText} 
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}