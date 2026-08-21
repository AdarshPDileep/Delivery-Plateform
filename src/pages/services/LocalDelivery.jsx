import React, { useState } from 'react';
import { 
  Send, MapPin, Search, Calendar, Bike, CheckCircle2, 
  Clock, Shield, Navigation, CreditCard, RotateCcw, Bell, User, Phone, Package
} from 'lucide-react';

export default function LocalDelivery() {
  const steps = [
    { title: 'Order Created', desc: 'Booked via portal or API' },
    { title: 'Nearest Franchise', desc: 'Assigned based on geofence' },
    { title: 'Agent Assigned', desc: 'Beat-level optimization' },
    { title: 'Pickup', desc: 'Secure handover' },
    { title: 'In Transit', desc: 'Live GPS tracking' },
    { title: 'Customer', desc: 'Arrived at location' },
    { title: 'OTP / POD', desc: 'Digital signature & photo' }
  ];

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 px-6 bg-gradient-to-br from-purple-600 to-fuchsia-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              Local Delivery
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl leading-relaxed mb-10">
              Fast intra-city and hyperlocal pickup and delivery. Meet your customers' demand for instant gratification with our rapid delivery fleet.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl">
                Book a Delivery
              </button>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-colors">
                View Coverage
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-sm text-gray-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-gray-100">
                {/* Mock Map Background */}
                <div className="w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>
              
              <div className="relative pt-32">
                <div className="bg-white rounded-xl shadow-lg -mt-8 p-4 mb-4 relative z-10 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold font-display text-gray-900">Order #CG34242</span>
                    <span className="text-xs font-bold text-white bg-purple-600 px-2 py-1 rounded-md">ETA: 23 min</span>
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-4">Out for Delivery</p>
                  
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">Rahul K.</p>
                      <p className="text-xs text-gray-500">Delivery Agent</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12">
          <h3 className="text-2xl font-black font-display mb-8">Book Local Delivery</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Pickup */}
            <div>
              <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs">1</div>
                Pickup Details
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pickup Address</label>
                  <textarea rows="2" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pincode</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs">2</div>
                Delivery Details
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Customer Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Delivery Address</label>
                  <textarea rows="2" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pincode</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Package & Preference */}
            <div className="md:col-span-2">
              <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs">3</div>
                Package & Preferences
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Package Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none bg-white">
                    <option>Documents</option>
                    <option>Food / Perishables</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Weight</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:outline-none bg-white">
                    <option>Up to 1 kg</option>
                    <option>1 - 3 kg</option>
                    <option>3 - 5 kg</option>
                    <option>5+ kg</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Delivery Preference</label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="pref" className="w-4 h-4 text-purple-600 focus:ring-purple-600" defaultChecked />
                      <span className="text-sm font-medium">Standard (Next Day)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="pref" className="w-4 h-4 text-purple-600 focus:ring-purple-600" />
                      <span className="text-sm font-medium">Same Day</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="pref" className="w-4 h-4 text-purple-600 focus:ring-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Priority (2 Hours)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <button className="bg-gray-900 text-white font-bold py-4 px-12 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Book Delivery <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Delivery Flow */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black font-display text-gray-900 mb-4">The Delivery Flow</h2>
            <p className="text-gray-500">Optimized agent beats and geofenced routing.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 text-center relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-4 h-0.5 bg-purple-200"></div>
                )}
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
