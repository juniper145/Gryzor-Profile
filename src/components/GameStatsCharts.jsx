import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";

export default function GameStatsChart({ data }) {
  const sorted = [...data].sort((a, b) => b.hours - a.hours);

  return (
    <div className="chart-card">
      <h2 className="chart-title">Most Played Games</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis type="number" stroke="#fff" />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#fff"
            tick={{ fill: "#fff", fontSize: 14 }}
            width={60}
            tickMargin={35}

          />
          <Tooltip
            wrapperStyle={{ backgroundColor: "#333", borderRadius: "8px" }}
          />
          <Legend />
          <Bar dataKey="hours" fill="#8884d8" name="Hours Played" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
