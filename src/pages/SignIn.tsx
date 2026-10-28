import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Coffee } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual auth logic here
    console.log("Logging in:", email);
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex flex-col justify-center items-center px-5 selection:bg-[#d4a373] selection:text-white">
      <div className="w-full max-w-md bg-white p-8 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Coffee className="text-[#d4a373] w-8 h-8" />
          <h1 className="text-3xl font-bold text-[#6f4e37]">
            Coffee <span className="text-[#d4a373]">Heaven</span>
          </h1>
        </div>

        <h2 className="text-2xl font-bold text-[#6f4e37] mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Username
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-600 cursor-pointer">
              <input type="checkbox" className="mr-2 accent-[#d4a373]" />{" "}
              Remember me
            </label>
            <a
              href="#"
              className="text-[#d4a373] hover:text-[#6f4e37] font-medium transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#d4a373] hover:bg-[#6f4e37] text-white rounded-[30px] text-[16px] font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#d4a373] hover:text-[#6f4e37] font-bold transition-colors"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
