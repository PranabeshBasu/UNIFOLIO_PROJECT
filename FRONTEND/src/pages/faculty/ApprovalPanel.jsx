// pages/faculty/ApprovalPanel.jsx
import React, { useState } from "react";
import Card from "../../components/faculty/FacultyCard"; // Correct path
import { mockApprovals } from "../../lib/faculty/mockData"; // Ensure this path exists

const ApprovalPanel = () => {
  const [approvals, setApprovals] = useState(mockApprovals);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleAction = (id, action) => {
    setApprovals(approvals.filter((item) => item.id !== id));
    setToast({
      show: true,
      message: `Submission ${action.toLowerCase()} successfully!`,
      type: action === "Approved" ? "success" : "error",
    });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Certificate":
        return "bg-blue-100 text-blue-700";
      case "Project":
        return "bg-amber-100 text-amber-700";
      case "Internship":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Approval Panel</h1>
        <p className="text-slate-500">
          Review and validate student-submitted documents and achievements.
        </p>
      </div>

      {/* Approvals Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Student Name</th>
                <th className="p-4 font-semibold text-slate-600">Type</th>
                <th className="p-4 font-semibold text-slate-600">Details</th>
                <th className="p-4 font-semibold text-slate-600">Submitted On</th>
                <th className="p-4 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvals.length > 0 ? (
                approvals.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50"
                  >
                    <td className="p-4 text-slate-800 font-medium">{item.student}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 max-w-xs truncate">
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline"
                      >
                        {item.item}
                      </a>
                    </td>
                    <td className="p-4 text-slate-500">{item.date}</td>
                    <td className="p-4 flex gap-2">
                      <button
                        onClick={() => handleAction(item.id, "Approved")}
                        className="bg-green-100 text-green-700 font-semibold text-sm py-1 px-3 rounded-md hover:bg-green-200 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(item.id, "Rejected")}
                        className="bg-red-100 text-red-700 font-semibold text-sm py-1 px-3 rounded-md hover:bg-red-200 transition-colors"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-8 text-slate-500">
                    No pending approvals. Great job!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ApprovalPanel;
