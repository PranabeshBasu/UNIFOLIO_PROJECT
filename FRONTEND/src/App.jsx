import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Assuming these pages exist from your project structure
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/StudentDashboard";
import SignupPage from "./pages/SignupPage";
import Government from "./pages/Government";

// New Admin Dashboard Imports
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminDashboardHome from "./pages/admin/AdminDashboardHome.jsx";
import ApprovalPanel from "./pages/admin/ApprovalPanel.jsx";
import PostEvent from "./pages/admin/PostEvent.jsx";
import StudentDatabase from "./pages/admin/StudentDatabase.jsx";
import Analytics from "./pages/admin/Analytics.jsx";

const App = () => {
  return (
    <Routes>
      {/* --- Main Application Routes --- */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/student/*" element={<StudentDashboard />} />
      <Route path="/government" element={<Government />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* --- New Admin Dashboard Routes --- */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Redirects /admin to /admin/dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardHome />} />
        <Route path="approvals" element={<ApprovalPanel />} />
        <Route path="post-notice" element={<PostEvent />} />
        <Route path="students" element={<StudentDatabase />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* --- Catch-all Redirect --- */}
      {/* Redirects any unknown paths to the main landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

