import Assignment from "../models/Assignment.js";
import { generateQuestionsWithOpenRouter } from "../services/openrouter.service.js";

/* =========================
   GENERATE ASSIGNMENT (AI)
========================= */
export const generateAssignment = async (req, res) => {
  try {
    const {
      title,
      subject,
      topic,
      gradeLevel,
      difficulty,
      numQuestions,
      instructions,
      includeAnswers
    } = req.body;

    if (!subject || !topic) {
      return res.status(400).json({
        success: false,
        message: "Subject & topic required"
      });
    }

    const questions = await generateQuestionsWithOpenRouter({
      subject,
      topic,
      gradeLevel,
      difficulty,
      numQuestions,
      includeAnswers
    });

    // 🔥 MOST IMPORTANT SAFETY CHECK
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "AI did not generate any questions"
      });
    }

 res.status(200).json({
  success: true,
  assignment: {
    title,
    subject,
    topic,
    gradeLevel,
    difficulty,
    instructions,
    questions
  },
  generatedContent: questions
    .map((q, i) => `${i + 1}. ${q.text}`)
    .join("\n\n")
});

  } catch (error) {
    console.error("❌ Assignment generation error:", error);
    res.status(500).json({
      success: false,
      message: "Assignment generation failed"
    });
  }
};

/* =========================
   SAVE ASSIGNMENT (MongoDB)
========================= */
export const saveAssignment = async (req, res) => {
  try {
    const {
      title,
      subject,
      topic,
      gradeLevel,
      difficulty,
      instructions,
      questions
    } = req.body;

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No questions to save"
      });
    }

    const assignment = await Assignment.create({
      user: req.userId, // JWT se
      title,
      subject,
      topic,
      gradeLevel,
      difficulty,
      instructions,
      questions
    });

    res.status(201).json({
      success: true,
      message: "Assignment saved successfully",
      assignment
    });

  } catch (error) {
    console.error("❌ Assignment save error:", error);
    res.status(500).json({
      success: false,
      message: "Assignment save failed"
    });
  }
};
