import axios from "axios";

export async function generateQuestionsWithOpenRouter({
  subject,
  topic,
  gradeLevel,
  difficulty,
  numQuestions = 5,
  includeAnswers
}) {
  try {
    const prompt = `
You are a teacher.

Generate ${numQuestions} questions ONLY.

Subject: ${subject}
Topic: ${topic}
Grade Level: ${gradeLevel}
Difficulty: ${difficulty}

Return STRICT JSON ARRAY only.

Format:
[
  {
    "text": "question text",
    "type": "short | essay | multiple",
    "marks": 2,
    ${includeAnswers ? `"answer": "answer text"` : ""}
  }
]

Rules:
- No markdown
- No explanation
- No extra text
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.4
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Assignment Maker"
        }
      }
    );

    let raw = response.data?.choices?.[0]?.message?.content;

    if (!raw) {
      console.error("❌ Empty AI response");
      return [];
    }

    // 🔥 CLEAN MARKDOWN / EXTRA TEXT
    raw = raw.replace(/```json|```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error("❌ Invalid JSON from AI:", raw);
      return [];
    }

    // 🔥 FORCE ARRAY
    if (!Array.isArray(parsed)) {
      console.error("❌ AI response is not array:", parsed);
      return [];
    }

    return parsed;

  } catch (error) {
    console.error("❌ OpenRouter API error:", error.message);
    return [];
  }
}
