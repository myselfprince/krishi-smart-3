'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Blogs() {
  const blogData = [
    {
      id: 1,
      title: "How Organic Farming Boosted My Yield",
      category: "Success Stories",
      excerpt:
        "Learn how I transitioned to organic farming and increased my crop yield by 30% in one season.",
      author: "Ramesh Kumar",
      thumbnail: "/sample/1.jpg",
      language: "English",
      date: "2025-03-15",
    },
    {
      id: 2,
      title: "Top 5 Tips for Pest Control",
      category: "Expert Advice",
      excerpt:
        "Expert tips to manage pests naturally without harming your crops or the environment.",
      author: "Dr. Anita Sharma",
      thumbnail: "/sample/2.jpg",
      language: "Hindi",
      date: "2025-03-10",
    },
    {
      id: 3,
      title: "Modern Irrigation Techniques",
      category: "Modern Farming",
      excerpt:
        "Discover innovative irrigation methods to save water and improve crop health.",
      author: "Vijay Patel",
      thumbnail: "/sample/3.jpg",
      language: "English",
      date: "2025-03-05",
    },
    {
      id: 4,
      title: "A Farmer's Journey to Sustainability",
      category: "Success Stories",
      excerpt:
        "My story of adopting sustainable practices and securing a profitable future.",
      author: "Sunita Devi",
      thumbnail: "/sample/4.jpg",
      language: "Hindi",
      date: "2025-02-28",
    },
    {
      id: 5,
      title: "The Future of Crop Rotation",
      category: "Modern Farming",
      excerpt:
        "Explore how crop rotation can revolutionize your farming productivity.",
      author: "Dr. Rajesh Mehra",
      thumbnail: "/sample/5.jpg",
      language: "English",
      date: "2025-02-20",
    },
    {
      id: 6,
      title: "Natural Fertilizers: A Complete Guide",
      category: "Expert Advice",
      excerpt:
        "Learn how to make and use natural fertilizers for healthier crops.",
      author: "Priya Singh",
      thumbnail: "/sample/6.jpg",
      language: "Hindi",
      date: "2025-02-15",
    },
  ];

  // State for search, filters, and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(3); // Initially display 3 items
  const itemsPerPage = 3; // Load 3 items at a time

  // Filter blogs based on search and filters
  const filteredBlogs = blogData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
  const hasMoreItems = displayedItems < filteredBlogs.length;

  const [randomTutorials, setRandomTutorials] = useState([]);

  useEffect(() => {
    const shuffled = [...blogData].sort(() => 0.5 - Math.random());
    setRandomTutorials(shuffled.slice(0, 3));
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
          <h1 className="text-4xl font-bold mb-2">AgriGuide Blogs</h1>
          <p className="text-lg">
            Expert advice, success stories, and modern farming insights.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="container mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for blogs by keyword..."
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
              <option value="Expert Advice">Expert Advice</option>
              <option value="Success Stories">Success Stories</option>
              <option value="Modern Farming">Modern Farming</option>
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

      {/* Featured Section */}
      {/* <section className="container mx-auto py-6 px-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.excerpt}</p>
                <p className="text-sm text-gray-500">
                  By {blog.author} | {blog.date}
                </p>
                <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

<section className="container mx-auto py-6 px-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomTutorials.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.excerpt}</p>
                <p className="text-sm text-gray-500">
                  By {blog.author} | {blog.date}
                </p>
                <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="container mx-auto py-6 px-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">All Blogs</h2>
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-600">No blogs found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.slice(0, displayedItems).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600">{blog.excerpt}</p>
                    <p className="text-sm text-gray-500">
                      By {blog.author} | {blog.date}
                    </p>
                    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {hasMoreItems && (
              <div className="text-center mt-6">
                <button
                  onClick={handleLoadMore}
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
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