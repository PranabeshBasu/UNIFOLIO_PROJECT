// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../lib/api";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({ email: "" });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("form"); // form | otp
  const [loading, setLoading] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: emailRegex.test(value) ? "" : "Invalid email format" }));
    }
  };

  const normalizedRole = (r) => {
    if (!r) return "";
    const lower = r.toLowerCase();
    if (lower.startsWith("student")) return "student";
    if (lower.startsWith("faculty") || lower.startsWith("institution")) return "faculty";
    return lower;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMsg("");
    const role = normalizedRole(formData.role);

    if (!emailRegex.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      return;
    }
    if (!role || (role !== "student" && role !== "faculty")) {
      setServerMsg("Please select Student or Faculty");
      return;
    }

    try {
      setLoading(true);
      const resp = await apiPost("/api/auth/signup", {
        email: formData.email,
        password: formData.password,
        role,
      });
      if (resp?.devOtp) setOtp(resp.devOtp); // prefill in dev
      setStep("otp");
    } catch (err) {
      setServerMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setServerMsg("");
    const role = normalizedRole(formData.role);

    try {
      setLoading(true);
      await apiPost("/api/auth/verify-otp", {
        email: formData.email,
        role,
        otp,
        password: formData.password,
      });
      const { token } = await apiPost("/api/auth/login", {
        email: formData.email,
        password: formData.password,
        role,
      });
      localStorage.setItem("unifolio_token", token);
      localStorage.setItem("unifolio_role", role);

      // ✅ Redirect after signup
      navigate(role === "student" ? "/student" : "/admin/dashboard");
    } catch (err) {
      setServerMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{ backgroundImage: `url('/Signup.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full z-10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-300/50">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-4">Unifolio</h1>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        {serverMsg && <p className="text-center text-red-600 mb-3">{serverMsg}</p>}

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>Select Your Role</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Institution">Institution</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {loading ? "Sending OTP..." : "Create Account"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Check email for OTP. In dev, it may be prefilled.</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
