"use client";

import { useState, useEffect } from "react";
import { createPost } from "../utils/api";
import axios from "axios";

export default function CreatePost({ setPosts, isFundraising = false }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me", { validateStatus: () => true });
        if (res.status === 200) {
          setAuthor(res.data.data.username);
        } else {
          setError("Failed to load user details. Please log in.");
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to load user details. Please log in.");
      }
    };
    fetchUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const postData = {
      title,
      content,
      isFundraising: false,
      author,
    };

    try {
      const newPost = await createPost(postData);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setTitle("");
      setContent("");
    } catch (error) {
      setError(error.message || "Failed to create post. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-2xl w-full">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Create a Post</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="space-y-6 grid ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share something with the community?"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 h-24 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full max-w-md mx-auto bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300 block cursor-pointer"
        >
          Post
        </button>
      </div>
    </form>
  );
}