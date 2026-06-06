import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import {
  FiUploadCloud,
  FiTarget,
  FiTrendingUp,
  FiFileText,
  FiShield,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <Navbar />

      <Hero />

      <section className="trust-strip">
        <span>ATS Score</span>
        <span>AI Feedback</span>
        <span>Skill Gaps</span>
        <span>PDF Report</span>
        <span>Dashboard</span>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <div className="badge">Features</div>

          <h2>Everything needed to improve your resume.</h2>

          <p>
            Resume Checker AI combines PDF extraction,
            ATS scoring, Gemini AI feedback,
            professional summaries and downloadable reports.
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            icon={<FiUploadCloud />}
            title="PDF Resume Upload"
            text="Upload your resume and extract text directly from PDF files."
          />

          <Feature
            icon={<FiTarget />}
            title="ATS Score"
            text="Get a realistic AI-estimated ATS score."
          />

          <Feature
            icon={<FiTrendingUp />}
            title="Skill Gap Analysis"
            text="Discover missing skills recruiters expect."
          />

          <Feature
            icon={<FiFileText />}
            title="Improved Summary"
            text="Generate a stronger professional summary."
          />

          <Feature
            icon={<FiShield />}
            title="Saved Reports"
            text="Store previous analyses and compare results."
          />

          <Feature
            icon={<FiZap />}
            title="Fast AI Feedback"
            text="Receive actionable recommendations instantly."
          />
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-heading">
          <div className="badge">How It Works</div>

          <h2>Three simple steps.</h2>
        </div>

        <div className="steps-grid">
          <Step
            number="01"
            title="Upload Resume"
            text="Upload your PDF resume."
          />

          <Step
            number="02"
            title="Choose Target Role"
            text="Enter your desired job position."
          />

          <Step
            number="03"
            title="Get AI Report"
            text="Receive ATS score and improvement suggestions."
          />
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-heading">
          <div className="badge">Pricing</div>

          <h2>Free Portfolio Edition</h2>
        </div>

        <div className="pricing-card glass">
          <h3>Starter</h3>

          <div className="price">$0</div>

          <ul>
            <li>
              <FiCheckCircle />
              Resume Upload
            </li>

            <li>
              <FiCheckCircle />
              ATS Score
            </li>

            <li>
              <FiCheckCircle />
              Gemini AI Analysis
            </li>

            <li>
              <FiCheckCircle />
              Saved Reports
            </li>

            <li>
              <FiCheckCircle />
              PDF Export
            </li>
          </ul>

          <Link to="/signup" className="primary-btn full">
            Start Free
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div className="badge">Testimonials</div>

          <h2>Trusted by ambitious job seekers.</h2>
        </div>

        <div className="testimonial-grid">
          <Quote text="The ATS breakdown instantly showed what my resume was missing." />

          <Quote text="Feels like a premium SaaS product. Very useful." />

          <Quote text="Helped me improve my resume before applying to internships." />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-heading">
          <div className="badge">FAQ</div>

          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq">
          <FAQ
            question="Is Resume Checker AI free?"
            answer="Yes. This portfolio version is completely free."
          />

          <FAQ
            question="Does it support PDF resumes?"
            answer="Yes. Upload your PDF and the app extracts resume content."
          />

          <FAQ
            question="Can I save reports?"
            answer="Yes. Reports can be stored locally."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card glass">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step-card glass">
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Quote({ text }) {
  return (
    <div className="testimonial-card glass">
      <p>"{text}"</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="faq-item glass">
      <h3>{question}</h3>

      <p>{answer}</p>
    </div>
  );
}