// import mongoose from "mongoose";


// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   isFundraising: { type: Boolean, default: false },
//   amount: { type: Number, default: null },
//   reason: { type: String, default: null },
//   location: { type: String, default: null }, // New field for location
//   author: { type: String, required: true }, // New field for the author's name
//   votes: { type: Number, default: 0 },
//   createdAt: { type: Date, default: Date.now },
// });

// const PostSchema = mongoose.models.PostSchema || mongoose.model("PostSchema", postSchema);

// export default PostSchema;

// import mongoose from "mongoose";

// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   isFundraising: { type: Boolean, default: false },
//   amount: { type: Number, default: null },
//   reason: { type: String, default: null },
//   location: { type: String, default: null },
//   author: { type: String, required: true },
//   votes: { type: Number, default: 0 },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Post || mongoose.model("Post", postSchema); // Correct export

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isFundraising: { type: Boolean, default: false },
  amount: { type: Number, default: null }, // Total amount needed
  raised: { type: Number, default: 0 }, // Total amount raised
  reason: { type: String, default: null },
  location: { type: String, default: null },
  author: { type: String, required: true },
  votes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);