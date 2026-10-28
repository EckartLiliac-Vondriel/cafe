import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Coffee } from "lucide-react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual registration logic here
    console.log("Registering:", username, email);
    navigate("/"); // Redirect to home
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex flex-col justify-center items-center px-5 py-10 selection:bg-[#d4a373] selection:text-white">
      <div className="w-full max-w-md bg-white p-8 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Coffee className="text-[#d4a373] w-8 h-8" />
          <h1 className="text-3xl font-bold text-[#6f4e37]">
            Coffee <span className="text-[#d4a373]">Heaven</span>
          </h1>
        </div>

        <h2 className="text-2xl font-bold text-[#6f4e37] mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
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
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#d4a373] hover:bg-[#6f4e37] text-white rounded-[30px] text-[16px] font-semibold transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#d4a373] hover:text-[#6f4e37] font-bold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
