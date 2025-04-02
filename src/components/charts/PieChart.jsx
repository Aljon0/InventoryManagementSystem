import {
  PieChart as RPieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer as RResponsiveContainer,
  Tooltip,
} from "recharts";
export const PieChart = () => {
  // Empty data structure that will be filled by the application
  const data = [
    { name: "Category 1", value: 0 },
    { name: "Category 2", value: 0 },
    { name: "Category 3", value: 0 },
    { name: "Category 4", value: 0 },
  ];

  const COLORS = ["#6B2B06", "#B80C09", "#B7B5B3", "#141301"];

  return (
    <RResponsiveContainer width="100%" height="100%">
      <RPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </RPieChart>
    </RResponsiveContainer>
  );
};

export default PieChart;
