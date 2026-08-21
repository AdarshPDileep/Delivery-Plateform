import React from 'react';
import { getInitials } from '../../utils/helpers';

export default function Avatar({ name, size = 'md', img, className = '' }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };

  return (
    <div className={`relative inline-flex items-center justify-center bg-navy-100 text-navy-700 font-bold rounded-full overflow-hidden ${sizes[size]} ${className}`}>
      {img ? (
        <img src={img} alt={name} className="w-full h-full object-cover" />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}
