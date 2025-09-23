import React, { useState } from "react";
import Sidebar from "../components/Student/Dashboard/Sidebar";
import Navbar from "../components/Student/Dashboard/Navbar";
import OverviewCards from "../components/Student/Dashboard/OverViewCards";
import QuickActions from "../components/Student/Dashboard/QuickActions";
import DocumentsView from "../components/Student/Dashboard/DocumentsView";
import CareerGuidance from "../components/Student/Dashboard/CareerGuidance";
import OpportunitiesView from "../components/Student/Dashboard/OpportunitiesView";
import AlumniNetwork from "../components/Student/Dashboard/AlumniNetwork";
import CreditScoreForm from "../components/Student/Dashboard/CreditScore";

// Dashboard view wrapper
const DashboardView = ({ setActiveView }) => (
  <>
    <OverviewCards />
    <QuickActions setActiveView={setActiveView} />
  </>
);

// Map of view names to components
const viewsMap = {
  Dashboard: DashboardView,
  "My Documents": DocumentsView,
  "AI Career Guidance": CareerGuidance,
  Opportunities: OpportunitiesView,
  "Alumni Network": AlumniNetwork,
  "Credit Score": CreditScoreForm,
};

const StudentDashboard = () => {
  const [activeView, setActiveView] = useState("Dashboard");

  // Dynamically render the active view component
  const ActiveComponent = viewsMap[activeView] || (() => <p>Coming Soon!</p>);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">{activeView}</h1>
          <ActiveComponent setActiveView={setActiveView} />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
