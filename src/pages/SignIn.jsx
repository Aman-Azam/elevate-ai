import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const savedUser = JSON.parse(localStorage.getItem("resumeCheckerUser"));

    localStorage.setItem(
      "resumeCheckerUser",
      JSON.stringify({
        name: savedUser?.name || email.split("@")[0],
        email,
      })
    );

    navigate("/dashboard");
  }

  return (
    <main className="auth-page">
      <form className="auth-card glass" onSubmit={handleSubmit}>
        <Link to="/" className="back-link">← Back home</Link>

        <div className="badge">Welcome Back</div>
        <h1>Sign in to your workspace</h1>
        <p>Access your resume dashboard and saved AI reports.</p>

        <label>Email</label>
        <input name="email" type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input name="password" type="password" placeholder="Enter password" required />

        <button className="primary-btn full">Sign In</button>

        <p className="auth-switch">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </main>
  );
}