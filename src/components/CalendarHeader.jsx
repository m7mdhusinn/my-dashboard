import {
    Bell,
    SlidersHorizontal,
    ChevronLeft,
    ChevronRight,
    Search,
    Command,
  } from 'lucide-react';
  import { motion } from 'framer-motion';
  
  export default function CalendarHeader({
    handleViewChange,
    onToday,
    onPrev,
    onNext,
    currentDate,
    onSearch,
    onFilter,
    onDateChange,
  }) {
    const getMonthInputValue = (date) =>
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex flex-col px-6 pt-6 pb-4 border-b border-gray-200 bg-white"
      >
        {/* Top bar: Search + profile */}
        <div className="flex justify-between items-center mb-6">
          {/* Search input */}
          <div className="flex items-center border border-[#9B3D3D] rounded px-2 py-1 w-72">
            <Search className="w-4 h-4 text-[#9B3D3D]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full text-sm bg-transparent focus:outline-none placeholder-gray-400"
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="flex items-center gap-1 px-2 border-l border-[#9B3D3D] text-[#9B3D3D]">
              <div className="bg-[#FFF5F2] rounded-md p-1 flex items-center justify-center">
                <Command className="w-4 h-4 text-[#9B3D3D]" />
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded bg-[#FFF5F2] text-[#9B3D3D]">F</span>
            </div>
          </div>
  
          {/* Profile */}
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Harsh</span>
          </div>
        </div>
  
        {/* Calendar heading & filter */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-[#9B3D3D]">Calendar</h1>
          <button
            onClick={onFilter}
            className="flex items-center gap-2 border border-[#9B3D3D] px-3 py-1 rounded text-[#9B3D3D] hover:bg-[#9B3D3D] hover:text-white transition-all text-sm"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
  
        {/* View buttons */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => handleViewChange('dayGridMonth')}
            className="text-sm font-medium px-4 py-1 rounded border border-[#9B3D3D] text-[#9B3D3D] bg-[#FAF3F3]"
          >
            Monthly
          </button>
          <button
            onClick={() => handleViewChange('timeGridWeek')}
            className="text-sm font-medium px-4 py-1 rounded text-gray-600 hover:underline"
          >
            Weekly
          </button>
          <button
            onClick={() => handleViewChange('timeGridDay')}
            className="text-sm font-medium px-4 py-1 rounded text-gray-600 hover:underline"
          >
            Daily
          </button>
        </div>
  
        {/* Date Picker & Nav */}
        <div className="flex items-center gap-3 text-sm text-[#9B3D3D]">
          <input
            type="month"
            value={getMonthInputValue(currentDate)}
            onChange={(e) => onDateChange(new Date(e.target.value))}
            className="text-sm font-medium text-[#9B3D3D] bg-transparent outline-none border-none"
          />
          <button
            onClick={onToday}
            className="bg-[#9B3D3D] text-white px-3 py-1 rounded text-sm"
          >
            Today
          </button>
          <button onClick={onPrev} className="text-[#9B3D3D] text-lg font-bold">
            <ChevronLeft />
          </button>
          <button onClick={onNext} className="text-[#9B3D3D] text-lg font-bold">
            <ChevronRight />
          </button>
        </div>
      </motion.div>
    );
  }
  