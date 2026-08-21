import React from 'react';

const stats = [
  { value: '2 Billion+', label: 'Orders fulfilled' },
  { value: '18,500+', label: 'Pin codes covered' },
  { value: '21+', label: 'Million sqft infrastructure' },
  { value: '30,000+', label: 'Active Customers' }
];

export default function StatsSection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 divide-x-0 md:divide-x divide-gray-700">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start md:pl-10 text-center md:text-left first:pl-0">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#E31837] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-lg uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
