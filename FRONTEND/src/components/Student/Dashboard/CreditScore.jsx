import React, { useState } from "react";

const CreditScoreForm = () => {
  const [score, setScore] = useState(null);

  const calculateScore = (e) => {
    e.preventDefault();
    const semesters = parseFloat(e.target.semesters.value);
    const cgpa = parseFloat(e.target.cgpa.value);
    const attendance = parseFloat(e.target.attendance.value);

    // Basic validation
    if (
      isNaN(semesters) || semesters < 0 ||
      isNaN(cgpa) || cgpa < 0 || cgpa > 10 ||
      isNaN(attendance) || attendance < 0 || attendance > 100
    ) {
      alert("Please enter valid values!");
      return;
    }

    const calculated = (
      (cgpa / 10) * 50 +
      (attendance / 100) * 30 +
      semesters * 20
    ).toFixed(2);

    setScore(calculated);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Academic Credit Score</h2>

      <form
        onSubmit={calculateScore}
        className="bg-white p-6 rounded-xl shadow-md max-w-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-1">Semesters Completed</label>
          <input
            type="number"
            name="semesters"
            min="0"
            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Current CGPA</label>
          <input
            type="number"
            name="cgpa"
            step="0.01"
            min="0"
            max="10"
            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Overall Attendance (%)</label>
          <input
            type="number"
            name="attendance"
            min="0"
            max="100"
            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Calculate Score
        </button>
      </form>

      {score !== null && (
        <p className="mt-4 text-lg font-bold text-indigo-600">
          Your Academic Credit Score: {score}
        </p>
      )}
    </section>
  );
};

export default CreditScoreForm;
