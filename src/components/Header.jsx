import React from "react";
import { SearchIcon, BellIcon, UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex-1">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <SearchIcon size={18} />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-[#B80C09] rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-[#6B2B06] rounded-full flex items-center justify-center text-white">
            <UserIcon size={18} />
          </div>
          <span className="font-medium">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
