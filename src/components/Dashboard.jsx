import React from "react";
import StatCard from "./StatCard";
import {
  Package2Icon,
  AlertTriangleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  RotateCcwIcon,
} from "lucide-react";
import SimpleBarChart from "./charts/SimpleBarChart";
import PieChart from "./charts/PieChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#141301]">Dashboard</h1>
        <button className="flex items-center text-sm bg-white px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50">
          <RotateCcwIcon size={16} className="mr-2" />
          Refresh Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Products"
          value="286"
          icon={<Package2Icon size={24} className="text-[#6B2B06]" />}
          change={
            <span className="flex items-center text-green-500">
              <ArrowUpIcon size={14} />
              12%
            </span>
          }
        />
        <StatCard
          title="Low Stock Items"
          value="24"
          icon={<AlertTriangleIcon size={24} className="text-[#B80C09]" />}
          change={
            <span className="flex items-center text-red-500">
              <ArrowUpIcon size={14} />
              8%
            </span>
          }
        />
        <StatCard
          title="Out of Stock"
          value="7"
          icon={<AlertTriangleIcon size={24} className="text-[#B80C09]" />}
          change={
            <span className="flex items-center text-green-500">
              <ArrowDownIcon size={14} />
              3%
            </span>
          }
        />
        <StatCard
          title="Inventory Value"
          value="$128,450"
          icon={<Package2Icon size={24} className="text-[#6B2B06]" />}
          change={
            <span className="flex items-center text-green-500">
              <ArrowUpIcon size={14} />
              5%
            </span>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
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

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-[#141301]">
              Stock by Category
            </h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>By Items</option>
              <option>By Value</option>
            </select>
          </div>
          <div className="h-64">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg text-[#141301]">Low Stock Alerts</h2>
          <button className="text-sm text-[#6B2B06] hover:underline">
            View All
          </button>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Stock
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Threshold
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    Product {item}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">Category</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {Math.floor(Math.random() * 10) + 1}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">10</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Low Stock
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button className="text-sm bg-[#6B2B06] text-white px-3 py-1 rounded-md hover:bg-[#6B2B06]/90">
                      Restock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
