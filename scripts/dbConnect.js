import mongoose from "mongoose";

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect("mongodb://127.0.0.1:27017/bharattrip", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected for Seeding ✔");
};
