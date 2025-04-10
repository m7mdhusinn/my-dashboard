import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FileAttachmentModal({ onClose }) {
  const files = [
    {
      type: 'XLS',
      labelColor: 'bg-green-100 text-green-600',
      name: 'Data-structures.xls',
      by: 'Courtney Henry',
      size: '1.4 MB',
      downloadable: true,
    },
    {
      type: 'JPG',
      labelColor: 'bg-blue-100 text-blue-600',
      name: 'Team-Photos.jpg',
      by: 'Dianne Russell',
      size: '34 MB',
      downloadable: true,
    },
    {
      type: 'PDF',
      labelColor: 'bg-red-100 text-red-600',
      name: 'User-journey.pdf',
      size: '12 MB',
      uploading: true,
      progress: 80,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-[500px] p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">File Attachment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>

        <ul className="space-y-4">
          {files.map((file, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`${file.labelColor} font-bold text-xs px-2 py-1 rounded`}>
                    {file.type}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {file.by ? file.by : file.size}
                    </p>
                  </div>
                </div>

                {file.downloadable && (
                  <div className="text-xs text-gray-600">
                    {file.size}
                    <a href="#" className="text-blue-600 ml-2">Download</a>
                  </div>
                )}

                {file.uploading && (
                  <button className="text-red-500 text-xs">Cancel</button>
                )}
              </div>

              {file.uploading && (
                <div className="w-full bg-blue-100 h-2 mt-2 rounded">
                  <div
                    className="bg-blue-500 h-full rounded"
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
