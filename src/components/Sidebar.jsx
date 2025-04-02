import React from "react";
import {
  HomeIcon,
  BoxIcon,
  TagIcon,
  ChartBarIcon,
  CogIcon,
  LogOutIcon,
} from "lucide-react";

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "inventory", label: "Inventory", icon: BoxIcon },
    { id: "categories", label: "Categories", icon: TagIcon },
    { id: "analytics", label: "Analytics", icon: ChartBarIcon },
    { id: "settings", label: "Settings", icon: CogIcon },
  ];

  return (
    <div className="w-64 bg-[#6B2B06] text-white flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-[#B80C09]"></div>
          <h1 className="text-xl font-bold">InvenTrack</h1>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left ${
                  activeView === item.id
                    ? "bg-[#B80C09]/20 border-l-4 border-[#B80C09]"
                    : "hover:bg-[#B80C09]/10"
                }`}
              >
                <item.icon size={20} className="mr-3" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-[#B80C09]/20">
        <button className="w-full flex items-center px-4 py-2 text-left hover:bg-[#B80C09]/10 rounded-md">
          <LogOutIcon size={20} className="mr-3" /> {/* Updated icon here */}
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
