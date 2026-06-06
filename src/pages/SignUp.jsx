import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    localStorage.setItem(
      "resumeCheckerUser",
      JSON.stringify({ name, email })
    );

    navigate("/dashboard");
  }

  return (
    <main className="auth-page">
      <form className="auth-card glass" onSubmit={handleSubmit}>
        <Link to="/" className="back-link">← Back home</Link>

        <div className="badge">Create Account</div>
        <h1>Start checking resumes</h1>
        <p>Create your account to access your resume dashboard.</p>

        <label>Full Name</label>
        <input name="name" type="text" placeholder="Your name" required />

        <label>Email</label>
        <input name="email" type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input name="password" type="password" placeholder="Create password" required />

        <button className="primary-btn full">Create Account</button>

        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </main>
  );
}