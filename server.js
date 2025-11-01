import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import chatRoutes from "./routes/chat.js";
import providerRoutes from "./routes/providers.js";
import prescriptionRoutes from "./routes/prescriptions.js";
import historyRoutes from "./routes/history.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/history", historyRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/healthbot", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

app.get("/", (req, res) => res.send("Health Chat Bot Backend Running"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
