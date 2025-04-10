import React from 'react';
import * as Icons from 'lucide-react';

export default function StatusCard({ color = "#787F9E", icon = "Check", label, value, size = "medium", textColor = "white" }) {
  const Icon = Icons[icon] || Icons.Check;

  const sizeStyles = {
    small: 'p-3 text-sm',
    medium: 'p-5 text-base',
    large: 'p-6 text-lg',
  };

  return (
    <div
      className={`rounded-full flex items-center gap-4 ${sizeStyles[size]}`}
      style={{ backgroundColor: color }}
    >
      <div className="p-3 rounded-full bg-white/20">
        <Icon className={`w-5 h-5`} color={textColor} />
      </div>
      <div className="text-left text-white">
        <p className="text-xl font-semibold text-white">{value}</p>
        <p className="text-sm opacity-90">{label}</p>
      </div>
    </div>
  );
}
