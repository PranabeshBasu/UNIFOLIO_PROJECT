// pages/faculty/DashboardHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../../components/faculty/FacultyStatCard"; // Make sure path is correct
import Card from "../../components/faculty/FacultyCard";         // Make sure path is correct

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard Overview</h1>
        <p className="text-slate-500">
          Welcome back, Dr. Evans! Here's a summary of campus activities.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Pending Approvals"
          value="12"
          icon="📝"
          colorClass="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Total Students"
          value="1,250"
          icon="🎓"
          colorClass="bg-green-100 text-green-600"
        />
        <StatCard
          title="Companies Onboarded"
          value="48"
          icon="🏢"
          colorClass="bg-amber-100 text-amber-600"
        />
        <StatCard
          title="Active Notices"
          value="5"
          icon="📢"
          colorClass="bg-indigo-100 text-indigo-600"
        />
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors"
            onClick={() => navigate("/faculty/post-event")}
          >
            Post a New Notice
          </button>
          <button
            className="bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors"
            onClick={() => navigate("/faculty/approval")}
          >
            Review Approvals
          </button>
          <button className="bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
            Export Report
          </button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome;
