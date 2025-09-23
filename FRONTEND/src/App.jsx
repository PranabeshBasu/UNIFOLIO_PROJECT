import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Landing page
import LandingPage from "./pages/LandingPage";

// Student dashboard
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Student dashboard */}
      <Route path="/student/*" element={<StudentDashboard />} />

      {/* Redirect unknown paths to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
