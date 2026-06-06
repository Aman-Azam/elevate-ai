export function saveReport(report) {
  const reports = getReports();
  const updated = [report, ...reports].slice(0, 10);
  localStorage.setItem("resumeCheckerReports", JSON.stringify(updated));
}

export function getReports() {
  try {
    return JSON.parse(localStorage.getItem("resumeCheckerReports")) || [];
  } catch {
    return [];
  }
}