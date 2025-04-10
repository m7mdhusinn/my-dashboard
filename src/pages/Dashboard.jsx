import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatusCard from '../components/StatusCard';
import RunningTaskCard from '../components/RunningTaskCard';
import ActivityChart from '../components/ActivityChart';
import UpcomingCard from '../components/UpcomingCard';
import CalendarWidget from '../components/CalendarWidget';
import Timeline from '../components/Timeline';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const taskStats = {
    total: 1220,
    inProgress: 7,
    pending: 43,
    completed: 1550,
  };

  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const topInView = useInView(topRef, { once: true, margin: '-100px' });
  const middleInView = useInView(middleRef, { once: true, margin: '-100px' });
  const bottomInView = useInView(bottomRef, { once: true, margin: '-100px' });

  return (
    <div className="flex min-h-screen w-full bg-[#FAFBFF] dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      
      {/* Sidebar - Sticky on left */}
      <div className="sticky top-0 h-screen">
        <Sidebar toggleDark={() => setDarkMode(!darkMode)} />
      </div>

      {/* Main content */}
      <main className="flex flex-col flex-1 w-full overflow-y-auto p-6 space-y-6 scroll-smooth">
        <Header />

        {/* Top Stats + Calendar */}
        <motion.div
          ref={topRef}
          initial={{ opacity: 0, y: 20 }}
          animate={topInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-start gap-4"
        >
          <div className="flex-nowrap items-start gap-4">
            <motion.div
              className="flex flex-nowrap gap-4 pb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {[
                { label: 'Total Task', value: taskStats.total, color: '#787F9E', icon: 'CheckCircle' },
                { label: 'In Progress', value: taskStats.inProgress, color: '#A5CED1', icon: 'Clock' },
                { label: 'Pending', value: taskStats.pending, color: '#9B3D3D', icon: 'AlertCircle' },
                { label: 'Completed', value: taskStats.completed, color: '#2EBF4F', icon: 'Check' },
              ].map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={topInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatusCard {...card} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={middleRef}
              className="flex grid-cols-1 md:grid-cols-3 gap-10 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={middleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <RunningTaskCard />
              <ActivityChart className="col-span-4 md:col-span-2" />
            </motion.div>
          </div>

          <motion.div
            className="w-96"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={topInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <CalendarWidget />
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 30 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-start gap-16">
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={bottomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <UpcomingCard progress={75} daysLeft={3} />
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 10 }}
              animate={bottomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <Timeline />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
