import React, { useState } from 'react';
import { 
  Map, Search, Navigation, MapPin, Truck, Crosshair, 
  Layers, ShieldAlert, CheckCircle2, User, Phone, MoreVertical
} from 'lucide-react';

export default function CommerzaMaps() {
  const [searchPin, setSearchPin] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 px-6 bg-[#0a0f1a] text-white relative overflow-hidden border-b-4 border-[#e31837]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute right-[10%] top-[20%] w-64 h-64 bg-[#e31837] rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-md shadow-lg border border-white/20">
              <Map className="w-8 h-8 text-[#e31837]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display flex items-center gap-4 text-white">
              Commerza Maps
              <span className="text-xs font-bold text-white bg-[#e31837] px-3 py-1 rounded-full uppercase tracking-widest align-middle">Beta</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Intelligent mapping, routing, and geo-coding built specifically for the complexities of modern logistics networks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded font-bold transition-colors shadow-xl hover:bg-gray-100">
                Get API Access
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="bg-white rounded-3xl p-2 shadow-2xl w-full max-w-lg relative overflow-hidden">
              <div className="w-full h-72 bg-gray-100 rounded-2xl relative overflow-hidden">
                {/* Mock Map Background */}
                <div className="absolute inset-0 bg-gray-50" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Route Line */}
                <div className="absolute top-[40%] left-[20%] w-[60%] h-[20%] border-t-2 border-l-2 border-dashed border-[#e31837] rounded-tl-3xl"></div>
                
                {/* Hub Point */}
                <div className="absolute top-[40%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-6 h-6 bg-[#e31837] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-800 shadow mt-1">Trivandrum Hub</span>
                </div>

                {/* Destination Point */}
                <div className="absolute top-[60%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-800 shadow mt-1">Kochi Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Geocoding & Route Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pincode Serviceability */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-black font-display text-gray-900 mb-6 flex items-center gap-3">
              <Crosshair className="w-6 h-6 text-[#e31837]" />
              Pincode Serviceability
            </h3>
            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
              <input 
                type="text" 
                placeholder="Enter Pincode (e.g., 695001)" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#e31837] focus:outline-none" 
                required 
              />
              <button type="submit" className="bg-gray-900 text-white px-6 font-bold rounded-lg hover:bg-gray-800 transition-colors">
                Search
              </button>
            </form>

            {showResult ? (
              <div className="animate-fade-in border border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-red-900">Geographic Hierarchy</h4>
                    <p className="text-xs text-red-700">Verified by Commerza Maps</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">State</span>
                    <span className="font-bold text-gray-900">Kerala</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Zone</span>
                    <span className="font-bold text-gray-900">South Kerala</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">District</span>
                    <span className="font-bold text-gray-900">Thiruvananthapuram</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Taluk</span>
                    <span className="font-bold text-gray-900">Thiruvananthapuram</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Town</span>
                    <span className="font-bold text-gray-900">Trivandrum</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-gray-700">Pickup</span>
                  </div>
                  <div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-gray-700">Delivery</span>
                  </div>
                  <div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-gray-700">COD</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                <Search className="w-8 h-8 mb-2 opacity-50" />
                <p className="font-medium text-sm">Search a pincode to see results</p>
              </div>
            )}
          </div>

          {/* Route Planner */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-black font-display text-gray-900 mb-6 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-[#e31837]" />
              Network Route Planner
            </h3>
            
            <div className="bg-[#111] rounded-xl p-6 text-white mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e31837]/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#e31837] shadow-[0_0_10px_rgba(227,24,55,0.5)]"></div>
                  <div className="w-0.5 h-12 bg-gray-700 my-1"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Origin Hub</p>
                    <p className="font-bold text-lg font-display">Trivandrum Hub</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Destination Hub</p>
                    <p className="font-bold text-lg font-display">Kochi Hub</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-100 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Total Distance</p>
                <p className="text-xl font-black text-gray-900">208 km</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Estimated TAT</p>
                <p className="text-xl font-black text-[#e31837]">4 hr 30 min</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Linehaul Route Path</p>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
                <span className="bg-red-50 text-red-700 font-bold px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Trivandrum</span>
                <span className="text-gray-300">→</span>
                <span className="bg-gray-50 text-gray-700 font-bold px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Kollam</span>
                <span className="text-gray-300">→</span>
                <span className="bg-gray-50 text-gray-700 font-bold px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Alappuzha</span>
                <span className="text-gray-300">→</span>
                <span className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Kochi</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Agent Map Preview */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-black font-display text-gray-900 mb-6">Delivery Agent Map & Territories</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Visualize your entire delivery fleet in real-time. Our polygon mapping technology accurately detects localities and assigns deliveries to the correct franchise and agent beat.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e31837] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Real-time GPS tracking of field executives</span>
              .
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e31837] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Franchise delivery territory drawing & geofencing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e31837] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Dynamic route optimization for multi-stop deliveries</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="w-full h-[400px] bg-white rounded-3xl shadow-xl border border-gray-100 p-2 overflow-hidden relative">
              {/* Fake Map Grid */}
              <div className="absolute inset-0 bg-gray-50" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Geofence Polygon */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,50 300,80 350,250 150,350 20,200" fill="rgba(227,24,55,0.05)" stroke="rgba(227,24,55,0.5)" strokeWidth="2" strokeDasharray="5,5" />
              </svg>

              {/* Agent Popup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 mb-2 w-48 relative">
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Rahul K</p>
                      <p className="text-[10px] font-bold text-emerald-600">ON DUTY • 17 left</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-100 text-xs text-gray-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Kazhakkoottam
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#e31837] border-2 border-white rounded-full shadow-md z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
