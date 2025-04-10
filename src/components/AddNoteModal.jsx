import React from 'react';
import { X, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AddNoteModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white rounded-lg w-[840px] p-6 shadow-lg relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700">
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">⭐</span> ADD NOTE
        </h2>
        <hr className="mb-4" />

        {/* Textarea */}
        <textarea
          className="w-full h-16 border bg-[#F8EDED] border-[#E5CFCF] rounded px-4 py-3 text-sm mb-6 placeholder:text-[#8E8E8E]"
          placeholder="Description"
        />

        {/* Supervisor & Task Row */}
        <div className="flex items-start justify-between mb-6">
          {/* Supervisor Selection */}
          <div className="flex flex-col gap-1 w-1/2">
            <label className="text-sm text-[#5B5272] font-medium mb-1">Supervisor Selection</label>
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/24?img=1" className="w-6 h-6 rounded-full" />
              <img src="https://i.pravatar.cc/24?img=2" className="w-6 h-6 rounded-full" />
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-300 mx-4" />

          {/* Task Selection */}
          <div className="flex flex-col gap-1 w-1/2">
            <label className="text-sm text-[#5B5272] font-medium mb-1">SELECT TASK</label>
            <span className="text-sm font-bold text-black">TASK NAME</span>
          </div>
        </div>

        {/* Footer: Date + Create */}
        <div className="flex items-end justify-between">
          {/* Date Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-black mb-1">DATE</label>
            <div className="flex items-center bg-[#F8EDED] border border-[#E5CFCF] rounded px-3 py-1.5 w-[100px]">
              <span className="text-xs text-[#9B3D3D] mr-2">DATE</span>
              <Calendar size={14} className="text-[#9B3D3D]" />
            </div>
          </div>

          {/* Create Button */}
          <button
            onClick={onClose}
            className="bg-[#9B3D3D] text-white text-sm font-medium px-6 py-2 rounded"
          >
            + create
          </button>
        </div>
      </motion.div>
    </div>
  );
}
