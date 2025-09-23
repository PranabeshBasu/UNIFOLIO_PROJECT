import React from "react";

const OpportunitiesView = () => {
  const opportunities = [
    {
      role: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Internship",
      skills: ["React", "Tailwind"],
    },
    {
      role: "Data Analyst",
      company: "Data Inc",
      location: "New York",
      type: "Full-time",
      skills: ["Python", "SQL"],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Opportunities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((op, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div className="space-y-1">
              <h3 className="font-bold text-lg text-gray-800">{op.role}</h3>
              <p className="text-gray-600">{op.company}</p>
              <p className="text-gray-500 text-sm">{op.location} • {op.type}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {op.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors font-semibold">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpportunitiesView;
