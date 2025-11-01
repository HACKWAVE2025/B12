import express from "express";
import Message from "../models/Message.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

router.post("/", async (req, res) => {
  const { sender, message } = req.body;
  const newMsg = new Message({ sender, message });
  await newMsg.save();
  res.json(newMsg);
});

export default router;
