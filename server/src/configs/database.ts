import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};