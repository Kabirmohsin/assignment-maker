import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import assignmentRoutes from "./routes/assignment.routes.js";
import authRoutes from "./routes/auth.routes.js"; // ✅ MISSING THA

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);          // 🔥 LOGIN / REGISTER
app.use("/api/assignments", assignmentRoutes);

// ✅ DB CONNECT FIRST, THEN SERVER START
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
