import api from "./api";

class AssignmentService {

  async createAssignment(assignmentData) {
    try {
      const res = await api.post("/assignments/generate", {
        subject: assignmentData.subject,
        topic: assignmentData.topic,
        gradeLevel: assignmentData.gradeLevel,
        difficulty: assignmentData.difficulty,
        numQuestions: assignmentData.numQuestions || 5,
        includeAnswers: assignmentData.includeAnswers,
      });

      // 🔥 SAFETY
      if (!res.data?.assignment?.questions) {
        return {
          success: false,
          error: "AI did not generate any questions"
        };
      }

      return {
        success: true,
        assignment: {
          ...assignmentData,
          questions: res.data.assignment.questions,
        },
        generatedContent: res.data.generatedContent,
      };

    } catch (error) {
      console.error("Create Assignment Error:", error);
      return {
        success: false,
        error: "Failed to generate assignment",
      };
    }
  }

  async saveAsDraft(assignmentData) {
    try {
      const res = await api.post("/assignments/save", {
        title: assignmentData.title,
        subject: assignmentData.subject,
        topic: assignmentData.topic,
        gradeLevel: assignmentData.gradeLevel,
        difficulty: assignmentData.difficulty,
        instructions: assignmentData.instructions,
        questions: assignmentData.questions,
      });

      return {
        success: true,
        draft: res.data.assignment,
      };
    } catch (error) {
      return {
        success: false,
        error: "Failed to save assignment",
      };
    }
  }
}

export default new AssignmentService();
