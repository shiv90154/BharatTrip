import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI;

if (!MONGO_URL) {
  throw new Error("❌ MONGO_URI is missing in environment variables");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB Connected:", conn.connection.host);
    
    return conn;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
