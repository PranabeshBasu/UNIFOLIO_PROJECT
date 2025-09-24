// pages/faculty/Analytics.jsx
import React from "react";
import Card from "../../components/faculty/FacultyCard";
import FacultyStatCard from "../../components/faculty/FacultyStatCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { month: "Jan", approvals: 12, events: 3 },
  { month: "Feb", approvals: 18, events: 5 },
  { month: "Mar", approvals: 10, events: 2 },
  { month: "Apr", approvals: 25, events: 6 },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Analytics</h1>
        <p className="text-slate-500">
          Monitor student activity, approvals, and events over time.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FacultyStatCard
          title="Pending Approvals"
          value="12"
          icon="📝"
          colorClass="bg-blue-100 text-blue-600"
        />
        <FacultyStatCard
          title="Total Students"
          value="1,250"
          icon="🎓"
          colorClass="bg-green-100 text-green-600"
        />
        <FacultyStatCard
          title="Events Posted"
          value="48"
          icon="📢"
          colorClass="bg-amber-100 text-amber-600"
        />
        <FacultyStatCard
          title="Active Notices"
          value="5"
          icon="🔔"
          colorClass="bg-indigo-100 text-indigo-600"
        />
      </div>

      {/* Bar Chart */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Monthly Activity</h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={sampleData}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Bar dataKey="approvals" fill="#2563EB" barSize={20} name="Approvals" />
              <Bar dataKey="events" fill="#F59E0B" barSize={20} name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
