export default function AnalysisCard({ report }) {
  if (!report) {
    return (
      <section className="analysis-section glass empty-report">
        <h2>Your AI report will appear here</h2>
        <p>Upload a resume and generate your first analysis.</p>
      </section>
    );
  }

  const { analysis } = report;

  return (
    <section className="analysis-section">
      <div className="analysis-card glass">
        <div className="report-top">
          <div>
            <h2>{report.role}</h2>
            <p>{report.fileName} • {report.date}</p>
          </div>

          <button type="button" className="secondary-btn" onClick={() => window.print()}>
            Download / Print Report
          </button>
        </div>

        <div className="score-circle">
          <span>{analysis.atsScore}</span>
          <small>ATS Score</small>
        </div>

        <div className="analysis-grid">
          <Result title="Strengths" items={analysis.strengths} />
          <Result title="Weaknesses" items={analysis.weaknesses} />
          <Result title="Missing Skills" items={analysis.missingSkills} />
          <Result title="Suggested Improvements" items={analysis.improvements} />
        </div>

        <div className="summary-box glass">
          <h3>Improved Professional Summary</h3>
          <p>{analysis.improvedSummary}</p>
        </div>

        <div className="summary-box glass">
          <h3>Hiring Recommendation</h3>
          <p>{analysis.recommendation}</p>
        </div>
      </div>
    </section>
  );
}

function Result({ title, items }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}