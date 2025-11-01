import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  medicines: [
    {
      name: String,
      dosage: String,
      duration: String,
    },
  ],
  diagnosis: {
    type: String,
  },
  dateIssued: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
});

export default mongoose.model("Prescription", prescriptionSchema);

