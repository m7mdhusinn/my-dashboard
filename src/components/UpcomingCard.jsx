import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export default function Timeline() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Task</h2>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex grid-cols-1 md:grid-cols-2 gap-4">
        <TaskCard progress={75} daysLeft={3} />
        <TaskCard progress={85} daysLeft={4} />
      </div>
    </section>
  );
}

function TaskCard({ progress, daysLeft }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-80">
      <h3 className="font-semibold text-gray-800">task name</h3>
      <p className="text-sm text-indigo-400 mb-3">phone number</p>

      <div className="flex justify-between items-center text-sm font-medium mb-1">
        <span className="text-gray-700">Progress</span>
        <span className="text-emerald-600">{progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-gray-300 rounded-full mb-4">
        <div
          className="absolute top-0 left-0 h-2 bg-emerald-600 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-0 -mt-[2px] h-3 w-3 bg-emerald-700 rounded-full shadow-sm transition-all duration-700"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>

      {/* Footer with clock and time left */}
      <div className="flex items-center gap-2 text-gray-700 text-sm">
        <Clock className="w-5 h-5 text-indigo-600" />
        <span>{daysLeft} Days Left</span>
      </div>
    </div>
  );
}
