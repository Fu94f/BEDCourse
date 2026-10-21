import "dotenv/config";
import mongoose from "mongoose";

export function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Could not connect to MongoDB:", error);
    });
}