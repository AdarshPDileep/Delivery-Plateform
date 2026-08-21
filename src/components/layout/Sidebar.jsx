import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ links, portalName, color = 'bg-navy-900' }) {
  return (
    <aside className={`w-64 flex-shrink-0 ${color} text-white flex flex-col h-screen sticky top-0`}>
      <div className="h-16 flex items-center px-6 border-b border-white/10 font-bold text-xl tracking-wide">
        Commerza<span className="text-[#E31837]">Global</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-1.5 px-3">
          {links.map(link => {
            if (link.isDivider) {
              return <div key={link.label} className="pt-6 pb-2 px-3 text-xs font-bold text-gray-500 uppercase tracking-widest">{link.label}</div>;
            }
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? 'bg-[#E31837] text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.icon && <link.icon className="w-5 h-5" />}
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
