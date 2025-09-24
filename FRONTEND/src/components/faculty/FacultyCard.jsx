// src/components/faculty/FacultyCard.jsx
import React from "react";

const FacultyCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default FacultyCard;
