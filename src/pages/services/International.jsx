import React, { useEffect } from 'react';
import { ArrowRight, Globe2, ShieldCheck, Map, Plane } from 'lucide-react';

export default function International() {
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
            <div className="w-12 h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
              <Globe2 className="w-6 h-6 text-[#e31837]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              International
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Cross-border logistics made easy with our global network and customs expertise. Seamlessly connect your supply chain across borders.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                  alt="International Cargo Ship" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom White Card */}
              <div className="p-8 text-center bg-white">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Why Choose International?</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Take your business global. We handle the complexities of international shipping and customs compliance.
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
              <Plane className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Global Reach</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Access markets in over 220 countries and territories with our extensive network.
            </p>
          </div>
          <div className="bg-[#fcfcfc] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Customs Clearance</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Expert brokerage services to navigate complex international trade regulations smoothly.
            </p>
          </div>
          <div className="bg-[#fcfcfc] border border-gray-100 p-8">
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <Map className="w-5 h-5 text-[#e31837]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3">End-to-End Tracking</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full visibility across oceans and borders until final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Process Section */}
      <section className="bg-[#f9f9f9] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
            <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">
              Seamlessly ship your goods internationally with our simplified logistics process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gray-100 font-display">01</span>
                <h4 className="font-bold text-gray-900 text-xl">Prepare</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Generate documentation and schedule pickups for your international freight.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-gray-100 font-display">02</span>
                <h4 className="font-bold text-gray-900 text-xl">Transit</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Cargo moves via air or sea with automated milestone updates and customs clearance.
              </p>
            </div>
            
            <div className="bg-[#e31837] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <span className="text-5xl font-bold text-red-400 font-display">03</span>
                <h4 className="font-bold text-white text-xl">Deliver</h4>
              </div>
              <p className="text-red-100 text-sm leading-relaxed relative z-10">
                Final mile delivery to your international customers or distribution centers.
              </p>
              <Globe2 className="absolute -bottom-6 -right-6 w-32 h-32 text-black opacity-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
