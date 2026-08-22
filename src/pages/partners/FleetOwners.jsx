import React, { useEffect } from 'react';
import { 
  Truck, ArrowRight, ShieldCheck, Clock, Map, User, Key, CheckCircle2, FileText, Building2, TrendingUp, MapPin
} from 'lucide-react';

export default function FleetOwners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-[#e31837] font-bold text-sm tracking-wide mb-8">
            <Truck className="w-4 h-4" /> LINEHAUL PARTNERS
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 leading-tight">
            Move More with <span className="text-[#e31837]">Commerza Global</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-medium">
            Partner your commercial vehicles with our logistics network and support high-volume hub-to-hub and regional transportation operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded shadow-lg shadow-red-500/30 hover:bg-red-700 transition-colors">
              Register Your Fleet
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
              Talk to Operations
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Partner & Vehicles */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 inline-flex flex-col">
              Who Can Partner?
              <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4">
                <User className="w-8 h-8 text-[#e31837]" />
                <h3 className="font-bold text-gray-900">Individual Vehicle Owners</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4">
                <Truck className="w-8 h-8 text-[#e31837]" />
                <h3 className="font-bold text-gray-900">Fleet Operators</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4">
                <Building2 className="w-8 h-8 text-[#e31837]" />
                <h3 className="font-bold text-gray-900">Transport Companies</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4">
                <Map className="w-8 h-8 text-[#e31837]" />
                <h3 className="font-bold text-gray-900">Regional Transport Partners</h3>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 inline-flex flex-col">
              Supported Vehicle Categories
              <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">Mini Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">Pickup Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">14 ft Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">17 ft Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">19 ft Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">22 ft Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">32 ft Truck</span>
              <span className="bg-gray-900 text-white px-4 py-2 font-bold text-sm rounded">Trailer</span>
            </div>
          </div>

        </div>
      </section>

      {/* Operations Preview */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Linehaul Operations Dashboard</h2>
            <p className="text-gray-400">Complete visibility over your trips, route assignments, and manifests.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Route Assignment */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e31837]/10 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Map className="w-5 h-5 text-[#e31837]" /> Route Assignment
              </h3>
              
              <div className="bg-black border border-gray-800 p-6 rounded-xl mb-6 relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Origin</p>
                    <p className="font-bold">Trivandrum Hub</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative px-4">
                    <div className="w-full h-0.5 bg-gray-700 border-t border-dashed border-gray-500"></div>
                    <Truck className="w-5 h-5 text-[#e31837] absolute bg-black px-1" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Destination</p>
                    <p className="font-bold">Kochi Hub</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Distance</p>
                    <p className="font-bold">205 km</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Load</p>
                    <p className="font-bold">42 Bags</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Shipments</p>
                    <p className="font-bold">386</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Management */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#e31837]" /> Trip Management
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-black border border-gray-800 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Trip ID: <span className="text-white">TRP-2026-8842</span></p>
                    <p className="font-bold text-sm">TVM → KOC</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold bg-[#e31837]/20 text-[#e31837] border border-[#e31837]/50 px-2 py-1 rounded">IN TRANSIT</span>
                  </div>
                </div>
                
                <div className="bg-black border border-gray-800 p-4 rounded-xl flex justify-between items-center opacity-50">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Trip ID: <span className="text-white">TRP-2026-8841</span></p>
                    <p className="font-bold text-sm">KOC → CBE</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold bg-green-900/30 text-green-500 border border-green-800 px-2 py-1 rounded">COMPLETED</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <p className="text-sm font-bold text-gray-300">Active Manifest: MNF-2026-9001</p>
                </div>
                <p className="text-xs text-gray-500">42 Bags • 386 Shipments • TVM Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Fleet Partner Benefits
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <TrendingUp className="w-10 h-10 text-[#e31837] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Regular Movement</h3>
              <p className="text-sm text-gray-600">Consistent hub-to-hub loads ensuring steady vehicle utilization.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <MapPin className="w-10 h-10 text-[#e31837] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Route Visibility</h3>
              <p className="text-sm text-gray-600">Clear scheduling and route assignments ahead of time.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <FileText className="w-10 h-10 text-[#e31837] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Digital Records</h3>
              <p className="text-sm text-gray-600">Paperless trip management and digital manifest handovers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <ShieldCheck className="w-10 h-10 text-[#e31837] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Operational Support</h3>
              <p className="text-sm text-gray-600">24/7 central support for all transit and loading issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Registration Form */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-black mb-8 text-gray-900 text-center">Register Fleet</h2>
          
          <form className="space-y-8">
            {/* Owner Details */}
            <div>
              <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Owner / Company Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Owner / Company Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                <div className="flex gap-4">
                  <input type="text" placeholder="GST (Optional)" className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  <input type="text" placeholder="PAN" className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div>
              <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Vehicle Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Vehicle Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]">
                  <option>Select Vehicle Type</option>
                  <option>14 ft Truck</option>
                  <option>17 ft Truck</option>
                  <option>19 ft Truck</option>
                  <option>32 ft Truck</option>
                </select>
                <input type="text" placeholder="Capacity (Tons)" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                <input type="text" placeholder="Manufacturing Year" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Required Documents for Verification</h4>
              <ul className="text-sm text-gray-600 font-medium grid grid-cols-2 gap-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Vehicle RC</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Valid Insurance</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Fitness Certificate</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Route Permit</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Pollution Certificate</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Driver's Licence</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 text-center">
              <button type="button" className="bg-[#e31837] text-white px-10 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-200 w-full sm:w-auto">
                Submit Fleet Registration
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
