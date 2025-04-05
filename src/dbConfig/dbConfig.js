import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/krishismart";

if (!MONGODB_URI) {
  console.error("MONGO_URI is not defined in .env");
  throw new Error("Please define the MONGO_URI environment variable");
}

let cachedConnection = null;

export async function connect() {
  if (cachedConnection) {
    console.log("Using cached database connection");
    return cachedConnection;
  }

  try {
    console.log("Connecting to MongoDB at:", MONGODB_URI);

    // Set up event listeners on mongoose.connection before connecting
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });

    cachedConnection = mongoose.connection;
    return cachedConnection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
}