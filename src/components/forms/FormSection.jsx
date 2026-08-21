import React from 'react';

export default function FormSection({ title, description, children, className = '' }) {
  return (
    <div className={`p-6 bg-white border border-slate-200 rounded-xl shadow-sm ${className}`}>
      {(title || description) && (
        <div className="mb-5 pb-4 border-b border-slate-100">
          {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
          {description && <p className="text-sm text-slate-500 mt-1">{description}</p>}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
