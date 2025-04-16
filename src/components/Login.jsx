import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5E7E6]">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#6B2B06] py-6">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <svg
                  className="h-8 w-8 text-[#6B2B06]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8h-3V6c0-2.21-1.79-4-4-4S9 3.79 9 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-9h-6V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">InvenTrack</h1>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <h2 className="text-xl font-semibold text-[#141301] text-center mb-6">
            Log in as Admin
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} />
                    ) : (
                      <EyeIcon size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B2B06] py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-[#6B2B06]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B2B06]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
