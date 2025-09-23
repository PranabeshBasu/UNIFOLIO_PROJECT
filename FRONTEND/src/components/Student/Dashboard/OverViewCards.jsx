import React from "react";

const OverviewCards = () => {
  const stats = [
    { label: "CGPA", value: "8.5/10" },
    { label: "Attendance", value: "92%" },
    { label: "Projects", value: "4" },
    { label: "Certificates", value: "2" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">{stat.value}</p>
        </div>
      ))}
    </section>
  );
};

export default OverviewCards;
