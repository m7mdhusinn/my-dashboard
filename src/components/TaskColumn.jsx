import React from 'react';
import { Edit3, Trash2, MessageSquare } from 'lucide-react';

export default function TaskColumn({ title, color, tasks }) {
  return (
    <div className={'bg-${color}-50 p-4 rounded-xl shadow-sm'}>
      <h2 className={`text-md font-semibold text-${color}-600 mb-4 flex items-center gap-2`}>
        <span className={`w-2 h-2 bg-${color}-600 rounded-sm`} />
        {title}
      </h2>

      {tasks.map((task, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              <Trash2 className="w-4 h-4" />
              <MessageSquare className="w-4 h-4" />
              <span>3</span>
            </span>
          </div>
          <h3 className="font-bold text-black">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Progress</span>
              <span>{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <div className="text-xs text-white bg-green-500 w-fit px-3 py-1 rounded-full text-center">
              {task.timeLeft}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
