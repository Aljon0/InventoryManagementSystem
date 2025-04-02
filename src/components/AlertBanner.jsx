import React from "react";
import { AlertTriangleIcon, XIcon } from "lucide-react";

const AlertBanner = ({ message, type = "warning", onClose }) => {
  const getBgColor = () => {
    switch (type) {
      case "warning":
        return "bg-yellow-50 border-yellow-300";
      case "error":
        return "bg-red-50 border-red-300";
      case "success":
        return "bg-green-50 border-green-300";
      default:
        return "bg-blue-50 border-blue-300";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "warning":
        return "text-yellow-700";
      case "error":
        return "text-red-700";
      case "success":
        return "text-green-700";
      default:
        return "text-blue-700";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "warning":
        return "text-yellow-500";
      case "error":
        return "text-red-500";
      case "success":
        return "text-green-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className={`border-l-4 p-4 ${getBgColor()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${getIconColor()}`}>
            <AlertTriangleIcon size={20} />
          </div>
          <div className="ml-3">
            <p className={`text-sm ${getTextColor()}`}>{message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className={`${getTextColor()} hover:opacity-75`}
        >
          <XIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default AlertBanner;
