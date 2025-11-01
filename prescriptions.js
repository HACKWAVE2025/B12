import express from "express";
import Prescription from "../models/Prescription.js";
const router = express.Router();
router.get("/", async (_, res) => res.json(await Prescription.find()));
export default router;
