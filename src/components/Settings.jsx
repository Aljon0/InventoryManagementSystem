import React from "react";
import { SaveIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#141301]">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">General Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
              placeholder="Your Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Format
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Inventory Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Low Stock Threshold
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent"
              placeholder="10"
            />
            <p className="mt-1 text-sm text-gray-500">
              Products below this quantity will be marked as "Low Stock"
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="enableAlerts"
              className="h-4 w-4 text-[#6B2B06] focus:ring-[#6B2B06] border-gray-300 rounded"
            />
            <label htmlFor="enableAlerts" className="text-sm text-gray-700">
              Enable email alerts for low stock
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="autoOrder"
              className="h-4 w-4 text-[#6B2B06] focus:ring-[#6B2B06] border-gray-300 rounded"
            />
            <label htmlFor="autoOrder" className="text-sm text-gray-700">
              Generate purchase orders automatically for low stock items
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">User Management</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Access Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B2B06] focus:border-transparent">
              <option>Admin (Full Access)</option>
              <option>Manager (Limited Access)</option>
              <option>Viewer (Read Only)</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="auditLog"
              className="h-4 w-4 text-[#6B2B06] focus:ring-[#6B2B06] border-gray-300 rounded"
            />
            <label htmlFor="auditLog" className="text-sm text-gray-700">
              Enable audit log for inventory changes
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center bg-[#6B2B06] text-white px-6 py-2 rounded-md hover:bg-[#6B2B06]/90">
          <SaveIcon size={16} className="mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
