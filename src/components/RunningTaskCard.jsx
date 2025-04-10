import React, { useEffect, useRef } from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

export default function RunningTaskCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Destroy previous chart if exists
    if (window.runningChart) window.runningChart.destroy();

    window.runningChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [45, 55], // 45% complete
            backgroundColor: ["#000000", "#A94F4F"], // Black stroke, muted background
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "80%", // Smaller ring
        responsive: false,
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        },
      },
    });
  }, []);

  return (
    <div className="bg-[#A94F4F] text-white rounded-xl shadow p-4 w-[180px]">
      <h2 className="text-sm mb-1">Running Task</h2>
      <p className="text-3xl font-semibold">65</p>

      <div className="flex items-center gap-2 mt-2">
        <div className="relative w-12 h-12">
          <canvas ref={canvasRef} width={48} height={48} />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
            45%
          </span>
        </div>
        <div>
          <p className="text-lg font-semibold">100</p>
          <p className="text-xs">Task</p>
        </div>
      </div>
    </div>
  );
}
