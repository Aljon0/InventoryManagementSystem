import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5E7E6]">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-[#6B2B06] p-2 rounded-lg">
            <svg
              className="h-8 w-8 text-white"
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
          <h1 className="text-2xl font-bold text-[#6B2B06]">InvenTrack</h1>
        </div>

        <div className="relative">
          <div className="h-8 w-8 rounded-full border-4 border-t-[#B80C09] border-r-[#B7B5B3] border-b-[#6B2B06] border-l-[#141301] animate-spin"></div>
        </div>

        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
