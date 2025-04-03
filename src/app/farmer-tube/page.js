'use client';
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";

export default function FarmerTube() {
  // Sample data for content cards (replace with API data in a real app)
  const contentData = [

    {
      id: 1,
      title: "Learn Organic Farming With Shankar",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/learn-farming-with-shankar.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=2F74xw1VK8E&t=30s",
    },
    {
      id: 2,
      title: "How to Start a Small Farm A Step-by-Step Guide",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/How to Start a Small Farm.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=heTxEsrPVdQ"
    },
    {
      id: 3,
      title: "ऐसे शुरू करें आर्गेनिक खेती",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/aaise-kare-farming-shuru.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=2qiNKen-rm0"
    },
    {
      id: 4,
      title: "Organic farming VS natural farming",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming VS natural farming.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=lMkPcx6ijbg"
    },
    {
      id: 5,
      title: "Organic farming secrets",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming secrets.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=HgPt61uRs20"
    },
    {
      id: 6,
      title: "How to start a farm in India?",
      category: "Sustainable Farming",
      type: "Article",
      thumbnail: "/farmer-tube/start-farming-business-in-india.jfif",
      language: "English",
      link: "https://utkarshindia.in/blog/how-to-start-a-farm-in-india"
    },
    {
      id: 7,
      title: "2 Acres to 1.5 Lakh/month: Transforming Small Farms into Profit Machines",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Transforming Small Farms into Profit Machines.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=NbavN0ZnQmo"
    },
    {
      id: 8,
      title: "How to Grow Organic Vegetables in Your Backyard",
      category: "Farming",
      type: "Article",
      thumbnail: "/farmer-tube/backyard-farming.png",
      language: "English",
      link: "https://www.bombaygreens.com/blogs/news/step-by-step-guide-to-create-your-organic-vegetable-garden"
    },
    {
      id: 9,
      title: "Best Practices for Pest Management in Organic Farming",
      category: "Pest Management",
      type: "Video",
      thumbnail: "/farmer-tube/aaise-kare-farming-shuru.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=2qiNKen-rm0"
    },
    {
      id: 10,
      title: "Advanced Organic Farming Techniques for Better Yields",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming VS natural farming.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=lMkPcx6ijbg"
    },
    {
      id: 11,
      title: "5 Tips for Efficient Water Management in Small Farms",
      category: "Crop Care",
      type: "Article",
      thumbnail: "/farmer-tube/Organic farming secrets.jpg",
      language: "English",
      link: "https://utkarshindia.in/blog/how-to-start-a-farm-in-india"
    },
    {
      id: 12,
      title: "The Importance of Soil Health for Sustainable Farming",
      category: "Sustainable Farming",
      type: "Article",
      thumbnail: "/farmer-tube/How to Start a Small Farm.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=HgPt61uRs20"
    },
    {
      id: 13,
      title: "How to Start Organic Farming With Little Investment",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/aaise-kare-farming-shuru.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=HgPt61uRs20"
    },
    {
      id: 14,
      title: "How to Manage Pests in Organic Farms Without Chemicals",
      category: "Pest Management",
      type: "Article",
      thumbnail: "/farmer-tube/Organic farming secrets.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=2qiNKen-rm0"
    },
    {
      id: 15,
      title: "How to Start a Profitable Farm in India",
      category: "Sustainable Farming",
      type: "Article",
      thumbnail: "/farmer-tube/start-farming-business-in-india.jfif",
      language: "English",
      link: "https://utkarshindia.in/blog/how-to-start-a-farm-in-india"
    },
    {
      id: 16,
      title: "Maximizing Profits with Minimal Resources in Small Farms",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Transforming Small Farms into Profit Machines.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=NbavN0ZnQmo"
    },
    {
      id: 17,
      title: "Building a Greenhouse for Year-Round Crop Production",
      category: "Crop Care",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming VS natural farming.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=heTxEsrPVdQ"
    },
    {
      id: 18,
      title: "How to Build a Raised Bed Garden for Small Farms",
      category: "Crop Care",
      type: "Video",
      thumbnail: "/farmer-tube/How to Start a Small Farm.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=heTxEsrPVdQ"
    },
    {
      id: 19,
      title: "Natural Pest Control Methods for Organic Farming",
      category: "Pest Management",
      type: "Video",
      thumbnail: "/farmer-tube/aaise-kare-farming-shuru.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=2qiNKen-rm0"
    },
    {
      id: 20,
      title: "How to Use Mulching to Improve Soil Health in Organic Farms",
      category: "Sustainable Farming",
      type: "Article",
      thumbnail: "/farmer-tube/Organic farming VS natural farming.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=lMkPcx6ijbg"
    },
    {
      id: 21,
      title: "Top 5 Organic Fertilizers for High-Yield Farming",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming secrets.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=HgPt61uRs20"
    },
    {
      id: 22,
      title: "What You Need to Know About Crop Rotation in Organic Farming",
      category: "Crop Care",
      type: "Article",
      thumbnail: "/farmer-tube/How to Start a Small Farm.jpg",
      language: "Hindi",
      link: "https://utkarshindia.in/blog/how-to-start-a-farm-in-india"
    },
    {
      id: 23,
      title: "Understanding Permaculture for Sustainable Farming",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/aaise-kare-farming-shuru.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=heTxEsrPVdQ"
    },
    {
      id: 24,
      title: "How to Start Hydroponic Farming at Home",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming VS natural farming.jpg",
      language: "English",
      link: "https://www.youtube.com/watch?v=lMkPcx6ijbg"
    },
    {
      id: 25,
      title: "The Secrets to Growing Organic Tomatoes Successfully",
      category: "Crop Care",
      type: "Video",
      thumbnail: "/farmer-tube/Organic farming secrets.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=HgPt61uRs20"
    },
    {
      id: 26,
      title: "How to Use Composting to Improve Your Farm’s Soil",
      category: "Sustainable Farming",
      type: "Article",
      thumbnail: "/farmer-tube/start-farming-business-in-india.jfif",
      language: "English",
      link: "https://utkarshindia.in/blog/how-to-start-a-farm-in-india"
    },
    {
      id: 27,
      title: "Transforming Small Farms into Profitable Ventures",
      category: "Sustainable Farming",
      type: "Video",
      thumbnail: "/farmer-tube/Transforming Small Farms into Profit Machines.jpg",
      language: "Hindi",
      link: "https://www.youtube.com/watch?v=NbavN0ZnQmo"
    }
    

  ];
  // State for search, filters, and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(4); // Initially display 4 items
  const itemsPerPage = 8; // Load 4 items at a time

  // Filter content based on search and filters
  const filteredContent = contentData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;
    const matchesLanguage =
      languageFilter === "All" || item.language === languageFilter;
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setDisplayedItems((prev) => prev + itemsPerPage);
  };

  // Determine if there are more items to load
  const hasMoreItems = displayedItems < filteredContent.length;

  const [randomTutorials, setRandomTutorials] = useState([]);

  useEffect(() => {
    const shuffled = [...contentData].sort(() => 0.5 - Math.random());
    setRandomTutorials(shuffled.slice(0, 4));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
  
    
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/farmer-field.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold mb-2">FarmerTube: Learn & Grow</h1>
          <p className="text-lg">
            Access tutorials, videos, and articles to enhance your farming skills.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="container mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for tutorials, videos, or articles..."
            className="w-full md:w-1/3 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filters */}
          <div className="flex gap-4">
            <select
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Crop Care">Crop Care</option>
              <option value="Pest Management">Pest Management</option>
              <option value="Sustainable Farming">Sustainable Farming</option>
            </select>

            <select
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>

            </select>
          </div>
        </div>
      </section>

<section className="container mx-auto py-6 px-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Top Tutorials This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomTutorials.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={item.thumbnail} alt={item.title} width={300} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-sm text-gray-500">Language: {item.language}</p>
                <Link href={item.link} target="_blank">
                  <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 cursor-pointer">
                    {item.type === "Video" ? "Watch Now" : "Read Now"}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Content Section */}
      <section className="container mx-auto py-6 px-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">All Content</h2>
        {filteredContent.length === 0 ? (
          <p className="text-center text-gray-600">No content found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredContent.slice(0, displayedItems).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-sm text-gray-500">
                      Language: {item.language}
                    </p>
                    <Link href={`${item.link}`} target="_blank"><button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 cursor-pointer">
                  {item.type === "Video" ? "Watch Now" : "Read Now"}
                </button> </Link> 
                  </div>
                </div>
              ))}
            </div>
            {hasMoreItems && (
              <div className="text-center mt-6">
                <button
                  onClick={handleLoadMore}
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 cursor-pointer"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </section>

    
    </div>
  );
}