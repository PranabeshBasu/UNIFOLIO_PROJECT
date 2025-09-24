import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Assuming these pages exist from your project structure
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/StudentDashboard";
import SignupPage from "./pages/SignupPage";
import Government from "./pages/Government";

// New Admin Dashboard Imports with explicit file extensions for clarity
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminDashboardHome from "./pages/admin/AdminDashboardHome.jsx";
import ApprovalPanel from "./pages/admin/ApprovalPanel.jsx";
import PostEvent from "./pages/admin/PostEvent.jsx";
import StudentDatabase from "./pages/admin/StudentDatabase.jsx";
import Analytics from "./pages/admin/Analytics.jsx";

const App = () => {
  return (
    <Routes>
      {/* Landing, Student, and Signup routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/student/*" element={<StudentDashboard />} />
<<<<<<< HEAD
=======

      {/* Government page */}
      <Route path="/government" element={<Government />} />

      {/* Signup page */}
>>>>>>> 6d33f89df99177274df93df8de28bd05de5649eb
      <Route path="/signup" element={<SignupPage />} />

      {/* New Admin Dashboard Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardHome />} />
        <Route path="approvals" element={<ApprovalPanel />} />
        <Route path="post-notice" element={<PostEvent />} />
        <Route path="students" element={<StudentDatabase />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* Redirect unknown paths to landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

