import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wide">
        <Link to="/">🎮 ClassicLeague</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/ladder" className="hover:text-yellow-400 transition">Ladder</Link>
        <Link to="/matches" className="hover:text-yellow-400 transition">Matches</Link>
        <Link to="/profile" className="hover:text-yellow-400 transition">Profil</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border border-yellow-400 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Registrieren
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
