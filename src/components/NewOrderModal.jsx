// components/NewOrderModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function NewOrderModal({ onAccept, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-md w-[580px] overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-between items-start px-6 pt-5 pb-4">
          <div>
            <h2 className="text-base font-semibold text-black">new order</h2>
            <p className="text-sm text-gray-800 mt-1">Customer number 123456789</p>
          </div>
          <span className="text-[11px] font-medium text-green-700 border border-green-600 px-2 py-[2px] rounded-md h-fit mt-1">
            waiting
          </span>
        </div>

        <hr className="border-gray-200" />

        {/* Order Details */}
        <div className="p-6 text-sm">
          <div className="flex justify-between font-semibold mb-3">
            <span>Supervisor name</span>
            <span className="text-gray-600">note</span>
          </div>

          <div className="text-sm text-gray-700 mb-2">
            <span className="font-semibold block">DATE</span>
            <span className="text-[13px]">21st Sept 2021, Monday</span>
          </div>

          <div className="text-sm text-gray-700">
            <span className="font-semibold block">The amount</span>
            <span className="text-[13px]">150</span>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-gray-200 text-sm text-center">
          <button
            onClick={onAccept}
            className="py-4 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Accept
          </button>
          <button
            onClick={onCancel}
            className="py-4 text-red-600 font-semibold hover:bg-red-50 border-l border-gray-200"
          >
            CANCEL
          </button>
        </div>
      </motion.div>
    </div>
  );
}
