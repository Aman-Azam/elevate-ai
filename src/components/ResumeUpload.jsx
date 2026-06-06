import { useState } from "react";
import { saveReport } from "../utils/localStorage";

export default function ResumeUpload({ onAnalysisComplete = () => {} }) {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");

  function handleAnalyze() {
    if (!file || !role.trim()) {
      alert("Upload a resume and enter a role first.");
      return;
    }

    const report = {
      id: Date.now(),
      fileName: file.name,
      role,
      date: new Date().toLocaleDateString(),
      analysis: {
        atsScore: 84,
        strengths: [
          "Strong frontend project experience",
          "Good React and JavaScript foundation",
          "Clear portfolio-style project work"
        ],
        weaknesses: [
          "Needs more measurable achievements",
          "Could include more role-specific keywords",
          "Professional summary can be stronger"
        ],
        missingSkills: [
          "TypeScript",
          "Unit Testing",
          "Cloud Deployment"
        ],
        improvements: [
          "Add numbers to achievements",
          "Include more keywords from the job description",
          "Highlight deployed projects",
          "Move strongest projects higher"
        ],
        improvedSummary:
          "Frontend developer with hands-on experience building responsive React applications, AI-powered tools, and modern user interfaces. Skilled in JavaScript, component-based design, API integration, and creating user-focused digital products.",
        recommendation:
          "Good candidate profile. Improve measurable achievements and add more target-role keywords before applying."
      }
    };

    saveReport(report);
    onAnalysisComplete(report);
  }

  return (
    <section className="upload-section glass">
      <div className="upload-header">
        <h2>Resume Analysis</h2>
        <p>Upload your resume and choose a target position.</p>
      </div>

      <div className="upload-grid">
        <label className="upload-box">
          <div className="upload-icon">📄</div>
          <h3>{file ? file.name : "Upload Resume"}</h3>
          <p>PDF resumes only</p>

          <input
            type="file"
            accept=".pdf"
            className="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <div className="role-box">
          <label>Target Role</label>

          <input
            className="role-input"
            type="text"
            placeholder="Frontend Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <button type="button" className="primary-btn full" onClick={handleAnalyze}>
            Analyze Resume
          </button>
        </div>
      </div>
    </section>
  );
}