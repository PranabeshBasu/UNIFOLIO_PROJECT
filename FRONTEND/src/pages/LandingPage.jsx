// src/pages/LandingPage.jsx
import React from "react";

// Import Landing Page components
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import Portals from "../components/LandingPage/Portals";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Portals />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
