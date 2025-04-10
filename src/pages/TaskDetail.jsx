import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  DollarSign,
  User,
  Paperclip,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FileAttachmentModal from '../components/FileAttachmentModal';
import CommentModal from '../components/CommentModal';

export default function TaskDetail() {
  const [showModal, setShowModal] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [commentStatus, setCommentStatus] = useState('default');

  const checklist = [
    'قبول الطلب',
    'تواصل مع العميل',
    'بدء التصميم',
    'مراجعة المشرف للتصميم',
    'مراجعة العميل للتصميم',
    'تعديل التصميم في حال وجود تعديل',
    'تحويل العمل',
    'تأكيد استلام العمل',
    'رفع العمل على الدرايف',
  ];

  const [checkedItems, setCheckedItems] = useState(Array(checklist.length).fill(false));

  const toggleCheck = (index) => {
    setCheckedItems((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="flex bg-[#FAFBFF] text-gray-800 font-sans min-h-screen w-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 w-full relative">
        <Header />

        {showModal && <FileAttachmentModal onClose={() => setShowModal(false)} />}

        <AnimatePresence>
          {showComment && (
            <CommentModal
              status={commentStatus}
              onClose={() => setShowComment(false)}
            />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-start mt-6"
        >
          {/* Left Content */}
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold leading-tight mb-4">
              Creating a Library <br /> Design Assets
            </h1>

            {/* Info Row */}
            <div className="flex items-center gap-6 text-sm text-gray-700 mb-4">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>Date : 10 Apr</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>amount : 158.</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Supervisor name</span>
              </div>
              <div className="flex items-center gap-1">
                <Paperclip className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setCommentStatus('edit');
                    setShowComment(true);
                  }}
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>3</span>
                </button>
              </div>
            </div>

            

            {/* Checklist */}
            <ul className="mt-4 space-y-2 text-xl text-right" dir="rtl">
  {checklist.map((item, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className={`flex flex-row-reverse items-center justify-between p-3 rounded bg-white shadow-sm border-b-2 ${
        checkedItems[index] ? 'border-green-600' : 'border-transparent'
      }`}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.8 }}
          animate={{
            scale: checkedItems[index] ? 1.1 : 1,
            color: checkedItems[index] ? '#16a34a' : '#9ca3af',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => toggleCheck(index)}
          className="cursor-pointer"
        >
          <CheckCircle className="w-5 h-5" />
        </motion.button>

        <span
          className={`font-bold text-base transition ${
            checkedItems[index] ? 'text-green-600' : 'text-gray-800'
          }`}
        >
          {item}
        </span>
      </div>
    </motion.li>
  ))}
</ul>

          </div>

          {/* Right Controls */}
          <div className="flex flex-col gap-3 items-end ml-10">
            <button className="bg-[#9B3D3D] text-white text-sm font-medium px-4 py-2 rounded shadow">
              إنهاء الطلب
            </button>
            <button className="text-[#9B3D3D] text-sm underline">رفع العرض</button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-sm px-4 py-2 border border-dashed border-gray-400 rounded"
            >
              <Paperclip size={16} /> + Attach File
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
