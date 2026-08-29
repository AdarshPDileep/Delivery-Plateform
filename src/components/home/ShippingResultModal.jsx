import React from 'react';
import { X, Package, MapPin, CheckCircle, CreditCard } from 'lucide-react';

const dummyShippingData = {
  pickupCode: '110001',
  deliveryCode: '560001',
  serviceType: 'Express Parcel',
  estimatedTime: '2-3 Business Days',
  cost: '₹ 149.00',
  distance: '~2,050 km',
};

export default function ShippingResultModal({ isOpen, onClose, pickupCode, deliveryCode, shipType }) {
  if (!isOpen) return null;

  const data = {
    ...dummyShippingData,
    pickupCode: pickupCode || dummyShippingData.pickupCode,
    deliveryCode: deliveryCode || dummyShippingData.deliveryCode,
    serviceType: shipType === 'international' ? 'International Express' : 'Domestic Express'
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col animate-modalIn">
        
        {/* Header */}
        <div className="bg-[#111111] px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Serviceability Check</p>
            <p className="text-white font-bold text-lg tracking-wide">Shipment Quote</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Banner */}
        <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100 flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="font-bold text-emerald-800 text-sm">Service Available</p>
            <p className="text-emerald-600 text-xs">We can pick up and deliver to these locations.</p>
          </div>
        </div>

        {/* Routing Details */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-3 top-3 bottom-3 w-px bg-gray-200 border-l border-dashed border-gray-300"></div>
            
            <div className="flex gap-4 mb-6 relative z-10">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3 h-3 text-gray-500" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Pickup From</p>
                <p className="text-gray-900 font-bold text-sm">Pincode: {data.pickupCode}</p>
              </div>
            </div>

            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3 h-3 text-[#E31837]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Deliver To</p>
                <p className="text-gray-900 font-bold text-sm">Pincode: {data.deliveryCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quotation details */}
        <div className="px-6 py-5 bg-gray-50 flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Service</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{data.serviceType}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Est. Time</span>
            </div>
            <span className="text-sm font-bold text-emerald-600">{data.estimatedTime}</span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-gray-900" />
              <span className="text-base font-bold text-gray-900">Estimated Cost</span>
            </div>
            <span className="text-xl font-black text-[#E31837]">{data.cost}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <p className="text-gray-400 text-[10px]">Estimated distance: {data.distance}</p>
          <button
            onClick={onClose}
            className="text-sm font-semibold text-[#E31837] hover:underline flex items-center gap-1"
          >
            Close <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modalIn {
          animation: modalIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
