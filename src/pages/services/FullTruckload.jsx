import React, { useEffect } from 'react';
import { Truck, Zap, ShieldCheck } from 'lucide-react';

export default function FullTruckload() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-fade-in font-sans bg-[#fafafa]">
      
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-[#c0122e] mb-6 font-display">
            Full Truckload (FTL)
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            The ultimate freight solution for large-scale logistics. Dedicated capacity, maximum security, and direct linehaul delivery.
          </p>
        </div>
        <div className="flex-1 w-full max-w-2xl mx-auto md:max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1506469717960-433cebe3f181?auto=format&fit=crop&q=80&w=1200" 
            alt="Full Truckload Freight" 
            className="w-full h-auto shadow-2xl rounded-sm object-cover"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><hr className="border-gray-200" /></div>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <Truck className="w-8 h-8 text-[#c0122e] mb-6" />
            <h4 className="font-bold text-gray-900 text-xl mb-4">Dedicated Capacity</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Your shipment has the entire truck to itself, ensuring maximum security and zero stops.
            </p>
          </div>

          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <Zap className="w-8 h-8 text-[#c0122e] mb-6" />
            <h4 className="font-bold text-gray-900 text-xl mb-4">Fast Transit</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Direct linehaul routes from pickup to destination for the fastest possible delivery times.
            </p>
          </div>

          <div className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col">
            <ShieldCheck className="w-8 h-8 text-[#c0122e] mb-6" />
            <h4 className="font-bold text-gray-900 text-xl mb-4">Superior Handling</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Reduced risk of damage with minimal handling and a dedicated vehicle for your cargo.
            </p>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><hr className="border-gray-200" /></div>

      {/* Process Steps */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center font-bold text-[#c0122e] text-lg mb-6 shadow-sm">
              01
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-4">Reserve</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              Secure a dedicated vehicle for your shipment on your preferred schedule.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center font-bold text-[#c0122e] text-lg mb-6 shadow-sm">
              02
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-4">Load</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              Full capacity loading at your facility with priority handling.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#c0122e] flex items-center justify-center font-bold text-white text-lg mb-6 shadow-md">
              03
            </div>
            <h4 className="font-bold text-gray-900 text-xl mb-4">Direct</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              Straight-to-destination transit with real-time GPS monitoring.
            </p>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><hr className="border-gray-200" /></div>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-10 font-display">Ready to scale your logistics?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#c0122e] text-white px-10 py-3 rounded-sm font-bold hover:bg-red-800 transition-colors w-full sm:w-auto shadow-md">
            Get a Quote
          </button>
          <button className="bg-white border-2 border-gray-800 text-gray-900 px-10 py-3 rounded-sm font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto">
            Contact Sales
          </button>
        </div>
      </section>

    </div>
  );
}
