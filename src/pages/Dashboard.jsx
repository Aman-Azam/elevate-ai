import ResumeUpload from "../components/ResumeUpload";
import AnalysisCard from "../components/AnalysisCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <Navbar />

      <section className="dashboard-header">
        <div className="badge">AI Resume Dashboard</div>
        <h1>Your resume analysis workspace.</h1>
        <p>
          Upload your resume, choose a target role, and generate an AI-powered
          ATS report.
        </p>
      </section>

      <ResumeUpload />

      <AnalysisCard />

      <section className="saved-section glass">
        <h2>Saved Resume Reports</h2>
        <p className="saved-subtitle">
          Your previous resume checks will appear here.
        </p>

        <div className="saved-grid">
          <div className="saved-card">
            <h3>Frontend Developer</h3>
            <span>ATS Score: 87</span>
          </div>

          <div className="saved-card">
            <h3>Software Engineer Intern</h3>
            <span>ATS Score: 82</span>
          </div>

          <div className="saved-card">
            <h3>React Developer</h3>
            <span>ATS Score: 91</span>
          </div>
        </div>
      </section>
    </main>
  );
}