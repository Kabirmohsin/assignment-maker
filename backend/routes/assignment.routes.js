import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  generateAssignment,
  saveAssignment
} from "../controllers/assignment.controller.js";

const router = express.Router();

// ✅ GENERATE (AI) — PUBLIC (NO LOGIN)
router.post("/generate", generateAssignment);

// 🔐 SAVE (MongoDB) — LOGIN REQUIRED
router.post("/save", authMiddleware, saveAssignment);

export default router;
