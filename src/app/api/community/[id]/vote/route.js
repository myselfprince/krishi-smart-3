import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";

export async function POST(request, context) {
  try {
    await connect();
    const { id } =  await context.params; // Access params from context directly
    const { voteType } = await request.json(); // Extract voteType from the request body

    // Find the post by ID
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Update votes based on voteType
    if (voteType === "upvote") {
      post.votes += 1;
    } else if (voteType === "downvote") {
      post.votes -= 1;
    } else {
      return NextResponse.json({ error: "Invalid vote type" }, { status: 400 });
    }

    await post.save();
    return NextResponse.json({ votes: post.votes });
  } catch (error) {
    console.error("Error in POST /api/community/[id]/vote:", error);
    return NextResponse.json(
      { error: "Failed to vote on post", details: error.message },
      { status: 500 }
    );
  }
}