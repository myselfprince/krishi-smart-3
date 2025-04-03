// "use client";

// import { useState } from "react";
// import { votePost } from "@/utils/api";

// export default function PostCard({ post }) {
//   const [votes, setVotes] = useState(post.votes || 0);
//   const [error, setError] = useState(""); // Add state for error messages

//   const handleVote = async (voteType) => {
//     try {
//       setError(""); // Clear previous errors
//       const newVotes = await votePost(post._id, voteType);
//       setVotes(newVotes);
//     } catch (error) {
//       setError(error.message || "Failed to vote. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
//       <p className="text-gray-600 mb-4">{post.content}</p>
//       {post.isFundraising && (
//         <div className="mb-4">
//           <p className="text-gray-600">
//             <strong>Fundraising for:</strong> ₹{post.amount}
//           </p>
//           <p className="text-gray-600">
//             <strong>Reason:</strong> {post.reason}
//           </p>
//           <div className="flex space-x-4 mt-2">
//             <button
//               onClick={() => handleVote("upvote")}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//             >
//               Verify (Yes)
//             </button>
//             <button
//               onClick={() => handleVote("downvote")}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
//             >
//               Deny (No)
//             </button>
//           </div>
//           {error && <p className="text-red-600 mt-2">{error}</p>}
//           <p className="text-gray-600 mt-2">Net Votes: {votes}</p>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { votePost } from "@/utils/api";

export default function PostCard({ post }) {
  const [votes, setVotes] = useState(post.votes || 0);
  const [error, setError] = useState("");

  const handleVote = async (voteType) => {
    try {
      setError("");
      const newVotes = await votePost(post._id, voteType);
      setVotes(newVotes);
    } catch (error) {
      setError(error.message || "Failed to vote. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">
        <strong>Posted by:</strong> {post.author}
      </p>
      <p className="text-gray-600 mb-4">{post.content}</p>
      {post.isFundraising && (
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Fundraising for:</strong> ₹{post.amount}
          </p>
          <p className="text-gray-600">
            <strong>Reason:</strong> {post.reason}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {post.location || "Not specified"}
          </p>
          <div className="flex space-x-4 mt-2">
            <button
              onClick={() => handleVote("upvote")}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
            >
              Verify (Yes)
            </button>
            <button
              onClick={() => handleVote("downvote")}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
            >
              Deny (No)
            </button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          <p className="text-gray-600 mt-2">Net Votes: {votes}</p>
        </div>
      )}
    </div>
  );
}