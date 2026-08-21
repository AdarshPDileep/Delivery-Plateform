import React from 'react';

export default function Checkbox({ checked, onChange, label, id, className = '' }) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <label htmlFor={checkboxId} className={`flex items-start gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-0.5 rounded border-slate-300 text-navy-600 focus:ring-navy-500 cursor-pointer"
      />
      {label && <span className="text-sm text-slate-700 select-none">{label}</span>}
    </label>
  );
}
