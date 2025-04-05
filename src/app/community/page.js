"use client";

import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import CreatePost from "@/components/CreatePost";
import { getPosts } from "@/utils/api";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        // Filter to show only regular posts (non-fundraising)
        const regularPosts = Array.isArray(data) ? data.filter((post) => !post.isFundraising) : [];
        setPosts(regularPosts);
      } catch (error) {
        setError(error.message || "Failed to load posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">Community</h1>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <div className="flex justify-center">
          <CreatePost setPosts={setPosts} isFundraising={false} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} setPosts={setPosts} />)
          ) : (
            !error && <p className="text-gray-600 text-center col-span-full">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}