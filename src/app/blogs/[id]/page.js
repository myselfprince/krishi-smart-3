import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog data (replace with API fetch in a real app)
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
    content: `
      <p>Organic farming has been a game-changer for me. After years of struggling with low yields and high costs, I decided to make the switch to organic methods. In this blog, I'll share my journey and the steps I took to achieve a 30% increase in my crop yield within just one season.</p>

      <h2>Why I Chose Organic Farming</h2>
      <p>The rising costs of chemical fertilizers and pesticides were eating into my profits. Additionally, I noticed that my soil quality was deteriorating year after year. After attending a local farming workshop, I learned about the benefits of organic farming—better soil health, sustainable practices, and higher market prices for organic produce.</p>

      <h2>Steps I Took</h2>
      <ul>
        <li><strong>Composting:</strong> I started making my own compost using farm waste, which significantly reduced my fertilizer costs.</li>
        <li><strong>Crop Rotation:</strong> Rotating crops helped improve soil fertility and reduce pest issues.</li>
        <li><strong>Natural Pest Control:</strong> I used neem oil and companion planting to manage pests without chemicals.</li>
      </ul>

      <h2>Results</h2>
      <p>Within one season, I saw a 30% increase in my yield. My crops were healthier, and I was able to sell them at a premium in the organic market. More importantly, my soil is now in much better condition, ensuring long-term sustainability for my farm.</p>

      <p>If you're considering organic farming, I highly recommend starting small and experimenting with these techniques. The results are worth the effort!</p>
    `,
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
    content: `
      <p>Pests can be a major challenge for farmers, but chemical pesticides often do more harm than good. In this blog, I’ll share my top 5 tips for managing pests naturally, based on years of research and practical experience.</p>

      <h2>Tip 1: Use Neem Oil</h2>
      <p>Neem oil is a natural pesticide that repels a wide range of pests. Mix it with water and spray it on your crops weekly for best results.</p>

      <h2>Tip 2: Companion Planting</h2>
      <p>Planting marigolds alongside your crops can deter pests like aphids and nematodes. This method is both effective and eco-friendly.</p>

      <h2>Tip 3: Encourage Beneficial Insects</h2>
      <p>Ladybugs and lacewings are natural predators of many pests. Create a habitat for them by planting flowers like daisies and yarrow.</p>

      <h2>Tip 4: Maintain Healthy Soil</h2>
      <p>Healthy soil leads to healthy plants that are more resistant to pests. Use organic compost and avoid over-fertilizing.</p>

      <h2>Tip 5: Regular Monitoring</h2>
      <p>Check your crops regularly for signs of pest activity. Early detection can prevent infestations from spreading.</p>

      <p>By following these tips, you can manage pests effectively while keeping your farm sustainable and safe for the environment.</p>
    `,
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
    content: `
      <p>Water is a precious resource, and efficient irrigation is key to sustainable farming. In this blog, I’ll explore modern irrigation techniques that can help you save water while ensuring your crops thrive.</p>

      <h2>Drip Irrigation</h2>
      <p>Drip irrigation delivers water directly to the roots of plants, minimizing waste. It’s ideal for dry regions and can reduce water usage by up to 50%.</p>

      <h2>Sprinkler Systems</h2>
      <p>Modern sprinkler systems are designed to mimic natural rainfall, providing even water distribution. They’re great for larger fields.</p>

      <h2>Smart Irrigation Controllers</h2>
      <p>These devices use weather data to adjust watering schedules automatically, ensuring your crops get the right amount of water at the right time.</p>

      <h2>Benefits of Modern Irrigation</h2>
      <ul>
        <li>Reduced water waste</li>
        <li>Improved crop health</li>
        <li>Lower labor costs</li>
      </ul>

      <p>Investing in modern irrigation techniques can transform your farm’s productivity while conserving water for future generations.</p>
    `,
  },
];

// The page component is async in the App Router
export default async function BlogPost({ params }) {
  // Extract the id from the URL params
  const id = parseInt(params.id);

  // Find the blog post by ID (replace with a database fetch in a real app)
  const blog = blogData.find((post) => post.id === id);

  // If blog post is not found, return a 404 page
  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Blog Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 mb-4">
            <div>
              <span>By {blog.author}</span> | <span>{blog.date}</span> |{" "}
              <span>{blog.category}</span>
            </div>
            <div>
              <span>Language: {blog.language}</span>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
          {/* Render the blog content as HTML */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
 
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-8 text-center">
          <Link href="/blogs">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 cursor-pointer">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}