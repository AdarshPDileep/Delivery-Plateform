import React from 'react';

export default function Input({ 
  label, error, id, type = 'text', className = '', wrapperClassName = '', ...props 
}) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`px-3 py-2 bg-white border ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-300 focus:border-navy-500 focus:ring-navy-500/20'} rounded-lg text-sm focus:outline-none focus:ring-4 transition-all placeholder:text-slate-400 ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}
