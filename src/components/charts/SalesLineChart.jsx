import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export const SalesLineChart = () => {
  // Empty data structure that will be filled by the application
  const data = [
    { name: "Jan", sales: 0 },
    { name: "Feb", sales: 0 },
    { name: "Mar", sales: 0 },
    { name: "Apr", sales: 0 },
    { name: "May", sales: 0 },
    { name: "Jun", sales: 0 },
    { name: "Jul", sales: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#6B2B06"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
