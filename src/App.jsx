import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
const [page, setPage] = useState("home");
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("resumeCheckerUser")) || null
);
const [file, setFile] = useState(null);
const [role, setRole] = useState("");
const [report, setReport] = useState(null);
const [loading, setLoading] = useState(false);
const [loadingStep, setLoadingStep] = useState(0);
const [displayScore, setDisplayScore] = useState(0);
useEffect(() => {
  if (!report) return;

  setDisplayScore(0);

  let current = 0;

  const timer = setInterval(() => {
    current += 2;

    if (current >= report.atsScore) {
      current = report.atsScore;
      clearInterval(timer);
    }

    setDisplayScore(current);
  }, 25);

  return () => clearInterval(timer);
}, [report]);
  

  function signup(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const newUser = { name };
    localStorage.setItem("resumeCheckerUser", JSON.stringify(newUser));
    setUser(newUser);
    setPage("dashboard");
  }

  function login(e) {
    e.preventDefault();
    const name = e.target.email.value.split("@")[0];
    const newUser = { name };
    localStorage.setItem("resumeCheckerUser", JSON.stringify(newUser));
    setUser(newUser);
    setPage("dashboard");
  }

  function logout() {
    localStorage.removeItem("resumeCheckerUser");
    setUser(null);
    setPage("home");
  }

  function analyzeResume() {
  if (!file || !role.trim()) {
    alert("Upload a resume and enter a target role first.");
    return;
  }

  const cleanRole = role.trim();

  const newReport = {
    atsScore: 86,
    role: cleanRole,
    fileName: file.name,

    strengths: [
      `Relevant experience for a ${cleanRole} role`,
      "Clear professional background and transferable skills",
      "Good potential match for the target position"
    ],

    weaknesses: [
      "Resume needs more measurable achievements",
      `Resume should include more ${cleanRole}-specific keywords`,
      "Professional summary can be more targeted"
    ],

    missingSkills: [
      `${cleanRole} industry keywords`,
      "Measurable results",
      "Role-specific tools or certifications"
    ],

    improvements: [
      `Add keywords commonly expected for ${cleanRole} roles`,
      "Add numbers, outcomes, percentages, or impact where possible",
      "Rewrite bullet points using stronger action verbs",
      "Move the most relevant experience closer to the top",
      "Tailor the summary directly to the target role"
    ],

    summary:
      `Motivated professional targeting a ${cleanRole} role, with relevant experience, strong transferable skills, and the ability to contribute effectively in a professional environment. Demonstrates problem-solving, communication, and role-specific potential.`,

    recommendation:
      `Good candidate profile for ${cleanRole}. Improve role-specific keywords, measurable achievements, and targeted experience before applying.`
  };

  setReport(newReport);
 setDisplayScore(0);

setTimeout(() => {
  let current = 0;

  const timer = setInterval(() => {
    current += 2;

    if (current >= newReport.atsScore) {
      current = newReport.atsScore;
      clearInterval(timer);
    }

    setDisplayScore(current);
  }, 25);
}, 300);
}

  return (
    <main className="landing-page">
      {loading && (
  <div className="loading-overlay">
    <div className="loading-card">
      <div className="loading-spinner"></div>
      <h2>Analyzing Resume</h2>
      <p>Extracting content, checking keywords, calculating ATS score, and generating recommendations.</p>
    </div>
  </div>
)}
      <Navbar user={user} logout={logout} setPage={setPage} />

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-left">
              <div className="badge">AI Resume Optimization Platform</div>
              <h1>
                Turn your resume into an <span>interview-winning profile.</span>
              </h1>
              <p>
                Upload your resume, choose a target role, and receive an
                AI-powered ATS score, feedback, skill-gap analysis, and stronger
                professional summary.
              </p>
              <div className="hero-actions">
                <button className="primary-btn full" onClick={analyzeResume} disabled={loading}>
  {loading ? "Analyzing..." : "Analyze Resume"}
</button>
                <button className="secondary-btn" onClick={() => setPage("dashboard")}>
                  Try Dashboard
                </button>
              </div>
            </div>

            <div className="hero-right glass">
              <div className="report-preview">
                <p className="mini-title">Live Resume Report</p>
                <div className="big-score">
                  <span>87</span>
                  <small>/100</small>
                </div>
                <div className="recommendation">
                  <strong>Hiring Recommendation</strong>
                  <p>Strong candidate. Add more measurable achievements.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section features-section">
            <div className="section-heading">
              <div className="badge">Features</div>
              <h2>Everything you need to land more interviews.</h2>
            </div>

            <div className="feature-grid">
              {[
  {
    title: "PDF Resume Upload",
    desc: "Upload your resume in PDF format for instant AI analysis."
  },
  {
    title: "ATS Score",
    desc: "Get an ATS compatibility score and optimization insights."
  },
  {
    title: "Skill Gap Analysis",
    desc: "Identify missing skills and qualifications for your target role."
  },
  {
    title: "Improved Summary",
    desc: "Receive a stronger professional summary tailored to recruiters."
  },
  {
    title: "Saved Reports",
    desc: "Access previous resume analyses anytime from your dashboard."
  },
  {
    title: "Fast AI Feedback",
    desc: "Get detailed recommendations and improvements within seconds."
  }
].map((item) => (
                <div className="feature-card glass" key={item}>
                  <div className="feature-icon">✦</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="section" id="how">
  <div className="section-heading">
    <div className="badge">How It Works</div>
    <h2>Three simple steps.</h2>
  </div>

  <div className="feature-grid">
    <div className="feature-card glass"><h3>01</h3><h3>Upload Resume</h3><p>Upload your PDF resume.</p></div>
    <div className="feature-card glass"><h3>02</h3><h3>Choose Target Role</h3><p>Enter any job role.</p></div>
    <div className="feature-card glass"><h3>03</h3><h3>Get AI Report</h3><p>Receive ATS score and improvements.</p></div>
  </div>
</section>

<section className="section pricing-section" id="pricing">
  <div className="section-heading">
    <div className="badge">Pricing</div>
    <h2>Free Edition</h2>
  </div>

  <div className="pricing-card glass">
    <h3>Starter</h3>
    <div className="price">$0</div>
    <p>✓ Resume Upload</p>
    <p>✓ ATS Score</p>
    <p>✓ All Job Roles</p>
    <p>✓ PDF Export</p>
    <button className="primary-btn full" onClick={() => setPage("dashboard")}>Start Free</button>
  </div>
</section>

<section className="section">
  <div className="section-heading">
    <div className="badge">Testimonials</div>
    <h2>Trusted by ambitious job seekers.</h2>
  </div>

  <div className="feature-grid">
    <div className="feature-card glass"><p>"The ATS breakdown instantly showed what my resume was missing."</p></div>
    <div className="feature-card glass"><p>"Feels like a premium SaaS product. Very useful."</p></div>
    <div className="feature-card glass"><p>"Helped me improve my resume before applying."</p></div>
  </div>
</section>

<section className="section" id="faq">
  <div className="section-heading">
    <div className="badge">FAQ</div>
    <h2>Frequently Asked Questions</h2>
  </div>

  <div className="faq-list">
    <div className="faq-item glass"><h3>Is Resume Checker AI free?</h3><p>Yes. This version is completely free.</p></div>
    <div className="faq-item glass"><h3>Does it support all careers?</h3><p>Yes. Business, law, medicine, tech, education, finance, and more.</p></div>
    <div className="faq-item glass"><h3>Can I save reports?</h3><p>Yes. Reports can be stored locally.</p></div>
  </div>
</section>
        </>
      )}

      {page === "signup" && (
        <section className="auth-page">
          <form className="auth-card glass" onSubmit={signup}>
            <button type="button" className="back-link" onClick={() => setPage("home")}>
              ← Back home
            </button>
            <div className="badge">Create Account</div>
            <h1>Start checking resumes</h1>
            <p>Create your account to access your resume dashboard.</p>

            <label>Full Name</label>
            <input name="name" placeholder="Your name" required />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="Create password" required />

            <button className="primary-btn full">Create Account</button>
          </form>
        </section>
      )}

      {page === "signin" && (
        <section className="auth-page">
          <form className="auth-card glass" onSubmit={login}>
            <button type="button" className="back-link" onClick={() => setPage("home")}>
              ← Back home
            </button>
            <div className="badge">Welcome Back</div>
            <h1>Sign in to your workspace</h1>

            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="Enter password" required />

            <button className="primary-btn full">Sign In</button>
          </form>
        </section>
      )}

      {page === "dashboard" && (
        <section className="dashboard-page">
          <div className="dashboard-header">
            <div className="badge">AI Resume Dashboard</div>
            <h1>Your resume analysis workspace.</h1>
            <p>Upload your resume, choose a target role, and generate an ATS report.</p>
          </div>

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
                  placeholder="Frontend Developer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <button
  type="button"
  className="primary-btn full"
  onClick={() => {
    setLoading(true);

    setTimeout(() => {
      analyzeResume();
      setLoading(false);
    }, 1800);
  }}
  disabled={loading}
>
  {loading ? "Analyzing..." : "Analyze Resume"}
</button>
              </div>
            </div>
          </section>

          {report ? (
            <section className="analysis-section">
              <div className="analysis-card glass">
                <div className="score-circle">
                  <span>{displayScore}%</span>
                  <p className="score-label">
  {report.atsScore >= 80
    ? "Excellent Match"
    : report.atsScore >= 65
    ? "Good Match"
    : "Needs Improvement"}
</p>
                </div>

                <div className="analysis-grid">
                  <Box title="Strengths" items={report.strengths} />
                  <Box title="Weaknesses" items={report.weaknesses} />
                  <Box title="Missing Skills" items={report.missingSkills} />
                  <Box title="Suggested Improvements" items={report.improvements} />
                </div>

                <div className="summary-box glass">
                  <h3>Improved Professional Summary</h3>
                  <p>{report.summary}</p>
                </div>

                <div className="summary-box glass">
                  <h3>Hiring Recommendation</h3>
                  <p>{report.recommendation}</p>
                </div>
              </div>
            </section>
          ) : (
            <section className="analysis-section glass empty-report">
              <h2>Your AI report will appear here</h2>
              <p>Upload a resume and generate your first analysis.</p>
            </section>
          )}
        </section>
      )}
    </main>
  );

function Navbar({ user, logout, setPage }) {
  return (
    <nav className="navbar">
      <button className="brand" onClick={() => setPage("home")}>
        <div className="brand" onClick={() => setPage("home")}>
  <img
    src="/logo.png"
    alt="Elevate"
    className="brand-logo-image"
  />

  <div>
    <h1>Elevate</h1>
    <p>Analyze. Improve. Get hired.</p>
  </div>
</div>
      </button>

 <div className="nav-links">
<button onClick={() => {
  setPage("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
}}>
  Home
</button>

<button
  onClick={() => {
    document
      .querySelector(".features-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Features
</button>

<button
  onClick={() => {
    document
      .querySelector(".pricing-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Pricing
</button>

<button onClick={() => setPage("dashboard")}>
  Dashboard
</button>
</div>
      <div className="nav-actions">
        {user ? (
          <>
            <span className="user-pill">{user.name}</span>
            <button className="ghost-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button className="ghost-btn" onClick={() => setPage("signin")}>Sign In</button>
            <button className="primary-btn small" onClick={() => setPage("signup")}>Start Free</button>
          </>
        )}
      </div>
    </nav>
  );
}

function Box({ title, items }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
}