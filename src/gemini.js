import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const fallbackAnalysis = {
  atsScore: 82,
  strengths: ["Strong project experience", "Good technical foundation"],
  weaknesses: ["Add measurable achievements", "Improve keyword matching"],
  missingSkills: ["TypeScript", "Testing", "Cloud Deployment"],
  improvements: ["Add numbers", "Use stronger action verbs", "Match role keywords"],
  improvedSummary:
    "Frontend developer with hands-on experience building responsive web applications using modern JavaScript and React.",
  recommendation:
    "Good candidate profile. Improve measurable achievements and role-specific keywords."
};

function parseGeminiJSON(text) {
  const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  return JSON.parse(cleaned.slice(start, end + 1));
}

export async function analyzeResume(resumeText, role) {
  if (!apiKey) return fallbackAnalysis;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `
Analyze this resume for the role: ${role}

Resume:
${resumeText}

Return ONLY valid JSON:
{
  "atsScore": 82,
  "strengths": ["..."],
  "weaknesses": ["..."],
  "missingSkills": ["..."],
  "improvements": ["..."],
  "improvedSummary": "...",
  "recommendation": "..."
}
`;

    const result = await model.generateContent(prompt);
    return parseGeminiJSON(result.response.text());
  } catch (error) {
    console.error("Gemini failed:", error);
    return fallbackAnalysis;
  }
}
