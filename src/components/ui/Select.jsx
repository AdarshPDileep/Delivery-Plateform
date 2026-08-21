import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Select({ 
  label, error, id, options = [], className = '', wrapperClassName = '', ...props 
}) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`w-full appearance-none px-3 py-2 pr-10 bg-white border ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-300 focus:border-navy-500 focus:ring-navy-500/20'} rounded-lg text-sm focus:outline-none focus:ring-4 transition-all ${className}`}
          {...props}
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value ?? opt}>{opt.label ?? opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}
