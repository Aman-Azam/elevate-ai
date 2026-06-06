import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("resumeCheckerUser"));

  function logout() {
    localStorage.removeItem("resumeCheckerUser");
    window.location.href = "/";
  }

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
       <img
  src="/logo.png"
  alt="Elevate"
  className="brand-logo-image"
/>

<div>
  <h1>Elevate</h1>
  <p>Analyze. Improve. Get hired.</p>
</div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="user-pill">{user.name}</span>
            <button className="ghost-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="ghost-btn">Sign In</Link>
            <Link to="/signup" className="primary-btn small">Start Free</Link>
          </>
        )}
      </div>
    </nav>
  );
}