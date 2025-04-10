import React from 'react';
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  Settings,
  ChevronDown,
  Menu
} from 'lucide-react';
import { Sun, Moon } from 'lucide-react';
import logo from '../img/point-motion.png'; // Adjust if needed
import { Link } from 'react-router-dom';
export default function Sidebar({ toggleDark }) {
  return (
    <aside className="w-[220px] min-h-screen bg-white text-gray-700 flex flex-col justify-between border-r">
      {/* Logo */}
      <div className="pt-6 px-6 relative">
        <img src={logo} alt="Logo" className="mx-auto w- h-40 pb-5" />
       
        <span className="absolute top-2 right-4 text-[10px] text-gray-500">v.01</span>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-1 px-4 flex-1">
        <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="/" active />
        <SidebarItem icon={<Menu size={20} />} label="My Tasks" to="/tasks" />
        <SidebarItem icon={<Calendar size={20} />} label="Calendar" to="/calendar"  />
        <SidebarItem icon={<Settings size={20} />} label="Settings" to="/settings" />
      </nav>

      {/* Bottom profile */}
      <div className="border-t border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/100"
            className="h-10 w-10 rounded-full object-cover"
            alt="user"
          />
          <div className="text-xs leading-tight">
            <p className="font-bold text-gray-900">Evano</p>
            <p className="text-gray-500">Project Manager</p>
          </div>
        </div>
        <ChevronDown size={18} className="text-gray-500" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, to, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-between px-4 py-2 rounded-r-full ${
        active
          ? 'bg-[#FAEDEB] text-[#9B3D3D] border-r-4 border-[#9B3D3D]'
          : 'hover:bg-gray-100 text-gray-600'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </Link>
  );
}