import express from "express";
import Provider from "../models/Provider.js";
const router = express.Router();

router.get("/", async (_, res) => res.json(await Provider.find()));
export default router;
