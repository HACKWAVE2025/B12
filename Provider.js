import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number, // years of experience
    default: 0,
  },
  contact: {
    email: String,
    phone: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  bio: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Provider", providerSchema);
