import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Network, Route, Users, Scan, LineChart } from 'lucide-react';

export default function DataIntelligence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: 'Address Standardization API',
      desc: 'Our APIs parse addresses, correct misspellings, format them into a standard syntax, and enrich them with location tags.',
      img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Address Validation API',
      desc: 'Verify if an address is real, deliverable and currently active to prevent failed deliveries and improve routing efficiency.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Geocoding API',
      desc: 'Convert standard text addresses into precise geographic coordinates (latitude/longitude) for accurate mapping.',
      img: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const capabilities = [
    { icon: <MapPin className="w-5 h-5" />, title: 'Intelligent geo-location' },
    { icon: <Network className="w-5 h-5" />, title: 'Network design' },
    { icon: <Route className="w-5 h-5" />, title: 'Route optimisation' },
    { icon: <Users className="w-5 h-5" />, title: 'Customer Intelligence' },
    { icon: <Scan className="w-5 h-5" />, title: 'Product Identification' },
    { icon: <LineChart className="w-5 h-5" />, title: 'RTO prediction' }
  ];

  const services = [
    {
      title: 'Express Parcel',
      desc: 'Through our nationwide network, we cover 18,500+ pin codes and provide seamless last-mile connectivity.',
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Warehousing',
      desc: 'We operate 40+ fully automated fulfillment centers across the country, enabled with cutting-edge technology.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Cross Border',
      desc: 'Our international supply chain solutions offer end-to-end global connectivity with seamless customs clearance.',
      img: 'https://images.unsplash.com/photo-1586528116493-a02826a7e588?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="w-full font-sans bg-white overflow-hidden text-[#111]">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[550px] bg-[#0a0f1a] flex items-center overflow-hidden">
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Decorative Map Pin (Abstract representation) */}
        <div className="absolute right-[10%] top-[20%] w-64 h-64 bg-[#e31837] rounded-full blur-[100px] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6">
              <span className="font-bold text-[#e31837]">Boost your business</span> with India's most accurate AI powered location stack
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-lg mb-10 leading-relaxed font-bold">
              Improve delivery success with deep insights from user-generated addresses.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded font-bold text-xs hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
              Product Tour <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom Red Square Accent */}
        <div className="absolute bottom-[-1px] left-[10%] w-8 h-8 bg-[#e31837] z-20"></div>
      </section>

      {/* Location Intelligence APIs */}
      <section className="relative w-full flex flex-col md:flex-row min-h-[400px]">
        {/* Left Side (White) */}
        <div className="flex-1 bg-white flex items-center py-20 px-6 lg:pl-[10%] lg:pr-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-black mb-1">Location Intelligence APIs</h2>
            <h2 className="text-3xl font-light text-black mb-8">by <span className="font-bold">Commerza</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Standardize, clean, and enrich address data entered by your users to enable faster checkouts, detect fraud, and reduce failed deliveries. 
              Our proprietary stack learns from millions of successful deliveries, fixing spelling errors, translating local context, and plotting exact points on a map.
            </p>
          </div>
        </div>

        {/* Right Side (Dark background with overlapping image) */}
        <div className="flex-1 bg-[#111] relative min-h-[300px] md:min-h-full py-20">
           {/* Overlapping Image Container */}
           <div className="absolute md:-left-24 top-1/2 -translate-y-1/2 w-[90%] md:w-[120%] max-w-xl h-[280px] z-10 mx-6 md:mx-0 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Tech Infrastructure" className="w-full h-full object-cover rounded shadow-2xl" />
             {/* Red Accent Square */}
             <div className="absolute top-1/4 -right-4 w-8 h-8 bg-[#e31837]"></div>
           </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-24 px-6 bg-[#f8f9fa] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-black mb-12">
            Our <span className="font-bold">Products</span>
            <div className="w-12 h-0.5 bg-[#e31837] mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {products.map((product, idx) => (
              <div key={idx} className="bg-transparent group relative">
                {/* Red square accent on first and last */}
                {idx === 0 && <div className="absolute -left-2 top-12 w-4 h-4 bg-[#e31837] z-10"></div>}
                {idx === 2 && <div className="absolute -right-2 bottom-20 w-4 h-4 bg-[#e31837] z-10"></div>}
                
                <div className="rounded overflow-hidden mb-6 h-48 border border-gray-100 shadow-sm relative">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h3 className="text-sm font-bold text-black mb-3">{product.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Capabilities */}
      <section className="py-24 px-6 bg-[#11141c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1 max-w-sm">
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">Machine Learning <br/><span className="font-light">capabilities enabling <br/>efficient operations</span></h2>
            <div className="w-12 h-0.5 bg-[#e31837] mt-6"></div>
          </div>
          
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="bg-[#1a1f2e] text-[#e31837] p-3 rounded-lg group-hover:bg-[#e31837] group-hover:text-white transition shadow-lg relative">
                  {/* Subtle red accent dot */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#e31837] rounded-full border border-[#1a1f2e]"></div>
                  {cap.icon}
                </div>
                <span className="text-white text-sm font-bold">{cap.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-light text-black mb-12">
            <span className="font-bold border-b-2 border-[#e31837] pb-1">Trusted</span> by
          </h2>
          
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60">
            {/* Using text representations since logos aren't readily available */}
            <span className="font-black text-2xl tracking-tighter text-[#00a699]">BharatPe</span>
            <span className="font-black text-2xl tracking-tight text-[#f43397]">meesho</span>
            <span className="font-black text-2xl tracking-widest text-[#a1c436]">LIMEROAD</span>
            <span className="font-bold text-xl tracking-tight text-blue-900 italic">DMI FINANCE</span>
            <span className="font-black text-3xl tracking-tighter text-black">UNI</span>
            <span className="font-bold text-2xl text-[#f3525a]">MYLO</span>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-24 px-6 bg-[#0a0f1a] text-center border-t border-gray-800 border-b-4 border-[#e31837]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-10 leading-snug">
            <span className="font-bold">Leverage Commerza's cutting edge technology</span> trained on data generated through the course of over 2 Billion successful deliveries across India
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded font-bold text-xs hover:bg-gray-100 transition shadow-lg">
            Speak to an expert →
          </button>
        </div>
      </section>

      {/* Explore other Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-black mb-12">
            Explore <span className="font-bold">other</span> <span className="font-bold">Services</span>
            <div className="w-12 h-0.5 bg-[#e31837] mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {services.map((service, idx) => (
              <div key={idx} className="bg-transparent group cursor-pointer relative">
                 {/* Red square accent on first and last */}
                 {idx === 0 && <div className="absolute -left-2 top-4 w-4 h-4 bg-[#e31837] z-10"></div>}
                 {idx === 2 && <div className="absolute -right-2 bottom-12 w-4 h-4 bg-[#e31837] z-10"></div>}
                 
                <div className="rounded overflow-hidden mb-6 h-56 relative shadow-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h3 className="text-sm font-bold text-black mb-2 group-hover:text-[#e31837] transition">{service.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
