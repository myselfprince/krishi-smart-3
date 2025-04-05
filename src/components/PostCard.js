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

// ===========================================2nd version===========================================
// "use client";

// import { useState } from "react";
// import { votePost } from "@/utils/api";

// export default function PostCard({ post }) {
//   const [votes, setVotes] = useState(post.votes || 0);
//   const [error, setError] = useState("");

//   const handleVote = async (voteType) => {
//     try {
//       setError("");
//       const newVotes = await votePost(post._id, voteType);
//       setVotes(newVotes);
//     } catch (error) {
//       setError(error.message || "Failed to vote. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
//       <p className="text-gray-600 mb-2">
//         <strong>Posted by:</strong> {post.author}
//       </p>
//       <p className="text-gray-600 mb-4">{post.content}</p>
//       {post.isFundraising && (
//         <div className="mb-4">
//           <p className="text-gray-600">
//             <strong>Fundraising for:</strong> ₹{post.amount}
//           </p>
//           <p className="text-gray-600">
//             <strong>Reason:</strong> {post.reason}
//           </p>
//           <p className="text-gray-600">
//             <strong>Location:</strong> {post.location || "Not specified"}
//           </p>
//           <div className="flex space-x-4 mt-2">
//             <button
//               onClick={() => handleVote("upvote")}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
//             >
//               Verify (Yes)
//             </button>
//             <button
//               onClick={() => handleVote("downvote")}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
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

// ===========================================3rd version===========================================
// "use client";

// import { useState, useEffect } from "react";
// import { votePost } from "@/utils/api";
// import toast from "react-hot-toast";

// export default function PostCard({ post, setPosts }) {
//   const [votes, setVotes] = useState(post.votes || 0);
//   const [error, setError] = useState("");

