import React from 'react';

export default function RadioGroup({ options, value, onChange, name, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((opt, i) => {
        const optValue = typeof opt === 'string' ? opt : opt.value;
        const optLabel = typeof opt === 'string' ? opt : opt.label;
        const id = `${name}-${optValue}-${i}`;
        
        return (
          <label key={id} htmlFor={id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id={id}
              name={name}
              value={optValue}
              checked={value === optValue}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-navy-600 border-slate-300 focus:ring-navy-500 cursor-pointer"
            />
            <span className="text-sm text-slate-700">{optLabel}</span>
          </label>
        );
      })}
    </div>
  );
}
