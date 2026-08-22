import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ links, portalName, color = 'bg-navy-900', activeColor = 'bg-[#E31837]', activeShadow = 'shadow-red-900/20' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = !isCollapsed || isHovered;

  return (
    <aside 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isExpanded ? 'w-64' : 'w-20'} flex-shrink-0 ${color} text-white flex flex-col h-screen sticky top-0 transition-all duration-300 relative z-20`}
    >
      <div className={`p-6 flex flex-col ${isExpanded ? 'items-start' : 'items-center'} min-h-[104px] transition-all`}>
        {!isExpanded ? (
          <span className="text-2xl font-black text-[#E31837]">C</span>
        ) : (
          <>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center whitespace-nowrap overflow-hidden">
              Commerza<span className="text-[#E31837]">Global</span>
            </h1>
            <p className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest whitespace-nowrap overflow-hidden">{portalName}</p>
          </>
        )}
      </div>

      <nav className={`flex-1 overflow-y-auto no-scrollbar py-4 ${isExpanded ? 'px-4' : 'px-2'}`}>
        <div className={`space-y-1.5 ${isExpanded ? 'px-3' : 'px-1'}`}>
          {links.map(link => {
            if (link.isDivider) {
              return !isExpanded ? (
                <div key={link.label} className="pt-6 pb-2 border-b border-white/10 mx-2 mb-2"></div>
              ) : (
                <div key={link.label} className="pt-6 pb-2 px-3 text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">{link.label}</div>
              );
            }
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                title={!isExpanded ? link.label : ""}
                className={({ isActive }) => 
                  `flex items-center ${isExpanded ? 'gap-3 px-3' : 'justify-center'} py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? `${activeColor} text-white shadow-lg ${activeShadow}` : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.icon && <link.icon className="w-5 h-5 flex-shrink-0" />}
                {isExpanded && <span className="whitespace-nowrap overflow-hidden transition-all duration-300 opacity-100">{link.label}</span>}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Toggle Button */}
      <div className={`p-4 border-t border-white/10 flex ${isExpanded ? 'justify-end' : 'justify-center'}`}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
          title={isCollapsed ? "Lock expanded" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
}
