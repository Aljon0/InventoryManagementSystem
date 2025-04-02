import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Simple Bar Chart Component
export const SimpleBarChart = () => {
  // Empty data structure that will be filled by the application
  const data = [
    { name: "Mon", inflow: 0, outflow: 0 },
    { name: "Tue", inflow: 0, outflow: 0 },
    { name: "Wed", inflow: 0, outflow: 0 },
    { name: "Thu", inflow: 0, outflow: 0 },
    { name: "Fri", inflow: 0, outflow: 0 },
    { name: "Sat", inflow: 0, outflow: 0 },
    { name: "Sun", inflow: 0, outflow: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="inflow" fill="#6B2B06" />
        <Bar dataKey="outflow" fill="#B80C09" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
