// "use client";

// import { useState, useEffect } from "react";
// import PostCard from "@/components/PostCard";
// import CreateFundraisingPost from "@/components/CreateFundraisingPost"; // New component
// import { getPosts } from "@/utils/api";

// export default function FundRaise() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await getPosts();
//         // Filter to show only fundraising posts
//         const fundraisingPosts = Array.isArray(data) ? data.filter((post) => post.isFundraising) : [];
//         setPosts(fundraisingPosts);
//       } catch (error) {
//         setError(error.message || "Failed to load fundraising posts. Please try again later.");
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
//         Fund Raise
//       </h1>
//       {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
//       <CreateFundraisingPost setPosts={setPosts} />
//       <div className="space-y-6">
//         {Array.isArray(posts) && posts.length > 0 ? (
//           posts.map((post) => <PostCard key={post._id} post={post} />)
//         ) : (
//           !error && <p className="text-gray-600 text-center">No fundraising posts yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import CreateFundraisingPost from "@/components/CreateFundraisingPost";
import { getPosts } from "@/utils/api";

export default function FundRaise() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        const fundraisingPosts = Array.isArray(data) ? data.filter((post) => post.isFundraising) : [];
        setPosts(fundraisingPosts);
      } catch (error) {
        setError(error.message || "Failed to load fundraising posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Fund Raise
      </h1>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      <CreateFundraisingPost setPosts={setPosts} />
      <div className="space-y-6">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} setPosts={setPosts} />)
        ) : (
          !error && <p className="text-gray-600 text-center">No fundraising posts yet.</p>
        )}
      </div>
    </div>
  );
}