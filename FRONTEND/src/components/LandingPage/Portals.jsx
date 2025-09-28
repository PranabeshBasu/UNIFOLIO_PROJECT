// src/components/LandingPage/Portals.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../lib/api";

const StudentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const AdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

// --- Government Icon (Updated) ---
const GovernmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-[#0182DF] p-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

// --- Small Preview Icons ---
const CgpaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const TotalStudentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const UniversitiesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
// --- Reusable PortalCard ---
const PortalCard = ({ icon, title, description, buttonText, buttonColor, idPlaceholder, passPlaceholder, previewData, dummyCredentials, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (onLogin) {
      try {
        setLoading(true);
        await onLogin({ email, password, setError });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-300/40">
      <div className="p-8 flex-1 flex flex-col text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          {icon}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        <form className="space-y-4 mt-auto" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder={idPlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3081BB]"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={passPlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3081BB]"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`${buttonColor} w-full text-white py-3 rounded-lg font-bold text-lg hover:bg-[#246494] transition-colors`}
          >
            {loading ? "Signing in..." : buttonText}
          </button>
        </form>
      </div>

      {/* Preview + Dummy credentials */}
      <div className="bg-gray-50 p-6 border-t text-sm text-gray-600">
        <h4 className="font-bold text-gray-700 mb-2">{title} Preview</h4>
        <div className="flex flex-wrap gap-4 mb-3">
          {previewData.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              {item.icon}
              <span>
                {item.label}: <span className="font-semibold">{item.value}</span>
              </span>
            </div>
          ))}
        </div>
        {dummyCredentials && (
          <div className="mt-2 text-left text-gray-700">
            <p className="font-semibold">Dummy Credentials for judging:</p>
            <p>Email: <span className="font-mono">{dummyCredentials.email}</span></p>
            <p>Password: <span className="font-mono">{dummyCredentials.password}</span></p>
            <p className="text-xs text-gray-500">You can also use your own account, but sign up first.</p>
            {dummyCredentials.ps && <p className="text-xs text-gray-400 mt-1">{dummyCredentials.ps}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Portals Section ---
const Portals = () => {
  const navigate = useNavigate();

  const loginAndGo = async ({ email, password, role, setError }) => {
    try {
      const { token } = await apiPost("/api/auth/login", { email, password, role });
      localStorage.setItem("unifolio_token", token);
      localStorage.setItem("unifolio_role", role);

      if (role === "student") navigate("/student");
      else if (role === "faculty") navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <section id="portals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">A Centralized Hub for Education</h2>
          <p className="text-lg text-gray-600 mt-4">One platform, multiple gateways. Secure access for every stakeholder.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <PortalCard
            icon={<StudentIcon />}
            title="Student Portal"
            description="Access your personalized portfolio"
            buttonText="Login to Dashboard"
            buttonColor="bg-[#3081BB]"
            idPlaceholder="Student Mail ID"
            passPlaceholder="Password"
            previewData={[{ icon: <CgpaIcon />, label: "CGPA", value: "8.5/10" }]}
            onLogin={({ email, password, setError }) => loginAndGo({ email, password, role: "student", setError })}
            dummyCredentials={{ email: "pranabeshbasu900@gmail.com", password: "2005" }}
          />

          <PortalCard
            icon={<AdminIcon />}
            title="Faculty Portal"
            description="Manage institutional data"
            buttonText="Enter Faculty Dashboard"
            buttonColor="bg-[#3081BB]"
            idPlaceholder="Faculty Mail ID"
            passPlaceholder="Password"
            previewData={[{ icon: <TotalStudentsIcon />, label: "Students", value: "12,450" }]}
            onLogin={({ email, password, setError }) => loginAndGo({ email, password, role: "faculty", setError })}
            dummyCredentials={{ email: "prajakta700@gmail.com", password: "2009" }}
          />

          <PortalCard
            icon={<GovernmentIcon />}
            title="Government Portal"
            description="National education oversight"
            buttonText="Access Portal"
            buttonColor="bg-[#3081BB]"
            idPlaceholder="Official Mail ID"
            passPlaceholder="Secure Password"
            previewData={[]}
            onLogin={() =>
              alert("The Government Portal is currently under development. Please check back later for access.")
            }
            dummyCredentials={{ email: "gov@example.com", password: "gov123", ps: "PS: Still under work" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Portals;
