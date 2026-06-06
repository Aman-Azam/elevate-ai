import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTrendingUp, FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="badge">AI Resume Optimization Platform</div>

        <h1>
          Turn your resume into an
          <span> interview-winning profile.</span>
        </h1>

        <p>
          Upload your resume, choose a target role, and receive an AI-powered
          ATS score, skill-gap analysis, recruiter-style feedback, and a stronger
          professional summary.
        </p>

        <div className="hero-actions">
          <Link className="primary-btn" to="/signup">Analyze Resume</Link>
          <a className="secondary-btn" href="#how">See how it works</a>
        </div>

        <div className="hero-points">
          <span><FiCheckCircle /> ATS Score</span>
          <span><FiTrendingUp /> Skill Gaps</span>
          <span><FiZap /> Instant Feedback</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-right glass"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="scan-line" />

        <div className="report-preview">
          <p className="mini-title">Live Resume Report</p>

          <div className="big-score">
            <span>87</span>
            <small>/100</small>
          </div>

          <div className="report-bars">
            <ReportBar label="Keywords" value="88%" width="88%" />
            <ReportBar label="Formatting" value="80%" width="80%" />
            <ReportBar label="Projects" value="91%" width="91%" />
          </div>

          <div className="recommendation">
            <strong>Hiring Recommendation</strong>
            <p>Strong candidate. Add more measurable achievements.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ReportBar({ label, value, width }) {
  return (
    <div className="report-bar">
      <div>
        <span>{label}</span>
        <b>{value}</b>
      </div>
      <i>
        <em style={{ width }} />
      </i>
    </div>
  );
}