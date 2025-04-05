"use client";

import { useState, useEffect } from "react";
import { votePost } from "@/utils/api";
import toast from "react-hot-toast";

export default function PostCard({ post, setPosts }) {
  const [votes, setVotes] = useState(post.votes || 0);
  const [error, setError] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [isDonating, setIsDonating] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleVote = async (voteType) => {
    try {
      setError("");
      const newVotes = await votePost(post._id, voteType);
      setVotes(newVotes);
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p._id === post._id ? { ...p, votes: newVotes } : p))
      );
    } catch (error) {
      setError(error.message || "Failed to vote. Please try again.");
    }
  };

  const handleDonate = async () => {
    if (!donationAmount || donationAmount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    setIsDonating(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount }),
      });

      const order = await response.json();
      if (!order.id) throw new Error("Failed to create order");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: donationAmount * 100,
        currency: "INR",
        name: "KrishiSmart",
        description: `Donation for ${post.title} by ${post.author}`,
        order_id: order.id,
        handler: async function (response) {
          const res = await fetch(`/api/community/${post._id}/donate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: Number(donationAmount) }),
          });

          const data = await res.json();
          if (res.ok) {
            toast.success("Donation successful! Thank you for your support.");
            setPosts((prevPosts) =>
              prevPosts.map((p) =>
                p._id === post._id ? { ...p, raised: data.raised } : p
              )
            );
          } else {
            toast.error("Failed to record donation. Please contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error("Error initiating donation. Please try again.");
      console.error("Donate error:", error);
    } finally {
      setIsDonating(false);
    }
  };

  const isGoalMet = post.raised >= post.amount;
  const remaining = Math.max(0, post.amount - post.raised);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">
        <strong>Posted by:</strong> {post.author}
      </p>
      <p className="text-gray-600 mb-4">{post.content}</p>
      {post.isFundraising && (
        <div className="space-y-4">
          <div className="text-gray-600">
            <p><strong>Goal:</strong> ₹{post.amount}</p>
            <p><strong>Raised:</strong> ₹{post.raised}</p>
            <p><strong>Remaining:</strong> ₹{remaining}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${Math.min((post.raised / post.amount) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-gray-600"><strong>Reason:</strong> {post.reason}</p>
          <p className="text-gray-600"><strong>Location:</strong> {post.location || "Not specified"}</p>
          {!isGoalMet ? (
            <div className="space-y-4">
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter donation amount (₹)"
                className="w-full max-w-xs p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                min="1"
                required
              />
            
              <button
                onClick={handleDonate}
                disabled={isDonating || isGoalMet}
                className="w-full max-w-xs bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 cursor-pointer"
              >
                {isDonating ? "Processing..." : "Donate"}
              </button>
              <button
                onClick={() => setDonationAmount(remaining)}
                className="w-full max-w-xs bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-300 cursor-pointer"
              >
                Donate Remaining Amount (₹{remaining})
              </button>
            </div>
          ) : (
            <p className="text-green-600 font-bold">Goal reached! Thank you for your support!</p>
          )}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleVote("upvote")}
              className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition duration-300 cursor-pointer"
            >
              Verify (Yes)
            </button>
            <button
              onClick={() => handleVote("downvote")}
              className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
            >
              Deny (No)
            </button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          <p className="text-gray-600 mt-2">Net Votes: {votes}</p>
        </div>
      )}
      {!post.isFundraising && (
        <div className="mt-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleVote("upvote")}
              className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition duration-300 cursor-pointer"
            >
              Upvote
            </button>
            <button
              onClick={() => handleVote("downvote")}
              className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
            >
              Downvote
            </button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          <p className="text-gray-600 mt-2">Net Votes: {votes}</p>
        </div>
      )}
    </div>
  );
}