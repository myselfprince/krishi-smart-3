"use client";

import { useState, useEffect } from "react";
import { createPost } from "@/utils/api";
import axios from "axios";

export default function CreateFundraisingPost({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [location, setLocation] = useState("");
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
      isFundraising: true,
      amount,
      reason,
      location,
      author,
    };

    try {
      const newPost = await createPost(postData);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setTitle("");
      setContent("");
      setAmount("");
      setReason("");
      setLocation("");
    } catch (error) {
      setError(error.message || "Failed to create fundraising post. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Create a Fundraising Post</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="space-y-6  grid w-[fit] mx-auto">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell us about youself"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 h-24 resize-none"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount Needed (₹)"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for Fundraising"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 h-20 resize-none"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., Village, District, State)"
          className="w-full max-w-md mx-auto p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <button
          type="submit"
          className="w-full max-w-md mx-auto bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300 block cursor-pointer"
        >
          Raise Funds
        </button>
      </div>
    </form>
  );
}