import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ladder from "./pages/Ladder";
import Tournaments from "./pages/Tournaments";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
