import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex flex-row md:flex-row items-center gap-0.5 p-5">
      {/* Welcome Message */}
      <div className="text-xl font-semibold flex-shrink-0">
        Hello name <span className="">👋🏼,</span>
      </div>
      <div className="table items-start gap-0.5">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <Bell className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
      </div>
      {/* Search Input */}
      <div className=" w-8/12">
        <div className="flex items-center bg-white shadow px-4 py-2 rounded-lg w-full">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full text-sm outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Notification & Mode Toggle */}
      
    </header>
  );
}
