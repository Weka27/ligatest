import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff" }}>🏠 Home</Link>
      <Link to="/ladder" style={{ margin: "10px", color: "#fff" }}>🥇 Ladder</Link>
      <Link to="/tournaments" style={{ margin: "10px", color: "#fff" }}>🏆 Turniere</Link>
      <Link to="/rules" style={{ margin: "10px", color: "#fff" }}>📜 Regeln</Link>
      <Link to="/login" style={{ margin: "10px", color: "#fff" }}>🔐 Login</Link>
    </nav>
  );
}
