import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

export default function ActivityChart() {
  const labels = ["S", "M", "T", "W", "T", "F", "S"];

  const data = {
    labels,
    datasets: [
      {
        label: "Main",
        data: [1, 2, 1, 3, 2, 2.5, 2.3],
        borderColor: "#0F0F0F",
        backgroundColor: "#0F0F0F",
        tension: 0.4,
        pointBackgroundColor: "#6366F1",
        pointBorderColor: "#fff",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 6,
        fill: false,
        order: 2,
      },
      {
        label: "Shadow",
        data: [1, 1.5, 1.3, 2.5, 1.8, 2.2, 2],
        borderColor: "#E5E7EB",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: false,
        order: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} Task`,
        },
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 8,
        cornerRadius: 6,
        displayColors: false,
      },
    },
    scales: {
      y: {
        display: false,
        min: 0,
        max: 4,
      },
      x: {
        ticks: {
          color: "#6B7280",
          font: { size: 13 },
        },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="col-span-2 rounded-2xl shadow-md bg-[#F9FAFB] p-4 w-[450px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-500 cursor-pointer">This Week ▼</span>
      </div>
      <div className="bg-white rounded-xl p-4 h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
