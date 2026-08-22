import React, { useState } from 'react';
import { Package, MapPin, CreditCard, Scale, CheckCircle2 } from 'lucide-react';

export default function SellerBooking() {
  const [step, setStep] = useState(1);
  const [paymentMode, setPaymentMode] = useState('Prepaid');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create Shipment</h1>
        <p className="text-gray-500 text-sm mt-1">Enter buyer, pickup, and package details to generate an AWB.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Form Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Buyer Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#065f46]/10 text-[#065f46] flex items-center justify-center font-bold">1</div>
              <h2 className="font-bold text-gray-900">Buyer Details</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="Enter buyer name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Mobile Number</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="10-digit mobile" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Complete Address</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="House/Flat No., Building Name, Street" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Pincode</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="e.g. 110001" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">City & State</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 focus:outline-none text-gray-500" placeholder="Auto-filled from pincode" readOnly />
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#065f46]/10 text-[#065f46] flex items-center justify-center font-bold">2</div>
              <h2 className="font-bold text-gray-900">Order & Package Details</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Order ID</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="e.g. ORD-1001" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Product Description</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="What are you shipping?" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Package Weight & Dimensions</label>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <input type="number" className="w-full border border-gray-200 rounded-lg pl-4 pr-12 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="Weight" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">KG</span>
                  </div>
                  <span className="text-gray-300">×</span>
                  <div className="relative flex-1">
                    <input type="number" className="w-full border border-gray-200 rounded-lg pl-4 pr-12 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="Length" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">CM</span>
                  </div>
                  <span className="text-gray-300">×</span>
                  <div className="relative flex-1">
                    <input type="number" className="w-full border border-gray-200 rounded-lg pl-4 pr-12 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="Width" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">CM</span>
                  </div>
                  <span className="text-gray-300">×</span>
                  <div className="relative flex-1">
                    <input type="number" className="w-full border border-gray-200 rounded-lg pl-4 pr-12 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all" placeholder="Height" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">CM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-gray-400" />
              Payment Details
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button 
                onClick={() => setPaymentMode('Prepaid')}
                className={`py-2 rounded-lg font-medium text-sm border-2 transition-all ${
                  paymentMode === 'Prepaid' 
                    ? 'border-[#065f46] bg-emerald-50 text-[#065f46]' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Prepaid
              </button>
              <button 
                onClick={() => setPaymentMode('COD')}
                className={`py-2 rounded-lg font-medium text-sm border-2 transition-all ${
                  paymentMode === 'COD' 
                    ? 'border-[#065f46] bg-emerald-50 text-[#065f46]' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Cash on Delivery
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                {paymentMode === 'COD' ? 'Amount to Collect' : 'Order Value'}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input type="number" className="w-full border border-gray-200 rounded-lg pl-8 pr-4 py-2.5 focus:outline-none focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] transition-all text-lg font-bold text-gray-900" placeholder="0.00" />
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-500">Estimated Shipping Rate</span>
                <span className="font-bold text-gray-900">₹65.00</span>
              </div>
              {paymentMode === 'COD' && (
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>COD Charges</span>
                  <span>₹40.00</span>
                </div>
              )}
            </div>
          </div>

          <button className="w-full bg-[#065f46] hover:bg-[#064e3b] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all">
            Generate Shipping Label
          </button>
        </div>
      </div>
    </div>
  );
}
