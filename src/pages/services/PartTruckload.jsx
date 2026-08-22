import React, { useEffect } from 'react';
import { ArrowRight, PiggyBank, Maximize, MapPin, Truck } from 'lucide-react';

export default function PartTruckload() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-fade-in font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Part Truckload (PTL)
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Cost-effective freight solutions for shipments that do not require a full truck. Pay only for the space you use. Precision logistics for modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="bg-[#e31837] text-white px-8 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors w-full sm:w-auto justify-center">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded text-sm font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative">
              {/* Top Image part */}
              <div className="h-64 relative bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Delivery Truck" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom White Card */}
              <div className="p-8 text-center bg-white">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Why Choose Part Truckload (PTL)?</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Pay only for the space you use. Ideal for B2B distributors and manufacturers shipping medium-weight cargo.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fcfcfc] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <PiggyBank className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Cost Efficiency</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Optimize your logistics budget by paying strictly for the capacity your cargo occupies.
            </p>
          </div>
          <div className="bg-[#fcfcfc] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <Maximize className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Scalable Solutions</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Adaptable freight networks that grow seamlessly alongside your supply chain demands.
            </p>
          </div>
          <div className="bg-[#fcfcfc] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <MapPin className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Reliable Tracking</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enterprise-grade visibility into your shipments journey from dock to destination.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Process Section */}
      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Choose PTL?</h2>
            <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">
              Ideal for B2B distributors and manufacturers shipping medium-weight cargo. Bridge the gap between LTL and FTL with superior handling and transit times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gray-100 font-display">01</span>
                <h4 className="font-bold text-gray-900 text-xl">Book</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Specify your cargo dimensions and weight to secure exact capacity on our dedicated routes.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gray-100 font-display">02</span>
                <h4 className="font-bold text-gray-900 text-xl">Load</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Consolidated loading at origin facilities minimizes handling and reduces transit risk.
              </p>
            </div>
            
            <div className="bg-[#e31837] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <span className="text-5xl font-bold text-red-400 font-display">03</span>
                <h4 className="font-bold text-white text-xl">Deliver</h4>
              </div>
              <p className="text-red-100 text-sm leading-relaxed relative z-10">
                Direct linehaul to destination terminals ensuring expedited delivery schedules.
              </p>
              <Truck className="absolute -bottom-6 -right-6 w-32 h-32 text-black opacity-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="bg-[#f9f9f9] pb-20 px-6">
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-16">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            TRUSTED BY ENTERPRISE SUPPLY CHAINS
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 grayscale">
            {['AXIOM', 'NEXUS', 'VORTEX', 'STRATA'].map(logo => (
              <div key={logo} className="flex items-center gap-2 font-black text-xl tracking-tight text-gray-800">
                <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
