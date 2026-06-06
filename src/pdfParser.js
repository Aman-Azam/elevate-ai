export async function extractTextFromPDF(file) {
  return `
Resume file uploaded: ${file.name}

This is demo resume content extracted for analysis.
Skills: JavaScript, React, HTML, CSS, Git, responsive design, API integration.
Projects: AI web applications, portfolio projects, frontend dashboards.
Experience: Built modern user interfaces, deployed apps, worked with forms and components.
Education: Computer Science / Software Development.
  `;
}