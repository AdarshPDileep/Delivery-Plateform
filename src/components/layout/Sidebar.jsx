import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ links, portalName, color = 'bg-navy-900' }) {
  return (
    <aside className={`w-64 flex-shrink-0 ${color} text-white flex flex-col h-screen sticky top-0`}>
      <div className="h-16 flex items-center px-6 border-b border-white/10 font-bold text-lg tracking-wide">
        CommerzaGlobal
        <span className="ml-2 text-xs font-medium bg-white/20 px-2 py-0.5 rounded-full">{portalName}</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {links.map(link => {
            if (link.isDivider) {
              return <div key={link.label} className="pt-4 pb-1 px-3 text-xs font-semibold text-white/50 uppercase tracking-wider">{link.label}</div>;
            }
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
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
