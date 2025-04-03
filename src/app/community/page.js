"use client";

import { useState, useEffect } from "react";
// import PostCard from "../../components/PostCard";
// import CreatePost from "../../components/CreatePost";
// import { getPosts } from "../../utils/api";
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
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error.message || "Failed to load posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Community
      </h1>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      <CreatePost setPosts={setPosts} />
      <div className="space-y-6">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          !error && <p className="text-gray-600 text-center">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
