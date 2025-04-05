// import { NextResponse } from "next/server";
// import { connect } from "@/dbConfig/dbConfig";
// import Post from "@/models/postModel";

// export async function POST(request, { params }) {
//   try {
//     await connect();
//     const { id } = params;
//     const { amount } = await request.json();

//     const post = await Post.findById(id);
//     if (!post || !post.isFundraising) {
//       return NextResponse.json(
//         { error: "Post not found or not a fundraising post" },
//         { status: 404 }
//       );
//     }

//     const remaining = post.amount - post.raised;
//     if (amount <= 0 || amount > remaining) {
//       return NextResponse.json(
//         { error: "Invalid donation amount" },
//         { status: 400 }
//       );
//     }

//     post.raised += amount;
//     await post.save();

//     return NextResponse.json({ raised: post.raised });
//   } catch (error) {
//     console.error("Error in POST /api/community/[id]/donate:", error);
//     return NextResponse.json(
//       { error: "Failed to process donation", details: error.message },
//       { status: 500 }
//     );
//   }
// }
// src/app/api/community/[id]/donate/route.js
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";

export async function POST(request, { params }) {
  try {
    await connect();
    const { id } = params;
    let { amount } = await request.json();
    amount = Number(amount);

    const post = await Post.findById(id);
    if (!post || !post.isFundraising) {
      return NextResponse.json(
        { error: "Post not found or not a fundraising post" },
        { status: 404 }
      );
    }

    const remaining = post.amount - post.raised;
    if (remaining <= 0) {
      return NextResponse.json(
        { error: "Fundraising goal already met" },
        { status: 400 }
      );
    }

    // Cap the donation at the remaining amount
    if (amount > remaining) {
      amount = remaining;
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: "Invalid donation amount" },
        { status: 400 }
      );
    }

    post.raised += amount;
    await post.save();

    return NextResponse.json({ raised: post.raised });
  } catch (error) {
    console.error("Error in POST /api/community/[id]/donate:", error);
    return NextResponse.json(
      { error: "Failed to process donation", details: error.message },
      { status: 500 }
    );
  }
}