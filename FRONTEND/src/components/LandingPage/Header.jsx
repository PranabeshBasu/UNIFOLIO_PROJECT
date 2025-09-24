import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
    <div className="mx-auto px-6 py-4 flex items-center">
      <h1 className="text-2xl font-bold text-blue-600">Unifolio</h1>
      <nav className="hidden md:flex space-x-8 mx-auto">
        <a
          href="#home"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Features
        </a>
        <a
          href="#about"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
      </nav>
      {/* Changed from <a href="#portals"> to <Link to="/signup"> */}
      <Link
        to="/signup"
        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </Link>
    </div>
  </header>
);

export default Header;
