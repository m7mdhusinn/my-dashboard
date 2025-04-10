import React from 'react';
import { X, Smile, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CommentModal({ onClose, status = 'default' }) {
  const statusMap = {
    default: null,
    edit: {
      label: 'يحتاج تعديل',
      color: 'text-orange-600',
      dot: 'bg-orange-600',
      border: 'border border-orange-500',
      bg: 'bg-white',
    },
    failed: {
      label: 'لم تصل',
      color: 'text-red-600',
      dot: 'bg-red-500',
      border: 'border border-red-500',
      bg: 'bg-white',
    },
  };

  const statusData = statusMap[status];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 ,ease: 'easeOut'}}
        className="bg-white rounded-lg w-[550px] p-5 relative shadow-md"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0  rounded-md p-1"
        >
          <X size={16} className="text-[#1D1B20]" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <img src="https://i.pravatar.cc/40?img=32" className="w-9 h-9 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-sm">Brooklyn</h2>
              {statusData && (
                <div
                  className={`text-xs ${statusData.color} ${statusData.bg} ${statusData.border} px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap`}
                >
                  <span className={`w-2 h-2 rounded-full ${statusData.dot}`} />
                  {statusData.label}
                </div>
              )}
              
            </div>
            <p className="text-sm text-gray-700 mt-1 leading-snug">
              we are 1 week away from launch! Thank you for every team member for their hard work.
            </p>
            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
          </div>
        </div>

        {/* Reply Input */}
        <div className="mt-2 border rounded-md p-3">
          <div className="flex items-start gap-2 mb-3">
            <img src="https://i.pravatar.cc/32?img=15" className="w-7 h-7 rounded-full mt-1" />
            <textarea
              placeholder="Reply or post an update"
              className="w-full border-none outline-none resize-none text-sm text-gray-600 bg-transparent placeholder:text-gray-400"
              rows="2"
            />
          </div>
          <div className="flex justify-between items-center px-1">
            <div className="flex gap-3 text-gray-500">
              <Smile size={16} />
              <Paperclip size={16} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium transition">
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
