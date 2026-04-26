"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { weeklyData } from "../data/mockData";

export default function WeeklyChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      
      <h3 className="font-semibold mb-4 text-gray-800">
        Consumo semanal
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <XAxis dataKey="day" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}