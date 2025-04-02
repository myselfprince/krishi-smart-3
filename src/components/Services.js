import Head from "next/head";
import { FaShoppingCart, FaCalendarAlt, FaBug, FaChartLine, FaPlayCircle, FaBook } from "react-icons/fa";

export default function Home() {
//     const services = [
//   { icon: <FaShoppingCart />, title: "Online Marketplace", ... },
//   { icon: <FaCalendarAlt />, title: "AI Crop Planner", ... },
//   { icon: <FaBug />, title: "Disease Detection", ... },
//   { icon: <FaChartLine />, title: "Market Price Predictor", ... },
//   { icon: <FaPlayCircle />, title: "FarmerTube", ... },
//   { icon: <FaBook />, title: "AgriGuide", ... },
// ];
  const services = [
    {
      icon: <FaShoppingCart />,
      title: "Online Marketplace",
      description: "Buy seeds, fertilizers, and equipment directly from verified suppliers.",
      buttonText: "Shop Now",
    },
    {
      icon: <FaCalendarAlt />,
      title: "AI Crop Planner",
      description: "Smart seasonal crop planning based on soil, climate, and market data.",
      buttonText: "Plan Crops",
    },
    {
      icon: <FaBug />,
      title: "Disease Detection",
      description: "AI-powered tool for identifying plant diseases from photos.",
      buttonText: "Scan Plants",
    },
    {
      icon: <FaChartLine />,
      title: "Market Price Predictor",
      description: "Real-time price predictions and future price trends.",
      buttonText: "Check Prices",
    },
    {
      icon: <FaPlayCircle />,
      title: "FarmerTube",
      description: "Farming tutorials & knowledge hub with expert videos.",
      buttonText: "Watch Videos",
    },
    {
      icon: <FaBook />,
      title: "AgriGuide",
      description: "Smart solutions, expert advice, and success stories for modern farmers.",
      buttonText: "Read Blogs",
    },
  ];
//   const services = [
//     {
//       icon: "📦",
//       title: "Online Marketplace",
//       description: "Buy seeds, fertilizers, and equipment directly from verified suppliers.",
//       buttonText: "Shop Now",
//     },
//     {
//       icon: "📅",
//       title: "AI Crop Planner",
//       description: "Smart seasonal crop planning based on soil, climate, and market data.",
//       buttonText: "Plan Crops",
//     },
//     {
//       icon: "🐞",
//       title: "Disease Detection",
//       description: "AI-powered tool for identifying plant diseases from photos.",
//       buttonText: "Scan Plants",
//     },
//     {
//       icon: "📈",
//       title: "Market Price Predictor",
//       description: "Real-time price predictions and future price trends.",
//       buttonText: "Check Prices",
//     },
//     {
//       icon: "▶️",
//       title: "FarmerTube",
//       description: "Farming tutorials & knowledge hub with expert videos.",
//       buttonText: "Watch Videos",
//     },
//     {
//       icon: "📝",
//       title: "AgriGuide",
//       description: "Smart solutions, expert advice, and success stories for modern farmers.",
//       buttonText: "Read Blogs",
//     },
//   ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <Head>
        <title>Agri Services</title>
        <meta name="description" content="Empowering farmers with smart solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}