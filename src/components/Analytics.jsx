import React, { useState } from "react";
import SimpleBarChart from "./charts/SimpleBarChart";
import PieChart from "./charts/PieChart";
import { SalesLineChart } from "./charts/SalesLineChart";

const Analytics = () => {
  const [period, setPeriod] = useState("month");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#141301]">Sales & Analytics</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setPeriod("week")}
            className={`px-4 py-2 rounded-md ${
              period === "week"
                ? "bg-[#6B2B06] text-white"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setPeriod("month")}
            className={`px-4 py-2 rounded-md ${
              period === "month"
                ? "bg-[#6B2B06] text-white"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod("year")}
            className={`px-4 py-2 rounded-md ${
              period === "year"
                ? "bg-[#6B2B06] text-white"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-[#141301]">Sales Overview</h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64">
            <SalesLineChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-[#141301]">
              Inventory Movement
            </h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64">
            <SimpleBarChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-[#141301]">
              Sales by Category
            </h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>By Value</option>
              <option>By Volume</option>
            </select>
          </div>
          <div className="h-64">
            <PieChart />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-[#141301]">
              Top Selling Products
            </h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Units Sold
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Product {item}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Category Name</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">
                        {Math.floor(Math.random() * 1000) + 100}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">
                        ${(Math.random() * 10000).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">
                        ${(Math.random() * 5000).toFixed(2)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
