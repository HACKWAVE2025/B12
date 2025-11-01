import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  visitDate: {
    type: Date,
    default: Date.now,
  },
  doctorName: {
    type: String,
  },
  diagnosis: {
    type: String,
  },
  prescriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescription",
    },
  ],
  notes: {
    type: String,
  },
});

export default mongoose.model("History", historySchema);
