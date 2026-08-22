import React, { useState } from 'react';
import { 
  Package, MapPin, Search, Calendar, Truck, CheckCircle2, 
  Clock, Shield, Navigation, CreditCard, RotateCcw, Bell
} from 'lucide-react';

export default function ExpressParcel() {
  const [activeTab, setActiveTab] = useState('rate');
  const [serviceability, setServiceability] = useState(null);

  const checkServiceability = (e) => {
    e.preventDefault();
    setServiceability(true);
  };

  const steps = [
    { title: 'Create Shipment', desc: 'Upload orders via API or dashboard' },
    { title: 'Generate AWB', desc: 'Instant label generation' },
    { title: 'Schedule Pickup', desc: 'Assign agent automatically' },
    { title: 'Pickup & Scan', desc: 'Real-time inscan at origin' },
    { title: 'In Transit', desc: 'Linehaul via national network' },
    { title: 'Out for Delivery', desc: 'Last mile agent dispatched' },
    { title: 'Delivered', desc: 'OTP & digital POD collected' }
  ];

  const features = [
    { title: 'Doorstep Pickup', icon: Truck },
    { title: 'Nationwide Delivery', icon: Navigation },
    { title: 'COD Delivery', icon: CreditCard },
    { title: 'Real-Time Tracking', icon: MapPin },
    { title: 'Reverse Pickup', icon: RotateCcw },
    { title: 'Delivery Notifications', icon: Bell },
  ];

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 px-6 relative overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1624026601441-2a628e35998b?auto=format&fit=crop&q=80')]" />
        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-800/90 to-red-600/70" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              Express Parcel Delivery
            </h1>
            <p className="text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed mb-10">
              Fast, reliable, and technology-driven parcel delivery for e-commerce businesses and enterprises across 19,000+ pin codes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-red-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl">
                Start Shipping
              </button>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-colors">
                Track Shipment
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-sm text-gray-800">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <div className="bg-red-50 p-3 rounded-full">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-display">Shipment #CG928472</h3>
                  <p className="text-xs text-emerald-600 font-bold">● Out for Delivery</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1"><MapPin className="w-5 h-5 text-gray-400" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Origin</p>
                    <p className="font-medium text-gray-900">Bangalore, KA</p>
                  </div>
                </div>
                <div className="ml-2.5 w-0.5 h-6 bg-gray-200"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1"><Navigation className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Destination</p>
                    <p className="font-medium text-gray-900">Mumbai, MH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs & Enterprise Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto -mt-10 relative z-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Tabbed Form */}
          <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {/* Tab Navigation */}
            <div className="flex gap-6 mb-8 border-b border-gray-100 pb-2">
              <button 
                onClick={() => setActiveTab('rate')}
                className={`font-bold pb-2 relative transition-colors ${activeTab === 'rate' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Rate Calculator
                {activeTab === 'rate' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>}
              </button>
              <button 
                onClick={() => setActiveTab('service')}
                className={`font-bold pb-2 relative transition-colors ${activeTab === 'service' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Check Serviceability
                {activeTab === 'service' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>}
              </button>
              <button 
                onClick={() => setActiveTab('track')}
                className={`font-bold pb-2 relative transition-colors ${activeTab === 'track' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Track Order
                {activeTab === 'track' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>}
              </button>
            </div>

            {/* Tab Content */}
            <div className="animate-fade-in">
              {activeTab === 'rate' && (
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Pickup Pincode</label>
                      <input type="text" placeholder="e.g. 10001" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Delivery Pincode</label>
                      <input type="text" placeholder="e.g. 90210" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Weight (kg)</label>
                      <input type="number" placeholder="0.0" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div className="col-span-2 md:col-span-3">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dimensions (L X W X H CM)</label>
                      <div className="grid grid-cols-3 gap-2">
                        <input type="number" placeholder="L" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                        <input type="number" placeholder="W" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                        <input type="number" placeholder="H" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Payment Mode</label>
                      <select className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none bg-white text-gray-700">
                        <option>Prepaid</option>
                        <option>Cash on Delivery</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Declared Value ($)</label>
                      <input type="number" placeholder="0.00" className="w-full px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none placeholder-gray-300" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-gray-50">
                    <button className="bg-[#0f172a] text-white font-bold py-3 px-8 text-sm hover:bg-gray-800 transition-colors rounded-sm">
                      Calculate Rate
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'service' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold font-display mb-6">Check Serviceability</h3>
                  <form onSubmit={checkServiceability} className="flex gap-4 mb-8">
                    <input type="text" placeholder="Enter Delivery Pincode" className="flex-1 px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none" required />
                    <button type="submit" className="bg-[#0f172a] text-white px-8 font-bold rounded-sm hover:bg-gray-800 transition-colors">
                      Check
                    </button>
                  </form>

                  {serviceability && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded p-6 animate-fade-in">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-bold text-emerald-900">Service Available</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-3 rounded text-center shadow-sm">
                          <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Pickup</span>
                          <span className="font-bold text-gray-900 text-sm">Available</span>
                        </div>
                        <div className="bg-white p-3 rounded text-center shadow-sm">
                          <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Delivery</span>
                          <span className="font-bold text-gray-900 text-sm">Available</span>
                        </div>
                        <div className="bg-white p-3 rounded text-center shadow-sm">
                          <span className="block text-xs text-gray-500 uppercase font-bold mb-1">COD</span>
                          <span className="font-bold text-gray-900 text-sm">Available</span>
                        </div>
                        <div className="bg-white p-3 rounded text-center shadow-sm">
                          <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Transit</span>
                          <span className="font-bold text-gray-900 text-sm">2-3 Days</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'track' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold font-display mb-6">Track Shipment</h3>
                  <div className="flex gap-4">
                    <input type="text" placeholder="Enter AWB or Order ID" className="flex-1 px-4 py-3 rounded border border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none" />
                    <button className="bg-[#0f172a] text-white px-8 font-bold rounded-sm hover:bg-gray-800 transition-colors">
                      Track
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Enterprise Solutions */}
          <div className="w-full md:w-1/3 bg-[#0f172a] rounded-xl shadow-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-display mb-4">Enterprise Solutions</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                High-volume shipping demands specialized architecture. Connect with our logistics engineers to build a custom routing and pricing model for your supply chain.
              </p>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-slate-700">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-sm font-bold">24/7 Dedicated Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Navigation className="w-4 h-4 text-red-500" />
                <span className="text-sm font-bold">API Integration Ready</span>
              </div>
              <button className="w-full mt-4 bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 rounded-sm transition-colors text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered for Efficiency */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black font-display text-[#0f172a] mb-4">Engineered for Efficiency</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">Our infrastructure is designed to minimize friction at every stage of the delivery lifecycle, ensuring your parcels reach their destination securely.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-[#0f172a]" />
            </div>
            <h4 className="font-bold text-xl text-[#0f172a] mb-3">Doorstep Pickup</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Schedule collections directly from your warehouse or storefront with precision time windows, reducing operational overhead.</p>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
              <Navigation className="w-5 h-5 text-[#0f172a]" />
            </div>
            <h4 className="font-bold text-xl text-[#0f172a] mb-3">Nationwide Delivery</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Access a vast, interconnected network spanning every zip code, ensuring consistent transit times regardless of destination.</p>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
              <CreditCard className="w-5 h-5 text-[#0f172a]" />
            </div>
            <h4 className="font-bold text-xl text-[#0f172a] mb-3">COD Delivery</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Secure end-to-end Cash on Delivery processing with automated remittance cycles to maintain healthy cash flow for your business.</p>
          </div>
        </div>
      </section>

      {/* How it Works - Vertical Stepper */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black font-display text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500">The lifecycle of an express parcel shipment.</p>
          </div>
          
          <div className="relative border-l-4 border-red-100 ml-6 md:ml-1/2 md:translate-x-[calc(50%-2px)] space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-center">
                <div className="absolute -left-[14px] md:-left-3 w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow-sm z-10"></div>
                <div className="ml-10 md:ml-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full md:w-[400px]">
                  <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
