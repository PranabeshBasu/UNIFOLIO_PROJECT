import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook
import AdminCard from '../../components/admin/AdminCard.jsx';

const AdminDashboard = () => {
  const navigate = useNavigate(); // 2. Initialize the hook to get the navigate function

  return (
    <div className="space-y-6 p-4 md:p-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminCard>
          <div className="flex flex-col items-start p-4">
            <h3 className="text-sm font-medium text-gray-500">Pending Approvals</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
          </div>
        </AdminCard>
        <AdminCard>
          <div className="flex flex-col items-start p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">1,250</p>
          </div>
        </AdminCard>
        <AdminCard>
          <div className="flex flex-col items-start p-4">
            <h3 className="text-sm font-medium text-gray-500">Companies Onboarded</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">48</p>
          </div>
        </AdminCard>
        <AdminCard>
          <div className="flex flex-col items-start p-4">
            <h3 className="text-sm font-medium text-gray-500">Active Notices</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">5</p>
          </div>
        </AdminCard>
      </div>

      {/* Quick Actions Section */}
      <div className=" p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            onClick={() => navigate('/admin/post-notice')}
          >
            Post a New Notice
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            onClick={() => navigate('/admin/approvals')}
          >
            Review Approvals
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            onClick={() => navigate('/admin/analytics')}
          >
            Export Report
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AdminDashboard;

        