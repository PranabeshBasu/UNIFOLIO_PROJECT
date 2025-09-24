import React, { useState } from 'react';
import { mockApprovals } from '../../lib/mockData';
import { Download } from 'lucide-react';

const ApprovalPanel = () => {
  const [approvals, setApprovals] = useState(mockApprovals);

  const handleAction = (id, action) => {
    // In a real app, you would show a toast notification here
    console.log(`${action} item with id: ${id}`);
    setApprovals(approvals.filter((item) => item.id !== id));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Certificate': return 'bg-blue-100 text-blue-700';
      case 'Project': return 'bg-amber-100 text-amber-700';
      case 'Internship': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Review Submissions</h1>
          <p className="text-gray-500 mt-1">Validate student-submitted documents and achievements.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold text-sm text-gray-600">STUDENT</th>
              <th className="p-4 font-semibold text-sm text-gray-600">TYPE</th>
              <th className="p-4 font-semibold text-sm text-gray-600">DETAILS</th>
              <th className="p-4 font-semibold text-sm text-gray-600">DATE</th>
              <th className="p-4 font-semibold text-sm text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {approvals.length > 0 ? (
              approvals.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{item.student}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    <a href={item.fileUrl} className="flex items-center gap-2 hover:text-indigo-600 hover:underline">
                      <Download size={16} /> {item.item}
                    </a>
                  </td>
                  <td className="p-4 text-gray-500">{item.date}</td>
                  <td className="p-4 flex gap-2">
                    <button onClick={() => handleAction(item.id, 'Approved')} className="bg-green-100 text-green-700 font-semibold text-sm py-1 px-3 rounded-md hover:bg-green-200">Approve</button>
                    <button onClick={() => handleAction(item.id, 'Rejected')} className="bg-red-100 text-red-700 font-semibold text-sm py-1 px-3 rounded-md hover:bg-red-200">Reject</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-8 text-gray-500">No pending approvals. Great job!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalPanel;
