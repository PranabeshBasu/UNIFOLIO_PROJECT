import React from "react";

const AlumniNetwork = () => {
  const alumni = [
    { name: "Alice Johnson", role: "Software Engineer", company: "Google" },
    { name: "Bob Smith", role: "Data Scientist", company: "Facebook" },
    // Add more alumni as needed
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Alumni Network</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((a, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
              {a.name[0]}
            </div>
            <h3 className="font-semibold text-lg">{a.name}</h3>
            <p className="text-gray-500 text-sm">
              {a.role} @ {a.company}
            </p>
            <button className="mt-3 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlumniNetwork;
