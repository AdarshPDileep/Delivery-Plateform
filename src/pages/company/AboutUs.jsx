import React, { useEffect } from 'react';
import { 
  Building2, Globe2, Target, Network, Layers, 
  Smartphone, MapPin, Database, Zap, ArrowRight,
  TrendingUp, Users, Package, Map, CheckCircle2
} from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b-8 border-[#e31837] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-[#111111] to-[#111111] opacity-60"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide mb-8 border border-white/20">
            <Building2 className="w-4 h-4 text-[#e31837]" /> ABOUT COMMERZA GLOBAL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 max-w-4xl text-white">
            Building the Future of <span className="text-[#e31837]">Logistics</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl font-medium leading-relaxed">
            Commerza Global is building a technology-driven logistics network that connects businesses, franchise partners, delivery personnel, and customers through one unified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-900/50">
              Explore Our Network
            </button>
            <button className="bg-white/10 text-white px-8 py-4 font-bold rounded hover:bg-white/20 transition-colors border border-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are & Mission / Vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-flex flex-col">
                Who We Are
                <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Commerza Global is a technology-enabled logistics platform designed to optimize the movement of goods. We support sellers and businesses by operating a franchise-based network capable of executing seamless pickup and delivery operations.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#e31837]" /> Shipment Tracking</li>
                <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#e31837]" /> COD and Settlement Support</li>
                <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#e31837]" /> Data-Driven Operations</li>
                <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#e31837]" /> Common Logistics Ecosystem</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Target className="w-10 h-10 text-[#e31837] mb-6" />
                <h3 className="text-2xl font-black mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  To simplify logistics through technology, reliable operations, and a scalable partner network.
                </p>
              </div>
              <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800 text-white sm:translate-y-8">
                <Globe2 className="w-10 h-10 text-[#e31837] mb-6" />
                <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  To build an efficient and transparent logistics network that helps businesses move shipments with better visibility and control.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            What We Do
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <Package className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Express Parcel</h3>
              <p className="text-gray-600 text-sm font-medium">Reliable and rapid parcel pickup and delivery services across our service areas.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <Building2 className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ecommerce Logistics</h3>
              <p className="text-gray-600 text-sm font-medium">Dedicated shipping support, integrations, and fulfillment for online sellers.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <Network className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Franchise Network</h3>
              <p className="text-gray-600 text-sm font-medium">Empowering entrepreneurs with territory-based logistics operations and support.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <MapPin className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Last-Mile Delivery</h3>
              <p className="text-gray-600 text-sm font-medium">Efficient management of delivery personnel and local hyper-local delivery operations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <Map className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Shipment Tracking</h3>
              <p className="text-gray-600 text-sm font-medium">Providing end-to-end shipment visibility for both senders and recipients.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#e31837] hover:shadow-lg transition-all group">
              <Database className="w-10 h-10 text-gray-400 group-hover:text-[#e31837] transition-colors mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">COD Management</h3>
              <p className="text-gray-600 text-sm font-medium">Secure cash-on-delivery collection, tracking, and rapid settlement support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network Hierarchy */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-flex flex-col text-white">
                Our Network
                <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our operations are built on a highly organized geographical hierarchy. This structure ensures accountability, optimized routing, and efficient territory management at every level of the logistics chain.
              </p>
              
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col gap-2 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-gray-800">
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#e31837] flex items-center justify-center font-black text-xs shrink-0 shadow-[0_0_15px_rgba(227,24,55,0.5)]">1</div>
                    <p className="font-bold text-lg">State</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs shrink-0 text-gray-400 border border-gray-700">2</div>
                    <p className="font-bold text-gray-300">Zone</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs shrink-0 text-gray-400 border border-gray-700">3</div>
                    <p className="font-bold text-gray-300">District</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs shrink-0 text-gray-400 border border-gray-700">4</div>
                    <p className="font-bold text-gray-300">Taluk</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs shrink-0 text-gray-400 border border-gray-700">5</div>
                    <p className="font-bold text-gray-300">Town</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs shrink-0 text-gray-400 border border-gray-700">6</div>
                    <p className="font-bold text-gray-300">Pincode</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Ecosystem */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-300">Platform Ecosystem</h2>
              <div className="relative">
                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full max-w-[200px] max-h-[200px] border-2 border-dashed border-gray-700 rounded-full animate-[spin_60s_linear_infinite]"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-[#e31837] transition-colors">
                    <Building2 className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
                    <h3 className="font-bold text-sm text-white">Head Office / Super Admin</h3>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-[#e31837] transition-colors">
                    <Network className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
                    <h3 className="font-bold text-sm text-white">Franchise Partners</h3>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-[#e31837] transition-colors">
                    <Users className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
                    <h3 className="font-bold text-sm text-white">Sellers / Merchants</h3>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-[#e31837] transition-colors">
                    <Package className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
                    <h3 className="font-bold text-sm text-white">Delivery Personnel</h3>
                  </div>
                </div>
                
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center border-4 border-[#e31837] z-20 shadow-[0_0_20px_rgba(227,24,55,0.4)]">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Technology Stack
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Layers className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">React Web Applications</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Smartphone className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Mobile Delivery App</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <TrendingUp className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Real-Time Tracking</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Zap className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">API Integrations</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Target className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Barcode / QR</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Map className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Maps & Geocoding</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Database className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Reporting & Analytics</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <Globe2 className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <p className="font-bold text-sm text-gray-900">Notification Engine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commerza Global */}
      <section className="py-24 px-6 bg-red-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-10">Why Commerza Global</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Unified logistics platform</span>
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Scalable franchise network</span>
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Real-time visibility</span>
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Integrated COD workflow</span>
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Seller integrations</span>
            <span className="bg-white border border-red-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm">Territory-based operations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Move your business forward with Commerza Global.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Start Shipping
            </button>
            <button className="bg-white text-gray-900 border border-gray-300 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
