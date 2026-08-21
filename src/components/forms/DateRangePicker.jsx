import React, { useState } from 'react';
import Input from '../ui/Input';

export default function DateRangePicker({ startDate, endDate, onChange, label, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <div className="flex items-center gap-2">
        <Input 
          type="date" 
          value={startDate || ''} 
          onChange={e => onChange?.({ startDate: e.target.value, endDate })}
          className="flex-1"
        />
        <span className="text-slate-400">to</span>
        <Input 
          type="date" 
          value={endDate || ''} 
          onChange={e => onChange?.({ startDate, endDate: e.target.value })}
          className="flex-1"
        />
      </div>
    </div>
  );
}
