import React from "react";

const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-gray-500 mb-1">{change}</div>
      </div>
    </div>
  );
};

export default StatCard;
