import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  travelDate: { type: String, required: true },
  adults: { type: Number, default: 1 },
  children: { type: Number, default: 0 },
  status: { type: String, default: "Pending" }, // Pending, Confirmed, Cancelled
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
