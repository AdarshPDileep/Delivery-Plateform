import { useState } from 'react';

export default function Tabs({ tabs, defaultTab }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.key);
  const activeTab = tabs.find(t => t.key === active);

  return (
    <div>
      <div className="flex gap-1 border-b border-slate-200 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => setActive(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200
              ${active === tab.key
                ? 'border-navy-600 text-navy-700'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}>
            {tab.label}
            {tab.count !== undefined && (
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${active === tab.key ? 'bg-navy-100 text-navy-600' : 'bg-slate-100 text-slate-500'}`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      {activeTab?.content}
    </div>
  );
}
