import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  const tasks = [
    {
      title: "Research",
      people: "03 People",
      color: "border-l-4 border-[#7C3AED]", // purple
      offset: 0,
    },
    {
      title: "Landing Page Design",
      people: "03 People",
      color: "border-l-4 border-[#F87171]", // red
      offset: 1,
    },
    {
      title: "Dashboard Design",
      people: "03 People",
      color: "border-l-4 border-[#2DD4BF]", // teal
      offset: 2,
    },
    {
      title: "Design Theory",
      people: "03 People",
      color: "border-l-4 border-[#34D399]", // green
      offset: 3,
    },
  ];

  return (
    <section className="w-full max-w-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
          <p className="text-sm text-gray-500">Wednesday, 13 March, 2021</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="text-2xl leading-none">⋮</span>
        </button>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-4 mb-4 text-sm text-gray-500 font-medium">
        <span>day</span>
        <span>day</span>
        <span>day</span>
        <span>day</span>
      </div>

      {/* Timeline Columns + Tasks */}
      <div className="relative h-[400px]">
        {/* Vertical Lines */}
        <div className="absolute inset-0 flex justify-between z-0">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[1px] bg-gray-200 h-full" />
          ))}
        </div>

        {/* Task Cards */}
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            className="absolute z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              top: `${index * 85}px`,
              left: `calc(${task.offset * 25}% + 2px)`,
              width: "calc(25% - 8px)",
            }}
          >
            <div
              className={`bg-white p-3 rounded-xl shadow-sm ${task.color}`}
            >
              <div className="text-sm font-semibold text-black">
                {task.title}
              </div>
              <div className="text-xs text-gray-500">{task.people}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
