import React from 'react';
import { X, Package, Truck, MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const dummyTracking = {
  awb: '',
  status: 'In Transit',
  estimatedDelivery: 'Sep 01, 2026',
  origin: 'Mumbai, Maharashtra',
  destination: 'Bangalore, Karnataka',
  weight: '2.5 kg',
  type: 'Express Parcel',
  timeline: [
    {
      status: 'Order Placed',
      location: 'Mumbai, MH',
      date: 'Aug 27, 2026',
      time: '10:30 AM',
      completed: true,
    },
    {
      status: 'Picked Up',
      location: 'Mumbai Hub, MH',
      date: 'Aug 27, 2026',
      time: '02:15 PM',
      completed: true,
    },
    {
      status: 'In Transit',
      location: 'Pune Sort Center, MH',
      date: 'Aug 28, 2026',
      time: '06:45 AM',
      completed: true,
    },
    {
      status: 'Arrived at Hub',
      location: 'Hubli Transit Hub, KA',
      date: 'Aug 28, 2026',
      time: '11:30 PM',
      completed: true,
    },
    {
      status: 'Out for Delivery',
      location: 'Bangalore Last Mile, KA',
      date: 'Aug 29, 2026',
      time: '08:00 AM',
      completed: false,
      current: true,
    },
    {
      status: 'Delivered',
      location: 'Bangalore, KA',
      date: 'Expected Sep 01',
      time: '',
      completed: false,
    },
  ],
};

export default function TrackingResultModal({ isOpen, onClose, trackingNumber }) {
  if (!isOpen) return null;

  const tracking = { ...dummyTracking, awb: trackingNumber };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col animate-modalIn">
        
        {/* Header */}
        <div className="bg-[#111111] px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Tracking Number</p>
            <p className="text-white font-bold text-lg tracking-wide">{tracking.awb}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Banner */}
        <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Truck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-emerald-800 text-sm">{tracking.status}</p>
              <p className="text-emerald-600 text-xs">Est. delivery: {tracking.estimatedDelivery}</p>
            </div>
          </div>
          <span className="text-xs font-semibold bg-emerald-600 text-white px-3 py-1 rounded-full">{tracking.type}</span>
        </div>

        {/* Shipment Details */}
        <div className="px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-3 h-3 text-gray-500" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Origin</p>
                <p className="text-gray-900 font-semibold text-xs">{tracking.origin}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded bg-[#E31837]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-3 h-3 text-[#E31837]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Destination</p>
                <p className="text-gray-900 font-semibold text-xs">{tracking.destination}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-6 py-5 overflow-y-auto flex-1">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-4">Shipment Timeline</p>
          <div className="space-y-0">
            {tracking.timeline.map((step, index) => {
              const isLast = index === tracking.timeline.length - 1;
              return (
                <div key={index} className="flex gap-4">
                  {/* Timeline Dot & Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.current 
                        ? 'bg-[#E31837] ring-4 ring-[#E31837]/20' 
                        : step.completed 
                          ? 'bg-emerald-500' 
                          : 'bg-gray-200'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      ) : step.current ? (
                        <Truck className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </div>
                    {!isLast && (
                      <div className={`w-0.5 h-10 ${step.completed ? 'bg-emerald-300' : 'bg-gray-200'}`}></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className={`pb-6 ${step.current ? '' : ''}`}>
                    <p className={`font-semibold text-sm ${step.current ? 'text-[#E31837]' : step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.status}
                    </p>
                    <p className="text-gray-500 text-xs">{step.location}</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">
                      {step.date} {step.time && `• ${step.time}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between flex-shrink-0">
          <p className="text-gray-400 text-[10px]">Weight: {tracking.weight}</p>
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
