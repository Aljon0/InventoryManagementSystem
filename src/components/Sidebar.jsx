import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Import everything from lucide-react to make sure we have access to all icons
import * as LucideIcons from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Define our menu items with icon names that we'll attempt to use from LucideIcons
  const menuItems = [
    { id: "/", label: "Dashboard", iconName: "Home" },
    { id: "/inventory", label: "Inventory", iconName: "Package" }, // Try Package as an alternative to Cube
    { id: "/categories", label: "Categories", iconName: "Tag" },
    { id: "/analytics", label: "Analytics", iconName: "BarChart" }, // Try BarChart as an alternative
    { id: "/settings", label: "Settings", iconName: "Settings" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Function to safely get an icon component
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    // Fallback to a simple div if icon not found
    return (
      Icon ||
      (() => <div className="w-5 h-5 mr-3 bg-white/20 rounded-sm"></div>)
    );
  };

  return (
    <div className="w-64 bg-[#6B2B06] text-white flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
            <svg
              className="h-6 w-6 text-[#6B2B06]"
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
          <h1 className="text-xl font-bold">InvenTrack</h1>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          {menuItems.map((item) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <li key={item.id}>
                <NavLink
                  to={item.id}
                  className={({ isActive }) => `
                    w-full flex items-center px-6 py-3 text-left
                    ${
                      isActive
                        ? "bg-[#B80C09]/20 border-l-4 border-[#B80C09]"
                        : "hover:bg-[#B80C09]/10"
                    }
                  `}
                >
                  <IconComponent size={20} className="mr-3" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-[#B80C09]/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-left hover:bg-[#B80C09]/10 rounded-md"
        >
          {React.createElement(getIcon("LogOut"), {
            size: 20,
            className: "mr-3",
          })}
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
