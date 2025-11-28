import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  state: { type: String, required: true },
  images: [String],
  about: String,
  highlights: [String],
  included: [String],
  excluded: [String],
  itinerary: [
    {
      day: Number,
      title: String,
      details: String
    }
  ]
}, { timestamps: true });

export default mongoose.models.Package || mongoose.model("Package", PackageSchema);
