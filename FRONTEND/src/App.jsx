import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Landing page
import LandingPage from "./pages/LandingPage";

// Student dashboard
import StudentDashboard from "./pages/StudentDashboard";

// Signup page (from your branch)
import SignupPage from "./pages/SignupPage";
import Government from "./pages/Government";

// Faculty pages (from your collaborator's branch)
import FacultyDashboardLayout from "./layouts/faculty/FacultyDashboardLayout";
import DashboardHome from "./pages/faculty/DashboardHome";
import ApprovalPanel from "./pages/faculty/ApprovalPanel";
import PostEvent from "./pages/faculty/PostEvent";
import StudentDatabase from "./pages/faculty/StudentDatabase";
import Analytics from "./pages/faculty/Analytics";

const App = () => {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Student dashboard */}
      <Route path="/student/*" element={<StudentDashboard />} />

      {/* Government page */}
      <Route path="/government" element={<Government />} />

      {/* Signup page */}
      <Route path="/signup" element={<SignupPage />} />

      {/* Faculty dashboard with layout */}
      <Route path="/faculty/*" element={<FacultyDashboardLayout />}>
        <Route index element={<DashboardHome />} /> {/* default /faculty */}
        <Route path="home" element={<DashboardHome />} />
        <Route path="approval" element={<ApprovalPanel />} />
        <Route path="post-event" element={<PostEvent />} />
        <Route path="students" element={<StudentDatabase />} />
        {/* Add more faculty pages here */}
      </Route>

      {/* Redirect unknown paths to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;