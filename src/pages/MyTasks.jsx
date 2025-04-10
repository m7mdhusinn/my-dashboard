import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import {
  Edit2,
  Trash2,
  MessageSquare,
  CheckCircle,
  Clock,
  Undo2,
  Redo2,
  SlidersHorizontal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AddNoteModal from '../components/AddNoteModal';
import { motion, AnimatePresence } from 'framer-motion';
import NewOrderModal from '../components/NewOrderModal';

const taskData = [
  { id: 1, category: 'To do', color: 'border-blue-300 bg-blue-50', iconColor: 'text-blue-500' },
  { id: 2, category: 'In progress', color: 'border-orange-300 bg-orange-50', iconColor: 'text-orange-500' },
  { id: 3, category: 'Done', color: 'border-rose-200 bg-rose-50', iconColor: 'text-rose-500' },
];

export default function MyTasks() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="flex bg-[#FAFBFF] w-screen dark:bg-gray-900 text-gray-800 dark:text-white font-sans min-h-screen">
      <Sidebar toggleDark={() => setDarkMode(!darkMode)} />
      <main className="flex flex-col flex-1 p-6 space-y-6">
        <Header />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4 m-5">
            <h1 className="text-2xl font-semibold text-gray-800">Tasks</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900"><Undo2 className="w-5 h-5" /></button>
              <button className="text-gray-700 hover:text-gray-900"><Redo2 className="w-5 h-5" /></button>
              <button className="text-gray-700 hover:text-gray-900"><SlidersHorizontal className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {taskData.map((col, i) => (
              <motion.div
                key={i}
                className={`rounded-xl border ${col.color} p-4 w-96`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className={`text-md font-semibold flex items-center gap-1 mb-2 ${col.iconColor}`}>
                  {col.category === 'To do' && <CheckCircle size={16} />}
                  {col.category === 'In progress' && <Clock size={16} />}
                  {col.category === 'Done' && <CheckCircle size={16} />}
                  {col.category}
                </h2>

                {[1, 2, 3].map((taskId) => (
                  
                    <motion.div
  className="bg-white rounded-xl p-3 shadow mb-4 hover:bg-gray-50 transition border border-gray-100"
  whileHover={{ scale: 1.02 }}
>
  <div className="flex justify-between items-center mb-2 text-gray-400">
    <div className="flex gap-2">
      <Edit2 size={14} className="cursor-pointer" />
      <Trash2 size={14} className="cursor-pointer" />
    </div>
    <div className="flex items-center gap-1">
      <MessageSquare
        size={14}
        className="cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowNoteModal(true);
        }}
      />
      <span className="text-xs">3</span>
    </div>
  </div>

  {/* Inner Card */}
  <Link key={taskId} to={`/tasks/${taskId}`}>
  <div className="bg-white shadow rounded-xl px-4 py-5 text-center border border-gray-100">
    <p className="text-sm text-gray-600 mb-1">July 10, 2024 - July 12, 2025</p>
    <h3 className="text-lg font-semibold text-indigo-600">Project</h3>
    <p className="text-sm text-gray-500 mb-4">User Requirement Gathering</p>

    <p className="text-sm font-medium text-indigo-500 text-left">Progress</p>
    <div className="relative w-full h-3 bg-gray-200 rounded-full my-2 overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-green-600 rounded-full" style={{ width: '5%' }} />
    </div>

    <div className="mt-3">
      <span className="inline-block bg-green-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
        12 Months Left
      </span>
    </div>
  </div>
  </Link>
</motion.div>

                  
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
  {showModal && (
    <NewOrderModal
      onAccept={() => {
        // handle acceptance logic
        setShowModal(false);
      }}
      onCancel={() => setShowModal(false)}
    />
  )}
  {showNoteModal && (
  <AddNoteModal onClose={() => setShowNoteModal(false)} />
)}
</AnimatePresence>
    </div>
  );
}