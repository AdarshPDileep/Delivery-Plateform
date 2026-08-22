import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

export default function TrackingModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('Mobile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Click away to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Track your <span className="font-normal text-gray-500">order</span>
        </h2>
        
        <div className="flex border border-gray-200 rounded-lg mb-8 text-sm font-bold overflow-hidden">
          {['Mobile', 'AWB', 'Order Id', 'LRN'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center transition-colors ${activeTab === tab ? 'bg-[#111111] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder={`Enter your ${activeTab.toLowerCase()}${activeTab === 'Mobile' ? ' number' : ''}`}
            className="w-full p-4 pl-12 border-2 border-gray-100 rounded-lg outline-none focus:border-black text-lg transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        
        <button className="w-full bg-[#e31837] text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 text-lg">
          {activeTab === 'Mobile' ? 'Get OTP & Track' : 'Track Order'}
        </button>
        
        <p className="text-center text-xs text-gray-400 mt-6 font-medium">
          Need help? <a href="#" className="text-[#e31837] hover:underline">Contact Customer Support</a>
        </p>

      </div>
    </div>
  );
}
