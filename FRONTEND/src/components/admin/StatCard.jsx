import React from 'react';
// FIX: Changed the import from the old "FacultyCard" to the new "AdminCard"
import AdminCard from './AdminCard'; 

// This component is now correctly named to reflect its purpose in the Admin Dashboard.
// It uses AdminCard as its base.
const StatCard = ({ title, value, icon }) => {
  return (
    // FIX: Using the <AdminCard> component as the wrapper
    <AdminCard className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {icon && <div className="text-indigo-500">{icon}</div>}
      </div>
      <p className="text-3xl font-bold text-indigo-600 mt-2">{value}</p>
    </AdminCard>
  );
};

export default StatCard;

