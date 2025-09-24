// src/components/faculty/FacultyStatCard.jsx
import React from "react";
import FacultyCard from "./FacultyCard";

const FacultyStatCard = ({ title, value, icon, colorClass }) => {
  return (
    <FacultyCard className="p-6 flex items-center gap-5">
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center ${colorClass}`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </FacultyCard>
  );
};

export default FacultyStatCard;
