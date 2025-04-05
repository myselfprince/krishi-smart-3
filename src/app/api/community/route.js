// // import { NextResponse } from "next/server";
// // import { connect } from "@/dbConfig/dbConfig";
// // import Post from "@/models/postModel";

// // export async function GET() {
// //   try {
// //     await connect();
// //     console.log("Fetching posts...");
// //     const posts = await Post.find().sort({ createdAt: -1 });
// //     console.log("Posts fetched successfully:", posts.length);
// //     return NextResponse.json(posts);
// //   } catch (error) {
// //     console.error("Error in GET /api/community:", error);
// //     return NextResponse.json(
// //       { error: "Failed to fetch posts", details: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }

// // export async function POST(request) {
// //   try {
// //     await connect();
// //     const data = await request.json();
// //     if (data.isFundraising && data.amount) {
// //       data.amount = Number(data.amount); // Ensure amount is a number
// //     }
// //     const post = new Post(data);
// //     await post.save();
// //     return NextResponse.json(post, { status: 201 });
// //   } catch (error) {
// //     console.error("Error in POST /api/community:", error);
// //     return NextResponse.json(
// //       { error: "Failed to create post", details: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextResponse } from "next/server";
// import { connect } from "@/dbConfig/dbConfig";
// import Post from "@/models/postModel";

// export async function GET() {
//   try {
//     await connect();
//     console.log("Fetching posts...");
//     const posts = await Post.find().sort({ createdAt: -1 });
//     console.log("Posts fetched successfully:", posts.length);
//     return NextResponse.json(posts);
//   } catch (error) {
//     console.error("Error in GET /api/community:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch posts", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     await connect();
//     const data = await request.json();
//     if (data.isFundraising && data.amount) {
//       data.amount = Number(data.amount); // Ensure amount is a number
//     }
//     const post = new Post(data);
//     await post.save();
//     return NextResponse.json(post, { status: 201 });
//   } catch (error) {
//     console.error("Error in POST /api/community:", error);
//     return NextResponse.json(
//       { error: "Failed to create post", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// *************************************2nd version***************************************

// import { NextResponse } from "next/server";
// import { connect } from "@/dbConfig/dbConfig";
// import Post from "@/models/postModel";

// export async function GET() {
//   try {
//     await connect();
//     console.log("Fetching posts...");
//     const posts = await Post.find().sort({ createdAt: -1 });
//     console.log("Posts fetched successfully:", posts.length);
//     return NextResponse.json(posts);
//   } catch (error) {
//     console.error("Error in GET /api/community:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch posts", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     await connect();
//     const data = await request.json();
//     if (data.isFundraising && data.amount) {
//       data.amount = Number(data.amount); // Ensure amount is a number
//     }
//     const post = new Post(data);
//     await post.save();
//     return NextResponse.json(post, { status: 201 });
//   } catch (error) {
//     console.error("Error in POST /api/community:", error);
//     return NextResponse.json(
//       { error: "Failed to create post", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// *************************************3rd version***************************************

import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";

export async function POST(request) {
  try {
    await connect();
    const data = await request.json();
    if (data.isFundraising) {
      data.amount = Number(data.amount);
      data.raised = 0; // Initialize raised amount
    }
    const post = new Post(data);
    await post.save();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/community:", error);
    return NextResponse.json(
      { error: "Failed to create post", details: error.message },
      { status: 500 }
    );
  }
}

// Existing GET handler remains unchanged
export async function GET() {
  try {
    await connect();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error in GET /api/community:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts", details: error.message },
      { status: 500 }
    );
  }
}