import React from 'react';

export default function Card({ children, className = '', padding = 'p-5', noBorder = false }) {
  return (
    <div className={`bg-white rounded-xl ${noBorder ? '' : 'border border-slate-200'} shadow-sm ${padding} ${className}`}>
      {children}
    </div>
  );
}
