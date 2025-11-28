import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Destination || mongoose.model("Destination", DestinationSchema);