//   // Load Razorpay script dynamically
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleVote = async (voteType) => {
//     try {
//       setError("");
//       const newVotes = await votePost(post._id, voteType);
//       setVotes(newVotes);
//       setPosts((prevPosts) =>
//         prevPosts.map((p) => (p._id === post._id ? { ...p, votes: newVotes } : p))
//       );
//     } catch (error) {
//       setError(error.message || "Failed to vote. Please try again.");
//     }
//   };

//   const handleDonate = async () => {
//     try {
//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: post.amount }), // Use the post's amount
//       });

//       const order = await response.json();

//       if (!order.id) {
//         throw new Error("Failed to create order");
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: post.amount * 100, // Amount in paise
//         currency: "INR",
//         name: "KrishiSmart",
//         description: `Donation for ${post.title} by ${post.author}`,
//         order_id: order.id,
//         prefill: {
//           name: "Donor Name",
//           email: "donor@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#16A34A",
//         },
//         handler: function (response) {
//           toast.success("Donation successful! Thank you for your support.");
//           // Optionally update the post (e.g., increment a donation count if tracked)
//           setPosts((prevPosts) =>
//             prevPosts.map((p) =>
//               p._id === post._id ? { ...p, votes: p.votes + 1 } : p
//             )
//           );
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       rzp.on("payment.failed", function (response) {
//         toast.error("Payment failed. Please try again.");
//         console.error("Payment failed:", response.error);
//       });
//     } catch (error) {
//       toast.error("Error initiating donation. Please try again.");
//       console.error("Donate error:", error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
//       <p className="text-gray-600 mb-2">
//         <strong>Posted by:</strong> {post.author}
//       </p>
//       <p className="text-gray-600 mb-4">{post.content}</p>
//       {post.isFundraising && (
//         <div className="mb-4">
//           <p className="text-gray-600">
//             <strong>Fundraising for:</strong> ₹{post.amount}
//           </p>
//           <p className="text-gray-600">
//             <strong>Reason:</strong> {post.reason}
//           </p>
//           <p className="text-gray-600">
//             <strong>Location:</strong> {post.location || "Not specified"}
//           </p>
//           <div className="flex space-x-4 mt-2">
//             <button
//               onClick={() => handleVote("upvote")}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
//             >
//               Verify (Yes)
//             </button>
//             <button
//               onClick={() => handleVote("downvote")}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
//             >
//               Deny (No)
//             </button>
//             <button
//               onClick={handleDonate}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
//             >
//               Donate
//             </button>
//           </div>
//           {error && <p className="text-red-600 mt-2">{error}</p>}
//           <p className="text-gray-600 mt-2">Net Votes: {votes}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// ===========================================4th version===========================================
// "use client";

// import { useState, useEffect } from "react";
// import { votePost } from "@/utils/api";
// import toast from "react-hot-toast";

// export default function PostCard({ post, setPosts }) {
//   const [votes, setVotes] = useState(post.votes || 0);
//   const [error, setError] = useState("");
//   const [donationAmount, setDonationAmount] = useState("");
//   const [isDonating, setIsDonating] = useState(false);

//   // Load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleVote = async (voteType) => {
//     try {
//       setError("");
//       const newVotes = await votePost(post._id, voteType);
//       setVotes(newVotes);
//       setPosts((prevPosts) =>
//         prevPosts.map((p) => (p._id === post._id ? { ...p, votes: newVotes } : p))
//       );
//     } catch (error) {
//       setError(error.message || "Failed to vote. Please try again.");
//     }
//   };

//   const handleDonate = async () => {
//     if (!donationAmount || donationAmount <= 0) {
//       toast.error("Please enter a valid donation amount.");
//       return;
//     }

//     setIsDonating(true);
//     try {
//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: donationAmount }),
//       });

//       const order = await response.json();
//       if (!order.id) throw new Error("Failed to create order");

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: donationAmount * 100, // Amount in paise
//         currency: "INR",
//         name: "KrishiSmart",
//         description: `Donation for ${post.title} by ${post.author}`,
//         order_id: order.id,
//         prefill: {
//           name: "Donor Name",
//           email: "donor@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#16A34A" },
//         handler: async function (response) {
//           try {
//             const res = await fetch(`/api/community/${post._id}/donate`, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({ amount: Number(donationAmount) }),
//             });

//             const data = await res.json();
//             if (res.ok) {
//               toast.success("Donation successful! Thank you for your support.");
//               setPosts((prevPosts) =>
//                 prevPosts.map((p) =>
//                   p._id === post._id ? { ...p, raised: data.raised } : p
//                 )
//               );
//             } else {
//               toast.error("Failed to record donation. Please contact support.");
//             }
//           } catch (error) {
//             toast.error("Error recording donation. Please try again.");
//           }
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       rzp.on("payment.failed", function (response) {
//         toast.error("Payment failed. Please try again.");
//         console.error("Payment failed:", response.error);
//       });
//     } catch (error) {
//       toast.error("Error initiating donation. Please try again.");
//       console.error("Donate error:", error);
//     } finally {
//       setIsDonating(false);
//     }
//   };

//   const isGoalMet = post.raised >= post.amount;
//   const progress = (post.raised / post.amount) * 100;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
//       <p className="text-gray-600 mb-2">
//         <strong>Posted by:</strong> {post.author}
//       </p>
//       <p className="text-gray-600 mb-4">{post.content}</p>
//       {post.isFundraising && (
//         <div className="mb-4">
//           <p className="text-gray-600">
//             <strong>Goal:</strong> ₹{post.amount}
//           </p>
//           <p className="text-gray-600">
//             <strong>Raised:</strong> ₹{post.raised} / ₹{post.amount}
//           </p>
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
//             <div
//               className="bg-green-600 h-4 rounded-full"
//               style={{ width: `${Math.min(progress, 100)}%` }}
//             ></div>
//           </div>
//           <p className="text-gray-600 mt-2">
//             <strong>Reason:</strong> {post.reason}
//           </p>
//           <p className="text-gray-600">
//             <strong>Location:</strong> {post.location || "Not specified"}
//           </p>
//           {!isGoalMet ? (
//             <div className="mt-4">
//               <input
//                 type="number"
//                 value={donationAmount}
//                 onChange={(e) => setDonationAmount(e.target.value)}
//                 placeholder="Enter donation amount (₹)"
//                 className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//                 min="1"
//                 max={post.amount - post.raised}
//                 required
//               />
//               <button
//                 onClick={handleDonate}
//                 disabled={isDonating}
//                 className="mt-2 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
//               >
//                 {isDonating ? "Processing..." : "Donate"}
//               </button>
//             </div>
//           ) : (
//             <p className="text-green-600 font-bold mt-4">
//               Donation completed. Thank you for your help!
//             </p>
//           )}
//           <div className="flex space-x-4 mt-4">
//             <button
//               onClick={() => handleVote("upvote")}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
//             >
//               Verify (Yes)
//             </button>
//             <button
//               onClick={() => handleVote("downvote")}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
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

// =========================================6th version=======================================
"use client";

import { useState, useEffect } from "react";
import { votePost } from "@/utils/api";
import toast from "react-hot-toast";

export default function PostCard({ post, setPosts }) {
  const [votes, setVotes] = useState(post.votes || 0);
  const [error, setError] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [isDonating, setIsDonating] = useState(false);

  // Load Razorpay script
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

  // const handleDonate = async () => {
  //   if (!donationAmount || donationAmount <= 0) {
  //     toast.error("Please enter a valid donation amount.");
  //     return;
  //   }

  //   setIsDonating(true);
  //   try {
  //     const response = await fetch("/api/create-order", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: donationAmount }),
  //     });

  //     const order = await response.json();
  //     if (!order.id) throw new Error("Failed to create order");

  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  //       amount: donationAmount * 100, // Amount in paise
  //       currency: "INR",
  //       name: "KrishiSmart",
  //       description: `Donation for ${post.title} by ${post.author}`,
  //       order_id: order.id,
  //       prefill: {
  //         name: "Donor Name",
  //         email: "donor@example.com",
  //         contact: "9999999999",
  //       },
  //       theme: { color: "#16A34A" },
  //       handler: async function (response) {
  //         try {
  //           const res = await fetch(`/api/community/${post._id}/donate`, {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({ amount: Number(donationAmount) }),
  //           });

  //           const data = await res.json();
  //           if (res.ok) {
  //             toast.success("Donation successful! Thank you for your support.");
  //             setPosts((prevPosts) =>
  //               prevPosts.map((p) =>
  //                 p._id === post._id ? { ...p, raised: data.raised } : p
  //               )
  //             );
  //           } else {
  //             toast.error("Failed to record donation. Please contact support.");
  //           }
  //         } catch (error) {
  //           toast.error("Error recording donation. Please try again.");
  //         }
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();

  //     rzp.on("payment.failed", function (response) {
  //       toast.error("Payment failed. Please try again.");
  //       console.error("Payment failed:", response.error);
  //     });
  //   } catch (error) {
  //     toast.error("Error initiating donation. Please try again.");
  //     console.error("Donate error:", error);
  //   } finally {
  //     setIsDonating(false);
  //   }
  // };


  // src/components/PostCard.js (partial update)
const isGoalMet = post.raised >= post.amount;
const remaining = post.amount - post.raised;

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
      amount: donationAmount * 100, // Amount in paise
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
          <strong>Goal:</strong> ₹{post.amount}
        </p>
        <p className="text-gray-600">
          <strong>Raised:</strong> ₹{post.raised} / ₹{post.amount}
        </p>
        <p className="text-gray-600">
          <strong>Remaining:</strong> ₹{remaining}
        </p>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: `${Math.min((post.raised / post.amount) * 100, 100)}%` }}
          ></div>
        </div>
        {!isGoalMet ? (
          <div className="mt-4">
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter donation amount (₹)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              min="1"
              required
            />
            <button
              onClick={() => setDonationAmount(remaining)}
              className="mt-2 w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition cursor-pointer"
            >
              Donate Remaining Amount (₹{remaining})
            </button>
            <button
              onClick={handleDonate}
              disabled={isDonating || isGoalMet}
              className="mt-2 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition cursor-pointer disabled:bg-gray-400"
            >
              {isDonating ? "Processing..." : "Donate"}
            </button>
          </div>
        ) : (
          <p className="text-green-600 font-bold mt-4">
            Goal reached! Thank you for your support!
          </p>
        )}
      </div>
    )}
  </div>
  );
}