import mongoose from "mongoose";

/* QUESTION SUB-SCHEMA */
const questionSchema = new mongoose.Schema({
  text: String,
  type: { type: String, default: "short" },
  marks: Number,
  answer: String
});

/* ASSIGNMENT SCHEMA */
const assignmentSchema = new mongoose.Schema(
  {
    // 🔥 USER LINK (MOST IMPORTANT)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: String,
    subject: String,
    topic: String,
    gradeLevel: String,
    difficulty: String,
    instructions: String,

    questions: [questionSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);
